# Standard pisania — Akademia Nowej Fali

Oficjalny dokument określający zasady języka, tonu komunikacji oraz proces redakcji wszystkich treści w projekcie. Stanowi uzupełnienie [dokumentacji projektu](PROJECT.md) i [standardu lekcji](LESSON_STANDARD.md) w zakresie jakości językowej.

Obowiązuje wszystkich autorów i redaktorów treści: tekstów lekcji, feedbacku, komunikatów UI, powiadomień push i dokumentacji skierowanej do uczennic.

## Spis treści

1. [Cel dokumentu](#1-cel-dokumentu)
2. [Filozofia języka](#2-filozofia-języka)
3. [Styl komunikacji](#3-styl-komunikacji)
4. [Grupa docelowa](#4-grupa-docelowa)
5. [Budowa tekstów](#5-budowa-tekstów)
6. [Jak tłumaczymy wiedzę](#6-jak-tłumaczymy-wiedzę)
7. [Projektowanie intro](#7-projektowanie-intro)
8. [Projektowanie części edukacyjnej](#8-projektowanie-części-edukacyjnej)
9. [Projektowanie feedbacku](#9-projektowanie-feedbacku)
10. [Projektowanie completion](#10-projektowanie-completion)
11. [Projektowanie teaserów](#11-projektowanie-teaserów)
12. [Styl języka](#12-styl-języka)
13. [Czego nie robimy](#13-czego-nie-robimy)
14. [Kontrola jakości języka](#14-kontrola-jakości-języka)
15. [Checklist przed uznaniem tekstu za gotowy](#15-checklist-przed-uznaniem-tekstu-za-gotowy)

---

## 1. Cel dokumentu

Niniejszy standard służy trzem celom:

1. **Spójność językowa** — wszystkie treści w projekcie brzmią jak napisane przez ten sam zespół, w jednym, rozpoznawalnym tonie.
2. **Jakość redakcyjna** — każdy tekst przechodzi ten sam proces weryfikacji przed publikacją.
3. **Skuteczność dydaktyczna** — język wspiera naukę: najpierw zrozumienie, potem sprawdzenie wiedzy.

Dokument opisuje nie tylko *jak* piszemy, ale również *jak kontrolujemy* jakość tekstów. Odchylenia od standardu wymagają uzasadnienia.

Powiązane dokumenty:

- struktura lekcji i limity długości pól JSON → [LESSON_STANDARD.md](LESSON_STANDARD.md)
- zasady ilustracji → [ILLUSTRATION_GUIDE.md](ILLUSTRATION_GUIDE.md)
- filozofia nauczania i grupa docelowa → [PROJECT.md](PROJECT.md)

---

## 2. Filozofia języka

Język Akademii Nowej Fali wynika bezpośrednio z filozofii nauczania projektu: uczymy przez zrozumienie, w krótkich sesjach, z natychmiastowym feedbackiem, w kontekście fryzjerskim.

### Zasada nadrzędna

**Najpierw pomagamy zrozumieć. Dopiero później sprawdzamy wiedzę.**

Tekst wprowadzający buduje intuicję i kontekst. Pytania weryfikują to, co uczennica właśnie poznała. Aplikacja nie jest testem egzaminacyjnym — jest narzędziem do uczenia się.

### Głos projektu

Czytelnik ma mieć wrażenie, że uczy go **bardzo dobry fryzjer lub edukator**, który potrafi tłumaczyć trudne zagadnienia prostym językiem. Ten głos jest:

| Jest | Nie jest |
|------|----------|
| naturalny | szkolny |
| prosty | infantylny |
| profesjonalny | mentorski |
| ciepły | encyklopedyczny |
| inteligentny | marketingowy |
| spokojny | |
| praktyczny | |
| nowoczesny | |

Projekt nie mówi do uczennicy jak nauczyciel z podręcznika, jak doradca z infolinii ani jak reklama kursu online. Mówi jak doświadczony specjalista, który tłumaczy sprawę prosto i konkretnie.

### Jedna myśl na raz

Każdy akapit przekazuje **jedną główną myśl**. Każda lekcja uczy **jednej głównej myśli** (zgodnie ze [standardem lekcji](LESSON_STANDARD.md)). Tekst nie rozprasza uwagi wieloma wątkami naraz.

---

## 3. Styl komunikacji

### Ton

- **Bezpośredni** — mówimy wprost, bez owijania w bawełnę.
- **Konkretny** — każde zdanie wnosi informację lub buduje kontekst.
- **Wspierający** — błąd to okazja do nauki, nie powód do oceny uczennicy.
- **Spokojny** — bez presji, bez moralizowania, bez sztucznego entuzjazmu.

### Perspektywa

- Piszemy w **drugiej osobie liczby pojedynczej** („zobaczysz”, „sprawdzisz”, „wiesz”) lub w **osobie bezosobowej**, gdy opisujemy zjawisko („pH poniżej 7 oznacza odczyn kwaśny”).
- Unikamy pierwszej osoby liczby mnogiej („my uczymy”, „w tym module omówimy”).
- Unikamy trzeciej osoby opisującej uczennicę („uczennica powinna”, „kursantka musi”).

### Kontekst fryzjerski

Wiedza jest osadzona w pracy w salonie — koloryzacja, pielęgnacja, zabiegi, produkty, bezpieczeństwo. Nie jako abstrakcyjne definicje oderwane od praktyki.

Tematy formalne egzaminacyjne (historia, przepisy, dokumentacja) piszemy zwięźle i rzeczowo — bez zbędnej narracji salonowej, gdy nie wspiera zrozumienia.

---

## 4. Grupa docelowa

### Profil czytelniczki

Uczennice szkół fryzjerskich w wieku około **14–18 lat**, przygotowujące się do egzaminu czeladniczego.

### Kontekst czytania

- krótkie przerwy — między lekcjami, w drodze, wieczorem;
- głównie **telefon** — tekst musi być wygodny do czytania na małym ekranie;
- zmęczenie po całym dniu w szkole — tekst nie może wymagać wysiłku koncentracji jak podręcznik.

### Co to oznacza dla języka

- Proste słownictwo tam, gdzie to możliwe — termin fachowy wprowadzamy dopiero po krótkim wyjaśnieniu.
- Krótkie zdania i akapity — jedna myśl na raz.
- Bez żargonu niewyjaśnionego w tej lub wcześniejszej lekcji.
- Bez tonu egzaminacyjnego („na egzaminie…”, „zgodnie z programem…”).
- Bez infantylizacji — uczennice są młode, ale traktujemy je poważnie.

---

## 5. Budowa tekstów

### Hierarchia informacji

Nowe informacje tłumaczymy **krok po kroku**, w ustalonej kolejności:

1. **Sens** — po co to wiedzieć, jaki problem rozwiązuje.
2. **Mechanizm** — jak to działa, co się dzieje.
3. **Zapamiętanie** — co warto mieć w głowie po lekcji.

Ta kolejność obowiązuje w części edukacyjnej, feedbacku i completion.

### Show, don't tell

Jeżeli temat na to pozwala, **najpierw pokazujemy**, dopiero potem tłumaczymy. Zamiast od razu podawać definicję — dajemy uczennicy coś, co może zobaczyć, poczuć lub rozpoznać z praktyki salonu.

Kolejność:

1. **Obserwacja** — prosty przykład, sytuacja salonowa lub problem, który uczennica może spotkać w pracy.
2. **Wyjaśnienie** — co się dzieje i dlaczego.
3. **Wniosek** — najważniejsze, co warto zapamiętać.

Nie rozpoczynaj lekcji od definicji, jeżeli można najpierw zainteresować uczennicę przykładem. Analogia ze skalą temperatury w lekcji o pH to wzorzec tej zasady — najpierw coś znajomego, potem nowe pojęcie.

### Zdania

- **Krótkie** — jedna myśl na zdanie.
- **Zróżnicowane długością** — naturalny rytm, nie monotonia.
- **Aktywne** — „pH poniżej 7 jest kwaśne”, nie „odczyn kwaśny charakteryzuje się tym, że pH jest poniżej 7”.

### Akapity

- **Krótkie** — maksymalnie 2–4 zdania.
- **Jeden temat na akapit** — nowy akapit = nowa myśl.
- Tekst na telefonie: unikamy bloków dłuższych niż 4 linie bez przerwy.

### Limity długości

Orientacyjne limity znaków dla poszczególnych pól lekcji opisano w [LESSON_STANDARD.md, rozdział 13](LESSON_STANDARD.md#13-długość-tekstów). Przekroczenie limitu wymaga uzasadnienia.

---

## 6. Jak tłumaczymy wiedzę

### Zasady tłumaczenia

| Zasada | Opis |
|--------|------|
| **Show, don't tell** | Najpierw przykład lub obserwacja z salonu, potem wyjaśnienie mechanizmu (patrz rozdział 5). |
| **Własnymi słowami** | Materiały egzaminacyjne określają zakres, nie gotowy tekst. Nie kopiujemy dosłownie. |
| **Przez przykład** | Trudne pojęcie wyjaśniamy analogią lub sytuacją z salonu (np. skala pH jak termometr). |
| **Stopniowo** | Najpierw prosta wersja, potem zastosowanie w szerszym kontekście (spirala). |
| **Praktycznie** | Każde wyjaśnienie odpowiada na pytanie: „po co mi to w pracy?” |
| **Uczciwie** | Gdy coś zależy od kontekstu, mówimy wprost („zwykle”, „może”, „w większości przypadków”). |

### Czego nie robimy przy tłumaczeniu

- Nie zaczynamy od definicji słownikowej („pH to logarytmiczna miara stężenia jonów wodorowych…”).
- Nie wymyślamy faktów — treść opiera się na materiałach projektu (patrz [PROJECT.md, Standard merytoryczny](PROJECT.md#12-standard-merytoryczny)).
- Nie upraszczamy kosztem prawdy — uproszczenie dydaktyczne jest dopuszczalne, ale nie może wprowadzać w błąd.

### Terminy fachowe

1. Wprowadź termin w zrozumiałym kontekście.
2. Wyjaśnij krótko, co oznacza.
3. Użyj terminu w zadaniu — uczennica już go zna.

Przykład dobry: „pH mówi nam, czy środowisko jest kwaśne, obojętne czy zasadowe.”

Przykład zły: „pH (potencjał wodorowy) jest miarą kwasowości roztworu w skali logarytmicznej od 0 do 14.”

---

## 7. Projektowanie intro

Intro to pierwszy kontakt uczennicy z lekcją. Ma odpowiedzieć na trzy pytania: **o czym** jest lekcja, **dlaczego** to ważne, **co** zyska po ukończeniu.

### Pole `narratorText`

- 1–3 zdania, max ~250 znaków.
- Mówi, o czym jest lekcja i co uczennica już wie (nawiązanie do spirali).
- Buduje kontekst — nie wprowadza jeszcze pełnej wiedzy merytorycznej.
- Nie zdradza odpowiedzi na pytania z zadań.

**Dobry przykład:**

> pH mówi nam, czy środowisko jest kwaśne, obojętne czy zasadowe. Zanim sprawdzimy, jak pH wpływa na włos i działanie preparatów fryzjerskich, trzeba dobrze poznać samą skalę.

**Zły przykład:**

> W tej lekcji omówimy podstawowe zagadnienia dotyczące pH, które są bardzo ważne w fryzjerstwie i które musisz znać, aby zdać egzamin czeladniczy.

### Pozostałe pola intro

| Pole | Zasady |
|------|--------|
| `stakeText` | Krótko, bez marketingu: „do 75 Kosmyków” |
| `startButtonLabel` | Czynność, nie formalizm: „Zacznij lekcję”, nie „Rozpocznij moduł edukacyjny” |

Intro nie zawiera części edukacyjnej — ta następuje na kolejnym ekranie (patrz rozdział 8).

---

## 8. Projektowanie części edukacyjnej

Część edukacyjna to blok, w którym **uczymy**, zanim uczennica trafi na zadania. Realizuje zasadę „najpierw zrozumienie, potem sprawdzenie”.

### Formy w JSON

| Blok | Kiedy stosować |
|------|----------------|
| `scaleGuide` | Wyjaśnienie oparte na tekście z etykietami (np. skala, schemat) |
| `hairGuide` | Wyjaśnienie ze schematem lub ilustracją |
| Rozbudowany `narratorText` | Gdy wiedza mieści się w 1–3 zdaniach bez osobnego ekranu |

### Struktura treści edukacyjnej

1. **Tytuł** (`title`) — konkretny, w formie pytania lub stwierdzenia: „Jak czytać skalę pH?”
2. **Tekst główny** (`text`) — wyjaśnienie przez analogię lub przykład; max ~400 znaków.
3. **Tekst pomocniczy** (`helperText`, opcjonalnie) — rozszerzenie lub most do kolejnej lekcji.
4. **Podpis ilustracji** (`imageCaption`, opcjonalnie) — co pokazuje schemat, bez powtarzania tekstu głównego.

### Zasady

- Jeden ekran — mieści się na telefonie bez scrollowania przez długi tekst.
- Najpierw sens, potem mechanizm — nie odwrotnie.
- Nie wprowadzamy wiedzy spoza zakresu tej lekcji.
- Ilustracja (jeśli jest) wspiera tekst — szczegóły wizualne: [ILLUSTRATION_GUIDE.md](ILLUSTRATION_GUIDE.md).

**Dobry fragment (`scaleGuide.text`):**

> Skalę pH możesz wyobrazić sobie trochę jak skalę temperatury. Na termometrze przesuwamy się od zimna do ciepła, a na skali pH — od odczynu kwaśnego do zasadowego. Pośrodku znajduje się pH 7, czyli odczyn obojętny.

---

## 9. Projektowanie feedbacku

Feedback to natychmiastowa informacja zwrotna po każdej odpowiedzi. Błąd jest okazją do nauki, nie karą.

### Struktura i kolejność

| Pole | Rola | Zasady |
|------|------|--------|
| `correctTitle` | Werdykt po poprawnej odpowiedzi | Krótko, konkretnie: „Dokładnie.”, „Tak.” — bez inflacji pochwał |
| `incorrectTitle` | Werdykt po błędnej odpowiedzi | Łagodnie, bez oceny uczennicy: „Sprawdź jeszcze raz.” |
| `explanation` | Wyjaśnienie zasady | 2–4 zdania, max ~350 znaków; tłumaczy *dlaczego*, nie tylko podaje poprawną odpowiedź |
| `funFact.text` | Praktyczna wskazówka (opcjonalnie) | 1–2 zdania z salonu; nie wykład, nie powtórzenie `explanation` |

### Ton feedbacku

- **Poprawna odpowiedź:** potwierdzenie + krótkie wyjaśnienie. Bez „Brawo!”, „Super!”, „Fantastycznie!”.
- **Błędna odpowiedź:** spokojna korekta + to samo merytoryczne wyjaśnienie. Uczennica może ponowić odpowiedź.
- **Bez tonu egzaminacyjnego** — zero odniesień do egzaminu, programu, modułów.
- **Bez moralizowania** — błąd nie jest „złym wyborem”, tylko sygnałem do ponownego sprawdzenia.

### Pytania i kickery

| Pole | Zasady |
|------|--------|
| `kicker` | Format: „Krok N · …”, max ~45 znaków; opisuje etap, nie ocenia |
| `question` | 1–2 zdania, max ~220 znaków; nie zdradza odpowiedzi |
| Opcje odpowiedzi | Max ~100 znaków; równoległa składnia, podobna długość |

### Zasada odkrywania

Pytanie i opcje **nie mogą zdradzać** poprawnej odpowiedzi przed sprawdzeniem. Pełne wyjaśnienie pojawia się dopiero w `explanation`.

---

## 10. Projektowanie completion

Ekran ukończenia domyka lekcję i daje poczucie osiągnięcia. Nie wprowadza nowej wiedzy.

### Pola completion

| Pole | Zasady |
|------|--------|
| `solvedLabel` | Status: „Lekcja ukończona” — bez przesady |
| `title` | 1 zdanie, max ~80 znaków; co uczennica **teraz rozumie** |
| `subtitle` | 1–2 zdania, max ~200 znaków; co potrafi **zastosować** |
| `kosmykiLabel` | Etykieta nagrody: „Kosmyków za tę lekcję” |

### Zasady

- Odnosi się do **głównej myśli lekcji** — nie do liczby poprawnych odpowiedzi ani zebranych Kosmyków.
- Buduje poczucie postępu — uczennica wie, co opanowała.
- Ton spokojny i konkretny — bez marketingowego entuzjazmu.

**Dobry przykład:**

- `title`: „Umiesz już odczytać skalę pH”
- `subtitle`: „Wiesz, czym różni się odczyn kwaśny, obojętny i zasadowy oraz dlaczego każda jednostka na skali ma znaczenie.”

**Zły przykład:**

- `title`: „Gratulacje! Świetnie Ci poszło!”
- `subtitle`: „Zdobyłaś wszystkie Kosmyki i jesteś o krok bliżej do zdania egzaminu!”

---

## 11. Projektowanie teaserów

Teaser (`completion.nextLesson.teaser`) zapowiada kolejną lekcję. Ma wzbudzić ciekawość, nie wymienić program nauczania.

### Zasady

- **1 zdanie**, max ~100 znaków.
- Nawiązuje do głównej myśli bieżącej lekcji i naturalnie prowadzi dalej.
- Formułuje **pytanie** lub **obietnicę** — nie spis treści.
- Bez clickbaitu i bez presji.

**Dobry przykład:**

> Jak pH wpływa na włos?

**Zły przykład:**

> W następnej lekcji poznasz wpływ środowiska kwaśnego i zasadowego na strukturę włosa, osłonkę, łuski oraz procedury pielęgnacyjne.

---

## 12. Styl języka

### Słownictwo

- Preferuj **proste, codzienne słowa** tam, gdzie termin fachowy nie jest jeszcze wprowadzony.
- Termin fachowy używaj **konsekwentnie** — nie zamieniaj go co zdanie na synonim.
- Unikaj anglicyzmów, gdy istnieje naturalny polski odpowiednik.
- Liczby i wartości podawaj **konkretnie** (pH 7, 6%, 20 minut).

### Składnia

- Naturalny szyk zdań — podmiot → orzeczenie → dopełnienie.
- Strona czynna zamiast biernej: „Łuski przylegają do powierzchni włosa”, nie „Powierzchnia włosa jest pokrywana przez przylegające łuski”.
- Zdania współrzędne zamiast wielokrotnie złożonych.

### Interpunkcja i ortografia

- Pełna poprawność językowa — tekst przechodzi kontrolę redakcyjną przed publikacją (patrz rozdział 14).
- Myślnik półpauzy (–) z odstępami, cudzysłowy polskie („…").
- Bez wielokropków dramatycznych i wykrzykników w treściach edukacyjnych.

### Naturalność języka

Teksty **nie mogą brzmieć jak wygenerowane przez AI**. Autor świadomie eliminuje charakterystyczne wzorce językowe modeli językowych.

W szczególności unikamy:

| Wzorzec | Przykład do unikania |
|---------|---------------------|
| Sztuczne przeciwstawienia | „Nie chodzi o…, chodzi o…” |
| Konstrukcja „nie tylko…, ale również…” | Powtarzana w wielu zdaniach |
| Potrójne wyliczenia | „X, Y i Z” w każdym akapicie |
| Powtarzalne rozpoczęcia zdań | „Warto…”, „Pamiętaj…”, „Ważne jest…” |
| Sztuczne podsumowania | „Dzięki temu…”, „To właśnie dlatego…”, „W efekcie…” |
| Powtarzanie tej samej informacji | To samo wyjaśnione innymi słowami w kolejnym zdaniu |
| Słowa-wypełniacze | „ważne”, „przede wszystkim”, „dlatego”, „właśnie”, „należy”, „warto” |
| Marketingowy język | „Odkryj”, „Poznaj tajniki”, „Wejdź na wyższy poziom” |
| Sztuczny entuzjazm | Wykrzykniki, „niesamowite”, „rewelacyjne” |
| Nadmiernie symetryczne zdania | Trzy zdania tej samej długości i struktury pod rząd |

Tekst powinien mieć **naturalny rytm** — długość zdań zróżnicowana, akapity krótkie, przejścia płynne.

### Unikanie typowych cech tekstów AI

Eliminacja charakterystycznych konstrukcji językowych to nie wszystko. Dbamy również o:

- **naturalny rytm tekstu** — zdania krótkie przeplatają się z nieco dłuższymi;
- **różną długość zdań** — unikamy serii trzech zdań tej samej długości;
- **różną długość akapitów** — nie każdy akapit ma dokładnie trzy zdania;
- **zróżnicowane konstrukcje zdań** — pytania, stwierdzenia, zdania złożone i proste;
- **naturalne przejścia** między akapitami — bez sztucznych łączników typu „Dzięki temu” czy „W efekcie”.

Tekst powinien brzmieć tak, jakby napisał go **doświadczony edukator fryzjerstwa** — nie model językowy.

### Test głośnego czytania

Przed zakończeniem pracy autor **czyta tekst na głos**. Jeżeli zdanie brzmi nienaturalnie, sztucznie lub jak tłumaczenie maszynowe — popraw je. To obowiązkowy krok procesu redakcyjnego, nie opcjonalna sugestia.

---

## 13. Czego nie robimy

Poniższa lista uzupełnia zasady z poszczególnych rozdziałów. Każdy punkt jest twardym zakazem, nie sugestią.

### Forma

- **Definicje słownikowe** na początku wyjaśnienia.
- **Ściany tekstu** — długie akapity bez przerwy.
- **Zbędne dygresje** — ciekawostki, które nie wspierają głównej myśli lekcji.
- **Nadmierny formalizm** — język urzędowy, akademicki, podręcznikowy.

### Ton

- **Pusty ozdobnik** — zdania, które nic nie wnoszą („Jak wiadomo…”, „Oczywiście…”).
- **Sztuczny humor** — żarty, które nie wynikają z kontekstu fryzjerskiego.
- **Moralizowanie** — „Musisz to wiedzieć”, „Nie możesz tego pominąć”.
- **Zawstydzanie za błąd** — „To podstawa, którą powinnaś znać”.
- **Presja egzaminacyjna** — „Na egzaminie padnie pytanie o…”.

### Treść

- **Dosłowne kopiowanie** materiałów egzaminacyjnych.
- **Wymyślanie faktów** — treść bez potwierdzenia w źródłach projektu.
- **Ton mentora** — pouczanie z góry, „ja wiem lepiej”, monologi instruktora.
- **Ton marketingowy** — obietnice, superlatywy, język reklamy kursu.

---

## 14. Kontrola jakości języka

Każdy tekst przed uznaniem za gotowy przechodzi **obowiązkową kontrolę redakcyjną**. Autor nie publikuje własnego tekstu bez weryfikacji — samokontrola jest pierwszym krokiem, redakcja drugim.

### Proces redakcji

| Etap | Kto | Co sprawdza |
|------|-----|-------------|
| 1. Szkic | Autor | Zgodność ze standardem lekcji, merytoryka, pierwsza wersja tekstu |
| 2. Samokontrola | Autor | Autokrytyka (poniżej), checklist (rozdział 15), test głośnego czytania |
| 3. Redakcja językowa | Redaktor / drugi autor | Poprawność językowa, naturalność, spójność tonu |
| 4. Weryfikacja merytoryczna | Audytor | Zgodność faktów ze źródłami (patrz [LESSON_STANDARD.md](LESSON_STANDARD.md)) |
| 5. Test w aplikacji | Autor | Czytelność na telefonie, przepływ intro → zadania → completion |

### Autokrytyka autora

Po zakończeniu pisania, a przed przekazaniem tekstu do redakcji, autor **czyta cały tekst jeszcze raz** i odpowiada sobie na pytania:

- Czy sam przeczytałbym to z zainteresowaniem?
- Czy coś brzmi sztucznie?
- Czy któreś zdanie jest zbędne?
- Czy można coś skrócić?
- Czy uczennica rzeczywiście zrozumie temat po przeczytaniu tego tekstu?
- Czy tekst zachęca do dalszej nauki?

Dopiero po pozytywnej odpowiedzi na wszystkie pytania tekst można uznać za gotowy do przekazania na redakcję językową.

### Co sprawdza redakcja językowa

- zgodność z zasadami języka polskiego;
- poprawność ortograficzną;
- poprawność gramatyczną;
- poprawność fleksyjną;
- poprawność interpunkcyjną;
- naturalny szyk zdań;
- płynność czytania;
- brak wzorców językowych AI (rozdział 12);
- zgodność tonu z filozofią projektu (rozdziały 2–3);
- zgodność z limitami długości ([LESSON_STANDARD.md](LESSON_STANDARD.md)).

### Kryteria odrzucenia

Tekst **nie trafia do publikacji**, jeśli:

- zawiera błędy ortograficzne, gramatyczne lub interpunkcyjne;
- brzmi sztucznie lub jak tekst wygenerowany przez AI;
- nie przechodzi testu głośnego czytania;
- nie spełnia checklisty z rozdziału 15;
- wprowadza ton zakazany w rozdziale 13.

---

## 15. Checklist przed uznaniem tekstu za gotowy

Każdy tekst — przed wpisaniem do JSON lekcji i przed publikacją — przechodzi poniższą checklistę. Wszystkie punkty muszą być spełnione.

### Język i forma

- [ ] Tekst jest zgodny z zasadami języka polskiego
- [ ] Brak błędów ortograficznych, gramatycznych, fleksyjnych i interpunkcyjnych
- [ ] Brzmi naturalnie — nie jak tekst wygenerowany przez AI
- [ ] Nie zawiera charakterystycznych konstrukcji AI (rozdział 12)
- [ ] Każde zdanie wnosi nową informację
- [ ] Można usunąć każde zdanie tylko kosztem utraty sensu — brak zdań zbędnych
- [ ] Akapity są krótkie (max 2–4 zdania)
- [ ] Tekst dobrze czyta się na telefonie
- [ ] Po przeczytaniu na głos brzmi naturalnie
- [ ] Przeszedł autokrytykę autora (rozdział 14) — wszystkie pytania mają pozytywną odpowiedź

### Dydaktyka i ton

- [ ] Język jest odpowiedni dla uczennicy w wieku 14–18 lat
- [ ] Tekst najpierw uczy, a dopiero później sprawdza wiedzę
- [ ] Zastosowano show, don't tell — obserwacja przed definicją, gdy temat na to pozwala
- [ ] Lekcja ma jedną główną myśl — tekst do niej prowadzi
- [ ] Ton jest naturalny, prosty, profesjonalny i ciepły — bez tonu szkolnego, infantylnego, mentorskiego, encyklopedycznego i marketingowego
- [ ] Brak moralizowania, presji egzaminacyjnej i zawstydzania za błędy
- [ ] Terminy fachowe wprowadzone stopniowo, z krótkim wyjaśnieniem

### Elementy lekcji

- [ ] Intro: kontekst i motywacja, bez zdradzania odpowiedzi
- [ ] Część edukacyjna: sens → mechanizm → zapamiętanie
- [ ] Pytania: nie zdradzają odpowiedzi przed feedbackiem
- [ ] Feedback: werdykt + wyjaśnienie, ton wspierający
- [ ] Completion: podsumowanie wiedzy, nie liczby punktów
- [ ] Teaser: 1 zdanie, ciekawość, nie spis treści

### Limity i spójność

- [ ] Teksty mieszczą się w limitach długości ([LESSON_STANDARD.md, rozdział 13](LESSON_STANDARD.md))
- [ ] Spójne z istniejącymi lekcjami modułu — ten sam głos, ten sam poziom formalności

---

*Ostatnia aktualizacja dokumentu: lipiec 2026*
