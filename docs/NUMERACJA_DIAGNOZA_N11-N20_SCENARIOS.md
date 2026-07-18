# Scenariusze lekcji N11–N20 — rozpoznawanie poziomów i diagnoza koloru

Moduł roboczy: `numeracja-farb`  
Status: **scenariusze po końcowej korekcie FINAL_REVIEW** (bez JSON, bez zmian w kodzie)  
Data: lipiec 2026  
Ponowny audyt: `docs/NUMERACJA_N1-N20_FINAL_REVIEW_AFTER_FIX.md`

---

## Różnica między N3 a N11

| | **N3 — Skala poziomów** | **N11 — Rozpoznawanie poziomów 1–10** |
|---|-------------------------|--------------------------------------|
| Rola | Lekcja **wprowadzająca** skalę | Lekcja **praktyczna** utrwalająca |
| Co robi uczennica | Poznaje pełną skalę 1–10 i kierunek jasności | Ćwiczy porównania, nazwy (max 3 pary) i zastosowanie — bez listy 1–10 |
| Treść | Mapa skali + zasada kierunku | Krótkie decyzje — bez ponownego wykładu skali |

N11 **nie powtarza** N3 innymi słowami.

---

## Korekty zastosowane w tej wersji

1. Guide’y nie podają gotowej reguły potrzebnej do kolejnego zadania — reguła wraca w feedbacku.
2. Feedback: **jeden** tekst po OK i **jeden wspólny** po błędzie (zgodne z silnikiem). Notatki per opcja tylko jako „Notatka dla autora”.
3. Bez `scaleGuide`, bez karuzeli kart, bez multiSelect (silnik ich nie obsługuje dla tego zakresu).
4. `ordering` tylko przy obiektywnej skali jasności / %.
5. N18 przebudowane jako jeden case etapami; bez wzorca przed zadaniami.
6. Siwizna wyłącznie w naturalnym odroście (decyzja dydaktyczna projektu + SOK o możliwym nierównomiernym rozmieszczeniu). Główny pełny przykład 10%/40% skroni — w N17; w innych lekcjach warianty zapisu.
7. Teaser po N20 — tekst zatwierdzony przez właścicielkę.

---

## Tabela źródeł

| Kod | Źródło | Zakres |
|-----|--------|--------|
| **E3** | `source-materials/materiały do egzaminu fryzjerskiego.pdf`, s. 3 | Budowa numeru, przykłady refleksów, legenda producenta |
| **SOK24** | Standard Obsługi Klienta, s. 24 | Siwizna 10–90%; 100% kosmetyczny; stan faktyczny; jednolitość |
| **SOK25** | Standard Obsługi Klienta, s. 25 | Pozostałe sytuacje; odrost; rozjaśnienia; wzornik 1–10 EN |
| **WZN-P** | `_sok-pages/poziomy-1-10-wzornik-hires.png` | Referencja wizualna poziomów |
| **WZN-S** | `_sok-pages/siwizna-wzornik-hires.png` | Referencja wizualna % siwizny |
| **PL-MAP** | Decyzja właścicielki | Nazwy PL poziomów w module |

### Skala edukacyjna poziomów (PL)

1 czarny · 2 najciemniejszy brąz · 3 ciemny brąz · 4 średni brąz · 5 jasny brąz · 6 ciemny blond · 7 średni blond · 8 jasny blond · 9 bardzo jasny blond · 10 najjaśniejszy blond  

**Zastrzeżenie:** nazewnictwo poziomów może nieznacznie różnić się między producentami. W tym module obowiązuje powyższa skala edukacyjna.

### Typy zadań (tylko istniejące w silniku)

`singleChoice` · `trueFalse` · `matching` · `ordering` · `findError`  

Pola findError w JSON: `rows`, `correctOptionIds`, `cardTitle`.  
Pola ordering: `steps`, `correctOrder` (tablica id).

### Feedback (kontrakt silnika)

Każde zadanie ma:
- `correctTitle`
- `incorrectTitle`
- `explanation` — **ten sam** tekst po poprawnej i błędnej odpowiedzi (silnik nie rozróżnia per opcja)

### Grafiki pomocnicze

Max jedna ilustracja w intro (`hairGuide`). Etykiety numerów/% jako tekst scenariusza → HTML. Nie wymagać odczytu drobnych napisów z bitmapy. Nie opierać poprawnej odpowiedzi wyłącznie na kolorze monitora.

---

## Decyzje właścicielki projektu

1. Mapa nazw PL jak wyżej + zastrzeżenie o producentach.  
2. Wzorniki docelowo jako karty — **poza obecnym silnikiem**; w scenariuszach: `hairGuide` / tekst / porównania 2–3 poziomów.  
3. Feedback per opcja — odłożony; w treściach jeden wspólny `explanation`.  
4. Teaser po N20 — zatwierdzony (patrz N20).  
5. Kolejność pracy: zatwierdzenie N1–N10 → N11–N20 → JSON.  
6. Siwizna w odroście; przykład ze skroniami — reguła salonu projektu (uzupełnienie SOK o rozmieszczeniu).

---

## Wspólne założenia

- 5 zadań, nagrody 10 + 10 + 15 + 15 + 25.  
- Preferencja: różne typy w kolejnych krokach.  
- Wymagania wstępne bloku: ukończone N1–N10.

---

# N11 — Rozpoznawanie poziomów 1–10

### 1. Tytuł
Rozpoznawanie poziomów 1–10

### 2. Cel
Potrafisz szybko porównać jasność poziomów i połączyć numer z nazwą — bez ponownego wykładu całej skali.

### 3. Wiedza wymagana
N3 (skala wprowadzona), N1–N2 (poziom w numerze farby).

### 4. Punkt wyjścia
Na karcie koloru pojawiają się poziomy 4, 6 i 9. Nie masz już przed sobą całej rozpiski. Trzeba szybko ocenić, który z nich jest najjaśniejszy.

### 5. Plan
Intro (bez pełnej listy 1–10) → 5 zadań praktycznych.  
*(N3 uczyło skali; tu tylko przypominasz i stosujesz.)*

### 6. Treść edukacyjna

**Intro (`narratorText`):**  
Znasz już skalę z poprzedniej lekcji. Teraz ćwiczysz szybkie porównania i nazwy — bez ponownego wykładu całej mapy.

**Część edukacyjna (tekst, bez pełnej listy nazw):**  
- `title`: Bez rozpiski pod ręką  
- `text`: Na karcie widać kilka poziomów. Opierasz się na numerach i nazwach w pytaniach — nie na odcieniu ekranu telefonu.  
*(Bez wypisywania 1–10. Bez `scaleGuide`. Opcjonalna grafika WZN-P tylko jako tło pomocnicze — bez mikroskopijnych podpisów jako źródła odpowiedzi.)*  
**Źródło:** PL-MAP / SOK25 (skala znana z N3)

### Zadania

#### Z1 — `singleChoice` · 10
- **Kicker:** Krok 1 · Porównanie  
- **Pytanie:** Który poziom jest jaśniejszy: 4 czy 8?  
- **Opcje:** a) 4 · b) 8 · c) Oba tak samo jasne  
- **Poprawna:** b  
- **correctTitle:** Tak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** W skali poziomów wyższy numer oznacza jaśniejszy poziom — więc 8 jest jaśniejszy od 4.  
- **Źródło:** E3 / SOK25 / N3

#### Z2 — `singleChoice` · 10
- **Kicker:** Krok 2 · Najciemniejszy  
- **Pytanie:** Który z tych poziomów jest najciemniejszy: 3, 6 czy 9?  
- **Opcje:** a) 3 · b) 6 · c) 9  
- **Poprawna:** a  
- **correctTitle:** Dokładnie.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Niższy numer oznacza ciemniejszy poziom — najciemniejszy z trójki jest 3.  
- **Źródło:** SOK25

#### Z3 — `matching` · 15
- **Kicker:** Krok 3 · Numer i nazwa  
- **Pytanie:** Połącz numer z nazwą (skala edukacyjna modułu).  
- **Left:** `2` · `5` · `9`  
- **Right:** najciemniejszy brąz · jasny brąz · bardzo jasny blond  
- **Pary:** 2↔najciemniejszy brąz; 5↔jasny brąz; 9↔bardzo jasny blond  
- **correctTitle:** Dobrze.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Poziom 2 to najciemniejszy brąz, 5 — jasny brąz, 9 — bardzo jasny blond.  
- **Źródło:** PL-MAP / SOK25  
- **Mobile:** max 3 pary.

#### Z4 — `trueFalse` · 15
- **Kicker:** Krok 4 · Znajdź mit  
- **Pytanie:** „Poziom 9 jest ciemniejszy niż poziom 6.”  
- **correctValue:** false  
- **correctTitle:** Dobrze.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Poziom 9 jest jaśniejszy od 6 — wyższy numer oznacza jaśniejszy poziom.  
- **Źródło:** SOK25

#### Z5 — `singleChoice` · 25
- **Kicker:** Krok 5 · Zastosowanie  
- **Pytanie:** Naturalny odrost jest na poziomie 5, a długości na poziomie 7. Która strefa jest jaśniejsza?  
- **Opcje:** a) Odrost (poziom 5) · b) Długości (poziom 7) · c) Obie tak samo jasne  
- **Poprawna:** b  
- **correctTitle:** Właśnie tak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Poziom 7 jest wyższy niż 5, więc długości są jaśniejsze. To proste porównanie poziomów — nie pełna diagnoza koloru.  
- **Źródło:** SOK25; zakres N11 (bez siwizny / receptury)  
- **Notatka dla autora:** nie rozszerzać o siwiznę ani kolor kosmetyczny.

### Completion
- **title:** Porównujesz poziomy bez rozpiski  
- **subtitle:** Szybko oceniasz jasność i łączysz numer z nazwą.  
- **Teaser N12:** Kiedy poziom milczy o kolorze refleksu?

### Zdanie do zapamiętania
Wyższy numer poziomu oznacza jaśniejszy poziom — także gdy porównujesz dwie strefy na głowie.

### Grafika
Opcjonalna referencja WZN-P — **bez** pełnej listy nazw w tekście lekcji (lista jest w N3).

### Źródła
SOK25, PL-MAP, E3 (kierunek); bez ponownego wykładu N3.

### Kontrola LESSON_STANDARD
Jedna myśl · 5 zadań · bez pełnej skali w guide · ≠ N3 · feedback wspólny · typy silnika.

---

# N12 — Poziom to nie refleks

### 1. Tytuł
Poziom to nie refleks

### 2. Cel
Rozróżniasz jasność (poziom) od kierunku kolorystycznego (refleks w systemie producenta).

### 3. Wiedza wymagana
N1–N8, N10, N11.

### 4. Punkt wyjścia
W karcie ktoś połączył w jednym haśle jasność i kierunek koloru. Sprawdzisz, czy da się to rozdzielić w numerze.

### 5–6. Edukacja

**Intro:** Numer farby niesie więcej niż jedną informację. Najpierw przyjrzyj się zapisom obok siebie.

**Część edukacyjna (tekst w intro / hairGuide bez wymogu odczytu koloru):**  
- `title`: Trzy zapisy  
- `text`: Spójrz na `7`, `7.1` i `7.13`. Różnią się tym, ile informacji stoi po separatorze. Za chwilę wskażesz, od której części warto zacząć odczyt, gdy chcesz wiedzieć o jasności.  
*(Bez zdania „liczba przed separatorem = poziom”.)*  
Źródło przykładów: E3; `5.43` może pojawić się w zadaniach ze SOK24 jako przykład zapisu.

### Zadania

#### Z1 — `singleChoice` · 10
- **Kicker:** Krok 1 · Od czego zacząć  
- **Pytanie:** Spójrz na zapis `7.13`. Jedna część opisuje jasność koloru, a pozostałe jego kierunek. Od której części warto zacząć, gdy pytasz o jasność?  
- **Opcje:** a) `7` · b) `1` · c) `3`  
- **Poprawna:** a  
- **correctTitle:** Tak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Jasność odczytujesz z liczby przed separatorem — tu z 7. Cyfry po separatorze to refleksy w systemie danego producenta.  
- **Źródło:** E3

#### Z2 — `trueFalse` · 10
- **Kicker:** Krok 2 · Mit  
- **Pytanie:** „Poziom 7 oznacza kolor popielaty.”  
- **correctValue:** false  
- **correctTitle:** Dobrze wychwytujesz mit.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Siódemka mówi o poziomie jasności. Kierunek — np. popielaty w przykładach z materiału — wynika z oznaczenia refleksu w danym systemie, nie z samego poziomu.  
- **Źródło:** E3

#### Z3 — `matching` · 15
- **Kicker:** Krok 3 · Co widać w zapisie  
- **Pytanie:** Połącz zapis z tym, ile informacji o refleksie niesie.  
- **Left:** `7` · `7.1` · `7.13`  
- **Right:** sam poziom · poziom + jeden refleks · poziom + główny i dodatkowy refleks  
- **correctTitle:** Dobrze.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Sam `7` nie niesie refleksu. Po separatorze pojawiają się cyfry refleksów — najpierw główny, potem dodatkowy, gdy są dwie.  
- **Źródło:** E3

#### Z4 — `findError` · 15
- **Kicker:** Krok 4 · Znajdź błąd  
- **cardTitle:** Zdania o numerze  
- **rows:**  
  - s1: W `5.43` cyfra 5 to poziom. *(OK)*  
  - s2: Cyfry po separatorze to refleksy w systemie producenta. *(OK)*  
  - s3: `.1` zawsze oznacza popiel u wszystkich marek. *(BŁĄD)* → correctOptionIds: ["s3"]  
- **correctTitle:** Znalazłaś błąd.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Przykłady z materiału nie zastępują legendy każdej marki. Przed pracą sprawdzasz legendę producenta.  
- **Źródło:** E3; SOK24 (przykład 5.43)

#### Z5 — `singleChoice` · 25
- **Kicker:** Krok 5 · Salon  
- **Pytanie:** Klientka mówi: „Chcę siódemkę, ale bardziej złotą niż popielatą.” Co odczytasz osobno w numerze?  
- **Opcje:**  
  - a) Tylko poziom — refleks nie ma znaczenia.  
  - b) Jasność z poziomu oraz kierunek z cyfr refleksu według legendy marki.  
  - c) Że poziom 7 zawsze jest złoty.  
- **Poprawna:** b  
- **correctTitle:** Właśnie tak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Poziom ustala jasność. Kierunek odczytujesz z refleksów w systemie producenta — bez przenoszenia legendy „na ślepo” między markami.  
- **Źródło:** E3

### Completion
- **title:** Oddzielasz poziom od refleksu  
- **subtitle:** Jasność i kierunek czytasz jako osobne informacje w numerze.  
- **Teaser:** Co oceniasz, gdy włosy nie mają jednego koloru?

### Zdanie do zapamiętania
Poziom mówi o jasności; refleks — o kierunku w systemie producenta.

### Grafika
Nieobowiązkowa; wystarczy tekst trzech zapisów.

---

# N13 — Co właściwie oceniamy na włosach klientki

### 1. Tytuł
Co właściwie oceniamy na włosach klientki

### 2. Cel
Rozpoznajesz cztery sytuacje kolorystyczne i wiesz, kiedy partie trzeba opisać osobno.

### 3. Wiedza wymagana
N11–N12.

### 4. Punkt wyjścia
Klientka prosi „po prostu o kolor”. Po rozczesaniu odrost i długości nie mówią tego samego.

### 5–6. Edukacja

**Intro:** Nie zawsze wystarczy jedna liczba na całą głowę. Najpierw rozpoznaj, z czym masz do czynienia.

**Część edukacyjna:**  
- `title`: Zanim wpiszesz poziom  
- `text`: Na włosach klientki możesz spotkać różne starty kolorystyczne. Za chwilę dopasujesz opisy do sytuacji i wskażesz, kiedy trzeba rozdzielić partie.  
*(Bez listy czterech nazw i bez reguły „opisuj osobno”.)*  
Źródło: SOK24–25.

### Zadania

#### Z1 — `matching` · 10
- **Kicker:** Krok 1 · Dopasuj sytuację  
- **Pytanie:** Połącz opis włosów z nazwą sytuacji.  
- **Left:**  
  - Farbowana cała długość, bez odrostu  
  - Farba + widoczny odrost  
  - Cały włos naturalny  
- **Right:** 100% kosmetyczny · kosmetyczny + odrost · 100% naturalny  
- **correctTitle:** Tak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** To trzy z typowych startów: sam kosmetyczny, kosmetyczny z odrostem oraz w pełni naturalny kolor.  
- **Źródło:** SOK24–25  
- **Mobile:** 3 krótkie pary; etykiety w 1 linii.

#### Z2 — `singleChoice` · 10
- **Kicker:** Krok 2 · Czwarta sytuacja  
- **Pytanie:** Naturalny kolor + pasemka, refleksy albo rozjaśnione końce. Co oceniasz dodatkowo poza naturalnym odrostem?  
- **Opcje:**  
  - a) Tylko długość fryzury w cm  
  - b) Poziom rozjaśnień, czy są równe, oraz poziom uwrażliwienia  
  - c) Wyłącznie numer farby z poprzedniej wizyty  
- **Poprawna:** b  
- **correctTitle:** Dokładnie.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Przy naturalnym kolorze z rozjaśnionymi partiami oceniasz odrost oraz osobno poziom rozjaśnień, ich równość i uwrażliwienie.  
- **Źródło:** SOK25

#### Z3 — `trueFalse` · 15
- **Kicker:** Krok 3 · Jedna liczba?  
- **Pytanie:** „Przy kosmetycznym kolorze i naturalnym odroście wystarczy podać jeden poziom dla całej głowy.”  
- **correctValue:** false  
- **correctTitle:** Dobrze.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** W tej sytuacji oceniasz kolor kosmetyczny oraz dokładnie naturalny odrost — jako osobne informacje.  
- **Źródło:** SOK25

#### Z4 — `singleChoice` · 15
- **Kicker:** Krok 4 · Partie  
- **Pytanie:** Widzisz naturalny odrost i wyraźnie jaśniejsze, rozjaśniane końce. Które partie wymagają osobnego opisu?  
- **Opcje:**  
  - a) Tylko końce — odrost można pominąć  
  - b) Naturalny odrost oraz rozjaśnione partie  
  - c) Tylko średnia z obu stref  
- **Poprawna:** b  
- **correctTitle:** Tak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Odrost i rozjaśnienia opisujesz osobno. Przy rozjaśnieniach dodajesz też równość i uwrażliwienie.  
- **Źródło:** SOK25

#### Z5 — `findError` · 25
- **Kicker:** Krok 5 · Brakujący element  
- **cardTitle:** Wpisy w karcie  
- **rows:**  
  - s1: „100% kosmetyczny — poziom i refleks jak dziś; kolor dość jednolity.” *(OK)*  
  - s2: „Kosmetyczny + odrost: długości + poziom, długość i siwizna odrostu.” *(OK)*  
  - s3: „Naturalny + rozjaśnione końce: tylko odrost, bez poziomu rozjaśnień.” *(BŁĄD)* → ["s3"]  
- **correctTitle:** Znalazłaś brak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Przy rozjaśnionych partiach trzeba też określić ich poziom, równość i uwrażliwienie — nie wystarczy sam odrost.  
- **Źródło:** SOK25

### Completion
- **title:** Rozpoznajesz sytuację kolorystyczną  
- **subtitle:** Wiesz, kiedy rozdzielić odrost i rozjaśnienia w opisie.  
- **Teaser:** Co musi znaleźć się w opisie samego odrostu?

### Zdanie do zapamiętania
Najpierw rozpoznaj sytuację koloru — potem zdecyduj, które partie opisać osobno.

### Grafika
Nie.

---

# N14 — Naturalny odrost

### 1. Tytuł
Naturalny odrost

### 2. Cel
Potrafisz zebrać kompletny opis naturalnego odrostu: poziom, długość, % siwizny i jej rozmieszczenie.

### 3. Wiedza wymagana
N11, N13.

### 4. Punkt wyjścia
W karcie ktoś wpisał tylko: „Klientka ma odrost.”

### 5–6. Edukacja

**Intro:** Odrost to nie hasło — to zestaw konkretnych informacji.

**Część edukacyjna:**  
- `title`: Za mało informacji  
- `text`: Sam fakt, że widać odrost, niewiele mówi o kolorze. Za chwilę złożysz opis, z którego da się realnie skorzystać przy diagnozie.  
*(Bez listy „poziom, długość, %, rozmieszczenie” przed Z1.)*  
Źródło: SOK25.

### Zadania

#### Z1 — `matching` · 10
- **Kicker:** Krok 1 · Elementy opisu  
- **Pytanie:** Połącz element opisu odrostu z przykładem zapisu.  
- **Left:** poziom · długość · siwizna  
- **Right:** „poziom 5” · „ok. 2 cm” · „ok. 20%, więcej przy skroniach”  
- **correctTitle:** Tak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Kompletny opis odrostu obejmuje poziom, długość oraz orientacyjny % siwizny z rozmieszczeniem. Kolejność zapisu może być różna.  
- **Źródło:** SOK25  
- **Mobile:** 3 pary; krótkie etykiety.

#### Z2 — `findError` · 10
- **Kicker:** Krok 2 · Za mało  
- **cardTitle:** Wpisy o odroście  
- **rows:**  
  - s1: „Naturalny odrost około 1,5 cm na poziomie 6. Około 10% siwizny, wyraźniej widocznej przy skroniach.” *(OK)*  
  - s2: „Klientka ma odrost.” *(BŁĄD)* → ["s2"]  
  - s3: „Odrost poziom 4, długość ok. 3 cm, bez widocznej siwizny.” *(OK)*  
- **correctTitle:** Znalazłaś lukę.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Sam fakt odrostu nic nie mówi o poziomie, długości ani siwiźnie.  
- **Źródło:** SOK25

#### Z3 — `singleChoice` · 15
- **Kicker:** Krok 3 · Gdzie siwizna  
- **Pytanie:** Gdzie oceniasz procent siwizny przy opisie odrostu?  
- **Opcje:**  
  - a) Na farbowanych długościach jako „siwizna na długości”  
  - b) W strefie naturalnego odrostu  
  - c) Tylko na samych końcach  
- **Poprawna:** b  
- **correctTitle:** Tak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Siwiznę opisujesz w naturalnym odroście. Nie zapisujesz jej jako procentu „na długości”.  
- **Źródło:** SOK24–25; decyzja właścicielki (strefa odrostu)  
- **Notatka dla autora:** nie używać w feedbacku sformułowań biologicznych spoza źródła jako „prawa fizyki włosa”.

#### Z4 — `trueFalse` · 15
- **Kicker:** Krok 4 · Kolejność  
- **Pytanie:** „Jest tylko jedna poprawna kolejność zapisu: najpierw % siwizny, potem poziom, na końcu długość.”  
- **correctValue:** false  
- **correctTitle:** Dobrze.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Liczy się kompletny opis odrostu. Standard nie narzuca jednej obowiązkowej kolejności tych elementów.  
- **Źródło:** SOK25 (elementy bez procedury kolejności)

#### Z5 — `singleChoice` · 25
- **Kicker:** Krok 5 · Wybór wpisu  
- **Pytanie:** Który opis odrostu jest kompletny?  
- **Opcje:**  
  - a) „Odrost widoczny.”  
  - b) „Naturalny odrost około 1,5 cm na poziomie 6. Około 10% siwizny, wyraźniej widocznej przy skroniach.”  
  - c) „Odrost ciemniejszy niż końce.”  
- **Poprawna:** b  
- **correctTitle:** To kompletny opis.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Jest poziom, długość i opis siwizny w odroście (orientacyjnie, z rozmieszczeniem) — bez pustego hasła i bez „siwizny na długości”.  
- **Źródło:** SOK25; wariant zapisu — decyzja dydaktyczna (nie sztywna reguła skroni)

### Completion
- **title:** Opisujesz odrost kompletnie  
- **subtitle:** Poziom, długość, siwizna i jej rozmieszczenie — bez hasła „ma odrost”.  
- **Teaser:** Co, jeśli numer z poprzedniej wizyty nie zgadza się z tym, co widać dziś?

### Zdanie do zapamiętania
Odrost opisujesz kompletnie: poziom, długość, siwizna i jej rozmieszczenie.

### Grafika
Nie.

---

# N15 — Kolor kosmetyczny a stan faktyczny

### 1. Tytuł
Kolor kosmetyczny a stan faktyczny

### 2. Cel
Diagnozujesz aktualny wygląd koloru kosmetycznego, a nie tylko numer farby z poprzedniej wizyty.

### 3. Wiedza wymagana
N12, N13.

### 4. Punkt wyjścia
W karcie jest stary numer. Na włosach widać dziś coś innego.

### 5–6. Edukacja

**Intro:** W karcie bywa historia zabiegu. Na włosach — to, co widać teraz.

**Część edukacyjna:**  
- `title`: Dwie informacje obok siebie  
- `text`: Masz zapis z poprzedniej wizyty i to, co widzisz po rozczesaniu. Za chwilę rozstrzygniesz, która informacja jest dzisiejszą diagnozą koloru.  
*(Bez dosłownego „diagnoza = wygląd dziś, historia osobno”.)*  
Źródło: SOK24.

### Zadania

#### Z1 — `singleChoice` · 10
- **Kicker:** Krok 1 · Co wpisać jako diagnozę  
- **Pytanie:** Co jest diagnozą koloru kosmetycznego „na dziś”?  
- **Opcje:**  
  - a) Numer farby z poprzedniej wizyty przepisany 1:1  
  - b) Aktualny wizualny poziom i refleks oraz to, czy kolor jest jednolity na długości  
  - c) Tylko życzenie klientki co do nowego koloru  
- **Poprawna:** b  
- **correctTitle:** Tak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Przy kolorze kosmetycznym opisujesz stan faktyczny wizualnie — poziom, refleks i jednolitość. Numer z poprzedniej wizyty należy do historii, nie zastępuje dzisiejszego opisu.  
- **Źródło:** SOK24

#### Z2 — `trueFalse` · 10
- **Kicker:** Krok 2 · Mit  
- **Pytanie:** „Skoro ostatnio nałożono 5.43, w diagnozie wystarczy wpisać 5.43 bez oglądania włosów.”  
- **correctValue:** false  
- **correctTitle:** Dobrze.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Chodzi o to, co widać dziś, nie o to, co było nakładane wcześniej. Numer z historii możesz zanotować osobno.  
- **Źródło:** SOK24

#### Z3 — `matching` · 15
- **Kicker:** Krok 3 · Dwie szuflady  
- **Pytanie:** Połącz informację z właściwą szufladą.  
- **Left:** „Dziś widać ok. poziom 6, cieplejszy refleks, lekkie różnice na długości” · „Poprzednia receptura: 6.1”  
- **Right:** diagnoza aktualna · historia zabiegu  
- **correctTitle:** Tak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Jedna szuflada to wygląd „na dziś”, druga — historia receptury.  
- **Źródło:** SOK24  
- **Uwaga językowa:** „cieplejszy” = opis wizualny w case, nie legenda producenta.

#### Z4 — `findError` · 15
- **Kicker:** Krok 4 · Wpis w karcie  
- **cardTitle:** Diagnoza koloru  
- **rows:**  
  - s1: „Kolor kosmetyczny: wizualnie ok. poziom 5, refleks ciepły; na długości nierównomierny.” *(OK)*  
  - s2: „Jak ostatnio.” *(BŁĄD)* → ["s2"]  
  - s3: „100% kosmetyczny; poziom i refleks zgodne z wyglądem dziś; jednolity.” *(OK)*  
- **correctTitle:** Znalazłaś lukę.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** „Jak ostatnio” nie opisuje stanu faktycznego ani jednolitości koloru.  
- **Źródło:** SOK24

#### Z5 — `singleChoice` · 25
- **Kicker:** Krok 5 · Podsumowanie  
- **Pytanie:** Które zdanie najlepiej podsumowuje tę lekcję?  
- **Opcje:**  
  - a) Diagnoza opisuje to, co faktycznie widać dziś; poprzedni numer farby należy do historii.  
  - b) Diagnoza zawsze równa się ostatniej recepturze.  
  - c) Jednolitość koloru nie ma znaczenia w opisie.  
- **Poprawna:** a  
- **correctTitle:** To najważniejsza zasada.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** To, co wcześniej nałożono, nie musi odpowiadać temu, co dziś wizualnie widać na włosach.  
- **Źródło:** SOK24

### Completion
- **title:** Opisujesz stan faktyczny  
- **subtitle:** Oddzielasz dzisiejszy wygląd od historii receptury.  
- **Teaser:** Gdy końce są jaśniejsze od odrostu — jak to opisać?

### Zdanie do zapamiętania
Diagnoza mówi, co widać dziś — historia receptury stoi osobno.

### Grafika
Nie.

---

# N16 — Rozjaśnienia i różne poziomy na jednej głowie

### 1. Tytuł
Rozjaśnienia i różne poziomy na jednej głowie

### 2. Cel
Osobno opisujesz odrost oraz rozjaśnione długości i końce: poziom, równomierność i uwrażliwienie.

### 3. Wiedza wymagana
N13–N15.

### 4. Punkt wyjścia
Naturalny odrost i jaśniejsze końce po starych pasemkach. Jedna cyfra na całość nie wystarczy.

### 5–6. Edukacja

**Intro:** Na jednej głowie mogą być różne poziomy. Rozdzielisz strefy w opisie.

**Część edukacyjna:**  
- `title`: Różne strefy  
- `text`: Gdy naturalny odrost i rozjaśnione partie wyglądają inaczej, nie szukasz jednej „średniej”. Za chwilę przypiszesz, co należy do której strefy.  
*(Bez listy pól odrostu i rozjaśnień przed matchingiem.)*  
Źródło: SOK25. Bez receptury i techniki.

### Zadania

#### Z1 — `singleChoice` · 10
- **Kicker:** Krok 1 · Case  
- **Pytanie:** Odrost ok. poziomu 5, końce wyraźnie jaśniejsze po pasemkach. Co wymaga osobnego opisu w diagnozie koloru?  
- **Opcje:**  
  - a) Tylko średni poziom całej głowy  
  - b) Odrost oraz rozjaśnione partie  
  - c) Tylko życzenie kolorystyczne klientki  
- **Poprawna:** b  
- **correctTitle:** Tak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Przy naturalnym odroście i rozjaśnionych partiach opisujesz te strefy osobno — bez jednej uśrednionej liczby.  
- **Źródło:** SOK25

#### Z2 — `matching` · 10
- **Kicker:** Krok 2 · Co do której strefy  
- **Pytanie:** Połącz strefę z elementami, które do niej należą.  
- **Left:** naturalny odrost · rozjaśnione partie  
- **Right:** poziom, długość, % i rozmieszczenie siwizny · poziom rozjaśnienia, równość, uwrażliwienie  
- **correctTitle:** Dobrze.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Przy odroście zbierasz poziom, długość i siwiznę. Przy rozjaśnieniach — poziom, czy są równe, oraz uwrażliwienie.  
- **Źródło:** SOK25

#### Z3 — `trueFalse` · 15
- **Kicker:** Krok 3 · Równość  
- **Pytanie:** „Przy rozjaśnionych końcach wystarczy podać poziom — równości rozjaśnienia nie trzeba oceniać.”  
- **correctValue:** false  
- **correctTitle:** Tak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Określasz poziom rozjaśnień, czy są równe, oraz poziom uwrażliwienia.  
- **Źródło:** SOK25

#### Z4 — `findError` · 15
- **Kicker:** Krok 4 · Braki  
- **cardTitle:** Opisy stref  
- **rows:**  
  - s1: „Odrost poziom 4, ok. 2 cm; końce rozjaśniane do ok. poziomu 8, nierówno, wyraźnie uwrażliwione.” *(OK)*  
  - s2: „Odrost poziom 5; końce jaśniejsze.” *(BŁĄD)* → ["s2"]  
  - s3: „Odrost poziom 6, 1 cm, bez siwizny; pasemka ok. poziomu 9, dość równe, lekkie uwrażliwienie.” *(OK)*  
- **correctTitle:** Znalazłaś brak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** „Końce jaśniejsze” bez poziomu, równości i uwrażliwienia to za mało.  
- **Źródło:** SOK25

#### Z5 — `singleChoice` · 25
- **Kicker:** Krok 5 · Co robić w diagnozie  
- **Pytanie:** Odrost poziom 5, końce rozjaśniane nierównomiernie i mocno przesuszone. Jaki jest poprawny kolejny krok w diagnozie koloru?  
- **Opcje:**  
  - a) Od razu dobrać oksydant 9%  
  - b) Zanotować osobno poziomy stref, równość rozjaśnienia i uwrażliwienie  
  - c) Wpisać jeden poziom „7” jako kompromis  
- **Poprawna:** b  
- **correctTitle:** Właśnie tak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Na tym etapie zbierasz opis stref. Dobór farby i oksydantu nie należy do tej lekcji.  
- **Źródło:** SOK25; zakres modułu  
- **Notatka dla autora:** a i c = pułapki receptury / uśredniania.

### Completion
- **title:** Rozdzielasz strefy koloru  
- **subtitle:** Odrost i rozjaśnienia opisujesz osobno.  
- **Teaser:** Jak orientacyjnie opisać siwiznę?

### Zdanie do zapamiętania
Różne strefy na jednej głowie opisujesz osobno — zwłaszcza odrost i rozjaśnienia.

### Grafika
Nie.

---

# N17 — Ocena procentu siwizny

### 1. Tytuł
Ocena procentu siwizny

### 2. Cel
Orientacyjnie oceniasz procent siwizny i opisujesz jej rozmieszczenie w odroście.

### 3. Wiedza wymagana
N14.

### 4. Punkt wyjścia
Na różnych partiach odrostu siwizna wygląda inaczej. Trzeba wpisać sensowny opis, nie zgadywać co do włosa.

### 5–6. Edukacja

**Intro:** Siwiznę opisujesz procentowo — i sprawdzasz, czy wszędzie wygląda tak samo.

**Część edukacyjna (`hairGuide`):**  
- `title`: Wzornik pomaga orientacyjnie  
- `text`: Na wzorniku widzisz przykłady oznaczone jako 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%. To pomoc do rzędu wielkości, nie kalkulator. Procent w odroście może być różny w różnych miejscach głowy.  
- `imageSrc`: `source-materials/_sok-pages/siwizna-wzornik-hires.png`  
- `imageCaption`: Wartości % powtórzone tekstem poniżej grafiki — nie czytaj drobnych napisów z obrazu.  
*(Bez zdania o skroniach przed Z3.)*  
Źródło: SOK24 / WZN-S.

**Tekst % do HTML:** 10% · 20% · 30% · 40% · 50% · 60% · 70% · 80% · 90%

### Zadania

#### Z1 — `ordering` · 10
- **Kicker:** Krok 1 · Od najmniejszej ilości  
- **Pytanie:** Ułóż procenty od najmniejszej do największej ilości siwizny.  
- **steps:** 10% · 40% · 70% · 90%  
- **correctTitle:** Tak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Kolejność rośnie: 10%, 40%, 70%, 90%.  
- **Źródło:** SOK24 / WZN-S  
- **Uwaga:** ordering OK — obiektywna skala ilości.

#### Z2 — `trueFalse` · 10
- **Kicker:** Krok 2 · Równomierność  
- **Pytanie:** „Jeżeli wpiszesz 40% siwizny, musi być rozłożona równomiernie na całym odroście.”  
- **correctValue:** false  
- **correctTitle:** Dobrze.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Siwizna w odroście może być różna w różnych miejscach. Sam procent nie oznacza równomiernego rozkładu.  
- **Źródło:** SOK24

#### Z3 — `singleChoice` · 15
- **Kicker:** Krok 3 · Poprawny zapis  
- **Pytanie:** Który zapis poprawnie opisuje nierównomierną siwiznę w odroście?  
- **Opcje:**  
  - a) „10% siwizny na długości, 40% na skroniach”  
  - b) „Około 10% siwizny w większości odrostu, lokalnie około 40% na skroniach”  
  - c) „Siwizna: dużo”  
- **Poprawna:** b  
- **correctTitle:** To poprawny zapis.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Siwiznę opisujesz w naturalnym odroście — z orientacyjnym % i rozmieszczeniem. Nie używasz sformułowania „siwizna na długości”. Wzornik pomaga orientacyjnie, nie daje matematycznego pomiaru.  
- **Źródło:** SOK24–25; decyzja właścicielki (przykład skroni)

#### Z4 — `matching` · 15
- **Kicker:** Krok 4 · Orientacja  
- **Pytanie:** Połącz orientacyjny opis z procentem ze skali wzornika (znajomość skali — nie pomiar z ekranu).  
- **Left:** prawie brak siwych · mniej więcej pół na pół · niemal całość odrostu siwa  
- **Right:** ok. 10% · ok. 50% · ok. 90%  
- **correctTitle:** Tak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** To rzędy wielkości ze wzornika: ok. 10%, ok. 50% i ok. 90%.  
- **Źródło:** WZN-S / SOK24

#### Z5 — `findError` · 25
- **Kicker:** Krok 5 · Dokumentacja  
- **cardTitle:** Zdania o siwiźnie  
- **rows:**  
  - s1: Wzornik pomaga w orientacyjnej ocenie % siwizny. *(OK)*  
  - s2: W odroście siwizna może być nierównomierna — np. lokalnie więcej na skroniach. *(OK)*  
  - s3: Trzeba policzyć matematycznie każdy siwy włos, inaczej wpis jest nieważny. *(BŁĄD)* → ["s3"]  
- **correctTitle:** Znalazłaś mit.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Ocena jest orientacyjna. Liczy się uczciwy opis rzędu wielkości i rozmieszczenia w odroście.  
- **Źródło:** SOK24 + decyzja dydaktyczna (brak matematycznego pomiaru w źródle)

### Completion
- **title:** Opisujesz siwiznę orientacyjnie  
- **subtitle:** Znasz skalę wzornika i nierównomierne rozmieszczenie w odroście.  
- **Teaser:** Jak złożyć to w jeden wpis do karty?

### Zdanie do zapamiętania
Siwiznę oceniasz orientacyjnie w odroście — z procentem i rozmieszczeniem.

### Grafika
`hairGuide` + WZN-S; % jako tekst HTML.

---

# N18 — Pełna diagnoza koloru

### 1. Tytuł
Pełna diagnoza koloru

### 2. Cel
Potrafisz połączyć informacje o naturalnym odroście, siwiźnie, kolorze kosmetycznym i rozjaśnionych partiach w kompletny, rzeczowy wpis do karty — bez jednego obowiązkowego brzmienia na pamięć.

### 3. Wiedza wymagana
N13–N17.

### 4. Punkt wyjścia — jeden case salonowy
Klientka po rozczesaniu. Informacje odkrywasz etapami w pytaniach (nie jako gotowy akapit w guide).

**Dane case’u (dla autora; w intro NIE podawać pełnego wpisu):**  
- naturalny odrost ok. 2 cm, poziom 7  
- ok. 10% siwizny, więcej w okolicy skroni  
- długości kosmetyczne ok. poziomu 6, cieplejszy refleks  
- końce rozjaśnione nierównomiernie, uwrażliwione  

### 5–6. Edukacja

**Intro:** Masz zebrać diagnozę koloru do karty. Pójdziesz strefami — bez gotowego wzorca zdania.

**Część edukacyjna:**  
- `title`: Case: trzy strefy  
- `text`: Na włosach widać naturalny odrost, długości w kolorze kosmetycznym i jaśniejsze końce. Za chwilę przejdziesz od rozpoznania stref do wyboru najlepszego wpisu.  
*(Bez pełnego akapitu diagnozy. Bez listy „musisz podać X, Y, Z” przed Z1.)*  
Źródła elementów: SOK24–25.  
**Poza zakresem pytań:** skóra głowy, grubość, gęstość, typ 4 pór roku, receptura, oksydant, neutralizacja.

### Zadania

#### Z1 — `singleChoice` · 10 — Rozpoznanie stref
- **Kicker:** Krok 1 · Strefy  
- **Pytanie:** W tym case’ie widać naturalny odrost, długości w kolorze kosmetycznym i jaśniejsze, rozjaśniane końce. Które partie trzeba opisać osobno w diagnozie koloru?  
- **Opcje:**  
  - a) Tylko naturalny odrost  
  - b) Naturalny odrost, długości kosmetyczne i rozjaśnione końce  
  - c) Tylko rozjaśnione końce  
- **Poprawna:** b  
- **correctTitle:** Tak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Gdy odrost, długości kosmetyczne i rozjaśnione końce wyglądają inaczej, każdą z tych partii opisujesz osobno.  
- **Źródło:** SOK25  
- **Uwaga techniczna:** `multiSelect` niedostępny w silniku — użyto `singleChoice` z zestawem stref.

#### Z2 — `singleChoice` · 10 — Naturalny odrost
- **Kicker:** Krok 2 · Odrost  
- **Pytanie:** Który opis naturalnego odrostu jest kompletny w tym case’ie?  
- **Opcje:**  
  - a) „Odrost ok. 2 cm.”  
  - b) „Naturalny odrost ok. 2 cm, poziom 7. Ok. 10% siwizny, więcej w okolicy skroni.”  
  - c) „Odrost ciemniejszy niż reszta głowy.”  
- **Poprawna:** b  
- **correctTitle:** Kompletny odrost.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Kompletny opis odrostu ma poziom, długość, orientacyjny % siwizny i rozmieszczenie. Kolejność zdań może być różna — liczy się kompletność.  
- **Źródło:** SOK25

#### Z3 — `matching` · 15 — Strefy i obserwacje
- **Kicker:** Krok 3 · Co do której strefy  
- **Pytanie:** Połącz obserwację ze strefą.  
- **Left:**  
  - poziom 6 i cieplejszy refleks  
  - nierównomierne rozjaśnienie  
  - ok. 10% siwizny, więcej na skroniach  
- **Right:** długości kosmetyczne · rozjaśnione końce · naturalny odrost  
- **Pary:** poziom 6/cieplejszy ↔ długości kosmetyczne; nierównomierne rozjaśnienie ↔ rozjaśnione końce; siwizna ↔ naturalny odrost  
- **correctTitle:** Dobrze.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Siwiznę wiążesz z naturalnym odrostem. Poziom i refleks — z długościami kosmetycznymi. Nierównomierne rozjaśnienie — z końcami.  
- **Źródło:** SOK24–25  
- **Mobile:** max 3 pary; krótkie etykiety.

#### Z4 — `findError` · 15 — Brakujące informacje
- **Kicker:** Krok 4 · Czego brakuje  
- **Pytanie:** Który wpis pomija kluczowe informacje diagnozy koloru?  
- **cardTitle:** Wpisy robocze  
- **rows:**  
  - s1: „Odrost 2 cm, poziom 7; ok. 10% siwizny, więcej na skroniach; długości ok. 6, cieplejszy refleks; końce nierówno rozjaśnione, uwrażliwione.” *(OK)*  
  - s2: „Odrost 2 cm, długości farbowane, końce rozjaśnione.” *(BŁĄD)* → `correctOptionIds: ["s2"]`  
  - s3: „Odrost poziom 7, 2 cm; siwizna ok. 10% w odroście; długości ok. 6 z cieplejszym refleksem; końce nierówno, uwrażliwione.” *(OK — inny szyk, te same informacje)*  
- **correctTitle:** Znalazłaś braki.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Zbyt ogólny wpis pomija poziom odrostu, siwiznę, poziom i refleks długości oraz równomierność i uwrażliwienie końców. Kompletność nie wymaga jednego sztywnego szyku zdań.  
- **Źródło:** SOK24–25

#### Z5 — `singleChoice` · 25 — Najlepszy wpis
- **Kicker:** Krok 5 · Wpis do karty  
- **Pytanie:** Wybierz najlepszy wpis diagnozy koloru dla tego case’u.  
*(Case znany z Z1–Z4. Opcje o zbliżonej długości — nie wybieraj „najdłuższego akapitu”.)*  
- **Opcje:**  
  - a) „Naturalny odrost około 2 cm na poziomie 7, około 10% siwizny, więcej na skroniach. Długości kosmetyczne na poziomie 6 z cieplejszym refleksem. Końce rozjaśnione nierównomiernie i uwrażliwione.”  
  - b) „Odrost około 2 cm, długości farbowane, końce rozjaśnione. Poprzednio użyto farby 6.3 z oksydantem 6%.”  
  - c) „Naturalny odrost na poziomie 7. Długości i końce są na poziomie 6. Kolor na całej długości jest jednolity.”  
  - d) „Naturalny odrost około 2 cm na poziomie 7. Siwizna około 10%. Długości kosmetyczne na poziomie 6. Końce wymagają tonowania.”  
- **Poprawna:** a  
- **correctTitle:** To rzeczowy wpis.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Dobry wpis obejmuje odrost (poziom, długość, siwiznę z rozmieszczeniem), długości kosmetyczne (poziom, refleks) oraz końce (rozjaśnienie, równość, uwrażliwienie). Nie zawiera receptury ani decyzji zabiegowej. Poprawny wpis nie musi mieć jednego obowiązkowego brzmienia — musi obejmować wszystkie istotne strefy i obserwacje.  
- **Notatka dla autora, niewyświetlana w aplikacji:** b = receptura/oksydant; c = uśrednia i pomija siwiznę/refleks/uwrażliwienie; d = pomija refleks i nierównomierność, sugeruje tonowanie.  
- **Źródło:** synteza SOK24–25; zakres modułu  
- **Mobile:** opcje podobnej długości; bez pełnego case’u w pytaniu.

### Completion
- **title:** Składasz diagnozę koloru  
- **subtitle:** Łączysz strefy w czytelny wpis — bez receptury i bez jednego obowiązkowego wzoru stylistycznego.  
- **Teaser:** Czas wymieszać numerację z diagnozą.

### Zdanie do zapamiętania
Poprawny wpis nie musi mieć jednego obowiązkowego brzmienia. Musi natomiast obejmować wszystkie istotne strefy i obserwacje.

### Grafika
Nie.

### Kontrola LESSON_STANDARD
Jedna myśl · case etapami · opcje Z5 zrównoważone długością · matching 3 pary · feedback wspólny · zakres tylko kolor.

---

# N19 — Powtórka mieszana

### 1. Tytuł
Powtórka mieszana

### 2. Cel
Stosujesz wiedzę z numeracji i diagnozy koloru w zmiennych kontekstach.

### 3. Wiedza wymagana
N1–N18.

### 4. Punkt wyjścia
Krótka powtórka przed sprawdzianem — różne poziomy, różne sytuacje.

### 5–6. Edukacja

**Intro:** Tu mieszamy odczyt numeru z opisem włosów.

**Część edukacyjna:**  
- `title`: Bez nowej reguły  
- `text`: Nie uczymy się nowego materiału. Sprawdzisz, czy zasady z wcześniejszych lekcji działają przy innych liczbach i innych wpisach.  
*(Bez checklisty ściągającej do Z3.)*

### Zadania

#### Z1 — `singleChoice` · 10
- **Kicker:** Krok 1 · Skala  
- **Pytanie:** Który poziom jest ciemniejszy?  
- **Opcje:** a) 9 · b) 3 · c) 8  
- **Poprawna:** b  
- **correctTitle:** Tak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Niższy numer oznacza ciemniejszy poziom — 3 jest ciemniejszy od 8 i 9.  
- **Źródło:** SOK25

#### Z2 — `matching` · 10
- **Kicker:** Krok 2 · Numer  
- **Pytanie:** Połącz zapis z odczytem struktury (bez uniwersalnej legendy refleksu).  
- **Left:** `8.1` · `6.31` · `4`  
- **Right:** poziom 8 + refleks · poziom 6 + główny i dodatkowy refleks · sam poziom 4  
- **correctTitle:** Dobrze.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Czytasz poziom i to, czy po separatorze są cyfry refleksu. Znaczenie cyfr sprawdzasz w legendzie marki — nie przenosisz ich automatycznie.  
- **Źródło:** E3 (struktura)

#### Z3 — `findError` · 15
- **Kicker:** Krok 3 · Diagnoza  
- **cardTitle:** Zdania  
- **rows:**  
  - s1: Przy odroście i rozjaśnionych końcach opisujesz strefy osobno. *(OK)*  
  - s2: Diagnoza koloru kosmetycznego to to samo co numer z poprzedniej wizyty. *(BŁĄD)* → ["s2"]  
  - s3: Siwiznę opisujesz orientacyjnie z rozmieszczeniem w odroście. *(OK)*  
- **correctTitle:** Znalazłaś błąd.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Diagnoza koloru kosmetycznego opisuje wygląd dziś; poprzedni numer należy do historii.  
- **Źródło:** SOK24–25

#### Z4 — `singleChoice` · 15
- **Kicker:** Krok 4 · Siwizna  
- **Pytanie:** Który zapis jest poprawny?  
- **Opcje:**  
  - a) „40% siwizny na długości”  
  - b) „Około 30% siwizny w naturalnym odroście, rozmieszczonej nierównomiernie.”  
  - c) „Siwizna 100% na końcach”  
- **Poprawna:** b  
- **correctTitle:** Tak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Siwiznę opisujesz w naturalnym odroście — z orientacyjnym % i rozmieszczeniem. Nie jako „siwiznę na długości”.  
- **Źródło:** decyzja dydaktyczna projektu + SOK24 (rozmieszczenie może być nierównomierne)

#### Z5 — `singleChoice` · 25 *(zamiast ordering)*
- **Kicker:** Krok 5 · Dokumentacja  
- **Pytanie:** Który zestaw obejmuje kompletną pracę z dokumentacją koloru (bez jednej „jedynej” kolejności minutowej)?  
- **Opcje:**  
  - a) Tylko wpisać numer farby z poprzedniej wizyty.  
  - b) Rozpoznać sytuację; opisać odrost i — jeśli trzeba — długości lub rozjaśnienia; oddzielić historię receptury od wyglądu „na dziś”.  
  - c) Od razu dobrać oksydant i technikę.  
- **Poprawna:** b  
- **correctTitle:** To kompletne podejście.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Kompletna dokumentacja koloru łączy rozpoznanie sytuacji, opis stref i oddzielenie historii od diagnozy. Nie zastępuje tego sam stary numer ani dobór oksydantu.  
- **Źródło:** synteza SOK24–25; zakres modułu

### Completion
- **title:** Łączysz numerację z diagnozą  
- **subtitle:** Poruszasz się między skalą, refleksem, odrostem, siwizną i wpisem.  
- **Teaser:** Sprawdzian modułu — samodzielnie.

### Zdanie do zapamiętania
Numer czytasz osobno — włosy opisujesz według tego, co widać w strefach.

### Grafika
Nie.

---

# N20 — Sprawdzian modułu

### 1. Tytuł
Sprawdzian modułu

### 2. Cel
Samodzielnie odczytujesz numer (budowa, separatory, refleksy, legenda), rozpoznajesz poziom vs refleks i skalę 1–10, opisujesz odrost i siwiznę, wskazujesz sytuację kolorystyczną oraz strefy i wybierasz poprawny wpis kolorystyczny.

### 3. Wiedza wymagana
N1–N19. **Bez nowych reguł.**

### 4. Punkt wyjścia
Sprawdzian zamyka moduł. Bez doboru farby, receptury, oksydantu, neutralizacji i techniki.

### 5–6. Edukacja

**Intro:** Sprawdzisz odczyt numeru i diagnozę koloru.

**Część edukacyjna:**  
- `title`: Samodzielnie  
- `text`: Nie ma tu nowego materiału. Korzystasz z tego, czego nauczyłaś się w module.  
*(Bez checklisty ściągającej odpowiedzi.)*

### Mapa pokrycia sprawdzianu

| Zadanie | Sprawdzane kompetencje |
|---------|------------------------|
| Z1 | Budowa numeru + separator; separatory `.` `/` `-`; konieczność sprawdzenia legendy producenta |
| Z2 | Poziom + skala 1–10; poziom vs refleks; refleks główny + dodatkowy |
| Z3 | Znaczenie kolejności (`7.13` vs `7.31`); przykład `7.11` |
| Z4 | Rozpoznanie sytuacji kolorystycznej; opis naturalnego odrostu; % siwizny i rozmieszczenie |
| Z5 | Kolor kosmetyczny; różne strefy + rozjaśnione końce; kompletny wpis diagnozy koloru |

### Zadania

#### Z1 — `findError` · 10
- **Kicker:** Krok 1 · Budowa i legenda  
- **cardTitle:** Odczyt numeru  
- **rows:**  
  - s1: Numer farby rozkładasz na części: przed separatorem, separator i cyfry po nim. *(OK)*  
  - s2: Separator może być kropką `.`, ukośnikiem `/` lub myślnikiem `-`. *(OK)*  
  - s3: Znaczenie cyfr refleksu przenosisz automatycznie między markami — legendy producenta nie trzeba sprawdzać. *(BŁĄD)* → ["s3"]  
- **correctTitle:** Znalazłaś błąd.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Budowa zapisu jest wspólna (części + separator `.` / `/` / `-`). Konkretne znaczenie refleksu zawsze sprawdzasz w legendzie producenta.  
- **Źródło:** E3

#### Z2 — `matching` · 10
- **Kicker:** Krok 2 · Poziom i refleksy  
- **Pytanie:** Połącz element zapisu z rolą.  
- **Left:** liczba przed separatorem · pierwsza cyfra po separatorze · druga cyfra po separatorze  
- **Right:** poziom (jasność na skali 1–10) · refleks główny · refleks dodatkowy  
- **correctTitle:** Tak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Przed separatorem stoi poziom — jasność na skali 1–10 (1 najciemniejszy, 10 najjaśniejszy). Pierwsza cyfra po separatorze to refleks główny, druga — dodatkowy. Poziom nie jest refleksem.  
- **Źródło:** E3  
- **Mobile:** 3 pary; krótkie etykiety.

#### Z3 — `singleChoice` · 15
- **Kicker:** Krok 3 · Kolejność i `7.11`  
- **Pytanie:** Które stwierdzenie jest poprawne?  
- **Opcje:**  
  - a) `7.13` i `7.31` to ten sam opis koloru, bo mają te same cyfry; `7.11` to zwykle inny poziom  
  - b) W `7.13` główny jest `1`, a dodatkowy `3`; w `7.31` role się odwracają; `7.11` w materiale to przykład intensywnego lub podwójnego refleksu popielatego  
  - c) Kolejność cyfr po separatorze nie ma znaczenia; `7.11` zawsze oznacza to samo u każdej marki bez legendy  
- **Poprawna:** b  
- **correctTitle:** Tak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Kolejność po separatorze zmienia, który refleks jest główny, a który dodatkowy (`7.13` ≠ `7.31`). `7.11` to przykład ze źródła (intensywny/podwójny popiel) — legendę marki i tak sprawdzasz.  
- **Źródło:** E3

#### Z4 — `findError` · 15
- **Kicker:** Krok 4 · Sytuacja, odrost, siwizna  
- **cardTitle:** Diagnoza na włosach  
- **rows:**  
  - s1: Przy kolorze kosmetycznym z widocznym odrostem opisujesz odrost i długości osobno. *(OK)*  
  - s2: „Siwizna 30% na długości farbowanej.” *(BŁĄD)* → ["s2"]  
  - s3: „Naturalny odrost ok. 1 cm, poziom 8; ok. 20% siwizny, większe skupisko z przodu.” *(OK)*  
- **correctTitle:** Znalazłaś błąd.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Najpierw rozpoznajesz sytuację (tu: kosmetyczny + odrost). Siwiznę oceniasz orientacyjnie w naturalnym odroście — z % i rozmieszczeniem — nie jako procentu „na długości”.  
- **Źródło:** SOK24–25; decyzja właścicielki

#### Z5 — `singleChoice` · 25
- **Kicker:** Krok 5 · Wpis do karty  
- **Pytanie:** Case (skrócony):  
  odrost ok. 2 cm, poziom 4;  
  ok. 20% siwizny, większe skupisko z przodu;  
  długości kosmetyczne ok. poziomu 5, dość jednolite;  
  końce lekko rozjaśnione, nierówno, uwrażliwione.  
  Który wpis jest poprawną diagnozą koloru?  
- **Opcje:**  
  - a) „Odrost + końce. Zrobić 4.0 / 5.0 i oksydant 6%.”  
  - b) „Naturalny odrost ok. 2 cm, poziom 4; ok. 20% siwizny, większe skupisko z przodu; długości ok. poziomu 5, dość jednolite; końce lekko rozjaśnione, nierówno, uwrażliwione.”  
  - c) „Włosy typ Zima, skóra przetłuszczona, gęste, struktura falowana.”  
- **Poprawna:** b  
- **correctTitle:** To diagnoza koloru.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Poprawny wpis obejmuje kolor kosmetyczny na długościach, różne strefy (w tym rozjaśnione końce) oraz siwiznę w odroście. Nie jest recepturą z oksydantem ani pełną kartą skóry, gęstości i typu kolorystycznego.  
- **Notatka dla autora:** a = receptura; c = poza zakresem modułu.  
- **Źródło:** synteza SOK24–25  
- **Mobile:** case w krótkich liniach; opcje bez zbędnych powtórzeń.

### Completion
- **title:** Zamykasz moduł numeracji i diagnozy koloru  
- **subtitle:** Czytasz numer, opisujesz strefy i piszesz poprawny wpis kolorystyczny.  
- **Teaser następnego modułu (zatwierdzony):**  
  Skoro potrafisz już opisać to, co widzisz na włosach, czas sprawdzić, dlaczego niektóre kolory się wzmacniają, a inne wzajemnie neutralizują.  
  *(Bez dalszego wyjaśnienia koła barw ani neutralizacji.)*

### Zdanie do zapamiętania
Numer odczytujesz według budowy zapisu; włosy opisujesz według tego, co widać dziś w każdej strefie.

### Grafika
Nie.

---

## Mapowanie pól silnika (przypomnienie przy JSON)

| Scenariusz | Silnik |
|------------|--------|
| statements / isError | → `rows` + `correctOptionIds` + `cardTitle` |
| items + correctOrder numeryczny | → `steps` + `correctOrder: [id…]` |
| Feedback per opcja | → jeden `explanation` (+ notatka autora poza JSON) |
| `scaleGuide` / karuzela / multiSelect | **nie używać** |

---

*Wersja po korekcie audytowej. Bez JSON, bez zmian kodu, bez commita/pusha.*
