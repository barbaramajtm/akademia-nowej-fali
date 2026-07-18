# Audyt scenariuszy N1–N10 — po utworzeniu

Źródło audytu: `docs/NUMERACJA_N1-N10_SCENARIOS.md` (pierwsza pełna wersja)  
Data: lipiec 2026  
Zasada: **nie poprawiano** scenariuszy podczas audytu — tylko opis stanu.

Ścieżka audytowanego pliku:  
`C:\Users\zuzal\Desktop\Akademia Nowe Fali\docs\NUMERACJA_N1-N10_SCENARIOS.md`

---

## 1. Ocena ogólna

Pierwsza pełna paczka N1–N10 jest **użyteczna i w większości gotowa do akceptacji właścicielki** po drobnych korektach. Zakres lekcji jest logicznie rozłożony, źródło E3 jest respektowane (w tym zakaz uniwersalnego `.1`), poziom 2 jest w N3, przejście N10→N11 jest zgodne z briefem, a mechaniki trzymają się obecnego silnika.

Główne zastrzeżenia dotyczą: (1) N3 — mapa nazw w guide tuż przed matchingiem nazw, (2) drobnych literówek / sformułowań, (3) miejsc, gdzie feedback jest poprawny, ale guide lekko naprowadza.

**Rekomendacja:** przekazać do akceptacji **po krótkiej korekcie** (nie przebudowie). Potem zbiorczy audyt N1–N20, potem JSON.

---

## 2. Tabela N1–N10

### N1 — Co widać w numerze farby

| | |
|--|--|
| **Mocne strony** | Czysta konstrukcja; dobre przykłady `7.13` / `7/1` / `7-1`; bez wyprzedzania refleksów; odkrywanie; interleaving. |
| **Problemy** | Brak istotnych. |
| **Wymagane poprawki** | — |
| **Status** | **gotowa do zatwierdzenia** |

### N2 — Liczba przed separatorem

| | |
|--|--|
| **Mocne strony** | Porównanie `5.1`/`7.1`/`9.1`; nazwa „poziom” w feedbacku, nie w guide; bez pełnej skali. |
| **Problemy** | Matching 2-elementowy jest krótki (akceptowalny technicznie). |
| **Wymagane poprawki** | Opcjonalnie: trzecia para lub zamiana Z3 na singleChoice — nieblokujące. |
| **Status** | **gotowa do zatwierdzenia** |

### N3 — Skala poziomów 1–10

| | |
|--|--|
| **Mocne strony** | Pełna skala z poziomem 2; disclaimer producentów; `hairGuide` zamiast `scaleGuide`; ordering krótszy niż N11; brak pomiaru z monitora. |
| **Problemy** | Guide wypisuje **całą listę nazw**, a Z1/Z3 sprawdzają te same przypisania — blisko testu pamięci krótkotrwałej z poprzedniego ekranu. |
| **Wymagane poprawki** | W guide zostawić kierunek skali + zastrzeżenie + 2–3 przykłady końców skali **albo** pokazać pełną listę dopiero po Z1; Z1 oprzeć na odkryciu kierunku, matching nazw przenieść na Z3/Z5. |
| **Status** | **wymaga drobnej korekty** |

### N4 — Pierwsza cyfra po separatorze

| | |
|--|--|
| **Mocne strony** | Dobre odkrycie `7` vs `7.1`; wyraźny zakaz uniwersalnego `.1`; przykład `7.1` = popiel tylko jako źródłowy. |
| **Problemy** | Brak istotnych. |
| **Wymagane poprawki** | — |
| **Status** | **gotowa do zatwierdzenia** |

### N5 — Druga cyfra po separatorze

| | |
|--|--|
| **Mocne strony** | Jasna rola dodatkowego refleksu; most do N6 bez spoilera pełnego porównania. |
| **Problemy** | Literówka w Z1 opcji c: „Separators” zamiast „Separator”. |
| **Wymagane poprawki** | Poprawić etykietę opcji c na „Separator”. |
| **Status** | **wymaga drobnej korekty** |

### N6 — Dlaczego 7.13 i 7.31 to nie to samo

| | |
|--|--|
| **Mocne strony** | Zgodność z E3; kolejność; ostrzeżenie przed uniwersalną legendą w Z5. |
| **Problemy** | Guide wspomina „głównie popielaty kierunek” — lekkie naprowadzenie na Z2, bez podania który zapis. |
| **Wymagane poprawki** | Opcjonalnie: usunąć słowo „popielaty” z guide („który kierunek dominuje według materiału”). |
| **Status** | **gotowa do zatwierdzenia** (opcjonalna mikro-korekta guide) |

### N7 — Co oznacza 7.11

| | |
|--|--|
| **Mocne strony** | Ścisły przykład źródłowy; odrzucenie uniwersalnej reguły powtórzeń. |
| **Problemy** | Brak istotnych. |
| **Wymagane poprawki** | — |
| **Status** | **gotowa do zatwierdzenia** |

### N8 — Czytanie całego numeru krok po kroku

| | |
|--|--|
| **Mocne strony** | Schemat po odkryciu; ordering uzasadniony budową zapisu; synteza przykładów E3. |
| **Problemy** | Brak istotnych. |
| **Wymagane poprawki** | — |
| **Status** | **gotowa do zatwierdzenia** |

### N9 — Separatory i nazwy stosowane przez marki

| | |
|--|--|
| **Mocne strony** | Trzy separatory; Wella/Schwarzkopf tylko w zakresie E3; mit o zmianie znaczenia poziomu. |
| **Problemy** | Dwa zadania `matching` w lekcji (Z1, Z3) — OK technicznie, nieco mniej urozmaicone. |
| **Wymagane poprawki** | Opcjonalnie zamienić Z1 na singleChoice „który znak jest separatorem w 7/1”. |
| **Status** | **gotowa do zatwierdzenia** |

### N10 — Legenda producenta

| | |
|--|--|
| **Mocne strony** | Centralny zakaz „`.1` zawsze”; dobre domknięcie; teaser do N11 bez diagnozy. |
| **Problemy** | Guide wspomina przykład `.1` = popiel przed Z1 — Z1 i tak wymaga oceny „zawsze”, więc spoiler jest słaby. |
| **Wymagane poprawki** | Opcjonalnie: „W materiale jest przykład z konkretnym znaczeniem cyfry — oceń, czy wolno uznać go za regułę wszystkich marek.” |
| **Status** | **gotowa do zatwierdzenia** |

---

## 3. Spoilery w guide’ach

| Lekcja | Fragment | Ocena |
|--------|----------|--------|
| N3 | Pełna lista nazw 1–10 przed matchingiem/trueFalse nazw | **Spoiler / pamięć krótkotrwała** — wymaga korekty |
| N6 | „głównie popielaty kierunek” | Lekkie naprowadzenie — nieblokujące |
| N10 | Wspomnienie przykładu `.1` = popiel | Lekkie — nieblokujące |
| N1, N2, N4, N5, N7, N8, N9 | — | Brak istotnych spoilerów reguł |

---

## 4. Powtórzenia zakresu

| Para | Ocena |
|------|--------|
| N1 / N2 | OK — konstrukcja vs znaczenie przed separatorem |
| N2 / N3 | OK — poziom jako pojęcie vs pełna skala nazw |
| N3 / N11 | **Rozróżnione** w dokumencie; N3 ma mniej porównań (ordering 3 el.) — OK po korekcie listy w guide |
| N4 / N5 | OK — główny vs dodatkowy |
| N5 / N6 | OK — przygotowanie vs pełne porównanie kolejności |
| N6 / N7 | OK |
| N8 vs N4–N7 | Synteza — zamierzone |
| N9 / N1 | Separatory wracają w nowym kontekście marek — OK |
| N10 vs N4 Z5 | Powtórzenie mitu `.1` — zamierzona spirala, OK |
| N1–N10 vs N13–N20 | Brak diagnozy odrostu/siwizny — OK |

---

## 5. Informacje niepotwierdzone / decyzje

| Informacja | Status |
|------------|--------|
| Pełna skala PL z poziomem 2 | **Decyzja właścicielki + SOK25** — oznaczona w pliku; E3 bez osobnego „2” |
| Znaczenia popiel/złoty przy 7.1 / 7.13 / 7.31 / 7.11 | **E3** — jako przykłady źródłowe |
| Wella głębokość/ton; Schwarzkopf dominujący/drugorzędny | **E3** |
| Uniwersalne `.2` / `.5` / … | **Nie dodano** |
| „`.1` zawsze = popiel” jako reguła | **Świadomie odrzucone** |

Brak wymyślonych legend poza źródłem.

---

## 6. Nieobsługiwane mechaniki

| Mechanika | Użycie w N1–N10 |
|-----------|-----------------|
| Feedback per opcja | **Nie** |
| Karuzela kart | **Nie** |
| `scaleGuide` | **Nie** (N3 = `hairGuide`) |
| multiSelect | **Nie** |
| Typy spoza silnika | **Nie** |

Wszystkie zadania: `singleChoice` / `trueFalse` / `matching` / `ordering` / `findError`.

---

## 7. Zadania wymagające korekty

| ID | Problem | Priorytet |
|----|---------|-----------|
| N3 guide + Z1/Z3 | Pełna lista nazw przed sprawdzeniem nazw | Wysoki (drobna korekta lekcji) |
| N5 Z1 opcja c | „Separators” → „Separator” | Niski |
| N6 guide | Opcjonalnie usunąć „popielaty” | Niski |
| N10 guide | Opcjonalnie bardziej neutralne sformułowanie | Niski |

---

## 8. Propozycje nowego brzmienia

### N3 — guide (bez pełnej listy przed Z1)

**Proponowane `text`:**  
> Skala poziomów idzie od najciemniejszego numeru do najjaśniejszego. Poziom 1 jest na ciemnym końcu, poziom 10 na jasnym. W module obowiązuje skala edukacyjna z nazwami — poznasz je w ćwiczeniach. Nazwy u producentów mogą się nieznacznie różnić. Grafika obok to tylko pomoc, nie pomiar z ekranu.

**Pełną listę 1–10** pokazać w `helperText` **po** Z1 albo w feedbacku Z1 / na ekranie przed Z3.

### N5 Z1 — opcja c

**Było:** `Separators`  
**Ma być:** `Separator`

### N6 — guide (opcjonalnie)

**Proponowane:**  
> Spójrz na `7.13` i `7.31`. Poziom wygląda tak samo. Po separatorze stoją te same oznaczenia, ale w innej kolejności. Za chwilę dopasujesz każdy zapis do opisu z materiału egzaminacyjnego.

---

## 9. N3 kontra N11

| Kryterium | Ocena |
|-----------|--------|
| N3 = wprowadzenie | Tak (mapa, kierunek, podstawowe nazwy) |
| N11 = praktyka | Zachowane w N11–N20 (więcej porównań) |
| Ryzyko dublowania | Umiarkowane przez listę w guide N3 — po korekcie guide ryzyko spada |

---

## 10. Przejście N10 → N11

Teaser N10 jest **zgodny z briefem**: części numeru + legenda → utrwalanie skali i porównywanie jasności.  
Bez odrostu, siwizny i diagnozy N13+.

---

## 11. Spójność redakcyjna z N11–N20

| Element | Ocena |
|---------|--------|
| Ton / odkrywanie / wspólny feedback | Zgodne |
| Zakaz uniwersalnej legendy | Zgodne |
| Skala PL + disclaimer | Zgodne |
| Ograniczenia silnika | Zgodne |
| Nagrody 10+10+15+15+25 | Zgodne |
| Diagnoza dopiero po N12 | Zgodne |

---

## 12. Liczby

| Status | Liczba | Lekcje |
|--------|--------|--------|
| Gotowa do zatwierdzenia | **8** | N1, N2, N4, N6, N7, N8, N9, N10 |
| Wymaga drobnej korekty | **2** | N3, N5 |
| Wymaga przebudowy | **0** | — |

---

## 13. Rekomendacja

| Pytanie | Odpowiedź |
|---------|-----------|
| Czy przekazać właścicielce do akceptacji teraz? | **Po drobnej korekcie N3 i N5** — albo z jasną listą dwóch poprawek do akceptacji warunkowej |
| Czy najpierw poprawić? | **Tak** — N3 guide + literówka N5 (krótki etap) |
| Czy po zatwierdzeniu zbiorczy audyt N1–N20? | **Tak** |
| Blokada JSON? | **Tak, nadal** — do korekty N1–N10 + akceptacji N1–N10 i N11–N20 |

---

*Audyt pierwszej wersji. Scenariusze nie były poprawiane w tym kroku.*
