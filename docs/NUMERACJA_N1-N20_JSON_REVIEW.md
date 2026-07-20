# Raport JSON — moduł N1–N20  
## Numeracja farb i diagnoza koloru

Data: lipiec 2026  
Zakres: utworzenie 20 plików produkcyjnych JSON + walidacja + porównanie ze scenariuszami.  
**Bez** wpisu do katalogu, **bez** zmian silnika, **bez** zmian zaakceptowanych scenariuszy, **bez** commit/push.

Źródła treści (wyłącznie):
- `docs/NUMERACJA_N1-N10_SCENARIOS.md`
- `docs/NUMERACJA_DIAGNOZA_N11-N20_SCENARIOS.md`
- `docs/NUMERACJA_N1-N20_APPROVAL_SUMMARY.md` (progresja / teaser N20)
- `docs/NUMERACJA_N1-N20_FINAL_REVIEW_AFTER_FIX.md` (kontrola finalnych brzmień)
- `docs/LESSON_STANDARD.md`, `docs/WRITING_STYLE.md`, `docs/PROJECT.md` (kontrakt formatu)

Generator/walidator (pomocniczy): `scripts/generate_numeracja_n1_n20.py`  
Wynik walidacji: `scripts/_numeracja_n1_n20_validation.json` — **20/20 OK**

---

## 1. Lista plików

| # | Plik |
|---|------|
| N1 | `lessons/lesson-n1-numer-farby.json` |
| N2 | `lessons/lesson-n2-liczba-przed-separatorem.json` |
| N3 | `lessons/lesson-n3-skala-poziomow.json` |
| N4 | `lessons/lesson-n4-refleks-glowny.json` |
| N5 | `lessons/lesson-n5-refleks-dodatkowy.json` |
| N6 | `lessons/lesson-n6-kolejnosc-refleksow.json` |
| N7 | `lessons/lesson-n7-podwojny-refleks.json` |
| N8 | `lessons/lesson-n8-czytanie-numeru.json` |
| N9 | `lessons/lesson-n9-separatory.json` |
| N10 | `lessons/lesson-n10-legenda-producenta.json` |
| N11 | `lessons/lesson-n11-rozpoznawanie-poziomow.json` |
| N12 | `lessons/lesson-n12-poziom-a-refleks.json` |
| N13 | `lessons/lesson-n13-sytuacje-kolorystyczne.json` |
| N14 | `lessons/lesson-n14-naturalny-odrost.json` |
| N15 | `lessons/lesson-n15-kolor-kosmetyczny.json` |
| N16 | `lessons/lesson-n16-rozjasnione-strefy.json` |
| N17 | `lessons/lesson-n17-procent-siwizny.json` |
| N18 | `lessons/lesson-n18-pelna-diagnoza-koloru.json` |
| N19 | `lessons/lesson-n19-powtorka-mieszana.json` |
| N20 | `lessons/lesson-n20-sprawdzian-modulu.json` |

Nazwy zgodne z preferowanymi z briefu. Konwencja projektu: `lessons/{id}.json` (jak `ph-*`, `wlos-*`).

---

## 2. Katalog

Wszystkie pliki w: **`lessons/`**  
(identycznie jak istniejące lekcje produkcyjne).

---

## 3. Podstawa schematu (Phase 1)

Zbadane wzorce produkcyjne przed tworzeniem plików:

| Wzorzec | Plik | Typy / pola |
|---------|------|-------------|
| Intro + `scaleGuide` | `ph-co-oznacza-ph.json` | `scaleGuide` = widget skali pH 0–14 (nie nadaje się do numeracji) |
| Intro + `hairGuide` + obraz | `wlos-oslonka-kora-rdzen.json`, `ph-jak-wplywa-na-wlos.json` | `hairGuide.imageSrc` **wymagane** — bez niego ekran jest pomijany |
| matching / ordering / findError | `wlos-oslonka-kora-rdzen.json`, `ph-podsumowanie-modulu.json` | `left`/`right`/`pairId`; `steps`/`correctOrder`; `rows`/`correctOptionIds`/`cardTitle` |
| Moduł kończący | `ph-podsumowanie-modulu.json` | `solvedLabel`: „Moduł ukończony” |

**Pola użyte w N1–N20 (zgodne z silnikiem `validateLesson`):**  
`schemaVersion`, `id`, `title`, `category`, `levelLabel`, `intro` (`narratorText`, `stakeText`, `startButtonLabel`, opcjonalnie `hairGuide`), `rewards`, `tasks` (5×), `completion` (+ `nextLesson.teaser`).

**Feedback:** `correctTitle` + `incorrectTitle` + jeden wspólny `explanation`.  
**Zdanie do zapamiętania:** `feedback.funFact` na Z5 (jedyny slot „aha” w silniku).  
**Bez:** `scaleGuide`, karuzeli, multiSelect, feedbacku per opcja, nowych typów.

---

## 4. Tabela N1–N20 (składnia + zgodność ze scenariuszem)

| Lekcja | ID | 5 zadań | Typy (kolejność) | Składnia JSON | Zgodność scenariusza | Uwagi mapowania |
|--------|-----|---------|------------------|---------------|----------------------|-----------------|
| N1 | `lesson-n1-numer-farby` | tak | SC·SC·M·TF·FE | OK | OK | Guide w `narratorText` |
| N2 | `lesson-n2-liczba-przed-separatorem` | tak | SC·TF·M·SC·FE | OK | OK | Guide w `narratorText` |
| N3 | `lesson-n3-skala-poziomow` | tak | SC·M·SC·TF·SC | OK | OK* | *bloki 1–5/6–10 → fallback w pytaniu Z3; `hairGuide`+WZN-P |
| N4 | `lesson-n4-refleks-glowny` | tak | SC·TF·M·SC·FE | OK | OK | |
| N5 | `lesson-n5-refleks-dodatkowy` | tak | SC·TF·M·SC·FE | OK | OK | „uzupełnia”; brak „słabszy” |
| N6 | `lesson-n6-kolejnosc-refleksow` | tak | SC·M·TF·SC·FE | OK | OK | |
| N7 | `lesson-n7-podwojny-refleks` | tak | SC·SC·TF·M·FE | OK | OK | |
| N8 | `lesson-n8-czytanie-numeru` | tak | SC·O·M·SC·FE | OK | OK | ordering = kolejność odczytu |
| N9 | `lesson-n9-separatory` | tak | M·TF·M·SC·FE | OK | OK | |
| N10 | `lesson-n10-legenda-producenta` | tak | TF·SC·FE·M·SC | OK | OK | teaser → N11 |
| N11 | `lesson-n11-rozpoznawanie-poziomow` | tak | SC·SC·M·TF·SC | OK | OK | bez pełnej listy 1–10; bez grafiki (opcjonalna w scenariuszu) |
| N12 | `lesson-n12-poziom-a-refleks` | tak | SC·TF·M·FE·SC | OK | OK | |
| N13 | `lesson-n13-sytuacje-kolorystyczne` | tak | M·SC·TF·SC·FE | OK | OK | |
| N14 | `lesson-n14-naturalny-odrost` | tak | M·FE·SC·TF·SC | OK | OK | pełne zdanie 1,5 cm / poziom 6 / 10% skroni |
| N15 | `lesson-n15-kolor-kosmetyczny` | tak | SC·TF·M·FE·SC | OK | OK | |
| N16 | `lesson-n16-rozjasnione-strefy` | tak | SC·M·TF·FE·SC | OK | OK | |
| N17 | `lesson-n17-procent-siwizny` | tak | O·TF·SC·M·FE | OK | OK | `hairGuide`+WZN-S; % w `note` |
| N18 | `lesson-n18-pelna-diagnoza-koloru` | tak | SC·SC·M·FE·SC | OK | OK | Z5: 4 opcje |
| N19 | `lesson-n19-powtorka-mieszana` | tak | SC·M·FE·SC·SC | OK | OK | |
| N20 | `lesson-n20-sprawdzian-modulu` | tak | FE·M·SC·FE·SC | OK | OK | teaser zatwierdzony; pokrycie mapy |

Legenda typów: SC=`singleChoice`, TF=`trueFalse`, M=`matching`, O=`ordering`, FE=`findError`.

---

## 5. Zmiany redakcyjne / techniczne (bez zmiany sensu)

| Zmiana | Zakres | Uzasadnienie |
|--------|--------|--------------|
| Usunięcie backticków markdown wokół zapisów (`7.13` → `7.13` w plain JSON) | wszystkie lekcje | JSON nie renderuje MD; treść ta sama |
| Guide bez obrazu włączony w `narratorText` (intro + tekst guide) | N1–N2, N4–N16, N18–N20 | Brak osobnego ekranu tekstowego w silniku (patrz §6) |
| Tytuł guide nie jako osobne `h2` przy braku `hairGuide` | j.w. | Ten sam tekst merytoryczny w intro |
| Bloki skali N3 A+B + zastrzeżenie w treści pytania Z3 | N3 | Autoryzowany fallback scenariusza (brak mid-flow) |
| Explicit `question` przy `findError` | zadania FE bez stemu w scenariuszu | Wymagane przez `validateLesson` |
| Zdanie do zapamiętania → `feedback.funFact` na Z5 | wszystkie | Jedyny slot „zapamiętaj” w UI |
| Zewnętrzne cudzysłowy „…” wokół niektórych stemów TF | część TF | Spójność z lekcjami `ph-*` / `wlos-*`; treść bez zmian |

**Brak** zmian merytorycznych względem zaakceptowanych scenariuszy.  
**Brak** słowa „słabszy” przy refleksie dodatkowym (N5).  
**Brak** nauczania „siwizna na długości” / „.1 zawsze oznacza popiel” jako reguł (tylko jako błędy/pułapki).

---

## 6. Elementy nieodwzorowane 1:1 w schemacie (bez wynajdywania pól)

| Element scenariusza | Status | Co zrobiono |
|---------------------|--------|-------------|
| Osobny ekran guide (title+text) **bez** grafiki | Częściowo | Tekst w `narratorText`; brak osobnego kroku UI |
| N3: **dwa** osobne ekrany (1–5, potem 6–10) przed Z3 | Częściowo | Oba bloki + zastrzeżenie w pytaniu Z3 (fallback z notatki technicznej N3) |
| Mid-flow content między zadaniami | Brak w silniku | Nie dodawano pól; nie zmieniano `app.js` |
| `scaleGuide` dla poziomów/siwizny | Zabronione / nieadekwatne | Nieużywane (`scaleGuide` = slider pH) |
| Karuzela kart wzornika | Brak w silniku | `hairGuide` z jednym obrazem (N3, N17) |
| Feedback per opcja | Brak w silniku | Jeden `explanation` (zgodnie ze scenariuszami po fix) |

**Żadnej lekcji nie zatrzymano** — wszystkie elementy miały ścieżkę mapowania dopuszczoną przez scenariusz lub standard (narrator / fallback N3 / funFact).

---

## 7. Unikalność ID

| Warstwa | Wynik |
|---------|-------|
| ID lekcji N1–N20 | unikalne; prefiks `lesson-n*` — **bez kolizji** z `ph-*`, `wlos-*`, archiwum |
| ID zadań (`n1-z1` … `n20-z5`) | unikalne w module |
| Format ID | `[a-z0-9-]+` (wymóg `getLessonIdFromUrl`) |
| Catalog wiring | **nie dodano** (zgodnie z briefem) |

---

## 8. Ścieżki grafik

| Lekcja | `imageSrc` w JSON | Plik na dysku | Uwaga integracyjna |
|--------|-------------------|---------------|--------------------|
| N3 | `source-materials/_sok-pages/poziomy-1-10-wzornik-hires.png` | **istnieje** | Ścieżka spoza typowego `assets/images/` |
| N17 | `source-materials/_sok-pages/siwizna-wzornik-hires.png` | **istnieje** | j.w. |
| (alt, nieużyty w JSON) | `assets/images/Wzornik poziomów kolorystycznych włosów naturalnych.jpg` | **istnieje** | Zapas pod assets; nie kopiowano ani nie edytowano plików |

Istniejące lekcje używają wyłącznie `assets/images/...`.  
**Blokada integracyjna:** serwer lokalny / hosting musi serwować `source-materials/` albo ścieżki trzeba będzie zmienić na kopię w `assets/` **przy wire’owaniu** (nie robione teraz — brief zabrania inventowania kopii).

Grafiki: pomocnicze, nie jedyne źródło odpowiedzi (nazwy/% w tekście).

---

## 9. Mechaniki silnika

| Mechanika | Wspierana? | Użycie w module |
|-----------|------------|-----------------|
| `singleChoice` | tak | tak |
| `trueFalse` | tak | tak |
| `matching` (2–3 pary) | tak | tak |
| `ordering` | tak | N8 (odczyt), N17 (% — obiektywna skala) |
| `findError` | tak | tak (`rows` + `correctOptionIds` + `cardTitle`) |
| `hairGuide` + 1 obraz | tak | N3, N17 |
| `scaleGuide` | tak, ale = pH | **nie użyto** |
| Mid-flow screens | **nie** | N3 fallback |
| Per-option feedback | **nie** | nieużywane |

Wszystkie 20 lekcji używają wyłącznie mechanik już obecnych w silniku.

---

## 10. Mapa pokrycia N20

| Zadanie | Kompetencje (scenariusz) | Realizacja w JSON |
|---------|--------------------------|-------------------|
| Z1 `findError` | Budowa numeru + separatory `.` `/` `-` + legenda producenta | tak — błąd: automatyczne przenoszenie legendy |
| Z2 `matching` | Poziom / skala 1–10; poziom vs refleks; główny + dodatkowy | tak — 3 pary |
| Z3 `singleChoice` | Kolejność `7.13`≠`7.31`; przykład `7.11` | tak |
| Z4 `findError` | Sytuacja kosmetyczny+odrost; opis odrostu; siwizna (nie „na długości”); wariant 20% z przodu | tak |
| Z5 `singleChoice` | Kolor kosmetyczny + strefy + rozjaśnione końce; poprawny wpis; pułapki receptury / pełnej karty | tak |

**Teaser po completion (zatwierdzony):**  
*„Skoro potrafisz już opisać to, co widzisz na włosach, czas sprawdzić, dlaczego niektóre kolory się wzmacniają, a inne wzajemnie neutralizują.”*  
Bez nauki koła barw / neutralizacji / oksydantu / techniki w treściach zadań.

---

## 11. Proponowana kolejność w katalogu

Moduł: `numeracja-farb` · tytuł modułu: **Numeracja farb i diagnoza koloru**

| Order | Lesson ID | `requiresLessonId` (propozycja) |
|------:|-----------|----------------------------------|
| 1 | `lesson-n1-numer-farby` | — (start modułu) |
| 2 | `lesson-n2-liczba-przed-separatorem` | N1 |
| 3 | `lesson-n3-skala-poziomow` | N2 |
| 4 | `lesson-n4-refleks-glowny` | N3 |
| 5 | `lesson-n5-refleks-dodatkowy` | N4 |
| 6 | `lesson-n6-kolejnosc-refleksow` | N5 |
| 7 | `lesson-n7-podwojny-refleks` | N6 |
| 8 | `lesson-n8-czytanie-numeru` | N7 |
| 9 | `lesson-n9-separatory` | N8 |
| 10 | `lesson-n10-legenda-producenta` | N9 |
| 11 | `lesson-n11-rozpoznawanie-poziomow` | N10 |
| 12 | `lesson-n12-poziom-a-refleks` | N11 |
| 13 | `lesson-n13-sytuacje-kolorystyczne` | N12 |
| 14 | `lesson-n14-naturalny-odrost` | N13 |
| 15 | `lesson-n15-kolor-kosmetyczny` | N14 |
| 16 | `lesson-n16-rozjasnione-strefy` | N15 |
| 17 | `lesson-n17-procent-siwizny` | N16 |
| 18 | `lesson-n18-pelna-diagnoza-koloru` | N17 |
| 19 | `lesson-n19-powtorka-mieszana` | N18 |
| 20 | `lesson-n20-sprawdzian-modulu` | N19 |

*Nie dodano wpisów do `js/lessons-catalog.js`.*

---

## 12. Blokery przed wire’owaniem katalogu

1. **Ścieżki obrazów N3/N17 pod `source-materials/`** — pliki istnieją, ale produkcyjne lekcje serwują dziś `assets/images/`. Przed testem w przeglądarce: upewnić się, że serwer oddaje te pliki, albo przenieść/skopiować do `assets/` i zaktualizować `imageSrc`.
2. **N3 UX skali** — bloki 1–5 i 6–10 nie są dwoma osobnymi ekranami mid-flow (brak slotu w silniku); są w pytaniu Z3. Akceptowalne per notatka techniczna; docelowo opcjonalna rozbudowa silnika.
3. **Guide bez grafiki** — brak osobnego ekranu title+text; treść jest w intro. Opcjonalna przyszła mechanika `textGuide` (poza zakresem).
4. **Katalog / unlock / Home** — niepodłączone; wymagają osobnego etapu integracji.
5. **Test ręczny w UI** — JSON nie był odpalany end-to-end w tej turze (tylko walidacja strukturalna + porównanie ze scenariuszem).

---

## 13. Rekomendacja

| Pytanie | Odpowiedź |
|---------|-----------|
| Czy JSON są gotowe merytorycznie? | **Tak** — treść z zaakceptowanych scenariuszy, 5 zadań, feedback obu stron, completion + teaser |
| Czy składnia / kontrakt silnika OK? | **Tak** — 20/20 walidacja |
| Czy można od razu podłączyć katalog? | **Prawie** — najpierw rozwiązać serwowanie grafik N3/N17 (lub ścieżki `assets/`) |
| Czy zmieniać silnik przed integracją? | **Nie wymagane** do uruchomienia; mid-flow N3 i textGuide to usprawnienia opcjonalne |
| Następny etap | Integracja katalogu + smoke test UI (N3 grafika, N17 grafika, N14/N20 brzmienia, teaser N20) |

**Werdykt:** paczka N1–N20 JSON jest **gotowa do etapu integracji i testów UI**, z jednym twardym punktem przed publikacją: dostępność plików graficznych spod ścieżek zapisanych w N3 i N17.

---

*Koniec raportu. Bez commit/push.*
