/* ============================================================
   Akademia Nowej Fali — trwały stan aplikacji (localStorage)
   Jedno źródło prawdy dla postępu użytkowniczki.
   Przy zalogowaniu: osobny klucz na konto. Gość: klucz legacy.
   ============================================================ */
'use strict';

var STORAGE_KEY_LEGACY = 'akademia-nowefali-v1';
var STORAGE_KEY_PREFIX = 'akademia-nowefali-user-';
var ACCOUNT_META_KEY = 'akademia-auth-active-account-v1';

var appState = null;
var activeAccountId = null; /* null = gość */

function storageKeyFor(accountId){
  if (accountId) return STORAGE_KEY_PREFIX + accountId;
  return STORAGE_KEY_LEGACY;
}

function createDefaultState(){
  return {
    version: 1,
    user: {
      label: 'Uczennica',
      kosmyki: 0,
      fala: 1,
      falaProgress: { current: 0, goal: 1000 },
      streakDays: 0,
      avatarId: 'blonde-sage'
    },
    completedLessons: {},
    totalBadges: 0,
    collections: [
      {
        id: 'mistrzyni-koloru',
        name: 'Mistrzyni koloru',
        total: 5,
        earned: 0,
        earnedBadges: {},
        pendingBadge: { name: 'Detektyw koloru', lessonId: 'sprawa-pierwszej-koloryzacji' }
      }
    ],
    achievements: {},
    stats: {
      bestScorePct: null,
      perfectLessons: 0,
      lastLessonDate: null
    },
    /* Błędy do powtórki po ukończeniu modułu: { [moduleId]: [items] } */
    moduleMistakeReviews: {}
  };
}

function getCollectionFromState(state, id){
  if (!state || !state.collections) return null;
  for (var i = 0; i < state.collections.length; i++){
    if (state.collections[i].id === id) return state.collections[i];
  }
  return null;
}

function hasCollectionBadge(col, badgeName){
  if (!col || !badgeName) return false;
  return !!(col.earnedBadges && col.earnedBadges[badgeName]);
}

function localDateKey(d){
  d = d || new Date();
  var y = d.getFullYear();
  var m = String(d.getMonth() + 1).padStart(2, '0');
  var day = String(d.getDate()).padStart(2, '0');
  return y + '-' + m + '-' + day;
}

function yesterdayKey(){
  var d = new Date();
  d.setDate(d.getDate() - 1);
  return localDateKey(d);
}

function normalizeAchievements(raw){
  var out = {};
  if (!raw || typeof raw !== 'object') return out;
  Object.keys(raw).forEach(function(id){
    var entry = raw[id];
    if (entry && typeof entry === 'object' && entry.earnedAt){
      out[id] = { earnedAt: String(entry.earnedAt) };
    } else if (entry === true){
      out[id] = { earnedAt: new Date().toISOString() };
    }
  });
  return out;
}

function normalizeStats(raw){
  var def = createDefaultState().stats;
  raw = raw && typeof raw === 'object' ? raw : {};
  return {
    bestScorePct: typeof raw.bestScorePct === 'number' ? raw.bestScorePct : def.bestScorePct,
    perfectLessons: typeof raw.perfectLessons === 'number' ? raw.perfectLessons : def.perfectLessons,
    lastLessonDate: typeof raw.lastLessonDate === 'string' ? raw.lastLessonDate : def.lastLessonDate
  };
}

function normalizeState(raw){
  var def = createDefaultState();
  if (!raw || typeof raw !== 'object') return def;

  var user = raw.user && typeof raw.user === 'object' ? raw.user : {};
  var falaProgress = user.falaProgress && typeof user.falaProgress === 'object'
    ? user.falaProgress : def.user.falaProgress;

  var collections = Array.isArray(raw.collections) ? raw.collections.map(function(col){
    var base = getCollectionFromState(def, col && col.id) || {};
    var pendingBadge = col.pendingBadge || base.pendingBadge || null;
    if (pendingBadge){
      if (pendingBadge.lessonId === 'sprawa-znikajacego-koloru' ||
          pendingBadge.lessonId === 'lesson-2-template'){
        pendingBadge = { name: pendingBadge.name || 'Detektyw koloru', lessonId: 'sprawa-pierwszej-koloryzacji' };
      }
    }
    return {
      id: col.id || base.id,
      name: col.name || base.name || '',
      total: typeof col.total === 'number' ? col.total : (base.total || 0),
      earned: typeof col.earned === 'number' ? col.earned : (base.earned || 0),
      earnedBadges: col.earnedBadges && typeof col.earnedBadges === 'object'
        ? col.earnedBadges : {},
      pendingBadge: pendingBadge
    };
  }) : def.collections;

  var totalBadges = typeof raw.totalBadges === 'number' ? raw.totalBadges : def.totalBadges;
  /* Stary seed marketingowy (11) bez realnych earnedBadges — nie zawyżaj Gablotki */
  if (totalBadges > 0){
    var hasAnyEarned = false;
    collections.forEach(function(c){
      if (c.earnedBadges && Object.keys(c.earnedBadges).length) hasAnyEarned = true;
    });
    var ach = normalizeAchievements(raw.achievements);
    if (Object.keys(ach).length) hasAnyEarned = true;
    if (!hasAnyEarned && totalBadges >= 11) totalBadges = 0;
  }

  return {
    version: 1,
    user: {
      label: typeof user.label === 'string' ? user.label : def.user.label,
      kosmyki: typeof user.kosmyki === 'number' ? user.kosmyki : def.user.kosmyki,
      fala: typeof user.fala === 'number' ? user.fala : def.user.fala,
      falaProgress: {
        current: typeof falaProgress.current === 'number' ? falaProgress.current : def.user.falaProgress.current,
        goal: typeof falaProgress.goal === 'number' ? falaProgress.goal : def.user.falaProgress.goal
      },
      streakDays: typeof user.streakDays === 'number' ? user.streakDays : def.user.streakDays,
      avatarId: typeof user.avatarId === 'string' ? user.avatarId : def.user.avatarId
    },
    completedLessons: raw.completedLessons && typeof raw.completedLessons === 'object'
      ? raw.completedLessons : {},
    totalBadges: totalBadges,
    collections: collections.length ? collections : def.collections,
    achievements: normalizeAchievements(raw.achievements),
    stats: normalizeStats(raw.stats),
    moduleMistakeReviews: normalizeModuleMistakeReviews(raw.moduleMistakeReviews)
  };
}

function normalizeModuleMistakeReviews(raw){
  var out = {};
  if (!raw || typeof raw !== 'object') return out;
  Object.keys(raw).forEach(function(moduleId){
    var list = raw[moduleId];
    if (!Array.isArray(list)) return;
    out[moduleId] = list.map(function(item){
      if (!item || typeof item !== 'object') return null;
      return {
        lessonId: String(item.lessonId || ''),
        lessonTitle: String(item.lessonTitle || ''),
        taskId: String(item.taskId || ''),
        question: String(item.question || ''),
        explanation: String(item.explanation || ''),
        correctSummary: String(item.correctSummary || ''),
        incorrectTitle: String(item.incorrectTitle || '')
      };
    }).filter(Boolean);
  });
  return out;
}

function readMeta(){
  try {
    var raw = localStorage.getItem(ACCOUNT_META_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e){
    return null;
  }
}

function writeMeta(accountId){
  if (!accountId){
    localStorage.removeItem(ACCOUNT_META_KEY);
    return;
  }
  localStorage.setItem(ACCOUNT_META_KEY, JSON.stringify({ accountId: accountId }));
}

function loadStateFromKey(key){
  try {
    var raw = localStorage.getItem(key);
    if (!raw) return null;
    return normalizeState(JSON.parse(raw));
  } catch (e){
    console.warn('[Akademia Nowej Fali] Nie udało się wczytać stanu.', e);
    return null;
  }
}

function loadState(){
  var key = storageKeyFor(activeAccountId);
  var loaded = loadStateFromKey(key);
  if (!loaded){
    appState = createDefaultState();
    return appState;
  }
  appState = loaded;
  return appState;
}

function saveState(){
  if (!appState) appState = createDefaultState();
  localStorage.setItem(storageKeyFor(activeAccountId), JSON.stringify(appState));
  if (window.Auth && window.Auth.syncUserStatsFromState){
    window.Auth.syncUserStatsFromState(appState);
  }
}

/**
 * Przełącza aktywne konto.
 * @param {string|null} accountId
 * @param {{fresh?:boolean,label?:string,guest?:boolean}} opts
 */
function bindAccount(accountId, opts){
  opts = opts || {};
  activeAccountId = accountId || null;
  writeMeta(activeAccountId);

  if (opts.fresh && accountId){
    appState = createDefaultState();
    if (opts.label) appState.user.label = opts.label;
    saveState();
    return appState;
  }

  loadState();
  if (opts.label && appState && appState.user){
    appState.user.label = opts.label;
    saveState();
  }
  return appState;
}

function peekUserProgress(accountId){
  if (!accountId) return null;
  var st = loadStateFromKey(storageKeyFor(accountId));
  if (!st) return { kosmyki: 0, completedCount: 0 };
  return {
    kosmyki: st.user.kosmyki || 0,
    completedCount: Object.keys(st.completedLessons || {}).length
  };
}

function updateStreakOnComplete(){
  if (!appState.stats) appState.stats = createDefaultState().stats;
  var today = localDateKey();
  var last = appState.stats.lastLessonDate;
  if (last === today) return;
  if (last === yesterdayKey()){
    appState.user.streakDays = (appState.user.streakDays || 0) + 1;
  } else if (!last){
    if ((appState.user.streakDays || 0) < 1) appState.user.streakDays = 1;
  } else {
    appState.user.streakDays = 1;
  }
  appState.stats.lastLessonDate = today;
}

function updateScoreStats(payload){
  if (!appState.stats) appState.stats = createDefaultState().stats;
  if (typeof payload.scorePct === 'number'){
    if (appState.stats.bestScorePct == null || payload.scorePct > appState.stats.bestScorePct){
      appState.stats.bestScorePct = payload.scorePct;
    }
  }
  var isPerfect = payload.scorePct === 100 && (payload.mistakes === 0 || payload.perfect === true);
  if (isPerfect){
    appState.stats.perfectLessons = (appState.stats.perfectLessons || 0) + 1;
  }
}

function awardAchievement(badgeId){
  if (!appState.achievements) appState.achievements = {};
  if (appState.achievements[badgeId] && appState.achievements[badgeId].earnedAt) return false;
  appState.achievements[badgeId] = { earnedAt: new Date().toISOString() };
  appState.totalBadges = (appState.totalBadges || 0) + 1;
  return true;
}

function syncAchievementsFromCatalog(){
  if (!window.BadgesCatalog) return [];
  var newly = [];
  var catalog = window.BadgesCatalog.CATALOG || [];
  var ctx = window.BadgesCatalog.buildContext(appState);
  catalog.forEach(function(badge){
    if (window.BadgesCatalog.isEarned(badge, appState, ctx)){
      if (awardAchievement(badge.id)) newly.push(badge.id);
    }
  });
  return newly;
}

function completeLesson(payload){
  if (!appState) appState = loadState();
  if (!payload || !payload.lessonId) return;
  if (appState.completedLessons[payload.lessonId]) return;

  appState.completedLessons[payload.lessonId] = true;

  if (typeof payload.earnedKosmyki === 'number' && payload.earnedKosmyki > 0){
    appState.user.kosmyki += payload.earnedKosmyki;
  }

  updateStreakOnComplete();
  updateScoreStats(payload);

  if (payload.collectionId){
    var col = getCollectionFromState(appState, payload.collectionId);
    if (col && typeof payload.earnedAfter === 'number'){
      col.earned = payload.earnedAfter;

      var badgeName = payload.badgeName;
      if (badgeName && col.earned >= col.total && !hasCollectionBadge(col, badgeName)){
        if (!col.earnedBadges) col.earnedBadges = {};
        col.earnedBadges[badgeName] = true;
        appState.totalBadges += 1;
      }
    }
  }

  syncAchievementsFromCatalog();
  saveState();
}

function appendModuleMistakeReviews(moduleId, items){
  if (!moduleId || !Array.isArray(items) || !items.length) return;
  if (!appState) appState = loadState();
  if (!appState.moduleMistakeReviews || typeof appState.moduleMistakeReviews !== 'object'){
    appState.moduleMistakeReviews = {};
  }
  var prev = Array.isArray(appState.moduleMistakeReviews[moduleId])
    ? appState.moduleMistakeReviews[moduleId] : [];
  var seen = {};
  prev.forEach(function(it){
    if (it && it.taskId) seen[it.lessonId + '::' + it.taskId] = true;
  });
  items.forEach(function(it){
    if (!it || !it.taskId) return;
    var key = (it.lessonId || '') + '::' + it.taskId;
    if (seen[key]) return;
    seen[key] = true;
    prev.push(it);
  });
  appState.moduleMistakeReviews[moduleId] = prev;
  saveState();
}

function getModuleMistakeReviews(moduleId){
  if (!appState) appState = loadState();
  if (!moduleId || !appState.moduleMistakeReviews) return [];
  var list = appState.moduleMistakeReviews[moduleId];
  return Array.isArray(list) ? list.slice() : [];
}

function clearModuleMistakeReviews(moduleId){
  if (!appState) appState = loadState();
  if (!appState.moduleMistakeReviews || !moduleId) return;
  delete appState.moduleMistakeReviews[moduleId];
  saveState();
}

function resetProgress(){
  appState = createDefaultState();
  var label = 'Uczennica';
  if (window.Auth && window.Auth.currentUser()){
    label = window.Auth.currentUser().displayName || label;
  }
  appState.user.label = label;
  appState.user.kosmyki = 0;
  appState.user.fala = 1;
  appState.user.falaProgress = { current: 0, goal: 1000 };
  appState.user.streakDays = 0;
  appState.collections = [{
    id: 'mistrzyni-koloru',
    name: 'Mistrzyni koloru',
    total: 5,
    earned: 0,
    earnedBadges: {},
    pendingBadge: { name: 'Detektyw koloru', lessonId: 'sprawa-pierwszej-koloryzacji' }
  }];
  appState.achievements = {};
  appState.stats = { bestScorePct: null, perfectLessons: 0, lastLessonDate: null };
  appState.moduleMistakeReviews = {};
  appState.totalBadges = 0;
  saveState();
  return appState;
}

function getAppState(){
  if (!appState) appState = loadState();
  return appState;
}

function initAccountFromSession(){
  activeAccountId = null;
  if (window.Auth && window.Auth.currentUser){
    var cu = window.Auth.currentUser();
    if (cu){
      activeAccountId = cu.id;
      writeMeta(activeAccountId);
      loadState();
      if (cu.displayName && appState && appState.user && appState.user.label === 'Uczennica'){
        appState.user.label = cu.displayName;
        saveState();
      }
      return;
    }
  }
  var meta = readMeta();
  if (meta && meta.accountId){
    activeAccountId = meta.accountId;
  }
  loadState();
}

window.AppState = {
  createDefaultState: createDefaultState,
  loadState: loadState,
  saveState: saveState,
  completeLesson: completeLesson,
  resetProgress: resetProgress,
  bindAccount: bindAccount,
  peekUserProgress: peekUserProgress,
  getActiveAccountId: function(){ return activeAccountId; },
  syncAchievements: function(){
    if (!appState) appState = loadState();
    var n = syncAchievementsFromCatalog();
    if (n.length) saveState();
    return n;
  },
  get: getAppState,
  setAvatarId: function(id){
    if (!appState) appState = loadState();
    if (!appState.user) appState.user = createDefaultState().user;
    appState.user.avatarId = String(id || 'blonde-sage');
    saveState();
  },
  isCollectionBadgeEarned: function(collectionId, badgeName){
    var col = getCollectionFromState(getAppState(), collectionId);
    return hasCollectionBadge(col, badgeName);
  },
  appendModuleMistakeReviews: appendModuleMistakeReviews,
  getModuleMistakeReviews: getModuleMistakeReviews,
  clearModuleMistakeReviews: clearModuleMistakeReviews
};

initAccountFromSession();
