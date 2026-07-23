/* ============================================================
   Akademia Nowej Fali — katalog odznak i kolekcji (Gablotka)
   Jedno źródło definicji. Przyznawanie przez AppState / BadgesAPI.
   Symbole: {{UID}} zamieniane przy renderze (unikalne gradienty).
   ============================================================ */
'use strict';

var BADGE_SYMBOLS = {
  /* Kryształ w kształcie oka */
  eye:
    '<svg viewBox="0 0 64 64" fill="none" aria-hidden="true">' +
      '<defs>' +
        '<linearGradient id="{{UID}}-a" x1="12" y1="8" x2="52" y2="56" gradientUnits="userSpaceOnUse">' +
          '<stop stop-color="#FFE8F0"/><stop offset=".45" stop-color="#E86A9A"/><stop offset="1" stop-color="#9B2D5C"/>' +
        '</linearGradient>' +
        '<linearGradient id="{{UID}}-b" x1="20" y1="20" x2="44" y2="44" gradientUnits="userSpaceOnUse">' +
          '<stop stop-color="#FFFBF5"/><stop offset="1" stop-color="#F5D0A9"/>' +
        '</linearGradient>' +
        '<radialGradient id="{{UID}}-c" cx="38%" cy="35%" r="55%">' +
          '<stop stop-color="#FFE14A"/><stop offset=".55" stop-color="#F0A018"/><stop offset="1" stop-color="#B86A00"/>' +
        '</radialGradient>' +
      '</defs>' +
      '<path d="M32 8 L52 28 L32 56 L12 28 Z" fill="url(#{{UID}}-a)" stroke="#7A2348" stroke-width="1.2"/>' +
      '<path d="M32 12 L46 28 L32 48 L18 28 Z" fill="url(#{{UID}}-b)" opacity=".92"/>' +
      '<ellipse cx="32" cy="30" rx="14" ry="8" fill="#FFFBF5"/>' +
      '<circle cx="32" cy="30" r="6.5" fill="#E86A9A"/>' +
      '<circle cx="32" cy="30" r="3.4" fill="url(#{{UID}}-c)"/>' +
      '<circle cx="34.5" cy="27.8" r="1.5" fill="#FFFBF5" opacity=".95"/>' +
      '<path d="M32 8 L32 56 M12 28 L52 28" stroke="#FFF6FA" stroke-width="1" opacity=".35"/>' +
      '<path d="M24 14 L28 18 M40 14 L36 18" stroke="#FFFBF5" stroke-width="1.6" stroke-linecap="round" opacity=".8"/>' +
    '</svg>',

  /* Błyszczące nożyczki */
  scissors:
    '<svg viewBox="0 0 64 64" fill="none" aria-hidden="true">' +
      '<defs>' +
        '<linearGradient id="{{UID}}-m" x1="10" y1="8" x2="54" y2="56" gradientUnits="userSpaceOnUse">' +
          '<stop stop-color="#FFF8E7"/><stop offset=".4" stop-color="#E8C15A"/><stop offset="1" stop-color="#8A6A1E"/>' +
        '</linearGradient>' +
        '<linearGradient id="{{UID}}-s" x1="8" y1="40" x2="56" y2="20" gradientUnits="userSpaceOnUse">' +
          '<stop stop-color="#F7F7F7"/><stop offset=".5" stop-color="#C8CDD6"/><stop offset="1" stop-color="#6E7585"/>' +
        '</linearGradient>' +
      '</defs>' +
      '<circle cx="18" cy="46" r="8" fill="url(#{{UID}}-m)" stroke="#6B5214" stroke-width="1.2"/>' +
      '<circle cx="18" cy="46" r="3.2" fill="#FFF8E7"/>' +
      '<circle cx="46" cy="46" r="8" fill="url(#{{UID}}-m)" stroke="#6B5214" stroke-width="1.2"/>' +
      '<circle cx="46" cy="46" r="3.2" fill="#FFF8E7"/>' +
      '<path d="M22 40 L48 12" stroke="url(#{{UID}}-s)" stroke-width="5" stroke-linecap="round"/>' +
      '<path d="M42 40 L16 12" stroke="url(#{{UID}}-s)" stroke-width="5" stroke-linecap="round"/>' +
      '<path d="M22 40 L48 12M42 40 L16 12" stroke="#FFFBF5" stroke-width="1.4" stroke-linecap="round" opacity=".55"/>' +
      '<circle cx="32" cy="34" r="2.4" fill="#E8C15A" stroke="#6B5214" stroke-width="1"/>' +
      '<path d="M20 14 L24 10 M44 14 L40 10" stroke="#FFFBF5" stroke-width="1.8" stroke-linecap="round" opacity=".9"/>' +
    '</svg>',

  /* Diament / brylant */
  spark:
    '<svg viewBox="0 0 64 64" fill="none" aria-hidden="true">' +
      '<defs>' +
        '<linearGradient id="{{UID}}-d" x1="14" y1="6" x2="50" y2="58" gradientUnits="userSpaceOnUse">' +
          '<stop stop-color="#FFFFFF"/><stop offset=".35" stop-color="#D9ECFF"/><stop offset=".7" stop-color="#7EB6E8"/><stop offset="1" stop-color="#2F6FA8"/>' +
        '</linearGradient>' +
      '</defs>' +
      '<path d="M32 4 L38 16 L32 20 L26 16 Z" fill="#FFFBF5" opacity=".95"/>' +
      '<path d="M18 18 L32 8 L46 18 L40 28 L24 28 Z" fill="url(#{{UID}}-d)" stroke="#2F5F8A" stroke-width="1"/>' +
      '<path d="M24 28 L40 28 L32 56 Z" fill="#5A9FD4" stroke="#2F5F8A" stroke-width="1"/>' +
      '<path d="M24 28 L32 56 L18 18 Z" fill="#8FC4EE" opacity=".9"/>' +
      '<path d="M40 28 L32 56 L46 18 Z" fill="#3F7FB8" opacity=".95"/>' +
      '<path d="M32 8 L32 56 M24 28 L40 28" stroke="#FFFBF5" stroke-width="1" opacity=".45"/>' +
      '<path d="M12 12 L16 16 M52 12 L48 16 M32 60 L32 56" stroke="#FFFBF5" stroke-width="2" stroke-linecap="round" opacity=".85"/>' +
    '</svg>',

  /* Złota gwiazda-diament */
  star:
    '<svg viewBox="0 0 64 64" fill="none" aria-hidden="true">' +
      '<defs>' +
        '<linearGradient id="{{UID}}-g" x1="10" y1="4" x2="54" y2="60" gradientUnits="userSpaceOnUse">' +
          '<stop stop-color="#FFF6C8"/><stop offset=".4" stop-color="#F0C44A"/><stop offset="1" stop-color="#A06A00"/>' +
        '</linearGradient>' +
      '</defs>' +
      '<path d="M32 6 L38.5 24.5 H58 L42.5 36.5 L48.5 56 L32 45 L15.5 56 L21.5 36.5 L6 24.5 H25.5 Z" fill="url(#{{UID}}-g)" stroke="#7A5400" stroke-width="1.2" stroke-linejoin="round"/>' +
      '<path d="M32 12 L36 24 H46 L38 31 L41 42 L32 35 L23 42 L26 31 L18 24 H28 Z" fill="#FFF8DC" opacity=".55"/>' +
      '<circle cx="32" cy="30" r="3" fill="#FFFBF5"/>' +
      '<path d="M32 2 L32 8 M58 30 L52 30" stroke="#FFFBF5" stroke-width="2" stroke-linecap="round" opacity=".8"/>' +
    '</svg>',

  /* Kryształowa kropla */
  drop:
    '<svg viewBox="0 0 64 64" fill="none" aria-hidden="true">' +
      '<defs>' +
        '<linearGradient id="{{UID}}-w" x1="18" y1="6" x2="46" y2="58" gradientUnits="userSpaceOnUse">' +
          '<stop stop-color="#FDE2EA"/><stop offset=".4" stop-color="#E86A9A"/><stop offset="1" stop-color="#7A2D55"/>' +
        '</linearGradient>' +
      '</defs>' +
      '<path d="M32 6 C32 6 14 26 14 38 a18 18 0 0 0 36 0 C50 26 32 6 32 6z" fill="url(#{{UID}}-w)" stroke="#6B2448" stroke-width="1.2"/>' +
      '<path d="M24 22 C26 30 28 36 32 44" stroke="#FFFBF5" stroke-width="2.4" stroke-linecap="round" opacity=".55"/>' +
      '<circle cx="38" cy="28" r="3.2" fill="#FFFBF5" opacity=".9"/>' +
      '<path d="M28 10 L32 14 L36 10" stroke="#FFFBF5" stroke-width="1.4" stroke-linecap="round" opacity=".75"/>' +
    '</svg>',

  /* Diamentowy kosmyk */
  strand:
    '<svg viewBox="0 0 64 64" fill="none" aria-hidden="true">' +
      '<defs>' +
        '<linearGradient id="{{UID}}-k" x1="16" y1="4" x2="48" y2="60" gradientUnits="userSpaceOnUse">' +
          '<stop stop-color="#FFE0F0"/><stop offset=".5" stop-color="#E86A9A"/><stop offset="1" stop-color="#8B3A62"/>' +
        '</linearGradient>' +
      '</defs>' +
      '<path d="M30 6 C22 16 20 28 28 40 C34 50 30 56 26 58 C36 56 44 46 40 34 C37 24 40 14 46 8 C40 8 34 6 30 6Z" fill="url(#{{UID}}-k)" stroke="#6B2448" stroke-width="1.1"/>' +
      '<path d="M28 12 C26 22 28 32 34 42" stroke="#FFFBF5" stroke-width="2" stroke-linecap="round" opacity=".5"/>' +
      '<circle cx="36" cy="18" r="2.4" fill="#FFFBF5" opacity=".9"/>' +
      '<path d="M18 20 L22 16 M42 48 L46 44" stroke="#FFFBF5" stroke-width="1.6" stroke-linecap="round" opacity=".75"/>' +
    '</svg>',

  /* Szmaragdowa fala */
  wave:
    '<svg viewBox="0 0 64 64" fill="none" aria-hidden="true">' +
      '<defs>' +
        '<linearGradient id="{{UID}}-e" x1="6" y1="12" x2="58" y2="52" gradientUnits="userSpaceOnUse">' +
          '<stop stop-color="#E8F6DE"/><stop offset=".45" stop-color="#8FB86A"/><stop offset="1" stop-color="#3F6B2E"/>' +
        '</linearGradient>' +
      '</defs>' +
      '<path d="M8 34 C16 18 24 18 32 34 C40 50 48 50 56 34" fill="none" stroke="url(#{{UID}}-e)" stroke-width="7" stroke-linecap="round"/>' +
      '<path d="M8 34 C16 18 24 18 32 34 C40 50 48 50 56 34" fill="none" stroke="#FFFBF5" stroke-width="2" stroke-linecap="round" opacity=".45"/>' +
      '<path d="M10 44 C18 34 26 34 34 44 C42 54 50 52 56 44" fill="none" stroke="#A6D08A" stroke-width="4" stroke-linecap="round" opacity=".85"/>' +
      '<circle cx="20" cy="24" r="2.2" fill="#FFFBF5"/><circle cx="44" cy="40" r="1.8" fill="#FFFBF5" opacity=".85"/>' +
      '<path d="M32 8 L32 14 M50 16 L46 20" stroke="#FFFBF5" stroke-width="1.8" stroke-linecap="round" opacity=".8"/>' +
    '</svg>',

  /* Złoty grzebień-klejnot */
  comb:
    '<svg viewBox="0 0 64 64" fill="none" aria-hidden="true">' +
      '<defs>' +
        '<linearGradient id="{{UID}}-c" x1="10" y1="8" x2="54" y2="56" gradientUnits="userSpaceOnUse">' +
          '<stop stop-color="#FFF4C8"/><stop offset=".5" stop-color="#E0B84A"/><stop offset="1" stop-color="#8A6418"/>' +
        '</linearGradient>' +
      '</defs>' +
      '<rect x="12" y="10" width="40" height="10" rx="4" fill="url(#{{UID}}-c)" stroke="#6B5214" stroke-width="1.1"/>' +
      '<path d="M16 20 V52 M24 20 V52 M32 20 V52 M40 20 V52 M48 20 V48" stroke="url(#{{UID}}-c)" stroke-width="3.4" stroke-linecap="round"/>' +
      '<path d="M16 20 V52 M24 20 V52 M32 20 V52 M40 20 V52 M48 20 V48" stroke="#FFF8DC" stroke-width="1" stroke-linecap="round" opacity=".45"/>' +
      '<circle cx="32" cy="15" r="2.2" fill="#FFFBF5"/>' +
      '<path d="M20 8 L24 4 M44 8 L40 4" stroke="#FFFBF5" stroke-width="1.6" stroke-linecap="round" opacity=".85"/>' +
    '</svg>',

  /* Lustrzany kryształ */
  mirror:
    '<svg viewBox="0 0 64 64" fill="none" aria-hidden="true">' +
      '<defs>' +
        '<linearGradient id="{{UID}}-r" x1="16" y1="6" x2="48" y2="54" gradientUnits="userSpaceOnUse">' +
          '<stop stop-color="#FFFFFF"/><stop offset=".5" stop-color="#D5DDED"/><stop offset="1" stop-color="#6F7C98"/>' +
        '</linearGradient>' +
      '</defs>' +
      '<ellipse cx="32" cy="28" rx="16" ry="20" fill="url(#{{UID}}-r)" stroke="#4A5670" stroke-width="1.3"/>' +
      '<ellipse cx="32" cy="28" rx="11" ry="14" fill="#EEF3FF" opacity=".75"/>' +
      '<path d="M26 18 C30 14 38 15 40 22" stroke="#FFFBF5" stroke-width="2.2" stroke-linecap="round" opacity=".9"/>' +
      '<rect x="22" y="48" width="20" height="6" rx="2" fill="#C5A04A" stroke="#6B5214" stroke-width="1"/>' +
      '<path d="M18 12 L22 8 M46 12 L42 8" stroke="#FFFBF5" stroke-width="1.6" stroke-linecap="round" opacity=".8"/>' +
    '</svg>',

  /* Medal z diamentem */
  medal:
    '<svg viewBox="0 0 64 64" fill="none" aria-hidden="true">' +
      '<defs>' +
        '<linearGradient id="{{UID}}-o" x1="14" y1="14" x2="50" y2="58" gradientUnits="userSpaceOnUse">' +
          '<stop stop-color="#FFE9A0"/><stop offset=".5" stop-color="#E0A820"/><stop offset="1" stop-color="#8A5A00"/>' +
        '</linearGradient>' +
      '</defs>' +
      '<path d="M22 8 L32 18 L42 8" fill="#E86A4A" stroke="#8A2E2E" stroke-width="1"/>' +
      '<circle cx="32" cy="36" r="16" fill="url(#{{UID}}-o)" stroke="#6B5214" stroke-width="1.3"/>' +
      '<circle cx="32" cy="36" r="10" fill="#FFF4C8" opacity=".55"/>' +
      '<path d="M32 26 L35 34 H44 L37 39 L40 48 L32 43 L24 48 L27 39 L20 34 H29 Z" fill="#7EB6E8" stroke="#2F5F8A" stroke-width=".8"/>' +
      '<circle cx="36" cy="30" r="1.8" fill="#FFFBF5"/>' +
    '</svg>'
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
    symbol: 'scissors',
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
    symbol: 'star',
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
    symbol: 'medal',
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
  },
  {
    id: 'modul-wlos-ksztalt',
    collectionId: 'moduly',
    name: 'Wiązania i kształt',
    description: 'Wiesz, kiedy efekt jest czasowy, a kiedy chemiczny — mostki H i S nie mają przed tobą tajemnic.',
    conditionLabel: 'Ukończ wszystkie lekcje modułu wiązań i zmiany kształtu',
    symbol: 'comb',
    accent: 'dusty',
    evaluate: function(ctx){ return !!ctx.moduleComplete['wlos-ksztalt']; },
    progress: function(ctx){
      return ctx.moduleProgress['wlos-ksztalt'] || { current: 0, goal: 1 };
    }
  },
  {
    id: 'modul-wlos-teoria-koloru',
    collectionId: 'moduly',
    name: 'Teoria koloru',
    description: 'Melanina, koło barw, chłonność i wybór farby — kolor ma u Ciebie logikę.',
    conditionLabel: 'Ukończ wszystkie lekcje teorii koloru włosa',
    symbol: 'mirror',
    accent: 'mustard',
    evaluate: function(ctx){ return !!ctx.moduleComplete['wlos-teoria-koloru']; },
    progress: function(ctx){
      return ctx.moduleProgress['wlos-teoria-koloru'] || { current: 0, goal: 1 };
    }
  },
  {
    id: 'modul-trwala-procedura',
    collectionId: 'moduly',
    name: 'Trwała — procedura',
    description: 'Wodna czy chemiczna, mycie, nawijanie i finisz — prowadzisz zabieg z checklistą.',
    conditionLabel: 'Ukończ wszystkie lekcje procedury trwałej',
    symbol: 'comb',
    accent: 'coral',
    evaluate: function(ctx){ return !!ctx.moduleComplete['trwala-procedura']; },
    progress: function(ctx){
      return ctx.moduleProgress['trwala-procedura'] || { current: 0, goal: 1 };
    }
  },
  {
    id: 'modul-bhp-higiena-salonu',
    collectionId: 'moduly',
    name: 'BHP i higiena',
    description: 'Dezynfekcja, prąd, salon i odmowa usługi — chronisz klienta i siebie.',
    conditionLabel: 'Ukończ wszystkie lekcje BHP i higieny',
    symbol: 'drop',
    accent: 'sage',
    evaluate: function(ctx){ return !!ctx.moduleComplete['bhp-higiena-salonu']; },
    progress: function(ctx){
      return ctx.moduleProgress['bhp-higiena-salonu'] || { current: 0, goal: 1 };
    }
  },
  {
    id: 'modul-strzyzenie-narzedzia',
    collectionId: 'moduly',
    name: 'Strzyżenie — narzędzia',
    description: 'Techniki, degażowanie, nożyczki i maszynki — znasz nazwy i sprzęt.',
    conditionLabel: 'Ukończ wszystkie lekcje strzyżenia (techniki i narzędzia)',
    symbol: 'scissors',
    accent: 'dusty',
    evaluate: function(ctx){ return !!ctx.moduleComplete['strzyzenie-narzedzia']; },
    progress: function(ctx){
      return ctx.moduleProgress['strzyzenie-narzedzia'] || { current: 0, goal: 1 };
    }
  },
  {
    id: 'modul-prostowanie-wlosow',
    collectionId: 'moduly',
    name: 'Prostowanie',
    description: 'Sposoby, prostownica i chemia mostków — wybierasz ligę zabiegu.',
    conditionLabel: 'Ukończ wszystkie lekcje prostowania włosów',
    symbol: 'strand',
    accent: 'mustard',
    evaluate: function(ctx){ return !!ctx.moduleComplete['prostowanie-wlosow']; },
    progress: function(ctx){
      return ctx.moduleProgress['prostowanie-wlosow'] || { current: 0, goal: 1 };
    }
  },
  {
    id: 'modul-joico-kpak',
    collectionId: 'moduly',
    name: 'JOICO K-PAK',
    description: 'O-W-R-N, procedura 1-2-3-4, powtórzenia 2–3 i tonacja po rekonstrukcji.',
    conditionLabel: 'Ukończ wszystkie lekcje JOICO K-PAK',
    symbol: 'drop',
    accent: 'olive',
    evaluate: function(ctx){ return !!ctx.moduleComplete['joico-kpak']; },
    progress: function(ctx){
      return ctx.moduleProgress['joico-kpak'] || { current: 0, goal: 1 };
    }
  },
  {
    id: 'modul-balejaz',
    collectionId: 'moduly',
    name: 'Balejaż',
    description: 'Wybrane pasma, naturalne refleksy i pięć kroków z materiałów.',
    conditionLabel: 'Ukończ wszystkie lekcje balejażu',
    symbol: 'spark',
    accent: 'coral',
    evaluate: function(ctx){ return !!ctx.moduleComplete['balejaz']; },
    progress: function(ctx){
      return ctx.moduleProgress['balejaz'] || { current: 0, goal: 1 };
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
