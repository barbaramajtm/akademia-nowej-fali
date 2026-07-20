# Akademia Nowej Fali — koncepcja produktu (etap projektowy)

*Perspektywa: Senior Product / UX Designer aplikacji edukacyjnych dla nastolatek. Bez kodu, bez backendu — najpierw produkt.*

---

## 1. Krótka diagnoza założeń

**Co jest dobre i zostawiam bez zmian:**

- Model „Duolingo dla teorii" jest trafny dla większości treści. Krótkie sesje, natychmiastowy feedback, powtórki — to działa i jest sprawdzone.
- Świadomość ADHD, słabszej pamięci roboczej i trudności w czytaniu. To rzadkie, że zamawiający myśli o tym na starcie. To powinno być twarde ograniczenie projektowe, nie „miła dodatkowa cecha".
- Instynkt „ranking oparty na regularności, nie na surowym wyniku" — bardzo dobry i chroni najsłabsze uczennice.
- „Nie chcemy elektronicznego podręcznika" — właściwy kierunek.
- Panel instruktorski. To jest potencjalnie najważniejsza decyzja biznesowa w całym briefie (patrz sekcja 19). Dystrybucja przez szkoły może być silniejsza niż B2C.
- Powściągliwość przy liczbie bohaterek i funkcjach społecznych dla nieletnich.

**Co wymaga korekty lub twardej decyzji — tu się nie zgadzam bez zastrzeżeń:**

1. **„Egzamin czeladniczy" i „egzamin zawodowy" to nie to samo.** Brief używa obu nazw zamiennie, a to dwie różne ścieżki: czeladniczy zdaje się przed izbą rzemieślniczą, zawodowy przed OKE (technikum / branżowa). Różnią się zakresem, formatem i tym, kto jest uczennicą. To materialnie zmienia treść i musimy to rozstrzygnąć na starcie (pytanie 1).

2. **Nie wszystkie 16 modułów da się „zgamifikować" tak samo.** Budowa włosa, chemia, koloryzacja, BHP — świetnie. Ale rachunkowość, prawo pracy, dokumentacja działalności, ochrona środowiska to treść regulacyjno-tekstowa. Wciśnięcie ich w tę samą mechanikę quizową będzie sztuczne i nudne. Proponuję **dwupoziomowy model treści** (sekcja 4): „rdzeń praktyczny" z pełną gamifikacją i „warstwa formalna" z lżejszym podejściem (przeczytaj → potwierdź → punktowa powtórka faktów). Udawanie, że wszystko jest tak samo grywalne, obniży jakość całości.

3. **System 5 stanów wiedzy jest przeprojektowany na wersję 1.** Rozróżnienie „błąd przypadkowy" vs „brak wiedzy" vs „błędne przekonanie" algorytmicznie, bez danych, jest bardzo trudne — Duolingo tego w takiej rozdzielczości nie robi. To piękny cel docelowy, ale zły punkt startowy. Na start: sprawdzony algorytm powtórek + trudność per pytanie + kilka obserwowalnych sygnałów (czas, wybrany dystraktor), które *przybliżają* te stany. Pełną diagnozę stanów wiedzy budujemy dopiero na danych (sekcja 6).

4. **Funkcje społeczne dla nieletnich to obszar prawny i bezpieczeństwa, nie tylko funkcja.** Grupa zaczyna się od 14 lat, a w RODO cyfrowa zgoda w Polsce to 16 lat. Otwarte dodawanie znajomych, profile widoczne dla rówieśniczek, rankingi — muszą być domyślnie zamknięte, w obrębie klasy/grupy i najlepiej pośredniczone przez instruktora. To ograniczenie projektowe, nie przypis (sekcja 16).

5. **Przedział 14–18 lat jest szeroki.** Czternastolatka na starcie i osiemnastolatka przed egzaminem to dwie różne użytkowniczki — inny poziom, inny ton. Potrzebny lekki test poziomujący na wejściu i adaptacyjna trudność. Ton nie może być dziecinny dla starszych ani przytłaczający dla młodszych.

6. **Ryzyko „iluzji kompetencji".** Mikrozadania potrafią wytworzyć płynność w obsłudze aplikacji zamiast realnej wiedzy. Potrzebne są okresowe sprawdziany transferu (scenariusze, pytania mieszane, bez podpowiedzi) i egzamin próbny jako realny kalibrator.

7. **Prawdziwym wyzwaniem nie jest UX, tylko produkcja treści.** 16 modułów wysokiej jakości, zilustrowanych i poprawnych merytorycznie, to ogromne zobowiązanie autorskie. To jest największe ryzyko projektu i dlatego MVP musi być bezwzględnie wąskie (sekcje 17 i 19).

---

## 2. Główna propozycja wartości

**Dla uczennicy:** „Codzienne 5 minut, które zamieniają teorię fryzjerstwa w nawyk — i przygotowują Cię do egzaminu, zamiast zmuszać do wkuwania."

**Dla instruktorki / szkoły:** narzędzie, którego uczennice naprawdę używają, z podglądem realnego postępu i najczęstszych błędów.

**Dla rynku:** pierwsza poważna, polska aplikacja gamifikująca teorię zawodową — nie quiz, nie podręcznik, tylko trening nawyku.

Jedno zdanie pozycjonujące: **nie quiz, nie podręcznik — trening, który wchodzi w nawyk.**

---

## 3. Architektura informacji

Hierarchia treści:

**Aplikacja → Ścieżki (2–3 makro) → Moduły → Lekcje → Zadania**, plus przekrojowa **warstwa Powtórek** (nie miejsce w nawigacji, tylko codzienna aktywność wypychana na ekran główny).

Konteksty równoległe (nie treść lekcyjna): **Profil**, **Ranking/Znajomi**, oraz osobny kontekst **Instruktor** (inna rola, patrz sekcja 15).

Zasada nadrzędna: uczennica nigdy nie „gubi się" w drzewie treści. Widzi jedną następną rzecz do zrobienia. Cała nawigacja po modułach jest drugorzędna wobec „co robię teraz".

---

## 4. Proponowany podział modułów

Reorganizuję 16 pozycji w klastry z logiczną kolejnością nauki i **poziomem gamifikacji**:

**Klaster A — Fundamenty** *(pełna gamifikacja)*
1. Budowa włosa i skóry głowy
2. Chemia fryzjerska (pH, wiązania, podstawy reakcji)

**Klaster B — Technologia zabiegów** *(pełna gamifikacja, rdzeń wartości)*
3. Koloryzacja
4. Rozjaśnianie
5. Strzyżenie
6. Techniki fryzjerskie (fale, prostowanie, upięcia, stylizacja)
7. Pielęgnacja i diagnoza włosa

**Klaster C — Warsztat** *(średnia gamifikacja)*
8. Narzędzia i materiałoznawstwo
9. Maszynoznawstwo

**Klaster D — Bezpieczeństwo** *(średnia–wysoka, wysoka stawka błędu)*
10. BHP i ochrona ppoż.
11. Pierwsza pomoc

**Klaster E — Zawód i firma** *(lekka: fakty + scenariusze, bez wciskania w quiz ABC)*
12. Prawo pracy
13. Dokumentacja i podstawy prawa gospodarczego *(łączę „dokumentację działalności" z elementami prawa)*
14. Rachunkowość zawodowa
15. Ochrona środowiska

**Przekrojowe**
16. **Egzamin próbny** — to nie moduł treściowy, tylko tryb sprawdzający budowany z puli wszystkich działów.

Uwagi:
- Koloryzacja i rozjaśnianie zależą od chemii — kolejność ma znaczenie, chemia musi być wcześniej.
- Jeśli celem jest egzamin czeladniczy, prawdopodobnie brakuje **rysunku zawodowego** — trudny do gamifikacji, wymaga osobnej decyzji (do potwierdzenia po rozstrzygnięciu pytania 1).
- **Nie budujemy wszystkich klastrów w v1.** MVP to fragment A + B.

---

## 5. Model pojedynczej lekcji

Zasada: jedna myśl na lekcję, 2–4 minuty, ale **różny kształt** lekcji, żeby nie było wrażenia szablonu.

Typy lekcji: „Nowy temat", „Powtórka" (mieszana), „Misja/scenariusz" (zastosowanie), „Test działowy" (checkpoint).

Struktura lekcji „Nowy temat":
1. **Zaczep** — 1 ekran, 1 ilustracja, pytanie lub „czy wiesz, że".
2. **Mikro-koncept** — 1 wizual + maks. 2 zdania.
3. **4–6 zróżnicowanych zadań**, rosnąca trudność, natychmiastowy feedback.
4. **Feedback z „dlaczego"** — nie tylko „dobrze/źle", lecz krótkie wyjaśnienie. To jest linia oddzielająca uczenie się od zapamiętywania układu odpowiedzi.
5. **Naprawa po błędzie** — błędne pytanie wraca w innej formie przed końcem lekcji.
6. **Podsumowanie** — 1 zdanie „czego się nauczyłaś" + XP + seria + następny krok.

Odradzam serie identycznych pytań ABC. Zestaw typów zadań w v1 (nie wszystkie 12 naraz): wybór jednej, wielokrotny wybór, prawda/fałsz, dopasowanie par, ułożenie kolejności, wskazanie elementu na ilustracji. Resztę dokładamy później.

---

## 6. System powtórek

- **Podstawa:** sprawdzony algorytm harmonogramowania (np. FSRS albo wariant SM-2) **per jednostka wiedzy**, a nie per pojedyncze pytanie.
- **Rozdzielenie faktu od formy:** każda jednostka wiedzy ma kilka wariantów pytań. Harmonogram wybiera *co* powtórzyć, a osobno rotuje *w jakiej formie*. To bezpośrednio realizuje „nie zawsze w tej samej formie".
- **Obserwowalne sygnały przybliżające 5 stanów** (uczciwie: to przybliżenia, nie diagnoza):
  - szybko + poprawnie → utrwalone (dłuższy interwał),
  - wolno + poprawnie → wolne przypominanie (mniejszy wzrost interwału),
  - błędnie + wybrany konkretny „kuszący" dystraktor → możliwe błędne przekonanie (oznacz jednostkę tagiem błędu i zaplanuj *ukierunkowaną korektę*),
  - błędnie + szybko/losowo → możliwy błąd przypadkowy (mniejsza kara),
  - wielokrotnie błędnie w różnych formach → luka w wiedzy (wróć mini-lekcją, nie kolejnym quizem).
- **„Powtórka dnia"** wypychana na ekran główny, z **limitem** liczby elementów. Zrzucenie 60 powtórek na wracającą użytkowniczkę zabija motywację — szczególnie u osób z ADHD.
- **Ważne:** pełna klasyfikacja stanów wiedzy to ewolucja v2+, gdy będą dane. v1 działa na powyższych proxy.

---

## 7. System motywacyjny

- **XP** za zadania/lekcje, **poziomy** jako łagodne kamienie milowe.
- **Seria dni z siatką bezpieczeństwa** — „zamrożenie serii" i wyrozumiały okres łaski. Lęk o serię uderza dokładnie w te uczennice, o które brief się troszczy. Cel tygodniowy regulowany przez użytkowniczkę.
- **Odznaki** za mistrzostwo i regularność, nie za surową szybkość.
- **Ranking:** domyślnie w obrębie klasy/małej grupy, opcja włączenia, metryka ważona regularnością i wysiłkiem, nigdy globalna tablica publiczna dla nieletnich. Dodatkowo tryb „rywalizuj ze sobą sprzed tygodnia".
- **Codzienne wyzwania** — lekkie, opcjonalne.
- **Powiadomienia** — łagodne, spersonalizowany czas, ograniczona częstotliwość, łatwe do wyłączenia. Unikamy tonu wywołującego poczucie winy (pasywno-agresywne przypomnienia to znany antywzorzec dla lękowych uczennic).
- **Projektujemy PRZECIW:** publicznemu zawstydzaniu, mechanikom opartym na stracie, presji, ciemnym wzorcom w powiadomieniach.

---

## 8. Struktura nawigacji

Dolny pasek zakładek, maks. 3–4 pozycje (zasięg kciuka):

- **Nauka** (ekran główny / ścieżka)
- **Powtórki** (lub schowane w ekranie głównym)
- **Ranking / Znajomi**
- **Profil**

Instruktor to osobny kontekst/rola, **nie** piąta zakładka dla uczennicy. Rozważam scalenie „Powtórek" z ekranem głównym, żeby zostać przy 3 zakładkach — mniej znaczy czytelniej.

---

## 9. Mapa najważniejszych ekranów

Onboarding → Ekran główny (ścieżka) → Ekran lekcji → Ekran feedbacku → Podsumowanie lekcji → Powtórka dnia → Profil → Ranking/Znajomi → Test działowy / Egzamin próbny → (osobno) Logowanie/Konto → (osobno) Panel instruktorski.

*Mogę zamienić tę listę i architekturę informacji w wizualną mapę ekranów i diagram nawigacji — to naturalny następny krok, jeśli zechcesz.*

---

## 10. Onboarding

Krótki, wartość najpierw, minimum tarcia:
1. Powitanie + obietnica (1–2 ekrany).
2. Lekkie ustawienie celu (po co jesteś: szkoła / egzamin / dla siebie; ile minut dziennie).
3. Opcjonalny, pomijalny test poziomujący — ustawia startową trudność w przedziale 14–18 lat.
4. **Pierwsza lekcja w ~60 sekund** — szybka wygrana zanim poprosimy o cokolwiek.
5. Prośba o powiadomienia **po** pierwszym sukcesie, nie przed.
6. Założenie konta odroczone — najpierw niech posmakuje. Zgodę nieletnich obsługujemy ostrożnie na etapie konta (sekcja 16).

---

## 11. Ekran główny

Widok „na dziś": pierścień celu dziennego, seria, „Powtórka dnia" jeśli zaległa, jedno wyraźne CTA do następnej lekcji, lekkie przywitanie od bohaterki. **Jedna główna akcja na ekranie** — nie rozpraszamy wyborem.

---

## 12. Ekran lekcji

Jak w sekcji 5: pasek postępu, czyste karty zadań z jednym fokusem, duże przyciski, natychmiastowy panel feedbacku z „dlaczego". Wysoki kontrast elementów interaktywnych na spokojnym tle, zgodnie z moodboardem.

---

## 13. Profil użytkowniczki

Postęp per moduł jako **poziom opanowania**, nie tylko % ukończenia. Seria, XP/poziom, odznaki, prywatna sekcja „tematy do powtórki" (framowana konstruktywnie, widoczna tylko dla niej i — w wersji szkolnej — dla instruktorki, nie dla znajomych). Wybór/edycja awatara lub bohaterki.

---

## 14. Ranking i znajomi

Zamknięta grupa, włączane opcjonalnie, ważone regularnością. Dodawanie po kodzie lub przez klasę instruktorki zamiast wyszukiwania po nazwisku. Brak wiadomości prywatnych. Widoczne: XP, poziom, seria, odznaki. Niewidoczne: pełne raporty błędów. Domyślnie bezpieczne dla nieletnich.

---

## 15. Panel instruktorski

Osobna rola / obszar. **Rekomendacja: to raczej dashboard webowy niż mobilny** — instruktorki pracują przy biurku (do potwierdzenia).

Widzi: postęp uczennic, ukończone lekcje, wyniki testów i egzaminów próbnych, mapę najczęstszych błędów, tematy do powtórki, czas nauki, serię, aktywność ostatnich dni.

Może: przypisywać lekcje, tworzyć grupy, ustalać cele, uruchamiać wyzwania, przeglądać wyniki grupy i pojedynczej uczennicy. Pełne raporty błędów widoczne tylko dla instruktorki.

---

## 16. Prywatność i bezpieczeństwo niepełnoletnich

To ograniczenie projektowe wpływające na cały produkt, nie osobny moduł:
- RODO: cyfrowa zgoda w Polsce od 16 lat; poniżej — zgoda opiekuna. Potrzebny czytelny przepływ zgody, szczególnie przy wdrożeniu przez szkoły.
- Minimalizacja danych — zbieramy tylko to, co konieczne do nauki.
- Brak publicznej wykrywalności, brak wyszukiwania po nazwisku, brak wiadomości prywatnych, profile domyślnie prywatne.
- **Bez treści tworzonych przez użytkowniczki (UGC) w v1** — eliminujemy koszt moderacji i ryzyko.
- Bezpieczne wartości domyślne wszędzie tam, gdzie w grę wchodzi widoczność między rówieśniczkami.

---

## 17. Zakres MVP

Bezwzględnie wąsko:
- **2–3 moduły** z klastrów A/B (np. Budowa włosa + Chemia fryzjerska + Koloryzacja) — wizualny, grywalny, wysokowartościowy rdzeń.
- Silnik lekcji + **4–5 typów zadań** (nie 12).
- Podstawowy system powtórek (sprawdzony algorytm, per jednostka wiedzy, rotacja formy) — **bez** klasyfikatora 5 stanów.
- XP, poziomy, seria (z zamrożeniem), cel dzienny, podstawowe odznaki.
- Profil z prywatnymi „słabymi tematami".
- Konto + onboarding bezpieczny dla nieletnich.
- **Opcjonalnie**, jeśli szkoły są kanałem wejścia: lekki, tylko-do-odczytu podgląd postępu klasy dla instruktorki. Inaczej odkładamy.
- 1–2 bohaterki.

---

## 18. Funkcje do odłożenia na później

Otwarty graf znajomych, globalny ranking, wiadomości prywatne, pełny 5-stanowy system diagnozy wiedzy, wszystkie 16 modułów naraz, zaawansowana analityka instruktorska, egzamin próbny jako pełna symulacja, UGC, moduły rachunkowość/ochrona środowiska/prawo (klaster E), rozbudowane mechaniki monetyzacji.

---

## 19. Największe ryzyka projektu

1. **Produkcja treści na skalę** — realne wąskie gardło. Jakość merytoryczna i ilustracyjna 16 działów to lata pracy autorskiej, nie zadanie UX.
2. **Gamifikacja treści niegrywalnej** (klaster E) — sztuczność obniży odbiór całości.
3. **Przeprojektowanie systemu powtórek** przed zebraniem danych.
4. **Prywatność nieletnich + procedury zakupowe szkół** — wolne i wymagające.
5. **Zły cel egzaminacyjny** (czeladniczy vs zawodowy) — błąd tu unieważnia zakres treści.
6. **Retencja po nowości** — utrzymanie nawyku po pierwszych dwóch tygodniach.
7. **Iluzja kompetencji** — płynność w aplikacji ≠ wiedza.
8. **Adopcja przez instruktorki** — czy nauczycielki faktycznie używają dashboardów.

---

## 20. Proponowana kolejność dalszych prac

1. **Rozstrzygnąć cel egzaminacyjny i dokładny zakres** względem aktualnych standardów (ZRP / izba rzemieślnicza lub OKE).
2. **Zdefiniować model treści + schemat jednostki wiedzy/pytania**, i doprowadzić **jeden wzorcowy moduł** do pełnej, złotej jakości jako poprzeczkę.
3. **Prototyp lekcji** (1 moduł), test na 5–10 uczennicach.
4. **Silnik lekcji + podstawowy system powtórek.**
5. **Warstwa motywacji** (seria/XP/cel), onboarding.
6. **Rozszerzenie o 2–3 moduły**, pierwszy miękki test w szkole.
7. **Panel instruktorski** (najpierw tylko-do-odczytu, potem akcje).
8. **Iteracja systemu powtórek na danych** — dopiero potem zaawansowana diagnoza stanów wiedzy.

---

*Diagramy (mapa ekranów, przepływ nawigacji, przykładowy przebieg jednej lekcji) oraz wireframe'y kluczowych ekranów mogę przygotować jako następny krok — po Twoich odpowiedziach na pytania poniżej.*
