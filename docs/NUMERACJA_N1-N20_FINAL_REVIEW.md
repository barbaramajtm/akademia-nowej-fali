# Zbiorczy audyt końcowy — moduł N1–N20  
## Numeracja farb i diagnoza koloru

Audytowane pliki (treść bezpośrednia):  
- `docs/NUMERACJA_N1-N10_SCENARIOS.md`  
- `docs/NUMERACJA_DIAGNOZA_N11-N20_SCENARIOS.md`  

Materiały pomocnicze: raporty AFTER_FIX, LESSON_STANDARD, WRITING_STYLE, PROJECT.  
Data: lipiec 2026  

**Zakres pracy:** wyłącznie audyt. Scenariusze, JSON, kod i silnik — bez zmian. Bez commita/pusha.

---

## 1. Ocena ogólna

Moduł ma **spójną, logiczną progresję** od konstrukcji numeru przez skalę i refleksy do diagnozy koloru i sprawdzianu. Zakresy N3≠N11 oraz N10→N11 / N12→N13 są w większości dobrze rozdzielone. Źródła E3 i SOK24–25 są respektowane: brak uniwersalnego „`.1` zawsze = popiel”, siwizna w odroście, pułapki receptury/oksydantu, poziom 2 w skali.

**Werdykt:** moduł **można przekazać właścicielce do końcowej akceptacji**, z krótką listą **drobnych korekt przed JSON** (literówka N6, przycięcie listy w N11, dopracowanie N18, zróżnicowanie powtarzanego zdania o siwiźnie). Żadna lekcja nie wymaga przebudowy.

---

## 2. Mapa progresji N1–N20

```text
N1–N3   konstrukcja → poziom → skala 1–10
N4–N7   refleks główny → dodatkowy → kolejność → 7.11
N8–N10  pełny odczyt → separatory/marki → legenda producenta
N11–N12 praktyka poziomów → poziom ≠ refleks
N13–N18 sytuacje → odrost → kosmetyczny → strefy → siwizna → pełna diagnoza koloru
N19     powtórka mieszana
N20     sprawdzian (+ teaser kolejnego modułu)
```

| Przejście | Ocena |
|-----------|--------|
| N3 → N4 | Naturalne (skala → pierwsza cyfra po separatorze) |
| N8 → N9 | Naturalne (odczyt → różne zapisy) |
| N10 → N11 | Naturalne (legenda → utrwalanie skali); teaser zgodny z briefem |
| N12 → N13 | Wyraźny start nowego zakresu (numer → włosy klientki) |
| N17 → N18 | Naturalne (elementy → synteza) |
| N19 → N20 | Powtórka → sprawdzian; N20 bez nowej wiedzy |

Przeskok numeracja→diagnoza: **nie nagły** — N11–N12 mostują skalę i poziom/refleks przed N13.

---

## 3. Tabela wszystkich lekcji

| Lekcja | Cel (skrót) | Rola | Powtórzenia | Problemy merytoryczne | Problemy dydaktyczne | Problemy techniczne | Status |
|--------|-------------|------|-------------|----------------------|----------------------|---------------------|--------|
| **N1** | Części numeru | Fundament | — | — | Guide pokazuje przykłady użyte w zadaniach (akceptowalne) | — | **gotowa** |
| **N2** | Liczba przed = poziom | Fundament | Z N1: części | — | Guide mocno naprowadza „co się zmienia” | Matching 2 pary | **gotowa** |
| **N3** | Skala 1–10 | Wprowadzenie | ≠ N11 | Grupowanie 2–5/6–10 = orientacja (OK) | Bloki A/B nad Z3 (obejście silnika) | Mid-flow guide brak | **gotowa** |
| **N4** | Refleks główny | Analiza | — | `.1` tylko jako przykład E3 | — | — | **gotowa** |
| **N5** | Refleks dodatkowy | Analiza | Most do N6 | — | — | — | **gotowa** |
| **N6** | 7.13 ≠ 7.31 | Analiza | — | — | Intro≈guide (duplikat) | Literówka: „Materiału mówi” | **drobna korekta** |
| **N7** | 7.11 | Analiza | — | Tylko przykład źródłowy | Z1+Z2 singleChoice z rzędu | — | **gotowa** |
| **N8** | Pełny odczyt | Synteza numeru | Synteza N1–N7 | — | — | Ordering = kolejność odczytu (OK) | **gotowa** |
| **N9** | Separatory / nazwy | Stosowanie | Separatory z N1 | Wella/SK tylko E3 | Guide wymienia marki przed Z3 | 2× matching | **gotowa** |
| **N10** | Legenda | Domknięcie odczytu | Mit `.1` ze spirali | — | — | — | **gotowa** |
| **N11** | Praktyka poziomów | Utrwalanie | vs N3: zadania OK, **lista 1–10 w guide** | — | Ponowna pełna lista nazw | hairGuide | **drobna korekta** |
| **N12** | Poziom ≠ refleks | Most do diagnozy | vs N8: inny cel (błąd pojęciowy) | — | — | — | **gotowa** |
| **N13** | 4 sytuacje | Start diagnozy | — | — | — | Matching 3 długie lewe | **gotowa** |
| **N14** | Kompletny odrost | Element | Zdanie skroni (wzorzec) | — | Z1 ujawnia 4 elementy | Matching 4 pary (ciasne) | **gotowa*** |
| **N15** | Stan faktyczny | Element | — | — | Matching tylko 2 pary (cienkie) | — | **gotowa** |
| **N16** | Strefy / rozjaśnienia | Element | vs N13 Z4 (spirala OK) | — | — | — | **gotowa** |
| **N17** | % siwizny | Element | To samo zdanie skroni | — | — | hairGuide | **gotowa*** |
| **N18** | Pełna diagnoza koloru | Synteza | Złoty akapit ≈ N14 | — | Konflikt „bez wzorca” vs długa opcja b; słaba 3. para matchingu | — | **drobna korekta** |
| **N19** | Powtórka | Interleaving | Siwizna (b) ponownie | — | — | — | **gotowa*** |
| **N20** | Sprawdzian | Egzamin modułu | Case podobny do N18 (inne liczby) | — | Gęsty case w Z5 | — | **gotowa*** |

\* Status lekcji „gotowa”; **wzorzec zdania o siwiźnie** to problem **międzylekcyjny** (patrz §5) — korekta przed JSON zalecana, nie blokuje akceptacji konstrukcji.

---

## 4. Spoilery (po ponownym odczycie)

| Lekcja | Fragment | Ocena |
|--------|----------|--------|
| N2 guide | „Zmienia się tylko liczba przed separatorem” | Naprowadzenie — nieblokujące |
| N3 Z1 | Nazwy 2/6/10 w pytaniu | Świadome — uczy kierunku, nie echa pełnej listy |
| N6 intro/guide | Ten sam tekst sytuacji | Duplikat, nie spoiler reguły |
| N9 guide | „Wellii i Schwarzkopfowi” | Lekkie naprowadzenie na Z3 |
| N11 hairGuide | Pełna lista 1–10 | **Nakłada się na N3** — do przycięcia |
| N12–N20 guides | Po korekcie | Brak istotnych spoilerów reguł przed Z1 |
| N18 | Brak pełnego wpisu w guide | OK; opcja b w Z5 nadal „złoty akapit” |

---

## 5. Powtórzenia i nakładanie zakresów

| Para | Werdykt |
|------|---------|
| N1 vs N8 | OK — konstrukcja vs pełna analiza |
| N2 vs N3 | OK |
| N3 vs N11 | **Zadania różne**; **materiał referencyjny (pełna lista) nachodzi** — korekta N11 |
| N4–N5 vs N6 | OK |
| N8 vs N12 | OK — synteza odczytu vs błąd pojęciowy |
| N13–N17 vs N18 | OK jako synteza |
| N19 vs N20 | OK — powtórka vs sprawdzian |
| **Wzorzec siwizny** | Ten sam (lub prawie ten sam) poprawny zapis w N14, N17, N18, N19, N20 — ryzyko rozpoznawania zdania zamiast rozumienia |

Celowy interleaving (mit `.1`, oksydant jako pułapka) — **nie błąd**.

---

## 6. Informacje niepotwierdzone / decyzje

| Informacja | Lokalizacja | Status |
|------------|-------------|--------|
| Skala PL z poziomem 2 | N3, N11 | Decyzja + SOK25 (E3 bez osobnego 2) |
| Grupowanie 1 / 2–5 brązy / 6–10 blondy | N3 Z2 | Orientacja dydaktyczna z nazw — **nie** reguła technologiczna (oznaczone) |
| „Siwizna nie na długości” / skronie | N14+ | Decyzja właścicielki + SOK o rozmieszczeniu |
| „cieplejszy / chłodniejszy refleks” | N15, N18 | Opis wizualny case — nie legenda |
| Zakaz matematycznego liczenia włosów | N17 | Decyzja dydaktyczna |
| Pełne legendy `.2`/`.5`… | — | **Nie dodano** |
| Uniwersalne `.1` = popiel | — | **Świadomie odrzucone** |

---

## 7. Niespójności terminologiczne

| Obserwacja | Gdzie | Rekomendacja przy korekcie |
|------------|-------|----------------------------|
| „poziom” / „poziom kolorystyczny” | N2+ vs SOK | Ujednolicić w JSON: „poziom” + raz „poziom kolorystyczny” przy odroście |
| „refleks główny” vs Schwarzkopf „dominujący” | N4 vs N9 | OK — N9 cytuje E3; nie mieszać w jednej lekcji bez etykiety marki |
| „głębokość / ton” (Wella) vs „poziom / refleks” | N9 | OK jako terminologia źródłowa |
| „równość” / „równomierność” rozjaśnienia | N13–N18 | Ujednolicić do jednego słowa w JSON |
| „uwrażliwienie” bez definicji | N13+ | Krótko wyjaśnić przy pierwszym użyciu (N13) jeśli nie było wcześniej |

Brak konfliktów uniemożliwiających naukę.

---

## 8. Zadania o słabszej wartości / ryzyka jakości

| Problem | Lokalizacja |
|---------|-------------|
| Literówka „Materiału mówi” | N6 Z3 explanation |
| Poprawna opcja często `a` we wczesnych lekcjach N1–N10 | Przy JSON mieszać pozycje |
| Matching 2 pary (cienkie) | N2 Z3, N15 Z3 |
| Matching 4 pary (ciasne na 360 px) | N14 Z1 |
| Złoty akapit siwizny/odrostu powtarzany | N14–N20 |
| N18 Z3: para „odrost ↔ strefa odrostu” | Słaba dydaktycznie |
| N18: konflikt „bez wzorca” vs długa opcja b | Przed JSON sparafrazować poprawny wpis |
| Długie lewe teksty matching | N13 Z1 |

---

## 9. Mechaniki nieobsługiwane / niejednoznaczne przed JSON

| Element | Status |
|---------|--------|
| Typy zadań (5) | Obsługiwane; wzorce w `ph-*` / `wlos-*` |
| Jeden wspólny `explanation` | Zgodne ze scenariuszami |
| `scaleGuide` / karuzela / multiSelect / feedback per opcja | **Nieużywane** |
| N3 bloki A/B | **Obejście:** HTML nad Z3 — da się w `question`/bogatym tekście lub osobnym polu; **nie** jako osobny mid-flow bez zmiany silnika |
| N11/N17 `hairGuide` | Obsługiwane (`imageSrc`) |
| Matching z obrazami w opcjach | **Nieużywane** (tylko tekst) — OK |
| N18 | Wszystkie typy OK |
| Teaser N20 | Pole `completion.nextLesson.teaser` — OK |
| findError: `rows` + `correctOptionIds` | Scenariusze częściowo mówią `statements` — **mapowanie przy JSON** (nie zmiana silnika) |
| ordering: `steps` + `correctOrder` id[] | Mapowanie przy JSON |

**Wniosek:** cały moduł da się odwzorować w obecnym silniku **bez nowych komponentów**, z drobnymi obejściami redakcyjnymi (N3 A/B, mapowanie pól).

---

## 10. Problemy mobilne (360 px)

| Element | Ocena |
|---------|--------|
| Intro/guide | Zazwyczaj krótkie — OK |
| N13 matching | Długie opisy — skrócić przy JSON |
| N14 matching 4 pary | Ciasne — rozważyć 3 pary lub krótsze etykiety |
| N18/N20 Z5 | Długie opcje wpisu — złamać linie / skrócić stem |
| N3 bloki 1–5 i 6–10 | Dwa krótkie bloki — OK |
| Wzorniki hires full-bleed | Etykiety z HTML, nie z bitmapy — OK |

---

## 11. Ścieżki grafik

| Ścieżka w scenariuszach | Plik |
|-------------------------|------|
| `source-materials/_sok-pages/poziomy-1-10-wzornik-hires.png` | **Istnieje** (~345 KB) |
| `source-materials/_sok-pages/siwizna-wzornik-hires.png` | **Istnieje** (~550 KB) |
| `assets/images/Wzornik poziomów…jpg` | **Istnieje** (wariacja nazwy: `wlosów` w FS) — nie jest wymagana w N1–N20 jako jedyna; N3/N11 wskazują `_sok-pages` |

Brak brakujących ścieżek wskazanych jako obowiązkowe w N1–N20.

---

## 12. Audyt merytoryczny (checklista źródłowa)

| Punkt | Wynik |
|-------|--------|
| Skala 1–10 + poziom 2 | ✓ |
| Wyższy numer = jaśniejszy | ✓ |
| Budowa numeru | ✓ |
| 7.1 / 7.13 / 7.31 / 7.11 wg E3 | ✓ |
| Brak uniwersalnego `.1` / podwójnych cyfr / jednej legendy | ✓ |
| Separatory `.` `/` `-` | ✓ |
| 4 sytuacje SOK | ✓ |
| Odrost: poziom, długość, %, rozmieszczenie | ✓ |
| Siwizna w odroście, 10–90%, nierównomierność, skronie | ✓ |
| Kosmetyczny: stan dziś, poziom, refleks, jednolitość | ✓ |
| Rozjaśnienia: poziom, równość, uwrażliwienie | ✓ |
| Brak pytań o dobór/recepturę/oksydant/neutralizację/technikę jako poprawne | ✓ (pułapki) |
| Grupowanie 1 / 2–5 / 6–10 | Tylko orientacja — ✓ |

---

## 13. N20 jako sprawdzian

- Obejmuje: odczyt numeru, poziom vs refleks, skalę, odrost/siwizna, strefy, wpis.  
- Bez nowej wiedzy w guide.  
- Teaser zatwierdzony, bez nauki koła barw.  
- Ryzyka: gęsty case Z5; powtórzenie wzorca siwizny — drobne przed JSON.

---

## 14. Propozycje poprawek (bez edycji plików teraz)

### N6 — literówka
**Było:** `Materiału mówi wprost`  
**Ma być:** `Materiał mówi wprost`

### N11 — guide bez pełnej listy
**Propozycja `text`:**  
> Posługujesz się skalą edukacyjną z lekcji o poziomach. Grafika to tylko pomoc — odpowiedzi opieraj na numerach i nazwach w pytaniach, nie na odcieniu ekranu. Nazwy u producentów mogą się nieznacznie różnić.

*(Usunąć pełny wypis 1–10 z N11; zostawić w N3.)*

### N18 — Z3 matching
Usunąć parę „naturalny odrost ↔ strefa odrostu”; zostawić dwie pary: długości kosmetyczne / rozjaśnione końce (ew. dodać trzecią sensowną obserwację).

### N18 — Z5 opcja b
Sparafrazować poprawny wpis (te same informacje, inny szyk), żeby nie kopiować 1:1 zdania z N14.

### Wzorzec siwizny (N14–N20)
W N19/N20 użyć wariantu poprawnego zapisu, np. inne % / „równomiernie w odroście” vs skronie — bez zmiany reguły.

---

## 15. Liczby

| Status | Liczba |
|--------|--------|
| Gotowa do akceptacji | **17** |
| Wymaga drobnej korekty | **3** (N6, N11, N18) |
| Wymaga przebudowy | **0** |

Dodatkowo: **1 problem międzysekcyjny** (powtarzany wzorzec siwizny) — zalecany przed JSON, nie jako przebudowa lekcji.

---

## 16. Blokady przed JSON

1. Akceptacja właścicielki (checklist w APPROVAL_SUMMARY).  
2. Zalecane drobne korekty N6 / N11 / N18 (+ warianty siwizny).  
3. Mapowanie pól `findError`/`ordering` przy składaniu JSON.  
4. N3 A/B jako bloki w Z3 (bez mid-flow) — ustalone w scenariuszach.

**Brak blokady typu „silnik nie obsłuży modułu”.**

---

## 17. Rekomendacja

| Pytanie | Odpowiedź |
|---------|-----------|
| Przekazać właścicielce do końcowej akceptacji? | **Tak** |
| Potrzebny etap korekty przed JSON? | **Tak — krótki** (3 lekcje + warianty siwizny) |
| Po akceptacji → JSON? | **Tak** |

---

*Audyt zbiorczy. Scenariusze nie były edytowane w tym kroku.*
