# Masterplan serii: Włos, wiązania i teoria koloru

Dokument roboczy gotowy do implementacji.  
Stan: **15 lipca 2026**.  
`moduleId`: **`wlos-kolor`**  
Pierwsza lekcja serii wymaga ukończenia modułu pH: `requiresLessonId: 'ph-podsumowanie-modulu'`.

---

## Spis treści

1. [Audyt materiałów źródłowych](#1-audyt-materiałów-źródłowych)
2. [Rozbieżności i kwestie do weryfikacji](#2-rozbieżności-i-kwestie-do-weryfikacji)
3. [Masterplan całej serii](#3-masterplan-całej-serii)
4. [Szczegółowy plan etapu 1](#4-szczegółowy-plan-etapu-1)
5. [Mapa istniejących ilustracji](#5-mapa-istniejących-illustracji)
6. [Review planszy „Z czego składa się włos?”](#6-review-planszy-z-czego-składa-się-włos)
7. [Scenariusz lekcji 1: Z czego składa się włos?](#7-scenariusz-lekcji-1-z-czego-składa-się-włos)
8. [Scenariusz lekcji 2: Osłonka, kora i rdzeń](#8-scenariusz-lekcji-2-osłonka-kora-i-rdzeń)
9. [Scenariusz lekcji 3: Keratyna — rusztowanie włosa](#9-scenariusz-lekcji-3-keratyna--rusztowanie-włosa)
10. [Checklisty review](#10-checklisty-review)

---

## 1. Audyt materiałów źródłowych

### 1.1 Wykorzystane pliki

| Plik | Rola w audycie |
|------|----------------|
| `source-materials/fryzjer CZEL. INFORM 2026(1).pdf` | Wykaz pytań ustnych (Technologia, Materiałoznawstwo), struktura egzaminu |
| `source-materials/71-materialoznawstwo-fryzjer-przykladowe-pyta.pdf` | Odpowiedzi ustne Mat.: skład chemiczny włosa (pyt. 7), pierwiastki (pyt. 2), części włosa (pyt. 49), właściwości fizyczne (pyt. 34), cykl włosowy (pyt. 35), mostki siarczkowe (pyt. 38) |
| `source-materials/ec41959d-444d-4d7f-8bc9-77d33c2aabc6.jpg` | Technologia pyt. 12 — łodyga: osłonka (łuski), kora, rdzeń; pyt. 10 — wiązania siarkowe |
| `source-materials/ef1ec94b-d4e2-48fa-bd47-46c18463a189.jpg` | Technologia pyt. 34 — łodyga, korzeń, cebulka włosa |
| `source-materials/d0ff081f-8ea8-4650-8507-bad97d24e71f.jpg` | Technologia pyt. 26 — pigment w korze włosa |
| `source-materials/da1815d5-6e71-4849-9475-eb38f2846815.jpg` | Technologia pyt. 18 — wiązania wodorowe i skręt po wałkach; pyt. 20 — koło barw |
| `source-materials/5098d39c-f76d-4c7b-ba70-782b3cc98171.jpg` | Technologia pyt. 6 — wiązania wodorowe przy modelowaniu |
| `source-materials/b32daf76-61c7-49a9-9d5b-ae5d2178767d.jpg` | Technologia pyt. 23 — chłonność włosów przy farbowaniu |
| `source-materials/6637ebe9-8fd1-4f95-8255-e9a9b2c2531f.jpg` | Technologia — warstwy skóry, cebulki w skórze właściwej |
| `source-materials/fd09edd2-3e7e-47d6-86eb-e3fa1a052dfd.jpg` | Technologia pyt. 17 — typy włosów |
| `source-materials/0d30d5fb-e2cc-48d3-b1f2-8f76bc4a476b.jpg` | Technologia pyt. 37 — zakwaszanie po zabiegach |
| `assets/images/hair-composition.png` | Zaakceptowana plansza referencyjna lekcji 1 |
| `assets/images/wlos-ph.jpg` | Schemat osłonki włosa (moduł pH — kontekst spiralny) |

**Pliki przeszukane, lecz niedostępne do odczytu treści w tym środowisku:**

| Plik | Status |
|------|--------|
| `source-materials/materialy do egzaminu fryzjerskiego.pdf` | Plik istnieje (1,6 MB, PDF 1.4). **image-only PDF — requires visual review** — brak warstwy tekstowej (`/Font`, operatory `Tj`); strony oparte o obrazy. Nie wykonano OCR; treść wymaga weryfikacji wizualnej przed użyciem w audycie procentów i keratyny. Wariantów `(3)` ani nazw z polskimi znakami w `source-materials/` nie znaleziono |

**Pliki poza bezpośrednim zakresem etapu 1, zarejestrowane na potrzeby masterplanu serii:**

`pelny_audyt_49_pytan_2026.pdf`, `klucz_odpowiedzi_egzamin_czeladniczy.pdf`, `Klucz_odpowiedzi.pdf`, `Test.pdf`, `70-maszynoznawstwo-fryzjer-przykladowe-pytani.pdf`, `64–68-*.pdf`, `67-przepisy-i-zasady-bezpieczenstwa-i-higieny.pdf`, pozostałe JPG Technologii (pyt. 1–37).

### 1.2 Audyt zagadnień — tabela

| Zagadnienie | Źródło | Egzamin | Salon | Uproszczenia w źródłach | Rozbieżności | Status |
|-------------|--------|---------|-------|-------------------------|--------------|--------|
| Skład chemiczny włosa: keratyna + woda + tłuszcze/lipidy + inne | Mat. pyt. 7 | Tak (Mat. 28) | Tak — dobór pielęgnacji | Lista składników bez procentów keratyny | Brak jednej wartości % w źródłach projektu | OK z ostrożnymi sformułowaniami |
| Woda ~10% w składzie | Mat. pyt. 7 | Może paść | Tak | Pojedyncza wartość bez kontekstu | Mat. pyt. 34: suchy włos ~18% wilgotności (higroskopijność) | DO WERYFIKACJI — podawać zakres/kontekst |
| Pierwiastki: C, O, N, H, S | Mat. pyt. 2, 26 (informator) | Tak | Niskie | — | — | OK |
| Łodyga: osłonka (łuski), kora, rdzeń | Technologia pyt. 12; Mat. pyt. 49 | Tak | Tak — diagnoza, zabiegi | Mat. 49: rdzeń = warstwa rdzeniowa | Nazewnictwo: osłonka/łuska włosowa | OK |
| Części włosa: łodyga, korzeń, cebulka | Technologia pyt. 34; Mat. pyt. 49 | Tak | Tak | Mat. 49: opuszka/cebulka, brodawka | Terminologia egzaminowa vs potoczna | OK z mapą terminów |
| Pigment w korze | Technologia pyt. 26 | Tak | Tak — koloryzacja | — | — | OK (etap 3) |
| Keratyna — definicja | Informator Technologia pyt. 64 | Tak | Tak | Brak rozwiniętej odpowiedzi w JPG/PDF projektu | — | DO WERYFIKACJI treści odpowiedzi |
| Keratyna alfa vs beta | Informator Mat. pyt. 18 | Tak | Niskie | — | Brak odpowiedzi w `71-materialoznawstwo…pdf` | BRAK — nie uczyć bez źródła |
| Hierarchia protofibryla → makrofibryla | — | — | — | Typowe w podręcznikach szkolnych | Brak w materiałach projektu | Nie wprowadzać w serii |
| Wiązania wodorowe — modelowanie | Technologia pyt. 6, 18 | Tak | Tak | Skręt „nietrwały” | — | OK (etap 2) |
| Wiązania siarkowe — trwała | Technologia pyt. 10; Mat. pyt. 38 | Tak | Tak | „Rozrywanie” vs redukcja — język egzaminacyjny | — | OK (etap 2) |
| Cykl wzrostu włosa | Mat. pyt. 35 | Tak | Niskie | Fazy anagen/katagen/telogen z różnymi czasami w źródle | — | OK (etap 1, lekcja 6) |
| Koło barw | Technologia pyt. 20 | Tak | Tak | — | — | OK (etap 3) |
| Chłonność / porowatość | Technologia pyt. 23; Mat. pyt. 41 | Tak | Tak | — | — | OK (etap 3–4) |

### 1.3 Wnioski audytu

Seria opiera się na **wielu źródłach**, nie na jednym PDF. Najpełniejsze odpowiedzi ustne daje `71-materialoznawstwo-fryzjer-przykladowe-pyta.pdf`; Technologia JPG uzupełnia warstwy łodygi, wiązania i kolorystykę. W `assets/images/` są już lokalne schematy do L1–L3, L6 i L8 (patrz §5); przed implementacją JSON wymagają review merytorycznego i wizualnego. **Nadal brakuje:** koła barw (etap 3), schematu wiązań siarkowych / trwałej (etap 2), opcjonalnie schematu cebulki (L4).

---

## 2. Rozbieżności i kwestie do weryfikacji

| ID | Kwestia | Źródła | Rekomendacja dla serii |
|----|---------|--------|------------------------|
| R1 | Procent keratyny (plansza: 80–90%) vs brak wartości w Mat. pyt. 7 | Plansza; Mat. pyt. 7 | **Zamknięte** — plansza L1 poprawiona: „główny białkowy budulec” bez procentów |
| R2 | Woda 10–15% (plansza) vs „około 10%” (Mat. 7) vs ~18% wilgotności suchego włosa (Mat. 34) | Plansza; Mat. 7, 34 | **Zamknięte na planszy** — „zawartość jest zmienna”; w lekcji podać obie perspektywy |
| R3 | Lipidy „chronią włos” — uproszczenie roli | Mat. pyt. 7 (tłuszcze, kwasy tłuszczowe, ceramidy) | **Zamknięte na planszy** — bariera ochronna i właściwości powierzchni; w lekcji rozwinąć rolę mechaniczną |
| R4 | Stopka planszy przypisuje wytrzymałość, sprężystość i reakcję na zabiegi **wyłącznie** trzem składnikom | Plansza | **Zamknięte** — „skład oraz sposób uporządkowania” |
| R5 | Keratyna alfa vs beta (Informator Mat. 18) | Informator — pytanie bez odpowiedzi w banku PDF | Oznaczyć jako temat egzaminowy **do uzupełnienia źródła**; nie w L3 |
| R6 | „Trzy rodzaje keratyny” | Brak w materiałach projektu | **Nie wprowadzać** |
| R7 | Osłonka vs łuska włosowa | Technologia pyt. 12; Mat. pyt. 49 | Konsekwentnie: **osłonka (łuski)** — oba terminy egzaminowe |
| R8 | Rdzeń — obecność u wszystkich włosów | Mat. pyt. 49 | Uczyć: rdzeń bywa słabo widoczny lub nie występuje u cienkich włosów (ostrożne sformułowanie — DO WERYFIKACJI u pedagoga/branży) |
| R9 | „Zamykanie łusek” po zakwaszaniu (Technologia pyt. 37) | Technologia pyt. 37; moduł pH | Uczyć jako **tendencję** (zgodnie z modułem pH), nie zero-jedynkowo |
| R10 | `materialy do egzaminu fryzjerskiego.pdf` | Plik istnieje; image-only PDF | Audyt treści po weryfikacji wizualnej; nie blokować implementacji L1–L3 |
| R11 | Keratyna włóknista / amorficzna / płaska (pliki w `assets/images/`) | Grafiki projektu; brak w `source-materials/` | Nie uczyć jako obowiązkowej typologii egzaminowej; ewentualnie jako uproszczony model z dopiskiem |
| R12 | Hierarchia makrofibryla → protofibryla (`hair-cortex-structure.png`, „Rys. 3.38”) | Grafika projektu; brak w materiałach egzaminowych PDF/JPG | Tylko z dopiskiem „model edukacyjny”; nie jako pełny opis naukowy |
| R13 | `hair-layers.png` — dekoracyjne liście | Grafika projektu | Przed użyciem: review zgodności z `ILLUSTRATION_GUIDE.md` (zakaz motywów botanicznych) |

---

## 3. Masterplan całej serii

### 3.1 Parametry serii

| Pole | Wartość |
|------|---------|
| Nazwa | Włos, wiązania i teoria koloru |
| `moduleId` | `wlos-kolor` |
| Poziom | Podstawy → Zabiegi |
| Wymaga | Ukończenie modułu `ph` (`ph-podsumowanie-modulu`) |
| Szacunkowa liczba lekcji | **22** (7 + 5 + 6 + 4) |

### 3.2 ETAP 1 — Budowa i skład włosa (7 lekcji)

| Element | Opis |
|---------|------|
| **Cel** | Uczennica rozumie z czego zbudowany jest włos, jakie ma warstwy i dlaczego to wpływa na zabiegi |
| **Zakres egzaminacyjny** | Skład chemiczny (Mat. 7, 28), pierwiastki (Mat. 2), części włosa (Mat. 49, Technologia 12, 34), właściwości fizyczne (Mat. 31, 34), cykl włosowy (Mat. 35), definicja keratyny (Technologia 64) |
| **Zakres salonowy** | Rozpoznanie uszkodzeń, diagnoza przed zabiegiem, wyjaśnianie klientce dlaczego włosy reagują różnie |
| **Pojęcia obowiązkowe** | keratyna, woda (wilgotność), lipidy, osłonka (łuski), kora, rdzeń, łodyga, korzeń, cebulka, melanina (wprowadzenie), higroskopijność |
| **Fakty do zapamiętania** | Trzy warstwy łodygi; pigment w korze; pierwiastki C, H, O, N, S; trzy części włosa (łodyga, korzeń, cebulka) |
| **Procesy do zrozumienia** | Dlaczego zawartość wody zmienia właściwości; rola keratyny jako rusztowania; gdzie w strukturze zachodzą późniejsze zabiegi |
| **Kolejność lekcji** | L1 Skład → L2 Warstwy łodygi → L3 Keratyna → L4 Części włosa → L5 Właściwości fizyczne → L6 Cykl wzrostu → L7 Podsumowanie etapu 1 |
| **Wiedza wcześniejsza** | Moduł pH: osłonka, pęcznienie, zakwaszanie |
| **Powroty później** | Wiązania (etap 2), pigment i chłonność (etap 3–4) |
| **Ilustracje** | L1: `hair-composition.png`; L2: `hair-layers.png`; L3: `hair-fibrous-keratin.png` (preferowana); L6: `hair-growth-cycle.png` |
| **Mnemotechniki** | „OKK” — Osłonka, Kora, (Rdzeń); „łodyga w korze ma pigment” |
| **Typowe błędy** | Mylenie osłonki z keratyną całego włosa; sztywne procenty składu; pigment „na powierzchni” |
| **Rozbieżności** | R1–R4, R7–R8 |

### 3.3 ETAP 2 — Wiązania oraz zmiana kształtu włosa (5 lekcji)

| Element | Opis |
|---------|------|
| **Cel** | Uczennica rozróżnia wiązania tymczasowe i trwałe oraz wie, które zabiegi je przekształcają |
| **Zakres egzaminacyjny** | Wiązania wodorowe (Technologia 6, 10, 18; Mat. 10), wiązania siarkowe / mostki siarczkowe (Technologia 10; Mat. 38, 22), proces trwałej (Technologia 10, 73) |
| **Zakres salonowy** | Modelowanie na szczotce, trwała, decyzja czy skręt utrzyma się po myciu |
| **Pojęcia obowiązkowe** | wiązania wodorowe, wiązania siarkowe (mostki disulfidowe), redukcja, utrwalacz, skręt trwały vs tymczasowy |
| **Fakty do zapamiętania** | Wilgoć + ciepło → wiązania wodorowe (tymczasowo); trwała → wiązania siarkowe |
| **Procesy do zrozumienia** | Dlaczego mycie „znosi” fale z modelowania; dlaczego trwała wymaga utrwalacza |
| **Kolejność lekcji** | L8 Wiązania wodorowe → L9 Wiązania siarkowe → L10 Trwała — co się dzieje we włosie → L11 Modelowanie vs trwała → L12 Podsumowanie etapu 2 |
| **Wiedza wcześniejsza** | Etap 1: keratyna, warstwy |
| **Powroty później** | Koloryzacja niszczy wiązania (etap 3), pH modułu pH |
| **Ilustracje** | L8: `hair-hydrogen-bonds.png` (wymaga visual revision); schemat wiązań siarkowych — do stworzenia |
| **Mnemotechniki** | „Woda zmywa lok, chemia zmienia most” |
| **Typowe błędy** | Uznawanie wiązań wodorowych za trwałe; mylenie „rozrywania” z całkowitym zniszczeniem włosa |
| **Rozbieżności** | Uproszczony język „rozrywanie wiązań” w Technologii pyt. 10 |

### 3.4 ETAP 3 — Teoria koloru (6 lekcji)

| Element | Opis |
|---------|------|
| **Cel** | Uczennica rozumie skąd bierze się kolor włosa i jak go neutralizować |
| **Zakres egzaminacyjny** | Pigment w korze (Technologia 26), koło barw (Technologia 20), kolory podstawowe, ton w ton (Technologia 32), płukanki (Technologia 33), chłonność (Technologia 23), promienie UV (Mat. 25) |
| **Zakres salonowy** | Dobór odcienia, neutralizacja żółci po rozjaśnieniu, ocena porowatości |
| **Pojęcia obowiązkowe** | melanina, naturalny pigment, koło barw, odcień komplementarny, neutralizacja, ton w ton, płukanka |
| **Fakty do zapamiętania** | Pigment w korze; barwniki roślinne vs utleniające (Mat. 15 — etap 4) |
| **Procesy do zrozumienia** | Dlaczego rozjaśnione włosy chłoną szybciej; jak działa neutralizacja |
| **Kolejność lekcji** | L13 Skąd włos bierze kolor → L14 Koło barw → L15 Neutralizacja odcieni → L16 Chłonność a farba → L17 Ton w ton i płukanki → L18 Podsumowanie etapu 3 |
| **Wiedza wcześniejsza** | Etap 1 (kora), moduł pH (koloryzacja, rozjaśnianie) |
| **Powroty później** | Numeracja (etap 4) |
| **Ilustracje** | Koło barw — do stworzenia |
| **Typowe błędy** | Neutralizacja „dowolnym” kolorem; ignorowanie porowatości |

### 3.5 ETAP 4 — Numeracja kolorów i praca kolorysty (4 lekcje)

| Element | Opis |
|---------|------|
| **Cel** | Uczennica czyta oznaczenia farb i rozumie dobór utleniacza |
| **Zakres egzaminacyjny** | Stężenia H₂O₂ (Mat. 24, 8), dobór aktywatora, farba permanentna (Mat. 44), czas aktywności farby (Mat. 46), henna/indygo/kampesz (Mat. 15) |
| **Zakres salonowy** | Dobór poziomu i odcienia, krycie siwych, bezpieczne rozjaśnianie |
| **Pojęcia obowiązkowe** | poziom jasności, odcień, utleniacz, aktywator, farba permanentna, farba roślinna |
| **Kolejność lekcji** | L19 Poziomy i odcienie → L20 Utleniacz a efekt → L21 Pierwsza koloryzacja — zasady → L22 Podsumowanie serii |
| **Wiedza wcześniejsza** | Etapy 1–3, moduł pH |
| **Teaser po serii** | Kolejny moduł kursu (np. techniki strzyżenia / trwała proceduralna) |

---

## 4. Szczegółowy plan etapu 1

| ID | Tytuł | Główna myśl | Cel dydaktyczny | Rodzaj wiedzy | Wymagania wstępne | Ilustracja | Powrót później |
|----|-------|-------------|-----------------|---------------|-------------------|------------|----------------|
| `wlos-z-czego-sklada-sie` | Z czego składa się włos? | Włos to głównie keratyna, ale jego zachowanie zależy też od wody i pozostałych składników | Wymienia główne składniki chemiczne włosa i rozumie, że procenty zależą od stanu włosa | zrozumienie + zapamiętanie | Moduł pH ukończony | `hair-composition.png` | L5 wilgotność; etap 3 chłonność |
| `wlos-oslonka-kora-rdzen` | Osłonka, kora i rdzeń | Łodyga ma trzy warstwy — każda pełni inną rolę | Wskazuje warstwy łodygi i przypisuje im podstawowe funkcje | zrozumienie | L1 | `hair-layers.png` (visual revision przed publikacją) | Moduł pH; L13 pigment w korze; etap 2 wiązania w korze |
| `wlos-keratyna-rusztowanie` | Keratyna — rusztowanie włosa | Keratyna to białko budujące włókna włosa — rusztowanie wytrzymałości | Wyjaśnia, że keratyna tworzy strukturę włókien; nie myli jej z wodą ani lipidami | zrozumienie | L1, L2 | `hair-fibrous-keratin.png` (content + visual revision) | Etap 2 mostki siarkowe; etap 3 uszkodzenia |
| `wlos-czesci-wlosa` | Łodyga, korzeń, cebulka | Włos to nie tylko to, co widać — korzeń i cebulka leżą w skórze | Rozróżnia łodygę, korzeń i cebulkę; wie gdzie zachodzi wzrost | zapamiętanie + zrozumienie | L2 | Opcjonalnie schemat cebulki — **do stworzenia** | L6 cykl; etap 3 |
| `wlos-wlasciwosci-fizyczne` | Wilgotność, elastyczność, chłonność | Właściwości włosa zależą od jego struktury i zawartości wody | Wyjaśnia higroskopijność i dlaczego mokry włos inaczej się zachowuje | zrozumienie | L1–L3 | Brak (tekst + zadania) | Etap 3 chłonność; Technologia 58 (elastyczność) |
| `wlos-cykl-wzrostu` | Cykl wzrostu włosa | Włos rośnie w fazach — nie wszystkie włosy w tej samej fazie naraz | Nazywa fazy cyklu i rozumie, że wypadanie do ~100–120 włosów/dzień bywa normalne | zapamiętanie | L4 | `hair-growth-cycle.png` (content revision) | Pielęgnacja, łysienie (Mat. 50 — poza serią) |
| `wlos-etap1-podsumowanie` | Budowa włosa — podsumowanie | Struktura i skład tłumaczą, jak włos zareaguje na zabieg | Integruje wiedzę z etapu 1 w zadaniach łączących | egzamin + salon | L1–L6 | — | Etap 2 |

---

## 5. Mapa istniejących ilustracji

### 5.1 Normalizacja plików (15 lipca 2026)

Wszystkie pliki serii `hair-*` miały błędną podwójną końcówkę `.webp.png`. Sygnatura binarna (`89 50 4E 47`) potwierdziła format **PNG** — bez konwersji, bez zmiany jakości.

| Stara nazwa | Nowa nazwa | Rzeczywisty format |
|-------------|------------|-------------------|
| `hair-composition.webp.png` | `hair-composition.png` | PNG |
| `hair-layers.webp.png` | `hair-layers.png` | PNG |
| `hair-fibrous-keratin.webp.png` | `hair-fibrous-keratin.png` | PNG |
| `hair-keratin-formation.webp.png` | `hair-keratin-formation.png` | PNG |
| `hair-amorphous-keratin.webp.png` | `hair-amorphous-keratin.png` | PNG |
| `hair-cortex-structure.webp.png` | `hair-cortex-structure.png` | PNG |
| `hair-growth-cycle.webp.png` | `hair-growth-cycle.png` | PNG |
| `hair-hydrogen-bonds.webp.png` | `hair-hydrogen-bonds.png` | PNG |

Plik `assets/images/wlos-ph.jpg` (JPEG) — moduł pH, bez zmian.

### 5.2 Przypisanie robocze do lekcji L1–L3

| Lekcja | Ilustracja preferowana | Alternatywy | Uzasadnienie |
|--------|------------------------|-------------|--------------|
| **L1** `wlos-z-czego-sklada-sie` | — *(bez grafiki)* | — | Lekcja Q&A: keratyna / woda / lipidy przez pytania i feedback. Plansza usunięta 21 lipca 2026. |
| **L2** `wlos-oslonka-kora-rdzen` | `hair-layers.png` | — | Schemat trzech warstw łodygi. **Poprawiona 15 lipca 2026** — usunięto dekoracje; dopisano brak rdzenia u każdego włosa. |
| **L3** `wlos-keratyna-rusztowanie` | `hair-fibrous-keratin.png` | — | **Poprawiona 15 lipca 2026** — spiralne łańcuchy → włókna keratynowe; białka towarzyszące; model uproszczony. |

**Pliki reference-only (nie jako główne ilustracje lekcji):**

- `hair-keratin-formation.png` — termin „keratyna płaska”; miesza poziomy opisu (R11)
- `hair-amorphous-keratin.png` — typologia spoza zakresu egzaminowego (R11)
- `hair-cortex-structure.png` — hierarchia kory za głęboka na start (R12)

**Decyzja:** nie uczymy podziału na keratynę „włóknistą, amorficzną i płaską” w serii — może wprowadzić uczennice w błąd.

Zgodnie z `LESSON_STANDARD.md` każda lekcja ma **maksymalnie jedną** główną ilustrację.

### 5.3 Mapa wszystkich plików

| Plik | Temat | Proponowana lekcja | Uwagi |
|------|-------|-------------------|-------|
| `assets/images/hair-composition.png` | Skład włosa: keratyna, woda, lipidy | L1 | **removed** — lekcja L1 bez grafiki (Q&A) |
| `assets/images/hair-layers.png` | Osłonka, kora, rdzeń | L2 | **ready** — poprawiony wygląd + dopisek o rdzeniu |
| `assets/images/hair-fibrous-keratin.png` | Łańcuchy białkowe → włókna keratynowe | L3 | **ready** — poprawiona treść i wygląd |
| `assets/images/hair-keratin-formation.png` | Spirale → „keratyna płaska” | reference-only | Nie używać w lekcjach |
| `assets/images/hair-amorphous-keratin.png` | Spirala → keratyna amorficzna | reference-only | Nie używać w lekcjach |
| `assets/images/hair-cortex-structure.png` | Hierarchia kory (Rys. 3.38) | reference-only | Nie używać w lekcjach |
| `assets/images/hair-growth-cycle.png` | Cykl: anagen, katagen, telogen | L6 | Rys. 3.22; uzgodnić z Mat. pyt. 35 |
| `assets/images/hair-hydrogen-bonds.png` | Mostki wodorowe | L8 etap 2 | Technologia pyt. 6, 18 |
| `assets/images/wlos-ph.jpg` | Osłonka: pH | Moduł pH L2 (użyta) | Spiralny powrót w L2 serii |

**Brak w `assets/images/` (do stworzenia):**

- koło barw (etap 3)
- schemat wiązań siarkowych / trwała (etap 2)
- schemat cebulki włosa (L4 — opcjonalnie)

### 5.4 Review wizualny i merytoryczny — statusy

| Plik | Status merytoryczny | Uzasadnienie merytoryczne | Status wizualny | Uzasadnienie wizualne |
|------|---------------------|---------------------------|-----------------|----------------------|
| `hair-composition.png` | **ready** | Poprawiona 15 lip 2026: bez sztywnych procentów; keratyna = główny białkowy budulec; woda zmienna; lipidy = bariera ochronna i powierzchnia; stopka o składzie i uporządkowaniu | **ready** | Kompozycja edytorialna; miękkie plamy konstrukcyjne; brak ornamentów |
| `hair-layers.png` | **ready** | Trzy warstwy zgodne z Technologia pyt. 12; dopisek: rdzeń nie w każdym włosie (R8) | **ready** | Poprawiona 15 lip 2026: bez liści, serduszek, gwiazdek |
| `hair-fibrous-keratin.png` | **ready** | Poprawiona 15 lip 2026: łańcuchy → włókna keratynowe + białka towarzyszące; model uproszczony (R11) | **ready** | Poprawiona 15 lip 2026: bez dekoracji |
| `hair-keratin-formation.png` | **not-recommended** | Termin „keratyna płaska”; miesza poziomy opisu (R11) | **requires-visual-revision** | Liście, gwiazdki, serduszko — nie publikować |
| `hair-amorphous-keratin.png` | **reference-only** | Typologia spoza banku egzaminowego (R11) | **ready** | Czysty schemat; tylko materiał roboczy |
| `hair-cortex-structure.png` | **reference-only** | Hierarchia kory — model podręcznikowy (R12) | **ready** | Styl podręcznikowy; tylko materiał roboczy |
| `hair-growth-cycle.png` | **requires-content-revision** | Fazy poprawne; „do 15 razy w życiu” — DO WERYFIKACJI (Mat. pyt. 35) | **ready** | Anatomiczny styl; brak ornamentów |
| `hair-hydrogen-bonds.png` | **ready** | Mostki O–H — Technologia pyt. 6, 18 | **requires-visual-revision** | Liście, serduszko, gwiazdki — przed L8 |

**Legenda statusów:** `ready` · `requires-content-revision` · `requires-visual-revision` · `requires-content-and-visual-revision` · `reference-only` · `not-recommended`

**Brak plików z listy docelowej:** wszystkie 8 oczekiwanych plików `hair-*.png` istnieją lokalnie.

---

## 6. Review planszy „Z czego składa się włos?”

**Plik:** `assets/images/hair-composition.png`  
**Status:** **ready** (poprawiona 15 lipca 2026)

### Treść na planszy (aktualna)

| Sekcja | Tekst |
|--------|-------|
| **KERATYNA** | główny białkowy budulec włosa |
| **WODA** | jej zawartość jest zmienna; wpływa na właściwości mechaniczne włosa |
| **LIPIDY** | występują w niewielkiej ilości; wspierają barierę ochronną i właściwości powierzchni włosa |
| **Stopka** | Skład oraz sposób uporządkowania tych elementów wpływają na wytrzymałość, sprężystość i reakcję włosa na zabiegi fryzjerskie. |

### Uwagi do implementacji JSON (L1)

- W `imageCaption` można doprecyzować: włos zawiera też inne białka (np. KAP), melaninę i mikroelementy — Mat. pyt. 7
- Nie podawać sztywnych procentów keratyny ani wody (R1–R2 zamknięte na planszy)
- Lipidy: w lekcji można rozwinąć, że współtworzą barierę i wpływają na właściwości mechaniczne — nie tylko „chronią powierzchnię”

---

## 7. Scenariusz lekcji 1: Z czego składa się włos?

### Metadane

| Pole | Wartość |
|------|---------|
| **ID** | `wlos-z-czego-sklada-sie` |
| **Tytuł** | Z czego składa się włos? |
| **Główna myśl** | Włos to głównie keratyna, ale jego właściwości zależą też od wody i pozostałych składników |
| **Cel dydaktyczny** | Po lekcji uczennica wymienia trzy główne składniki chemiczne włosa i rozumie, że ich udział zależy od stanu włosa |
| **Rodzaj wiedzy** | zrozumienie + zapamiętanie; egzamin + salon |
| **Wymagania wstępne** | Moduł pH ukończony (`ph-podsumowanie-modulu`) |
| **Pojęcia obowiązkowe** | keratyna, woda, lipidy |
| **Ilustracja** | `assets/images/hair-composition.png` |
| **imageAlt** | Uproszczony schemat trzech głównych składników włosa: keratyna, woda i lipidy |
| **imageCaption** | Keratyna stanowi główną masę włosa. Zawartość wody i lipidów zależy od stanu włosa i warunków otoczenia. |
| **Tagi robocze** | `wlos`, `sklad`, `keratyna`, `wilgotnosc`, `lipidy`, `podstawy` |
| **Źródła** | Mat. pyt. 7; Mat. pyt. 34 (wilgotność); plansza referencyjna |
| **Rozbieżności** | R1, R2, R3, R4 |
| **Powrót później** | L5 wilgotność; L2 warstwy; etap 3 chłonność |

### Intro

- **narratorText:** Znasz już, jak pH wpływa na powierzchnię włosa. Teraz zajrzysz głębiej — z czego włos jest zbudowany i dlaczego to ma znaczenie w salonie.
- **stakeText:** do 75 Kosmyków
- **startButtonLabel:** Zacznij lekcję

### Część edukacyjna (`hairGuide`)

- **title:** Z czego składa się włos?
- **text:** Włos wygląda jak jedna gładka nitka, ale to złożona struktura. Główną masę stanowi keratyna — białko, z którego zbudowane są włókna. W włosie jest też woda oraz niewielka ilość lipidów. Ich udział zmienia się wraz ze stanem włosa i wilgotnością powietrza.
- **helperText:** W materiałach egzaminacyjnych wymienia się też m.in. melaninę, aminokwasy i pierwiastki — wrócimy do nich w kolejnych lekcjach.
- **continueLabel:** Dalej

### Przykład salonowy

Suche, zniszczone włosy po rozjaśnieniu często trudniej układać — straciły część wody i lipidsów powierzchniowych, a keratynowa struktura jest nadwerężona. Dlatego po zabiegu stosujesz produkty, które wspierają nawilżenie i wygładzenie, a nie tylko „zamykają łuski”.

### Zadania (10 + 10 + 15 + 15 + 25 Kosmyków)

#### Zadanie 1 — `trueFalse` (10)

- **kicker:** Krok 1 · Główny składnik
- **question:** Keratyna stanowi główną masę włosa.
- **correctValue:** true
- **feedback.correctTitle:** Tak.
- **feedback.incorrectTitle:** Sprawdź jeszcze raz.
- **feedback.explanation:** Keratyna to białko budujące włókna włosa. Materiałoznawstwo wskazuje ją jako podstawę składu chemicznego włosa — obok wody, tłuszczów i innych składników.

#### Zadanie 2 — `singleChoice` (10)

- **kicker:** Krok 2 · Woda we włosie
- **question:** Co w materiałach projektu wiemy o wodzie we włosie?
- **options:**
  - a: Jej dokładny procent jest zawsze taki sam u każdego włosa
  - b: W składzie włosa występuje woda, a wilgotność suchego włosa może się różnić
  - c: Woda występuje wyłącznie na powierzchni osłonki
- **correctOptionId:** b
- **feedback.correctTitle:** Dobrze.
- **feedback.incorrectTitle:** Sprawdź jeszcze raz.
- **feedback.explanation:** Materiałoznawstwo podaje około 10% wody w składzie włosa, a wśród właściwości fizycznych — około 18% wilgotności suchiego włosa. To pokazuje, że zawartość wody zależy od stanu i warunków.

#### Zadanie 3 — `matching` (15)

- **kicker:** Krok 3 · Dopasuj składnik
- **question:** Połącz składnik z jego rolą.
- **leftTitle:** Składnik
- **rightTitle:** Rola
- **left:** l1→a Keratyna | l2→b Woda | l3→c Lipidy
- **right:** r1→c niewielka ilość; wpływ na powierzchnię włosa | r2→a główny budulec włókien | r3→b wpływ m.in. na elastyczność
- **feedback.correctTitle:** Pasuje.
- **feedback.incorrectTitle:** Sprawdź jeszcze raz.
- **feedback.explanation:** Keratyna buduje włókna, woda wpływa na właściwości mechaniczne, lipidy (tłuszcze, ceramidy) występują w niewielkiej ilości i dotyczą m.in. powierzchni włosa.

#### Zadanie 4 — `findError` (15)

- **kicker:** Krok 4 · Znajdź błąd
- **question:** Które stwierdzenie jest błędne?
- **statements:**
  - s1 (OK): W skład włosa wchodzą m.in. keratyna i woda
  - s2 (OK): Zawartość wody we włosie może zależeć od jego stanu
  - s3 (ERROR): Włos składa się wyłącznie z keratyny, wody i lipidów — innych składników nie ma
- **feedback.correctTitle:** Trafione.
- **feedback.incorrectTitle:** Sprawdź jeszcze raz.
- **feedback.explanation:** Materiałoznawstwo wymienia też m.in. aminokwasy, melaninę, witaminy i mikroelementy. Trzy główne składniki to uproszczenie dydaktyczne, nie pełny opis.

#### Zadanie 5 — `singleChoice` (25)

- **kicker:** Krok 5 · Co zapamiętać?
- **question:** Które podsumowanie lekcji jest najtrafniejsze?
- **options:**
  - a: Włos to niemal wyłącznie woda — keratyna ma drugorzędne znaczenie
  - b: Keratyna to główny budulec, ale właściwości włosa zależą też od wody, lipidów i pozostałych składników
  - c: Lipidy stanowią około połowy masy włosa i decydują o jego kolorze
- **correctOptionId:** b
- **feedback.correctTitle:** Dokładnie.
- **feedback.incorrectTitle:** Sprawdź jeszcze raz.
- **feedback.explanation:** Główna myśl lekcji: keratyna buduje włókna, ale włos reaguje na zabiegi także przez wodę, lipidy i inne składniki. Kolor związany jest z pigmentem w korze — poznasz to później.

### Completion

- **solvedLabel:** Lekcja ukończona
- **title:** Wiesz, z czego zbudowany jest włos
- **subtitle:** Rozróżniasz keratynę, wodę i lipidy oraz rozumiesz, że ich udział nie jest stały w każdych warunkach.
- **kosmykiLabel:** Kosmyków za tę lekcję
- **nextLesson.label:** Następna lekcja
- **nextLesson.teaser:** Co kryje przekrój łodygi włosa?

---

## 8. Scenariusz lekcji 2: Osłonka, kora i rdzeń

### Metadane

| Pole | Wartość |
|------|---------|
| **ID** | `wlos-oslonka-kora-rdzen` |
| **Tytuł** | Osłonka, kora i rdzeń |
| **Główna myśl** | Łodyga włosa ma trzy warstwy — każda pełni inną rolę |
| **Cel dydaktyczny** | Uczennica wskazuje trzy warstwy łodygi i przypisuje im podstawowe funkcje |
| **Rodzaj wiedzy** | zapamiętanie + zrozumienie |
| **Wymagania wstępne** | `wlos-z-czego-sklada-sie`; moduł pH (osłonka) |
| **Pojęcia obowiązkowe** | osłonka (łuski), kora włosa, rdzeń, łodyga |
| **Ilustracja** | `assets/images/hair-layers.png` |
| **Tagi robocze** | `wlos`, `oslonka`, `kora`, `rdzen`, `lodyga` |
| **Źródła** | Technologia pyt. 12; Mat. pyt. 49 |
| **Rozbieżności** | R7, R8, R9 |
| **Powrót później** | L13 pigment w korze; etap 2 wiązania w korze |

### Intro

- **narratorText:** Wiesz już, z czego chemicznie zbudowany jest włos. Teraz zobaczysz jego przekrój — trzy warstwy łodygi i to, dlaczego każda ma inne znaczenie w salonie.
- **stakeText:** do 75 Kosmyków
- **startButtonLabel:** Zacznij lekcję

### Część edukacyjna (`scaleGuide` — tekst bez skali)

- **title:** Trzy warstwy łodygi
- **text:** Łodyga to część włosa nad skórą. Od zewnątrz: osłonka z łusek — jak dachochronki na powierzchni. Pod nią kora — najgrubsza warstwa, w niej m.in. pigment. W środku bywa rdzeń — u cienkich włosów bywa słabo widoczny lub go brak.
- **helperText:** W module pH uczyłaś się o zachowaniu osłonki. Tu chodzi o to, **gdzie** leży każda warstwa.
- **continueLabel:** Dalej

### Przykład salonowy

Po rozjaśnieniu stylistka widzi, że włos jest matowy i szorstki — osłonka jest nadwerężona, a kora straciła część pigmentu. Farba ton w ton wnika głównie przez strukturę kory, dlatego stan tej warstwy decyduje o efekcie koloryzacji.

### Zadania

#### Zadanie 1 — `singleChoice` (10)

- **kicker:** Krok 1 · Co to jest łodyga?
- **question:** Które stwierdzenie o łodydze włosa jest poprawne?
- **options:**
  - a: To część włosa wystająca ponad skórę
  - b: To wyłącznie cebulka w skórze głowy
  - c: To warstwa pigmentu na powierzchni skóry
- **correctOptionId:** a
- **feedback.correctTitle:** Tak.
- **feedback.incorrectTitle:** Sprawdź jeszcze raz.
- **feedback.explanation:** Technologia definiuje łodygę jako część włosa nad skórą. Korzeń i cebulka leżą w skórze — poznasz je w kolejnej lekcji etapu 1.

#### Zadanie 2 — `trueFalse` (10)

- **kicker:** Krok 2 · Gdzie jest pigment?
- **question:** Naturalny pigment włosa znajduje się w korze włosa.
- **correctValue:** true
- **feedback.correctTitle:** Prawda.
- **feedback.incorrectTitle:** Sprawdź jeszcze raz.
- **feedback.explanation:** Technologia pyt. 26 wskazuje korę włosa jako miejsce pigmentu. Osłonka chroni powierzchnię, ale kolor „siedzi” głębiej — w korze.

#### Zadanie 3 — `matching` (15)

- **kicker:** Krok 3 · Warstwa i rola
- **question:** Dopasuj warstwę łodygi do opisu.
- **left:** l1→a Osłonka (łuski) | l2→b Kora | l3→c Rdzeń
- **right:** r1→b najgrubsza warstwa; pigment | r2→c warstwa środkowa; bywa słabo widoczna | r3→a zewnętrzna warstwa z łusek
- **feedback.correctTitle:** Dobrze.
- **feedback.incorrectTitle:** Sprawdź jeszcze raz.
- **feedback.explanation:** Od zewnątrz: osłonka, potem kora z pigmentem, wewnątrz rdzeń. To układ wymagany m.in. na egzaminie (Technologia pyt. 12).

#### Zadanie 4 — `ordering` (15)

- **kicker:** Krok 4 · Od środka na zewnątrz
- **question:** Ułóż warstwy łodygi od środka na zewnątrz.
- **items:** rdzeń (1) → kora (2) → osłonka (3)
- **feedback.correctTitle:** Właściwa kolejność.
- **feedback.incorrectTitle:** Sprawdź jeszcze raz.
- **feedback.explanation:** W środku rdzeń, wokół niego kora, na zewnątrz osłonka z łusek. Zapamiętaj kierunek — w zadaniach egzaminacyjnych często pada układ warstw.

#### Zadanie 5 — `findError` (25)

- **kicker:** Krok 5 · Co jest nie tak?
- **question:** W którym stwierdzeniu jest błąd?
- **statements:**
  - s1 (OK): Osłonka składa się z łusek na powierzchni włosa
  - s2 (ERROR): Pigment naturalny gromadzi się głównie w osłonce włosa
  - s3 (OK): Kora to warstwa między osłonką a rdzeniem
- **feedback.correctTitle:** Znalazłaś błąd.
- **feedback.incorrectTitle:** Sprawdź jeszcze raz.
- **feedback.explanation:** Pigment leży w korze, nie w osłonce. Osłonka wpływa na połysk i to, jak preparaty wnikają do włosa — stąd łączenie z pH w module pH.

### Completion

- **title:** Znasz trzy warstwy łodygi
- **subtitle:** Wiesz, gdzie leży pigment i dlaczego osłonka ma znaczenie przy zabiegach chemicznych.
- **nextLesson.teaser:** Z czego zbudowane są włókna keratynowe?

---

## 9. Scenariusz lekcji 3: Keratyna — rusztowanie włosa

### Metadane

| Pole | Wartość |
|------|---------|
| **ID** | `wlos-keratyna-rusztowanie` |
| **Tytuł** | Keratyna — rusztowanie włosa |
| **Główna myśl** | Keratyna to białko tworzące włókna — rusztowanie wytrzymałości włosa |
| **Cel dydaktyczny** | Uczennica wyjaśnia, że keratyna buduje włókna w korze i nie myli jej z wodą ani lipidami |
| **Rodzaj wiedzy** | zrozumienie |
| **Wymagania wstępne** | L1, L2 |
| **Pojęcia obowiązkowe** | keratyna, włókno keratynowe, siarka (w kontekście pierwiastków) |
| **Ilustracja** | `assets/images/hair-fibrous-keratin.png` — w `imageCaption`: model uproszczony; włókna keratynowe z białkami towarzyszącymi (R11) |
| **Tagi robocze** | `wlos`, `keratyna`, `wlokno`, `siarka` |
| **Źródła** | Mat. pyt. 7; Mat. pyt. 2; Informator Technologia pyt. 64; Mat. pyt. 38 (mostki siarczkowe — zapowiedź) |
| **Rozbieżności** | R5, R6 — **nie uczyć** alfa/beta ani „trzech rodzajów keratyny” |
| **Powrót później** | Etap 2: mostki siarkowe; etap 3: uszkodzenia keratyny |

### Intro

- **narratorText:** Keratynę już znasz jako główny składnik włosa. Teraz zobaczysz, jak pełni rolę rusztowania — i czym różni się od wody czy lipidów.
- **stakeText:** do 75 Kosmyków
- **startButtonLabel:** Zacznij lekcję

### Część edukacyjna

- **title:** Rusztowanie z keratyny
- **text:** Keratyna to białko zbudowane m.in. z pierwiastków węgla, tlenu, azotu, wodoru i siarki. W korze włosa układa się we włókna, które nadają mu wytrzymałość. To nie to samo co woda ani lipidy — one wpływają na włos inaczej: woda na wilgotność, lipidy na powierzchnię.
- **helperText:** W podręcznikach bywa schemat: aminokwas → włókno. To uproszczenie — w tej serii trzymamy się tego, co widać w materiałach egzaminacyjnych projektu.
- **continueLabel:** Dalej

### Przykład salonowy

Po trwałej ondulacji fryzjerka mówi klientce, że struktura włókien keratynowych została przekształcona — dlatego włos trzyma nowy kształt po utrwaleniu. To zapowiedź wiązań siarkowych w etapie 2.

### Zadania

#### Zadanie 1 — `singleChoice` (10)

- **kicker:** Krok 1 · Czym jest keratyna?
- **question:** Keratyna we włosie to przede wszystkim:
- **options:**
  - a: białko budujące włókna włosa
  - b: płyn nawilżający w środku rdzenia
  - c: barwnik nadający kolor naturalny
- **correctOptionId:** a
- **feedback.correctTitle:** Tak.
- **feedback.incorrectTitle:** Sprawdź jeszcze raz.
- **feedback.explanation:** Keratyna to białko — główny budulec włókien. Barwnik to melanina w korze, a woda to osobny składnik.

#### Zadanie 2 — `trueFalse` (10)

- **kicker:** Krok 2 · Pierwiastki
- **question:** Do podstawowych pierwiastków w składzie włosa należy siarka.
- **correctValue:** true
- **feedback.correctTitle:** Prawda.
- **feedback.incorrectTitle:** Sprawdź jeszcze raz.
- **feedback.explanation:** Materiałoznawstwo wymienia m.in. C, O, N, H i S. Siarka wiąże się z mostkami siarczkowymi w keratynie — wrócisz do tego przy wiązaniach.

#### Zadanie 3 — `matching` (15)

- **kicker:** Krok 3 · Co do czego?
- **question:** Dopasuj składnik do roli.
- **left:** l1→a Keratyna | l2→b Woda | l3→c Lipidy
- **right:** r1→b wilgotność i właściwości mechaniczne | r2→a włókna rusztowujące w korze | r3→c powierzchnia i bariera lipidowa
- **feedback.correctTitle:** Dobrze.
- **feedback.incorrectTitle:** Sprawdź jeszcze raz.
- **feedback.explanation:** Keratyna = struktura włókien, woda = właściwości związane z wilgotnością, lipidy = powierzchnia. Nie zamieniaj tych ról miejscami.

#### Zadanie 4 — `singleChoice` (15)

- **kicker:** Krok 4 · Gdzie keratyna?
- **question:** Włókna keratynowe budują przede wszystkim:
- **options:**
  - a: osłonkę z pojedynczych łusek bez włókien
  - b: korę włosa
  - c: wyłącznie rdzeń, jeśli w ogóle występuje
- **correctOptionId:** b
- **feedback.correctTitle:** Dobrze.
- **feedback.incorrectTitle:** Sprawdź jeszcze raz.
- **feedback.explanation:** Kora to warstwa z włóknami keratynowymi. Osłonka to łuski na powierzchni — inna struktura, choć też oparta na keratynie.

#### Zadanie 5 — `findError` (25)

- **kicker:** Krok 5 · Mit czy fakt?
- **question:** Które stwierdzenie jest błędne?
- **statements:**
  - s1 (OK): Keratyna stanowi główną masę włosa
  - s2 (ERROR): Włos ma trzy odrębne rodzaje keratyny — każda warstwa z innego rodzaju
  - s3 (OK): Mostki siarczkowe w keratynie mają znaczenie przy trwałej ondulacji
- **feedback.correctTitle:** Trafione.
- **feedback.incorrectTitle:** Sprawdź jeszcze raz.
- **feedback.explanation:** Materiały projektu nie potwierdzają podziału na „trzy rodzaje keratyny” dla warstw. Uczymy: keratyna buduje włókna, a wiązania siarkowe stabilizują kształt — to temat kolejnego etapu serii.

### Completion

- **title:** Rozumiesz rolę keratyny
- **subtitle:** Wiesz, że keratyna buduje włókna w korze i różni się od wody oraz lipidów.
- **nextLesson.teaser:** Gdzie w skórze zaczyna się włos?

---

## 10. Checklisty review

### 10.1 Review merytoryczny (etap planowania)

- [x] Treść oparta na wielu plikach źródłowych (informator, Mat. PDF, Technologia JPG, plansza)
- [x] Brak dosłownego kopiowania odpowiedzi egzaminacyjnych
- [x] Procenty składu — ostrożne sformułowania (R1–R2)
- [x] Brak „trzech rodzajów keratyny” i hierarchii protofibril bez źródła
- [x] Rozdzielenie: włókna keratynowe / woda / lipidy / pigment
- [x] Perspektywa egzamin vs praktyka odnotowana w rozbieżnościach
- [ ] Uzupełnić audyt po weryfikacji wizualnej `materialy do egzaminu fryzjerskiego.pdf` (image-only PDF)
- [x] Procenty składu — poprawione na planszy L1 (R1–R4)
- [ ] Visual revision `hair-hydrogen-bonds.png` przed L8 (§5.4)
- [ ] Zweryfikować odpowiedź na keratynę alfa/beta (Informator Mat. 18)

### 10.2 Review dydaktyczny

- [x] Każda lekcja L1–L3 ma jedną główną myśl
- [x] Kolejność: skład → warstwy → keratyna
- [x] Spiralne nawiązanie do modułu pH (osłonka)
- [x] 5 zadań, typy zróżniczone, rosnąca trudność
- [x] Pełny feedback w każdym zadaniu
- [x] Punktacja 10+10+15+15+25

### 10.3 Review językowy (L1–L3)

- [x] Krótkie zdania, ton wspierający, bez tonu egzaminacyjnego
- [x] Brak potrójnych wyliczeń AI i sztucznych „nie chodzi o… chodzi o…”
- [x] Terminy wprowadzone przed użyciem w zadaniu
- [x] Teksty mieszczą się w limitach LESSON_STANDARD (orientacyjnie)
- [x] Test głośnego czytania — zdania brzmią naturalnie po polsku
- [x] Język dla uczennicy 14–18 lat, bez infantylizacji i bez akademizmu

---

*Dokument przygotowany do implementacji JSON. Nie wdraża modułu w aplikacji.*
