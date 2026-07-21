/* ============================================================
   Akademia Nowej Fali — katalog odznak i kolekcji (Gablotka)
   Jedno źródło definicji. Przyznawanie przez AppState / BadgesAPI.
   ============================================================ */
'use strict';

var BADGE_SYMBOLS = {
  eye: '<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><ellipse cx="24" cy="24" rx="18" ry="11" stroke="currentColor" stroke-width="2"/><circle cx="24" cy="24" r="6" fill="currentColor"/><circle cx="26" cy="22" r="2" fill="#FFFBF5" opacity=".7"/></svg>',
  comb: '<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M12 8v32M18 8v32M24 8v32M30 8v32M36 8v32" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path d="M10 8h28" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>',
  scissors: '<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><circle cx="14" cy="34" r="5" stroke="currentColor" stroke-width="2"/><circle cx="34" cy="34" r="5" stroke="currentColor" stroke-width="2"/><path d="M18 31 L38 10M30 31 L10 10" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
  strand: '<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M24 6 C18 14 18 22 24 30 C30 38 28 42 24 44" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" fill="none"/><path d="M28 8 C24 16 26 24 30 32" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" opacity=".55"/></svg>',
  star: '<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M24 6l4.2 12.8H42l-10.5 7.8 4 12.8L24 32.4 12.5 39.4l4-12.8L6 18.8h13.8z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="none"/></svg>',
  drop: '<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M24 6 C24 6 10 22 10 30 a14 14 0 0 0 28 0 C38 22 24 6 24 6z" stroke="currentColor" stroke-width="2" fill="none"/></svg>',
  spark: '<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M24 4v12M24 32v12M4 24h12M32 24h12M10 10l8 8M30 30l8 8M38 10l-8 8M18 30l-8 8" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
  medal: '<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><circle cx="24" cy="28" r="12" stroke="currentColor" stroke-width="2"/><path d="M16 8l8 8 8-8" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="24" cy="28" r="4" fill="currentColor"/></svg>',
  mirror: '<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><ellipse cx="24" cy="22" rx="12" ry="16" stroke="currentColor" stroke-width="2"/><path d="M14 38h20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M20 16c2-3 8-3 10 2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" opacity=".5"/></svg>',
  wave: '<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M6 28 Q14 16 22 28 T38 28 T46 28" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" fill="none"/><path d="M6 36 Q14 28 22 36 T38 36" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" opacity=".45"/></svg>'
};

/**
 * Kolekcje — grupy wizualne. Odznaki muszą mieć realne warunki w evaluate().
 */
var BADGE_COLLECTIONS = [
  { id: 'pierwsze-kroki', name: 'Pierwsze kroki', order: 1 },
  { id: 'systematycznosc', name: 'Systematyczność', order: 2 },
  { id: 'wiedza-precyzja', name: 'Wiedza i precyzja', order: 3 },
  { id: 'moduly', name: 'Moduły tematyczne', order: 4 }
];

/**
 * Katalog odznak. condition() korzysta z kontekstu zbudowanego z AppState.
 * context: {
 *   completedCount, completedLessons, streakDays,
 *   perfectLessons, bestScorePct,
 *   collectionEarnedBadges: { name: true },
 *   collectionProgress: { id: { earned, total } },
 *   moduleComplete: { moduleId: bool }
 * }
 */
var BADGE_CATALOG = [
  {
    id: 'pierwszy-eksponat',
    collectionId: 'pierwsze-kroki',
    name: 'Pierwszy eksponat',
    description: 'Pierwsza ukończona lekcja trafia do gablotki — i zasłużenie.',
    conditionLabel: 'Ukończ 1 lekcję',
    symbol: 'eye',
    accent: 'coral',
    evaluate: function(ctx){ return ctx.completedCount >= 1; },
    progress: function(ctx){ return { current: Math.min(ctx.completedCount, 1), goal: 1 }; }
  },
  {
    id: 'piec-lekcji',
    collectionId: 'pierwsze-kroki',
    name: 'Pięć na koncie',
    description: 'Pięć lekcji za sobą. Gablotka zaczyna mieć ciężar.',
    conditionLabel: 'Ukończ 5 lekcji',
    symbol: 'strand',
    accent: 'mustard',
    evaluate: function(ctx){ return ctx.completedCount >= 5; },
    progress: function(ctx){ return { current: Math.min(ctx.completedCount, 5), goal: 5 }; }
  },
  {
    id: 'seria-3',
    collectionId: 'systematycznosc',
    name: 'Trzy dni z rzędu',
    description: 'Regularność robi więcej niż jednorazowy zryw entuzjazmu.',
    conditionLabel: 'Utrzymaj serię 3 dni nauki',
    symbol: 'wave',
    accent: 'sage',
    evaluate: function(ctx){ return ctx.streakDays >= 3; },
    progress: function(ctx){ return { current: Math.min(ctx.streakDays, 3), goal: 3 }; }
  },
  {
    id: 'seria-7',
    collectionId: 'systematycznosc',
    name: 'Tydzień w rytmie',
    description: 'Siedem dni ciągłości. To już nie przypadek — to nawyk.',
    conditionLabel: 'Utrzymaj serię 7 dni nauki',
    symbol: 'spark',
    accent: 'olive',
    evaluate: function(ctx){ return ctx.streakDays >= 7; },
    progress: function(ctx){ return { current: Math.min(ctx.streakDays, 7), goal: 7 }; }
  },
  {
    id: 'lekcja-bez-bledu',
    collectionId: 'wiedza-precyzja',
    name: 'Precyzyjna ręka',
    description: 'Lekcja ukończona bez pomyłki. Salony lubią taką pewność.',
    conditionLabel: 'Ukończ 1 lekcję bez błędu (100%)',
    symbol: 'scissors',
    accent: 'dusty',
    evaluate: function(ctx){ return ctx.perfectLessons >= 1; },
    progress: function(ctx){ return { current: Math.min(ctx.perfectLessons, 1), goal: 1 }; }
  },
  {
    id: 'trzy-bez-bledu',
    collectionId: 'wiedza-precyzja',
    name: 'Bez skazy',
    description: 'Trzy lekcje bezbłędnie. Precyzja przestaje być wyjątkiem.',
    conditionLabel: 'Ukończ 3 lekcje bez błędu',
    symbol: 'star',
    accent: 'mustard',
    evaluate: function(ctx){ return ctx.perfectLessons >= 3; },
    progress: function(ctx){ return { current: Math.min(ctx.perfectLessons, 3), goal: 3 }; }
  },
  {
    id: 'detektyw-koloru',
    collectionId: 'moduly',
    name: 'Detektyw koloru',
    description: 'Odznaka kolekcji „Mistrzyni koloru” — za komplet spraw koloryzacyjnych.',
    conditionLabel: 'Ukończ kolekcję „Mistrzyni koloru” (5/5)',
    symbol: 'drop',
    accent: 'dusty',
    /* Kompatybilność: nazwa w earnedBadges kolekcji */
    legacyNames: ['Detektyw koloru'],
    evaluate: function(ctx){
      if (ctx.collectionEarnedBadges['Detektyw koloru']) return true;
      var p = ctx.collectionProgress['mistrzyni-koloru'];
      return !!(p && p.earned >= p.total && p.total > 0);
    },
    progress: function(ctx){
      var p = ctx.collectionProgress['mistrzyni-koloru'] || { earned: 0, total: 5 };
      return { current: Math.min(p.earned, p.total), goal: p.total || 5 };
    }
  },
  {
    id: 'modul-ph',
    collectionId: 'moduly',
    name: 'Skala opanowana',
    description: 'Cały moduł pH za tobą. Odczyn nie ma przed tobą tajemnic.',
    conditionLabel: 'Ukończ wszystkie lekcje modułu pH',
    symbol: 'mirror',
    accent: 'navy',
    evaluate: function(ctx){ return !!ctx.moduleComplete.ph; },
    progress: function(ctx){
      return ctx.moduleProgress.ph || { current: 0, goal: 1 };
    }
  },
  {
    id: 'modul-wlos',
    collectionId: 'moduly',
    name: 'Budowa włosa',
    description: 'Moduł budowy i składu włosa domknięty. Fundament pod dalszą pracę.',
    conditionLabel: 'Ukończ wszystkie lekcje modułu budowy włosa',
    symbol: 'comb',
    accent: 'coral',
    evaluate: function(ctx){ return !!ctx.moduleComplete['wlos-kolor']; },
    progress: function(ctx){
      return ctx.moduleProgress['wlos-kolor'] || { current: 0, goal: 1 };
    }
  }
];

function getBadgeById(id){
  for (var i = 0; i < BADGE_CATALOG.length; i++){
    if (BADGE_CATALOG[i].id === id) return BADGE_CATALOG[i];
  }
  return null;
}

function getCollectionMeta(id){
  for (var i = 0; i < BADGE_COLLECTIONS.length; i++){
    if (BADGE_COLLECTIONS[i].id === id) return BADGE_COLLECTIONS[i];
  }
  return null;
}

function buildBadgeContext(state){
  state = state || (window.AppState && window.AppState.get ? window.AppState.get() : null) || {};
  var completed = state.completedLessons || {};
  var ids = Object.keys(completed).filter(function(k){ return !!completed[k]; });
  var collectionEarnedBadges = {};
  var collectionProgress = {};
  (state.collections || []).forEach(function(col){
    collectionProgress[col.id] = { earned: col.earned || 0, total: col.total || 0, name: col.name };
    var eb = col.earnedBadges || {};
    Object.keys(eb).forEach(function(name){
      if (eb[name]) collectionEarnedBadges[name] = true;
    });
  });

  var moduleComplete = {};
  var moduleProgress = {};
  if (window.LessonsCatalogHelpers && window.LessonsCatalogHelpers.getModuleIds){
    window.LessonsCatalogHelpers.getModuleIds().forEach(function(moduleId){
      var lessons = window.LessonsCatalogHelpers.getLessonsForModule(moduleId) || [];
      var done = 0;
      lessons.forEach(function(entry){
        if (completed[entry.id]) done++;
      });
      moduleProgress[moduleId] = { current: done, goal: lessons.length || 1 };
      moduleComplete[moduleId] = lessons.length > 0 && done >= lessons.length;
    });
  }

  var stats = state.stats || {};
  return {
    completedCount: ids.length,
    completedLessons: completed,
    streakDays: (state.user && state.user.streakDays) || 0,
    perfectLessons: typeof stats.perfectLessons === 'number' ? stats.perfectLessons : 0,
    bestScorePct: typeof stats.bestScorePct === 'number' ? stats.bestScorePct : null,
    collectionEarnedBadges: collectionEarnedBadges,
    collectionProgress: collectionProgress,
    moduleComplete: moduleComplete,
    moduleProgress: moduleProgress,
    achievements: state.achievements || {}
  };
}

function isBadgeEarnedInState(badge, state, ctx){
  ctx = ctx || buildBadgeContext(state);
  if (state && state.achievements && state.achievements[badge.id] && state.achievements[badge.id].earnedAt){
    return true;
  }
  if (badge.legacyNames){
    for (var i = 0; i < badge.legacyNames.length; i++){
      if (ctx.collectionEarnedBadges[badge.legacyNames[i]]) return true;
    }
  }
  return badge.evaluate(ctx);
}

function getEarnedAt(badge, state){
  if (state && state.achievements && state.achievements[badge.id] && state.achievements[badge.id].earnedAt){
    return state.achievements[badge.id].earnedAt;
  }
  return null;
}

function listBadgeViews(state, options){
  options = options || {};
  var ctx = buildBadgeContext(state);
  var force = options.forceStatus || null; /* 'earned' | 'locked' | null */
  return BADGE_CATALOG.map(function(badge){
    var earned = force === 'earned' ? true : (force === 'locked' ? false : isBadgeEarnedInState(badge, state, ctx));
    var prog = badge.progress ? badge.progress(ctx) : { current: earned ? 1 : 0, goal: 1 };
    return {
      badge: badge,
      earned: earned,
      earnedAt: force ? null : getEarnedAt(badge, state),
      progress: prog,
      collection: getCollectionMeta(badge.collectionId)
    };
  });
}

function listCollectionViews(state, options){
  var badges = listBadgeViews(state, options);
  return BADGE_COLLECTIONS.map(function(col){
    var items = badges.filter(function(b){ return b.badge.collectionId === col.id; });
    var earnedCount = items.filter(function(b){ return b.earned; }).length;
    return {
      collection: col,
      badges: items,
      earnedCount: earnedCount,
      total: items.length,
      complete: items.length > 0 && earnedCount === items.length
    };
  }).filter(function(c){ return c.total > 0; });
}

function listNearestGoals(state, limit){
  limit = limit || 3;
  var views = listBadgeViews(state).filter(function(v){ return !v.earned; });
  views.sort(function(a, b){
    var ra = a.progress.goal ? a.progress.current / a.progress.goal : 0;
    var rb = b.progress.goal ? b.progress.current / b.progress.goal : 0;
    if (rb !== ra) return rb - ra;
    return (a.progress.goal - a.progress.current) - (b.progress.goal - b.progress.current);
  });
  return views.slice(0, limit).map(function(v){
    var left = Math.max(0, v.progress.goal - v.progress.current);
    var hint;
    if (v.progress.goal > 1 && left > 0 && v.progress.current > 0){
      hint = 'Jeszcze ' + left + (left === 1 ? ' krok' : ' kroki') + ' do odznaki „' + v.badge.name + '”';
    } else if (left === 0 && !v.earned){
      hint = v.badge.conditionLabel;
    } else {
      hint = v.badge.conditionLabel;
    }
    return {
      badge: v.badge,
      progress: v.progress,
      remaining: left,
      hint: hint
    };
  });
}

function countEarnedBadges(state, options){
  return listBadgeViews(state, options).filter(function(v){ return v.earned; }).length;
}

window.BadgesCatalog = {
  SYMBOLS: BADGE_SYMBOLS,
  COLLECTIONS: BADGE_COLLECTIONS,
  CATALOG: BADGE_CATALOG,
  getBadgeById: getBadgeById,
  getCollectionMeta: getCollectionMeta,
  buildContext: buildBadgeContext,
  listBadgeViews: listBadgeViews,
  listCollectionViews: listCollectionViews,
  listNearestGoals: listNearestGoals,
  countEarned: countEarnedBadges,
  isEarned: isBadgeEarnedInState,
  getEarnedAt: getEarnedAt
};
