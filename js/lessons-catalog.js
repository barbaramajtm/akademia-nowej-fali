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
    locked: true,
    requiresLessonId: 'wlos-budowa-podsumowanie',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'ph-jak-wplywa-na-wlos',
    moduleId: 'ph',
    title: 'Jak pH wpływa na włos?',
    moduleTitle: 'pH we fryzjerstwie',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'ph-co-oznacza-ph',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'ph-preparaty-fryzjerskie',
    moduleId: 'ph',
    title: 'Jakie pH mają preparaty fryzjerskie?',
    moduleTitle: 'pH we fryzjerstwie',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'ph-jak-wplywa-na-wlos',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'ph-przywracanie-ph-po-zabiegu',
    moduleId: 'ph',
    title: 'Dlaczego po zabiegu trzeba przywrócić właściwe pH?',
    moduleTitle: 'pH we fryzjerstwie',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'ph-preparaty-fryzjerskie',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'ph-koloryzacja',
    moduleId: 'ph',
    title: 'pH podczas koloryzacji',
    moduleTitle: 'pH we fryzjerstwie',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'ph-przywracanie-ph-po-zabiegu',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'ph-rozjasnianie',
    moduleId: 'ph',
    title: 'pH podczas rozjaśniania',
    moduleTitle: 'pH we fryzjerstwie',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'ph-koloryzacja',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'ph-szampony',
    moduleId: 'ph',
    title: 'pH szamponów',
    moduleTitle: 'pH we fryzjerstwie',
    moduleSubtitle: 'Pielęgnacja',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'ph-rozjasnianie',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'ph-odzywki-i-maski',
    moduleId: 'ph',
    title: 'pH odżywek i masek',
    moduleTitle: 'pH we fryzjerstwie',
    moduleSubtitle: 'Pielęgnacja',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'ph-szampony',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'ph-produkty-zakwaszajace',
    moduleId: 'ph',
    title: 'pH produktów zakwaszających',
    moduleTitle: 'pH we fryzjerstwie',
    moduleSubtitle: 'Pielęgnacja',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'ph-odzywki-i-maski',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'ph-podsumowanie-modulu',
    moduleId: 'ph',
    title: 'Podsumowanie modułu pH',
    moduleTitle: 'pH we fryzjerstwie',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'ph-produkty-zakwaszajace',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'wlos-z-czego-sklada-sie',
    moduleId: 'wlos-kolor',
    title: 'Z czego składa się włos?',
    moduleTitle: 'Budowa i skład włosa',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'intelligent-rozmowa',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'wlos-oslonka-kora-rdzen',
    moduleId: 'wlos-kolor',
    title: 'Osłonka, kora i rdzeń',
    moduleTitle: 'Budowa i skład włosa',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'wlos-z-czego-sklada-sie',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'wlos-keratyna-rusztowanie',
    moduleId: 'wlos-kolor',
    title: 'Keratyna — rusztowanie włosa',
    moduleTitle: 'Budowa i skład włosa',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'wlos-oslonka-kora-rdzen',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'wlos-czesci-wlosa',
    moduleId: 'wlos-kolor',
    title: 'Łodyga, korzeń, cebulka',
    moduleTitle: 'Budowa i skład włosa',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'wlos-keratyna-rusztowanie',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'wlos-wlasciwosci-fizyczne',
    moduleId: 'wlos-kolor',
    title: 'Właściwości fizyczne włosa',
    moduleTitle: 'Budowa i skład włosa',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'wlos-czesci-wlosa',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'wlos-cykl-wzrostu',
    moduleId: 'wlos-kolor',
    title: 'Cykl wzrostu włosa',
    moduleTitle: 'Budowa i skład włosa',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'wlos-wlasciwosci-fizyczne',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'wlos-budowa-podsumowanie',
    moduleId: 'wlos-kolor',
    title: 'Budowa włosa — podsumowanie',
    moduleTitle: 'Budowa i skład włosa',
    moduleSubtitle: 'Podsumowanie',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'wlos-cykl-wzrostu',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'joico-kpak-co-to',
    moduleId: 'joico-kpak',
    title: 'Czym jest JOICO K-PAK?',
    moduleTitle: 'JOICO K-PAK — regeneracja',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: false
  },
  {
    id: 'joico-kpak-owrn',
    moduleId: 'joico-kpak',
    title: 'O-W-R-N: mapa czterech etapów',
    moduleTitle: 'JOICO K-PAK — regeneracja',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'joico-kpak-co-to',
    lockedReason: 'Najpierw ukończ: Czym jest JOICO K-PAK?'
  },
  {
    id: 'joico-kpak-o-cel',
    moduleId: 'joico-kpak',
    title: 'Oczyszczanie: po co ten etap',
    moduleTitle: 'JOICO K-PAK — regeneracja',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'joico-kpak-owrn',
    lockedReason: 'Najpierw ukończ: O-W-R-N: mapa czterech etapów'
  },
  {
    id: 'joico-kpak-o-dlugosci',
    moduleId: 'joico-kpak',
    title: 'Oczyszczanie: długości vs skóra głowy',
    moduleTitle: 'JOICO K-PAK — regeneracja',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'joico-kpak-o-cel',
    lockedReason: 'Najpierw ukończ: Oczyszczanie: po co ten etap'
  },
  {
    id: 'joico-kpak-o-czas',
    moduleId: 'joico-kpak',
    title: 'Oczyszczanie: czas, spłukanie, ręcznik',
    moduleTitle: 'JOICO K-PAK — regeneracja',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'joico-kpak-o-dlugosci',
    lockedReason: 'Najpierw ukończ: Oczyszczanie: długości vs skóra głowy'
  },
  {
    id: 'joico-kpak-w-cel',
    moduleId: 'joico-kpak',
    title: 'Wygładzanie: po co ten etap',
    moduleTitle: 'JOICO K-PAK — regeneracja',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'joico-kpak-o-czas',
    lockedReason: 'Najpierw ukończ: Oczyszczanie: czas, spłukanie, ręcznik'
  },
  {
    id: 'joico-kpak-w-jak',
    moduleId: 'joico-kpak',
    title: 'Wygładzanie: jak nakładać',
    moduleTitle: 'JOICO K-PAK — regeneracja',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'joico-kpak-w-cel',
    lockedReason: 'Najpierw ukończ: Wygładzanie: po co ten etap'
  },
  {
    id: 'joico-kpak-r-cel',
    moduleId: 'joico-kpak',
    title: 'Rekonstrukcja: po co ten etap',
    moduleTitle: 'JOICO K-PAK — regeneracja',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'joico-kpak-w-jak',
    lockedReason: 'Najpierw ukończ: Wygładzanie: jak nakładać'
  },
  {
    id: 'joico-kpak-r-jak',
    moduleId: 'joico-kpak',
    title: 'Rekonstrukcja: jak nakładać',
    moduleTitle: 'JOICO K-PAK — regeneracja',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'joico-kpak-r-cel',
    lockedReason: 'Najpierw ukończ: Rekonstrukcja: po co ten etap'
  },
  {
    id: 'joico-kpak-powtorzenie-2-3',
    moduleId: 'joico-kpak',
    title: 'Powtórka kroków 2 i 3',
    moduleTitle: 'JOICO K-PAK — regeneracja',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'joico-kpak-r-jak',
    lockedReason: 'Najpierw ukończ: Rekonstrukcja: jak nakładać'
  },
  {
    id: 'joico-kpak-tonacja-po-3',
    moduleId: 'joico-kpak',
    title: 'Tonacja po kroku 3',
    moduleTitle: 'JOICO K-PAK — regeneracja',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'joico-kpak-powtorzenie-2-3',
    lockedReason: 'Najpierw ukończ: Powtórka kroków 2 i 3'
  },
  {
    id: 'joico-kpak-n-cel',
    moduleId: 'joico-kpak',
    title: 'Nawilżenie: po co ten etap',
    moduleTitle: 'JOICO K-PAK — regeneracja',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'joico-kpak-tonacja-po-3',
    lockedReason: 'Najpierw ukończ: Tonacja po kroku 3'
  },
  {
    id: 'joico-kpak-n-jak',
    moduleId: 'joico-kpak',
    title: 'Nawilżenie: jak nakładać',
    moduleTitle: 'JOICO K-PAK — regeneracja',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'joico-kpak-n-cel',
    lockedReason: 'Najpierw ukończ: Nawilżenie: po co ten etap'
  },
  {
    id: 'joico-kpak-procedura',
    moduleId: 'joico-kpak',
    title: 'Procedura: cała kolejność bez kartki',
    moduleTitle: 'JOICO K-PAK — regeneracja',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'joico-kpak-n-jak',
    lockedReason: 'Najpierw ukończ: Nawilżenie: jak nakładać'
  },
  {
    id: 'joico-kpak-scenki-salonu',
    moduleId: 'joico-kpak',
    title: 'Scenki przy fotelu — K-PAK',
    moduleTitle: 'JOICO K-PAK — regeneracja',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'joico-kpak-procedura',
    lockedReason: 'Najpierw ukończ: Procedura: cała kolejność bez kartki'
  },
  {
    id: 'joico-kpak-rozmowa',
    moduleId: 'joico-kpak',
    title: 'Rozmowa i technologie',
    moduleTitle: 'JOICO K-PAK — regeneracja',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'joico-kpak-scenki-salonu',
    lockedReason: 'Najpierw ukończ: Scenki przy fotelu — K-PAK'
  },
  {
    id: 'intelligent-co-to',
    moduleId: 'intelligent-babilon',
    title: 'Czym jest Babilon Intelligent?',
    moduleTitle: 'Babilon Intelligent — regeneracja',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'joico-kpak-rozmowa',
    lockedReason: 'Najpierw ukończ: Rozmowa i technologie'
  },
  {
    id: 'intelligent-cztery-fazy',
    moduleId: 'intelligent-babilon',
    title: 'Cztery fazy: I–II–III–IV',
    moduleTitle: 'Babilon Intelligent — regeneracja',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'intelligent-co-to',
    lockedReason: 'Najpierw ukończ: Czym jest Babilon Intelligent?'
  },
  {
    id: 'intelligent-budowa-wlos',
    moduleId: 'intelligent-babilon',
    title: 'Intelligent a budowa włosa',
    moduleTitle: 'Babilon Intelligent — regeneracja',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'intelligent-cztery-fazy',
    lockedReason: 'Najpierw ukończ: Cztery fazy: I–II–III–IV'
  },
  {
    id: 'intelligent-procedura',
    moduleId: 'intelligent-babilon',
    title: 'Procedura na stanowisku',
    moduleTitle: 'Babilon Intelligent — regeneracja',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'intelligent-budowa-wlos',
    lockedReason: 'Najpierw ukończ: Intelligent a budowa włosa'
  },
  {
    id: 'intelligent-sklad-czasy',
    moduleId: 'intelligent-babilon',
    title: 'Składniki i czasy faz',
    moduleTitle: 'Babilon Intelligent — regeneracja',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'intelligent-procedura',
    lockedReason: 'Najpierw ukończ: Procedura na stanowisku'
  },
  {
    id: 'intelligent-przed-po-kolorze',
    moduleId: 'intelligent-babilon',
    title: 'Przed i po koloryzacji',
    moduleTitle: 'Babilon Intelligent — regeneracja',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'intelligent-sklad-czasy',
    lockedReason: 'Najpierw ukończ: Składniki i czasy faz'
  },
  {
    id: 'intelligent-scenki-salonu',
    moduleId: 'intelligent-babilon',
    title: 'Scenki przy fotelu — Intelligent',
    moduleTitle: 'Babilon Intelligent — regeneracja',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'intelligent-przed-po-kolorze',
    lockedReason: 'Najpierw ukończ: Przed i po koloryzacji'
  },
  {
    id: 'intelligent-rozmowa',
    moduleId: 'intelligent-babilon',
    title: 'Rozmowa i domknięcie',
    moduleTitle: 'Babilon Intelligent — regeneracja',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: false,
    requiresLessonId: 'intelligent-scenki-salonu',
    lockedReason: 'Najpierw ukończ: Scenki przy fotelu — Intelligent'
  },
  {
    id: 'lesson-n1-numer-farby',
    moduleId: 'numeracja-farb',
    title: 'Co widać w numerze farby',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Odczyt numeru',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'ph-podsumowanie-modulu',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'lesson-n2-liczba-przed-separatorem',
    moduleId: 'numeracja-farb',
    title: 'Liczba przed separatorem',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Odczyt numeru',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'lesson-n1-numer-farby',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'lesson-n3-skala-poziomow',
    moduleId: 'numeracja-farb',
    title: 'Skala poziomów 1–10',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Odczyt numeru',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'lesson-n2-liczba-przed-separatorem',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'lesson-n4-refleks-glowny',
    moduleId: 'numeracja-farb',
    title: 'Pierwsza cyfra po separatorze',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Odczyt numeru',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'lesson-n3-skala-poziomow',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'lesson-n5-refleks-dodatkowy',
    moduleId: 'numeracja-farb',
    title: 'Druga cyfra po separatorze',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Odczyt numeru',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'lesson-n4-refleks-glowny',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'lesson-n6-kolejnosc-refleksow',
    moduleId: 'numeracja-farb',
    title: 'Dlaczego 7.13 i 7.31 to nie to samo',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Odczyt numeru',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'lesson-n5-refleks-dodatkowy',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'lesson-n7-podwojny-refleks',
    moduleId: 'numeracja-farb',
    title: 'Co oznacza 7.11',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Odczyt numeru',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'lesson-n6-kolejnosc-refleksow',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'lesson-n8-czytanie-numeru',
    moduleId: 'numeracja-farb',
    title: 'Czytanie całego numeru krok po kroku',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Odczyt numeru',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'lesson-n7-podwojny-refleks',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'lesson-n9-separatory',
    moduleId: 'numeracja-farb',
    title: 'Separatory i nazwy stosowane przez marki',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Odczyt numeru',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'lesson-n8-czytanie-numeru',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'lesson-n10-legenda-producenta',
    moduleId: 'numeracja-farb',
    title: 'Legenda producenta',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Odczyt numeru',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'lesson-n9-separatory',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'lesson-n11-rozpoznawanie-poziomow',
    moduleId: 'numeracja-farb',
    title: 'Rozpoznawanie poziomów 1–10',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Diagnoza koloru',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'lesson-n10-legenda-producenta',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'lesson-n12-poziom-a-refleks',
    moduleId: 'numeracja-farb',
    title: 'Poziom to nie refleks',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Diagnoza koloru',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'lesson-n11-rozpoznawanie-poziomow',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'lesson-n13-sytuacje-kolorystyczne',
    moduleId: 'numeracja-farb',
    title: 'Co właściwie oceniamy na włosach klientki',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Diagnoza koloru',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'lesson-n12-poziom-a-refleks',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'lesson-n14-naturalny-odrost',
    moduleId: 'numeracja-farb',
    title: 'Naturalny odrost',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Diagnoza koloru',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'lesson-n13-sytuacje-kolorystyczne',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'lesson-n15-kolor-kosmetyczny',
    moduleId: 'numeracja-farb',
    title: 'Kolor kosmetyczny a stan faktyczny',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Diagnoza koloru',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'lesson-n14-naturalny-odrost',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'lesson-n16-rozjasnione-strefy',
    moduleId: 'numeracja-farb',
    title: 'Rozjaśnienia i różne poziomy na jednej głowie',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Diagnoza koloru',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'lesson-n15-kolor-kosmetyczny',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'lesson-n17-procent-siwizny',
    moduleId: 'numeracja-farb',
    title: 'Ocena procentu siwizny',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Diagnoza koloru',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'lesson-n16-rozjasnione-strefy',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'lesson-n18-pelna-diagnoza-koloru',
    moduleId: 'numeracja-farb',
    title: 'Pełna diagnoza koloru',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Diagnoza koloru',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'lesson-n17-procent-siwizny',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'lesson-n19-powtorka-mieszana',
    moduleId: 'numeracja-farb',
    title: 'Powtórka mieszana',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Podsumowanie',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'lesson-n18-pelna-diagnoza-koloru',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'lesson-n20-sprawdzian-modulu',
    moduleId: 'numeracja-farb',
    title: 'Sprawdzian modułu',
    moduleTitle: 'Numeracja farb i diagnoza koloru',
    moduleSubtitle: 'Podsumowanie',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'lesson-n19-powtorka-mieszana',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'oksydant-proporcja-11-5',
    moduleId: 'oksydant-proporcje',
    title: 'Proporcja 1:1,5 — farba do oksydantu',
    moduleTitle: 'Oksydant — proporcje i mieszanie',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'lesson-n20-sprawdzian-modulu',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'oksydant-gramy-szybko',
    moduleId: 'oksydant-proporcje',
    title: 'Szybkie gramy: 15, 20, 25, 35',
    moduleTitle: 'Oksydant — proporcje i mieszanie',
    moduleSubtitle: 'Ćwiczenia',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'oksydant-proporcja-11-5',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'oksydant-polka-stezen',
    moduleId: 'oksydant-proporcje',
    title: 'Półka stężeń: 1,5% · 3% · 6% · 9% · 12%',
    moduleTitle: 'Oksydant — proporcje i mieszanie',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'oksydant-gramy-szybko',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'oksydant-mieszanie-7',
    moduleId: 'oksydant-proporcje',
    title: 'Jak zrobić 7% z 6% i 9%',
    moduleTitle: 'Oksydant — proporcje i mieszanie',
    moduleSubtitle: 'Ćwiczenia',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'oksydant-polka-stezen',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'oksydant-sprawdzian',
    moduleId: 'oksydant-proporcje',
    title: 'Sprawdzian: szybkie szacowanie',
    moduleTitle: 'Oksydant — proporcje i mieszanie',
    moduleSubtitle: 'Sprawdzian',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'oksydant-mieszanie-7',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'wlos-ksztalt-co-utrzymuje',
    moduleId: 'wlos-ksztalt',
    title: 'Co utrzymuje kształt włosa?',
    moduleTitle: 'Włos, wiązania i zmiana kształtu',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'oksydant-sprawdzian',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'wlos-ksztalt-wodorowe',
    moduleId: 'wlos-ksztalt',
    title: 'Wiązania wodorowe',
    moduleTitle: 'Włos, wiązania i zmiana kształtu',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'wlos-ksztalt-co-utrzymuje',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'wlos-ksztalt-wilgoc-cieplo',
    moduleId: 'wlos-ksztalt',
    title: 'Wilgoć, ciepło i modelowanie',
    moduleTitle: 'Włos, wiązania i zmiana kształtu',
    moduleSubtitle: 'Modelowanie',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'wlos-ksztalt-wodorowe',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'wlos-ksztalt-skret-po-walkach',
    moduleId: 'wlos-ksztalt',
    title: 'Skręt po wałkach',
    moduleTitle: 'Włos, wiązania i zmiana kształtu',
    moduleSubtitle: 'Modelowanie',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'wlos-ksztalt-wilgoc-cieplo',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'wlos-ksztalt-siarkowe',
    moduleId: 'wlos-ksztalt',
    title: 'Wiązania siarkowe',
    moduleTitle: 'Włos, wiązania i zmiana kształtu',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'wlos-ksztalt-skret-po-walkach',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'wlos-ksztalt-redukcja-utrwalenie',
    moduleId: 'wlos-ksztalt',
    title: 'Redukcja i utrwalenie',
    moduleTitle: 'Włos, wiązania i zmiana kształtu',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'wlos-ksztalt-siarkowe',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'wlos-ksztalt-czasowa-czy-chemiczna',
    moduleId: 'wlos-ksztalt',
    title: 'Czasowa czy chemiczna?',
    moduleTitle: 'Włos, wiązania i zmiana kształtu',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'wlos-ksztalt-redukcja-utrwalenie',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'wlos-kolor-melanina',
    moduleId: 'wlos-teoria-koloru',
    title: 'Melanina — naturalny barwnik',
    moduleTitle: 'Teoria koloru włosa',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'wlos-oslonka-kora-rdzen',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'wlos-kolor-kolo-barw',
    moduleId: 'wlos-teoria-koloru',
    title: 'Koło barw',
    moduleTitle: 'Teoria koloru włosa',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'wlos-kolor-melanina',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'wlos-kolor-neutralizacja',
    moduleId: 'wlos-teoria-koloru',
    title: 'Neutralizacja niepożądanych odcieni',
    moduleTitle: 'Teoria koloru włosa',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'wlos-kolor-kolo-barw',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'wlos-kolor-chlonnosc',
    moduleId: 'wlos-teoria-koloru',
    title: 'Chłonność przy farbowaniu',
    moduleTitle: 'Teoria koloru włosa',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'wlos-kolor-neutralizacja',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'wlos-kolor-ton-w-ton-plukanka',
    moduleId: 'wlos-teoria-koloru',
    title: 'Ton w ton i płukanka',
    moduleTitle: 'Teoria koloru włosa',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'wlos-kolor-chlonnosc',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'wlos-kolor-roslinna-vs-oksydacyjna',
    moduleId: 'wlos-teoria-koloru',
    title: 'Farba roślinna czy oksydacyjna?',
    moduleTitle: 'Teoria koloru włosa',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'wlos-kolor-ton-w-ton-plukanka',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'trwala-wodna-czy-trwala',
    moduleId: 'trwala-procedura',
    title: 'Ondulacja wodna czy trwała?',
    moduleTitle: 'Trwała ondulacja — procedura',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'wlos-ksztalt-redukcja-utrwalenie',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'trwala-mycie-przed-po',
    moduleId: 'trwala-procedura',
    title: 'Mycie przed i po zabiegu',
    moduleTitle: 'Trwała ondulacja — procedura',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'trwala-wodna-czy-trwala',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'trwala-techniki-nawijania',
    moduleId: 'trwala-procedura',
    title: 'Techniki nawijania',
    moduleTitle: 'Trwała ondulacja — procedura',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'trwala-mycie-przed-po',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'trwala-srednica-walkow',
    moduleId: 'trwala-procedura',
    title: 'Średnica wałków i spiralne',
    moduleTitle: 'Trwała ondulacja — procedura',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'trwala-techniki-nawijania',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'trwala-przybory-i-przebieg',
    moduleId: 'trwala-procedura',
    title: 'Przybory i przebieg trwałej',
    moduleTitle: 'Trwała ondulacja — procedura',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'trwala-srednica-walkow',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'trwala-trwalosc-ulozenia',
    moduleId: 'trwala-procedura',
    title: 'Trwałość ułożenia — decyzje',
    moduleTitle: 'Trwała ondulacja — procedura',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'trwala-przybory-i-przebieg',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'bhp-po-co-higiena',
    moduleId: 'bhp-higiena-salonu',
    title: 'Po co higiena w salonie?',
    moduleTitle: 'BHP i higiena salonu',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'bhp-dezynfekcja-sterylizacja',
    moduleId: 'bhp-higiena-salonu',
    title: 'Dezynfekcja czy sterylizacja?',
    moduleTitle: 'BHP i higiena salonu',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'bhp-po-co-higiena',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'bhp-miejsca-ryzyka',
    moduleId: 'bhp-higiena-salonu',
    title: 'Gdzie kryją się drobnoustroje?',
    moduleTitle: 'BHP i higiena salonu',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'bhp-dezynfekcja-sterylizacja',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'bhp-urzadzenia-prad',
    moduleId: 'bhp-higiena-salonu',
    title: 'Prąd, woda i sprzęt',
    moduleTitle: 'BHP i higiena salonu',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'bhp-miejsca-ryzyka',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'bhp-salon-pracownik',
    moduleId: 'bhp-higiena-salonu',
    title: 'Bezpieczny salon i obowiązki',
    moduleTitle: 'BHP i higiena salonu',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'bhp-urzadzenia-prad',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'bhp-klient-choroby-alergie',
    moduleId: 'bhp-higiena-salonu',
    title: 'Kiedy odmówić usługi?',
    moduleTitle: 'BHP i higiena salonu',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'bhp-salon-pracownik',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'strzyz-techniki-lista',
    moduleId: 'strzyzenie-narzedzia',
    title: 'Techniki strzyżenia — lista',
    moduleTitle: 'Strzyżenie — techniki i narzędzia',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'strzyz-degazowanie',
    moduleId: 'strzyzenie-narzedzia',
    title: 'Degażowanie',
    moduleTitle: 'Strzyżenie — techniki i narzędzia',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'strzyz-techniki-lista',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'strzyz-cieniowanie',
    moduleId: 'strzyzenie-narzedzia',
    title: 'Sposoby cieniowania',
    moduleTitle: 'Strzyżenie — techniki i narzędzia',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'strzyz-degazowanie',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'strzyz-rodzaje-nozyczek',
    moduleId: 'strzyzenie-narzedzia',
    title: 'Rodzaje nożyczek',
    moduleTitle: 'Strzyżenie — techniki i narzędzia',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'strzyz-cieniowanie',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'strzyz-maszynki',
    moduleId: 'strzyzenie-narzedzia',
    title: 'Maszynki i konturówka',
    moduleTitle: 'Strzyżenie — techniki i narzędzia',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'strzyz-rodzaje-nozyczek',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'strzyz-grzebienie-konserwacja',
    moduleId: 'strzyzenie-narzedzia',
    title: 'Grzebienie, konserwacja, brzytwa',
    moduleTitle: 'Strzyżenie — techniki i narzędzia',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'strzyz-maszynki',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'prostowanie-sposoby',
    moduleId: 'prostowanie-wlosow',
    title: 'Sposoby prostowania włosów',
    moduleTitle: 'Prostowanie włosów',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'strzyz-grzebienie-konserwacja',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'prostowanie-prostownica-efekt',
    moduleId: 'prostowanie-wlosow',
    title: 'Prostownica: efekt nietrwały',
    moduleTitle: 'Prostowanie włosów',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'prostowanie-sposoby',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'prostowanie-plytki-temperatura',
    moduleId: 'prostowanie-wlosow',
    title: 'Płytki, temperatura i termostat',
    moduleTitle: 'Prostowanie włosów',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'prostowanie-prostownica-efekt',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'prostowanie-suche-mokre',
    moduleId: 'prostowanie-wlosow',
    title: 'Prostownice: suche i mokre',
    moduleTitle: 'Prostowanie włosów',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'prostowanie-plytki-temperatura',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'prostowanie-chemiczne-mostki',
    moduleId: 'prostowanie-wlosow',
    title: 'Chemiczne prostowanie i mostki',
    moduleTitle: 'Prostowanie włosów',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'prostowanie-suche-mokre',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'balejaz-co-to',
    moduleId: 'balejaz',
    title: 'Co to jest balejaż?',
    moduleTitle: 'Balejaż',
    moduleSubtitle: 'Podstawy',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'prostowanie-chemiczne-mostki',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'balejaz-wybrane-pasma',
    moduleId: 'balejaz',
    title: 'Wybrane pasma, nie cała głowa',
    moduleTitle: 'Balejaż',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'balejaz-co-to',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'balejaz-piec-krokow',
    moduleId: 'balejaz',
    title: 'Pięć kroków balejażu',
    moduleTitle: 'Balejaż',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'balejaz-wybrane-pasma',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'balejaz-produkt-i-folia',
    moduleId: 'balejaz',
    title: 'Rozjaśniacz lub farba + folia',
    moduleTitle: 'Balejaż',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'balejaz-piec-krokow',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  },
  {
    id: 'balejaz-konsultacja',
    moduleId: 'balejaz',
    title: 'Kiedy proponujesz balejaż?',
    moduleTitle: 'Balejaż',
    moduleSubtitle: 'Zabiegi',
    rewardLabel: 'do 75 Kosmyków',
    locked: true,
    requiresLessonId: 'balejaz-produkt-i-folia',
    lockedReason: 'Wkrótce — na razie uczysz się regeneracji (JOICO i Intelligent)'
  }

];

window.LessonsModuleOrder = ['joico-kpak', 'intelligent-babilon', 'wlos-kolor', 'ph', 'numeracja-farb', 'oksydant-proporcje', 'wlos-ksztalt', 'wlos-teoria-koloru', 'trwala-procedura', 'bhp-higiena-salonu', 'strzyzenie-narzedzia', 'prostowanie-wlosow', 'balejaz'];

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
