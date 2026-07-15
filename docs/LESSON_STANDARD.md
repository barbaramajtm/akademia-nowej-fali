# Standard lekcji — Akademia Nowej Fali

Oficjalny dokument określający wymagania dotyczące tworzenia każdej lekcji w projekcie. Stanowi rozwinięcie [dokumentacji projektu](PROJECT.md) w zakresie treści dydaktycznych i struktury pliku JSON.

Każda lekcja to plik JSON w katalogu `lessons/`, ładowany przez uniwersalny silnik aplikacji. Nowa lekcja nie wymaga zmian w kodzie, o ile wykorzystuje istniejące typy zadań i pola intro.

## Spis treści

1. [Cel standardu](#1-cel-standardu)
2. [Struktura każdej lekcji](#2-struktura-każdej-lekcji)
3. [Cele dydaktyczne lekcji](#3-cele-dydaktyczne-lekcji)
4. [Intro](#4-intro)
5. [Część edukacyjna](#5-część-edukacyjna)
6. [Ilustracje](#6-ilustracje)
7. [Projektowanie pytań](#7-projektowanie-pytań)
8. [Typy pytań](#8-typy-pytań)
9. [Feedback](#9-feedback)
10. [Completion](#10-completion)
11. [Teaser następnej lekcji](#11-teaser-następnej-lekcji)
12. [Punktacja (Kosmyki)](#12-punktacja-kosmyki)
13. [Długość tekstów](#13-długość-tekstów)
14. [Zasady językowe](#14-zasady-językowe)
15. [Zasady merytoryczne](#15-zasady-merytoryczne)
16. [Standard jakości przed publikacją](#16-standard-jakości-przed-publikacją)

---

## 1. Cel standardu

Niniejszy standard służy trzem celom:

1. **Spójność dydaktyczna** — każda lekcja realizuje tę samą filozofię nauczania opisaną w [PROJECT.md](PROJECT.md): najpierw zrozumienie, potem sprawdzenie; krótkie sesje; aktywne uczenie się; natychmiastowy feedback.
2. **Spójność techniczna** — każda lekcja ma przewidywalną strukturę JSON zgodną z silnikiem aplikacji.
3. **Spójność jakościowa** — każda lekcja przechodzi ten sam proces weryfikacji przed publikacją.

Standard obowiązuje wszystkich twórców treści. Odchylenia wymagają uzasadnienia i zapisu w dokumentacji projektu.

---

## 2. Struktura każdej lekcji

Każda lekcja składa się z następujących elementów, w tej kolejności:

| Element | Obowiązkowy | Opis |
|---------|-------------|------|
| **Intro** | tak | Wprowadzenie: kontekst, stawka, przycisk startu |
| **Część edukacyjna** | tak | Krótkie wprowadzenie merytoryczne przed zadaniami |
| **Ilustracja** | nie | Maksymalnie jedna na lekcję; tylko gdy wspiera naukę |
| **5 zadań** | tak | Seria interaktywnych pytań weryfikujących wiedzę |
| **Feedback** | tak | Pełna informacja zwrotna po każdym zadaniu |
| **Completion** | tak | Ekran ukończenia z podsumowaniem |
| **Teaser następnej lekcji** | tak | Zapowiedź kolejnego kroku w module |

### Plik JSON — pola główne

```json
{
  "schemaVersion": 1,
  "id": "identyfikator-lekcji",
  "title": "Tytuł lekcji",
  "category": "Nazwa modułu",
  "levelLabel": "Etykieta poziomu",
  "intro": { },
  "rewards": { },
  "tasks": [ ],
  "completion": { }
}
```

- **`id`** — unikalny identyfikator; zgodny z nazwą pliku (`lessons/{id}.json`).
- **`category`** — nazwa modułu merytorycznego (np. „pH we fryzjerstwie”).
- **`levelLabel`** — etykieta poziomu trudności w module (np. „Podstawy”, „Zabiegi”).

Po utworzeniu pliku JSON lekcja wymaga wpisu w `js/lessons-catalog.js` z ewentualnym `requiresLessonId` określającym kolejność odblokowywania.

---

## 3. Cele dydaktyczne lekcji

### Jedna główna myśl

Każda lekcja uczy **jednej głównej myśli** — jednego kluczowego pojęcia, zasady lub umiejętności. Lekcja nie jest zbiorczym testem z wielu tematów.

Przykład: lekcja „Co oznacza pH?” uczy odczytywania skali pH — nie obejmuje jednocześnie wpływu pH na włos ani doboru preparatów. Te zagadnienia należą do kolejnych lekcji w spirali modułu.

### Najpierw uczymy, potem sprawdzamy

Lekcja wprowadza kontekst i buduje zrozumienie (intro + część edukacyjna), zanim uczennica trafi na zadania weryfikujące. Aplikacja nie jest testem egzaminacyjnym — jest narzędziem do uczenia się.

### Pytania zgodne z celem lekcji

Zadania sprawdzają **zrozumienie** głównej myśli lekcji lub **utrwalają** wiedzę wprowadzoną w części edukacyjnej. Pytania nie wychodzą poza zakres lekcji ani nie wprowadzają nowych pojęć, których uczennica jeszcze nie poznała.

### Kontekst fryzjerski

Wiedza jest osadzona w sytuacjach zawodowych — koloryzacja, pielęgnacja, zabiegi chemiczne, praca w salonie — zgodnie z zasadą Context-Based Learning opisaną w [PROJECT.md](PROJECT.md).

### Powiązanie ze spiralą

Lekcja nawiązuje do wcześniejszych lekcji modułu i przygotowuje grunt pod kolejne. Kluczowe pojęcia wracają w nowym kontekście, ale każda lekcja wnosi nową warstwę zrozumienia.

---

## 4. Intro

Intro to pierwszy ekran lekcji. Jego zadaniem jest:

- powiedzieć uczennicy, **o czym** jest lekcja;
- zbudować **kontekst** i motywację do nauki;
- pokazać **stawkę** (nagrodę w Kosmykach);
- umożliwić rozpoczęcie lekcji jednym kliknięciem.

### Pola intro

| Pole | Obowiązkowe | Rola |
|------|-------------|------|
| `narratorText` | tak | Krótki tekst wprowadzający — kontekst lekcji, główna myśl |
| `stakeText` | tak | Informacja o nagrodzie, np. „do 75 Kosmyków” |
| `startButtonLabel` | tak | Etykieta przycisku startu, np. „Zacznij lekcję” |

Intro musi być **czytelne na ekranie telefonu** — krótkie zdania, bez długich akapitów. Szczegółowe zasady językowe: [WRITING_STYLE.md](WRITING_STYLE.md) (w przygotowaniu).

---

## 5. Część edukacyjna

Część edukacyjna to krótki blok treści, który **naucza** zanim uczennica trafi na zadania. Realizuje zasadę „najpierw zrozumienie, potem sprawdzenie” oraz wspiera Dual Coding Theory — łączenie kanału werbalnego z wizualnym, gdy to możliwe.

### Formy implementacji w JSON

Silnik obsługuje opcjonalne ekrany edukacyjne wewnątrz `intro`:

| Blok | Zastosowanie |
|------|--------------|
| `scaleGuide` | Wyjaśnienie oparte na tekście, z etykietami i pomocniczym opisem (np. skala pH) |
| `hairGuide` | Wyjaśnienie z ilustracją lub schematem (np. wpływ pH na włos) |

Gdy dedykowany ekran edukacyjny nie jest potrzebny, rolę części edukacyjnej pełni rozbudowany `narratorText` w intro — pod warunkiem, że wprowadza wiedzę wymaganą do rozwiązania zadań.

### Zasady

- Część edukacyjna jest **krótka** — mieści się w jednym ekranie telefonu.
- Wprowadza **tylko** wiedzę potrzebną do tej lekcji — bez wyprzedzania kolejnych modułów.
- Nie zastępuje zadań — po niej następuje seria 5 pytań weryfikujących i utrwalających.
- Uproszczenia dydaktyczne są dopuszczalne, ale nie mogą wprowadzać w błąd.

---

## 6. Ilustracje

Ilustracja w lekcji to **element nauki**, nie dekoracja. Musi wspierać zrozumienie głównej myśli lekcji — np. schemat struktury włosa, diagram skali pH, porównanie efektów zabiegu.

### Zasady

- **Maksymalnie jedna ilustracja** na lekcję.
- Ilustracja pojawia się w części edukacyjnej (np. w bloku `hairGuide`), nie w zadaniach ani na ekranie completion.
- Każda ilustracja wymaga tekstu alternatywnego (`imageAlt`) i — gdy potrzebne — podpisu (`imageCaption`).
- Ilustracja musi być zgodna z aktualną wiedzą fryzjerską i materiałami źródłowymi projektu.

Szczegółowe wytyczne dotyczące stylu graficznego, formatów, nazewnictwa plików i lokalizacji zasobów:

**→ [docs/ILLUSTRATION_GUIDE.md](ILLUSTRATION_GUIDE.md)**

---

## 7. Projektowanie pytań

### Zasada nadrzędna

Pytania **sprawdzają zrozumienie** lub **utrwalają wiedzę** wprowadzoną w części edukacyjnej. Nie testują wiedzy spoza zakresu lekcji.

### Struktura serii 5 zadań

| Krok | Typowa rola | Typowa trudność |
|------|---------------|-----------------|
| 1 | Rozpoznanie podstawowej zasady | niska |
| 2 | Weryfikacja zrozumienia (prawda/mit) | niska |
| 3 | Zastosowanie w kontekście (dopasowanie) | średnia |
| 4 | Rozróżnienie podobnych pojęć | średnia |
| 5 | Podsumowanie głównej myśli lekcji | wyższa |

Trudność rośnie wraz z numerem kroku (Scaffolding). Ostatnie zadanie powinno wymagać syntezy wiedzy z całej lekcji.

### Różnorodność typów (Interleaving)

W ramach jednej lekcji stosuj **różne typy zadań** — wybór, prawda/mit, dopasowanie, układanie. Różnorodność wymusza elastyczne stosowanie wiedzy, a nie mechaniczne powtarzanie jednego schematu.

Preferowane: **żadne dwa kolejne kroki nie mają tego samego typu** zadania.

### Pola wspólne każdego zadania

| Pole | Rola |
|------|------|
| `id` | Unikalny identyfikator zadania w lekcji |
| `type` | Typ zadania (patrz [rozdział 8](#8-typy-pytań)) |
| `kicker` | Krótka etykieta kroku, np. „Krok 1 · Punkt odniesienia” |
| `question` | Treść pytania |
| `reward` | Liczba Kosmyków za poprawną odpowiedź |
| `checkButtonLabel` | Etykieta przycisku sprawdzania, np. „Sprawdź” |
| `feedback` | Obiekt z informacją zwrotną (patrz [rozdział 9](#9-feedback)) |

### Zasada odkrywania

Pytanie i opcje odpowiedzi **nie mogą zdradzać** poprawnej odpowiedzi przed sprawdzeniem. Uczennica ma samodzielnie odzyskać wiedzę (Active Recall, Generation Effect) — pełne wyjaśnienie pojawia się dopiero w feedbacku.

---

## 8. Typy pytań

Silnik aplikacji obsługuje **5 typów zadań**. Nowe typy wymagają decyzji produktowej i zmian w kodzie — nie dodajemy ich samodzielnie.

### `singleChoice` — wybór jednej odpowiedzi

Uczennica wybiera jedną opcję z listy.

Pola specyficzne: `options[]` (tablica z `id` i `text`), `correctOptionId`.

**Kiedy stosować:** weryfikacja faktów, rozróżnianie pojęć, wybór właściwej procedury.

### `trueFalse` — prawda czy mit

Uczennica ocenia, czy stwierdzenie jest prawdziwe.

Pola specyficzne: `trueLabel`, `falseLabel`, `correctValue` (boolean).

**Kiedy stosować:** szybka weryfikacja zrozumienia pojedynczej zasady; korygowanie popularnych mitów.

### `matching` — dopasowanie par

Uczennica łączy elementy z dwóch kolumn.

Pola specyficzne: `leftTitle`, `rightTitle`, `left[]`, `right[]` (elementy z `pairId` określającym poprawne pary).

**Kiedy stosować:** powiązania między pojęciami (np. wartość pH ↔ odczyn, preparat ↔ zastosowanie).

### `ordering` — układanie kolejności

Uczennica ustawia elementy we właściwej kolejności.

Pola specyficzne: `items[]` (z `id`, `text`, `correctOrder`).

**Kiedy stosować:** sekwencje procedur, etapy zabiegu, stopniowanie trudności.

### `findError` — znajdź błąd

Uczennica wskazuje błędne stwierdzenie w zestawie.

Pola specyficzne: `statements[]` (z `id`, `text`, `isError`).

**Kiedy stosować:** rozpoznawanie typowych pomyłek; uczenie się na błędach (Error-Based Learning).

---

## 9. Feedback

Po każdej odpowiedzi uczennica otrzymuje **natychmiastową informację zwrotną** (Immediate Feedback). Błąd jest okazją do nauki, nie karą.

### Struktura feedbacku

| Pole | Obowiązkowe | Rola |
|------|-------------|------|
| `correctTitle` | tak | Krótki komunikat po poprawnej odpowiedzi |
| `incorrectTitle` | tak | Łagodny komunikat po błędnej odpowiedzi |
| `explanation` | tak | Wyjaśnienie — dlaczego odpowiedź jest poprawna lub błędna |
| `funFact` | nie | Dodatkowa wskazówka praktyczna (pole `funFact.text`) |

### Zasady

- **Pełny feedback** — każde z 5 zadań musi zawierać komplet pól `correctTitle`, `incorrectTitle` i `explanation`.
- **Najpierw werdykt, potem wyjaśnienie** — uczennica od razu wie, czy odpowiedź była poprawna, a następnie czyta uzasadnienie.
- **Ton wspierający** — `incorrectTitle` nie ocenia uczennicy; zachęca do ponownego sprawdzenia (np. „Sprawdź jeszcze raz.”).
- **Wyjaśnienie merytoryczne** — `explanation` tłumaczy zasadę, nie tylko podaje poprawną odpowiedź.
- **Bez tonu egzaminacyjnego** — feedback nie odwołuje się do egzaminu, programu nauczania ani numerów modułów.
- **Błąd nie karze** — błędna odpowiedź nie odejmuje Kosmyków; uczennica może ponowić odpowiedź w silniku.

Szczegółowe zasady językowe feedbacku: [WRITING_STYLE.md](WRITING_STYLE.md) (w przygotowaniu).

---

## 10. Completion

Ekran ukończenia (`completion`) domyka lekcję i daje uczennicy poczucie osiągnięcia (Positive Reinforcement).

### Pola completion

| Pole | Rola |
|------|------|
| `solvedLabel` | Etykieta statusu, np. „Lekcja ukończona” |
| `title` | Podsumowanie tego, czego uczennica się nauczyła |
| `subtitle` | Uzupełnienie — co teraz potrafi zrobić lub zrozumieć |
| `kosmykiLabel` | Etykieta podsumowania nagrody, np. „Kosmyków za tę lekcję” |
| `nextLesson` | Obiekt z zapowiedzią kolejnej lekcji (patrz [rozdział 11](#11-teaser-następnej-lekcji)) |

### Zasady

- `title` i `subtitle` odnoszą się do **głównej myśli lekcji** — nie do liczby poprawnych odpowiedzi.
- Completion buduje **poczucie postępu** — uczennica wie, co opanowała i co jest następne.
- Ekran completion nie wprowadza nowej wiedzy merytorycznej.

---

## 11. Teaser następnej lekcji

Teaser to zapowiedź kolejnej lekcji w module, umieszczona w `completion.nextLesson`.

### Pola

| Pole | Rola |
|------|------|
| `label` | Etykieta sekcji, np. „Następna lekcja” |
| `teaser` | Jedno zdanie budujące ciekawość — o czym będzie kolejna lekcja |

### Zasady

- Teaser **nie jest spisem treści** — ma wzbudzić chęć kontynuacji, nie wymieniać wszystkich tematów.
- Teaser nawiązuje do głównej myśli bieżącej lekcji i naturalnie prowadzi do następnego kroku w spirali.
- W ostatniej lekcji modułu teaser może zapowiadać podsumowanie modułu lub pierwszą lekcję kolejnego modułu.

---

## 12. Punktacja (Kosmyki)

### Standardowa dystrybucja

Każda lekcja przyznaje **75 Kosmyków** za poprawne odpowiedzi w 5 zadaniach:

| Krok | Kosmyki |
|------|---------|
| 1 | 10 |
| 2 | 10 |
| 3 | 15 |
| 4 | 15 |
| 5 | 25 |
| **Razem** | **75** |

Nagrody rosną wraz z numerem kroku — ostatnie zadanie wymaga syntezy wiedzy i jest najbardziej punktowane.

### Bonusy (`rewards`)

Oprócz Kosmyków za poszczególne zadania lekcja może przyznawać bonusy:

| Bonus | Typowa wartość | Warunek |
|-------|----------------|---------|
| `streakBonus` | +5 | Np. 3 poprawne odpowiedzi z rzędu w lekcji |
| `perfectBonus` | +15 | Lekcja ukończona bez żadnej pomyłki |

Bonusy są **dodatkową nagrodą** — błąd nie odejmuje Kosmyków, tylko uniemożliwia zdobycie bonusu.

### Pola w JSON

```json
"rewards": {
  "streakBonus": { "threshold": 3, "amount": 5, "label": "3 poprawne z rzędu" },
  "perfectBonus": { "amount": 15, "label": "Lekcja bez pomyłek" }
}
```

Wartości bonusów i etykiety mogą być dostosowane do kontekstu lekcji, ale dystrybucja 10 + 10 + 15 + 15 + 25 jest stała.

---

## 13. Długość tekstów

Lekcja ma być **czytelna na ekranie telefonu** i mieścić się w kilku minutach interakcji (~4–5 minut). Poniższe limity są orientacyjne — ich przekroczenie wymaga uzasadnienia.

| Element | Limit orientacyjny |
|---------|-------------------|
| `intro.narratorText` | 1–3 zdania, max ~250 znaków |
| Część edukacyjna (`scaleGuide.text`, `hairGuide.text`) | max ~400 znaków |
| `tasks[].kicker` | max ~45 znaków, format: „Krok N · …” |
| `tasks[].question` | 1–2 zdania, max ~220 znaków |
| Opcja odpowiedzi (`options[].text`) | max ~100 znaków |
| Element dopasowania (`left[].text`, `right[].text`) | max ~80 znaków |
| `feedback.explanation` | 2–4 zdania, max ~350 znaków |
| `feedback.funFact.text` | 1–2 zdania, max ~200 znaków |
| `completion.title` | 1 zdanie, max ~80 znaków |
| `completion.subtitle` | 1–2 zdania, max ~200 znaków |
| `completion.nextLesson.teaser` | 1 zdanie, max ~100 znaków |

Szczegółowe zasady stylu pisania i długości zdań: [WRITING_STYLE.md](WRITING_STYLE.md) (w przygotowaniu).

---

## 14. Zasady językowe

### Zasady ogólne

- Język **prosty i zrozumiały** dla uczennic w wieku 14–18 lat.
- Terminy fachowe wprowadzane **stopniowo** — najpierw wyjaśnienie, potem użycie w zadaniu.
- Zdania **krótkie** — jedna myśl na zdanie.
- Ton **wspierający**, bez moralizowania i bez presji egzaminacyjnej.
- Wiedza osadzona w **kontekście fryzjerskim** — nie jako abstrakcyjne definicje.

### Czego unikać

- Tonu podręcznika („Moduł 3”, „Zgodnie z programem nauczania…”).
- Moralizowania i zawstydzania za błędy.
- Skomplikowanych zdań wielokrotnie złożonych.
- Żargonu niewyjaśnionego w tej lub wcześniejszej lekcji.
- Dosłownego kopiowania sformułowań z materiałów egzaminacyjnych.

### Dokument uzupełniający

Szczegółowe zasady stylu językowego, tonu komunikacji, formatowania segmentów tekstu i konwencji nazewniczych zostaną opisane w:

**→ [docs/WRITING_STYLE.md](WRITING_STYLE.md)** (w przygotowaniu)

Do czasu publikacji tego dokumentu obowiązują zasady ogólne z niniejszego rozdziału oraz wzorce z istniejących lekcji modułu pH.

---

## 15. Zasady merytoryczne

Zasady merytoryczne wynikają bezpośrednio z [Standardu merytorycznego](PROJECT.md#12-standard-merytoryczny) w PROJECT.md.

### Źródła wiedzy

Treści merytoryczne pochodzą wyłącznie z:

- materiałów egzaminacyjnych projektu (`source-materials/`);
- zweryfikowanych materiałów branżowych i dydaktycznych;
- audytów merytorycznych przygotowanych w ramach projektu.

Projekt **nie wymyśla faktów** ani nie opiera się na wiedzy ogólnej bez weryfikacji w źródłach.

### Nie kopiujemy dosłownie

Materiały egzaminacyjne określają **zakres** wiedzy, nie gotowy tekst lekcji. Treść lekcji jest **przepisana własnymi słowami**, zgodnie z aktualną wiedzą fryzjerską i zasadami językowymi projektu.

### Aktualność wiedzy

Treść musi być zgodna z **aktualną wiedzą fryzjerską**. Jeżeli materiały źródłowe są nieaktualne lub sprzeczne z obecnym stanem wiedzy branżowej:

1. **Odnotuj rozbieżność** — w audycie merytorycznym lub komentarzu przy tworzeniu lekcji.
2. **Opieraj lekcję na aktualnej wiedzy** — nie reprodukuj błędów ze źródeł.
3. **Uzasadnij wybór** — krótki zapis, dlaczego treść lekcji odbiega od materiału źródłowego.

### Uproszczenia dydaktyczne

Uproszczenia są dopuszczalne, ale:

- nie mogą wprowadzać w błąd;
- muszą być zgodne z kierunkiem prawdy naukowej;
- w razie wątpliwości — oznacz fakt do weryfikacji przed publikacją.

### Egzamin vs. salon

Program obejmuje tematy wymagane na egzaminie oraz tematy przydatne w codziennej pracy. Sposób prezentacji zależy od typu zagadnienia:

- **Tematy praktyczne** (pH, koloryzacja, pielęgnacja, BHP salonu) — uczymy głębiej, w kontekście salonu.
- **Tematy formalne egzaminacyjne** (historia, przepisy, dokumentacja) — zwięźle, pod kątem wymagań egzaminacyjnych.

### Audyt źródeł

Przed publikacją każde twierdzenie merytoryczne w lekcji musi mieć potwierdzenie w źródle. Zalecana forma audytu:

| Fragment lekcji | Źródło (plik) | Lokalizacja | Status |
|-----------------|---------------|-------------|--------|
| … | … | … | OK / DO WERYFIKACJI / BRAK |

Fakty oznaczone jako wymagające weryfikacji **nie trafiają do lekcji** bez potwierdzenia.

---

## 16. Standard jakości przed publikacją

Każda lekcja przechodzi weryfikację przed dodaniem do katalogu i publikacją na `main`. Proces jest zgodny z [Workflow tworzenia treści](PROJECT.md#13-workflow-tworzenia-treści) opisanym w PROJECT.md.

### Checklist obowiązkowa

**Struktura i dydaktyka**

- [ ] Lekcja uczy **jednej głównej myśli**
- [ ] Intro + część edukacyjna wprowadzają wiedzę **przed** zadaniami
- [ ] Dokładnie **5 zadań** z rosnącymi nagrodami (10 + 10 + 15 + 15 + 25)
- [ ] Różne typy zadań w lekcji (Interleaving)
- [ ] Pełny feedback w każdym zadaniu (`correctTitle`, `incorrectTitle`, `explanation`)
- [ ] Ekran completion z podsumowaniem i teaserem następnej lekcji
- [ ] Maksymalnie **jedna ilustracja** (jeśli użyta — z `imageAlt` i podpisem)

**Merytoryka**

- [ ] Audyt źródeł ukończony — każde twierdzenie ma potwierdzenie
- [ ] Treść zgodna z aktualną wiedzą fryzjerską
- [ ] Rozbieżności ze źródłami odnotowane i uzasadnione
- [ ] Brak dosłownego kopiowania materiałów egzaminacyjnych

**Język i czytelność**

- [ ] Teksty mieszczą się w limitach długości (rozdział 13)
- [ ] Lekcja czytelna na ekranie telefonu
- [ ] Ton wspierający, bez tonu egzaminacyjnego

**Integracja techniczna**

- [ ] Plik JSON w `lessons/{id}.json` — poprawna składnia
- [ ] Wpis w `js/lessons-catalog.js` z `requiresLessonId` (jeśli wymagane)
- [ ] Test lokalny — lekcja uruchamia się, przepływ intro → zadania → completion działa
- [ ] Odblokowywanie kolejnej lekcji działa poprawnie po ukończeniu

**Dokumentacja**

- [ ] Wpis w `CHANGELOG.md`
- [ ] Aktualizacja stanu w `docs/PROJECT.md` (jeśli dotyczy)

### Kryteria odrzucenia

Lekcja **nie jest publikowana**, jeśli:

- zawiera twierdzenia merytoryczne bez potwierdzenia w źródle;
- wprowadza więcej niż jedną główną myśl;
- pomija część edukacyjną i zaczyna od testu;
- ma inną liczbę zadań niż 5;
- zawiera błędy JSON uniemożliwiające uruchomienie w silniku.

---

*Ostatnia aktualizacja dokumentu: lipiec 2026*
