/* ============================================================
   Akademia Nowej Fali — katalog lekcji (metadane UI, bez treści)
   Nowa lekcja = wpis tutaj + plik JSON w /lessons/.
   ============================================================ */
'use strict';

window.LessonsCatalog = [
  {
    id: 'ph-co-oznacza-ph',
    moduleId: 'ph',
    title: 'Co oznacza pH?',
    moduleTitle: 'pH we fryzjerstwie',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: false
  },
  {
    id: 'ph-jak-wplywa-na-wlos',
    moduleId: 'ph',
    title: 'Jak pH wpływa na włos?',
    moduleTitle: 'pH we fryzjerstwie',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'ph-co-oznacza-ph',
    lockedReason: 'Najpierw ukończ: Co oznacza pH?'
  },
  {
    id: 'ph-preparaty-fryzjerskie',
    moduleId: 'ph',
    title: 'Jakie pH mają preparaty fryzjerskie?',
    moduleTitle: 'pH we fryzjerstwie',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'ph-jak-wplywa-na-wlos',
    lockedReason: 'Najpierw ukończ: Jak pH wpływa na włos?'
  },
  {
    id: 'ph-przywracanie-ph-po-zabiegu',
    moduleId: 'ph',
    title: 'Dlaczego po zabiegu trzeba przywrócić właściwe pH?',
    moduleTitle: 'pH we fryzjerstwie',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'ph-preparaty-fryzjerskie',
    lockedReason: 'Najpierw ukończ: Jakie pH mają preparaty fryzjerskie?'
  },
  {
    id: 'ph-koloryzacja',
    moduleId: 'ph',
    title: 'pH podczas koloryzacji',
    moduleTitle: 'pH we fryzjerstwie',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'ph-przywracanie-ph-po-zabiegu',
    lockedReason: 'Najpierw ukończ: Dlaczego po zabiegu trzeba przywrócić właściwe pH?'
  },
  {
    id: 'ph-rozjasnianie',
    moduleId: 'ph',
    title: 'pH podczas rozjaśniania',
    moduleTitle: 'pH we fryzjerstwie',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'ph-koloryzacja',
    lockedReason: 'Najpierw ukończ: pH podczas koloryzacji'
  },
  {
    id: 'ph-szampony',
    moduleId: 'ph',
    title: 'pH szamponów',
    moduleTitle: 'pH we fryzjerstwie',
    moduleSubtitle: 'Pielęgnacja',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'ph-rozjasnianie',
    lockedReason: 'Najpierw ukończ: pH podczas rozjaśniania'
  },
  {
    id: 'ph-odzywki-i-maski',
    moduleId: 'ph',
    title: 'pH odżywek i masek',
    moduleTitle: 'pH we fryzjerstwie',
    moduleSubtitle: 'Pielęgnacja',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'ph-szampony',
    lockedReason: 'Najpierw ukończ: pH szamponów'
  },
  {
    id: 'ph-produkty-zakwaszajace',
    moduleId: 'ph',
    title: 'pH produktów zakwaszających',
    moduleTitle: 'pH we fryzjerstwie',
    moduleSubtitle: 'Pielęgnacja',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'ph-odzywki-i-maski',
    lockedReason: 'Najpierw ukończ: pH odżywek i masek'
  },
  {
    id: 'ph-podsumowanie-modulu',
    moduleId: 'ph',
    title: 'Podsumowanie modułu pH',
    moduleTitle: 'pH we fryzjerstwie',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'ph-produkty-zakwaszajace',
    lockedReason: 'Najpierw ukończ: pH produktów zakwaszających'
  },
  {
    id: 'wlos-z-czego-sklada-sie',
    moduleId: 'wlos-kolor',
    title: 'Z czego składa się włos?',
    moduleTitle: 'Budowa i skład włosa',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: false
  },
  {
    id: 'wlos-oslonka-kora-rdzen',
    moduleId: 'wlos-kolor',
    title: 'Osłonka, kora i rdzeń',
    moduleTitle: 'Budowa i skład włosa',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'wlos-z-czego-sklada-sie',
    lockedReason: 'Najpierw ukończ: Z czego składa się włos?'
  },
  {
    id: 'wlos-keratyna-rusztowanie',
    moduleId: 'wlos-kolor',
    title: 'Keratyna — rusztowanie włosa',
    moduleTitle: 'Budowa i skład włosa',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'wlos-oslonka-kora-rdzen',
    lockedReason: 'Najpierw ukończ: Osłonka, kora i rdzeń'
  }
];

window.LessonsModuleOrder = ['ph', 'wlos-kolor'];

function getCatalogEntry(lessonId){
  var list = window.LessonsCatalog || [];
  for (var i = 0; i < list.length; i++){
    if (list[i].id === lessonId) return list[i];
  }
  return null;
}

function isCatalogLessonLocked(entry){
  if (!entry) return true;
  if (entry.locked) return true;
  if (entry.requiresLessonId && !window.AppState.get().completedLessons[entry.requiresLessonId]) return true;
  return false;
}

function getLessonDisplayStatus(entry){
  if (!entry) return 'locked';
  if (window.AppState.get().completedLessons[entry.id]) return 'completed';
  if (isCatalogLessonLocked(entry)) return 'locked';
  return 'available';
}

function getLessonsForModule(moduleId){
  var list = window.LessonsCatalog || [];
  var out = [];
  for (var i = 0; i < list.length; i++){
    if (list[i].moduleId === moduleId) out.push(list[i]);
  }
  return out;
}

function getModuleIds(){
  var order = window.LessonsModuleOrder || [];
  var seen = {};
  var ids = [];
  order.forEach(function(id){
    if (!seen[id]){
      seen[id] = true;
      ids.push(id);
    }
  });
  (window.LessonsCatalog || []).forEach(function(entry){
    if (!seen[entry.moduleId]){
      seen[entry.moduleId] = true;
      ids.push(entry.moduleId);
    }
  });
  return ids;
}

function getModuleProgress(moduleId){
  var list = moduleId ? getLessonsForModule(moduleId) : (window.LessonsCatalog || []);
  var completed = 0;
  for (var i = 0; i < list.length; i++){
    if (getLessonDisplayStatus(list[i]) === 'completed') completed++;
  }
  return { completed: completed, total: list.length };
}

function getNextAvailableLesson(moduleId){
  var list = moduleId ? getLessonsForModule(moduleId) : (window.LessonsCatalog || []);
  for (var i = 0; i < list.length; i++){
    if (getLessonDisplayStatus(list[i]) === 'available') return list[i];
  }
  return null;
}

function getNextLessonAfter(completedLessonId){
  var entry = getCatalogEntry(completedLessonId);
  if (!entry) return null;
  var list = getLessonsForModule(entry.moduleId);
  var completed = window.AppState && window.AppState.get
    ? window.AppState.get().completedLessons : {};
  var start = 0;
  for (var i = 0; i < list.length; i++){
    if (list[i].id === completedLessonId){
      start = i + 1;
      break;
    }
  }
  if (start > 0 && start < list.length){
    var immediate = list[start];
    if (immediate.requiresLessonId === completedLessonId && completed[completedLessonId]){
      return immediate;
    }
  }
  for (var j = start; j < list.length; j++){
    if (getLessonDisplayStatus(list[j]) === 'available') return list[j];
  }
  return null;
}

function areAllModuleLessonsComplete(moduleId){
  var p = getModuleProgress(moduleId);
  return p.total > 0 && p.completed >= p.total;
}

function getModuleMeta(moduleId){
  var list = moduleId ? getLessonsForModule(moduleId) : (window.LessonsCatalog || []);
  var first = list[0] || (window.LessonsCatalog && window.LessonsCatalog[0]);
  return {
    title: (first && first.moduleTitle) || 'Moduł',
    subtitle: (first && first.moduleSubtitle) || ''
  };
}

window.LessonsCatalogHelpers = {
  getEntry: getCatalogEntry,
  isLocked: isCatalogLessonLocked,
  getStatus: getLessonDisplayStatus,
  getModuleIds: getModuleIds,
  getLessonsForModule: getLessonsForModule,
  getModuleProgress: getModuleProgress,
  getNextAvailable: getNextAvailableLesson,
  getNextAfter: getNextLessonAfter,
  areAllComplete: areAllModuleLessonsComplete,
  getModuleMeta: getModuleMeta
};
