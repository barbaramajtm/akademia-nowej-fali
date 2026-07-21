/* ============================================================
   Akademia Nowej Fali — konta uczennic (MVP lokalne)
   GitHub Pages nie ma backendu: konta i postęp na urządzeniu
   (localStorage). Adapter pod przyszły Firebase/Supabase.
   ============================================================ */
'use strict';

var USERS_KEY = 'akademia-auth-users-v1';
var SESSION_KEY = 'akademia-auth-session-v1';
var GUEST_MODE_KEY = 'akademia-auth-guest-v1';

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

function findUserByEmail(email){
  var norm = String(email || '').trim().toLowerCase();
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
  var out = new Uint8Array(hex.length / 2);
  for (var i = 0; i < out.length; i++){
    out[i] = parseInt(hex.substr(i * 2, 2), 16);
  }
  return out;
}

function hashPassword(password, saltHex){
  var enc = new TextEncoder();
  var salt = saltHex || bufToHex(crypto.getRandomValues(new Uint8Array(16)));
  /* Lokalne MVP: SHA-256(salt:password). Docelowy backend powinien używać Argon2/bcrypt po stronie serwera. */
  var data = enc.encode(salt + ':' + String(password || ''));
  return crypto.subtle.digest('SHA-256', data).then(function(bits){
    return { salt: salt, hash: bufToHex(bits) };
  });
}

function publicUser(u){
  if (!u) return null;
  return {
    id: u.id,
    email: u.email,
    displayName: u.displayName,
    createdAt: u.createdAt,
    consents: u.consents || {},
    kosmyki: typeof u.lastKosmyki === 'number' ? u.lastKosmyki : 0,
    completedCount: typeof u.lastCompletedCount === 'number' ? u.lastCompletedCount : 0
  };
}

function validateRegister(payload){
  var errors = [];
  var email = String(payload.email || '').trim().toLowerCase();
  var name = String(payload.displayName || '').trim();
  var pass = String(payload.password || '');

  if (!name || name.length < 2) errors.push('Podaj imię (min. 2 znaki).');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Podaj prawidłowy adres e-mail.');
  if (pass.length < 8) errors.push('Hasło musi mieć co najmniej 8 znaków.');
  if (!payload.consentPrivacy) errors.push('Wymagana jest zgoda na Politykę prywatności (RODO).');
  if (!payload.consentTerms) errors.push('Wymagana jest akceptacja Regulaminu.');
  if (!payload.consentAge) errors.push('Wymagane jest potwierdzenie wieku (16+) lub zgody opiekuna.');
  if (findUserByEmail(email)) errors.push('Konto z tym e-mailem już istnieje.');
  return { ok: errors.length === 0, errors: errors, email: email, displayName: name, password: pass };
}

function register(payload){
  var v = validateRegister(payload || {});
  if (!v.ok){
    return Promise.resolve({ ok: false, errors: v.errors });
  }
  return hashPassword(v.password).then(function(ph){
    var user = {
      id: uid(),
      email: v.email,
      displayName: v.displayName,
      passwordSalt: ph.salt,
      passwordHash: ph.hash,
      createdAt: new Date().toISOString(),
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
    setSession(user.id);
    if (window.AppState && window.AppState.bindAccount){
      window.AppState.bindAccount(user.id, { fresh: true, label: user.displayName });
    }
    return { ok: true, user: publicUser(user) };
  }).catch(function(e){
    console.warn('[Auth] Rejestracja nie powiodła się.', e);
    return { ok: false, errors: ['Nie udało się utworzyć konta. Spróbuj ponownie.'] };
  });
}

function login(email, password){
  var user = findUserByEmail(email);
  if (!user){
    return Promise.resolve({ ok: false, errors: ['Nieprawidłowy e-mail lub hasło.'] });
  }
  return hashPassword(String(password || ''), user.passwordSalt).then(function(ph){
    if (ph.hash !== user.passwordHash){
      return { ok: false, errors: ['Nieprawidłowy e-mail lub hasło.'] };
    }
    setGuestMode(false);
    setSession(user.id);
    if (window.AppState && window.AppState.bindAccount){
      window.AppState.bindAccount(user.id, { fresh: false, label: user.displayName });
    }
    return { ok: true, user: publicUser(user) };
  }).catch(function(e){
    console.warn('[Auth] Logowanie nie powiodło się.', e);
    return { ok: false, errors: ['Nie udało się zalogować. Spróbuj ponownie.'] };
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
  return publicUser(findUserById(s.userId));
}

function isLoggedIn(){
  return !!currentUser();
}

function needsAuthGate(){
  if (window.AdminMode && window.AdminMode.isActive()) return false;
  if (isLoggedIn()) return false;
  if (isGuestMode()) return false;
  return true;
}

function listUsersForAdmin(){
  return loadUsers().map(function(u){
    var pub = publicUser(u);
    /* Wzbogać o bieżący postęp z AppState, jeśli dostępny */
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
  /* Dokumentacja podejścia dla właściciela projektu */
  backendNote:
    'MVP lokalne (localStorage). Na GitHub Pages bez backendu konta nie synchronizują się między urządzeniami. Docelowo: Firebase Auth + Firestore lub Supabase.'
};
