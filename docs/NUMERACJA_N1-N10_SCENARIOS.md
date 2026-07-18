# Scenariusze lekcji N1–N10 — Numeracja farb i diagnoza koloru

Moduł roboczy: `numeracja-farb` (część: odczyt numeracji)  
Status: **scenariusze po korekcie audytowej** (bez JSON)  
Data: lipiec 2026  
Następny blok: N11–N20 → `docs/NUMERACJA_DIAGNOZA_N11-N20_SCENARIOS.md`

---

## Różnica N3 vs N11

| | **N3** | **N11** |
|---|--------|---------|
| Rola | Pierwsze **poznanie** skali 1–10 | **Praktyczne** utrwalanie i porównywanie |
| Zakres | Kierunek skali + podstawowe nazwy | Matching, porównania, ordering, błędy |
| Liczba ćwiczeń porównawczych | Ograniczona (wprowadzenie) | Wiele krótkich decyzji |

---

## Tabela źródeł

| Kod | Źródło | Zakres w N1–N10 |
|-----|--------|-----------------|
| **E3** | `source-materials/materiały do egzaminu fryzjerskiego.pdf`, s. 3 | Budowa numeru; poziom; główny/dodatkowy refleks; 7.1 / 7.13 / 7.31 / 7.11; separatory; Wella (głębokość/ton); Schwarzkopf (dominujący/drugorzędny); ostrzeżenie o legendzie |
| **SOK25** | Standard Obsługi Klienta, s. 25 | Pełny wzornik poziomów 1–10 (EN), w tym poziom 2 |
| **WZN-P** | `_sok-pages/poziomy-1-10-wzornik-hires.png` (+ assets) | Referencja wizualna do N3 |
| **PL-MAP** | Decyzja właścicielki | Nazwy PL skali edukacyjnej |

### Skala edukacyjna (N3+)

1 czarny · 2 najciemniejszy brąz · 3 ciemny brąz · 4 średni brąz · 5 jasny brąz · 6 ciemny blond · 7 średni blond · 8 jasny blond · 9 bardzo jasny blond · 10 najjaśniejszy blond  

**Zastrzeżenie:** W tym module obowiązuje powyższa skala edukacyjna. Nazwy poziomów mogą się nieznacznie różnić między producentami.  
*(E3 podaje częściowy wykaz bez osobnego poziomu 2; pełna skala 1–10 z poziomem 2 — SOK25 + PL-MAP.)*

### Typy zadań (silnik)

`singleChoice` · `trueFalse` · `matching` · `ordering` · `findError`  

Feedback: `correctTitle` + `incorrectTitle` + **jeden** wspólny `explanation`.  
Bez: feedbacku per opcja, karuzeli, `scaleGuide`, multiSelect.

### Decyzje wymagające akceptacji

1. Pełna skala PL z poziomem 2 (SOK25 + właścicielka) zamiast samego wykazu E3 (1, 3–4, 5…10).  
2. Przykłady znaczeń refleksów (popiel/złoty) wyłącznie w kontekście przykładów E3 — nie jako uniwersalna legenda.  
3. Terminologia Wella/Schwarzkopf tylko w zakresie cytowanym z E3.

---

# N1 — Co widać w numerze farby

### 1. Tytuł
Co widać w numerze farby

### 2. Cel
Potrafię rozłożyć numer farby na jego podstawowe części.

### 3. Wiedza wymagana
Brak — pierwsza lekcja modułu.

### 4. Zakres
Liczba przed separatorem · separator · jedna lub dwie cyfry po separatorze. Przykłady: `7.13`, `7/1`, `7-1`.

### 5. Wyłączone
Skala 1–10 · znaczenia refleksów · 7.13 vs 7.31 · legendy marek · diagnoza włosów.

### 6. Punkt wyjścia
Na tubce i w karcie widać różne zapisy tego samego układu: `7.13`, `7/1`, `7-1`.

### 7–8. Intro i guide

**Intro:** Numer farby to nie jedna tajemnicza liczba. Najpierw zobaczysz, z jakich części się składa.

**Guide:**  
- `title`: Trzy zapisy  
- `text`: Spójrz na `7.13`, `7/1` i `7-1`. Znaki między cyframi wyglądają inaczej, ale układ części jest podobny. Za chwilę wskażesz, co jest separatorem, a co stoi przed nim i po nim.  
*(Bez nazywania ról „poziom / refleks”.)*  
**Źródło:** E3

### 9–15. Zadania

#### Z1 — `singleChoice` · 10
- **Kicker:** Krok 1 · Separator  
- **Pytanie:** W zapisie `7.13` który znak oddziela pierwszą cyfrę od kolejnych?  
- **Opcje:** a) kropka `.` · b) cyfra `1` · c) cyfra `3`  
- **Poprawna:** a  
- **correctTitle:** Tak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Separatorem jest znak między częściami numeru — tu kropka. Cyfry po separatorze to osobna część zapisu.  
- **Źródło:** E3

#### Z2 — `singleChoice` · 10
- **Kicker:** Krok 2 · Przed separatorem  
- **Pytanie:** W `7/1` która część stoi przed separatorem?  
- **Opcje:** a) `7` · b) `/` · c) `1`  
- **Poprawna:** a  
- **correctTitle:** Dokładnie.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Przed separatorem stoi pierwsza liczba zapisu — tu `7`. Sam separator i to, co po nim, to kolejne części.  
- **Źródło:** E3

#### Z3 — `matching` · 15
- **Kicker:** Krok 3 · Części zapisu  
- **Pytanie:** Połącz element z miejscem w numerze `7-1`.  
- **Left:** `7` · `-` · `1`  
- **Right:** przed separatorem · separator · po separatorze  
- **correctTitle:** Dobrze.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** W `7-1` liczba `7` jest przed separatorem, myślnik jest separatorem, a `1` stoi po separatorze.  
- **Źródło:** E3

#### Z4 — `trueFalse` · 15
- **Kicker:** Krok 4 · Dwie cyfry po  
- **Pytanie:** „W zapisie `7.13` po separatorze stoją dwie cyfry: `1` i `3`.”  
- **correctValue:** true  
- **correctTitle:** Tak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Po kropce w `7.13` widać dwie cyfry — najpierw `1`, potem `3`.  
- **Źródło:** E3

#### Z5 — `findError` · 25
- **Kicker:** Krok 5 · Znajdź błąd  
- **cardTitle:** Opisy konstrukcji  
- **rows:**  
  - s1: W `7.13` przed separatorem stoi `7`. *(OK)*  
  - s2: Separator może być kropką, ukośnikiem lub myślnikiem. *(OK)*  
  - s3: W `7.13` całość `713` to jedna nierozdzielna liczba bez części. *(BŁĄD)* → ["s3"]  
- **correctTitle:** Znalazłaś błąd.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Numer składa się z części: liczba przed separatorem, separator i cyfry po nim — nie jest jedną nierozdzielną liczbą `713`.  
- **Źródło:** E3

### 16. Notatka autora
Z5c — mylenie zapisu z „zwykłą” liczbą bez struktury.

### 17. Completion
- **title:** Widzisz części numeru farby  
- **subtitle:** Rozpoznajesz, co stoi przed separatorem, czym jest separator i co po nim następuje.  
- **Teaser:** Jaką informację niesie liczba przed separatorem?

### 18. Zdanie do zapamiętania
Numer farby rozkładasz na części: przed separatorem, separator i cyfry po nim.

### 19–20. Grafika
Niepotrzebna (tekst zapisów wystarczy).

### 21. Źródła
E3

### 22–23. Kontrola
LESSON_STANDARD: 5 zadań, interleaving, odkrywanie. Technicznie: tylko typy silnika; 360 px OK.

---

# N2 — Liczba przed separatorem

### 1. Tytuł
Liczba przed separatorem

### 2. Cel
Wiem, jaką informację daje liczba przed separatorem.

### 3. Wiedza wymagana
N1

### 4. Zakres
Liczba przed separatorem = poziom (jasność / ciemność). Porównania typu `5.1` / `7.1` / `9.1` bez pełnej skali nazw.

### 5. Wyłączone
Pełna nauka nazw 1–10 (N3) · szczegóły refleksów · diagnoza.

### 6. Punkt wyjścia
Na półce trzy tubki: `5.1`, `7.1`, `9.1`. Po separatorze to samo — przed nim coś się zmienia.

### 7–8. Intro i guide

**Intro:** Już rozróżniasz części numeru. Teraz skupisz się na tym, co stoi przed separatorem.

**Guide:**  
- `title`: Co się zmienia?  
- `text`: Spójrz na `5.1`, `7.1` i `9.1`. Po separatorze widać tę samą cyfrę. Zmienia się tylko liczba przed separatorem. Za chwilę wskażesz, która część mówi o jasności albo ciemności koloru.  
*(Bez zdania „to nazywa się poziom” przed Z1 — nazwa w feedbacku.)*  
**Źródło:** E3

### Zadania

#### Z1 — `singleChoice` · 10
- **Kicker:** Krok 1 · Porównanie  
- **Pytanie:** W zapisach `5.1`, `7.1` i `9.1` która część się zmienia, gdy porównujesz je ze sobą?  
- **Opcje:** a) Liczba przed separatorem · b) Cyfra zaraz po separatorze · c) Sam znak separatora  
- **Poprawna:** a  
- **correctTitle:** Tak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** We wszystkich trzech zapisach po separatorze stoi `1`. Zmienia się liczba przed separatorem — to właśnie ona opisuje poziom jasności lub ciemności.  
- **Źródło:** E3

#### Z2 — `trueFalse` · 10
- **Kicker:** Krok 2 · Mit  
- **Pytanie:** „Liczba przed separatorem mówi wyłącznie o kierunku kolorystycznym, np. o popielu.”  
- **correctValue:** false  
- **correctTitle:** Dobrze.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Liczba przed separatorem oznacza poziom koloru — jego jasność lub ciemność. Kierunek kolorystyczny odczytujesz z cyfr po separatorze.  
- **Źródło:** E3

#### Z3 — `matching` · 15
- **Kicker:** Krok 3 · Co do czego  
- **Pytanie:** Połącz część numeru z rodzajem informacji.  
- **Left:** liczba przed separatorem · cyfry po separatorze  
- **Right:** jasność lub ciemność (poziom) · kierunek kolorystyczny (refleksy)  
- **correctTitle:** Dokładnie.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Przed separatorem stoi poziom. Po separatorze — oznaczenia refleksów, czyli kierunku.  
- **Źródło:** E3  
- **Uwaga:** matching 2 pary — OK w silniku.

#### Z4 — `singleChoice` · 15
- **Kicker:** Krok 4 · Ten sam zapis  
- **Pytanie:** W `7.13` która cyfra opisuje poziom (jasność/ciemność)?  
- **Opcje:** a) `7` · b) `1` · c) `3`  
- **Poprawna:** a  
- **correctTitle:** Tak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Poziom odczytujesz z liczby przed separatorem — tu z `7`.  
- **Źródło:** E3

#### Z5 — `findError` · 25
- **Kicker:** Krok 5 · Znajdź błąd  
- **cardTitle:** Zdania  
- **rows:**  
  - s1: Liczba przed separatorem oznacza poziom koloru. *(OK)*  
  - s2: Poziom mówi o jasności lub ciemności. *(OK)*  
  - s3: W `9.1` poziom odczytujesz z cyfry `1`. *(BŁĄD)* → ["s3"]  
- **correctTitle:** Znalazłaś błąd.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** W `9.1` poziom to `9` — liczba przed separatorem. Cyfra po separatorze nie jest poziomem.  
- **Źródło:** E3

### Completion
- **title:** Wiesz, co mówi liczba przed separatorem  
- **subtitle:** To poziom — jasność lub ciemność koloru.  
- **Teaser:** Jak wygląda cała skala poziomów od 1 do 10?

### Zdanie do zapamiętania
Liczba przed separatorem to poziom — jasność lub ciemność.

### Grafika
Niepotrzebna.

### Źródła
E3

### Kontrola
OK — bez pełnej skali nazw; odkrywanie przed nazwaniem „poziomu” w Z1 feedbacku.

---

# N3 — Skala poziomów 1–10

### 1. Tytuł
Skala poziomów 1–10

### 2. Cel
Znam kierunek skali poziomów i podstawowe nazwy od 1 do 10.

### 3. Wiedza wymagana
N2

### 4. Zakres
Skala edukacyjna 1–10 (z poziomem 2); zasada: im wyższy numer, tym jaśniejszy; grupy orientacyjne (czarny / brązy / blondy); zastrzeżenie o producentach.

### 5. Wyłączone
Intensywne porównywanie i matching wielu nazw jak w N11 · refleksy · diagnoza · pomiar z monitora.

### 6. Punkt wyjścia
Przy stanowisku leży wzornik z kilkoma poziomami. Zanim przejrzysz całą skalę, sprawdzisz, w którą stronę robi się jaśniej.

### 7–8. Intro i guide

**Intro:** Wiesz już, że przed separatorem stoi poziom. Teraz poznasz, jak ułożona jest skala od 1 do 10.

**Guide (bez pełnej listy nazw):**  
- `title`: W którą stronę jaśniej?  
- `text`: Skala poziomów ma kierunek — od ciemniejszych numerów do jaśniejszych. Za chwilę porównasz trzy przykłady. Nie zgadujesz koloru z ekranu telefonu: opierasz się na numerach i nazwach podanych w tekście.  
- Opcjonalnie `hairGuide` z WZN-P **bez** wymagania odczytu drobnych napisów z bitmapy.  
**Źródło:** E3 / SOK25 (kierunek skali)

**Pełna skala 1–10 nie pojawia się w tym guide** — dopiero po Z2, na osobnych ekranach edukacyjnych.

### Zadania i ekrany

#### Z1 — `singleChoice` · 10 — Odkrycie kierunku
- **Kicker:** Krok 1 · Trzy przykłady  
- **Pytanie:** Masz trzy poziomy ze skali edukacyjnej: **2 — najciemniejszy brąz**, **6 — ciemny blond**, **10 — najjaśniejszy blond**. W którą stronę skala staje się jaśniejsza?  
- **Opcje:**  
  - a) W stronę wyższych numerów (od 2 przez 6 do 10)  
  - b) W stronę niższych numerów (od 10 do 2)  
  - c) Numer nie ma związku z jasnością  
- **Poprawna:** a  
- **correctTitle:** Tak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Im wyższy numer, tym jaśniejszy poziom. Od 2 przez 6 do 10 skala robi się jaśniejsza.  
- **Źródło:** E3 / SOK25 / PL-MAP  
- **Uwaga:** W pytaniu tylko trzy poziomy — nie cała lista 1–10.

#### Z2 — `matching` · 10 — Grupy poziomów
- **Kicker:** Krok 2 · Orientacja  
- **Pytanie:** Połącz zakres numerów z ogólną grupą na skali edukacyjnej.  
- **Left:** poziom 1 · poziomy 2–5 · poziomy 6–10  
- **Right:** czarny · brązy · blondy  
- **correctTitle:** Dobrze.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Na skali edukacyjnej: 1 to czarny, poziomy 2–5 to brązy, a 6–10 to blondy. To orientacja w skali — nie dodatkowa reguła zabiegowa.  
- **Źródło:** PL-MAP / SOK25 (układ nazw na wzorniku)  
- **Notatka dla autora:** grupowanie dydaktyczne na podstawie nazw skali; nie dopisywać innych zasad.

#### Ekrany edukacyjne (po Z2, przed Z3) — nie są zadaniami punktowanymi

**Ekran A — poziomy 1–5 (tekst HTML):**  
1 — czarny  
2 — najciemniejszy brąz  
3 — ciemny brąz  
4 — średni brąz  
5 — jasny brąz  

**Ekran B — poziomy 6–10 (tekst HTML):**  
6 — ciemny blond  
7 — średni blond  
8 — jasny blond  
9 — bardzo jasny blond  
10 — najjaśniejszy blond  

**Zastrzeżenie (na ekranie B lub pod listą):**  
W tym module korzystamy z tej skali edukacyjnej. Nazwy poziomów mogą się nieznacznie różnić między producentami.

**Notatka techniczna do późniejszego JSON:**  
Bloki skali 1–5 i 6–10 są **osobnymi ekranami tekstowymi przed Z3**. Nie są częścią treści pytania ani jedną szeroką tabelą. Podczas tworzenia JSON należy odwzorować je w istniejących krokach typu guide/content (np. dwa krótkie kroki tekstowe albo dwa bloki HTML przed pytaniem Z3), **bez dodawania nowego komponentu silnika**. Nie używać `scaleGuide`.  

**Implementacja przy obecnym flow (bez zmiany silnika):** jeśli nie ma slotu mid-flow między zadaniami, treść ekranów A i B trafia jako dwa krótkie bloki HTML bezpośrednio przed pytaniem Z3 (najpierw 1–5, potem 6–10 + zastrzeżenie). Grafika WZN-P opcjonalnie obok bloków — etykiety i tak w HTML.  
**Źródło:** PL-MAP / SOK25 / WZN-P

#### Z3 — `singleChoice` · 15 — Kierunek (bez echa listy)
- **Kicker:** Krok 3 · Skala i porównanie  
- **Materiał nad pytaniem:** bloki A (1–5) i B (6–10) jak wyżej.  
- **Pytanie:** Który poziom będzie jaśniejszy: 4 czy 8?  
- **Opcje:** a) 4 · b) 8 · c) Oba tak samo jasne  
- **Poprawna:** b  
- **correctTitle:** Dokładnie.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Wyższy numer oznacza jaśniejszy poziom, więc 8 jest jaśniejszy od 4.  
- **Źródło:** E3 / SOK25

#### Z4 — `trueFalse` · 15 — Przerwa przed nazwą (nie echo listy)
- **Kicker:** Krok 4 · Salon  
- **Pytanie:** „Poziom na skali edukacyjnej możesz precyzyjnie „zmierzyć” samym kolorem na ekranie telefonu — bez patrzenia na numer i nazwę.”  
- **correctValue:** false  
- **correctTitle:** Dobrze.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Wzornik i ekran telefonu to tylko pomoc. W module opierasz się na numerze i nazwie ze skali edukacyjnej — nie na subtelnym odcieniu monitora. Nazwy u producentów mogą się nieznacznie różnić.  
- **Źródło:** decyzja dydaktyczna projektu; zastrzeżenie PL-MAP

#### Z5 — `singleChoice` · 25 — Proste rozpoznanie nazwy
- **Kicker:** Krok 5 · Nazwa  
- **Pytanie:** Który numer oznacza najciemniejszy brąz?  
- **Opcje:** a) 1 · b) 2 · c) 5  
- **Poprawna:** b  
- **correctTitle:** Tak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Najciemniejszy brąz to poziom 2. Poziom 1 to czarny, a 5 — jasny brąz.  
- **Źródło:** PL-MAP / SOK25  
- **Uwaga:** Między pełną listą (ekrany A/B) a Z5 jest Z3 i Z4 — nie bezpośrednio echo poprzedniego ekranu.

### Completion
- **title:** Znasz skalę poziomów 1–10  
- **subtitle:** Wiesz, w którą stronę skala robi się jaśniejsza, znasz grupy i podstawowe nazwy.  
- **Teaser:** Co oznacza pierwsza cyfra po separatorze?

### Zdanie do zapamiętania
Im wyższy numer poziomu, tym jaśniejszy kolor na skali 1–10.

### Grafika
Opcjonalna pomoc: `source-materials/_sok-pages/poziomy-1-10-wzornik-hires.png` — nie jedyne źródło nazw (nazwy w HTML na ekranach A/B).

### Źródła
SOK25, WZN-P, PL-MAP, E3 (kierunek)

### Kontrola
N3 wprowadza skalę stopniowo; nie jest kopią N11 (brak serii matchingów i długiego orderingu). Bez `scaleGuide`. 5 zadań punktowanych + 2 ekrany edukacyjne.

---

# N4 — Pierwsza cyfra po separatorze

### 1. Tytuł
Pierwsza cyfra po separatorze

### 2. Cel
Rozpoznaję refleks główny w numerze farby.

### 3. Wiedza wymagana
N1–N3

### 4. Zakres
Pierwsza cyfra po separatorze = główny refleks (dominujący kierunek). Przykłady: `7.1`, `7.13`, `7.31` — bez pełnej analizy kolejności (N6).

### 5. Wyłączone
Uniwersalne „`.1` = popiel zawsze” · pełne porównanie 7.13/7.31 · druga cyfra w szczegółach (N5).

### 6. Punkt wyjścia
Notatka: „`7` i `7.1` — czy to to samo?”

### 7–8. Intro i guide

**Intro:** Poziom już znasz. Teraz przyjrzysz się temu, co stoi zaraz po separatorze.

**Guide:**  
- `title`: `7` i `7.1`  
- `text`: Porównaj sam `7` oraz `7.1`. Co pojawiło się po separatorze? Za chwilę wskażesz, jak nazywamy tę pierwszą cyfrę po separatorze i jaką rolę pełni.  
**Źródło:** E3

### Zadania

#### Z1 — `singleChoice` · 10
- **Kicker:** Krok 1 · Co doszło  
- **Pytanie:** Co różni zapis `7.1` od samego `7`?  
- **Opcje:**  
  - a) Po separatorze pojawia się cyfra opisująca kierunek kolorystyczny  
  - b) Zmienia się poziom jasności z 7 na 1  
  - c) Znika informacja o poziomie  
- **Poprawna:** a  
- **correctTitle:** Tak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Poziom nadal odczytujesz z `7`. Po separatorze pojawia się pierwsza cyfra refleksu — w materiale nazywana głównym refleksem, czyli dominującym kierunkiem kolorystycznym.  
- **Źródło:** E3

#### Z2 — `trueFalse` · 10
- **Kicker:** Krok 2 · Mit  
- **Pytanie:** „Pierwsza cyfra po separatorze zawsze oznacza to samo u każdej marki — nie trzeba sprawdzać legendy.”  
- **correctValue:** false  
- **correctTitle:** Dobrze.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Pierwsza cyfra po separatorze wskazuje refleks główny w danym systemie. Znaczenie konkretnej cyfry sprawdzasz w legendzie producenta — nie przenosisz go automatycznie między markami.  
- **Źródło:** E3

#### Z3 — `matching` · 15
- **Kicker:** Krok 3 · Role  
- **Pytanie:** Połącz część numeru `7.13` z rolą.  
- **Left:** `7` · `1` (pierwsza po separatorze)  
- **Right:** poziom · refleks główny  
- **correctTitle:** Dokładnie.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** `7` to poziom. Pierwsza cyfra po separatorze to refleks główny.  
- **Źródło:** E3  
- **Notatka:** druga cyfra celowo poza matchingiem (N5).

#### Z4 — `singleChoice` · 15
- **Kicker:** Krok 4 · Przykład ze źródła  
- **Pytanie:** W przykładzie z materiału egzaminacyjnego zapis `7.1` opisano jako poziom 7 oraz…  
- **Opcje:** a) refleks popielaty · b) sam poziom bez refleksu · c) wyłącznie złoty kierunek  
- **Poprawna:** a  
- **correctTitle:** Tak — w tym przykładzie.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** W materiale egzaminacyjnym `7.1` to poziom 7 i refleks popielaty. To przykład z tego źródła — nie uniwersalna reguła wszystkich marek.  
- **Źródło:** E3

#### Z5 — `findError` · 25
- **Kicker:** Krok 5 · Znajdź błąd  
- **cardTitle:** Zdania  
- **rows:**  
  - s1: Pierwsza cyfra po separatorze to refleks główny. *(OK)*  
  - s2: W przykładzie materiału `7.1` ma refleks popielaty. *(OK)*  
  - s3: `.1` zawsze oznacza popiel u wszystkich producentów. *(BŁĄD)* → ["s3"]  
- **correctTitle:** Znalazłaś błąd.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Przykład ze źródła nie zastępuje legendy każdej marki. Przed pracą sprawdzasz legendę producenta.  
- **Źródło:** E3

### Completion
- **title:** Rozpoznajesz refleks główny  
- **subtitle:** Pierwsza cyfra po separatorze to dominujący kierunek — ze sprawdzoną legendą marki.  
- **Teaser:** A druga cyfra po separatorze?

### Zdanie do zapamiętania
Pierwsza cyfra po separatorze to refleks główny w systemie producenta.

### Grafika
Niepotrzebna.

### Źródła
E3

---

# N5 — Druga cyfra po separatorze

### 1. Tytuł
Druga cyfra po separatorze

### 2. Cel
Rozpoznaję refleks dodatkowy w numerze farby.

### 3. Wiedza wymagana
N4

### 4. Zakres
Druga cyfra po separatorze oznacza refleks dodatkowy, który uzupełnia refleks główny. Przygotowanie do N6 bez pełnego rozstrzygnięcia 7.13 vs 7.31.

### 5. Wyłączone
Pełna analiza kolejności 7.13/7.31 · uniwersalne legendy · 7.11.

### 6. Punkt wyjścia
Obok siebie: `7.1` i `7.13`. Po `1` pojawia się jeszcze jedna cyfra.

### 7–8. Intro i guide

**Intro:** Znasz refleks główny. Czasem po separatorze stoi jeszcze druga cyfra.

**Guide:**  
- `title`: Jedna cyfra więcej  
- `text`: Porównaj `7.1` i `7.13`. W drugim zapisie po separatorze widać dwie cyfry. Za chwilę wskażesz, jak materiał nazywa tę drugą cyfrę i jaką rolę pełni względem refleksu głównego.  
**Źródło:** E3

### Zadania

#### Z1 — `singleChoice` · 10
- **Kicker:** Krok 1 · Co doszło  
- **Pytanie:** Czego nie ma w `7.1`, a jest w `7.13`?  
- **Opcje:** a) Drugiej cyfry po separatorze · b) Liczby przed separatorem · c) Separatora  
- **Poprawna:** a  
- **correctTitle:** Tak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** W obu zapisach poziom to 7. W `7.13` po separatorze stoi jeszcze druga cyfra — w materiale nazywana refleksem dodatkowym.  
- **Źródło:** E3

#### Z2 — `trueFalse` · 10
- **Kicker:** Krok 2 · Rola  
- **Pytanie:** „Druga cyfra po separatorze oznacza refleks dodatkowy, który uzupełnia refleks główny.”  
- **correctValue:** true  
- **correctTitle:** Dobrze.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Druga cyfra po separatorze oznacza refleks dodatkowy — uzupełnia refleks główny, a nie zastępuje go.  
- **Źródło:** E3

#### Z3 — `matching` · 15
- **Kicker:** Krok 3 · Role w `7.13`  
- **Pytanie:** Połącz cyfrę z rolą według materiału.  
- **Left:** `7` · `1` · `3`  
- **Right:** poziom · refleks główny · refleks dodatkowy  
- **correctTitle:** Dokładnie.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Najprostszy odczyt z materiału: `7.13` = poziom 7 + główny refleks 1 + dodatkowy refleks 3.  
- **Źródło:** E3

#### Z4 — `singleChoice` · 15
- **Kicker:** Krok 4 · Miejsce  
- **Pytanie:** Dlaczego warto zwracać uwagę, na którym miejscu stoi cyfra po separatorze?  
- **Opcje:**  
  - a) Bo miejsce cyfry wpływa na to, która jest główna, a która dodatkowa  
  - b) Bo poziom zawsze zapisuje się po separatorze  
  - c) Bo druga cyfra kasuje pierwszą  
- **Poprawna:** a  
- **correctTitle:** Tak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Pierwsza po separatorze ma rolę główną, druga — dodatkową. Dlatego miejsce cyfry ma znaczenie — rozwiniesz to przy porównaniu `7.13` i `7.31`.  
- **Źródło:** E3

#### Z5 — `findError` · 25
- **Kicker:** Krok 5 · Znajdź błąd  
- **cardTitle:** Opisy  
- **rows:**  
  - s1: Druga cyfra po separatorze to refleks dodatkowy. *(OK)*  
  - s2: Druga cyfra po separatorze oznacza refleks dodatkowy, który uzupełnia refleks główny. *(OK)*  
  - s3: W `7.13` cyfra `3` jest refleksem głównym. *(BŁĄD)* → ["s3"]  
- **correctTitle:** Znalazłaś błąd.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** W `7.13` główny jest `1`, a `3` to refleks dodatkowy.  
- **Źródło:** E3

### Completion
- **title:** Rozpoznajesz refleks dodatkowy  
- **subtitle:** Druga cyfra po separatorze uzupełnia refleks główny.  
- **Teaser:** Dlaczego 7.13 i 7.31 to nie to samo?

### Zdanie do zapamiętania
Druga cyfra po separatorze oznacza refleks dodatkowy — uzupełnia refleks główny.

### Grafika
Niepotrzebna.

### Źródła
E3

---

# N6 — Dlaczego 7.13 i 7.31 to nie to samo

### 1. Tytuł
Dlaczego 7.13 i 7.31 to nie to samo

### 2. Cel
Rozumiem, dlaczego zmiana kolejności cyfr zmienia opis koloru.

### 3. Wiedza wymagana
N4–N5

### 4. Zakres
`7.13` vs `7.31` według E3; ten sam poziom; inna kolejność = inny główny/dodatkowy.

### 5. Wyłączone
Inne cyfry legendy · uniwersalność marek · 7.11.

### 6. Punkt wyjścia
Na półce stoją dwa odcienie: `7.13` i `7.31`. Cyfry wyglądają znajomo, ale ich kolejność jest inna.

### 7–8. Intro i guide

**Intro:** Dwa zapisy, te same cyfry w innym układzie. Sprawdzisz, czy to nadal ten sam opis koloru.

**Guide:**  
- `title`: Inna kolejność  
- `text`: Na półce stoją dwa odcienie: `7.13` i `7.31`. Cyfry wyglądają znajomo, ale ich kolejność jest inna. Czy to nadal ten sam opis koloru?  
*(Bez podawania przed Z1, że poziom jest ten sam, która cyfra jest główna, ani pełnych znaczeń obu numerów — to we feedbacku i w Z2.)*  
**Źródło:** E3

### Zadania

#### Z1 — `singleChoice` · 10
- **Kicker:** Krok 1 · Poziom  
- **Pytanie:** Co jest wspólne dla `7.13` i `7.31`?  
- **Opcje:** a) Ten sam poziom 7 · b) Ten sam refleks główny · c) Identyczny opis kierunku  
- **Poprawna:** a  
- **correctTitle:** Tak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Oba zapisy mają poziom 7. Różni je kolejność cyfr po separatorze — a z nią refleks główny i dodatkowy.  
- **Źródło:** E3

#### Z2 — `matching` · 10
- **Kicker:** Krok 2 · Dopasuj opis  
- **Pytanie:** Połącz zapis z opisem z materiału egzaminacyjnego.  
- **Left:** `7.13` · `7.31`  
- **Right:** głównie popielaty, dodatkowo złoty · głównie złoty, dodatkowo popielaty  
- **correctTitle:** Dokładnie.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** W materiale: `7.13` — głównie popielaty, dodatkowo złoty; `7.31` — głównie złoty, dodatkowo popielaty. Kolejność cyfr ma znaczenie.  
- **Źródło:** E3

#### Z3 — `trueFalse` · 15
- **Kicker:** Krok 3 · Mit  
- **Pytanie:** „`7.13` i `7.31` to ten sam kolor, bo zawierają cyfry 1 i 3.”  
- **correctValue:** false  
- **correctTitle:** Dobrze.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** W materiale kolejność cyfr zmienia rolę refleksów: w pierwszym dominuje popiel, w drugim złoto. To nie jest ten sam opis koloru.  
- **Źródło:** E3

#### Z4 — `singleChoice` · 15
- **Kicker:** Krok 4 · Główny refleks  
- **Pytanie:** W `7.31` która cyfra jest refleksem głównym według kolejności w zapisie?  
- **Opcje:** a) `3` · b) `1` · c) `7`  
- **Poprawna:** a  
- **correctTitle:** Tak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Pierwsza po separatorze to refleks główny — w `7.31` jest to `3`. Cyfra `7` to poziom.  
- **Źródło:** E3

#### Z5 — `findError` · 25
- **Kicker:** Krok 5 · Znajdź błąd  
- **cardTitle:** Zdania  
- **rows:**  
  - s1: `7.13` i `7.31` mają ten sam poziom. *(OK)*  
  - s2: Kolejność cyfr po separatorze zmienia opis kierunku. *(OK)*  
  - s3: Znaczenia 1 = popiel i 3 = złoty obowiązują automatycznie w każdej marce. *(BŁĄD)* → ["s3"]  
- **correctTitle:** Znalazłaś błąd.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Opisy popiel/złoty pochodzą z przykładów materiału egzaminacyjnego. Przy innej marce sprawdzasz jej legendę — nie przenosisz oznaczeń automatycznie.  
- **Źródło:** E3

### Completion
- **title:** Rozumiesz znaczenie kolejności  
- **subtitle:** Te same cyfry w innej kolejności dają inny opis kierunku.  
- **Teaser:** Co oznacza zapis 7.11?

### Zdanie do zapamiętania
Kolejność cyfr po separatorze ma znaczenie — 7.13 i 7.31 to nie to samo.

### Grafika
Niepotrzebna.

### Źródła
E3

---

# N7 — Co oznacza 7.11

### 1. Tytuł
Co oznacza 7.11

### 2. Cel
Rozpoznaję przykład podwójnego albo intensywnego refleksu.

### 3. Wiedza wymagana
N4–N6

### 4. Zakres
`7.11` w E3 = intensywny lub podwójny refleks popielaty. Bez uniwersalnej reguły wszystkich powtórzeń.

### 5. Wyłączone
„Każde `.xx` u każdej marki” · diagnoza · inne cyfry.

### 6. Punkt wyjścia
Obok `7.1` leży `7.11` — prawie to samo, a jednak inaczej zapisane.

### 7–8. Intro i guide

**Intro:** Czasem po separatorze ta sama cyfra pojawia się dwa razy.

**Guide:**  
- `title`: `7.1` i `7.11`  
- `text`: Porównaj `7.1` i `7.11`. Po separatorze coś się zmienia. Za chwilę wskażesz różnicę w zapisie i wybierzesz opis `7.11` z materiału egzaminacyjnego.  
**Źródło:** E3

### Zadania

#### Z1 — `singleChoice` · 10
- **Kicker:** Krok 1 · Różnica zapisu  
- **Pytanie:** Co widać w `7.11`, a nie w `7.1`?  
- **Opcje:** a) Powtórzoną cyfrę po separatorze · b) Inny poziom · c) Brak separatora  
- **Poprawna:** a  
- **correctTitle:** Tak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Oba mają poziom 7. W `7.11` po separatorze cyfra pojawia się dwa razy.  
- **Źródło:** E3

#### Z2 — `singleChoice` · 10
- **Kicker:** Krok 2 · Opis ze źródła  
- **Pytanie:** Jak materiał egzaminacyjny opisuje `7.11`?  
- **Opcje:**  
  - a) Poziom 7, intensywny lub podwójny refleks popielaty  
  - b) Poziom 11 bez refleksu  
  - c) Wyłącznie złoty kierunek  
- **Poprawna:** a  
- **correctTitle:** Zgodnie ze źródłem.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** W materiale: `7.11` — poziom 7, intensywny lub podwójny refleks popielaty. To opis tego przykładu, nie automatyczna reguła wszystkich marek.  
- **Źródło:** E3

#### Z3 — `trueFalse` · 15
- **Kicker:** Krok 3 · Mit  
- **Pytanie:** „Każda powtórzona cyfra po separatorze zawsze oznacza podwójny refleks u każdego producenta.”  
- **correctValue:** false  
- **correctTitle:** Dobrze.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Uczysz się przykładu `7.11` ze źródła. Zasady konkretnej marki zawsze sprawdzasz w jej legendzie.  
- **Źródło:** E3

#### Z4 — `matching` · 15
- **Kicker:** Krok 4 · Porównanie zapisów  
- **Pytanie:** Połącz zapis z opisem z materiału (przykłady źródłowe).  
- **Left:** `7.1` · `7.11`  
- **Right:** poziom 7, refleks popielaty · poziom 7, intensywny lub podwójny refleks popielaty  
- **correctTitle:** Tak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** `7.1` i `7.11` różnią się intensywnością / podwojeniem refleksu w opisie materiału — przy tym samym poziomie.  
- **Źródło:** E3

#### Z5 — `findError` · 25
- **Kicker:** Krok 5 · Znajdź błąd  
- **cardTitle:** Zdania  
- **rows:**  
  - s1: W przykładzie źródłowym `7.11` to intensywny lub podwójny refleks popielaty. *(OK)*  
  - s2: Przed pracą z marką sprawdzasz jej legendę. *(OK)*  
  - s3: Skoro znasz `7.11`, nie musisz sprawdzać legendy żadnej marki. *(BŁĄD)* → ["s3"]  
- **correctTitle:** Znalazłaś błąd.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Przykład z materiału pomaga zrozumieć zapis, ale nie zastępuje legendy producenta.  
- **Źródło:** E3

### Completion
- **title:** Rozpoznajesz przykład 7.11  
- **subtitle:** Wiesz, jak źródło opisuje intensywny lub podwójny refleks — i że marka wymaga legendy.  
- **Teaser:** Czas złożyć cały odczyt numeru krok po kroku.

### Zdanie do zapamiętania
W przykładzie źródłowym 7.11 to intensywny lub podwójny refleks popielaty — legendę marki i tak sprawdzasz.

### Grafika
Niepotrzebna.

### Źródła
E3

---

# N8 — Czytanie całego numeru krok po kroku

### 1. Tytuł
Czytanie całego numeru krok po kroku

### 2. Cel
Potrafię odczytać poziom, refleks główny i refleks dodatkowy.

### 3. Wiedza wymagana
N1–N7

### 4. Zakres
Synteza odczytu na przykładach E3: `7.1`, `7.13`, `7.31`, `7.11`. Ewentualnie sama konstrukcja bez legendy znaczeń dla innych cyfr.

### 5. Wyłączone
Nowe znaczenia cyfr · diagnoza · pełne legendy marek.

### 6. Punkt wyjścia
Kartka z numerem `7.13` — trzeba rozłożyć go na głos, zanim sięgnie po tubkę.

### 7–8. Intro i guide

**Intro:** Masz już części. Teraz złożysz je w jeden odczyt.

**Guide:**  
- `title`: Numer do rozłożenia  
- `text`: Spójrz na `7.13`. Nie podpowiadamy jeszcze kolejności pytań — najpierw sama wskażesz, od czego zacząć i co oznaczają kolejne części.  
*(Bez gotowego schematu „1. poziom 2. główny 3. dodatkowy” przed Z1.)*  
**Źródło:** E3

### Zadania

#### Z1 — `singleChoice` · 10
- **Kicker:** Krok 1 · Od czego zacząć  
- **Pytanie:** Chcesz odczytać jasność w `7.13`. Od której części zaczynasz?  
- **Opcje:** a) Od `7` · b) Od `1` · c) Od `3`  
- **Poprawna:** a  
- **correctTitle:** Tak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Jasność (poziom) odczytujesz z liczby przed separatorem. Potem patrzysz na refleks główny i ewentualnie dodatkowy.  
- **Źródło:** E3

#### Z2 — `ordering` · 10
- **Kicker:** Krok 2 · Kolejność odczytu  
- **Pytanie:** Ułóż sensowną kolejność odczytu numeru z dwiema cyframi po separatorze.  
- **steps:** odczytać poziom · odczytać refleks główny · odczytać refleks dodatkowy  
- **correctTitle:** Dobrze.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Najpierw poziom, potem refleks główny, na końcu dodatkowy — zgodnie z budową zapisu w materiale.  
- **Źródło:** E3  
- **Uwaga:** ordering = obiektywna kolejność odczytu ze źródła (nie kolejność diagnozy klientki).

#### Z3 — `matching` · 15
- **Kicker:** Krok 3 · Rozłóż `7.13`  
- **Pytanie:** Połącz część z rolą.  
- **Left:** `7` · `1` · `3`  
- **Right:** poziom · refleks główny · refleks dodatkowy  
- **correctTitle:** Dokładnie.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Z materiału: `7.13` = poziom 7 + główny refleks 1 + dodatkowy refleks 3.  
- **Źródło:** E3

#### Z4 — `singleChoice` · 15
- **Kicker:** Krok 4 · Inny zapis  
- **Pytanie:** Który odczyt `7.31` jest zgodny z materiałem?  
- **Opcje:**  
  - a) Poziom 7; głównie złoty, dodatkowo popielaty  
  - b) Poziom 3; tylko popiel  
  - c) Poziom 7; głównie popielaty, dodatkowo złoty  
- **Poprawna:** a  
- **correctTitle:** Tak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** `7.31` w materiale: poziom 7, głównie złoty, dodatkowo popielaty. Opcja z „głównie popielaty” dotyczy `7.13`.  
- **Źródło:** E3

#### Z5 — `findError` · 25
- **Kicker:** Krok 5 · Znajdź błąd  
- **cardTitle:** Odczyty  
- **rows:**  
  - s1: `7.1` — poziom 7, refleks popielaty (przykład źródłowy). *(OK)*  
  - s2: `7.11` — poziom 7, intensywny lub podwójny refleks popielaty (przykład źródłowy). *(OK)*  
  - s3: `7.13` — poziom odczytujesz z cyfry `3`. *(BŁĄD)* → ["s3"]  
- **correctTitle:** Znalazłaś błąd.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Poziom zawsze stoi przed separatorem. W `7.13` poziom to `7`, nie `3`.  
- **Źródło:** E3

### Completion
- **title:** Odczytujesz numer krok po kroku  
- **subtitle:** Poziom, refleks główny i dodatkowy — w tej kolejności analizy.  
- **Teaser:** Czy kropka, ukośnik i myślnik zmieniają sens poziomu?

### Zdanie do zapamiętania
Numer czytasz tak: poziom, potem refleks główny, potem dodatkowy — jeśli jest.

### Grafika
Niepotrzebna.

### Źródła
E3

---

# N9 — Separatory i nazwy stosowane przez marki

### 1. Tytuł
Separatory i nazwy stosowane przez marki

### 2. Cel
Rozpoznaję różne sposoby zapisu numeru farby.

### 3. Wiedza wymagana
N8

### 4. Zakres
Separatory `.` `/` `-`; przykłady `7.1`, `7/1`, `7-1`; Wella: głębokość / ton; Schwarzkopf: refleks dominujący / drugorzędny — tylko E3. Separator nie zmienia znaczenia poziomu.

### 5. Wyłączone
Pełne systemy marek · inne marki poza wspomnianymi · uniwersalne legendy cyfr.

### 6. Punkt wyjścia
Trzy etykiety z półki: `7.1`, `7/1`, `7-1`.

### 7–8. Intro i guide

**Intro:** Producenci zapisują numer różnymi znakami i słowami. Sprawdzisz, co zostaje wspólne.

**Guide:**  
- `title`: Trzy separatory  
- `text`: Obok siebie: `7.1`, `7/1`, `7-1`. Za chwilę wskażesz, co je łączy, a które nazwy materiału przypisuje Wellii i Schwarzkopfowi.  
**Źródło:** E3

### Zadania

#### Z1 — `matching` · 10
- **Kicker:** Krok 1 · Separatory  
- **Pytanie:** Połącz znak z przykładem zapisu.  
- **Left:** kropka · ukośnik · myślnik  
- **Right:** `7.1` · `7/1` · `7-1`  
- **correctTitle:** Tak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Materiał podaje trzy możliwe separatory: kropkę, ukośnik i myślnik — z takimi przykładami.  
- **Źródło:** E3

#### Z2 — `trueFalse` · 10
- **Kicker:** Krok 2 · Mit  
- **Pytanie:** „Gdy zamiast kropki użyjesz ukośnika, poziom automatycznie oznacza coś innego.”  
- **correctValue:** false  
- **correctTitle:** Dobrze.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Separator oddziela poziom od oznaczenia refleksu. Sam znak nie sprawia, że liczba przed nim przestaje być poziomem / głębokością w danym systemie.  
- **Źródło:** E3

#### Z3 — `matching` · 15
- **Kicker:** Krok 3 · Nazwy z materiału  
- **Pytanie:** Połącz markę z terminologią z materiału egzaminacyjnego.  
- **Left:** Wella · Schwarzkopf  
- **Right:** przed `/` głębokość, po `/` ton · pierwsza cyfra po separatorze: refleks dominujący, druga: drugorzędny  
- **correctTitle:** Zgodnie ze źródłem.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Tak opisuje je materiał egzaminacyjny — bez dodawania innych zasad marek.  
- **Źródło:** E3

#### Z4 — `singleChoice` · 15
- **Kicker:** Krok 4 · Wspólny układ  
- **Pytanie:** Co jest wspólne dla `7.1`, `7/1` i `7-1`?  
- **Opcje:**  
  - a) Ta sama konstrukcja: liczba przed separatorem i oznaczenie po nim  
  - b) Identyczna nazwa „refleks” u wszystkich marek świata  
  - c) Brak informacji o poziomie  
- **Poprawna:** a  
- **correctTitle:** Tak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Różny może być separator i słowa, ale układ części pozostaje: coś przed separatorem i coś po nim.  
- **Źródło:** E3

#### Z5 — `findError` · 25
- **Kicker:** Krok 5 · Znajdź błąd  
- **cardTitle:** Zdania  
- **rows:**  
  - s1: Separator może być kropką, ukośnikiem lub myślnikiem. *(OK)*  
  - s2: Wella w materiale: głębokość przed ukośnikiem, ton po nim. *(OK)*  
  - s3: Skoro znasz Wellę i Schwarzkopfa, znasz automatycznie legendę wszystkich marek. *(BŁĄD)* → ["s3"]  
- **correctTitle:** Znalazłaś błąd.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Materiał ostrzega, że oznaczeń nie przenosi się automatycznie między markami — każda ma swoją legendę.  
- **Źródło:** E3

### Completion
- **title:** Rozpoznajesz różne zapisy  
- **subtitle:** Separator i nazwy mogą się różnić — układ części i ostrożność wobec legendy zostają.  
- **Teaser:** Kiedy musisz otworzyć legendę producenta?

### Zdanie do zapamiętania
Separator może wyglądać różnie — nie zmienia to samego faktu rozdzielenia poziomu i refleksu.

### Grafika
Niepotrzebna.

### Źródła
E3

---

# N10 — Legenda producenta

### 1. Tytuł
Legenda producenta

### 2. Cel
Wiem, kiedy muszę sprawdzić legendę konkretnej marki.

### 3. Wiedza wymagana
N1–N9

### 4. Zakres
Zakaz automatycznego przenoszenia oznaczeń; przykład `.1` = popiel tylko w materiale E3; odrzucenie „zawsze”.

### 5. Wyłączone
Pełne legendy marek · `.2`/`.4`/`.5`… · diagnoza odrostu/siwizny (N13+).

### 6. Punkt wyjścia
Na jednej palecie `.1` opisano jako popiel. Na stanowisku pojawia się farba innego producenta.

### 7–8. Intro i guide

**Intro:** Znasz budowę numeru i przykłady ze źródła. Teraz sytuacja z dwiema markami.

**Guide:**  
- `title`: Ta sama cyfra, inna tubka  
- `text`: Na jednej palecie `.1` opisano jako popiel. Na stanowisku pojawia się farba innego producenta. Czy można bez sprawdzania uznać, że `.1` oznacza dokładnie to samo?  
*(Bez gotowej zasady „nie przenoś oznaczeń między markami” przed Z1 — reguła w feedbacku.)*  
**Źródło:** E3

### Zadania

#### Z1 — `trueFalse` · 10
- **Kicker:** Krok 1 · Mit  
- **Pytanie:** „`.1` zawsze oznacza popiel — u każdej marki, bez sprawdzania legendy.”  
- **correctValue:** false  
- **correctTitle:** Dobrze.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Nie. W materiale egzaminacyjnym `.1` oznacza popiel, ale znaczenie oznaczeń trzeba sprawdzać w legendzie konkretnego producenta. Oznaczeń nie przenosisz automatycznie między markami.  
- **Źródło:** E3

#### Z2 — `singleChoice` · 10
- **Kicker:** Krok 2 · Co robić  
- **Pytanie:** Sięgasz po tubkę nieznanej Ci marki. Co robisz z oznaczeniem refleksu?  
- **Opcje:**  
  - a) Sprawdzasz legendę tego producenta  
  - b) Kopiujesz znaczenie z przykładu `7.1` i kończysz temat  
  - c) Ignorujesz cyfry po separatorze  
- **Poprawna:** a  
- **correctTitle:** Tak.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Przykłady z materiału pomagają zrozumieć budowę zapisu. Znaczenie cyfr w pracy salonowej bierzesz z legendy marki, którą masz w ręku.  
- **Źródło:** E3

#### Z3 — `findError` · 15
- **Kicker:** Krok 3 · Znajdź błąd  
- **cardTitle:** Zdania  
- **rows:**  
  - s1: W przykładzie źródłowym `7.1` ma refleks popielaty. *(OK)*  
  - s2: Numerów refleksów nie przenosisz automatycznie między markami. *(OK)*  
  - s3: Skoro 1 bywa popielem w przykładzie, 4 zawsze jest miedzią u wszystkich. *(BŁĄD)* → ["s3"]  
- **correctTitle:** Znalazłaś błąd.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Nawet jeśli materiał wspomina, że pewne cyfry „często” coś oznaczają, nie budujesz z tego uniwersalnej legendy bez sprawdzenia producenta.  
- **Źródło:** E3

#### Z4 — `matching` · 15
- **Kicker:** Krok 4 · Dwie szuflady  
- **Pytanie:** Połącz stwierdzenie z właściwą szufladą.  
- **Left:** „W przykładzie E3 `.1` = popiel” · „Przed zabiegiem otwieram legendę marki X”  
- **Right:** przykład szkoleniowy ze źródła · obowiązek przy konkretnym produkcie  
- **correctTitle:** Dokładnie.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Jedna szuflada to przykład do nauki budowy numeru. Druga — realna praca z tubką i legendą producenta.  
- **Źródło:** E3

#### Z5 — `singleChoice` · 25
- **Kicker:** Krok 5 · Podsumowanie modułu odczytu  
- **Pytanie:** Które zdanie najlepiej zamyka naukę odczytu numeru?  
- **Opcje:**  
  - a) Znam budowę numeru i przykłady ze źródła; znaczenia cyfr w salonie sprawdzam w legendzie marki.  
  - b) Znam już pełną legendę wszystkich producentów na pamięć.  
  - c) Wystarczy zapamiętać, że `.1` zawsze jest popielem.  
- **Poprawna:** a  
- **correctTitle:** To właściwe domknięcie.  
- **incorrectTitle:** Sprawdź jeszcze raz.  
- **explanation:** Odczytujesz poziom i refleksy według budowy zapisu. Przykłady ze źródła nie zastępują legendy producenta.  
- **Źródło:** E3

### Completion
- **title:** Wiesz, kiedy otworzyć legendę  
- **subtitle:** Przykład ze źródła nie jest automatyczną regułą wszystkich marek.  
- **Teaser (przejście do N11):**  
  Znasz już części numeru i wiesz, dlaczego legenda producenta ma znaczenie. Teraz czas utrwalić samą skalę poziomów i nauczyć się sprawnie porównywać ich jasność.  
  *(Bez diagnozy odrostu ani siwizny.)*

### Zdanie do zapamiętania
Oznaczeń refleksów nie przenosisz automatycznie między markami — sprawdzasz legendę producenta.

### Grafika
Niepotrzebna.

### Źródła
E3

### Kontrola
Zamyka odczyt numeru; teaser prowadzi do N11 (praktyka skali), nie do N13.

---

## Spójność z N11–N20

- N10 → N11: odczyt numeru + legenda → praktyczne utrwalanie poziomów.  
- N3 wprowadza skalę; N11 ćwiczy ją intensywniej.  
- Diagnoza koloru / siwizna / odrost — dopiero N13+.  
- Te same ograniczenia silnika i styl feedbacku.

---

*Pierwsza pełna wersja N1–N10. Bez JSON, bez zmian kodu, bez zmian N11–N20, bez commita/pusha.*
