# Akademia Nowej Fali — dokumentacja projektu

Główny dokument opisujący wizję, założenia pedagogiczne, mechanizmy produktu i zasady rozwoju projektu. Stanowi punkt odniesienia dla twórców treści, deweloperów i decydentów produktowych.

## Spis treści

1. [Wizja projektu](#1-wizja-projektu)
2. [Cel projektu](#2-cel-projektu)
3. [Definicja sukcesu projektu](#3-definicja-sukcesu-projektu)
4. [Grupa docelowa](#4-grupa-docelowa)
5. [Filozofia nauczania](#5-filozofia-nauczania)
6. [Psychologia uczenia się](#6-psychologia-uczenia-się)
7. [Mechanizmy motywacyjne](#7-mechanizmy-motywacyjne)
8. [Powiadomienia push](#8-powiadomienia-push)
9. [Spiralny model nauki](#9-spiralny-model-nauki)
10. [System powtórek](#10-system-powtórek)
11. [Standard lekcji](#11-standard-lekcji)
12. [Standard ilustracji](#12-standard-ilustracji)
13. [Standard merytoryczny](#13-standard-merytoryczny)
14. [Workflow tworzenia treści](#14-workflow-tworzenia-treści)
15. [Zasady rozwoju projektu](#15-zasady-rozwoju-projektu)
16. [Roadmapa](#16-roadmapa)
17. [Zasady podejmowania decyzji projektowych](#17-zasady-podejmowania-decyzji-projektowych)

---

## 1. Wizja projektu

Akademia Nowej Fali to mobilna aplikacja edukacyjna przygotowująca uczennice fryzjerstwa do egzaminu czeladniczego oraz do codziennej pracy w nowoczesnym salonie.

Projekt łączy wymagania egzaminacyjne z praktyczną wiedzą potrzebną w zawodzie. Nauka odbywa się w krótkich, regularnych sesjach, z naciskiem na zrozumienie, a nie wkuwanie. Aplikacja ma wspierać budowanie codziennego nawyku uczenia się i dawać poczucie realnego postępu.

Docelowo produkt działa jako aplikacja mobilna (PWA) dostępna z telefonu — tam, gdzie uczennice uczą się najczęściej.

---

## 2. Cel projektu

Główny cel projektu to skuteczne przygotowanie uczennic do:

- **egzaminu czeladniczego** — zarówno części teoretycznej, jak i praktycznej w zakresie wiedzy wymaganej programem;
- **pracy w salonie fryzjerskim** — w tym rozumienie procedur, produktów, bezpieczeństwa i komunikacji z klientką.

Projekt realizuje ten cel poprzez:

- modułową strukturę kursu dopasowaną do programu nauczania;
- krótkie lekcje oparte na aktywnym uczeniu się;
- system powtórek i spiralnego wracania do kluczowych zagadnień;
- mechanizmy motywacyjne wspierające regularność;
- treści oparte na materiałach egzaminacyjnych i zweryfikowanych źródłach branżowych.

Nie wszystkie tematy w programie kursu mają jednakowy priorytet w pracy zawodowej. Część zagadnień obowiązuje przede wszystkim ze względu na wymogi egzaminu — jest to świadomy wybór programowy, opisany w [Standardzie merytorycznym](#13-standard-merytoryczny).

---

## 3. Definicja sukcesu projektu

Sukces Akademii Nowej Fali **nie jest mierzony wyłącznie** liczbą lekcji, funkcji, punktów, użytkowniczek ani szybkością rozbudowy aplikacji. Te wskaźniki opisują skalę produktu — nie skuteczność nauki.

### Sukces oznacza, że uczennica

- regularnie wraca do aplikacji;
- przechodzi kolejne etapy kursu;
- zdaje egzamin czeladniczy;
- rozumie procesy fryzjerskie;
- potrafi wykorzystać wiedzę w pracy z klientką;
- pamięta kluczowe informacje po dłuższym czasie;
- potrafi odtworzyć fakty wymagane na egzaminie;
- łączy wiedzę z różnych działów;
- potrafi rozpoznać błąd i przewidzieć jego konsekwencje;
- nie rezygnuje po kilku pierwszych lekcjach.

### Zasada nadrzędna projektowania treści

**Nie projektujemy lekcji po to, aby przekazać jak najwięcej informacji.**

Projektujemy je po to, aby uczennica możliwie dużo **zrozumiała**, **zapamiętała** i **potrafiła wykorzystać**.

Jeżeli ilość materiału jest sprzeczna ze skutecznością nauki, wybieramy skuteczność nauki.

### Kryterium oceny każdej decyzji

Każdą nową funkcję, mechanikę i element treści należy oceniać pytaniem:

> „Czy zwiększa to szansę, że uczennica zrozumie, zapamięta i wykorzysta wiedzę także po dłuższym czasie?”

Jeżeli odpowiedź brzmi „nie” — element wymaga uzasadnienia lub nie powinien trafić do produktu.

Szczegółowy proces tworzenia treści: [CONTENT_GUIDE.md](CONTENT_GUIDE.md).

---

## 4. Grupa docelowa

**Profil:** uczennice szkół fryzjerskich w wieku około 14–18 lat, przygotowujące się do egzaminu czeladniczego.

**Kontekst uczenia się:**

- uczą się w krótkich przerwach — między lekcjami, w drodze, wieczorem;
- korzystają głównie z telefonu;
- oczekują nowoczesnego, przejrzystego interfejsu;
- potrzebują jasnego poczucia postępu i motywacji do regularnej pracy.

**Potrzeby:**

- zrozumieć materiał egzaminacyjny, nie tylko go zapamiętać;
- powtarzać trudne zagadnienia w kontrolowany sposób;
- widzieć, co już opanowały, a co wymaga powtórki;
- uczyć się w sposób angażujący, bez wrażenia suchego testu.

Projekt nie jest skierowany do doświadczonych fryzjerów ani instruktorów — to narzędzie dla uczennic na etapie kształcenia zawodowego.

---

## 5. Filozofia nauczania

Filozofia nauczania w Akademii Nowej Fali opiera się na następujących zasadach:

**Najpierw zrozumienie, potem sprawdzenie.** Lekcja wprowadza kontekst i buduje intuicję, zanim uczennica trafi na zadania weryfikujące wiedzę. Aplikacja nie jest testem egzaminacyjnym — jest narzędziem do uczenia się.

**Aktywne uczenie się.** Uczennica odpowiada, dopasowuje, układa, wybiera — nie tylko czyta. Każda lekcja wymaga aktywnego zaangażowania.

**Krótkie sesje.** Lekcja mieści się w kilku minutach. Mały, osiągalny krok jest lepszy niż długa, przytłaczająca porcja materiału.

**Spiralne wracanie do tematów.** Kluczowe zagadnienia pojawiają się wielokrotnie, w coraz szerszym kontekście — nie jako jednorazowa lektura.

**Natychmiastowy feedback.** Po każdej odpowiedzi uczennica otrzymuje wyjaśnienie. Błąd jest okazją do nauki, nie karą.

**Treść oparta na źródłach.** Wiedza merytoryczna pochodzi z materiałów egzaminacyjnych i zweryfikowanych materiałów branżowych. Projekt nie wymyśla faktów.

**Rozróżnienie egzamin vs. salon.** Program obejmuje tematy wymagane na egzaminie oraz tematy przydatne w codziennej pracy. Oba cele są ważne, ale nie każdy moduł ma ten sam wagowy priorytet zawodowy.

---

## 6. Psychologia uczenia się

Projekt opiera się na metodach potwierdzonych badaniami nad skutecznością uczenia się. Poniżej opisano, dlaczego każda z nich została uwzględniona w założeniach produktu.

### Active Recall (aktywne przywoływanie)

Uczennica aktywnie odzyskuje wiedzę z pamięci — poprzez odpowiedzi na pytania, dopasowania i układanie sekwencji — zamiast biernie czytać tekst. Aktywne przywoływanie wzmacnia ścieżki pamięciowe skuteczniej niż wielokrotne czytanie.

### Spaced Repetition (powtarzanie rozłożone w czasie)

Kluczowe zagadnienia wracają w odstępach czasowych, gdy ryzyko zapomnienia rośnie. Spiralny model kursu i planowany system powtórek realizują tę zasadę — wiedza jest utrwalana etapami, nie jednorazowo.

### Retrieval Practice (praktyka odzyskiwania)

Regularne testowanie wiedzy poprzez zadania w lekcjach ćwiczy umiejętność jej odtwarzania. To ta sama zasada co Active Recall, stosowana systematycznie w całym kursie.

### Testing Effect (efekt testowania)

Sam fakt odpowiadania na pytania poprawia późniejsze zapamiętywanie — nawet gdy odpowiedź była błędna. Dlatego lekcje kończą się serią zadań, a nie podsumowaniem tekstowym.

### Generation Effect (efekt generowania)

Wiedza utrwala się silniej, gdy uczennica sama formułuje lub wybiera odpowiedź, niż gdy tylko czyta gotowe wyjaśnienie. Zadania wymagające wyboru, dopasowania lub ułożenia kroków wykorzystują ten efekt.

### Dual Coding Theory (teoria podwójnego kodowania)

Informacja zapamiętywana jest skuteczniej, gdy łączy kanał werbalny i wizualny. Lekcje łączą tekst z diagramami, schematami i ilustracjami — zgodnie ze [Standardem ilustracji](ILLUSTRATION_GUIDE.md).

### Cognitive Load Theory (teoria obciążenia poznawczego)

Materiał jest dzielony na małe, logiczne porcje. Jedna lekcja = jeden temat. Zadania mają jasno określony zakres. Intro buduje kontekst stopniowo, bez przytłaczania nadmiarem informacji naraz.

### Chunking (segmentacja)

Wiedza jest grupowana w moduły i lekcje tworzące spójne całości. Moduł pH składa się z sekwencji lekcji od podstaw do podsumowania — każda lekcja to jeden „klocek” większej struktury.

### Interleaving (przeplatanie)

Różne typy zadań w ramach jednej lekcji (wybór, prawda/mit, dopasowanie, układanie) oraz powracanie do tematu w nowym kontekście w kolejnych modułach wymusza elastyczne stosowanie wiedzy, a nie mechaniczne powtarzanie schematu.

### Scaffolding (pomocnicze rusztowanie)

Trudność rośnie wraz z postępem. Wcześniejsze lekcje wprowadzają pojęcia; późniejsze stosują je w bardziej złożonych sytuacjach. Odblokowywanie lekcji liniowo zapewnia, że uczennica ma wiedzę wstępną przed kolejnym krokiem.

### Error-Based Learning (uczenie się na błędach)

Błędna odpowiedź uruchamia panel feedbacku z wyjaśnieniem. Uczennica uczy się z pomyłki w kontrolowanym środowisku, bez presji egzaminacyjnej.

### Immediate Feedback (natychmiastowa informacja zwrotna)

Po każdym zadaniu uczennica od razu widzi, czy odpowiedź była poprawna, i czyta wyjaśnienie. Opóźniony feedback osłabia powiązanie między odpowiedzią a zrozumieniem.

### Context-Based Learning (uczenie w kontekście)

Wiedza jest osadzona w sytuacjach fryzjerskich — koloryzacja, pielęgnacja, zabiegi chemiczne — a nie jako abstrakcyjne definicje oderwane od praktyki.

### Mastery Learning (nauka oparta na opanowaniu)

Lekcje odblokowują się sekwencyjnie. Ukończenie poprzedniej lekcji jest warunkiem przejścia dalej. Uczennica nie przeskakuje do materiału, do którego nie ma przygotowania.

### Positive Reinforcement (wzmocnienie pozytywne)

Poprawne odpowiedzi, ukończenie lekcji, serie poprawnych odpowiedzi i bonusy nagradzają wysiłek. System Kosmyków, odznak i postępu wizualnego wspiera motywację wewnętrzną poprzez widoczne osiągnięcia.

---

## 7. Mechanizmy motywacyjne

Projekt wykorzystuje elementy gamifikacji — nie jako cel sam w sobie, lecz jako wsparcie regularności i poczucia postępu.

### Kosmyki

Wirtualna waluta zdobywana za poprawne odpowiedzi, bonusy i ukończenie lekcji. Daje natychmiastową, widoczną nagrodę za wysiłek w trakcie sesji.

### Poziomy (Fale)

System poziomów odzwierciedla długoterminowy postęp uczennicy. Każda Fala to etap zaawansowania w kursie — wizualizacja drogi, a nie ranking konkurencyjny.

### Odznaki

Odznaki przyznawane za ukończenie modułów, kolekcji i kamieni milowych. Służą jako trwały dowód osiągnięć w Gablocie.

### Streak (seria dni)

Licznik kolejnych dni nauki motywuje do codziennego powrotu. Przerwanie serii nie jest karane — celem jest budowanie nawyku, nie presja.

### Codzienne cele

Krótki, osiągalny cel na dziś (np. ukończenie jednej lekcji) daje uczennicy jasny punkt startu każdego dnia.

### Odblokowywanie lekcji

Lekcje otwierają się sekwencyjnie po ukończeniu poprzedniej. Mechanizm daje poczucie awansu i jasno pokazuje, co jest dostępne, a co jeszcze przed nami.

### Poczucie postępu

Pasek postępu modułu, lista lekcji ze statusami (ukończona / dostępna / zablokowana) i ekran ukończenia z podsumowaniem dają widoczny obraz tego, co uczennica już zrobiła.

### Humorystyczne powiadomienia push

Przypomnienia w lekkim, fryzjerskim tonie — bez moralizowania. Szczegóły w [rozdziale 8](#8-powiadomienia-push).

### Pozytywne wzmocnienia

Komunikaty po poprawnej odpowiedzi, bonus za serię poprawnych odpowiedzi z rzędu, bonus za lekcję bez pomyłek — wszystkie wspierają kontynuację nauki poprzez natychmiastową satysfakcję.

---

## 8. Powiadomienia push

Powiadomienia push mają budować nawyk codziennej nauki — nie wywoływać poczucia winy.

**Styl komunikacji:**

- humor fryzjerski i lekki absurd;
- krótkie komunikaty (jedno zdanie);
- bez moralizowania;
- bez zawstydzania za przerwę w nauce;
- bez presji typu „minęło X dni, wróć natychmiast”.

**Cel:** przypomnieć o aplikacji w sposób, który uczennica chce otworzyć — nie w sposób, który chce zignorować.

**Status implementacji:** mechanizm powiadomień push jest elementem planowanym (wymaga PWA i service workera). Styl i zasady komunikacji są ustalone przed implementacją techniczną.

---

## 9. Spiralny model nauki

Kurs jest zorganizowany spiralnie: najważniejsze zagadnienia wracają wielokrotnie w nowych kontekstach, z rosnącą głębią.

**Zasady:**

- pojęcie wprowadzane jest po raz pierwszy w prostej formie (np. „Co oznacza pH?”);
- w kolejnych lekcjach i modułach wraca w szerszym kontekście (pH w koloryzacji, pH w rozjaśnianiu, pH produktów pielęgnacyjnych);
- każde powtórzenie dodaje nową warstwę zrozumienia, a nie kopiuje poprzednią lekcję.

**Przykład w module pH:** skala pH → wpływ na włos → preparaty → zabiegi → pielęgnacja → podsumowanie. To jedna spirala w obrębie modułu; w przyszłych modułach (np. koloryzacja) pH wróci ponownie w kontekście praktycznym.

Spiralny model wspiera Spaced Repetition i Interleaving — uczennica utrwala wiedzę przez wielokrotne spotkania z tematem, nie przez jednorazowe wkuwanie.

---

## 10. System powtórek

Projekt nie powtarza całych lekcji — powtarza **wiedzę**.

**Obecne założenia:**

- ukończoną lekcję można powtórzyć w trybie treningu (bez ponownej nagrody postępu);
- kluczowe zagadnienia wracają w spiralnym modelu w nowych lekcjach i modułach;
- w przyszłości pytania będą posiadały **metadane (tagi)** — np. `ph`, `koloryzacja`, `włos`, `bezpieczeństwo` — umożliwiające inteligentny dobór powtórek.

**Planowany system powtórek:**

- dobór pytań na podstawie tagów i historii odpowiedzi uczennicy;
- priorytet dla zagadnień, w których wystąpiły błędy;
- rozłożenie powtórek w czasie zgodnie ze Spaced Repetition;
- krótkie sesje powtórkowe (nie pełne lekcje).

**Status implementacji:** ekran powtórek i system tagów są elementami planowanymi. Moduł pH (10 lekcji) stanowi bazę treści, na której system zostanie zbudowany.

---

## 11. Standard lekcji

Każda lekcja w projekcie jest plikiem JSON ładowanym przez uniwersalny silnik aplikacji. Lekcja składa się z intro, serii zadań i ekranu ukończenia.

Szczegółowe zasady dotyczące struktury JSON, typów zadań, feedbacku, nagród i ekranu completion znajdują się w dokumencie:

**→ [docs/LESSON_STANDARD.md](LESSON_STANDARD.md)**

---

## 12. Standard ilustracji

Ilustracje, diagramy i zasoby graficzne stosowane w lekcjach podlegają wspólnym zasadom: lokalizacja plików, formaty, nazewnictwo, dostępność i użycie w JSON lekcji.

Szczegółowe wytyczne znajdują się w dokumencie:

**→ [docs/ILLUSTRATION_GUIDE.md](ILLUSTRATION_GUIDE.md)**

---

## 13. Standard merytoryczny

### Źródła wiedzy

Treści merytoryczne pochodzą wyłącznie z:

- materiałów egzaminacyjnych projektu (`source-materials/`);
- zweryfikowanych materiałów branżowych i dydaktycznych;
- audytów merytorycznych przygotowanych w ramach projektu.

Projekt nie wymyśla faktów ani nie opiera się na wiedzy ogólnej bez weryfikacji w źródłach.

### Egzamin vs. praca w salonie

Program kursu obejmuje dwa typy zagadnień:

| Typ | Przykłady | Priorytet zawodowy |
|-----|-----------|-------------------|
| **Praktyczne** | pH, koloryzacja, pielęgnacja, BHP salonu | Wysoki — przydatne na egzaminie i w pracy |
| **Egzaminacyjne formalne** | historia fryzjerstwa, przepisy prawa pracy, dokumentacja, rachunkowość | Wymagane na egzaminie; mniejsze znaczenie w codziennej pracy fryzjerskiej |

Oba typy są w programie kursu. Różnica polega na sposobie prezentacji: tematy praktyczne uczymy głębiej i w kontekście salonu; tematy formalne — zwięźle, pod kątem wymagań egzaminacyjnych.

### Zasady weryfikacji

- każde twierdzenie merytoryczne musi mieć źródło w materiałach projektu;
- fakty oznaczone jako wymagające weryfikacji nie trafiają do lekcji bez potwierdzenia;
- materiały egzaminacyjne określają **zakres**, nie automatyczną prawdę naukową — treści podlegają audytowi;
- uproszczenia dydaktyczne są dopuszczalne, ale nie mogą wprowadzać w błąd.

---

## 14. Workflow tworzenia treści

Pełny proces tworzenia modułów i treści edukacyjnych — od audytu źródeł po testy po implementacji — opisano w:

**→ [docs/CONTENT_GUIDE.md](CONTENT_GUIDE.md)**

Skrócony workflow pojedynczej lekcji:

1. **Analiza materiałów źródłowych** — audyt faktów, identyfikacja zakresu.
2. **Masterplan modułu i scenariusz lekcji** — zgodnie z [CONTENT_GUIDE.md](CONTENT_GUIDE.md).
3. **Review** — merytoryczny, dydaktyczny, językowy.
4. **Pisanie JSON** — zgodnie ze [Standardem lekcji](LESSON_STANDARD.md).
5. **Ilustracje** — zgodnie ze [Standardem ilustracji](ILLUSTRATION_GUIDE.md), jeśli wymagane.
6. **Wpisanie do katalogu** — wpis w `js/lessons-catalog.js` z `requiresLessonId`.
7. **Test lokalny** — przepływ lekcji, odblokowywanie, punktacja, telefon.
8. **Commit i push** — opisowy komunikat.
9. **Aktualizacja dokumentacji** — `CHANGELOG.md`.

Nowa lekcja = nowy plik JSON + wpis w katalogu. Silnik aplikacji nie wymaga zmian, o ile używane są istniejące typy zadań.

---

## 15. Zasady rozwoju projektu

- **Nie dodajemy funkcji bez potrzeby** — każda zmiana musi odpowiadać na konkretny problem użytkowniczki lub bloker rozwoju treści.
- **Nie zmieniamy wyglądu bez uzasadnienia** — spójność UI jest priorytetem.
- **Treści wyłącznie ze źródeł** — brak wymyślonych faktów merytorycznych.
- **Uniwersalny silnik lekcji** — nowe lekcje to nowe pliki JSON, nie zmiany w `app.js`.
- **Prostota ponad rozbudowę** — statyczna aplikacja webowa bez zbędnego stacku technologicznego.
- **Nie resetujemy postępu użytkowniczek** — zmiany w kodzie nie mogą kasować localStorage bez wyraźnej decyzji.
- **Jeden commit = jedna logiczna zmiana** — czytelna historia repozytorium.
- **Dokumentacja na bieżąco** — istotne decyzje trafiają do `docs/`.

---

## 16. Roadmapa

### Zrealizowane

- Statyczna aplikacja webowa (HTML, CSS, JS, JSON)
- Silnik lekcji z 5 typami zadań
- System postępu (localStorage, odblokowywanie lekcji)
- Moduł **pH we fryzjerstwie** — 10 lekcji (kompletny)
- Publikacja na GitHub Pages
- Dokumentacja projektu (struktura `docs/`, w tym CONTENT_GUIDE, LESSON_STANDARD, WRITING_STYLE, ILLUSTRATION_GUIDE)

### W toku / najbliższe

- Kolejne moduły merytoryczne (np. włos i skóra głowy, koloryzacja)
- Moduły formalne egzaminu (rachunkowość, BHP, prawo pracy itd.)

### Planowane

- System powtórek z tagami pytań
- Dynamiczna mechanika serii dni (streak)
- Dynamiczny postęp Fali
- Powiadomienia push (PWA)
- Ekran powtórek dnia
- Onboarding i konto użytkowniczki
- PWA (manifest, service worker)
- Moduł historii fryzjerstwa

Roadmapa jest aktualizowana po każdym ukończonym module. Szczegółowy plan treści: [docs/KURS_BAZA_WIEDZY.md](KURS_BAZA_WIEDZY.md).

---

## 17. Zasady podejmowania decyzji projektowych

Przy każdej decyzii produktowej lub technicznej obowiązują następujące reguły:

1. **Użytkowniczka pierwsza** — decyzja musi służyć uczennicy (zrozumienie, motywacja, prostota), nie wygody implementacji.
2. **Źródło przed intuicją** — treści merytoryczne wynikają z materiałów, nie z domysłów.
3. **Minimum viable** — najmniejsza zmiana, która rozwiązuje problem. Bez over-engineeringu.
4. **Silnik stabilny, treści płynne** — architektura aplikacji zmienia się rzadko; lekcje dodajemy często.
5. **Spiralnie, nie liniowo** — nowy moduł nawiązuje do wcześniejszych, nie zaczyna od zera.
6. **Egzamin i salon** — oba cele są ważne; sposób prezentacji zależy od typu zagadnienia.
7. **Bez porównań do innych produktów** — oceniamy rozwiązania własne, nie kopiujemy cudzych mechaników.
8. **Dokumentujemy decyzje** — jeśli decyzja wpływa na kierunek projektu, trafia do `docs/`.
9. **Test przed publikacją** — każda lekcja i każda zmiana w silniku przechodzi test lokalny przed push na `main`.
10. **Nie cofamy postępu użytkowniczek** — zmiany w strukturze kursu nie kasują zapisanych osiągnięć.

---

*Ostatnia aktualizacja dokumentu: lipiec 2026*
