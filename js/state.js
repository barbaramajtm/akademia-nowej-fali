/* ============================================================
   Akademia Nowej Fali — trwały stan aplikacji (localStorage)
   Jedno źródło prawdy dla postępu użytkowniczki.
   ============================================================ */
'use strict';

var STORAGE_KEY = 'akademia-nowefali-v1';

var appState = null;

function createDefaultState(){
  return {
    version: 1,
    user: {
      label: 'Uczennica',
      kosmyki: 1240,
      fala: 7,
      falaProgress: { current: 640, goal: 1000 },
      streakDays: 12
    },
    completedLessons: {},
    totalBadges: 11,
    collections: [
      {
        id: 'mistrzyni-koloru',
        name: 'Mistrzyni koloru',
        total: 5,
        earned: 3,
        earnedBadges: {},
        pendingBadge: { name: 'Detektyw koloru', lessonId: 'sprawa-pierwszej-koloryzacji' }
      }
    ]
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
      streakDays: typeof user.streakDays === 'number' ? user.streakDays : def.user.streakDays
    },
    completedLessons: raw.completedLessons && typeof raw.completedLessons === 'object'
      ? raw.completedLessons : {},
    totalBadges: typeof raw.totalBadges === 'number' ? raw.totalBadges : def.totalBadges,
    collections: collections.length ? collections : def.collections
  };
}

function loadState(){
  try {
    var raw = localStorage.getItem(STORAGE_KEY);
    if (!raw){
      appState = createDefaultState();
      return appState;
    }
    appState = normalizeState(JSON.parse(raw));
    return appState;
  } catch (e){
    console.warn('[Akademia Nowej Fali] Nie udało się wczytać stanu, używam domyślnego.', e);
    appState = createDefaultState();
    return appState;
  }
}

function saveState(){
  if (!appState) appState = createDefaultState();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
}

function completeLesson(payload){
  if (!appState) appState = loadState();
  if (!payload || !payload.lessonId) return;
  if (appState.completedLessons[payload.lessonId]) return;

  appState.completedLessons[payload.lessonId] = true;

  if (typeof payload.earnedKosmyki === 'number' && payload.earnedKosmyki > 0){
    appState.user.kosmyki += payload.earnedKosmyki;
  }

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

  saveState();
}

function resetProgress(){
  appState = createDefaultState();
  saveState();
  return appState;
}

function getAppState(){
  if (!appState) appState = loadState();
  return appState;
}

window.AppState = {
  createDefaultState: createDefaultState,
  loadState: loadState,
  saveState: saveState,
  completeLesson: completeLesson,
  resetProgress: resetProgress,
  get: getAppState,
  isCollectionBadgeEarned: function(collectionId, badgeName){
    var col = getCollectionFromState(getAppState(), collectionId);
    return hasCollectionBadge(col, badgeName);
  }
};

loadState();
