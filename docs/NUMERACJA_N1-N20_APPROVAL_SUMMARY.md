# Skrót do akceptacji — moduł N1–N20  
## Numeracja farb i diagnoza koloru

**Ten dokument jest skrótem scenariuszy do akceptacji. Nie zastępuje pełnych plików lekcji, ale pokazuje cele, przykładowe pytania, feedback i progresję modułu.**

Pełne scenariusze:  
- `docs/NUMERACJA_N1-N10_SCENARIOS.md`  
- `docs/NUMERACJA_DIAGNOZA_N11-N20_SCENARIOS.md`  

Ponowny audyt po korektach: `docs/NUMERACJA_N1-N20_FINAL_REVIEW_AFTER_FIX.md`  
Data: lipiec 2026  

**Ten dokument nie oznacza akceptacji.** Decyzję podejmujesz Ty — checklista na końcu jest pusta.

---

## Mapa całego modułu

| Blok | Lekcje | Czego uczy |
|------|--------|------------|
| Odczyt numeru | N1–N10 | Części zapisu, poziom, skala, refleksy, kolejność, separatory, legenda marki |
| Most | N11–N12 | Praktyka poziomów; poziom ≠ refleks |
| Diagnoza koloru | N13–N18 | Sytuacje, odrost, kosmetyczny, strefy, siwizna, pełny wpis |
| Domknięcie | N19–N20 | Powtórka i sprawdzian |

```text
Tubka / numer  →  skala  →  refleksy  →  legenda
        ↓
   rozpoznawanie poziomów (bez ponownego wykładu)
        ↓
   co widać na włosach klientki  →  wpis w karcie
```

---

## N3 kontra N11

| N3 — Skala poziomów | N11 — Rozpoznawanie poziomów |
|---------------------|------------------------------|
| Pierwsze **poznanie** skali 1–10 | **Ćwiczenia**: porównania, nazwy (max 3 pary), zastosowanie |
| Kierunek: wyższy numer = jaśniejszy | Reguła wraca w feedbacku po pierwszym zadaniu |
| Pełna lista nazw (ekrany 1–5 i 6–10) | **Bez** pełnej listy w guide |
| Sytuacja: wzornik i mapa | Sytuacja: poziomy 4, 6, 9 na karcie — bez rozpiski |

---

## Zakres wyłączony z tego modułu

Moduł **nie uczy** (celowo):

- doboru farby i receptury,
- wyboru oksydantu,
- neutralizacji / koła barw (tylko teaser po N20),
- techniki nakładania koloru,
- pełnej karty klientki: skóra głowy, grubość, gęstość, typ 4 pór roku, struktura włosa.

Teaser po N20 (zapowiedź kolejnego tematu, bez nauki):  
*„Skoro potrafisz już opisać to, co widzisz na włosach, czas sprawdzić, dlaczego niektóre kolory się wzmacniają, a inne wzajemnie neutralizują.”*

---

## Przykłady siwizny (zróżnicowane)

| Lekcja | Wariant |
|--------|---------|
| N14 | Około 10% siwizny, wyraźniej widocznej przy skroniach (odrost ok. 1,5 cm / poziom 6) |
| N15 | Siwizna nie jest głównym motywem — fokus na kolor dziś vs historia receptury |
| N16 | Case bez nacisku na siwiznę (różne poziomy / rozjaśnienia) |
| N17 | Główny pełny przykład: ok. 10% w większości odrostu, lokalnie ok. 40% na skroniach |
| N18 | Ok. 10% siwizny, więcej w okolicy skroni |
| N19 | Ok. 30% siwizny w odroście, rozmieszczonej nierównomiernie |
| N20 | Ok. 20% siwizny, większe skupisko z przodu |

Zasada wspólna: % orientacyjny; ocena w naturalnym odroście; rozmieszczenie może być nierównomierne. **Nie** ma reguły „zawsze więcej na skroniach”.

---

## Lekcje N1–N20 — karty do szybkiego przeglądu

### N1 — Co widać w numerze farby
- **Cel:** Rozłożyć numer na części: przed separatorem, separator, cyfry po nim.  
- **Sytuacja:** Tubka i karta z zapisami `7.13`, `7/1`, `7-1`.  
- **Uczy:** Konstrukcji zapisu — bez znaczeń refleksów.  
- **Typy:** singleChoice · singleChoice · matching · trueFalse · findError  
- **Przykład pytania:** W `7.13` który znak oddziela pierwszą cyfrę od kolejnych?  
- **Przykład wyjaśnienia:** Separatorem jest kropka; cyfry po niej to osobna część.  
- **Zapamiętaj:** Numer rozkładasz na części: przed separatorem, separator i cyfry po nim.  
- **Grafika:** nie  
- **Status audytu:** gotowa do akceptacji  

### N2 — Liczba przed separatorem
- **Cel:** Wiedzieć, że liczba przed separatorem mówi o jasności/ciemności (poziom).  
- **Sytuacja:** Trzy tubki `5.1`, `7.1`, `9.1`.  
- **Uczy:** Funkcji liczby przed separatorem — bez pełnej skali nazw.  
- **Typy:** singleChoice · trueFalse · matching · singleChoice · findError  
- **Przykład pytania:** W `5.1`, `7.1`, `9.1` która część się zmienia?  
- **Przykład wyjaśnienia:** Zmienia się liczba przed separatorem — to poziom.  
- **Zapamiętaj:** Liczba przed separatorem to poziom — jasność lub ciemność.  
- **Grafika:** nie  
- **Status:** gotowa  

### N3 — Skala poziomów 1–10
- **Cel:** Znać kierunek skali i podstawowe nazwy 1–10 (w tym poziom 2).  
- **Sytuacja:** Wzornik przy konsultacji — najpierw kierunek, potem pełna mapa.  
- **Uczy:** Im wyższy numer, tym jaśniej; nazwy edukacyjne modułu.  
- **Typy:** singleChoice · matching · (+ bloki 1–5 / 6–10) · singleChoice · trueFalse · singleChoice  
- **Przykład pytania:** Który poziom jaśniejszy: 4 czy 8?  
- **Przykład wyjaśnienia:** Wyższy numer = jaśniejszy, więc 8.  
- **Zapamiętaj:** Im wyższy numer poziomu, tym jaśniejszy kolor na skali 1–10.  
- **Grafika:** opcjonalnie wzornik poziomów (pomoc; nazwy w tekście)  
- **Uwaga do JSON:** bloki 1–5 i 6–10 jako osobne ekrany tekstowe przed Z3 — bez nowego komponentu silnika.  
- **Status:** gotowa  

### N4 — Pierwsza cyfra po separatorze
- **Cel:** Rozpoznać refleks główny.  
- **Sytuacja:** Porównanie `7` i `7.1`.  
- **Uczy:** Pierwsza cyfra po separatorze = główny kierunek; legenda marki osobno.  
- **Typy:** singleChoice · trueFalse · matching · singleChoice · findError  
- **Przykład pytania:** Co różni `7.1` od samego `7`?  
- **Przykład wyjaśnienia:** Po separatorze pojawia się cyfra refleksu głównego; poziom nadal z `7`.  
- **Zapamiętaj:** Pierwsza cyfra po separatorze to refleks główny w systemie producenta.  
- **Grafika:** nie  
- **Status:** gotowa  

### N5 — Druga cyfra po separatorze
- **Cel:** Rozpoznać refleks dodatkowy (uzupełnia główny).  
- **Sytuacja:** `7.1` obok `7.13`.  
- **Uczy:** Druga cyfra uzupełnia refleks główny; miejsce cyfry ma znaczenie.  
- **Typy:** singleChoice · trueFalse · matching · singleChoice · findError  
- **Przykład pytania:** Czego nie ma w `7.1`, a jest w `7.13`?  
- **Przykład wyjaśnienia:** Druga cyfra po separatorze oznacza refleks dodatkowy, który uzupełnia refleks główny.  
- **Zapamiętaj:** Druga cyfra po separatorze oznacza refleks dodatkowy — uzupełnia refleks główny.  
- **Grafika:** nie  
- **Status:** gotowa  

### N6 — Dlaczego 7.13 i 7.31 to nie to samo
- **Cel:** Zrozumieć, że kolejność cyfr zmienia opis koloru.  
- **Sytuacja:** Dwa odcienie na półce: `7.13` i `7.31`.  
- **Uczy:** Ten sam poziom 7; w źródle inne dominujące kierunki; bez uniwersalnej legendy.  
- **Typy:** singleChoice · matching · trueFalse · singleChoice · findError  
- **Przykład pytania:** Co jest wspólne dla `7.13` i `7.31`?  
- **Przykład wyjaśnienia:** Wspólny poziom 7; kolejność zmienia główny i dodatkowy refleks.  
- **Przykład feedbacku (po korekcie):** W materiale kolejność cyfr zmienia rolę refleksów: w pierwszym dominuje popiel, w drugim złoto.  
- **Zapamiętaj:** Kolejność cyfr po separatorze ma znaczenie — 7.13 i 7.31 to nie to samo.  
- **Grafika:** nie  
- **Status:** gotowa  

### N7 — Co oznacza 7.11
- **Cel:** Rozpoznać przykład intensywnego/podwójnego refleksu ze źródła.  
- **Sytuacja:** `7.1` obok `7.11`.  
- **Uczy:** Opisu `7.11` z materiału — nie reguły wszystkich marek.  
- **Typy:** singleChoice · singleChoice · trueFalse · matching · findError  
- **Przykład pytania:** Jak materiał opisuje `7.11`?  
- **Przykład wyjaśnienia:** Poziom 7, intensywny lub podwójny refleks popielaty — w tym przykładzie.  
- **Zapamiętaj:** W przykładzie źródłowym 7.11 to intensywny lub podwójny refleks popielaty — legendę marki i tak sprawdzasz.  
- **Grafika:** nie  
- **Status:** gotowa  

### N8 — Czytanie całego numeru krok po kroku
- **Cel:** Odczytać poziom, refleks główny i dodatkowy.  
- **Sytuacja:** Numer `7.13` do rozłożenia przed sięgnięciem po tubkę.  
- **Uczy:** Kolejności analizy całego zapisu.  
- **Typy:** singleChoice · ordering · matching · singleChoice · findError  
- **Przykład pytania:** Od której części zacząć, gdy pytasz o jasność w `7.13`?  
- **Przykład wyjaśnienia:** Od liczby przed separatorem (poziom).  
- **Zapamiętaj:** Numer czytasz: poziom, potem refleks główny, potem dodatkowy — jeśli jest.  
- **Grafika:** nie  
- **Status:** gotowa  

### N9 — Separatory i nazwy stosowane przez marki
- **Cel:** Rozpoznać różne sposoby zapisu (`.`, `/`, `-`) i nazwy z materiału.  
- **Sytuacja:** Etykiety `7.1`, `7/1`, `7-1`.  
- **Uczy:** Separator nie zmienia faktu rozdzielenia poziomu i refleksu; Wella/Schwarzkopf tylko wg źródła.  
- **Typy:** matching · trueFalse · matching · singleChoice · findError  
- **Przykład pytania:** Co jest wspólne dla `7.1`, `7/1` i `7-1`?  
- **Przykład wyjaśnienia:** Ta sama konstrukcja: coś przed separatorem i coś po nim.  
- **Zapamiętaj:** Separator może wyglądać różnie — nie zmienia to rozdzielenia poziomu i refleksu.  
- **Grafika:** nie  
- **Status:** gotowa  

### N10 — Legenda producenta
- **Cel:** Wiedzieć, kiedy otworzyć legendę marki.  
- **Sytuacja:** Na palecie `.1` = popiel; przychodzi farba innego producenta.  
- **Uczy:** Nie przenosić oznaczeń automatycznie między markami.  
- **Typy:** trueFalse · singleChoice · findError · matching · singleChoice  
- **Przykład pytania:** Czy `.1` zawsze oznacza popiel u każdej marki?  
- **Przykład wyjaśnienia:** W materiale `.1` bywa popielem w przykładzie — w salonie sprawdzasz legendę producenta.  
- **Zapamiętaj:** Oznaczeń refleksów nie przenosisz automatycznie między markami.  
- **Grafika:** nie  
- **Status:** gotowa  
- **Most do N11:** utrwalanie skali i porównywanie jasności (bez diagnozy włosów).  

---

### N11 — Rozpoznawanie poziomów 1–10
- **Cel:** Szybko porównać jasność i połączyć numer z nazwą — bez ponownego wykładu skali.  
- **Sytuacja:** Na karcie poziomy 4, 6 i 9 — bez całej rozpiski pod ręką.  
- **Uczy:** Praktyki (porównania, 3 pary nazw, wykrycie błędu, zastosowanie do stref).  
- **Typy:** singleChoice · singleChoice · matching · trueFalse · singleChoice  
- **Przykład pytania:** Który poziom jest jaśniejszy: 4 czy 8?  
- **Przykład wyjaśnienia (po Z1):** W skali poziomów wyższy numer oznacza jaśniejszy poziom.  
- **Zapamiętaj:** Wyższy numer poziomu oznacza jaśniejszy poziom — także przy porównaniu dwóch stref.  
- **Grafika:** opcjonalna referencja wzornika — **bez** pełnej listy nazw w tekście lekcji  
- **Status:** gotowa  

### N12 — Poziom to nie refleks
- **Cel:** Oddzielić jasność od kierunku kolorystycznego.  
- **Sytuacja:** W karcie pomieszano jasność z kierunkiem.  
- **Uczy:** Poziom ≠ popiel/złoto; legenda marki dla cyfr refleksu.  
- **Typy:** singleChoice · trueFalse · matching · findError · singleChoice  
- **Przykład pytania:** „Poziom 7 oznacza kolor popielaty” — prawda czy mit?  
- **Przykład wyjaśnienia:** Siódemka to jasność; kierunek wynika z refleksu w systemie producenta.  
- **Zapamiętaj:** Poziom mówi o jasności; refleks — o kierunku w systemie producenta.  
- **Grafika:** nie  
- **Status:** gotowa  

### N13 — Co właściwie oceniamy na włosach klientki
- **Cel:** Rozpoznać cztery sytuacje kolorystyczne i kiedy opisać partie osobno.  
- **Sytuacja:** Klientka „na kolor”; odrost i długości mówią co innego.  
- **Uczy:** Startów: 100% kosmetyczny / + odrost / 100% naturalny / naturalny + rozjaśnienia.  
- **Typy:** matching · singleChoice · trueFalse · singleChoice · findError  
- **Przykład pytania:** Przy odroście i rozjaśnionych końcach które partie opisać osobno?  
- **Przykład wyjaśnienia:** Naturalny odrost oraz rozjaśnione partie.  
- **Zapamiętaj:** Najpierw rozpoznaj sytuację — potem zdecyduj, które partie opisać osobno.  
- **Grafika:** nie  
- **Mobile:** matching — 3 krótkie pary.  
- **Status:** gotowa  

### N14 — Naturalny odrost
- **Cel:** Kompletny opis odrostu (poziom, długość, % siwizny, rozmieszczenie).  
- **Sytuacja:** Wpis „Klientka ma odrost” — za mało.  
- **Uczy:** Kompletności, nie jednej sztywnej kolejności.  
- **Typy:** matching · findError · singleChoice · trueFalse · singleChoice  
- **Przykład pytania:** Gdzie oceniasz procent siwizny przy odroście?  
- **Przykład wyjaśnienia:** W strefie naturalnego odrostu — nie jako „siwiznę na długości”.  
- **Przykład wpisu:** Naturalny odrost około 1,5 cm na poziomie 6. Około 10% siwizny, wyraźniej widocznej przy skroniach.  
- **Zapamiętaj:** Odrost opisujesz kompletnie: poziom, długość, siwizna i jej rozmieszczenie.  
- **Grafika:** nie  
- **Status:** gotowa  

### N15 — Kolor kosmetyczny a stan faktyczny
- **Cel:** Opisać to, co widać dziś — nie tylko stary numer farby.  
- **Sytuacja:** W karcie stary numer; na włosach coś innego.  
- **Uczy:** Diagnoza vs historia receptury; jednolitość.  
- **Typy:** singleChoice · trueFalse · matching · findError · singleChoice  
- **Przykład pytania:** Co jest diagnozą koloru kosmetycznego „na dziś”?  
- **Przykład wyjaśnienia:** Aktualny poziom, refleks i jednolitość — nie sam numer z poprzedniej wizyty.  
- **Zapamiętaj:** Diagnoza mówi, co widać dziś — historia receptury stoi osobno.  
- **Grafika:** nie  
- **Status:** gotowa  

### N16 — Rozjaśnienia i różne poziomy na jednej głowie
- **Cel:** Osobno opisać odrost i rozjaśnione partie.  
- **Sytuacja:** Naturalny odrost i jaśniejsze końce po pasemkach (bez nacisku na siwiznę).  
- **Uczy:** Poziom rozjaśnienia, równość, uwrażliwienie — bez receptury.  
- **Typy:** singleChoice · matching · trueFalse · findError · singleChoice  
- **Przykład pytania:** Co jest poprawnym krokiem w diagnozie przy nierównych, przesuszonych końcach?  
- **Przykład wyjaśnienia:** Zanotować strefy, równość i uwrażliwienie — nie dobierać od razu oksydantu.  
- **Zapamiętaj:** Różne strefy opisujesz osobno — zwłaszcza odrost i rozjaśnienia.  
- **Grafika:** nie  
- **Status:** gotowa  

### N17 — Ocena procentu siwizny
- **Cel:** Orientacyjnie ocenić % i rozmieszczenie siwizny w odroście.  
- **Sytuacja:** Siwizna wygląda inaczej na różnych partiach odrostu.  
- **Uczy:** Wzornik 10–90% jako pomoc; nierównomierność; główny przykład zapisu ze skroniami.  
- **Typy:** ordering · trueFalse · singleChoice · matching · findError  
- **Przykład pytania:** Który zapis poprawnie opisuje nierównomierną siwiznę w odroście?  
- **Przykład wyjaśnienia:** % w większości odrostu + lokalnie więcej na skroniach — nie „na długości”.  
- **Zapamiętaj:** Siwiznę oceniasz orientacyjnie w odroście — z procentem i rozmieszczeniem.  
- **Grafika:** wzornik % siwizny (pomoc; % w tekście)  
- **Status:** gotowa  

### N18 — Pełna diagnoza koloru
- **Cel:** Złożyć jeden rzeczowy wpis kolorystyczny z elementów N13–N17.  
- **Sytuacja:** Jeden case etapami: odrost, siwizna, długości kosmetyczne, rozjaśnione końce.  
- **Uczy:** Kompletności wpisu — **bez jednego obowiązkowego brzmienia** i bez receptury.  
- **Typy:** singleChoice · singleChoice · matching · findError · singleChoice  
- **Matching:** 3 pary — poziom 6 + cieplejszy refleks → długości; nierównomierne rozjaśnienie → końce; siwizna → naturalny odrost.  
- **Przykład pytania:** Wybierz najlepszy wpis diagnozy koloru (opcje podobnej długości).  
- **Przykład wyjaśnienia:** Dobry wpis obejmuje strefy i obserwacje; nie musi mieć jednego obowiązkowego brzmienia; nie zawiera receptury.  
- **Zapamiętaj:** Poprawny wpis nie musi mieć jednego obowiązkowego brzmienia. Musi natomiast obejmować wszystkie istotne strefy i obserwacje.  
- **Grafika:** nie  
- **Status:** gotowa  

### N19 — Powtórka mieszana
- **Cel:** Połączyć numerację i diagnozę w zmiennych kontekstach.  
- **Sytuacja:** Krótka dyżurna powtórka przed sprawdzianem.  
- **Uczy:** Stosowania wcześniejszej wiedzy (bez nowych reguł).  
- **Typy:** singleChoice · matching · findError · singleChoice · singleChoice  
- **Przykład pytania (siwizna):** Który zapis jest poprawny?  
- **Przykład poprawnej opcji:** Około 30% siwizny w naturalnym odroście, rozmieszczonej nierównomiernie.  
- **Zapamiętaj:** Numer czytasz osobno — włosy opisujesz według stref.  
- **Grafika:** nie  
- **Status:** gotowa  

### N20 — Sprawdzian modułu
- **Cel:** Samodzielnie zastosować wiedzę z całego modułu.  
- **Sytuacja:** Sprawdzian zamykający — bez nowej teorii.  
- **Uczy / sprawdza:** Budowa numeru i separatory, skala i poziom vs refleks, główny/dodatkowy, kolejność `7.13`/`7.31`, przykład `7.11`, legenda producenta, sytuacja kolorystyczna, odrost, siwizna, strefy (w tym rozjaśnione końce), kompletny wpis.  
- **Typy:** findError · matching · singleChoice · findError · singleChoice  
- **Przykład case Z5:** odrost 2 cm poziom 4; ok. 20% siwizny, większe skupisko z przodu; długości ok. 5; końce lekko rozjaśnione, nierówno, uwrażliwione.  
- **Zapamiętaj:** Numer według budowy zapisu; włosy według tego, co widać dziś w każdej strefie.  
- **Grafika:** nie  
- **Status:** gotowa  

**Mapa pokrycia sprawdzianu**

| Zadanie | Sprawdzane kompetencje |
|---------|------------------------|
| Z1 | Budowa numeru + separator; separatory `.` `/` `-`; konieczność sprawdzenia legendy producenta |
| Z2 | Poziom + skala 1–10; poziom vs refleks; refleks główny + dodatkowy |
| Z3 | Znaczenie kolejności (`7.13` vs `7.31`); przykład `7.11` |
| Z4 | Rozpoznanie sytuacji kolorystycznej; opis naturalnego odrostu; % siwizny i rozmieszczenie |
| Z5 | Kolor kosmetyczny; różne strefy + rozjaśnione końce; kompletny wpis diagnozy koloru |

---

## Wynik ponownego audytu (skrót)

| Status | Liczba |
|--------|--------|
| Gotowa do akceptacji | **20** |
| Wymaga drobnej korekty | **0** |
| Wymaga przebudowy | **0** |

Po akceptacji właścicielki: **można przejść do JSON** (z notatką techniczną N3 — bez zmiany silnika).

---

## Checklista akceptacji właścicielki

Zaznacz po swojej ocenie. Pola są puste celowo.

- [ ] kolejność lekcji jest logiczna,
- [ ] treści odpowiadają realnej pracy w salonie,
- [ ] język jest odpowiedni dla uczennic,
- [ ] lekcje nie są zbyt szkolne,
- [ ] przykłady są wiarygodne,
- [ ] N20 właściwie sprawdza moduł,
- [ ] grafiki są odpowiednie,
- [ ] moduł może przejść do JSON.

**Decyzja właścicielki:**  

□ Akceptuję cały moduł  
□ Wymagam zmian — opis: _______________________________  

Podpis / data: _______________________________

---

*Skrót do decyzji. Pełne uzasadnienia: `NUMERACJA_N1-N20_FINAL_REVIEW_AFTER_FIX.md`.*
