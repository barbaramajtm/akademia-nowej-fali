# Changelog — Akademia Nowej Fali

Format oparty na datach. Najnowsze wpisy na górze.

## 2026-07-23 — Profil: oko wyżej w hero

### Zmieniono
- Motyw oka na profilu przesunięty w górę (`top: 56px`), żeby nie chował się pod łukiem / `overflow`

---

## 2026-07-23 — Home: powitanie „Witaj ♥”

### Zmieniono
- Strona główna: zamiast „Cześć, Uczennico” — **Witaj** + serduszko

---

## 2026-07-23 — Moduł: oksydant — proporcje i mieszanie

### Dodano
- 5 lekcji: `oksydant-proporcja-11-5`, `oksydant-gramy-szybko`, `oksydant-polka-stezen`, `oksydant-mieszanie-7`, `oksydant-sprawdzian`
- Docs: `OKSYDANT_PROPORCJE_{AUDIT,GRAPHICS,SCENARIOS,SOURCES}.md`
- Odznaka `modul-oksydant-proporcje` + motyw UI

### Zmieniono
- `LessonsModuleOrder`: po `ph`, przed `numeracja-farb`
- Odblokowanie N1 po sprawdzianie oksydantu

---

## 2026-07-23 — Gablotka: błyszczące odznaki-klejnoty

### Zmieniono
- Symbole odznak: kryształowe oko, złote nożyczki, diamenty, medal, fala, kropla itd.
- Większe „klejnoty” na kartach + lekki blask przy zdobytych
- Unikalne id gradientów SVG przy renderze (bez kolizji na liście)

---

## 2026-07-23 — Profil: logo na środku, bez nachodzenia na oko

### Zmieniono
- Logo Nowej Fali wyśrodkowane w hero profilu
- Motyw oka przesunięty w prawo / niżej (jak na Home), żeby nie nachodził na logo
- Tytuł „Profil” wyśrodkowany pod logo

---

## 2026-07-23 — Admin: zamknięcie listy kont

### Naprawiono
- Lista „Konta uczennic” była pod paskiem admina (`z-index`) — przycisk Zamknij niełapany
- Overlay nad paskiem + krzyżyk + „Wróć” + tap w tło / ponowne „Konta” zamyka listę

---

## 2026-07-23 — Ordering: tasowanie kroków + Joico bez spoilera

### Naprawiono
- Zadania `ordering` pokazują kroki w losowej kolejności (nie w gotowej ścieżce poprawnej)
- `joico-kpak-powtorzenie-2-3`: usunięte numery `1.`/`2.` z etykiet — nie zdradzają kolejności

---

## 2026-07-23 — Admin: wszystkie lekcje i pytania odblokowane

### Naprawiono
- Po haśle / włączeniu trybu administratora lista lekcji na Home odświeża się od razu (wcześniej kafelki zostawały „zablokowane”)
- W trybie admina błędna odpowiedź nie blokuje przejścia — przycisk „Następne pytanie” zamiast wymuszonej poprawki
- Kafelki QA oznaczone jako podgląd, każda lekcja otwieralna

---

## 2026-07-23 — Moduł JOICO K-PAK (regeneracja)

### Dodano
- 6 lekcji: `joico-kpak-co-to`, `joico-kpak-owrn`, `joico-kpak-procedura`, `joico-kpak-powtorzenie-2-3`, `joico-kpak-tonacja-po-3`, `joico-kpak-rozmowa`
- Grafika stanowiskowa: `assets/images/joico-kpak-instrukcja.png` (z instrukcji wykonania)
- Dokumentacja: `docs/modules/JOICO_KPAK_{AUDIT,GRAPHICS,SCENARIOS,SOURCES}.md`
- Odznaka `modul-joico-kpak` + motyw modułu w UI

### Zmieniono
- Katalog: moduł `joico-kpak` między prostowaniem a balejażem
- Odblokowanie `balejaz-co-to` po `joico-kpak-rozmowa`
- Teaser po `prostowanie-chemiczne-mostki` → JOICO K-PAK

---

## 2026-07-22 — Powtórka błędów na końcu modułu

### Dodano
- Zapis błędów z lekcji do `moduleMistakeReviews` w `js/state.js`
- Ekran powtórki (pytanie + poprawna odpowiedź + wyjaśnienie) po ukończeniu modułu w `js/app.js`
- Style kart powtórki w `css/styles.css`

### Zmieniono
- Ekran końca lekcji: przy domknięciu modułu CTA „Zobacz swoje błędy”

---

## 2026-07-22 — Ilustrowane avatary profilowe

### Dodano
- `assets/images/avatars/*.png` — 12 wycinków z arkusza avatarów
- `assets/images/avatars-sheet.png` — oryginalny arkusz

### Zmieniono
- `js/avatars.js` — wybór ilustracji zamiast prostych ikon SVG
- `js/state.js` — domyślny avatar `blonde-sage`
- `css/styles.css` / `index.html` — styl podglądu zdjęć w pickerze

---

## 2026-07-22 — Admin: podgląd hasła przy odblokowaniu

### Zmieniono
- `js/admin.js` — przycisk „Pokaż / Ukryj” przy polu hasła administratora
- `css/styles.css` — układ pola z przyciskiem podglądu

---

## 2026-07-22 — Auth: powrót do aplikacji z bramki logowania

### Zmieniono
- `index.html` — przycisk zamknięcia (X) i „Wróć do aplikacji” na bramce auth
- `css/styles.css` — style przycisku zamknięcia
- `js/shell.js` — zamknięcie bramki (X, link, tło, Escape) wraca na Home; przy obowiązkowej bramce włącza tryb gościa

---

## 2026-07-22 — Home: Kosmyki i avatar nad okiem

### Zmieniono
- `index.html` — licznik Kosmyków i avatar w jednym rzędzie z logo (topbar)
- `css/styles.css` — topbar Home oraz niższy motyw oka, bez nachodzenia na licznik/avatar

---

## 2026-07-15 — Moduł pH ukończony (L4–L10) + baza wiedzy kursu

### Dodano
- `lessons/ph-przywracanie-ph-po-zabiegu.json` — L4: finisz po zabiegu chemicznym, ordering kroków, mit zimnej wody
- `lessons/ph-koloryzacja.json` — L5: środowisko zasadowe, alkalizator/oksydant, nadtlenek
- `lessons/ph-rozjasnianie.json` — L6: intensywność, stężenie H₂O₂, chłonność włosa
- `lessons/ph-szampony.json` — L7: dobór szamponu, różne pH
- `lessons/ph-odzywki-i-maski.json` — L8: odżywka vs finisz zabiegu
- `lessons/ph-produkty-zakwaszajace.json` — L9: zakwaszanie vs neutralizacja vs utrwalanie
- `lessons/ph-podsumowanie-modulu.json` — L10: integracja całego modułu
- `docs/KURS_BAZA_WIEDZY.md` — audyt materiałów źródłowych, mapa ~86 lekcji, oznaczenia ŹRÓDŁO/WERYFIKACJA/BOGACTWO

### Zmieniono
- `js/lessons-catalog.js` — 10 wpisów modułu pH z łańcuchem `requiresLessonId`

### Aktywna ścieżka modułu pH
- 10 lekcji: L1 → L2 → … → L10; po L10 „Kontynuuj naukę” wraca na Home (brak L11)
- Każda lekcja: 5 zadań, 75 Kosmyków, completion bez kolekcji

---

## 2026-07-15 — Lekcja 3 modułu pH · preparaty fryzjerskie

### Dodano
- `lessons/ph-preparaty-fryzjerskie.json` — pełna lekcja 3: alkalizator vs oksydant, preparaty zasadowe, szampony, ocena pH po składzie i mieszaninie (5 zadań, 75 Kosmyków)
- `js/lessons-catalog.js` — wpis L3 z `requiresLessonId: ph-jak-wplywa-na-wlos`

### Aktywna ścieżka modułu pH
- 3 lekcje: Co oznacza pH? → Jak pH wpływa na włos? → Jakie pH mają preparaty fryzjerskie?
- L3 odblokowuje się po ukończeniu L2; „Kontynuuj naukę” na completion L2 otwiera L3

### Bez zmian
- Lekcje 1 i 2, `app.js`, `state.js`, `shell.js`, CSS, mechaniki zadań

---

## 2026-07-14 — Pivot teoretyczny · etap 1 (pH, archiwum Spraw)

### Zmieniono
- Sprawy Koloryzacji przeniesione do `lessons/archive/koloryzacja-sprawy/` (treść bez zmian)
- Aktywny katalog: moduł pH, lekcja `ph-co-oznacza-ph` (szkielet bez zadań)
- `js/app.js` — intro teoretyczne (`category`, `levelLabel`), brak kolekcji na completion, obsługa niedostępnej lekcji
- `js/shell.js` — Home pH, Gablotka pusta, komunikat na Home
- `index.html`, `css/styles.css` — UI pivotu

### Bez zmian
- `prototypes/`, treść archiwum, `state.js` (localStorage)

---

## 2026-07-14 — P0 pilotaż UX (Home, powtórki, Gablotka)

### Zmieniono
- `js/app.js` — sync Kosmyków z `AppState` przy starcie lekcji; powtórki bez wpływu na globalne saldo; ekran końcowy z „Zdobyte w tej powtórce”; brak `completeLesson` przy powtórce; kolekcja ukończona bez „jeszcze X do trofeum”
- `js/shell.js` — dynamiczny hero (`renderHomeHero`), poprawki Gablotki i podpowiedzi na Home
- `js/lessons-catalog.js` — helpery pilotażu (`getPilotProgress`, `getNextAvailable`, `areAllComplete`, teaser L18)
- `index.html` — ukryte Misja dnia i moduły; kontekst „Koloryzacja · pilotaż 4 Spraw”; elementy hero z id
- `css/styles.css` — `.home-section-hidden`, style hero po ukończeniu pilotażu
- `PROJECT.md` — opis P0

### Potwierdzone
- `AppState` korzysta z `localStorage` (klucz `akademia-nowefali-v1`) — bez drugiego systemu zapisu

### Bez zmian
- Treści i JSON-y lekcji, mechaniki zadań, folder `prototypes/`

---

## 2026-07-14 — Sprint 1 · L17 + review L7 + standard odkrywania

### Dodano
- `lessons/sprawa-wyblaklego-koloru.json` — L17: odświeżanie wyblakłego koloru (Zosia, repigmentacja 1,8%)
- `LESSON_STANDARD.md` § **Zasada odkrywania**, §11 **Review jakości**

### Zmieniono
- `lessons/sprawa-nierownego-wchlaniania.json` — poprawki A–F po review jakości (odkrywanie, spójność fabuły, redakcja)
- `js/lessons-catalog.js` — wpis L17
- `PROJECT.md` — Sprint 1: 4/10

### Audyt źródeł (L17)
| Fragment | Źródło | Lokalizacja | Status |
|----------|--------|-------------|--------|
| Utleniacz 1,8% — odświeżanie i repigmentacja | `71-materialoznawstwo-….pdf` | pyt. 24 | OK |
| Utleniacz 6% — ton w ton | `71-materialoznawstwo-….pdf` | pyt. 24 | OK |
| Ton w ton — delikatna, odświeża kolor | `ef1ec94b-….jpg` | Technologia 32 | OK |
| Płukanka — pigment, neutralizacja | `ef1ec94b-….jpg` | Technologia 33 | OK |
| Wywiad przy farbowaniu | `f1b002f4-….jpg` | Technologia 31 | OK |
| Katalog — wybór koloru | `5098d39c-….jpg` | Technologia 5 | OK |
| Czas działania 30–50 min | `71-materialoznawstwo-….pdf` | pyt. 46 | OK |
| Spłukanie po farbowaniu | `71-materialoznawstwo-….pdf` | pyt. 21 | OK |

### Bez zmian
- Silnik lekcji (`app.js`) — bez modyfikacji

---

## 2026-07-14 — Sprint 1 · L7 „Sprawa nierównego wchłaniania”

### Dodano
- `lessons/sprawa-nierownego-wchlaniania.json` — L7 (Koloryzacja · R2): chłonność włosów, wyrównanie koloru po domowej koloryzacji (Nina, mentorka Ewa)
- Sekcja **Sprint 1** w `PROJECT.md` — plan 10 lekcji, postęp 3/10

### Zmieniono
- `js/lessons-catalog.js` — wpis L7; odblokowanie po L6
- `PROJECT.md` — stan trzech lekcji, uwaga o kolekcji po 5/5

### Audyt źródeł (L7)
| Fragment | Źródło | Lokalizacja | Status |
|----------|--------|-------------|--------|
| Chłonność: zniszczone, rozjaśnione, porowate | `b32daf76-….jpg` | Technologia 23 | OK |
| Stan włosów, wcześniejsze zabiegi, czas | `f1b002f4-….jpg` | Technologia 31 | OK |
| Porowatość a wchłanianie barwnika | `71-materialoznawstwo-….pdf` | pyt. 41 | OK |
| Farba oksydacyjna — wyrównanie koloru | `71-materialoznawstwo-….pdf` | pyt. 42 | OK |
| Czas wywołania barwnika 30–50 min | `71-materialoznawstwo-….pdf` | pyt. 46 | OK |
| Spłukanie po farbowaniu | `71-materialoznawstwo-….pdf` | pyt. 21 | OK |
| Ocena stanu włosów przed farbowaniem | `71-materialoznawstwo-….pdf` | pyt. 24 | OK |

### Bez zmian
- Silnik lekcji (`app.js`) — bez modyfikacji
- Treść L1, L6 — bez modyfikacji
- Wygląd aplikacji — bez modyfikacji

---

## 2026-07-14 — Druga lekcja merytoryczna + standard lekcji

### Dodano
- `LESSON_STANDARD.md` — uniwersalne zasady tworzenia Spraw (fabuła, merytoryka, Ewa, audyt)
- `lessons/sprawa-pierwszej-koloryzacji.json` — L6 „Sprawa pierwszej koloryzacji” (Koloryzacja · R1)

### Zmieniono
- `js/lessons-catalog.js` — L6 zamiast `lesson-2-template`; odblokowanie po L1
- `js/state.js` — `pendingBadge.lessonId` wskazuje na L6
- `PROJECT.md` — stan dwóch lekcji, odwołanie do standardu

### Usunięto
- `lessons/lesson-2-template.json` — zastąpiony przez L6

### Bez zmian
- Silnik lekcji (`app.js`) — bez modyfikacji
- Treść L1 — bez modyfikacji
- Wygląd aplikacji — bez modyfikacji

---

## 2026-07-14 — Przygotowanie na drugą lekcję

### Dodano
- `js/lessons-catalog.js` — katalog metadanych lekcji (tytuł, status, blokada)
- `lessons/lesson-2-template.json` — szablon techniczny drugiej lekcji (bez treści merytorycznej)
- Sekcja „Sprawy · Koloryzacja” na Home z kafelkami lekcji
- Pole `collections[].earnedBadges` w stanie aplikacji

### Zmieniono
- Logika kolekcji: odznaka „Detektyw koloru” przyznawana dopiero przy 5/5 (po drugiej lekcji)
- `completeLesson()` — `totalBadges` rośnie tylko przy pełnej kolekcji i pierwszym zdobyciu odznaki
- Gablotka i podpowiedzi Home — zgodne z nową logiką odznak
- `AppShell.startLesson()` — ignoruje zablokowane lekcje (bez błędu)

### Bez zmian
- Silnik lekcji (`app.js`) — bez modyfikacji
- Treść pierwszej lekcji — bez modyfikacji
- Wygląd aplikacji — tylko minimalne style kafelków (reuse `.mission`)

---

## 2026-07-14 — Trwały zapis postępu (localStorage)

### Dodano
- `js/state.js` — moduł `AppState` z zapisem w localStorage
- `AppShell.resetProgress()` — reset postępu z konsoli

### Zmieniono
- `shell.js` — stan użytkowniczki z `AppState` zamiast obiektów sesyjnych

---

## Wcześniej — Integracja Shell + LessonEngine

- Home, Gablotka, Profil połączone z silnikiem lekcji
- Jedna lekcja: „Sprawa znikającego koloru”
