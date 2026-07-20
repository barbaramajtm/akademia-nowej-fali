# Przewodnik tworzenia treści — Akademia Nowej Fali

Oficjalny dokument opisujący proces tworzenia modułów i treści edukacyjnych — od analizy źródeł do gotowego materiału przekazanego do implementacji. Stanowi uzupełnienie [dokumentacji projektu](PROJECT.md) i łączy w jednym workflow standardy opisane w:

- [LESSON_STANDARD.md](LESSON_STANDARD.md) — struktura lekcji i JSON;
- [WRITING_STYLE.md](WRITING_STYLE.md) — język i redakcja;
- [ILLUSTRATION_GUIDE.md](ILLUSTRATION_GUIDE.md) — grafika edukacyjna.

## Spis treści

1. [Cel dokumentu](#1-cel-dokumentu)
2. [Źródła treści](#2-źródła-treści)
3. [Audyt materiałów źródłowych](#3-audyt-materiałów-źródłowych)
4. [Cel i zakres modułu](#4-cel-i-zakres-modułu)
5. [Rodzaje wiedzy](#5-rodzaje-wiedzy)
6. [Zakres egzaminacyjny i salonowy](#6-zakres-egzaminacyjny-i-salonowy)
7. [Masterplan modułu](#7-masterplan-modułu)
8. [Kolejność lekcji](#8-kolejność-lekcji)
9. [Scenariusz pojedynczej lekcji](#9-scenariusz-pojedynczej-lekcji)
10. [Projektowanie pytań](#10-projektowanie-pytań)
11. [Spiralny model nauki](#11-spiralny-model-nauki)
12. [Powtórki pomiędzy modułami](#12-powtórki-pomiędzy-modułami)
13. [Metadane i tagowanie pytań](#13-metadane-i-tagowanie-pytań)
14. [Review merytoryczny](#14-review-merytoryczny)
15. [Review dydaktyczny](#15-review-dydaktyczny)
16. [Review językowy](#16-review-językowy)
17. [Przekazanie materiału do implementacji](#17-przekazanie-materiału-do-implementacji)
18. [Testy po implementacji](#18-testy-po-implementacji)
19. [Kryteria ukończenia modułu](#19-kryteria-ukończenia-modułu)

---

## 1. Cel dokumentu

Niniejszy przewodnik określa **pełny proces tworzenia treści** w Akademii Nowej Fali — od zebrania i weryfikacji źródeł, przez planowanie modułu i scenariusze lekcji, po review, implementację i testy.

Dokument służy autorom treści, redaktorom merytorycznym i osobom przekazującym materiał do implementacji technicznej. Jego celem jest zapewnienie, że każdy moduł:

- opiera się na zweryfikowanych źródłach;
- ma jasno określony cel dydaktyczny;
- realizuje filozofię nauczania projektu;
- przechodzi kontrolę jakości przed publikacją;
- jest gotowy do implementacji bez luźnych notatek.

Implementacja techniczna (pliki JSON, wpisy w katalogu) następuje **dopiero po** zaakceptowaniu masterplanu i scenariuszy.

---

## 2. Źródła treści

Treści Akademii powstają na podstawie **wielu źródeł**. Moduł nie opiera się wyłącznie na jednym dokumencie.

### Źródła podstawowe

| Źródło | Rola |
|--------|------|
| Informator egzaminacyjny 2026 | Zakres wymagań egzaminacyjnych |
| Materiały do egzaminu fryzjerskiego | Treść programowa, kontekst zawodowy |
| Bazy pytań egzaminacyjnych | Identyfikacja typowych zagadnień i pułapek |
| Klucze odpowiedzi | Weryfikacja poprawności odpowiedzi egzaminacyjnych |
| Materiałoznawstwo | Wiedza o produktach, składzie, działaniu |
| Maszynoznawstwo | Urządzenia i narzędzia salonowe |
| Technologia fryzjerska | Procedury, zabiegi, sekwencje pracy |
| Przepisy (egzamin, działalność) | Wymogi formalne, BHP, prawo |
| Pliki PDF i JPG w projekcie (`source-materials/`) | Materiały robocze i archiwalne |
| Aktualna literatura fryzjerska | Weryfikacja praktyki zawodowej |
| Aktualna wiedza naukowa i branżowa | Korekta nieaktualnych informacji |

### Ograniczenia materiałów źródłowych

Materiały źródłowe mogą zawierać:

- uproszczenia;
- błędy;
- informacje nieaktualne;
- nieprecyzyjne odpowiedzi;
- stare nazewnictwo;
- różnice między wiedzą egzaminacyjną a współczesną praktyką salonową.

Materiały egzaminacyjne określają **zakres**, nie automatyczną prawdę naukową. Treści podlegają audytowi przed użyciem w lekcjach.

Informacje dotyczące przepisów, prawa, bezpieczeństwa, produktów, technologii i innych danych podatnych na zmianę wymagają **weryfikacji aktualności** przed wykorzystaniem.

---

## 3. Audyt materiałów źródłowych

Przed przygotowaniem modułu przeprowadza się audyt źródeł według poniższej procedury:

1. **Zebrać** zagadnienia ze wszystkich dostępnych źródeł.
2. **Porównać** informacje między źródłami.
3. **Wykryć** sprzeczności.
4. **Sprawdzić** aktualną wiedzę branżową i naukową.
5. **Wybrać** wersję merytorycznie poprawną.
6. **Odnotować**, jakiej odpowiedzi może wymagać egzamin, jeżeli różni się od współczesnej praktyki.
7. **Nie kopiować** materiałów źródłowych dosłownie.

### Forma zapisu audytu

Zalecana tabela audytu dla każdego modułu:

| Zagadnienie | Źródło (plik) | Lokalizacja | Status | Uwagi / rozbieżności |
|-------------|---------------|-------------|--------|----------------------|
| … | … | … | OK / DO WERYFIKACJI / BRAK | … |

Fakty ze statusem **DO WERYFIKACJI** lub **BRAK** nie trafiają do scenariuszy lekcji bez potwierdzenia.

Szczegóły weryfikacji merytorycznej w lekcjach: [LESSON_STANDARD.md, rozdział 15](LESSON_STANDARD.md#15-zasady-merytoryczne).

---

## 4. Cel i zakres modułu

Przed projektowaniem lekcji określa się cel i zakres modułu. Moduł nie może być zbiorem przypadkowych lekcji — każda lekcja musi mieć określoną funkcję w całej ścieżce nauki.

### Pytania planistyczne

| Obszar | Pytanie |
|--------|---------|
| Nauka | Czego uczennica ma się nauczyć? |
| Zrozumienie | Co musi zrozumieć? |
| Zapamiętanie | Co musi zapamiętać? |
| Egzamin | Co może pojawić się na egzaminie? |
| Salon | Co wykorzysta w pracy z klientką? |
| Błędy | Jakie błędy ma potrafić rozpoznać? |
| Decyzje | Jakie decyzje ma potrafić podjąć? |
| Wstęp | Jaką wiedzę powinna posiadać przed rozpoczęciem modułu? |
| Spirala | Do jakich wcześniejszych tematów moduł powinien wracać? |

Odpowiedzi na te pytania trafiają do masterplanu modułu (rozdział 7).

---

## 5. Rodzaje wiedzy

Każde zagadnienie należy zakwalifikować jako **jeden lub kilka** rodzajów wiedzy. Od klasyfikacji zależy dobór metody nauczania.

### Typy wiedzy

| Rodzaj | Opis |
|--------|------|
| Wymagająca zrozumienia | Procesy, zależności, konsekwencje — wymaga wyjaśnienia, nie wkuwania |
| Wymagająca zapamiętania | Fakty, wartości, nazwy — wymaga utrwalenia i powtórek |
| Praktyczna salonowa | Bezpośrednie zastosowanie w pracy z klientką |
| Egzaminacyjna | Wymagana na egzaminie czeladniczym |
| Wspólna dla egzaminu i salonu | Istotna w obu kontekstach |
| Historyczna | Kontekst zawodu, wymogi formalne programu |
| Proceduralna | Sekwencje kroków, procedury zawodowe |
| Przepis / informacja podatna na zmianę | Wymaga weryfikacji aktualności |

### Metody dla wiedzy wymagającej zrozumienia

- przykłady i sytuacje salonowe;
- opis procesów i zależności przyczynowo-skutkowych;
- ilustracje edukacyjne ([ILLUSTRATION_GUIDE.md](ILLUSTRATION_GUIDE.md));
- analiza konsekwencji błędów;
- pytania sytuacyjne;
- porównania.

### Metody dla wiedzy wymagającej zapamiętania

- Active Recall, Retrieval Practice, Spaced Repetition;
- fiszki, mnemotechniki, skojarzenia, pałace pamięci;
- chunking;
- krótkie quizy i powtórki;
- pozytywne wzmocnienie ([PROJECT.md, Psychologia uczenia się](PROJECT.md#5-psychologia-uczenia-się)).

**Technika nauczania dobierana jest do rodzaju wiedzy** — nie stosujemy automatycznie tej samej metody w każdym temacie.

---

## 6. Zakres egzaminacyjny i salonowy

Program kursu obejmuje dwa cele: egzamin czeladniczy i pracę w salonie. Oba są ważne, ale **sposób prezentacji** zależy od typu zagadnienia.

| Typ | Priorytet zawodowy | Sposób nauczania |
|-----|-------------------|------------------|
| Praktyczny (pH, koloryzacja, pielęgnacja, BHP salonu) | Wysoki | Głęboko, w kontekście salonu |
| Formalny egzaminacyjny (historia, przepisy, dokumentacja) | Wymagany na egzaminie | Zwięźle, pod kątem wymagań egzaminacyjnych |

W masterplanie modułu należy osobno określić:

- **zakres egzaminacyjny** — co może paść na egzaminie;
- **zakres salonowy** — co uczennica wykorzysta w codziennej pracy.

Gdy odpowiedź wymagana na egzaminie różni się od współczesnej praktyki, odnotowuje się to w scenariuszu lekcji i audycie źródeł — uczennica uczy się poprawnej wiedzy, z świadomością wymagań egzaminacyjnych tam, gdzie to konieczne.

---

## 7. Masterplan modułu

Przed napisaniem scenariuszy lekcji przygotowuje się **masterplan modułu**. Implementacja nie rozpoczyna się przed jego akceptacją.

### Elementy masterplanu

| Element | Opis |
|---------|------|
| Nazwa modułu | Pełna nazwa merytoryczna |
| `moduleId` | Identyfikator techniczny (np. `ph`, `wlos`) |
| Poziom | Etykieta poziomu trudności |
| Grupa docelowa | Profil uczennicy ([PROJECT.md](PROJECT.md)) |
| Cel modułu | Jedno–dwa zdania: po ukończeniu uczennica… |
| Zakres egzaminacyjny | Lista zagadnień egzaminacyjnych |
| Zakres salonowy | Lista zagadnień praktycznych |
| Pojęcia obowiązkowe | Terminy, które uczennica musi znać |
| Fakty do zapamiętania | Wiedza wymagająca utrwalenia |
| Procesy do zrozumienia | Wiedza wymagająca wyjaśnienia |
| Błędne / przestarzałe uproszczenia | Pułapki ze źródeł — czego unikać |
| Kolejność lekcji | Lista lekcji z ID i tytułami |
| Zależności między lekcjami | `requiresLessonId`, wymagania wstępne |
| Wiedza powracająca | Z wcześniejszych modułów |
| Wiedza do powrotu później | Zagadnienia na kolejne moduły |
| Propozycje ilustracji | Które lekcje wymagają grafiki |
| Propozycje technik pamięciowych | Gdzie stosować mnemotechniki, fiszki itd. |
| Plan powtórek | Kiedy i jak wraca kluczowa wiedza |
| Zakończenie modułu | Lekcja podsumowująca, teaser kolejnego modułu |
| Kryteria ukończenia | Warunki uznania modułu za gotowy |

### Kolejność pracy nad modułem

1. audyt źródeł;
2. masterplan;
3. scenariusze lekcji;
4. review merytoryczny;
5. review dydaktyczny;
6. review językowy;
7. implementacja;
8. testy;
9. publikacja.

**Nie rozpoczynamy implementacji** przed zaakceptowaniem masterplanu i scenariuszy.

---

## 8. Kolejność lekcji

Kolejność lekcji w module wynika z masterplanu i realizuje zasady Scaffolding oraz Mastery Learning ([PROJECT.md](PROJECT.md)).

### Zasady

- lekcje układane **od prostego do złożonego**;
- każda lekcja wymaga ukończenia poprzedniej (`requiresLessonId` w katalogu);
- wiedza wstępna musi być wprowadzona **przed** zastosowaniem w szerszym kontekście;
- lekcja podsumowująca moduł zamyka spirale wewnątrz modułu;
- teaser ostatniej lekcji prowadzi do kolejnego modułu.

### Przykład — moduł pH

Skala pH → wpływ na włos → preparaty → przywracanie pH po zabiegu → koloryzacja → rozjaśnianie → szampony → odżywki i maski → produkty zakwaszające → podsumowanie.

Szczegóły struktury pojedynczej lekcji: [LESSON_STANDARD.md](LESSON_STANDARD.md).

---

## 9. Scenariusz pojedynczej lekcji

Scenariusz lekcji to **kompletny dokument roboczy** przygotowany przed implementacją. Nie przekazujemy do implementacji luźnych notatek.

### Elementy scenariusza

| Element | Opis |
|---------|------|
| `id` lekcji | Identyfikator zgodny z nazwą pliku JSON |
| Tytuł | Tytuł lekcji |
| Jedna główna myśl | Kluczowe pojęcie lub zasada lekcji |
| Cel dydaktyczny | Co uczennica zrozumie lub zapamięta po lekcji |
| Rodzaj wiedzy | Klasyfikacja z rozdziału 5 |
| Wymagania wstępne | Poprzednie lekcje, wiedza z innych modułów |
| Intro | Treść `narratorText`, `stakeText`, `startButtonLabel` |
| Część edukacyjna | Tekst, ewentualnie `scaleGuide` / `hairGuide` |
| Przykład salonowy lub egzaminacyjny | Kontekst zastosowania wiedzy |
| Ilustracja | Opis grafiki lub uzasadnienie braku |
| 5 zadań | Typ, pytanie, opcje, poprawne odpowiedzi |
| Feedback | `correctTitle`, `incorrectTitle`, `explanation` dla każdego zadania |
| Punktacja | 10 + 10 + 15 + 15 + 25 Kosmyków |
| Completion | `title`, `subtitle`, `solvedLabel` |
| Teaser | `nextLesson.teaser` |
| Tagi | Metadane do przyszłego systemu powtórek (rozdział 13) |
| Źródła | Odwołania do plików w audycie |
| Rozbieżności merytoryczne | Odnotowane różnice między źródłami |
| Wiedza do powrotu później | Zagadnienia na kolejne moduły / lekcje |

Scenariusz musi być **kompletny i gotowy do implementacji** — autor implementacji nie uzupełnia merytoryki z własnej wiedzy.

---

## 10. Projektowanie pytań

Pytania projektuje się na etapie scenariusza, przed implementacją JSON. Szczegóły typów zadań: [LESSON_STANDARD.md, rozdział 8](LESSON_STANDARD.md#8-typy-pytań).

### Zasady

- pytania wynikają **bezpośrednio z celu lekcji**;
- sprawdzają zrozumienie albo **świadomie utrwalają** wiedzę;
- nie polegają wyłącznie na rozpoznawaniu oczywistej odpowiedzi;
- wykorzystują przykłady salonowe, gdy temat na to pozwala;
- zawierają **wiarygodne odpowiedzi błędne** — typowe pomyłki, nie absurd;
- unikają podpowiadania poprawnej odpowiedzi długością lub konstrukcją;
- **nie powtarzają dosłownie** zdań z części edukacyjnej;
- są zgodne z typami zadań obsługiwanymi przez istniejący silnik: `singleChoice`, `trueFalse`, `matching`, `ordering`, `findError`;
- pytanie i opcje **nie zdradzają** poprawnej odpowiedzi przed feedbackiem (zasada odkrywania).

Pytania z wcześniejszych tematów wracają później w **nowym kontekście** i na wyższym poziomie trudności — zgodnie ze spiralnym modelem (rozdział 11).

---

## 11. Spiralny model nauki

Ukończenie lekcji nie oznacza zakończenia nauki danego pojęcia. Najważniejsze zagadnienia wracają wielokrotnie — zgodnie z [PROJECT.md, Spiralny model nauki](PROJECT.md#8-spiralny-model-nauki).

### Gdzie wraca wiedza

- w kolejnych lekcjach tego samego modułu;
- w innych modułach;
- w nowych kontekstach (salon, egzamin, zabieg);
- w pytaniach sytuacyjnych;
- w powtórkach;
- w zadaniach łączących kilka działów;
- na wyższym poziomie trudności.

**Nie powtarzamy identycznego pytania.** Wracamy do tej samej wiedzy z innej perspektywy.

### Przykład — budowa włosa w spirali kursu

| Moduł / lekcja | Perspektywa |
|----------------|-------------|
| Budowa włosa | Czym jest keratyna |
| Wiązania | Co stabilizuje strukturę keratyny |
| Koloryzacja | Gdzie zachodzą zmiany |
| Trwała ondulacja | Które wiązania są przekształcane |
| Rozjaśnianie | Dlaczego struktura włosa słabnie |
| Pielęgnacja | Które skutki uszkodzeń można ograniczać |

Na wyższych poziomach pytania powinny **mieszać materiał z różnych modułów**.

Plan powrotów wiedzy należy zapisać w masterplanie modułu.

---

## 12. Powtórki pomiędzy modułami

Projekt **nie powtarza całych lekcji** — powtarza **wiedzę** ([PROJECT.md, System powtórek](PROJECT.md#9-system-powtórek)).

### Obecne mechanizmy

- kluczowe zagadnienia wracają w spiralnym modelu w nowych lekcjach;
- ukończoną lekcję można powtórzyć w trybie treningu (planowane).

### Planowanie powtórek w masterplanie

Przy projektowaniu modułu określa się:

- które pojęcia z wcześniejszych modułów wracają w tym module;
- w której lekcji i w jakim kontekście;
- które pojęcia z tego modułu powinny wrócić później;
- które fakty wymagają zaplanowanych powtórek (Spaced Repetition).

Powtórki projektuje się na etapie masterplanu — nie dodaje się ich ad hoc po implementacji.

---

## 13. Metadane i tagowanie pytań

Już na etapie scenariusza lekcji przygotowuje się metadane pytań pod **przyszły system powtórek**. Metadane są standardem przyszłościowym — zostaną wdrożone technicznie w osobnym etapie.

**Nie dodajemy nieobsługiwanych pól do istniejących plików JSON** bez wcześniejszego sprawdzenia schematu i działania silnika.

### Docelowe metadane (planowane)

| Pole | Opis |
|------|------|
| `moduleId` | Identyfikator modułu |
| `lessonId` | Identyfikator lekcji |
| Główne zagadnienie | Kluczowe pojęcie pytania |
| Tagi | Np. `ph`, `koloryzacja`, `włos`, `bezpieczeństwo` |
| Poziom trudności | Np. podstawowy / średni / zaawansowany |
| Rodzaj wiedzy | Z klasyfikacji z rozdziału 5 |
| Znaczenie egzaminacyjne | Niskie / średnie / wysokie |
| Znaczenie salonowe | Niskie / średnie / wysokie |
| Wykorzystanie w powtórkach | Tak / nie |
| Pojęcia powiązane | Tagi powiązanych zagadnień |
| Wymagania wstępne | Lekcje / moduły wymagane wcześniej |

Metadane zapisuje się w scenariuszu lekcji. Po wdrożeniu systemu tagów zostaną przeniesione do struktury obsługiwanej przez silnik.

---

## 14. Review merytoryczny

Review merytoryczny przeprowadza się **przed implementacją**, na podstawie masterplanu i scenariuszy.

### Checklist

- [ ] Treść została zweryfikowana w kilku źródłach
- [ ] Nie opiera się wyłącznie na starej bazie pytań
- [ ] Nie przenosi błędów ani nieaktualnych uproszczeń
- [ ] Odróżnia aktualną wiedzę od odpowiedzi wymaganej na egzaminie
- [ ] Terminologia jest konsekwentna w całym module
- [ ] Każde uproszczenie dydaktyczne jest uzasadnione
- [ ] Ilustracje nie wprowadzają błędu merytorycznego
- [ ] Informacje podatne na zmianę zostały sprawdzone pod kątem aktualności

Review kończy się decyzją: **zaakceptowany / do poprawy / odrzucony**. Scenariusze z statusem „do poprawy” wracają do autora.

---

## 15. Review dydaktyczny

Review dydaktyczny weryfikuje skuteczność nauczania — zgodność z filozofią projektu i [LESSON_STANDARD.md](LESSON_STANDARD.md).

### Checklist

- [ ] Kolejność lekcji jest logiczna
- [ ] Każda lekcja ma jedną główną myśl
- [ ] Najpierw uczymy, potem sprawdzamy
- [ ] Metoda nauczania pasuje do rodzaju wiedzy (rozdział 5)
- [ ] Materiał nie przeciąża pamięci roboczej (Cognitive Load Theory)
- [ ] Wcześniejsza wiedza wraca w nowym kontekście
- [ ] Pytania wymagają myślenia odpowiedniego do celu lekcji
- [ ] Informacje wymagające zapamiętania mają zaplanowane powtórki
- [ ] Moduł przygotowuje zarówno do egzaminu, jak i do pracy w salonie

---

## 16. Review językowy

Review językowy weryfikuje wszystkie teksty scenariusza zgodnie z [WRITING_STYLE.md](WRITING_STYLE.md).

### Checklist

- [ ] Tekst jest zgodny z WRITING_STYLE.md
- [ ] Poprawność językowa (ortografia, gramatyka, interpunkcja)
- [ ] Brzmi naturalnie po polsku — bez konstrukcji typowych dla tekstów AI
- [ ] Nie powtarza tej samej informacji innymi słowami
- [ ] Odpowiedni dla uczennicy w wieku 14–18 lat
- [ ] Dobrze czyta się na ekranie telefonu
- [ ] Przeszedł test głośnego czytania

Review językowy obejmuje: intro, część edukacyjną, pytania, feedback, completion i teasery.

---

## 17. Przekazanie materiału do implementacji

Po trzech review (merytorycznym, dydaktycznym, językowym) materiał przekazuje się do implementacji technicznej.

### Pakiet przekazania

Implementacja powinna otrzymać:

- zaakceptowany masterplan modułu;
- kompletne scenariusze wszystkich lekcji;
- wskazane materiały źródłowe i audyt;
- listę grafik — które istnieją, które trzeba stworzyć;
- dokładne `moduleId` i `id` każdej lekcji;
- zależności odblokowania (`requiresLessonId`);
- punktację (standard: 10 + 10 + 15 + 15 + 25);
- kryteria testów (rozdział 18);
- informację, **czego nie wolno zmieniać** (istniejące lekcje, postęp użytkowniczek, silnik).

### Zasady implementacji

- implementacja **nie rozszerza** zakresu merytorycznego bez uzasadnienia i zgody;
- nowa lekcja = plik JSON w `lessons/` + wpis w `js/lessons-catalog.js`;
- silnik aplikacji nie wymaga zmian, o ile używane są istniejące typy zadań;
- grafiki zgodnie z [ILLUSTRATION_GUIDE.md](ILLUSTRATION_GUIDE.md);
- teksty zgodnie z [WRITING_STYLE.md](WRITING_STYLE.md).

---

## 18. Testy po implementacji

Po implementacji przeprowadza się testy przed publikacją na `main`.

### Procedura testowa

1. Uruchomić każdą lekcję modułu lokalnie.
2. Sprawdzić przepływ: intro → część edukacyjna → 5 zadań → completion.
3. Sprawdzić **odblokowywanie** — kolejna lekcja dostępna po ukończeniu poprzedniej.
4. Sprawdzić **zapis postępu** w localStorage — ukończenie nie ginie po odświeżeniu.
5. Sprawdzić **punktację** — Kosmyki i bonusy naliczane poprawnie.
6. Sprawdzić **grafikę na telefonie** — czytelność, proporcje, alt text.
7. Wykonać review jakości — zgodność ze scenariuszem.
8. Podać **listę zmienionych plików**.
9. Zgłosić wszystkie problemy i niepewności.

Błędy blokujące przejście między lekcjami wymagają naprawy przed publikacją.

---

## 19. Kryteria ukończenia modułu

Moduł uznaje się za **gotowy** dopiero wtedy, gdy spełnione są wszystkie poniższe warunki:

### Treść i review

- [ ] Wszystkie lekcje modułu są kompletne
- [ ] Treść przeszła review merytoryczny
- [ ] Treść przeszła review dydaktyczny
- [ ] Treść przeszła review językowy

### Zgodność ze standardami

- [ ] Lekcje zgodne z [LESSON_STANDARD.md](LESSON_STANDARD.md)
- [ ] Teksty zgodne z [WRITING_STYLE.md](WRITING_STYLE.md)
- [ ] Grafiki zgodne z [ILLUSTRATION_GUIDE.md](ILLUSTRATION_GUIDE.md)

### Działanie techniczne

- [ ] Kolejność i odblokowywanie lekcji działają poprawnie
- [ ] Postęp zapisuje się poprawnie
- [ ] Punktacja działa
- [ ] Brak błędów blokujących przejście między lekcjami

### Weryfikacja końcowa

- [ ] Całość sprawdzona na ekranie telefonu
- [ ] Lista zmienionych plików udokumentowana
- [ ] Wyniki testów zapisane
- [ ] Wpis w `CHANGELOG.md`

---

*Ostatnia aktualizacja dokumentu: lipiec 2026*
