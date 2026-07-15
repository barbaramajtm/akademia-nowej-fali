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
    moduleSubtitle: 'Podsumowanie',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'ph-produkty-zakwaszajace',
    lockedReason: 'Najpierw ukończ: pH produktów zakwaszających'
  }
];

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

function getModuleProgress(){
  var list = window.LessonsCatalog || [];
  var completed = 0;
  for (var i = 0; i < list.length; i++){
    if (getLessonDisplayStatus(list[i]) === 'completed') completed++;
  }
  return { completed: completed, total: list.length };
}

function getNextAvailableLesson(){
  var list = window.LessonsCatalog || [];
  for (var i = 0; i < list.length; i++){
    if (getLessonDisplayStatus(list[i]) === 'available') return list[i];
  }
  return null;
}

function getNextLessonAfter(completedLessonId){
  var list = window.LessonsCatalog || [];
  var start = 0;
  for (var i = 0; i < list.length; i++){
    if (list[i].id === completedLessonId){
      start = i + 1;
      break;
    }
  }
  for (var j = start; j < list.length; j++){
    if (getLessonDisplayStatus(list[j]) === 'available') return list[j];
  }
  for (var k = 0; k < list.length; k++){
    if (list[k].id !== completedLessonId && getLessonDisplayStatus(list[k]) === 'available') return list[k];
  }
  return null;
}

function areAllModuleLessonsComplete(){
  var p = getModuleProgress();
  return p.total > 0 && p.completed >= p.total;
}

function getModuleMeta(){
  var first = window.LessonsCatalog && window.LessonsCatalog[0];
  return {
    title: (first && first.moduleTitle) || 'Moduł',
    subtitle: (first && first.moduleSubtitle) || ''
  };
}

window.LessonsCatalogHelpers = {
  getEntry: getCatalogEntry,
  isLocked: isCatalogLessonLocked,
  getStatus: getLessonDisplayStatus,
  getModuleProgress: getModuleProgress,
  getNextAvailable: getNextAvailableLesson,
  getNextAfter: getNextLessonAfter,
  areAllComplete: areAllModuleLessonsComplete,
  getModuleMeta: getModuleMeta
};
