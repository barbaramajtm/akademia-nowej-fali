# Pre-commit check — Numeracja farb i diagnoza koloru (N1–N20)

Data: 17 lipca 2026  
Serwer: `http://127.0.0.1:8765`  
Przeglądarka: cursor-ide-browser MCP (rzeczywiste resize Emulation + kliknięcia UI)  
**Bez** commit/push. **Bez** zmian treści dydaktycznej, silnika lekcji, odznaki modułu, bramki między-modułowej, mid-flow / N21.

---

## 1. Pliki zmienione w tej kontroli

| Plik | Zmiana |
|------|--------|
| `css/styles.css` | Usunięcie gradientu z `.continue-card--numeracja .continue-surface` → płaski `var(--mint)` |
| `docs/NUMERACJA_N1-N20_PRECOMMIT_CHECK.md` | Ten raport |

**Nie zmieniano:** JSON lekcji N1–N20, `js/app.js`, `js/state.js`, `js/badges.js`, katalog (poza wcześniejszą integracją), treści zadań.

---

## 2. Karta modułu — usunięcie gradientu (numeracja-only)

### Było (stary CSS)

```css
.continue-card--numeracja .continue-surface{
  background:linear-gradient(148deg,#F3E8C8 0%,var(--mint) 52%,#E8F0DE 100%);
  border-color:rgba(166,181,141,.4);
}
```

### Jest (nowy CSS)

```css
.continue-card--numeracja .continue-surface{
  background:var(--mint);
  border-color:rgba(166,181,141,.4);
}
```

### Zachowane (bez zmian)

- `::before` blot olive (`opacity:.14`) — organiczna plama, nie gradient
- eyebrow / hbar olive
- brak nowego cienia 3D / gloss poza istniejącym `box-shadow` z bazowego `.continue-surface` (wspólny z innymi kartami)

### Weryfikacja computed (Home, viewport 390)

- `backgroundImage: none`
- `backgroundColor: rgb(217, 232, 207)` = `--mint`
- `hasGradient: false`

**Zakres:** wyłącznie selektor `.continue-card--numeracja` — karty pH / włos nietknięte.

---

## 3. `.qtext { white-space: pre-line; }`

| Pytanie | Wynik |
|---------|--------|
| Globalny czy zawężony? | **Zostawiony globalny** na `.qtext` |
| Potrzeba N3 | Tak — Z3 ma 16 `\n` w skali 1–10 |
| Inne lekcje z `\n` w JSON | N3 + N20 (case); pH / włos — bez wymuszonych newline w pytaniach |

### Lekcje sprawdzone wizualnie / metrykami

- N3 Z3 — `pre-line`, lista 1–10 czytelna
- N1 Z1, N14 matching, N18 długie opcje — brak „dziur” / przypadkowych pustych linii
- pH `ph-co-oznacza-ph` Z1 — `nl: 0`, normalne zawijanie, brak regresji
- włos `wlos-z-czego-sklada-sie` — `nl: 0`, `ws: pre-line`

### Werdykt

Brak regresji wymagającej zawężenia selektora. `pre-line` bez `\n` zachowuje się jak zwykły wrap. **Bez** nowych klas silnika.

---

## 4. Responsywność 360 / 390 / 430 (rzeczywisty resize)

Metoda: `Emulation.setDeviceMetricsOverride` + otwarcie ekranów + metryki overflow + screenshoty.  
**Nie** wnioskowano z jednego viewportu.

| Ekran | 360 | 390 | 430 |
|-------|-----|-----|-----|
| Home karta numeracja | OK, flat mint, brak h-scroll | OK | OK (home + card computed) |
| N3 wzornik (hairGuide) | img OK (2087→~306 CSS px), Dalej reachable | img OK | — (sprawdzone 360/390) |
| N3 Z3 skala + zadanie | lista 1–10 + opcje + Sprawdź; brak h-scroll; treść mieści się w stage | to samo, qtext h≈426, 16 `\n` | to samo, qtext h≈451 |
| N13 matching | OK, Sprawdź in view | OK | — |
| N14 matching + odrost | OK (screenshot 360) | OK | — |
| N17 wzornik siwizny | img OK (1728 nat.) | img OK | — |
| N18 długie opcje | OK (Z2 long text wrap) | — | — |
| N20 case + completion | OK; completion stage scrollable gdy wysoki | OK | — |

### Kryteria (wszystkie sprawdzone viewporty powyżej)

- brak pełnego poziomego scrolla dokumentu / phone
- brak przyciętego tekstu w mierzonych `.qtext`
- brak nachodzących warstw
- grafiki N3/N17 ładują się (`naturalWidth > 0`)
- Sprawdź / Dalej / Kontynuuj w viewportcie
- bottom nav Home OK
- wysokie ekrany (completion) — stage może scrollować w pionie

### Minimalne poprawki CSS w tej sesji

**Jedyna:** gradient → flat mint na karcie numeracji (§2).  
Brak dodatkowych hotfixów layoutu — nie były potrzebne.

---

## 5. Typy zadań — wrong → correct

| Typ | Lekcja i zadanie | Błędna | Poprawna | Dalej | Konsola |
|-----|------------------|--------|----------|-------|---------|
| singleChoice | N1 Z1 | OK — „Sprawdź jeszcze raz.” | OK — „Tak.” | OK (advance) | brak błędów app |
| trueFalse | N1 Z4 | OK — incorrect feedback | OK — „Tak.” | OK | brak |
| matching | N1 Z3 | OK — shake złej pary | OK — „Dobrze.” | OK | brak |
| ordering | N8 Z2 | OK — silnik: shake złego kroku (`countMistake`); Sprawdź aktywne dopiero po pełnej kolejności | OK — „Dobrze.” | OK | brak |
| findError | N1 Z5 | OK — incorrect | OK — „Znalazłaś błąd.” | OK → completion | brak |

Shared incorrect feedback: tytuł/wyjaśnienie z JSON; po Dalej retry według silnika.

---

## 6. Unlock UI — N1 → N2

| Krok | Wynik | Evidence |
|------|-------|----------|
| Start: N1 available, N2 locked | OK | po `resetProgress`: statuses |
| Ukończenie N1 UI (wrong+correct ścieżki) | OK | completion „Lekcja ukończona” |
| N2 status | `available` | po N1 |
| „Kontynuuj naukę” → N2 | OK | `data-lesson-id=lesson-n2-…`, intro N2 widoczny |

N1 dostępna od startu — **bez** bramki pH→numeracja.

---

## 7. Unlock UI — N19 → N20

| Krok | Wynik |
|------|-------|
| Seed N2–N18 przez `AppState.completeLesson` | OK (środek łańcucha) |
| N19 available, N20 locked | OK |
| Ukończenie N19 UI | OK |
| Continue → N20 intro | OK — „Sprawdzian modułu” |

---

## 8. N20 — koniec modułu

| Check | Wynik |
|-------|-------|
| Completion „MODUŁ UKOŃCZONY” | OK |
| Teaser zatwierdzony (wzmacniają / wzajemnie neutralizują) | OK |
| `getNextAfter(N20) === null` | OK |
| Continue **bez** `data-lesson-id` (brak N21) | OK |
| Brak N21 w katalogu | OK (wcześniejsza integracja + UI) |

---

## 9. Powtórki / nagrody

| Check | Wynik |
|-------|-------|
| Powtórka N20 UI | OK |
| Kosmyki delta = 0 | OK (1215→1215) |
| Komunikat treningu | „Postęp i saldo bez zmian — to trening, nie nowa nagroda.” |
| Refresh → postęp 20/20 | OK (`localStorage`, Profil „20 ukończonych”) |

---

## 10. Admin mode UI

| Check | Wynik |
|-------|-------|
| `?admin=1` — bar „TRYB ADMINISTRATORA” | OK |
| Wszystkie N available/completed | OK |
| Open N3, N17, N20 (smoke intro) | OK |
| Kosmyki / completed bez zmian przy samym podglądzie | 1215 / 20 bez zmian |
| `?admin=0` — normalne locki | włos Z2 `locked`, N completed zachowane |
| Kosmyki po wyjściu | bez zmian przez admin sandbox |

Admin nie rozbudowywany.

---

## 11. Regresja pH + włos

| Check | Wynik |
|-------|-------|
| pH `ph-co-oznacza-ph` intro → scaleGuide → zadania → completion | OK (ukończona w UI) |
| wrong+correct na SC | OK (Z1) |
| Continue / teaser pH | OK |
| Exit modal („Wyjść z lekcji?”) | OK (Zostań / Wyjdź obecne) |
| włos `wlos-z-czego-sklada-sie` guide + obraz + TF wrong/correct | OK |
| Home / Profil / Gablotka | OK |
| `.qtext` na pH/włos | bez regresji (`pre-line`, nl=0) |
| Karta numeracji flat | nie psuje kart pH/włos |

---

## 12. Konsola

| Grupa | Wynik |
|-------|-------|
| A) Błędy aplikacji (fetch/parse/startLesson, `console.error` app) | **Brak** w ścieżkach N1, N19→N20, N20, pH, admin |
| B) Błędy narzędzia / automatu | Przejściowe „Execution context was destroyed” przy nawigacji/reload; odrzucone approval na `fetch+eval` skryptu — **nie** błędy app |

---

## 13. N3 fallback (świadomy kompromis)

| Wymaganie | Status |
|-----------|--------|
| Dwa osobne ekrany mid-flow 1–5 / 6–10 | **Niemożliwe bez silnika** — nie robione |
| Fallback: oba bloki w Z3 + `pre-line` + scroll | **OK** — zweryfikowane @360/390/430 |
| Lista 1–10 czytelna, nie przycięta | OK |
| Zadanie pod listą, Sprawdź available | OK |
| Grafika nie jest jedynym źródłem | OK (tekst skali w Z3 + wzornik w guide) |

**Etykieta:** świadomy kompromis techniczny — nie pełny scenariusz dwóch ekranów mid-flow.

---

## 14. Czego świadomie nie robiono

- odznaka modułowa numeracji (`badges.js`)
- bramka między-modułowa pH→N
- typ mid-flow / N21
- edycja treści dydaktycznej JSON
- przebudowa unlock / silnika lekcji
- gradientów na kartach pH/włos (poza numeracją)

---

## 15. Skrypty walidacyjne — co zostaje

| Plik | Decyzja |
|------|---------|
| `scripts/_validate_numeracja_integration.py` | **Zostaje** — walidator katalog/pliki/obrazy |
| `scripts/_browser_numeracja_e2e.js` | **Zostaje** — helper e2e (dev) |
| `scripts/qa-smoke.ps1` | **Zostaje** (lista N1–N20 z integracji) |
| Tymczasowe `_precommit_*.js` z sesji | **Usunięte** po kontroli (śmieci sesyjne) |

---

## 16. Blokery publikacji / commit

| Pytanie | Odpowiedź |
|---------|-----------|
| Bloker commit? | **Nie** |
| Wymagana zmiana silnika? | Nie do wydania |
| Luka produktowa (nie bloker) | Brak odznaki `numeracja-farb` |
| Luka testowa (nie bloker) | Pełny ręczny maraton 20×5 w jednym continuous UI-run nie był celem; krytyczne ścieżki unlock + typy + viewporty zrobione realnie |

---

## 17. Werdykt gotowości

**Gotowe do commit/push przez użytkownika** (agent nie commitował / nie pushował).

Checklist:

- [x] Gradient karty numeracji usunięty (flat mint, tylko numeracja)
- [x] `.qtext` global `pre-line` — bez regresji
- [x] Viewporty 360/390/430 zmierzone realnie
- [x] 5 typów zadań wrong→correct
- [x] N1→N2 UI, N19→N20 UI, N20 koniec + teaser + brak N21
- [x] Powtórka bez drugiej nagrody + persist po refresh
- [x] Admin sandbox OK
- [x] Regresja pH + włos + exit + Profil + Gablotka
- [x] N3 fallback zaakceptowany jako kompromis
- [ ] Commit/push — decyzja użytkownika

---

## Podsumowanie wykonawcze

Moduł N1–N20 przechodzi finalną kontrolę pre-commit: karta Home bez gradientu, layout na 360/390/430 bez poziomego scrolla, typy zadań i krytyczne unlocki zweryfikowane w prawdziwym UI, N20 zamyka moduł z teaserm bez N21, admin nie brudzi Kosmyków, pH/włos bez regresji po `pre-line`. Jedyna zmiana kodu w tej sesji to CSS karty numeracji + ten raport.
