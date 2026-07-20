# Audyt redakcyjny i techniczny — scenariusze N11–N20

Źródło audytu: `docs/NUMERACJA_DIAGNOZA_N11-N20_SCENARIOS.md`  
Silnik: `js/app.js` + wzorce w `lessons/*.json`  
Data: lipiec 2026  
Zakres: **tylko raport** — bez korekt scenariuszy, bez JSON, bez zmian kodu, bez commita/pusha.

---

## 1. Ocena ogólna

Scenariusze N11–N20 są **merytorycznie spójne ze źródłami E3 / SOK24–25**, dobrze rozdzielają zakres lekcji i świadomie omijają recepturę, oksydant oraz neutralizację. Korekty o siwiźnie w odroście, kompletności w N14 i wąskim zakresie N18 są w większości dobrze wdrożone.

**Nie rekomenduję zatwierdzenia bez korekty redakcyjnej.** Główne blokery:

1. Część guide’ów **wypowiada gotową odpowiedź** na kolejne zadanie (szczególnie N13–N16, N18).
2. **N18 Z5** powtarza treść pytania w opcji poprawnej — to klasyczne „sprawdzanie tego samego zdania”.
3. Preferowany **feedback per opcja nie istnieje w silniku**; decyzja właścicielki wymaga albo skrócenia do jednego `explanation`, albo późniejszej zmiany silnika.
4. Zaplanowane **karty wzornika (swipe)** nie mają komponentu w obecnym silniku; `scaleGuide` jest na sztywno widgetem skali pH.

Po drobnej/średniej korekcie treści + mapowaniu pól na kontrakt silnika (`rows` / `steps` itd.) scenariusze będą gotowe do zatwierdzenia **po** zatwierdzeniu N1–N10 (zgodnie z kolejnością pracy).

### Przyjęte decyzje właścicielki (do uwzględnienia przy korekcie scenariuszy)

| Decyzja | Status względem obecnych scenariuszy |
|---------|--------------------------------------|
| Mapa nazw PL 1–10 (jak w decyzji) | Zgodna; **brak** zastrzeżenia o różnicach między producentami |
| Wzorniki jako karty + HTML | Opisane częściowo; **brak** realnego wsparcia w silniku |
| Feedback per błędna opcja preferowany | W scenariuszach częściowo; **silnik nie obsługuje** |
| Teaser po N20 (tekst właścicielki) | **Inny** teaser w scenariuszach — wymaga podmiany |
| Kolejność: N1–N10 → N11–N20 → JSON | Potwierdzona; N1–N10 nadal tylko plan, nie pełne scenariusze |

---

## 2. Stan silnika — feedback i typy zadań

### Feedback: stan faktyczny (`js/app.js` → `openFeedback`)

| Element | Obsługa dziś |
|---------|----------------|
| `feedback.correctTitle` | tak |
| `feedback.incorrectTitle` | tak (z fallbackiem UI) |
| `feedback.explanation` | **jeden wspólny** tekst po każdej odpowiedzi (OK i błąd) |
| `feedback.funFact` | tak, tylko po poprawnej z pierwszej próby |
| `feedback.clientQuote` | tak, tylko po poprawnej |
| Osobny tekst per `optionId` / per błędny wiersz | **nie** — brak odczytu takich pól |

**Wniosek:** preferowany feedback per błędna odpowiedź **wymaga zmiany silnika**. Bez zmiany silnika scenariusze da się wdrożyć, łącząc per-opcja w jedno `explanation` (albo używając `funFact` tylko jako dodatku po sukcesie — nie zastępuje to per-błąd).

### Typy ćwiczeń użyte w N11–N20

| Typ | Przykład lekcji | Tekst | Grafiki w zadaniu | Feedback per opcja | Wygoda ~360 px | Czy scenariusz wymaga zmiany silnika? |
|-----|-----------------|-------|-------------------|--------------------|----------------|----------------------------------------|
| `singleChoice` | `ph-jak-wplywa-na-wlos.json` Z2 | tak (`options[].text`, także rich/bold) | nie w opcjach | nie — jeden `explanation` | dobra (3 opcje) | **Nie** (treść); per-opcja = tak, jeśli wymuszać |
| `trueFalse` | `wlos-z-czego-sklada-sie.json` Z1 | tak (etykiety + zdanie w `question`) | nie | nie | bardzo dobra | **Nie** |
| `matching` | `wlos-oslonka-kora-rdzen.json` Z3 | tak | nie | nie | OK przy 2–3 parach; 4 pary ciasne | **Nie** (przy ≤3 parach lepiej) |
| `ordering` | `ph-podsumowanie-modulu.json` Z3 | tak (`steps[].text`) | nie | nie | OK przy 3–4 krokach | **Nie** (mapowanie pól: `steps` + `correctOrder` jako id[]) |
| `findError` | `wlos-oslonka-kora-rdzen.json` Z5 | tak (`rows[].text`) | nie | nie | dobra | **Nie** (mapowanie: `rows`, `correctOptionIds`, `cardTitle` — nie `statements`/`isError`) |

### Edukacja i grafiki w intro

| Blok | Co robi dziś | Skutek dla N11–N20 |
|------|--------------|---------------------|
| `intro.hairGuide` | jedna ilustracja + podpis (`imageSrc`) | Można pokazać **jeden** referencyjny kadr / schemat; nie ma karuzeli kart |
| `intro.scaleGuide` | **na sztywno skala pH 0–14** (slider) | **Nie nadaje się** do wzornika poziomów/siwizny bez przebudowy silnika |
| Karty swipe (poziom / %) | brak komponentu | Decyzja właścicielki o kartach = **nowa funkcja UI** albo obejście poza silnikiem lekcji |

`renderRich` obsługuje string lub segmenty `{text, bold}` — **bez obrazków w treści opcji**.

---

## 3. Tabela audytu lekcji N11–N20

### N11 — Rozpoznawanie poziomów 1–10

| | |
|--|--|
| **Mocne strony** | Wyraźnie praktyczna (nie wykład skali); dobre typy: matching → porównanie → nazwa→numer → ordering → findError; brak pomiaru z monitora; cele odróżnione od N12+. |
| **Problemy** | Z2 i Z3 to dwa `singleChoice` z rzędu (słabszy interleaving). Brak zastrzeżenia o różnicach nazw u producentów. Guide proponuje `scaleGuide`, który w silniku = pH. Karty swipe nieobsługiwane. Feedback per błąd w Z2 — poza silnikiem. |
| **Wymagane poprawki** | Dodać disclaimer nazw. Zmienić typ jednego z Z2/Z3 (np. Z3 → `trueFalse` lub `findError`). Guide: `hairGuide` / tekst, nie `scaleGuide`. Scalić per-opcja do jednego `explanation` albo oznaczyć jako „po zmianie silnika”. |
| **Status** | **wymaga drobnej korekty** |

### N12 — Poziom to nie refleks

| | |
|--|--|
| **Mocne strony** | Cel ostry; dobra pułapka uniwersalnego `.1`; `5.43` bez interpretacji cyfr; Z5 salonowy bez receptury. |
| **Problemy** | Guide mówi wprost: „Liczba przed separatorem to poziom”, a Z1 pyta dokładnie o to w `7.13` — zbyt dosłowne powtórzenie. Punkt wyjścia „poziom 7 — popielaty” mocno naprowadza na Z2. Dominacja przykładów z „7” (świadoma, ale N19/N20 mają to równoważyć). |
| **Wymagane poprawki** | Skrócić guide do obserwacji zapisów `7` / `7.1` / `7.13` **bez** definicji „przed separatorem = poziom”; definicję przenieść do feedbacku Z1. Złagodzić naprowadzanie w punkcie wyjścia. |
| **Status** | **wymaga drobnej korekty** |

### N13 — Co właściwie oceniamy…

| | |
|--|--|
| **Mocne strony** | Cztery sytuacje ze SOK; dobre przejście do osobnych partii; Z5 diagnostyczny. |
| **Problemy** | Guide **wymienia wszystkie cztery sytuacje i zasadę osobnego opisu** przed matchingiem/Z3/Z4 — silne zdradzenie. Z1 ma tylko 3 z 4 sytuacji (OK dydaktycznie, ale guide i tak spoileruje czwartą). |
| **Wymagane poprawki** | Guide: pokazać problem („nie zawsze jeden poziom”) + zapowiedź, że są różne starty — **bez listy nazw sytuacji**. Listę odkrywać w zadaniach. |
| **Status** | **wymaga drobnej korekty** |

### N14 — Naturalny odrost

| | |
|--|--|
| **Mocne strony** | Kompletność zamiast sztywnej kolejności (Z4); poprawny przykład ze skroniami; odrzucenie „Klientka ma odrost”. |
| **Problemy** | Guide listuje cztery elementy, a Z1 każe je dopasować — powtórzenie listy. Z3 uzasadnia „siwy włos wyrasta od skóry” — **brak dosłownego potwierdzenia w SOK** (decyzja właścicielki — OK, ale oznaczyć). Matching 4 pary na 360 px będzie ciasny. |
| **Wymagane poprawki** | Guide: sytuacja „sam fakt odrostu nie wystarczy” bez checklisty; checklistę zostawić na Z1/feedback. Rozważyć 3 pary w Z1 albo skrócić teksty. |
| **Status** | **wymaga drobnej korekty** |

### N15 — Kolor kosmetyczny a stan faktyczny

| | |
|--|--|
| **Mocne strony** | Cel zgodny z SOK24; dobre rozróżnienie diagnoza/historia; pułapka „jak ostatnio”. |
| **Problemy** | Literówka w celu: **„Diagsnozujesz”**. Guide prawie cytuje poprawną odpowiedź Z1 i Z5. Z3 matching ma bardzo długie lewe teksty (mobile). |
| **Wymagane poprawki** | Poprawka ortografii. Skrócić guide (obserwacja karty vs włosy). Skrócić lewe etykiety w Z3. |
| **Status** | **wymaga drobnej korekty** |

### N16 — Rozjaśnienia i różne poziomy…

| | |
|--|--|
| **Mocne strony** | Wyraźny zakaz receptury; Z5 z oksydantem jako pułapką; elementy ze SOK25. |
| **Problemy** | Guide = gotowa ściąga do Z2 (odrost vs rozjaśnienia). Lekkie pokrycie z N13 Z4 (osobne partie) — akceptowalne w spirali, ale Z1 jest bliskim powtórzeniem. |
| **Wymagane poprawki** | Guide: tylko „strefy mogą się różnić — opiszesz je osobno”; szczegóły pól w feedbacku Z2. Zróżnicować Z1 względem N13 (np. case z danymi liczbowymi). |
| **Status** | **wymaga drobnej korekty** |

### N17 — Ocena procentu siwizny

| | |
|--|--|
| **Mocne strony** | Orientacyjność wzornika; poprawny zapis ze skroniami; odrzucenie matematycznego liczenia; dobra różnorodność typów. |
| **Problemy** | Guide mówi „na skroniach często bywa go więcej” przed Z3 — naprowadza. Karty swipe / `siwizna-wzornik-hires` jako pełny strip w `hairGuide` kolidują z decyzją UI (mikroskopijne %). „Często na skroniach” nie jest twardym cytatem SOK. |
| **Wymagane poprawki** | Usunąć ze guide szczegół o skroniach (zostawić w Z3/feedback). Oznaczyć grafikę jako referencję do **późniejszych kart** (nie jedna bitmapa z podpisami). |
| **Status** | **wymaga drobnej korekty** |

### N18 — Pełna diagnoza koloru

| | |
|--|--|
| **Mocne strony** | Zakres ograniczony do koloru; Z2 świadomie wyłącza 4 pory roku; pułapka receptury w Z5c. |
| **Problemy** | **Krytyczne:** treść pytania Z5 zawiera niemal cały poprawny opis, a opcja b go powtarza. Guide pokazuje przykład niemal identyczny z Z5b. Z4 `ordering` sugeruje „jedyną” kolejność uzupełniania — napięcie z N14. Matching Z1 4 pary + spoiler z guide. |
| **Wymagane poprawki** | Usunąć pełny opis z `question` Z5 (zostawić skrót case / bullet). Zmienić guide: struktura punktów bez gotowego akapitu identycznego z Z5. Z4 zamienić na `findError` / `matching` kompletności **bez** obowiązkowej kolejności. |
| **Status** | **wymaga przebudowy** (Z4–Z5 + guide) |

### N19 — Powtórka mieszana

| | |
|--|--|
| **Mocne strony** | Różne poziomy (3,4,6,8,9); struktura numeru bez uniwersalnej legendy; siwizna poprawnie; synteza tematów. |
| **Problemy** | Z5 ordering znów narzuca kolejność pracy z dokumentacją (konflikt z N14). Guide jest ściągą do Z3. Brak `trueFalse` — OK, ale Z1+Z4 to dwa singleChoice niekolejne. |
| **Wymagane poprawki** | Z5 → `findError` lub `singleChoice` „który zestaw informacji jest kompletny” zamiast kolejności. Skrócić guide do 1–2 zdań motywacyjnych. |
| **Status** | **wymaga drobnej korekty** |

### N20 — Sprawdzian modułu

| | |
|--|--|
| **Mocne strony** | Dobry przekrój N1–N19; pułapki oksydantu i diagnozy niekolorystycznej; siwizna „na długości” jako błąd; poziomy zróżnicowane w case Z5. |
| **Problemy** | Teaser nie jest tekstem zatwierdzonym przez właścicielkę. Z5: długie pytanie + długa opcja b (mobile + częściowe echo case). Guide checklistowy lekko naprowadza. Opcja Z1c „oksydant” OK jako pułapka. |
| **Wymagane poprawki** | Podmienić teaser na zatwierdzony. Skrócić case Z5 (dane w 3–4 liniach / bulletach, opcja b bez kopiowania 1:1 całego stemu albo stem krótszy). |
| **Status** | **wymaga drobnej korekty** |

### Podsumowanie statusów

| Status | Lekcje | Liczba |
|--------|--------|--------|
| Gotowa | — | **0** |
| Wymaga drobnej korekty | N11, N12, N13, N14, N15, N16, N17, N19, N20 | **9** |
| Wymaga przebudowy | N18 | **1** |

---

## 4. Fragmenty zdradzające odpowiedź przed ćwiczeniem

| Lekcja | Fragment | Co zdradza |
|--------|----------|------------|
| **N12** guide | „Liczba przed separatorem to poziom…” | Z1 (`7.13` → która część = poziom) |
| **N12** punkt wyjścia | „poziom 7 — popielaty… coś tu się miesza” | Z2 (mit o poziomie 7 = popiel) |
| **N13** guide | pełna lista 4 sytuacji + „partie opisujesz osobno” | Z1, Z3, Z4 |
| **N14** guide | lista: poziom, długość, % , rozmieszczenie | Z1 matching |
| **N15** guide | „aktualny poziom i refleks… jednolity… historia osobno” | Z1, Z5 |
| **N16** guide | pełny podział pól odrost / rozjaśnienia | Z2 matching |
| **N17** guide | „na skroniach często bywa go więcej” | Z3 (zapis ze skroniami) |
| **N18** guide | przykładowy akapit diagnozy | Z5b (prawie ten sam tekst) |
| **N18** Z5 `question` | pełny opis case’u = treść poprawnej opcji | opcja b |
| **N19** guide | checklista zasad | Z3 findError |
| **N20** guide | checklista przed sprawdzianem | ogólne naprowadzenie (słabsze) |

*Uwaga:* samo przypomnienie zasady w guide, a potem zastosowanie na nowych liczbach (np. N11: „wyższy = jaśniejszy”, potem 3 vs 6) jest zgodne z LESSON_STANDARD („najpierw uczymy”). Problemem jest **dosłowne** podanie klucza do tego samego zadania.

---

## 5. Informacje bez jednoznacznego potwierdzenia w źródłach

| Informacja | Gdzie w scenariuszach | Status |
|------------|----------------------|--------|
| Pełne nazwy PL poziomów 1–10 (mapa edukacyjna) | N11+ | **Decyzja właścicielki** — OK po dodaniu disclaimeru o różnicach marek; SOK25 ma EN, E3 ma częściowy wykaz PL |
| „Siwy włos wyrasta od skóry” / zakaz „% na długości” | N14 Z3, N17, N19, N20 | Korekta właścicielki — **nie cytat SOK**; przyjąć jako regułę salonu projektu |
| „Lokalnie ok. 40% na skroniach” | N14, N17, N18, N19, N20 | SOK: siwizna może być różna w miejscach; **„skronie”** jako stały przykład — decyzja właścicielki / orientacja, nie twardy cytat OCR |
| „Często na skroniach bywa jej więcej” | N17 guide | Uogólnienie — **osłabić** do „może być różny w miejscach” |
| „Cieplejszy / chłodniejszy refleks” | N18 przykłady | SOK podaje poziom+refleks (np. 5.43), **bez** języka temperatury — dopuszczalne jako opis wizualny, oznaczyć jako uproszczenie |
| Orientacyjność wzornika / zakaz matematycznego liczenia włosów | N17 | Wynika z charakteru wzornika + decyzji dydaktycznej; SOK nie mówi „nie licz matematycznie” wprost |
| Kolejność kroków dokumentacji (N18 Z4, N19 Z5) | ordering | **Brak w SOK** — konflikt z własną korektą N14 |
| Teaser o wzmacnianiu / wzajemnej neutralizacji kolorów | (docelowy po N20) | **Nie uczy** koła barw — OK jako teaser; nie ma jeszcze lekcji źródłowych |

---

## 6. Ćwiczenia / elementy UI bez wsparcia silnika (bez modyfikacji)

| Element scenariusza | Problem | Czy da się obejść bez zmiany silnika? |
|---------------------|---------|----------------------------------------|
| Feedback per błędna opcja (N11 Z2, N17 Z3, N18 Z5, N20 Z5…) | Silnik czyta tylko `feedback.explanation` | **Tak:** jedno wspólne wyjaśnienie obejmujące typowe błędy |
| Karuzela kart wzornika (poziomy / siwizna) | Brak komponentu; `scaleGuide` = pH | **Częściowo:** `hairGuide` z 1 obrazem referencyjnym + tekst HTML w `text`/`helperText`; prawdziwe karty swipe = **zmiana silnika** |
| `scaleGuide` dla poziomów 1–10 | Widget pH 0–14 | **Nie używać** `scaleGuide` w N11/N17 |
| Pola `statements` / `isError` w findError | Silnik: `rows` + `correctOptionIds` + `cardTitle` | **Tak:** mapowanie przy JSON (nie zmiana silnika) |
| Ordering: `items` + numery kolejności | Silnik: `steps` + `correctOrder: [id…]` | **Tak:** mapowanie przy JSON |
| Grafiki wewnątrz opcji / matching | Tylko tekst (+ bold) | **Tak:** etykiety HTML/tekst; próbki tylko w intro |
| Osobny ekran „4 karty sytuacji” (N13) | Brak | **Tak:** tekst / matching bez ikon |

**Żadne z 5 typów zadań merytorycznych nie wymaga nowej mechaniki odpowiedzi** — wymagają korekt treści i poprawnego mapowania JSON. **Nowe UI kart wzornika** oraz **feedback per opcja** to jedyne elementy, które przy pełnej realizacji decyzji właścicielki wymagają rozwoju silnika.

---

## 7. Propozycje poprawek — gotowe brzmienia

### 7.1. Disclaimer nazw poziomów (wspólny, np. N3/N11 guide)

> W tym module obowiązuje skala edukacyjna: 1 czarny, 2 najciemniejszy brąz, 3 ciemny brąz, 4 średni brąz, 5 jasny brąz, 6 ciemny blond, 7 średni blond, 8 jasny blond, 9 bardzo jasny blond, 10 najjaśniejszy blond. Nazewnictwo u producentów może nieznacznie się różnić — przed pracą z marką sprawdzasz jej system.

### 7.2. N12 — guide bez spoilera Z1

**Było (skrót):** „Liczba przed separatorem to poziom…”  

**Proponowane:**  
> Spójrz na trzy zapisy obok siebie: `7`, `7.1`, `7.13`. Różnią się tym, ile informacji stoi po separatorze. Za chwilę wskażesz, która część mówi o jasności, a która o kierunku w systemie producenta.

### 7.3. N13 — guide bez listy sytuacji

**Proponowane:**  
> Na jednej głowie odrost i długości nie zawsze mówią to samo. Zanim wpiszesz „poziom”, rozpoznaj, z jaką sytuacją kolorystyczną masz do czynienia — i które partie trzeba opisać osobno.

### 7.4. N14 — guide bez checklisty

**Proponowane:**  
> W karcie bywa wpis: „Klientka ma odrost.” Do pracy to za mało. Za chwilę złożysz opis, który da się realnie wykorzystać przy diagnozie koloru.

### 7.5. N15 — cel (ortografia)

**Było:** „Diagsnozujesz…”  
**Ma być:** „Diagnozujesz aktualny wygląd koloru kosmetycznego, a nie tylko numer farby z poprzedniej wizyty.”

### 7.6. N17 — guide bez spoilera skroni

**Proponowane:**  
> Wzornik pokazuje przykłady od ok. 10% do 90%. Pomaga ocenić rząd wielkości — nie służy do liczenia każdego włosa. Procent siwizny w odroście może być różny w różnych miejscach głowy.

### 7.7. N18 — Z4 zamiast ordering (kompletność, nie kolejność)

**Typ:** `findError`  
**Pytanie:** Który zestaw informacji o kolorze jest niekompletny?  
**Wiersze:**  
- a) Odrost: poziom i długość; siwizna: % i rozmieszczenie w odroście; długości kosmetyczne: poziom i refleks; końce: poziom rozjaśnienia, równość, uwrażliwienie. *(OK)*  
- b) „Odrost jest. Końce jaśniejsze.” *(BŁĄD)*  
- c) 100% naturalne: poziom naturalny; siwizna w odroście opisana albo „bez siwizny”. *(OK)*  
**Explanation:** Sam fakt odrostu i jaśniejszych końców nie zastępuje poziomów, siwizny ani opisu rozjaśnień.

### 7.8. N18 — Z5 bez echa pełnego opisu

**Pytanie (propozycja):**  
> Case: odrost ok. 2 cm, poziom 7; siwizna ok. 10%, więcej na skroniach; długości kosmetyczne ok. poziomu 6, cieplejszy refleks; końce rozjaśniane nierównomiernie i uwrażliwione. Który wpis najlepiej oddaje diagnozę koloru?

**Opcje:**  
- a) „Jak zawsze — odrost i rozjaśnienia.”  
- b) Wpis zawierający odrost (długość + poziom), siwiznę z rozmieszczeniem, poziom i refleks długości oraz nierówne, uwrażliwione końce.  
- c) „Użyć 7.1 na odrost i rozjaśnić końce oksydantem 9%.”  

*(Przy JSON opcja b może mieć pełne zdanie — ale wtedy stem nie może powtarzać tego samego akapitu.)*

**Guide N18:** zamiast gotowego akapitu — lista pól w 4 krótkich bulletach + zdanie: „Piszesz własnymi słowami; nie uczysz się jednego wzorca na pamięć.”

### 7.9. N19 — Z5 bez obowiązkowej kolejności

**Typ:** `singleChoice`  
**Pytanie:** Który zestaw kroków obejmuje kompletną pracę z dokumentacją koloru (bez narzucania jedynej kolejności minutowej)?  
**Opcje:**  
- a) Tylko wpisać numer farby z poprzedniej wizyty.  
- b) Rozpoznać sytuację; opisać odrost i — jeśli trzeba — długości/rozjaśnienia; oddzielić historię receptury od wyglądu „na dziś”.  
- c) Od razu dobrać oksydant i technikę.  
**Poprawna:** b

### 7.10. N20 — teaser (zatwierdzony)

> Skoro potrafisz już opisać to, co widzisz na włosach, czas sprawdzić, dlaczego niektóre kolory się wzmacniają, a inne wzajemnie neutralizują.

### 7.11. Feedback per opcja — obejście bez zmiany silnika (wzór)

Dla N11 Z2 zamiast osobnych tekstów a/c:

**Jedno `explanation`:**  
> Wyższy numer oznacza jaśniejszy poziom, więc 6 jest jaśniejszy od 3. Niższy numer to ciemniejszy poziom — poziomy 3 i 6 nie mają tej samej jasności.

Analogicznie scalać pozostałe „Feedback per błąd” do czasu ewentualnej rozbudowy silnika.

---

## 8. Spójność z N1–N10

| Aspekt | Ocena |
|--------|--------|
| Podział zakresu (numer → poziom praktycznie → diagnoza) | Dobry |
| Mechaniki / 5 zadań / 75 Kosmyków | Zgodne ze standardem i planem N1–N10 |
| Zakaz uniwersalnej legendy refleksów | Spójny z N10 |
| Pełne scenariusze N1–N10 | **Brak pliku** — tylko plan w rozmowie; nie da się zrobić pełnego audytu redakcyjnego „akapit do akapitu” względem N1–N10 |
| Ryzyko | Przy JSON N11+ przed dopięciem scenariuszy N1–N10 mogą powstać niespójności nazewnictwa i poziomu wprowadzenia skali (N3 vs N11) |

**Rekomendacja kolejności (zgodna z decyzją właścicielki):** najpierw ostateczne scenariusze N1–N10 → korekta i zatwierdzenie N11–N20 → dopiero JSON całego modułu.

---

## 9. Rekomendacja końcowa

| Pytanie | Odpowiedź |
|---------|-----------|
| Czy można już zatwierdzić N11–N20? | **Nie** — najpierw korekta (zwłaszcza N18) + drobne poprawki w N11–N17, N19–N20 |
| Czy najpierw wymagają korekty? | **Tak** |
| Czy można potem przejść do JSON? | **Tak, ale dopiero po:** (1) zatwierdzeniu scenariuszy N1–N10, (2) wprowadzeniu poprawek z tego audytu do pliku scenariuszy N11–N20, (3) decyzji: feedback per opcja = obejście jednym `explanation` **albo** osobny ticket na silnik; karty wzornika = ticket UI **albo** tymczasowy `hairGuide` |
| Czy zmieniać silnik teraz? | **Nie** (zgodnie z briefem). Opisać ograniczenia i iść dalej treścią. |

### Trzy najważniejsze problemy

1. **Spoilery w guide / N18 Z5** — treść uczy odpowiedzi przed ćwiczeniem lub powtarza stem w opcji.  
2. **N18 Z4 i N19 Z5 jako ordering** — sprzeczność z zasadą kompletności bez sztywnej kolejności (N14).  
3. **Luka silnika vs decyzje produktowe** — brak feedbacku per opcja oraz brak karuzeli kart wzornika (`scaleGuide` = pH).

---

*Raport audytowy. Plik scenariuszy `NUMERACJA_DIAGNOZA_N11-N20_SCENARIOS.md` nie był modyfikowany. Kod i JSON bez zmian. Bez commita i pusha.*
