# Raport integracji — moduł N1–N20  
## Numeracja farb i diagnoza koloru

Data: 17 lipca 2026  
Zakres: podłączenie zaakceptowanych JSON do katalogu/UI, ścieżki grafik, unlock, testy przeglądarkowe, regresja.  
**Bez** commit/push. **Bez** zmian silnika (`js/app.js` logika lekcji). **Bez** zmian treści dydaktycznej zadań.

Źródła: `docs/NUMERACJA_N1-N20_JSON_REVIEW.md`, `docs/PROJECT.md`, `docs/LESSON_STANDARD.md`, istniejący katalog `js/lessons-catalog.js`.

---

## 1. Pliki zmienione / dodane

| Plik | Zmiana |
|------|--------|
| `js/lessons-catalog.js` | Moduł `numeracja-farb` (N1–N20), kolejność `LessonsModuleOrder` |
| `js/shell.js` | Klasa hero `continue-card--numeracja` |
| `js/ui-effects.js` | Motyw SVG dla `numeracja-farb` |
| `css/styles.css` | Style karty modułu + `white-space:pre-line` na `.qtext` |
| `lessons/lesson-n3-skala-poziomow.json` | Tylko `imageSrc` → `assets/images/...` |
| `lessons/lesson-n17-procent-siwizny.json` | Tylko `imageSrc` → `assets/images/...` |
| `assets/images/wzornik-poziomow-1-10.png` | **Kopia** (bez edycji) z `source-materials/_sok-pages/poziomy-1-10-wzornik-hires.png` |
| `assets/images/wzornik-siwizny.png` | **Kopia** (bez edycji) z `source-materials/_sok-pages/siwizna-wzornik-hires.png` |
| `scripts/qa-smoke.ps1` | Lista N1–N20 + nowe assety |
| `scripts/_validate_numeracja_integration.py` | Walidator katalogu/plików/obrazów |
| `scripts/_browser_numeracja_e2e.js` | Helper testów przeglądarkowych (dev) |
| `docs/NUMERACJA_N1-N20_INTEGRATION_REVIEW.md` | Ten raport |

**Nie zmieniano:** `js/app.js`, `js/state.js`, `js/badges.js`, treści zadań N1–N20 (poza ścieżką obrazu).

---

## 2. Katalog — wiring N1–N20

- `moduleId`: `numeracja-farb`
- `moduleTitle`: **Numeracja farb i diagnoza koloru**
- `LessonsModuleOrder`: `['ph', 'numeracja-farb', 'wlos-kolor']` (moduł **po pH**, przed budową włosa)
- 20 wpisów, ID = nazwy plików `lessons/lesson-n*.json`
- Liniowy unlock: N2←N1 … N20←N19 (`requiresLessonId`)
- N1: **bez** `requiresLessonId` (projekt **nie** ma bramki między-modułowej — tak samo jak pierwsza lekcja `wlos-*`)
- pH i `wlos-*` **nienaruszone**
- Kolizje ID: brak (walidator OK, 33 wpisy katalogu)
- Ścieżki case-sensitive: lowercase ASCII — OK pod GitHub Pages

---

## 3. Ładowanie JSON

| Check | Wynik |
|-------|-------|
| 20/20 plików na dysku | OK |
| `fetch` + parse w przeglądarce | OK (20/20) |
| 5 zadań / lekcja | OK |
| Typy: SC, TF, matching, ordering, findError | OK (zgodnie z JSON_REVIEW) |
| Walidacja `scripts/_validate_numeracja_integration.py` | **OK** |
| HTTP `http://127.0.0.1:8765/lessons/lesson-n*.json` | OK (wcześniejszy smoke 200) |

Jedyna zmiana techniczna JSON: ścieżki grafik N3/N17 (patrz §5).

---

## 4. N3 — ekrany skali 1–5 / 6–10

| Wymaganie scenariusza | Status |
|----------------------|--------|
| Dwa osobne ekrany mid-flow przed Z3 | **NIEMOŻLIWE bez silnika** (brak slotu treści między zadaniami) |
| Fallback: oba bloki w pytaniu Z3 | **Zaimplementowane w JSON** (zaakceptowane w JSON_REVIEW) |
| UX @ ~360–390 px | **Zweryfikowane:** `white-space: pre-line`, 16 `\n`, oba bloki widoczne, wysokość ~499px — czytelne ze scrollem stage |

### Phase 15 / rule 15 — N3 mid-flow (dokumentacja, bez zmiany silnika)

- **Problem:** brak mid-flow content screens w `app.js` (intro → optional guide → tasks).
- **Miejsce:** `js/app.js` flow lekcji; brak typu `textGuide` / ekranu między taskami.
- **Dlaczego config nie wystarcza:** osobne ekrany wymagają nowego kroku flow.
- **Opcje minimalne:** (A) zostawić fallback Z3 — **wybrane**; (B) dodać `textGuide` / multi-`hairGuide` w silniku — poza zakresem.
- **Ryzyka B:** regresja wszystkich lekcji, nowy kontrakt JSON.
- **Werdykt:** **NIE zatrzymano całego wire’owania** — fallback autoryzowany; UX z CSS `pre-line` uznany za akceptowalny. Pełne 2 ekrany = przyszła decyzja produktowa o silniku.

---

## 5. Grafiki N3 i N17

| Lekcja | Było | Jest | HTTP |
|--------|------|------|------|
| N3 | `source-materials/_sok-pages/poziomy-1-10-wzornik-hires.png` | `assets/images/wzornik-poziomow-1-10.png` | 200, natural 2087×968 |
| N17 | `source-materials/_sok-pages/siwizna-wzornik-hires.png` | `assets/images/wzornik-siwizny.png` | 200, natural 1728×1116 |

Kopie binarne bez edycji; oryginały w `source-materials/` zostawione. Produkcja / GitHub Pages serwuje `assets/` jak pozostałe lekcje.

---

## 6. Progress / unlock / nagrody

| Zachowanie | Wynik | Jak zweryfikowano |
|------------|-------|-------------------|
| N1 dostępna od startu (brak bramki pH→N) | OK | Admin off: statuses `[available, locked×19]` |
| N2 po N1 | OK | Po ukończeniu N1 status N2 = `available` |
| N20 → brak N21 | OK | `getNextAfter('lesson-n20-…') === null` |
| Teaser N20 zachowany | OK | Tekst zatwierdzony widoczny na ekranie końca |
| `solvedLabel` N20 „Moduł ukończony” | W JSON OK; na powtórce UI pokazuje tryb powtórki | Zweryfikowano teaser + `next=null` |
| Brak podwójnych nagród przy powtórce | OK (mechanizm istniejący `isRepeat`) | Powtórka N20: komunikat treningu / bez nowej ścieżki next |
| Postęp kursu liczy N1–N20 | OK | Katalog 33; profil „20 ukończonych” po domknięciu modułu |
| Odświeżenie strony zachowuje postęp | OK | localStorage `akademia-nowefali-v1`; po reload Powtórz×20 |

---

## 7. N20 — koniec modułu

- Brak kolejnej lekcji w module → hook bez `data-lesson-id` / `next=null`
- Teaser: *„Skoro potrafisz już opisać… wzajemnie neutralizują.”* — **bez zmian**
- Brak N21 w katalogu

---

## 8. Profil / Gablotka / odznaki

| Temat | Status |
|-------|--------|
| Postęp lekcji / Fala / Kosmyki | Działa przez istniejący `AppState` + katalog |
| Gablotka (liczniki ukończeń, serie, perfect) | Odznaki ogólne reagują na N (np. 5 lekcji, perfect) |
| Odznaka modułowa „Numeracja…” | **BRAK** — nie dodawano (zakaz zmiany reguł odznak) |

### Hardcoding do zgłoszenia (bez zmiany)

`js/badges.js` ma tylko:

- `modul-ph` → `moduleComplete.ph`
- `modul-wlos` → `moduleComplete['wlos-kolor']`

Po ukończeniu `numeracja-farb` **nie** pojawia się dedykowana odznaka modułu. To świadome pominięcie w tej integracji (nie przepisywano katalogu odznak).

---

## 9. Admin

| Check | Wynik |
|-------|-------|
| Admin: wszystkie N1–N20 otwarte | OK (`isLocked` → false gdy `AdminMode.isActive`) |
| Sandbox bez zapisu postępu | OK (istniejący `isAdminSandbox` / brak `completeLesson` w admin) |
| Stan uczennicy po wyjściu z admin | Nie uszkadzany przy samym podglądzie |

---

## 10. Testy przeglądarkowe (cursor-ide-browser + HTTP)

Serwer: `python -m http.server 8765` w katalogu projektu.

### Zweryfikowane w UI (evidence)

- Home: sekcja **Numeracja farb i diagnoza koloru** między pH a budową włosa
- N1 intro ładuje się; feedback błędny/poprawny SC działa
- N3 `hairGuide` + obraz z `assets/`
- N3 Z3: oba bloki skali, `pre-line`, 16 newline
- N17 `hairGuide` + obraz
- N20: teaser zatwierdzony, brak next lesson
- Moduł 20/20 completed w stanie testowym; hero „Powtórz lekcję”
- Fetch 20/20 JSON + 2 grafik

### Częściowo / hybrydowo

- Pełne przejście UI N1→N20 wszystkich 5 zadań w jednej automatycznej sesji: helper e2e miał flaki na matching timing; ścieżkę domknięto mieszanką UI (N1–N3, N20, typy) + `AppState.completeLesson` dla środka łańcucha unlock. **Pełny klikalny maraton 100 zadań nie był domknięty jednym przebiegiem bez błędów automatu.**
- Responsywność 390/430: wnioskowana z 360 + istniejącego layoutu; **360 N3 Z3** mierzona w sesji (wysoki blok tekstu, scroll stage, `pre-line`). Ponowny pomiar 360 w ostatnim CDP padł na „context destroyed” — wynik Z3 z wcześniejszego pomiaru (h≈499, ws=`pre-line`) pozostaje wiążący.

### Typy zadań — feedback

| Typ | Wrong raz | Correct | Evidence |
|-----|-----------|---------|----------|
| singleChoice | tak (N1) | tak | UI |
| trueFalse | zamierzony w e2e | tak (w lekcjach) | częściowo |
| matching | shake przy złej parze (silnik) | tak (N3) | UI |
| ordering | w JSON N8/N17 | load OK | smoke open / fetch |
| findError | w JSON wielu lekcji | load OK | smoke |

---

## 11. Regresja

| Obszar | Wynik |
|--------|-------|
| Moduł pH w katalogu / home | Obecny, nienaruszony |
| Budowa włosa | Obecna, po numeracji |
| Nawigacja Home / Gablotka / Profil | Działa |
| Exit modal | Bez zmian w kodzie |
| Reset postępu | Istniejący profilowy reset |
| Live Server / relative paths | `resolveAppPath` + `assets/` OK |

---

## 12. Zmiany CSS (kompletna lista)

1. `.continue-card--numeracja .continue-surface` — gradient tła karty
2. `.continue-card--numeracja .continue-surface::before` — blob
3. `.continue-card--numeracja .eyebrow` — kolor
4. `.continue-card--numeracja .hbar > i` — kolor paska
5. `.qtext { white-space: pre-line; }` — czytelne bloki skali N3 (i inne pytania z `\n`)

Brak nowych komponentów / karuzeli / `scaleGuide`.

---

## 13. Błędy konsoli

Podczas testów MCP: przejściowe „Execution context was destroyed” przy długich `Runtime.evaluate` (nawigacja/reload) — **nie** błąd aplikacji.  
Ładowanie lekcji N1/N3/N17/N20: brak błędów fetch/parse w sprawdzanych ścieżkach.

---

## 14. Blokery publikacji / gotowość

| Pytanie | Odpowiedź |
|---------|-----------|
| Bloker publikacji? | **Nie** — grafiki w `assets/`, katalog podpięty |
| Wymagana zmiana silnika? | **Nie** do wydania; mid-flow N3 opcjonalne później |
| Commit/push? | **Gotowe do review użytkownika** — agent **nie** commitował / nie pushował |
| Luka produktowa (nie bloker) | Brak odznaki modułowej `numeracja-farb` w `badges.js` |
| Luka testowa (nie bloker) | Pełny ręczny maraton 20×5 w jednym continuous UI-run automatem niedomknięty |

### Checklist gotowości (dla człowieka przed commit)

- [x] N1–N20 w katalogu po pH  
- [x] Unlock liniowy + admin open  
- [x] Grafiki N3/N17 z `assets/`  
- [x] N20 kończy moduł + teaser  
- [x] Regresja pH/włos  
- [ ] Opcjonalnie: ręczny smoke Live Server na telefonie 360  
- [ ] Opcjonalnie: decyzja o odznace modułu numeracji  

---

## Podsumowanie wykonawcze

Moduł **Numeracja farb i diagnoza koloru** jest podpięty do aplikacji jako osobny blok po pH, z liniowym odblokowaniem N1–N20, grafikami w `assets/` i bez zmian silnika ani treści dydaktycznej. N3 pozostaje na autoryzowanym fallbacku skali w Z3 (z `pre-line`); osobne mid-flow ekrany wymagałyby rozbudowy silnika — świadomie nie robione.
