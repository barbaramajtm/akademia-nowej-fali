# Scenariusze lekcji — „Włos, wiązania i zmiana kształtu”

Stan: **22 lipca 2026**.  
Dokument gotowy do późniejszej implementacji JSON (**nie implementować w tym etapie**).  
Źródła i grafiki: [`WLOS_WIAZANIA_KSZTALT_SOURCES.md`](WLOS_WIAZANIA_KSZTALT_SOURCES.md), [`WLOS_WIAZANIA_KSZTALT_GRAPHICS.md`](WLOS_WIAZANIA_KSZTALT_GRAPHICS.md).

**Filozofia flow (każda lekcja):** problem / obserwacja → próba odpowiedzi → wyjaśnienie (feedback + krótki guide) → zastosowanie.  
Intro **bez spoilera** mechanizmu. Guide nie powtarza dosłownie odpowiedzi do zadań.

**Silnik:** `singleChoice` · `trueFalse` · `matching` · `ordering` · `findError`  
**Punkty bazowe:** 10 + 10 + 15 + 15 + 25  
**category:** `Włos, wiązania i zmiana kształtu`

---

## Mapa szybkiego podglądu

| # | id | Tytuł |
|---|----|-------|
| 1 | `wlos-ksztalt-co-utrzymuje` | Co utrzymuje kształt włosa? |
| 2 | `wlos-ksztalt-wodorowe` | Wiązania wodorowe |
| 3 | `wlos-ksztalt-wilgoc-cieplo` | Wilgoć, ciepło i modelowanie |
| 4 | `wlos-ksztalt-skret-po-walkach` | Skręt po wałkach |
| 5 | `wlos-ksztalt-siarkowe` | Wiązania siarkowe |
| 6 | `wlos-ksztalt-redukcja-utrwalenie` | Redukcja i utrwalenie |
| 7 | `wlos-ksztalt-czasowa-czy-chemiczna` | Czasowa czy chemiczna? |

`requiresLessonId`: L1 ← `wlos-keratyna-rusztowanie`; dalej łańcuch L1→L2→…→L7.

---

# Lekcja 1 — Co utrzymuje kształt włosa?

### Metadane

| Pole | Wartość |
|------|---------|
| **id** | `wlos-ksztalt-co-utrzymuje` |
| **Tytuł** | Co utrzymuje kształt włosa? |
| **Jedna główna myśl** | Kształt włosa utrzymują wiązania w strukturze keratyny — nie sam lakier i nie „magiczna pamięć”. |
| **Cel dydaktyczny** | Uczennica łączy znaną keratynę z faktem, że o kształcie decydują wiązania wewnątrz struktury włosa; rozróżnia „utrwalenie fryzury kosmetykiem” od zmiany we włosie. |
| **Rodzaj wiedzy** | Zrozumienie + most do faktów |
| **levelLabel** | Podstawy |
| **Wymagania** | `wlos-keratyna-rusztowanie` |
| **Czas** | ~4 min |

### INTRO (hook bez spoilera)

- **narratorText:** Klientka wraca po tygodniu: „Wczoraj miałam piękne fale, a po umyciu głowy zniknęły. Czy włos w ogóle potrafi utrzymać kształt?” Dziś szukasz odpowiedzi we włosie — nie w półce z lakierami.
- **stakeText:** do 75 Kosmyków
- **startButtonLabel:** Zacznij lekcję

### CZĘŚĆ EDUKACYJNA (po Z1 w intencji dydaktycznej; w silniku: guide krótki, bez odpowiedzi do Z1)

**hairGuide** (minimalny, nie-spoilujący):

- **title:** Kształt siedzi w strukturze
- **text:** Keratynę znasz jako rusztowanie włosa. Rusztowanie trzyma kształt dzięki połączeniom wewnątrz struktury — nazywamy je wiązaniami. Różne wiązania reagują na różne rzeczy: wodę, ciepło albo chemię.
- **note:** Na razie nie rozstrzygamy jeszcze, które wiązanie odpowiada za trwałą ondulację — do tego dojdziesz w kolejnych lekcjach.
- **imageSrc:** `assets/images/hair-fibrous-keratin.png`
- **imageAlt:** Przypomnienie: spirale peptydowe tworzą keratynę włóknistą — rusztowanie włosa.
- **imageCaption:** Keratyna buduje włókna. Kształt zależy od tego, jak te włókna są powiązane.
- **continueLabel:** Dalej

*Uwaga implementacyjna:* jeśli guide musi być przed Z1, zostawić powyższy tekst (nie wymienia H vs S ani „znika po myciu”). Pełne domknięcie w feedbackach.

### GRAFIKA

- **Status:** `ISTNIEJĄCA — UŻYĆ PONOWNIE`
- **Ścieżka:** `assets/images/hair-fibrous-keratin.png`
- **Co przedstawia:** Keratyna włóknista ze spiral peptydowych
- **Gdzie:** GUIDE
- **Po co:** Most do znanej keratyny — kształt = struktura, nie nowa definicja białka
- **Wcześniej:** tak — `wlos-keratyna-rusztowanie`
- **Crop:** opcjonalny (liście/serca wg ILLUSTRATION_GUIDE) — nie blokuje scenariusza; przy publikacji rozważyć crop jak przy innych planszach etapu 1

### Zadania

#### Z1 — singleChoice · Krok 1 · Obserwacja

**question:** Klientka mówi, że fale zrobione w salonie zniknęły po umyciu głowy. Co to sugeruje o utrzymaniu kształtu?

**options:**
- a) Kształt fryzury zawsze zależy wyłącznie od lakieru na powierzchni
- b) We włosie musiało dojść do zmiany, która nie przetrwała kontaktu z wodą
- c) Keratyna rozpuszcza się w wodzie przy każdym myciu

**correctOptionId:** b  

**feedback:**
- correctTitle: Dobry trop.
- incorrectTitle: Spójrz jeszcze raz.
- explanation: Skoro mycie znosi efekt, chodzi o zmianę we włosie wrażliwą na wodę — nie o „zniknięcie keratyny” i nie o sam lakier. W kolejnych krokach zobaczysz, co dokładnie to utrzymuje.

#### Z2 — trueFalse · Krok 2 · Mit

**question:** Kształt włosa utrzymuje wyłącznie to, co nałożysz na powierzchnię — wewnątrz włosa nic nie „trzyma” ułożenia.

**trueLabel:** Prawda · **falseLabel:** Mit · **correctValue:** false

**feedback:**
- correctTitle: To mit.
- incorrectTitle: Sprawdź jeszcze raz.
- explanation: Keratyna tworzy rusztowanie, a połączenia w tej strukturze — wiązania — decydują, czy kształt zostanie. Preparaty powierzchniowe pomagają, ale nie zastępują tego, co dzieje się w strukturze.

#### Z3 — matching · Krok 3 · Co do czego?

**question:** Dopasuj sytuację do tego, czego dotyczy.

**left:**
- l1 / a — Fale znikają po umyciu
- l2 / b — Keratyna we włosie
- l3 / c — Lakier na gotowej fryzurze

**right:**
- r1 / b — Rusztowanie białkowe włókien
- r2 / a — Zmiana we włosie wrażliwa na wodę
- r3 / c — Utrwalenie powierzchniowe ułożenia

**feedback:**
- correctTitle: Role rozdzielone.
- incorrectTitle: Sprawdź pary.
- explanation: Keratyna to budulec. Znikające fale wskazują na zmianę we włosie. Lakier działa na powierzchni — to inna rola niż wiązania w strukturze.

#### Z4 — singleChoice · Krok 4 · Salon

**question:** Jak krótko wyjaśnisz klientce, dlaczego w ogóle rozmawiacie o „tym, co wewnątrz włosa”, a nie tylko o kosmetykach do stylizacji?

**options:**
- a) Bo kolor farby siedzi w wiązaniach i zawsze zmywa się wodą
- b) Bo to wiązania w strukturze keratyny utrzymują kształt — kosmetyk tylko wspiera efekt
- c) Bo rdzeń włosa magazynuje lakier na wiele myć

**correctOptionId:** b

**feedback:**
- correctTitle: Jasny komunikat.
- incorrectTitle: Inaczej.
- explanation: Klientce mówisz prosto: kształt trzyma struktura włosa. W kolejnych lekcjach zobaczysz, że różne wiązania reagują inaczej — stąd różne zabiegi.

#### Z5 — findError · Krok 5 · Znajdź błąd

**question:** Które stwierdzenie jest błędne?

**cardTitle:** Kształt włosa  
**rows:**
- s1: Keratyna buduje rusztowanie włókien we włosie
- s2: Wiązania w strukturze keratyny mają znaczenie dla utrzymania kształtu
- s3: Po każdym umyciu keratyna znika z włosa i trzeba ją wbudować od zera lakierem

**correctOptionIds:** ["s3"]

**feedback:**
- correctTitle: Błąd wyłapany.
- incorrectTitle: Jeszcze raz.
- explanation: Keratyna nie „znika przy myciu”. Mycie może znieść **czasową** zmianę kształtu — ale to temat wiązań wrażliwych na wodę, nie utraty całego rusztowania.

### Completion

- **solvedLabel:** Sprawa domknięta
- **title:** Kształt siedzi w strukturze włosa
- **subtitle:** „Czyli nie tylko lakier… to ma sens.”
- **nextLesson.teaser:** Następny krok: które wiązania reagują na wilgoć i ciepło przy modelowaniu?

### Źródła lekcji 1

| Fragment | Źródło | Status |
|----------|--------|--------|
| Keratyna = rusztowanie | `wlos-keratyna-rusztowanie`; Mat. skład / pierwiastki | OK (powrót) |
| Zmiana kształtu wrażliwa na wodę / modelowanie | Tech. pyt. 6, 18 (wstęp bez pełnych nazw w intro) | OK |
| Trwała zmiana vs powierzchnia | Tech. 10 (teaser, bez procedury) | OK |

### Interleaving

Keratyna, kora (implicit), mycie — bez numeracji i bez skali pH.

---

# Lekcja 2 — Wiązania wodorowe

### Metadane

| Pole | Wartość |
|------|---------|
| **id** | `wlos-ksztalt-wodorowe` |
| **Tytuł** | Wiązania wodorowe |
| **Jedna główna myśl** | Wiązania wodorowe (mostki wodorowe) łączą elementy struktury keratyny między atomami tlenu i wodoru — to one wchodzą w grę przy modelowaniu. |
| **Cel** | Nazwać i rozpoznać wiązania wodorowe; odróżnić je od „czegokolwiek chemicznego na trwałe”. |
| **levelLabel** | Podstawy |
| **Wymagania** | L1 |

### INTRO

- **narratorText:** Przy układaniu fryzury coś we włosie „puszcza” i układa się inaczej — a potem potrafi wrócić. Dziś przyjrzysz się jednemu rodzajowi połączeń w strukturze.
- **stakeText:** do 75 Kosmyków
- **startButtonLabel:** Zacznij lekcję

### GUIDE

- **title:** Mostki w strukturze
- **text:** Spójrz na planszę: widać połączenia oznaczone przy atomach w spirali keratyny. To wiązania wodorowe — nazywane też mostkami wodorowymi. Za chwilę sprawdzisz, co z czym się łączy i po co Ci ta nazwa w salonie.
- **imageSrc:** `assets/images/hair-hydrogen-bonds.png` *(po cropie dekoracji — patrz GRAPHICS)*
- **imageAlt:** Schemat mostków wodorowych w strukturze włókna keratynowego.
- **imageCaption:** Mostki wodorowe w uproszczonym schemacie struktury.
- **note:** Plansza jest uproszczeniem dydaktycznym. Pełne zdanie o atomach domkniesz w feedbacku po pierwszej decyzji.
- **continueLabel:** Dalej

### GRAFIKA

- **Status:** `ISTNIEJĄCA — WYMAGA CROPU`
- **Ścieżka:** `assets/images/hair-hydrogen-bonds.png`
- **Co:** Spirala + mostki O–H; napis „Mostki wodorowe”
- **Gdzie:** GUIDE
- **Po co:** Dual coding — nazwa + obraz mostka
- **Wcześniej:** przygotowana, **nieużywana** jeszcze w opublikowanych lekcjach JSON
- **Crop:** usunąć / zasłonić liście, serce, gwiazdki (ILLUSTRATION_GUIDE). **Nie tworzyć nowej merytoryki.**
- **Uwaga crop/caption:** jeśli po cropie zostaje napis „powstają między atomami tlenu i wodoru”, Z1 nie może być czystym odczytem tego zdania — patrz treść Z1 poniżej (oparta o zastosowanie, nie o przepisanie podpisu).

### Zadania

#### Z1 — singleChoice · Krok 1 · Co to za mostki?

**question:** Wiązania wodorowe we włosie to mostki w strukturze keratyny. Który opis jest zgodny z ich charakterem?

**options:**
- a) Łączą w strukturze elementy związane z tlenem i wodorem — to nie mostki „z siarki” i nie pigment
- b) To to samo co melanina w korze
- c) To numer farby zapisany na tubce

**correctOptionId:** a

**feedback:**
- correctTitle: Tak — O i H w strukturze.
- incorrectTitle: To nie pigment ani numer farby.
- explanation: Mostki wodorowe powstają między atomami tlenu i wodoru w strukturze. Siarka wróci przy innym rodzaju wiązań. Pigment i numer farby to inne działy.

#### Z2 — trueFalse · Krok 2 · Nazwa

**question:** „Wiązania wodorowe” i „mostki wodorowe” w praktyce fryzjerskiej oznaczają ten sam rodzaj połączeń istotnych przy modelowaniu.

**correctValue:** true

**feedback:**
- correctTitle: Ta sama idea.
- incorrectTitle: Jeszcze raz.
- explanation: Źródła i plansze używają obu nazw. Ważne, żebyś wiedziała, o jaki mechanizm chodzi przy układaniu fryzury.

#### Z3 — matching · Krok 3 · Nie pomyl

**question:** Dopasuj pojęcie do opisu.

**left:**
- l1 / a — Wiązania wodorowe
- l2 / b — Keratyna
- l3 / c — Melanina (przypomnienie)

**right:**
- r1 / b — Białkowe rusztowanie włókien
- r2 / a — Mostki między tlenem a wodorem w strukturze
- r3 / c — Barwnik w korze (nie utrzymuje kształtu fryzury)

**feedback:**
- correctTitle: Czyste rozróżnienie.
- incorrectTitle: Sprawdź pary.
- explanation: Keratyna buduje. Wiązania wodorowe łączą w tej strukturze. Melanina to kolor — inna funkcja (wrócisz do niej przy kolorze, nie tu).

#### Z4 — singleChoice · Krok 4 · Kontekst

**question:** Po co fryzjerce w ogóle nazwa „wiązania wodorowe”?

**options:**
- a) Żeby opisać, które połączenia zmieniają się przy modelowaniu z wilgocią i ciepłem
- b) Żeby dobrać numer farby do odrostu
- c) Żeby zmierzyć pH szamponu bez paska

**correctOptionId:** a

**feedback:**
- correctTitle: Po to jest ta nazwa.
- incorrectTitle: Inny dział.
- explanation: Numer farby i pH to inne moduły. Tu uczysz się, które wiązania wchodzą w grę, gdy układasz włos.

#### Z5 — findError · Krok 5 · Mit

**question:** Które stwierdzenie jest błędne?

**rows:**
- s1: Mostki wodorowe powstają między atomami tlenu i wodoru
- s2: Wiązania wodorowe są tym samym, co pigment w korze
- s3: Przy modelowaniu fryzjerka pracuje m.in. na wiązaniach wodorowych

**correctOptionIds:** ["s2"]

**feedback:**
- correctTitle: Mit odfiltrowany.
- incorrectTitle: Znajdź inny błąd.
- explanation: Pigment ≠ wiązania. Mostki wodorowe to połączenia w strukturze keratyny — kluczowe przy modelowaniu.

### Completion

- **title:** Znasz wiązania wodorowe
- **subtitle:** „To te mostki między tlenem a wodorem…”
- **teaser:** Co dokładnie robią z nimi wilgoć i ciepło przy układaniu?

### Źródła

| Fragment | Źródło | Status |
|----------|--------|--------|
| Mostki O–H / nazwa | Plansza; Tech. 6, 18 | OK |
| Modelowanie | Tech. 6 | OK |

---

# Lekcja 3 — Wilgoć, ciepło i modelowanie

### Metadane

| Pole | Wartość |
|------|---------|
| **id** | `wlos-ksztalt-wilgoc-cieplo` |
| **Tytuł** | Wilgoć, ciepło i modelowanie |
| **Jedna główna myśl** | Podczas modelowania zachodzi **czasowa** zmiana wiązań wodorowych pod wpływem wilgoci i ciepła. |
| **Cel** | Połączyć modelowanie z mechanizmem H; odróżnić od trwałej chemii. |
| **levelLabel** | Modelowanie |
| **Wymagania** | L2 |

### INTRO

- **narratorText:** Suszarka, szczotka, wilgotny włos — klasyka salonu. Klientka pyta: „Dlaczego właśnie teraz włos daje się ułożyć?” Szukasz mechanizmu, nie magii narzędzia.
- **stakeText:** do 75 Kosmyków
- **startButtonLabel:** Zacznij lekcję

### GUIDE

- **title:** Narzędzia to nie cały mechanizm
- **text:** Suszarka i szczotka zmieniają warunki wokół włosa: pojawia się wilgoć i ciepło. Za chwilę zdecydujesz, *co* we włosie reaguje na te warunki — i czy to ta sama liga co trwała chemiczna.
- **image:** NIEPOTRZEBNA (grafika H była w L2 — nie dublować)
- **continueLabel:** Dalej  
  *Jeśli silnik wymaga image: `ISTNIEJĄCA — UŻYĆ PONOWNIE` `hair-hydrogen-bonds.png`, caption bez odpowiedzi do Z1: „Mostki, które reagują przy układaniu.”*

### GRAFIKA

- **Status:** `NIEPOTRZEBNA` (preferowane) **albo** `ISTNIEJĄCA — UŻYĆ PONOWNIE` (`hair-hydrogen-bonds.png`, GUIDE) jeśli UI wymaga obrazu
- **Nowa:** nie

### Zadania

#### Z1 — singleChoice · Krok 1 · Hipoteza

**question:** Przy modelowaniu włos daje się przeformować, gdy pracujesz z wilgocią i ciepłem. Co najtrafniej opisuje to, co dzieje się *we włosie*?

**options:**
- a) Zachodzi czasowa zmiana wiązań wodorowych
- b) Numer farby na tubce przestawia się o dwa tony
- c) Melanina wypłukuje się z kory od samego ciepła suszarki

**correctOptionId:** a

**feedback:**
- correctTitle: Trafiony mechanizm.
- incorrectTitle: To nie farba ani melanina.
- explanation: Podczas modelowania wilgoć i ciepło powodują czasową zmianę wiązań wodorowych. To nie zabieg koloryzacyjny i nie „wypalanie pigmentu” suszarką.

#### Z2 — trueFalse · Krok 2 · Liga zabiegu

**question:** Czasowa zmiana wiązań wodorowych przy modelowaniu to to samo, co rozrywanie wiązań siarkowych w trwałej ondulacji.

**correctValue:** false

**feedback:**
- correctTitle: To mit — dwie ligi.
- incorrectTitle: Nie mieszaj zabiegów.
- explanation: Modelowanie = czasowa zmiana wiązań H. Trwała chemiczna rusza wiązania siarkowe. Inny mechanizm, inna trwałość.

#### Z3 — ordering · Krok 3 · Przebieg w salonie

**question:** Ułóż sensowną kolejność typowego modelowania z udziałem wilgoci i ciepła.

**items (correct order):**
1. Pracujesz z włosem wilgotnym (lub nawilżonym w procesie układania)
2. Formujesz kształt (szczotka, wałki, palce…)
3. Suszysz / działasz ciepłem, żeby utrwalić ułożenie na teraz

**feedback:**
- correctTitle: Logiczny przebieg.
- incorrectTitle: Przestaw kolejność.
- explanation: Najpierw warunki wilgoci, potem kształt, potem ciepło i dokładne wysuszenie. O trwałości ułożenia decydują też technika i preparaty do ondulacji wodnej — a o tym, co zniesie mycie, mówisz uczciwie klientce.

#### Z4 — matching · Krok 4 · Salon vs mit

**question:** Dopasuj.

**left:**
- l1 / a — Modelowanie
- l2 / b — Czasowa zmiana wiązań H
- l3 / c — Sam lakier bez pracy na włosie

**right:**
- r1 / b — Efekt wilgoci i ciepła we włosie
- r2 / a — Przeformowanie fryzury w salonie
- r3 / c — Wsparcie powierzchniowe, nie mechanizm wiązań H

**feedback:**
- correctTitle: Dobrze rozdzielone.
- incorrectTitle: Pomyłka ról.
- explanation: Modelowanie pracuje na wiązaniach wodorowych. Lakier może pomóc utrzymać ułożenie z zewnątrz, ale nie zastępuje opisu mechanizmu z wilgocią i ciepłem.

#### Z5 — findError · Krok 5 · Pułapka

**question:** Które stwierdzenie jest błędne?

**rows:**
- s1: Przy modelowaniu wilgoć i ciepło wpływają na wiązania wodorowe
- s2: Zmiana wiązań wodorowych przy modelowaniu jest opisana jako czasowa
- s3: Sam lakier na powierzchni zawsze zastępuje pracę wilgoci i ciepła na wiązaniach wodorowych — mechanizm jest identyczny

**correctOptionIds:** ["s3"]

**feedback:**
- correctTitle: Lakier ≠ mechanizm H.
- incorrectTitle: Znajdź mylenie ról.
- explanation: Lakier może wspierać ułożenie z zewnątrz. Mechanizm modelowania z materiałów to czasowa zmiana wiązań wodorowych pod wpływem wilgoci i ciepła — tego lakier nie „jest”.

### Completion

- **title:** Wiesz, co robią wilgoć i ciepło
- **subtitle:** „Dlatego włos daje się ułożyć — czasowo.”
- **teaser:** A co ze skrętem po wałkach, gdy klientka umyje głowę?

### Źródła

| Fragment | Źródło | Status |
|----------|--------|--------|
| Wilgoć + ciepło → czasowa zmiana H | Tech. 6 | OK |
| Trwałość ułożenia / wysuszenie / technika | Mat. 19 | OK (wsparcie) |

### Interleaving

Lekkkie odróżnienie od wiązań siarkowych (bez procedury trwałej).

---

# Lekcja 4 — Skręt po wałkach

### Metadane

| Pole | Wartość |
|------|---------|
| **id** | `wlos-ksztalt-skret-po-walkach` |
| **Tytuł** | Skręt po wałkach |
| **Jedna główna myśl** | Po wyschnięciu włosy utrzymują skręt z wałków, ale jest on nietrwały i znika po zmoczeniu — bo zmiana dotyczyła wiązań wodorowych. |
| **Cel** | Wyjaśnić klientce / sobie, dlaczego lok z modelowania „nie przeżywa” mycia. |
| **levelLabel** | Modelowanie |
| **Wymagania** | L3 |

### INTRO

- **narratorText:** Wałki zdjęte, skręt ładny, klientka zadowolona. Dwa dni później: „Umyłam głowę i loków jak nie było.” Co się stało we włosie — i co jej odpowiesz bez ściemy?
- **stakeText:** do 75 Kosmyków
- **startButtonLabel:** Zacznij lekcję

### GUIDE

- **title:** Po wałkach wraca pytanie o mycie
- **text:** Znasz już wilgoć, ciepło i wiązania wodorowe. Teraz domykasz praktyczny skutek: co klientka zobaczy po wysuszeniu — i co może się stać po zmoczeniu.
- **Grafika:** `NIEPOTRZEBNA` — mechanizm domykają zadania + feedback (bez wykładu-spoilera przed Z1).

### GRAFIKA

- **Status:** `NIEPOTRZEBNA`
- **Uzasadnienie:** Tech. 18 to fakt procesowy; brak lokalnej ilustracji wałków dydaktycznej; nie generujemy nowej. Ewentualnie ponownie H-bonds jako UŻYĆ PONOWNIE — niekonieczne.

### Zadania

#### Z1 — singleChoice · Krok 1 · Obserwacja

**question:** Klientka ma ładny skręt zaraz po zdjęciu wałków i wysuszeniu. Po umyciu głowy skręt znika. Która interpretacja jest zgodna z mechanizmem?

**options:**
- a) Skręt był nietrwały — zmiana wiązań wodorowych cofa się po zmoczeniu
- b) Wałki na stałe zamieniły pigment w korze
- c) Keratyna została wypłukana w całości szamponem

**correctOptionId:** a

**feedback:**
- correctTitle: Trafiona interpretacja.
- incorrectTitle: Inny mechanizm.
- explanation: Po wyschnięciu skręt się trzyma, ale jest nietrwały i znika po zmoczeniu — bo chodziło o wiązania wodorowe, nie o wymianę pigmentu ani „wypłukanie keratyny”.

#### Z2 — trueFalse · Krok 2 · Po wyschnięciu

**question:** Po wyschnięciu włosy mogą utrzymywać skręt uzyskany na wałkach.

**correctValue:** true

**feedback:**
- correctTitle: Tak — na teraz.
- incorrectTitle: Jeszcze raz.
- explanation: Skręt po wyschnięciu jest realny. Problem zaczyna się przy kolejnym mocnym kontakcie z wodą — wtedy wraca temat nietrwałości.

#### Z3 — matching · Krok 3 · Przyczyna → skutek

**question:** Dopasuj.

**left:**
- l1 / a — Wilgoć i ciepło przy wałkach
- l2 / b — Wysuszenie na wałkach
- l3 / c — Zmoczenie później

**right:**
- r1 / b — Utrzymanie skrętu na teraz
- r2 / a — Zmiana wiązań wodorowych
- r3 / c — Zanik nietrwałego skrętu

**feedback:**
- correctTitle: Łańcuch domknięty.
- incorrectTitle: Sprawdź skutki.
- explanation: Wilgoć i ciepło zmieniają wiązania H → po wyschnięciu skręt stoi → po zmoczeniu nietrwały efekt schodzi.

#### Z4 — singleChoice · Krok 4 · Rozmowa z klientką

**question:** Jak uczciwie zapowiesz efekt wałków / modelowania?

**options:**
- a) „To ten sam efekt co trwała ondulacja — mycie nic nie zmieni.”
- b) „Skręt utrzyma się po wysuszeniu, ale po zmoczeniu może zejść — to zmiana czasowa.”
- c) „Skręt znika tylko wtedy, gdy użyjesz złego numeru farby.”

**correctOptionId:** b

**feedback:**
- correctTitle: Uczciwa zapowiedź.
- incorrectTitle: Obietnica za duża.
- explanation: Klientka zasługuje na jasność: to nie trwała chemiczna. Mycie / zmoczenie znosi nietrwały skręt z wiązań wodorowych.

#### Z5 — findError · Krok 5 · Egzaminowy mit

**question:** Które stwierdzenie jest błędne?

**rows:**
- s1: Wilgoć i ciepło powodują zmianę wiązań wodorowych przy uzyskiwaniu skrętu
- s2: Po wyschnięciu skręt może się utrzymywać
- s3: Skręt z wałków jest trwały chemicznie i nigdy nie znika po zmoczeniu

**correctOptionIds:** ["s3"]

**feedback:**
- correctTitle: Mit obalony.
- incorrectTitle: To nie trwała chemiczna.
- explanation: Źródła mówią wprost: skręt jest nietrwały i znika po zmoczeniu. Trwałość chemiczną ogarniesz przy wiązaniach siarkowych.

### Completion

- **title:** Umiesz wyjaśnić znikający lok
- **subtitle:** „A myślałam, że wałki psują się w domu…”
- **teaser:** Które wiązania trzeba ruszyć, żeby kształt został na dłużej?

### Źródła

| Fragment | Źródło | Status |
|----------|--------|--------|
| Cały mechanizm skrętu | Tech. 18 | OK |
| Trwałość ułożenia (wysuszenie, technika) | Mat. 19 | OK wsparcie |

---

# Lekcja 5 — Wiązania siarkowe

### Metadane

| Pole | Wartość |
|------|---------|
| **id** | `wlos-ksztalt-siarkowe` |
| **Tytuł** | Wiązania siarkowe |
| **Jedna główna myśl** | Wiązania siarkowe (mostki siarczkowe) w keratynie są kluczowe dla trwałej zmiany kształtu — to nie te same mostki co przy modelowaniu. |
| **Cel** | Nazwać wiązania S; połączyć z siarką w keratynie (interleaving); odróżnić od H. |
| **levelLabel** | Zabiegi |
| **Wymagania** | L4 |

### INTRO

- **narratorText:** Klientka chce loki, „żeby zostały po myciu”. Wiesz już, że wałki z samą wodą i ciepłem tego nie gwarantują. Dziś wchodzisz w inny rodzaj połączeń w keratynie.
- **stakeText:** do 75 Kosmyków
- **startButtonLabel:** Zacznij lekcję

### GUIDE

- **title:** Inne mostki — inna stawka
- **text:** Gdy efekt ma przeżyć mycie, modelowanie na wiązaniach wodorowych przestaje wystarczać. W keratynie są też wiązania siarkowe (mostki siarczkowe). Za chwilę połączysz je z trwałą zmianą kształtu i z tym, co robi kwas tioglikolowy.
- **Grafika:** **NOWA GRAFIKA — DO AKCEPTACJI** (schemat mostków S / porównanie H vs S). Do czasu akceptacji: GUIDE bez obrazu albo tekst-only `scaleGuide`.
- *Pełne zdanie o uwodornianiu mostków — we feedbacku Z4 (odkrywanie), nie jako spoiler w guide.*

### GRAFIKA

- **Status:** `NOWA GRAFIKA — DO AKCEPTACJI`
- **Propozycja nazwy pliku:** `assets/images/hair-sulfur-bonds.png` (po akceptacji)
- **Co ma przedstawiać:** Uproszczony schemat mostków siarczkowych w keratynie (połączenia z udziałem siarki) + krótki podpis, że to wiązania kluczowe dla trwałej zmiany kształtu. **Bez** liści/serc. Opcjonalnie dyskretne porównanie „H = modelowanie / S = trwała”.
- **Gdzie:** GUIDE
- **Dlaczego istniejące nie wystarczą:** `hair-hydrogen-bonds.png` pokazuje tylko O–H; `wlos-ph.jpg` pokazuje osłonkę; keratyna włóknista nie nazywa mostków S.
- **NIE GENEROWAĆ w tym etapie.**

### Zadania

#### Z1 — singleChoice · Krok 1 · Rozróżnienie

**question:** Które wiązania są kluczowe, gdy mówimy o trwałej chemicznej zmianie kształtu (nie o zwykłym modelowaniu)?

**options:**
- a) Wiązania siarkowe (mostki siarczkowe)
- b) Wyłącznie wiązania wodorowe
- c) Wiązania „numeru farby” na opakowaniu

**correctOptionId:** a

**feedback:**
- correctTitle: Siarkowe.
- incorrectTitle: To nie modelowanie.
- explanation: Przy trwałej w grę wchodzą wiązania siarkowe. Wodorowe ogarniasz przy wilgoci i cieple — inna liga trwałości.

#### Z2 — trueFalse · Krok 2 · Siarka

**question:** Siarka należy do pierwiastków składających włos i łączy się z tematem mostków siarczkowych w keratynie.

**correctValue:** true

**feedback:**
- correctTitle: Spójne z keratyną.
- incorrectTitle: Wróć do pierwiastków.
- explanation: Już przy keratynie pojawiała się siarka. Mostki siarczkowe w keratynie to właśnie most, który łączy budowę włosa z trwałą zmianą kształtu.

#### Z3 — matching · Krok 3 · H vs S

**question:** Dopasuj wiązanie do typowej sytuacji.

**left:**
- l1 / a — Wiązania wodorowe
- l2 / b — Wiązania siarkowe
- l3 / c — Lakier na gotowej fryzurze

**right:**
- r1 / b — Trwała chemiczna zmiana kształtu
- r2 / a — Modelowanie: wilgoć i ciepło
- r3 / c — Utrwalenie powierzchniowe ułożenia

**feedback:**
- correctTitle: Dwie ligi + powierzchnia.
- incorrectTitle: Pomyłka ligi.
- explanation: H → modelowanie. S → trwała chemiczna. Lakier → powierzchnia. Nie zamieniaj tych ról.

#### Z4 — singleChoice · Krok 4 · Tioglikolowy (wstęp)

**question:** Kwas tioglikolowy w płynach do trwałej ondulacji i prostowania włosów:

**options:**
- a) Ma działanie redukujące i uwodornia mostki siarczkowe w keratynie
- b) Służy wyłącznie do zakwaszania po koloryzacji jak kwas cytrynowy
- c) Zastępuje melaninę w korze

**correctOptionId:** a

**feedback:**
- correctTitle: Redukcja mostków.
- incorrectTitle: Inna funkcja kwasu.
- explanation: W materiałach: kwas tioglikolowy redukuje / uwodornia mostki siarczkowe; jest w płynach do trwałej i prostowania. To nie „zwykłe zakwaszanie po farbie”.

#### Z5 — findError · Krok 5 · Mit

**question:** Które stwierdzenie jest błędne?

**rows:**
- s1: Mostki siarczkowe dotyczą keratyny
- s2: Wiązania siarkowe są tym samym co czasowa zmiana przy samym modelowaniu wilgocią i ciepłem
- s3: Przy trwałej zmianie kształtu kluczowe są wiązania siarkowe

**correctOptionIds:** ["s2"]

**feedback:**
- correctTitle: Nie myl H z S.
- incorrectTitle: Znajdź mylenie zabiegów.
- explanation: Modelowanie na H to zmiana czasowa. Wiązania siarkowe to mechanizm trwałej chemicznej zmiany — kolejna lekcja pokaże redukcję i utrwalenie krok po kroku.

### Completion

- **title:** Znasz stawkę wiązań siarkowych
- **subtitle:** „Czyli po myciu zostaje tylko to, co ruszyło mostki siarkowe…”
- **teaser:** Jak wygląda kolejność: reduktor → kształt → utrwalacz?

### Źródła

| Fragment | Źródło | Status |
|----------|--------|--------|
| Wiązania siarkowe w procesie trwałej | Tech. 10 | OK |
| Mostki siarczkowe + tioglikolowy | Mat. 38 | OK |
| Siarka w składzie | Mat. 2 / lekcja keratyny | OK interleaving |
| Prostowanie (wzmianka) | Mat. 38 | OK |

---

# Lekcja 6 — Redukcja i utrwalenie

### Metadane

| Pole | Wartość |
|------|---------|
| **id** | `wlos-ksztalt-redukcja-utrwalenie` |
| **Tytuł** | Redukcja i utrwalenie |
| **Jedna główna myśl** | Trwała zmiana kształtu: reduktor przekształca mostki → nadajesz nowy kształt → utrwalacz (utlenianie) odbudowuje wiązania w nowym kształcie. |
| **Cel** | Ułożyć proces trwałej w kolejności; połączyć język Tech. („rozrywa”) z Mat. (redukcja / utlenianie); wiedzieć, że podstawa płynu to reduktor. |
| **levelLabel** | Zabiegi |
| **Wymagania** | L5; sensownie też moduł pH (utrwalacz już wzmiankowany) |

### INTRO

- **narratorText:** Na stanowisku stoi płyn do trwałej i utrwalacz. Klientka na wałkach. Żeby nie pomylić kolejności, musisz wiedzieć, co się dzieje w mostkach — krok po kroku.
- **stakeText:** do 75 Kosmyków
- **startButtonLabel:** Zacznij lekcję

### GUIDE

- **title:** Dwa produkty, jedna kolejność
- **text:** Na stanowisku masz płyn do trwałej (z reduktorem) i utrwalacz. Włosy trafią na wałki. Zanim ułożysz kroki, przypomnij sobie: chodzi o wiązania siarkowe — nie o czasowe mostki wodorowe z modelowania.
- **note:** Słowo „rozrywa” z materiałów technologicznych wyjaśnisz w feedbacku obok redukcji. Zasadowe środowisko i pęcznienie (pH) pomagają działaniu reduktorów — bez powtórki całej skali pH.
- **Grafika:** ta sama **NOWA** co w L5 albo wariant procesowy 3 kroków — `NOWA GRAFIKA — DO AKCEPTACJI`. Do akceptacji: bez obrazu / tekst.

### GRAFIKA

- **Status:** `NOWA GRAFIKA — DO AKCEPTACJI`
- **Propozycja:** `assets/images/hair-permanent-wave-process.png`
- **Treść:** 3 panele: (1) reduktor / rozrywanie–redukcja mostków S, (2) nawinięcie na wałki, (3) utrwalacz odbudowuje mostki. Krótkie polskie podpisy. Bez marek, bez liści.
- **Gdzie:** GUIDE
- **Dlaczego brak istniejącej:** żaden plik w `assets/images/` nie pokazuje procesu trwałej.
- **Uwaga:** można połączyć z grafiką L5 w jedną planszę „mostki S + 3 kroki” — wtedy **jedna** nowa grafika na moduł (preferowane).

### Zadania

#### Z1 — ordering · Krok 1 · Kolejność

**question:** Ułóż kolejność trwałej zmiany kształtu we włosie.

**items (correct):**
1. Preparat z reduktorem przekształca (rozrywa) wiązania siarkowe
2. Włosy są ułożone w nowym kształcie (np. nawinięte na wałki)
3. Utrwalacz odbudowuje wiązania w nowym kształcie

**feedback:**
- correctTitle: Kolejność jak w procesie.
- incorrectTitle: Przestaw etapy.
- explanation: Najpierw redukcja / otwarcie mostków, potem kształt, na końcu odbudowa utrwalaczem. Bez utrwalenia nowy kształt się nie „domknie” w mostkach.

#### Z2 — singleChoice · Krok 2 · Reduktor

**question:** Co jest podstawowym składnikiem płynów do trwałej ondulacji?

**options:**
- a) Reduktor
- b) Wyłącznie pigment roślinny
- c) Sam lakier do włosów

**correctOptionId:** a

**feedback:**
- correctTitle: Reduktor.
- incorrectTitle: Nie ten składnik.
- explanation: Podstawą każdego płynu trwale ondulującego jest reduktor. Rodzaj reduktora zależy m.in. od środowiska (pH) — bez wkuwania całej listy chemicznej na pamięć wystarczy ta zasada.

#### Z3 — matching · Krok 3 · Redukcja vs utlenianie

**question:** Dopasuj reakcję do momentu zabiegu.

**left:**
- l1 / a — Redukcja
- l2 / b — Utlenianie (w tym kontekście)
- l3 / c — Samo modelowanie wilgocią i ciepłem

**right:**
- r1 / b — Utrwalanie trwałej ondulacji / odbudowa wiązań
- r2 / a — Przekształcanie włosa w trakcie trwałej (mostki)
- r3 / c — Czasowa zmiana wiązań wodorowych

**feedback:**
- correctTitle: Chemia we właściwych miejscach.
- incorrectTitle: Zamiana etapów.
- explanation: Redukcja — przekształcanie w trakcie trwałej. Utlenianie — m.in. utrwalanie trwałej. Modelowanie H — osobna, czasowa ścieżka.

#### Z4 — trueFalse · Krok 4 · H₂O₂

**question:** Roztwory nadtlenku wodoru stosuje się m.in. przy utrwalaniu zabiegu trwałej ondulacji.

**correctValue:** true

**feedback:**
- correctTitle: Tak — też przy trwałej.
- incorrectTitle: Wróć do zastosowań H₂O₂.
- explanation: H₂O₂ znasz z koloryzacji i rozjaśniania; w materiałach jest też przy utrwalaniu trwałej. To ten sam „świat utleniania”, inny cel zabiegu.

#### Z5 — findError · Krok 5 · Bezpieczeństwo procesu

**question:** Które stwierdzenie jest błędne?

**rows:**
- s1: Utrwalacz odbudowuje wiązania w nowym kształcie po nawinięciu
- s2: Reduktor jest podstawą płynu do trwałej
- s3: Wystarczy sam reduktor bez utrwalacza — mostki i tak zawsze wrócą same w idealnym nowym kształcie

**correctOptionIds:** ["s3"]

**feedback:**
- correctTitle: Utrwalacz nie jest ozdobą.
- incorrectTitle: Domknij proces.
- explanation: Proces w materiałach ma etap odbudowy utrwalaczem. Pominięcie utrwalenia psuje logikę trwałej zmiany kształtu — i efekt w salonie.

### Completion

- **title:** Trzymasz kolejność redukcja → kształt → utrwalenie
- **subtitle:** „Teraz wiem, czemu dwa produkty na stanowisku.”
- **teaser:** Ostatni krok modułu: kiedy proponujesz modelowanie, a kiedy chemię?

### Źródła

| Fragment | Źródło | Status |
|----------|--------|--------|
| Rozrywa → wałki → utrwalacz | Tech. 10 | OK |
| Reduktor / tioglikolany | Mat. 22 | OK |
| Redukcja vs utlenianie | Mat. 39 | OK |
| H₂O₂ przy utrwalaniu | Mat. 6 | OK |
| Tioglikolowy uwodornia mostki | Mat. 38 | OK |
| Zasady, pęcznienie, reduktory | Mat. 40 | OK (note w guide) |
| Utrwalacz (wcześniej) | `ph-produkty-zakwaszajace` | OK interleaving |

### Interleaving

pH / pęcznienie, H₂O₂, utrwalacz vs zakwaszanie (bez powtórki całego modułu pH).

---

# Lekcja 7 — Czasowa czy chemiczna?

### Metadane

| Pole | Wartość |
|------|---------|
| **id** | `wlos-ksztalt-czasowa-czy-chemiczna` |
| **Tytuł** | Czasowa czy chemiczna? |
| **Jedna główna myśl** | W salonie wybierasz ścieżkę: czasowa zmiana wiązań wodorowych albo chemiczna praca na wiązaniach siarkowych — i uczciwie mówisz o trwałości efektu. |
| **Cel** | Synteza modułu + decyzje komunikacyjne i zawodowe; lekkie przypomnienie prostowania jako tej samej ligi mostków S. |
| **levelLabel** | Zabiegi |
| **Wymagania** | L6 |

### INTRO

- **narratorText:** Dwie klientki, ten sam „chcę fale”. Jedna — impreza na jutro. Druga — „żeby zostało na miesiące”. Twoja decyzja zaczyna się od pytania: czasowa czy chemiczna?
- **stakeText:** do 75 Kosmyków
- **startButtonLabel:** Zacznij lekcję

### GUIDE

- **title:** Jedno pytanie, dwa mechanizmy
- **text:** Modelowanie: wilgoć i ciepło → czasowa zmiana wiązań wodorowych; skręt może zejść po zmoczeniu. Trwała / chemiczne prostowanie: praca na mostkach siarczkowych — reduktor, nowy kształt, utrwalenie. Zanim wybierzesz zabieg, ustal oczekiwanie klientki wobec mycia i trwałości.
- **Grafika:** `NIEPOTRZEBNA` (synteza; unikamy trzeciej nowej planszy). Ewentualnie po akceptacji ponowne użycie planszy procesowej.

### GRAFIKA

- **Status:** `NIEPOTRZEBNA`

### Zadania

#### Z1 — singleChoice · Krok 1 · Decyzja

**question:** Klientka chce fale na jutrzejsze wyjście i myje głowę co drugi dzień. Która ścieżka jest spójna z mechanizmem?

**options:**
- a) Modelowanie oparte o czasową zmianę wiązań wodorowych — z jasną rozmową o myciu
- b) Obiecać efekt trwałej bez chemii, bo „wałki wystarczą na miesiące”
- c) Od razu rozjaśnianie H₂O₂ zamiast rozmowy o kształcie

**correctOptionId:** a

**feedback:**
- correctTitle: Trafiona ścieżka.
- incorrectTitle: Zła liga zabiegu.
- explanation: Krótki termin + częste mycie = uczciwe modelowanie na wiązaniach H. Obietnica „jak trwała bez chemii” jest sprzeczna z tym, czego się nauczyłaś.

#### Z2 — trueFalse · Krok 2 · Mycie

**question:** Skręt uzyskany zmianą wiązań wodorowych (np. po wałkach) jest nietrwały i może zniknąć po zmoczeniu.

**correctValue:** true

**feedback:**
- correctTitle: Tak — wraca L4.
- incorrectTitle: Przypomnij Tech. 18.
- explanation: To kluczowa różnica w rozmowie z klientką: woda kończy historię czasowego skrętu.

#### Z3 — matching · Krok 3 · Zabieg → wiązania

**question:** Dopasuj.

**left:**
- l1 / a — Modelowanie / ondulacja wodna
- l2 / b — Trwała ondulacja
- l3 / c — Chemiczne prostowanie (wzmianka)

**right:**
- r1 / b — Mostki siarczkowe: redukcja i utrwalenie w skręcie
- r2 / c — Mostki siarczkowe: redukcja w kierunku prostego układu
- r3 / a — Wiązania wodorowe: wilgoć i ciepło

**feedback:**
- correctTitle: Mapa zabiegów.
- incorrectTitle: Sprawdź mostki.
- explanation: H dla modelowania. S dla trwałej i dla chemicznego prostowania (ten sam typ mostków, inny kształt docelowy).

#### Z4 — ordering · Krok 4 · Konsultacja

**question:** Ułóż sensowną kolejność decyzji przed zabiegiem zmieniającym kształt.

**items (correct):**
1. Ustal, jak długo efekt ma przetrwać mycie
2. Wybierz ligę: wiązania H (czasowo) albo S (chemicznie)
3. Jeśli chemia — zaplanuj redukcję, kształt i utrwalenie
4. Uczciwie opisz klientce, czego się spodziewać po umyciu głowy

**feedback:**
- correctTitle: Konsultacja jak trzeba.
- incorrectTitle: Inna kolejność.
- explanation: Najpierw oczekiwanie wobec trwałości, potem mechanizm, potem proces, na końcu komunikat. Bez tego łatwo o obiecaną „trwałą z wałków”.

#### Z5 — findError · Krok 5 · Synteza

**question:** Które stwierdzenie jest błędne?

**rows:**
- s1: Wilgoć i ciepło przy modelowaniu dają czasową zmianę wiązań wodorowych
- s2: Trwała opiera się o przekształcenie wiązań siarkowych i utrwalenie nowego kształtu
- s3: Każde ułożenie szczotką na sucho bez wilgoci i ciepła na stałe przebudowuje mostki siarczkowe jak pełna trwała

**correctOptionIds:** ["s3"]

**feedback:**
- correctTitle: Moduł domknięty.
- incorrectTitle: Znajdź przesadę.
- explanation: Nie każde ułożenie = trwała. Mostki siarczkowe rusza chemia (reduktor + utrwalenie). Modelowanie to liga wiązań wodorowych.

### Completion

- **solvedLabel:** Moduł domknięty
- **title:** Wybierasz świadomie: czasowo albo chemicznie
- **subtitle:** „Teraz wiem, o co pytasz, zanim weźmiesz wałki albo płyn.”
- **teaser:** Kolejny kierunek kursu: procedura trwałej w praktyce albo teoria koloru — zależnie od mapy Akademii.

### Źródła

| Fragment | Źródło | Status |
|----------|--------|--------|
| Synteza H | Tech. 6, 18 | OK |
| Synteza S + proces | Tech. 10; Mat. 22, 38, 39 | OK |
| Prostowanie | Mat. 38 | OK wzmianka |

---

## Wspólne metadane implementacyjne (na później)

| Element | Wartość |
|---------|---------|
| rewards.streakBonus | threshold 3, amount 5 |
| rewards.perfectBonus | amount 15 |
| checkButtonLabel | „Sprawdź” |
| startButtonLabel | „Zacznij lekcję” |
| stakeText | „do 75 Kosmyków” |

**Tagi (powtórki):** `wiazania-H`, `wiazania-S`, `modelowanie`, `trwala`, `redukcja`, `utrwalacz`, `wilgoc-cieplo`, `komunikacja-klientka`.
