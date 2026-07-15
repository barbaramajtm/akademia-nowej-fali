# Akademia Nowej Fali

## Cel projektu

Mobilna aplikacja edukacyjna (docelowo PWA) do nauki teorii fryzjerstwa przed egzaminem czeladniczym. Uczennice uczą się w krótkich sesjach — **aktywny MVP: moduły teoretyczne** (pierwszy moduł: pH). Lekcje fabularne (Sprawy salonowe) są w archiwum.

## Założenia MVP

- aplikacja mobilna (docelowo PWA)
- nauka do egzaminu czeladniczego
- nacisk na budowanie codziennego nawyku
- inspiracje Duolingo, Finch i Elevate
- treści wyłącznie z materiałów egzaminacyjnych
- fabuła jako oprawa, nie źródło wiedzy

## Aktualna architektura

Projekt to statyczna aplikacja webowa uruchamiana przez lokalny serwer HTTP (fetch nie działa z protokołu `file://`).

```
Akademia Nowe Fali/
├── index.html              — główny plik aplikacji (Home, Gablotka, Profil, Lekcja, nawigacja)
├── css/
│   └── styles.css          — cała warstwa wizualna (paleta, typografia, komponenty)
├── js/
│   ├── state.js            — trwały stan aplikacji (localStorage, jedno źródło prawdy)
│   ├── lessons-catalog.js  — katalog metadanych lekcji (tytuły, statusy, blokady)
│   ├── shell.js            — powłoka nawigacji i ekrany poza lekcją
│   └── app.js              — uniwersalny silnik lekcji (LessonEngine)
├── lessons/
│   ├── ph-co-oznacza-ph.json                 — L1 pH · Co oznacza pH?
│   ├── ph-jak-wplywa-na-wlos.json            — L2 pH · wpływ na włos
│   ├── ph-preparaty-fryzjerskie.json         — L3 pH · preparaty fryzjerskie
│   ├── ph-przywracanie-ph-po-zabiegu.json    — L4 pH · przywracanie po zabiegu
│   ├── ph-koloryzacja.json                   — L5 pH · koloryzacja
│   ├── ph-rozjasnianie.json                  — L6 pH · rozjaśnianie
│   ├── ph-szampony.json                      — L7 pH · szampony
│   ├── ph-odzywki-i-maski.json               — L8 pH · odżywki i maski
│   ├── ph-produkty-zakwaszajace.json         — L9 pH · produkty zakwaszające
│   ├── ph-podsumowanie-modulu.json           — L10 pH · podsumowanie modułu
│   └── archive/
│       └── koloryzacja-sprawy/               — archiwum Spraw salonowych (4 JSON)
│           ├── README.md
│           ├── sprawa-znikajacego-koloru.json
│           ├── sprawa-pierwszej-koloryzacji.json
│           ├── sprawa-nierownego-wchlaniania.json
│           └── sprawa-wyblaklego-koloru.json
├── LESSON_STANDARD.md                   — standard tworzenia lekcji (obowiązuje od L6)
├── prototypes/             — wcześniejsze prototypy HTML (referencja wizualna, nieużywane w aplikacji)
│   ├── akademia-nowej-fali-home.html
│   └── akademia-nowej-fali-lekcja-mvp.html
├── docs/                   — dokumentacja projektowa i scenariusze
│   ├── Akademia_Nowej_Fali_koncepcja_produktu.md
│   ├── briefing-kontynuacyjny.md
│   └── wzorcowa-lekcja-scenariusz.md
├── serve.ps1               — prosty serwer HTTP na porcie 8765 (PowerShell)
├── CHANGELOG.md            — historia zmian technicznych
└── PROJECT.md              — ten plik (trwała dokumentacja stanu projektu)
```

**Przepływ ładowania:** `index.html` → `state.js` → `lessons-catalog.js` → `shell.js` → `app.js`.

## Aktualne komponenty

### Home
Ekran główny z powitaniem, Kosmykami, Falą, serią dni, kartą hero (**pH we fryzjerstwie**), listą lekcji modułu (**10 lekcji**), skrótem do Gablotki. Placeholdery Misji dnia i modułów ukryte.

### Moduł pH (aktywna ścieżka — ukończony)
Dziesięć lekcji teoretycznych w kolejności: **Co oznacza pH?** → **Jak pH wpływa na włos?** → **Jakie pH mają preparaty fryzjerskie?** → **Dlaczego po zabiegu trzeba przywrócić właściwe pH?** → **pH podczas koloryzacji** → **pH podczas rozjaśniania** → **pH szamponów** → **pH odżywek i masek** → **pH produktów zakwaszających** → **Podsumowanie modułu pH**. Każda kolejna lekcja wymaga ukończenia poprzedniej (`requiresLessonId` w katalogu). Bez fabuły salonowej, bez kolekcji/odznak na completion.

### Lekcja
Widok pełnoekranowy z paskiem postępu, Kosmykami sesji, zadaniami i feedbackiem. Intro teoretyczne: `category`, `levelLabel`, opcjonalne `narratorText` / `stakeText` — bez klientki, gdy brak `intro.clientQuote`. Completion bez kolekcji, gdy brak `completion.collection`.

### Gablotka
Podstrona z kolekcją „Mistrzyni koloru” (sloty, pasek postępu, informacja o następnej odznace) oraz łączną liczbą zdobytych odznak.

### Profil
Podstrona z awatarem, imieniem użytkowniczki, poziomem Fali, serią dni i notką o przyszłych funkcjach.

### Shell
Warstwa nawigacji (`shell.js`): przełączanie widoków (home, gablotka, profile, lesson), dolna nawigacja, modal wyjścia z lekcji, synchronizacja UI ze stanem użytkowniczki, callback `onLessonComplete` po ukończeniu lekcji. API: `AppShell.resetProgress()` — reset postępu z konsoli.

### AppState
Moduł trwałego stanu (`state.js`, `window.AppState`): jedno źródło prawdy dla postępu. Funkcje: `createDefaultState()`, `loadState()`, `saveState()`, `completeLesson(payload)`, `resetProgress()`, `get()`. Klucz localStorage: `akademia-nowefali-v1`.

### LessonEngine
Uniwersalny silnik lekcji (`app.js`, `window.LessonEngine`): ładowanie JSON z `/lessons/`, walidacja schematu, 5 rendererów zadań, system nagród (Kosmyki, bonus za serię, bonus perfekcyjny), ekran końcowy z kolekcją. API: `LessonEngine.start(lessonId)`, `LessonEngine.abort()`.

## Mechaniki

Obecnie działające mechaniki:

1. **singleChoice** — wybór jednej odpowiedzi z listy opcji
2. **trueFalse** — prawda/mit (Mit czy prawda?)
3. **findError** — zaznaczanie błędów w wierszach karty zabiegu
4. **matching** — dopasowywanie par (lewa/prawa kolumna)
5. **ordering** — układanie kroków we właściwej kolejności (dotykanie, bez drag&drop)

Dodatkowe mechaniki systemowe:

- **Kosmyki** — waluta zdobywana za poprawne odpowiedzi, bonusy i ukończenie lekcji
- **Bonus za serię** — nagroda za N poprawnych odpowiedzi z rzędu (konfiguracja w JSON lekcji)
- **Bonus perfekcyjny** — nagroda za lekcję bez pomyłek
- **Kolekcje** — sloty w Gablocie, postęp X/Y
- **Fale** — poziom doświadczenia (wyświetlany, bez dynamicznej zmiany po lekcji)
- **Seria dni** — wyświetlana na Home i Profil (statyczna wartość demo)
- **Feedback** — panel z wyjaśnieniem, cytatem klientki, opcjonalną ciekawostką „Warto wiedzieć”
- **Modal wyjścia** — potwierdzenie przed porzuceniem lekcji w trakcie
- **Nawigacja Shell** — Home ↔ Gablotka ↔ Profil ↔ Lekcja

## Stan użytkownika

Informacje przechowywane w obiekcie `appState` (moduł `state.js`, klucz localStorage `akademia-nowefali-v1`):

| Pole | Opis |
|------|------|
| `user.label` | Etykieta użytkowniczki (domyślnie „Uczennica”) |
| `user.kosmyki` | Łączna liczba Kosmyków (start: 1240) |
| `user.fala` | Aktualny poziom Fali (start: 7) |
| `user.falaProgress` | Postęp do następnej Fali (`current` / `goal`) |
| `user.streakDays` | Dni serii (start: 12, statyczne) |
| `completedLessons` | Mapa ukończonych lekcji `{ lessonId: true }` |
| `totalBadges` | Łączna liczba zdobytych odznak (start: 11) |
| `collections` | Tablica kolekcji z `id`, `name`, `total`, `earned`, `earnedBadges`, `pendingBadge` |

**Postęp jest trwale zapisywany w localStorage.** Po odświeżeniu strony pozostają: Kosmyki, ukończone lekcje, stan kolekcji, liczba odznak i poziom Fali.

**Nie zapisujemy** rozpoczętej, ale niedokończonej lekcji — stan sesji lekcji (`app.js`: indeks zadania, Kosmyki w trakcie lekcji, odpowiedzi, pomyłki) jest ulotny.

**Zabezpieczenie:** `completeLesson()` ignoruje ponowne ukończenie tej samej lekcji — nagroda nie jest naliczana drugi raz.

**Reset:** `window.AppShell.resetProgress()` — czyści localStorage i przywraca stan domyślny.

## Lekcje

Każda lekcja to plik JSON w katalogu `lessons/` (np. `sprawa-znikajacego-koloru.json`).

**Katalog lekcji** (`js/lessons-catalog.js`) definiuje metadane UI: tytuł, status blokady, powiązanie z kolekcją. Silnik ładuje treść wyłącznie z JSON po `id`.

**Standard treści:** `LESSON_STANDARD.md` — obowiązkowe zasady fabuły, merytoryki, dialogów, mentorki (Ewa) i audytu źródeł dla każdej nowej Sprawy.

**Struktura JSON:**
- Metadane: `id`, `title`, `caseNumber`, `category`
- `intro` — cytat klientki, narrator, stawka, przycisk startu
- `rewards` — opcjonalne bonusy (`streakBonus`, `perfectBonus`)
- `tasks[]` — tablica zadań z polami wspólnymi (`id`, `type`, `question`, `reward`, `feedback`) i polami specyficznymi dla typu
- `completion` — ekran końcowy: tytuł, odznaka, kolekcja (`earnedBefore`, `total`), zapowiedź następnej Sprawy

**Silnik:**
1. Pobiera JSON przez `fetch('lessons/{id}.json')`
2. Waliduje wymagane pola i spójność typów zadań
3. Renderuje intro → zadania po kolei → ekran końcowy
4. Po ukończeniu wywołuje `AppShell.onLessonComplete(payload)`

Nowe lekcje dodaje się wyłącznie jako nowe pliki JSON — bez zmian w silniku (o ile typy zadań są znane).

## Kolekcje

Kolekcja „Mistrzyni koloru” ma 5 slotów. Stan początkowy: **3/5** (trzy wypełnione sloty).

Logika postępu:
- **3/5** — stan startowy
- **4/5** — po ukończeniu `sprawa-znikajacego-koloru` (JSON podaje `earnedBefore: 3`, silnik liczy `earnedAfter = 4`); **odznaka jeszcze NIE jest przyznawana**
- **5/5** — po ukończeniu `sprawa-pierwszej-koloryzacji` (JSON podaje `earnedBefore: 4`)
- **Odznaka „Detektyw koloru”** — przyznawana **tylko raz**, gdy `earnedAfter >= total` (5/5); zapis w `collections[].earnedBadges`

Zabezpieczenia:
- Ponowne ukończenie tej samej lekcji nie nalicza nagrody (`completeLesson` + `completedLessons`)
- Zablokowana lekcja (`locked: true` w katalogu) nie uruchamia silnika
- Trzecia lekcja wymaga ukończenia `sprawa-pierwszej-koloryzacji` (`requiresLessonId` w katalogu)

Na Gablocie: pusty slot `slot-pending` na pozycji `earned`, dopóki kolekcja nie jest pełna.

**Uwaga (Sprint 1):** kolekcja „Mistrzyni koloru” ma 5 slotów i kończy się na L6. Lekcje L7+ nadal przyznają Kosmyki, ale `earnedBefore: 5` — bez nowego slotu w Gablocie (do rozwiązania po Sprint 1).

## Sprint 1 — pierwszy kompletny moduł kursu

**Cel:** 10 pełnych lekcji kursu **Koloryzacja**, zgodnych z `LESSON_STANDARD.md`, opartych wyłącznie na `source-materials`, z audytem źródeł, gotowych w aplikacji.

**Proces per lekcja:** analiza materiałów → fabuła → JSON → audyt → test → zapis + aktualizacja `PROJECT.md` i `CHANGELOG.md`.

**Bez rozbudowy silnika, UX ani architektury** (chyba że bloker).

| # | ID lekcji | Status |
|---|-----------|--------|
| 1 | `sprawa-znikajacego-koloru` (L1) | ✓ |
| 2 | `sprawa-pierwszej-koloryzacji` (L6) | ✓ |
| 3 | `sprawa-nierownego-wchlaniania` (L7) | ✓ (review OK) |
| 4 | `sprawa-wyblaklego-koloru` (L17) | ✓ |
| 5 | L18 — rozjaśnianie | — |
| 6 | L19 — rozjaśnianie cd. | — |
| 7 | L20 | — |
| 8 | L21 | — |
| 9 | L22 | — |
| 10 | L23 | — |

Po 10 lekcjach: stop development → wersja do testów z uczennicami.

## Aktualny stan projektu

### Co działa
- Pełna aplikacja w jednym `index.html` z czterema widokami
- Silnik lekcji z 5 typami zadań i walidacją JSON
- Cztery kompletne lekcje merytoryczne (L1, L6, L7, L17) — **Sprint 1: 4/10**
- Lista Spraw na Home (4 kafelki w Koloryzacji)
- Standard lekcji: `LESSON_STANDARD.md`
- Logika kolekcji 3/5 → 4/5 → 5/5 z odznaką przy pełnej kolekcji
- Przepływ: Home → Lekcja → ekran końcowy → Home / Gablotka
- Gablotka i Profil zsynchronizowane ze stanem aplikacji
- Trwały zapis postępu w localStorage
- Reset postępu z konsoli: `AppShell.resetProgress()`
- Lokalny serwer (`serve.ps1`, port 8765)

### Czego jeszcze nie ma
- Pozostałe 6 lekcji Sprintu 1 (L18–L23)
- Pole `mentorTip` w silniku (Ewa obecnie w `funFact`)
- Dynamiczna zmiana poziomu Fali po zdobyciu Kosmyków
- Prawdziwa mechanika serii dni
- Misja dnia, moduły, powtórki, ranking (placeholdery w UI)
- Konto użytkowniczki, onboarding, RODO
- Backend, panel instruktorski
- PWA (manifest, service worker)

## Roadmap

### Najbliższe zadania (Sprint 1)
- L18 — następna Sprawa z kursu Koloryzacja (R3: rozjaśnianie)

### Późniejsze zadania
- Ekran powtórek dnia
- Dynamiczny postęp Fali i serii dni
- Kolejne moduły i Sprawy
- Onboarding i konto użytkowniczki
- PWA

## Zasady projektu

- nie dodajemy nowych funkcji bez potrzeby
- nie zmieniamy wyglądu bez uzasadnienia
- treści wyłącznie z materiałów egzaminacyjnych (cech rzemiosł)
- uniwersalny silnik lekcji — nowe Sprawy to nowe pliki JSON
- kolejne lekcje jako JSON, bez zmian w silniku
- prostota ponad rozbudowę
- fabuła jako oprawa, nie źródło wiedzy
- każde twierdzenie merytoryczne musi mieć źródło w materiałach (pole robocze, niewidoczne w UI)
- żadnych nowych typów zadań bez decyzji produktowej

## Ostatnia wykonana praca

**Sprint 1 — L17 „Sprawa wyblakłego koloru” (4/10) + review L7.**

- **`LESSON_STANDARD.md`** — zasada odkrywania, obowiązkowy Review jakości (§11)
- **`lessons/sprawa-nierownego-wchlaniania.json`** — poprawki A–F po review; L7 uznana za gotową
- **`lessons/sprawa-wyblaklego-koloru.json`** — L17: odświeżanie/repigmentacja (Zosia)
- **`js/lessons-catalog.js`** — wpis L17; `requiresLessonId: sprawa-nierownego-wchlaniania`

**Poprzedni etap:** L7 pierwsza wersja (3/10).
