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
    id: 'lesson-n1-numer-farby',
    moduleId: 'numeracja-farb',
    title: 'Co widać w numerze farby',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Odczyt numeru',
    rewardLabel: 'do 75 Kosmyków',
    locked: false
  },
  {
    id: 'lesson-n2-liczba-przed-separatorem',
    moduleId: 'numeracja-farb',
    title: 'Liczba przed separatorem',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Odczyt numeru',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'lesson-n1-numer-farby',
    lockedReason: 'Najpierw ukończ: Co widać w numerze farby'
  },
  {
    id: 'lesson-n3-skala-poziomow',
    moduleId: 'numeracja-farb',
    title: 'Skala poziomów 1–10',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Odczyt numeru',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'lesson-n2-liczba-przed-separatorem',
    lockedReason: 'Najpierw ukończ: Liczba przed separatorem'
  },
  {
    id: 'lesson-n4-refleks-glowny',
    moduleId: 'numeracja-farb',
    title: 'Pierwsza cyfra po separatorze',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Odczyt numeru',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'lesson-n3-skala-poziomow',
    lockedReason: 'Najpierw ukończ: Skala poziomów 1–10'
  },
  {
    id: 'lesson-n5-refleks-dodatkowy',
    moduleId: 'numeracja-farb',
    title: 'Druga cyfra po separatorze',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Odczyt numeru',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'lesson-n4-refleks-glowny',
    lockedReason: 'Najpierw ukończ: Pierwsza cyfra po separatorze'
  },
  {
    id: 'lesson-n6-kolejnosc-refleksow',
    moduleId: 'numeracja-farb',
    title: 'Dlaczego 7.13 i 7.31 to nie to samo',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Odczyt numeru',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'lesson-n5-refleks-dodatkowy',
    lockedReason: 'Najpierw ukończ: Druga cyfra po separatorze'
  },
  {
    id: 'lesson-n7-podwojny-refleks',
    moduleId: 'numeracja-farb',
    title: 'Co oznacza 7.11',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Odczyt numeru',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'lesson-n6-kolejnosc-refleksow',
    lockedReason: 'Najpierw ukończ: Dlaczego 7.13 i 7.31 to nie to samo'
  },
  {
    id: 'lesson-n8-czytanie-numeru',
    moduleId: 'numeracja-farb',
    title: 'Czytanie całego numeru krok po kroku',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Odczyt numeru',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'lesson-n7-podwojny-refleks',
    lockedReason: 'Najpierw ukończ: Co oznacza 7.11'
  },
  {
    id: 'lesson-n9-separatory',
    moduleId: 'numeracja-farb',
    title: 'Separatory i nazwy stosowane przez marki',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Odczyt numeru',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'lesson-n8-czytanie-numeru',
    lockedReason: 'Najpierw ukończ: Czytanie całego numeru krok po kroku'
  },
  {
    id: 'lesson-n10-legenda-producenta',
    moduleId: 'numeracja-farb',
    title: 'Legenda producenta',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Odczyt numeru',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'lesson-n9-separatory',
    lockedReason: 'Najpierw ukończ: Separatory i nazwy stosowane przez marki'
  },
  {
    id: 'lesson-n11-rozpoznawanie-poziomow',
    moduleId: 'numeracja-farb',
    title: 'Rozpoznawanie poziomów 1–10',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Diagnoza koloru',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'lesson-n10-legenda-producenta',
    lockedReason: 'Najpierw ukończ: Legenda producenta'
  },
  {
    id: 'lesson-n12-poziom-a-refleks',
    moduleId: 'numeracja-farb',
    title: 'Poziom to nie refleks',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Diagnoza koloru',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'lesson-n11-rozpoznawanie-poziomow',
    lockedReason: 'Najpierw ukończ: Rozpoznawanie poziomów 1–10'
  },
  {
    id: 'lesson-n13-sytuacje-kolorystyczne',
    moduleId: 'numeracja-farb',
    title: 'Co właściwie oceniamy na włosach klientki',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Diagnoza koloru',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'lesson-n12-poziom-a-refleks',
    lockedReason: 'Najpierw ukończ: Poziom to nie refleks'
  },
  {
    id: 'lesson-n14-naturalny-odrost',
    moduleId: 'numeracja-farb',
    title: 'Naturalny odrost',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Diagnoza koloru',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'lesson-n13-sytuacje-kolorystyczne',
    lockedReason: 'Najpierw ukończ: Co właściwie oceniamy na włosach klientki'
  },
  {
    id: 'lesson-n15-kolor-kosmetyczny',
    moduleId: 'numeracja-farb',
    title: 'Kolor kosmetyczny a stan faktyczny',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Diagnoza koloru',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'lesson-n14-naturalny-odrost',
    lockedReason: 'Najpierw ukończ: Naturalny odrost'
  },
  {
    id: 'lesson-n16-rozjasnione-strefy',
    moduleId: 'numeracja-farb',
    title: 'Rozjaśnienia i różne poziomy na jednej głowie',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Diagnoza koloru',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'lesson-n15-kolor-kosmetyczny',
    lockedReason: 'Najpierw ukończ: Kolor kosmetyczny a stan faktyczny'
  },
  {
    id: 'lesson-n17-procent-siwizny',
    moduleId: 'numeracja-farb',
    title: 'Ocena procentu siwizny',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Diagnoza koloru',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'lesson-n16-rozjasnione-strefy',
    lockedReason: 'Najpierw ukończ: Rozjaśnienia i różne poziomy na jednej głowie'
  },
  {
    id: 'lesson-n18-pelna-diagnoza-koloru',
    moduleId: 'numeracja-farb',
    title: 'Pełna diagnoza koloru',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Diagnoza koloru',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'lesson-n17-procent-siwizny',
    lockedReason: 'Najpierw ukończ: Ocena procentu siwizny'
  },
  {
    id: 'lesson-n19-powtorka-mieszana',
    moduleId: 'numeracja-farb',
    title: 'Powtórka mieszana',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Podsumowanie',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'lesson-n18-pelna-diagnoza-koloru',
    lockedReason: 'Najpierw ukończ: Pełna diagnoza koloru'
  },
  {
    id: 'lesson-n20-sprawdzian-modulu',
    moduleId: 'numeracja-farb',
    title: 'Sprawdzian modułu',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Podsumowanie',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'lesson-n19-powtorka-mieszana',
    lockedReason: 'Najpierw ukończ: Powtórka mieszana'
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
  },
  {
    id: 'wlos-czesci-wlosa',
    moduleId: 'wlos-kolor',
    title: 'Łodyga, korzeń, cebulka',
    moduleTitle: 'Budowa i skład włosa',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'wlos-keratyna-rusztowanie',
    lockedReason: 'Najpierw ukończ: Keratyna — rusztowanie włosa'
  },
  {
    id: 'wlos-wlasciwosci-fizyczne',
    moduleId: 'wlos-kolor',
    title: 'Właściwości fizyczne włosa',
    moduleTitle: 'Budowa i skład włosa',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'wlos-czesci-wlosa',
    lockedReason: 'Najpierw ukończ: Łodyga, korzeń, cebulka'
  },
  {
    id: 'wlos-cykl-wzrostu',
    moduleId: 'wlos-kolor',
    title: 'Cykl wzrostu włosa',
    moduleTitle: 'Budowa i skład włosa',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'wlos-wlasciwosci-fizyczne',
    lockedReason: 'Najpierw ukończ: Właściwości fizyczne włosa'
  },
  {
    id: 'wlos-budowa-podsumowanie',
    moduleId: 'wlos-kolor',
    title: 'Budowa włosa — podsumowanie',
    moduleTitle: 'Budowa i skład włosa',
    moduleSubtitle: 'Podsumowanie',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'wlos-cykl-wzrostu',
    lockedReason: 'Najpierw ukończ: Cykl wzrostu włosa'
  },
  {
    id: 'wlos-ksztalt-co-utrzymuje',
    moduleId: 'wlos-ksztalt',
    title: 'Co utrzymuje kształt włosa?',
    moduleTitle: 'Włos, wiązania i zmiana kształtu',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'wlos-keratyna-rusztowanie',
    lockedReason: 'Najpierw ukończ: Keratyna — rusztowanie włosa'
  },
  {
    id: 'wlos-ksztalt-wodorowe',
    moduleId: 'wlos-ksztalt',
    title: 'Wiązania wodorowe',
    moduleTitle: 'Włos, wiązania i zmiana kształtu',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'wlos-ksztalt-co-utrzymuje',
    lockedReason: 'Najpierw ukończ: Co utrzymuje kształt włosa?'
  },
  {
    id: 'wlos-ksztalt-wilgoc-cieplo',
    moduleId: 'wlos-ksztalt',
    title: 'Wilgoć, ciepło i modelowanie',
    moduleTitle: 'Włos, wiązania i zmiana kształtu',
    moduleSubtitle: 'Modelowanie',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'wlos-ksztalt-wodorowe',
    lockedReason: 'Najpierw ukończ: Wiązania wodorowe'
  },
  {
    id: 'wlos-ksztalt-skret-po-walkach',
    moduleId: 'wlos-ksztalt',
    title: 'Skręt po wałkach',
    moduleTitle: 'Włos, wiązania i zmiana kształtu',
    moduleSubtitle: 'Modelowanie',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'wlos-ksztalt-wilgoc-cieplo',
    lockedReason: 'Najpierw ukończ: Wilgoć, ciepło i modelowanie'
  },
  {
    id: 'wlos-ksztalt-siarkowe',
    moduleId: 'wlos-ksztalt',
    title: 'Wiązania siarkowe',
    moduleTitle: 'Włos, wiązania i zmiana kształtu',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'wlos-ksztalt-skret-po-walkach',
    lockedReason: 'Najpierw ukończ: Skręt po wałkach'
  },
  {
    id: 'wlos-ksztalt-redukcja-utrwalenie',
    moduleId: 'wlos-ksztalt',
    title: 'Redukcja i utrwalenie',
    moduleTitle: 'Włos, wiązania i zmiana kształtu',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'wlos-ksztalt-siarkowe',
    lockedReason: 'Najpierw ukończ: Wiązania siarkowe'
  },
  {
    id: 'wlos-ksztalt-czasowa-czy-chemiczna',
    moduleId: 'wlos-ksztalt',
    title: 'Czasowa czy chemiczna?',
    moduleTitle: 'Włos, wiązania i zmiana kształtu',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'wlos-ksztalt-redukcja-utrwalenie',
    lockedReason: 'Najpierw ukończ: Redukcja i utrwalenie'
  },
  {
    id: 'wlos-kolor-melanina',
    moduleId: 'wlos-teoria-koloru',
    title: 'Melanina — naturalny barwnik',
    moduleTitle: 'Teoria koloru włosa',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'wlos-oslonka-kora-rdzen',
    lockedReason: 'Najpierw ukończ: Osłonka, kora i rdzeń'
  },
  {
    id: 'wlos-kolor-kolo-barw',
    moduleId: 'wlos-teoria-koloru',
    title: 'Koło barw',
    moduleTitle: 'Teoria koloru włosa',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'wlos-kolor-melanina',
    lockedReason: 'Najpierw ukończ: Melanina — naturalny barwnik'
  },
  {
    id: 'wlos-kolor-neutralizacja',
    moduleId: 'wlos-teoria-koloru',
    title: 'Neutralizacja niepożądanych odcieni',
    moduleTitle: 'Teoria koloru włosa',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'wlos-kolor-kolo-barw',
    lockedReason: 'Najpierw ukończ: Koło barw'
  },
  {
    id: 'wlos-kolor-chlonnosc',
    moduleId: 'wlos-teoria-koloru',
    title: 'Chłonność przy farbowaniu',
    moduleTitle: 'Teoria koloru włosa',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'wlos-kolor-neutralizacja',
    lockedReason: 'Najpierw ukończ: Neutralizacja niepożądanych odcieni'
  },
  {
    id: 'wlos-kolor-ton-w-ton-plukanka',
    moduleId: 'wlos-teoria-koloru',
    title: 'Ton w ton i płukanka',
    moduleTitle: 'Teoria koloru włosa',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'wlos-kolor-chlonnosc',
    lockedReason: 'Najpierw ukończ: Chłonność przy farbowaniu'
  },
  {
    id: 'wlos-kolor-roslinna-vs-oksydacyjna',
    moduleId: 'wlos-teoria-koloru',
    title: 'Farba roślinna czy oksydacyjna?',
    moduleTitle: 'Teoria koloru włosa',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'wlos-kolor-ton-w-ton-plukanka',
    lockedReason: 'Najpierw ukończ: Ton w ton i płukanka'
  },
  {
    id: 'trwala-wodna-czy-trwala',
    moduleId: 'trwala-procedura',
    title: 'Ondulacja wodna czy trwała?',
    moduleTitle: 'Trwała ondulacja — procedura',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'wlos-ksztalt-redukcja-utrwalenie',
    lockedReason: 'Najpierw ukończ: Redukcja i utrwalenie'
  },
  {
    id: 'trwala-mycie-przed-po',
    moduleId: 'trwala-procedura',
    title: 'Mycie przed i po zabiegu',
    moduleTitle: 'Trwała ondulacja — procedura',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'trwala-wodna-czy-trwala',
    lockedReason: 'Najpierw ukończ: Ondulacja wodna czy trwała?'
  },
  {
    id: 'trwala-techniki-nawijania',
    moduleId: 'trwala-procedura',
    title: 'Techniki nawijania',
    moduleTitle: 'Trwała ondulacja — procedura',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'trwala-mycie-przed-po',
    lockedReason: 'Najpierw ukończ: Mycie przed i po zabiegu'
  },
  {
    id: 'trwala-srednica-walkow',
    moduleId: 'trwala-procedura',
    title: 'Średnica wałków i spiralne',
    moduleTitle: 'Trwała ondulacja — procedura',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'trwala-techniki-nawijania',
    lockedReason: 'Najpierw ukończ: Techniki nawijania'
  },
  {
    id: 'trwala-przybory-i-przebieg',
    moduleId: 'trwala-procedura',
    title: 'Przybory i przebieg trwałej',
    moduleTitle: 'Trwała ondulacja — procedura',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'trwala-srednica-walkow',
    lockedReason: 'Najpierw ukończ: Średnica wałków i spiralne'
  },
  {
    id: 'trwala-trwalosc-ulozenia',
    moduleId: 'trwala-procedura',
    title: 'Trwałość ułożenia — decyzje',
    moduleTitle: 'Trwała ondulacja — procedura',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'trwala-przybory-i-przebieg',
    lockedReason: 'Najpierw ukończ: Przybory i przebieg trwałej'
  }

];

window.LessonsModuleOrder = ['ph', 'numeracja-farb', 'wlos-kolor', 'wlos-ksztalt', 'wlos-teoria-koloru', 'trwala-procedura'];

function getCatalogEntry(lessonId){
  var list = window.LessonsCatalog || [];
  for (var i = 0; i < list.length; i++){
    if (list[i].id === lessonId) return list[i];
  }
  return null;
}

function isAdminMode(){
  return !!(window.AdminMode && window.AdminMode.isActive());
}

function isCatalogLessonLocked(entry){
  if (!entry) return true;
  if (isAdminMode()) return false;
  if (entry.locked) return true;
  if (entry.requiresLessonId && !window.AppState.get().completedLessons[entry.requiresLessonId]) return true;
  return false;
}

function getLessonDisplayStatus(entry){
  if (!entry) return 'locked';
  if (isAdminMode()){
    if (window.AppState.get().completedLessons[entry.id]) return 'completed';
    return 'available';
  }
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
