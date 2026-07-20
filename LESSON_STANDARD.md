# Standard lekcji — Akademia Nowej Fali

Dokument referencyjny dla tworzenia każdej Sprawy (lekcji). Obowiązuje od wersji z L6 jako drugą pełną lekcją referencyjną.

**Zasada nadrzędna:** lekcja to jedna wizyta klientki w salonie, nie test egzaminacyjny w przebraniu fabuły.

**Model treści:** rozdział odpowiada działowi egzaminu; lekcja odpowiada jednej wizycie; w wizycie można naturalnie połączyć 2–4 powiązane zagadnienia egzaminowe.

---

## 1. Struktura lekcji

Każda lekcja to jeden plik JSON w `lessons/`, zgodny ze schematem silnika (`schemaVersion: 1`).

### Intro

| Pole | Rola |
|------|------|
| `clientQuote` | Głos klientki — problem, emocja, stawka osobista (segmenty `{ text, bold? }`) |
| `clientName` | Imię (bez wieku, jeśli nie jest konieczny fabularnie) |
| `narratorText` | Jedno zdanie: co dziś robisz jako stylistka |
| `stakeText` | Nagroda sesyjna + ewentualnie kolekcja |
| `startButtonLabel` | Zawsze język salonu, np. „Przyjmij klientkę” |

### Problem klientki

- Jeden główny problem na całą lekcję — widoczny już w intro.
- Wszystkie 5 kroków **popycha ten problem do rozwiązania**, nie odbija od losowych tematów.

### 5 kroków (`tasks[]`)

- Dokładnie **5 zadań**.
- Każde ma: `id`, `type`, `kicker`, `question`, `reward`, `checkButtonLabel`, `feedback`.
- **Rytm mechanik:** żadne dwa kolejne kroki nie mają tego samego `type`. Preferowany układ: rozpoznanie → decyzja → diagnoza → dopasowanie → plan (kolejność dopasowana do historii).
- **Nagrody rosnące:** typowo `10 → 10 → 15 → 15 → 25` (łącznie 75 Kosmyków bazowych + bonusy).

Dozwolone typy (bez dodawania nowych bez decyzji produktowej): `singleChoice`, `trueFalse`, `findError`, `matching`, `ordering`.

### Zakończenie (`completion`)

| Pole | Rola |
|------|------|
| `solvedLabel` | Np. „Sprawa rozwiązana” |
| `title` | Skutek dla klientki (ludzki, nie punktowy) |
| `subtitle` | Cytat klientki po udanej wizycie |
| `collection` | `earnedBefore`, `total` — postęp w Gablocie |
| `nextLesson.teaser` | Niedomknięta historia — ciekawość, nie spis treści |

### Nagrody (`rewards`)

- `streakBonus`: np. 3 poprawne z rzędu → +5, etykieta zawodowa (np. „Pewna ręka”).
- `perfectBonus`: lekcja bez pomyłek → +20, etykieta wizyty (np. „Perfekcyjna wizyta”).
- Błąd **nie karze** — tylko nie daje bonusu.

---

## 2. Zasady fabuły

1. **Jedna klientka** — jedno imię, jedna historia, jedna puenta.
2. **Jeden główny problem** — np. pierwsza koloryzacja z lękiem, utrata koloru, nierówne wchłanianie.
3. **Jedna spójna wizyta** — da się opowiedzieć od „Przyjmij klientkę” do „Sprawa rozwiązana” bez skoku w czasie lub zmiany klientki.
4. **Naturalny przebieg konsultacji:**
   - najpierw rozmowa / obserwacja,
   - potem decyzje zawodowe,
   - na końcu plan lub domknięcie zabiegu.
5. **Uniwersalność** — historia ma być bliska wielu użytkowniczkom (14–18 lat). Unikać: studniówka, ślub, wiek jako główny wątek, odniesień do jednej sytuacji życiowej.
6. **Realizm pierwszego kroku** — klientka **zgłasza** obawę lub objaw; stylistka **odkrywa** stan podczas konsultacji. Nie zaczynać od gotowej diagnozy widocznej na ekranie (np. „ropna zmiana już jest”).
7. **Fabuła nie zastępuje merytoryki** — wiedza egzaminowa jest **wewnątrz** decyzji stylistki, nie obok niej.

### Zasada odkrywania

Użytkowniczka ma dochodzić do informacji poprzez rozmowę z klientką, obserwację i własne decyzje.

Treść zadania nie może zdradzać diagnozy ani poprawnej odpowiedzi. Najpierw użytkowniczka zbiera informacje, a dopiero feedback ujawnia pełny obraz sytuacji.

Dotyczy **wszystkich kroków**, nie tylko pierwszego: pytanie, opcje i `clientIntro` nie mogą zawierać faktów, które stylistka dopiero ma ustalić (np. rodzaj wcześniejszego zabiegu, stężenie utleniacza, diagnoza stanu włosów).

---

## 3. Zasady merytoryczne

1. **2–4 powiązane zagadnienia** egzaminowe na lekcję — powiązane przyczynowo w jednej wizycie, nie lista losowych faktów.
2. **Wyłącznie `source-materials`** — każde twierdzenie merytoryczne musi mieć źródło w materiałach cechu (PDF, JPG, informator).
3. **Zakaz:** własna wiedza, internet, domysły, uzupełnianie braków „bo wiemy, że tak jest”.
4. **Brak w materiałach = zgłoszenie** — nie pisać lekcji na dany temat, dopóki źródło nie istnieje lub nie jest czytelne.
5. **Obowiązkowy audyt źródeł** przed akceptacją lekcji — tabela:

   | Fragment lekcji | Źródło (plik) | Lokalizacja (pyt. nr / strona) | Status |
   |-----------------|---------------|--------------------------------|--------|
   | … | … | … | OK / BRAK |

6. **Pole robocze źródeł** — opcjonalnie `_sources` w JSON (niewidoczne w UI) lub audyt w PR / changelogu; treść w `feedback.explanation` musi być pokryta audytem.
7. **Spójność z kursem** — lekcja ma miejsce w mapie Kurs → Rozdział → Sprawa; `category` i kolejność w katalogu odzwierciedlają program.

---

## 4. Zasady dialogów

1. **Krótko** — jedno zdanie klientki na raz w `clientQuote`; unikać akapitów.
2. **Naturalnie** — jak rozmowa w salonie, nie jak czytanie podręcznika na głos.
3. **Wiarygodnie** — lęk, ulga, wdzięczność, wstyd, ciekawość — emocje proste i rozpoznawalne.
4. **Klientka nie wykłada teorii** — nie mówi o utleniaczu 6%, pH ani „próbie uczuleniowej” jak instruktorka. To rola feedbacku i decyzji użytkowniczki.
5. **Stylistka też nie mówi jak podręcznik** — w pytaniach i kickers: „Od czego zaczniesz?”, „Zatwierdź plan”, nie „Wybierz poprawną odpowiedź”.
6. **`clientIntro`** (trueFalse) — cytat klientki tuż przed pytaniem; jedna myśl, często z emocją.
7. **Po błędzie** — łagodna korekta (`incorrectTitle`: np. „Prawie — spójrz jeszcze raz”); klientka nie „umiera”, wizyta trwa.

---

## 5. Zasady mentorki

**Postać:** **Ewa** — doświadczona stylistka i mentorka Akademii Nowej Fali.

| Tak | Nie |
|-----|-----|
| 1 krótki komentarz po **poprawnej** decyzji | Wykład, lista punktów, definicje |
| Praktyczna wskazówka z salonu | Ocena użytkowniczki („źle”, „słabo”) |
| Kultura pracy: bezpieczeństwo, zaufanie, tempo | Moralizowanie, straszenie |
| 1–2 zdania | Akapit |
| „Ewa: …” na początku w tekście | Wspominanie egzaminu |

**Implementacja w JSON (obecnie):** pole `feedback.funFact.text` — po poprawnej odpowiedzi. Docelowo: dedykowane pole `mentorTip` i etykieta UI „Ewa · mentorka” (zamiast „Warto wiedzieć”).

**Częstotliwość:** mentorka w większości kroków (np. 4–5 na lekcję), nie w każdym zdaniu feedbacku — tylko w `funFact` po sukcesie.

---

## 6. Zasady feedbacku

Kolejność informacji po odpowiedzi (poprawnej):

1. **`correctTitle`** — skutek zawodowy lub emocja klientki (nie „Poprawna odpowiedź”).
2. **`clientQuote`** (gdy jest) — reakcja klientki na decyzję stylistki.
3. **`explanation`** — krótkie **dlaczego**, językiem salonu; segmenty `{ text, bold? }` dla kluczowych terminów.
4. **`funFact`** — komentarz Ewy (praktyka, nie teoria).

Zasady:

- **Najpierw skutek dla klientki**, potem wyjaśnienie.
- **Bez tonu podręcznika** — unikać: „Moduł 3”, „Na egzaminie…”, „Zgodnie z programem…”.
- **Bez inflacji pochwał** — konkretne tytuły („Dobre oko”, „Plan idealny”) zamiast generycznego „Brawo”.
- **Błąd** — wyjaśnienie i tak samo merytorycznie, bez czerwonego języka kary; można ponowić decyzję w silniku.

---

## 7. Zasady emocji

1. **Klientka = człowiek** — ma imię, lęk, ulgę, wdzięczność; nie jest nośnikiem pytania egzaminacyjnego.
2. **Odpowiedzialność użytkowniczki** — każdy krok to decyzja, od której zależy komfort i bezpieczeństwo klientki.
3. **Stawka emocjonalna** — intro buduje „dlaczego to ważne”; completion domyka relację (klientka zadowolona / spokojna).
4. **Zaufanie** — szczególnie w pierwszych lekcjach kursu: słuchanie, tłumaczenie kroków, brak pośpiechu kosztem bezpieczeństwa.
5. **Powrót postaci** (opcjonalnie, w przyszłości) — ta sama klientka w późniejszej Sprawie wzmacnia więź; zapowiedź w `nextLesson.teaser`.

---

## 8. Zasady długości (orientacyjne)

Cel sesji: **~4–5 minut** czytania i interakcji.

| Element | Limit orientacyjny |
|---------|------------------|
| **Intro `clientQuote`** | 2–3 segmenty, łącznie **max ~250 znaków** |
| **Intro `narratorText`** | **1–2 zdania**, max ~180 znaków |
| **Kicker kroku** | **max ~40 znaków**, format: „Krok N · …” |
| **Pytanie (`question`)** | **1–2 zdania**, max ~220 znaków |
| **Opcje odpowiedzi** | **max ~100 znaków** na opcję |
| **Dialog klientki (`clientQuote` w feedback)** | **1 zdanie**, max ~160 znaków |
| **`clientIntro`** | **1 zdanie**, max ~180 znaków |
| **`explanation`** | **2–4 segmenty**, łącznie max ~350 znaków |
| **Komentarz Ewy (`funFact.text`)** | **1–2 zdania**, max ~200 znaków |
| **`completion.title`** | **1 zdanie**, max ~80 znaków |
| **`completion.subtitle`** | **1 cytat**, max ~200 znaków |
| **`nextLesson.teaser`** | **1 zdanie**, max ~100 znaków |

Przekroczenie limitu wymaga uzasadnienia — domyślnie skracaj.

---

## 9. Checklist przed zapisem lekcji

- [ ] 5 kroków, różne typy zadań, rosnące nagrody
- [ ] Jedna klientka, jeden problem, jedna wizyta, uniwersalna fabuła
- [ ] Konsultacja realistyczna (krok 1: słuchasz / oglądasz, nie gotowa diagnoza)
- [ ] **Zasada odkrywania** — żadne zadanie nie zdradza diagnozy przed feedbackiem
- [ ] 2–4 zagadnienia egzaminowe, naturalnie wplecione
- [ ] Audyt źródeł — tabela OK, braki zgłoszone
- [ ] Dialogi krótkie; klientka nie wykłada teorii
- [ ] Feedback: skutek → wyjaśnienie; bez egzaminu w copy
- [ ] Ewa: 1–2 zdania praktyki po poprawnych krokach
- [ ] Completion: emocjonalne domknięcie + teaser następnej Sprawy
- [ ] Wpis w `lessons-catalog.js`; `earnedBefore` zgodne z kolekcją
- [ ] Aktualizacja `PROJECT.md` i `CHANGELOG.md`

---

## 10. Pliki i integracja

Nowa lekcja wymaga:

1. `lessons/{id}.json` — treść merytoryczna
2. `js/lessons-catalog.js` — metadane, `requiresLessonId` jeśli kolejność wymuszona
3. `PROJECT.md` — stan lekcji i kolekcji
4. `CHANGELOG.md` — wpis datowany
5. **Review jakości** — ocena produktu w 5 rolach + 6 kryteriów (min. 8/10 każde); poprawki przed uznaniem lekcji za gotową

Silnik (`app.js`) **nie zmienia się** bez decyzji produktowej. Nowe typy zadań — zakaz bez zgody.

---

## 11. Review jakości (obowiązkowy)

Po napisaniu JSON i audycie źródeł — przed wpisem „gotowa” w `PROJECT.md`:

1. **Egzaminator cechu** — zgodność z `source-materials`
2. **Doświadczona stylistka** — realistyczny przebieg wizyty
3. **16-letnia uczennica** — ciekawość historii
4. **UX Designer** — tempo, zaskoczenie, chęć kolejnej Sprawy
5. **Redaktor** — naturalność dialogów, skróty

**Oceny 1–10:** merytoryka, fabuła, emocje, motywacja, dialogi, zgodność z tym standardem.

Jeśli **którekolwiek < 8** — poprawki, ponowny review. Dopiero potem następna lekcja.

---

*Dokument obowiązuje dla wszystkich Spraw tworzonych po L6. L1 pozostaje lekcją referencyjną mechaniki; L6 — referencją fabuły, emocji i mentorki.*
