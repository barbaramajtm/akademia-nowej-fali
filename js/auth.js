/* ============================================================
   Akademia Nowej Fali — konta uczennic (MVP lokalne)
   GitHub Pages nie ma backendu: konta i postęp na urządzeniu
   (localStorage). Adapter pod przyszły Firebase/Supabase.
   ============================================================ */
'use strict';

var USERS_KEY = 'akademia-auth-users-v1';
var SESSION_KEY = 'akademia-auth-session-v1';
var GUEST_MODE_KEY = 'akademia-auth-guest-v1';

/** Aktualny schemat hasła (po migracji z PBKDF2). */
var HASH_ALGO_V1 = 'sha256-v1';
/** Legacy — konta utworzone przed przełączeniem na SHA-256. */
var HASH_ALGO_LEGACY = 'pbkdf2-v0';

function uid(){
  return 'u_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 9);
}

function loadUsers(){
  try {
    var raw = localStorage.getItem(USERS_KEY);
    if (!raw) return [];
    var list = JSON.parse(raw);
    return Array.isArray(list) ? list : [];
  } catch (e){
    console.warn('[Auth] Nie udało się wczytać listy kont.', e);
    return [];
  }
}

function saveUsers(list){
  localStorage.setItem(USERS_KEY, JSON.stringify(list));
}

function updateUserRecord(userId, mutator){
  var users = loadUsers();
  for (var i = 0; i < users.length; i++){
    if (users[i].id === userId){
      mutator(users[i]);
      saveUsers(users);
      return users[i];
    }
  }
  return null;
}

function getSession(){
  try {
    var raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    var s = JSON.parse(raw);
    if (!s || !s.userId) return null;
    return s;
  } catch (e){
    return null;
  }
}

function setSession(userId){
  if (!userId){
    localStorage.removeItem(SESSION_KEY);
    return;
  }
  localStorage.setItem(SESSION_KEY, JSON.stringify({ userId: userId, at: new Date().toISOString() }));
}

function isGuestMode(){
  return localStorage.getItem(GUEST_MODE_KEY) === '1';
}

function setGuestMode(on){
  if (on) localStorage.setItem(GUEST_MODE_KEY, '1');
  else localStorage.removeItem(GUEST_MODE_KEY);
}

function normalizeEmail(email){
  return String(email || '').trim().toLowerCase();
}

function findUserByEmail(email){
  var norm = normalizeEmail(email);
  var users = loadUsers();
  for (var i = 0; i < users.length; i++){
    if (users[i].email === norm) return users[i];
  }
  return null;
}

function findUserById(id){
  var users = loadUsers();
  for (var i = 0; i < users.length; i++){
    if (users[i].id === id) return users[i];
  }
  return null;
}

function bufToHex(buf){
  return Array.from(new Uint8Array(buf)).map(function(b){
    return b.toString(16).padStart(2, '0');
  }).join('');
}

function hexToBuf(hex){
  var s = String(hex || '');
  if (s.length % 2 !== 0) return null;
  var out = new Uint8Array(s.length / 2);
  for (var i = 0; i < out.length; i++){
    var n = parseInt(s.substr(i * 2, 2), 16);
    if (isNaN(n)) return null;
    out[i] = n;
  }
  return out;
}

function randomCode(digits){
  digits = digits || 6;
  var max = Math.pow(10, digits);
  var n = crypto.getRandomValues(new Uint32Array(1))[0] % max;
  return String(n).padStart(digits, '0');
}

function ensureCrypto(){
  if (!window.crypto || !window.crypto.subtle){
    return Promise.reject(new Error('Brak Web Crypto (wymagany HTTPS lub localhost).'));
  }
  return Promise.resolve();
}

/** Aktualny hash: SHA-256(saltHex + ':' + password) */
function hashPasswordSha256(password, saltHex){
  var enc = new TextEncoder();
  var salt = saltHex || bufToHex(crypto.getRandomValues(new Uint8Array(16)));
  var data = enc.encode(salt + ':' + String(password || ''));
  return crypto.subtle.digest('SHA-256', data).then(function(bits){
    return { salt: salt, hash: bufToHex(bits), algo: HASH_ALGO_V1 };
  });
}

/** Legacy PBKDF2 — tylko weryfikacja / migracja starych kont */
function hashPasswordPbkdf2(password, saltHex){
  var enc = new TextEncoder();
  var saltBuf = saltHex ? hexToBuf(saltHex) : crypto.getRandomValues(new Uint8Array(16));
  if (!saltBuf) return Promise.reject(new Error('Nieprawidłowa sól hasła.'));
  return crypto.subtle.importKey(
    'raw',
    enc.encode(String(password || '')),
    'PBKDF2',
    false,
    ['deriveBits']
  ).then(function(key){
    return crypto.subtle.deriveBits(
      { name: 'PBKDF2', salt: saltBuf, iterations: 100000, hash: 'SHA-256' },
      key,
      256
    );
  }).then(function(bits){
    return {
      salt: saltHex || bufToHex(saltBuf),
      hash: bufToHex(bits),
      algo: HASH_ALGO_LEGACY
    };
  });
}

function hashPassword(password, saltHex, algo){
  return ensureCrypto().then(function(){
    if (algo === HASH_ALGO_LEGACY) return hashPasswordPbkdf2(password, saltHex);
    return hashPasswordSha256(password, saltHex);
  });
}

function passwordsMatch(a, b){
  return String(a || '') === String(b || '');
}

/**
 * Weryfikuje hasło; przy sukcesie legacy migruje konto do sha256-v1.
 * @returns {Promise<{ok:boolean, migrated?:boolean, reason?:string}>}
 */
function verifyAndMaybeMigratePassword(user, password){
  if (!user || !user.passwordHash || !user.passwordSalt){
    return Promise.resolve({ ok: false, reason: 'corrupt' });
  }
  var pass = String(password || '');
  /*
   * Algorytm:
   * - sha256-v1 → tylko SHA-256 (bez wolnego PBKDF2 przy złym haśle)
   * - pbkdf2-v0 → PBKDF2, potem migracja do sha256-v1
   * - brak pola (konta sprzed oznaczenia) → najpierw SHA-256, przy miss spróbuj legacy PBKDF2
   */
  var algo = user.passwordAlgo;

  function tryAlgo(name){
    return hashPassword(pass, user.passwordSalt, name).then(function(ph){
      return ph.hash === user.passwordHash ? { ok: true, algo: name } : { ok: false };
    }).catch(function(){
      return { ok: false };
    });
  }

  function migrateLegacyToV1(){
    return hashPasswordSha256(pass).then(function(ph){
      updateUserRecord(user.id, function(u){
        u.passwordSalt = ph.salt;
        u.passwordHash = ph.hash;
        u.passwordAlgo = HASH_ALGO_V1;
      });
      return { ok: true, migrated: true };
    });
  }

  if (algo === HASH_ALGO_V1){
    return tryAlgo(HASH_ALGO_V1).then(function(res){
      return res.ok ? { ok: true, migrated: false } : { ok: false, reason: 'mismatch' };
    });
  }

  if (algo === HASH_ALGO_LEGACY){
    return tryAlgo(HASH_ALGO_LEGACY).then(function(res){
      if (!res.ok) return { ok: false, reason: 'mismatch' };
      return migrateLegacyToV1();
    });
  }

  /* Nieoznaczone konto: SHA-256, potem ewentualnie legacy */
  return tryAlgo(HASH_ALGO_V1).then(function(first){
    if (first.ok){
      updateUserRecord(user.id, function(u){ u.passwordAlgo = HASH_ALGO_V1; });
      return { ok: true, migrated: false };
    }
    return tryAlgo(HASH_ALGO_LEGACY).then(function(second){
      if (!second.ok) return { ok: false, reason: 'mismatch' };
      return migrateLegacyToV1();
    });
  });
}

function isEmailVerified(u){
  if (!u) return false;
  /* Stare konta bez pola — nie blokujemy (migracja). */
  if (typeof u.emailVerified !== 'boolean') return true;
  return !!u.emailVerified;
}

function publicUser(u){
  if (!u) return null;
  return {
    id: u.id,
    email: u.email,
    displayName: u.displayName,
    createdAt: u.createdAt,
    consents: u.consents || {},
    emailVerified: isEmailVerified(u),
    kosmyki: typeof u.lastKosmyki === 'number' ? u.lastKosmyki : 0,
    completedCount: typeof u.lastCompletedCount === 'number' ? u.lastCompletedCount : 0
  };
}

function validateRegister(payload){
  var errors = [];
  var email = normalizeEmail(payload.email);
  var name = String(payload.displayName || '').trim();
  var pass = String(payload.password || '');
  var pass2 = String(payload.passwordConfirm != null ? payload.passwordConfirm : payload.password || '');

  if (!name || name.length < 2) errors.push('Podaj imię (min. 2 znaki).');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Podaj prawidłowy adres e-mail.');
  if (pass.length < 8) errors.push('Hasło musi mieć co najmniej 8 znaków.');
  if (!passwordsMatch(pass, pass2)) errors.push('Hasła nie są takie same.');
  if (!payload.consentPrivacy) errors.push('Wymagana jest zgoda na Politykę prywatności (RODO).');
  if (!payload.consentTerms) errors.push('Wymagana jest akceptacja Regulaminu.');
  if (!payload.consentAge) errors.push('Wymagane jest potwierdzenie wieku (16+) lub zgody opiekuna.');
  if (findUserByEmail(email)) errors.push('Konto z tym e-mailem już istnieje na tym urządzeniu.');
  return { ok: errors.length === 0, errors: errors, email: email, displayName: name, password: pass };
}

function hashOpaqueCode(code, saltHex){
  return hashPasswordSha256(String(code || ''), saltHex);
}

function register(payload){
  var v = validateRegister(payload || {});
  if (!v.ok){
    return Promise.resolve({ ok: false, errors: v.errors });
  }
  var verifyCode = randomCode(6);
  return hashPassword(v.password).then(function(ph){
    return hashOpaqueCode(verifyCode).then(function(vh){
      var user = {
        id: uid(),
        email: v.email,
        displayName: v.displayName,
        passwordSalt: ph.salt,
        passwordHash: ph.hash,
        passwordAlgo: HASH_ALGO_V1,
        createdAt: new Date().toISOString(),
        emailVerified: false,
        emailVerifySalt: vh.salt,
        emailVerifyHash: vh.hash,
        emailVerifyExpiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
        consents: {
          privacy: true,
          terms: true,
          ageOrGuardian: true,
          marketing: !!payload.consentMarketing,
          at: new Date().toISOString()
        },
        lastKosmyki: 0,
        lastCompletedCount: 0
      };
      var users = loadUsers();
      users.push(user);
      saveUsers(users);
      setGuestMode(false);
      /* Sesja dopiero po potwierdzeniu e-maila — konto nie jest w pełni używalne. */
      setSession(null);
      return {
        ok: true,
        needsEmailVerification: true,
        /* Tryb lokalny: NIE wysyłamy e-maila. Kod pokazujemy raz w UI. */
        emailDelivery: 'local-display',
        verificationCode: verifyCode,
        user: publicUser(user),
        notice: 'W trybie lokalnym (bez serwera poczty) nie wysyłamy e-maili. Zapisz kod potwierdzenia wyświetlony na ekranie.'
      };
    });
  }).catch(function(e){
    console.warn('[Auth] Rejestracja nie powiodła się.', e);
    return { ok: false, errors: ['Nie udało się utworzyć konta. Spróbuj ponownie.'] };
  });
}

function completeEmailVerification(email, code){
  var user = findUserByEmail(email);
  if (!user){
    return Promise.resolve({ ok: false, errors: ['Nie znaleziono konta z tym e-mailem na tym urządzeniu.'] });
  }
  if (isEmailVerified(user)){
    setGuestMode(false);
    setSession(user.id);
    if (window.AppState && window.AppState.bindAccount){
      window.AppState.bindAccount(user.id, { fresh: false, label: user.displayName });
    }
    return Promise.resolve({ ok: true, user: publicUser(user), alreadyVerified: true });
  }
  if (!user.emailVerifyHash || !user.emailVerifySalt){
    return Promise.resolve({ ok: false, errors: ['Brak aktywnego kodu potwierdzenia. Wygeneruj nowy kod.'] });
  }
  if (user.emailVerifyExpiresAt && new Date(user.emailVerifyExpiresAt).getTime() < Date.now()){
    return Promise.resolve({ ok: false, errors: ['Kod wygasł. Wygeneruj nowy kod potwierdzenia.'] });
  }
  return hashOpaqueCode(String(code || '').trim(), user.emailVerifySalt).then(function(vh){
    if (vh.hash !== user.emailVerifyHash){
      return { ok: false, errors: ['Nieprawidłowy kod potwierdzenia.'] };
    }
    updateUserRecord(user.id, function(u){
      u.emailVerified = true;
      u.emailVerifyHash = null;
      u.emailVerifySalt = null;
      u.emailVerifyExpiresAt = null;
      u.emailVerifiedAt = new Date().toISOString();
    });
    setGuestMode(false);
    setSession(user.id);
    if (window.AppState && window.AppState.bindAccount){
      window.AppState.bindAccount(user.id, { fresh: true, label: user.displayName });
    }
    return { ok: true, user: publicUser(findUserById(user.id)) };
  }).catch(function(e){
    console.warn('[Auth] Potwierdzenie e-maila nie powiodło się.', e);
    return { ok: false, errors: ['Nie udało się potwierdzić e-maila. Spróbuj ponownie.'] };
  });
}

function resendVerificationCode(email){
  var user = findUserByEmail(email);
  if (!user){
    return Promise.resolve({ ok: false, errors: ['Nie znaleziono konta z tym e-mailem na tym urządzeniu.'] });
  }
  if (isEmailVerified(user)){
    return Promise.resolve({ ok: true, alreadyVerified: true, user: publicUser(user) });
  }
  var code = randomCode(6);
  return hashOpaqueCode(code).then(function(vh){
    updateUserRecord(user.id, function(u){
      u.emailVerifySalt = vh.salt;
      u.emailVerifyHash = vh.hash;
      u.emailVerifyExpiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
    });
    return {
      ok: true,
      emailDelivery: 'local-display',
      verificationCode: code,
      notice: 'Nowy kod (tryb lokalny — nie wysyłamy e-maila). Zapisz go z ekranu.'
    };
  }).catch(function(){
    return { ok: false, errors: ['Nie udało się wygenerować kodu.'] };
  });
}

function login(email, password){
  var user = findUserByEmail(email);
  if (!user){
    return Promise.resolve({
      ok: false,
      errors: [
        'Nie znaleziono konta z tym e-mailem na tym urządzeniu. Konta są lokalne (ta przeglądarka) — zaloguj się tam, gdzie zakładałaś konto, albo zarejestruj się ponownie tutaj.'
      ]
    });
  }
  return verifyAndMaybeMigratePassword(user, password).then(function(res){
    if (!res.ok){
      if (res.reason === 'corrupt'){
        return {
          ok: false,
          errors: ['To konto ma uszkodzone dane logowania (np. po zmianie schematu hasła). Użyj „Zresetuj hasło” albo załóż konto ponownie na tym urządzeniu.']
        };
      }
      return { ok: false, errors: ['Nieprawidłowe hasło.'] };
    }
    user = findUserById(user.id) || user;
    if (!isEmailVerified(user)){
      setSession(null);
      setGuestMode(false);
      return {
        ok: false,
        needsEmailVerification: true,
        email: user.email,
        errors: ['Najpierw potwierdź adres e-mail (kod z rejestracji). Bez potwierdzenia konto nie jest aktywne.']
      };
    }
    setGuestMode(false);
    setSession(user.id);
    if (window.AppState && window.AppState.bindAccount){
      window.AppState.bindAccount(user.id, { fresh: false, label: user.displayName });
    }
    return { ok: true, user: publicUser(user), migratedPassword: !!res.migrated };
  }).catch(function(e){
    console.warn('[Auth] Logowanie nie powiodło się.', e);
    return { ok: false, errors: ['Nie udało się zalogować. Spróbuj ponownie.'] };
  });
}

/**
 * Reset hasła w trybie lokalnym — NIE wysyła e-maila.
 * Zwraca kod do wyświetlenia na ekranie, jeśli konto istnieje na tym urządzeniu.
 */
function requestPasswordReset(email){
  var user = findUserByEmail(email);
  if (!user){
    return Promise.resolve({
      ok: false,
      errors: [
        'Nie znaleziono konta z tym e-mailem na tym urządzeniu. Reset działa tylko lokalnie — bez serwera poczty nie wysyłamy wiadomości e-mail.'
      ]
    });
  }
  var code = randomCode(6);
  return hashOpaqueCode(code).then(function(vh){
    updateUserRecord(user.id, function(u){
      u.resetSalt = vh.salt;
      u.resetHash = vh.hash;
      u.resetExpiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();
    });
    return {
      ok: true,
      emailDelivery: 'local-display',
      resetCode: code,
      email: user.email,
      notice: 'Tryb lokalny: nie wysyłamy e-maili. Poniższy kod resetu pokażemy tylko raz na tym ekranie.'
    };
  }).catch(function(){
    return { ok: false, errors: ['Nie udało się przygotować resetu hasła.'] };
  });
}

function resetPassword(payload){
  payload = payload || {};
  var email = normalizeEmail(payload.email);
  var code = String(payload.code || '').trim();
  var pass = String(payload.password || '');
  var pass2 = String(payload.passwordConfirm != null ? payload.passwordConfirm : '');
  var errors = [];
  if (!email) errors.push('Podaj e-mail.');
  if (!code) errors.push('Podaj kod resetu.');
  if (pass.length < 8) errors.push('Hasło musi mieć co najmniej 8 znaków.');
  if (!passwordsMatch(pass, pass2)) errors.push('Hasła nie są takie same.');
  if (errors.length) return Promise.resolve({ ok: false, errors: errors });

  var user = findUserByEmail(email);
  if (!user){
    return Promise.resolve({ ok: false, errors: ['Nie znaleziono konta na tym urządzeniu.'] });
  }
  if (!user.resetHash || !user.resetSalt){
    return Promise.resolve({ ok: false, errors: ['Brak aktywnego kodu resetu. Poproś o nowy kod.'] });
  }
  if (user.resetExpiresAt && new Date(user.resetExpiresAt).getTime() < Date.now()){
    return Promise.resolve({ ok: false, errors: ['Kod resetu wygasł. Poproś o nowy.'] });
  }
  return hashOpaqueCode(code, user.resetSalt).then(function(ch){
    if (ch.hash !== user.resetHash){
      return { ok: false, errors: ['Nieprawidłowy kod resetu.'] };
    }
    return hashPassword(pass).then(function(ph){
      updateUserRecord(user.id, function(u){
        u.passwordSalt = ph.salt;
        u.passwordHash = ph.hash;
        u.passwordAlgo = HASH_ALGO_V1;
        u.resetHash = null;
        u.resetSalt = null;
        u.resetExpiresAt = null;
        /* Po resecie uznajemy e-mail za potwierdzony na tym urządzeniu. */
        u.emailVerified = true;
        u.emailVerifyHash = null;
        u.emailVerifySalt = null;
        u.emailVerifyExpiresAt = null;
      });
      setGuestMode(false);
      setSession(user.id);
      if (window.AppState && window.AppState.bindAccount){
        window.AppState.bindAccount(user.id, { fresh: false, label: user.displayName });
      }
      return { ok: true, user: publicUser(findUserById(user.id)) };
    });
  }).catch(function(e){
    console.warn('[Auth] Reset hasła nie powiódł się.', e);
    return { ok: false, errors: ['Nie udało się zresetować hasła.'] };
  });
}

function logout(){
  setSession(null);
  if (window.AppState && window.AppState.bindAccount){
    window.AppState.bindAccount(null, { guest: true });
  }
}

function continueAsGuest(){
  setSession(null);
  setGuestMode(true);
  if (window.AppState && window.AppState.bindAccount){
    window.AppState.bindAccount(null, { guest: true });
  }
}

function currentUser(){
  var s = getSession();
  if (!s) return null;
  var u = findUserById(s.userId);
  if (!u) return null;
  if (!isEmailVerified(u)){
    /* Sesja bez weryfikacji nie daje pełnego dostępu. */
    return null;
  }
  return publicUser(u);
}

function isLoggedIn(){
  return !!currentUser();
}

function needsAuthGate(){
  /* Tylko odblokowany tryb admina omija bramkę auth — samo ?admin=1 już nie. */
  try {
    if (window.AdminMode && window.AdminMode.isActive()) return false;
  } catch (e){ /* ignore */ }
  if (isLoggedIn()) return false;
  if (isGuestMode()) return false;
  return true;
}

function listUsersForAdmin(){
  return loadUsers().map(function(u){
    var pub = publicUser(u);
    if (window.AppState && window.AppState.peekUserProgress){
      var peek = window.AppState.peekUserProgress(u.id);
      if (peek){
        pub.kosmyki = peek.kosmyki;
        pub.completedCount = peek.completedCount;
      }
    }
    return pub;
  });
}

function syncUserStatsFromState(state){
  var s = getSession();
  if (!s || !state || !state.user) return;
  var users = loadUsers();
  var changed = false;
  for (var i = 0; i < users.length; i++){
    if (users[i].id === s.userId){
      users[i].lastKosmyki = state.user.kosmyki || 0;
      users[i].lastCompletedCount = Object.keys(state.completedLessons || {}).length;
      users[i].displayName = state.user.label || users[i].displayName;
      changed = true;
      break;
    }
  }
  if (changed) saveUsers(users);
}

window.Auth = {
  register: register,
  login: login,
  logout: logout,
  continueAsGuest: continueAsGuest,
  currentUser: currentUser,
  isLoggedIn: isLoggedIn,
  isGuestMode: isGuestMode,
  needsAuthGate: needsAuthGate,
  listUsersForAdmin: listUsersForAdmin,
  syncUserStatsFromState: syncUserStatsFromState,
  completeEmailVerification: completeEmailVerification,
  resendVerificationCode: resendVerificationCode,
  requestPasswordReset: requestPasswordReset,
  resetPassword: resetPassword,
  /* Dokumentacja podejścia dla właściciela projektu */
  backendNote:
    'MVP lokalne (localStorage). Na GitHub Pages bez backendu konta nie synchronizują się między urządzeniami i nie wysyłamy e-maili. Potwierdzenie e-maila / reset hasła działają przez kod pokazany na ekranie. Docelowo: Firebase Auth (e-mail/hasło + verify + reset) albo Supabase — wymaga projektu i publicznego configu właścicielki.',
  emailBackend: 'local-display'
};
