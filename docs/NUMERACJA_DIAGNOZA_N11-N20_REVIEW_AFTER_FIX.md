# Ponowny audyt — scenariusze N11–N20 (po korekcie)

Źródło: `docs/NUMERACJA_DIAGNOZA_N11-N20_SCENARIOS.md` (wersja po korekcie)  
Poprzedni audyt: `docs/NUMERACJA_DIAGNOZA_N11-N20_REVIEW.md`  
Data: lipiec 2026  
Zakres: audyt redakcyjny i techniczny — bez JSON, bez zmian kodu.

---

## Ocena ogólna

Korekta usunęła główne blokery z poprzedniego audytu: spoilery w guide’ach, błędny `ordering` kompletności, feedback per opcja, `scaleGuide`/karuzelę oraz przebudowała N18 jako case etapami.

**Rekomendacja:** scenariusze N11–N20 **można przekazać właścicielce do zatwierdzenia merytorycznego**, z zastrzeżeniem kolejności pracy: najpierw ostateczne zatwierdzenie scenariuszy N1–N10, potem N11–N20, dopiero potem JSON.

---

## Audyt lekcji

### N11 — Rozpoznawanie poziomów 1–10

| Kryterium | Wynik |
|-----------|--------|
| Status | **gotowa do zatwierdzenia** |
| Guide zdradza odpowiedź? | Nie — wzornik jako pomoc, bez reguły „wyższy = jaśniejszy” przed Z2; reguła w feedbacku Z2 |
| Typy w silniku? | Tak: matching, singleChoice, trueFalse, ordering, findError |
| Feedback zgodny z silnikiem? | Tak — jeden `explanation` |
| Ordering bez obiektywnej kolejności? | Nie — tylko skala jasności 1→10 |
| Funkcje nieobsługiwane? | Nie (`hairGuide` + tekst; bez `scaleGuide`/karuzeli) |
| Zgodność ze źródłami? | Tak + disclaimer PL-MAP |
| Zakres lekcji? | Praktyka skali — nie powtórka N3 |
| Czytelność 360 px? | Tak |

### N12 — Poziom to nie refleks

| Kryterium | Wynik |
|-----------|--------|
| Status | **gotowa do zatwierdzenia** |
| Guide zdradza odpowiedź? | Nie — obserwacja `7` / `7.1` / `7.13` bez definicji „przed separatorem = poziom” |
| Typy w silniku? | Tak |
| Feedback zgodny? | Tak |
| Ordering błędny? | Brak ordering |
| Funkcje nieobsługiwane? | Nie |
| Źródła? | E3; `5.43` bez legendy uniwersalnej |
| Zakres? | Poziom vs refleks |
| 360 px? | Tak |

### N13 — Co właściwie oceniamy…

| Kryterium | Wynik |
|-----------|--------|
| Status | **gotowa do zatwierdzenia** |
| Guide zdradza odpowiedź? | Nie — bez listy 4 sytuacji i bez reguły osobnych partii przed Z1 |
| Typy w silniku? | Tak |
| Feedback zgodny? | Tak |
| Ordering błędny? | Nie |
| Funkcje nieobsługiwane? | Nie |
| Źródła? | SOK24–25 |
| Zakres? | Rozpoznanie sytuacji |
| 360 px? | Matching Z1: 3 dłuższe lewe teksty — akceptowalne przy skróceniu w JSON |

### N14 — Naturalny odrost

| Kryterium | Wynik |
|-----------|--------|
| Status | **gotowa do zatwierdzenia** |
| Guide zdradza odpowiedź? | Nie — bez checklisty elementów przed Z1 |
| Typy w silniku? | Tak |
| Feedback zgodny? | Tak |
| Ordering błędny? | Nie; Z4 trueFalse przeciw sztywnej kolejności |
| Funkcje nieobsługiwane? | Nie |
| Źródła? | SOK25; strefa siwizny — decyzja właścicielki (oznaczona) |
| Zakres? | Kompletność odrostu |
| 360 px? | Matching 4 pary — ciasne, ale krótkie etykiety |

### N15 — Kolor kosmetyczny a stan faktyczny

| Kryterium | Wynik |
|-----------|--------|
| Status | **gotowa do zatwierdzenia** |
| Guide zdradza odpowiedź? | Nie — „dwie informacje” bez gotowej reguły |
| Typy w silniku? | Tak |
| Feedback zgodny? | Tak |
| Ordering błędny? | Nie |
| Funkcje nieobsługiwane? | Nie |
| Źródła? | SOK24 |
| Zakres? | Stan faktyczny vs historia |
| 360 px? | Tak (poprawiona ortografia „Diagnozujesz”) |

### N16 — Rozjaśnienia i różne poziomy…

| Kryterium | Wynik |
|-----------|--------|
| Status | **gotowa do zatwierdzenia** |
| Guide zdradza odpowiedź? | Nie — bez listy pól przed matchingiem |
| Typy w silniku? | Tak |
| Feedback zgodny? | Tak |
| Ordering błędny? | Nie |
| Funkcje nieobsługiwane? | Nie |
| Źródła? | SOK25; pułapka oksydantu w Z5 |
| Zakres? | Strefy bez receptury |
| 360 px? | Tak |

### N17 — Ocena procentu siwizny

| Kryterium | Wynik |
|-----------|--------|
| Status | **gotowa do zatwierdzenia** |
| Guide zdradza odpowiedź? | Nie — bez spoilera o skroniach przed Z3 |
| Typy w silniku? | Tak; ordering tylko dla skali % |
| Feedback zgodny? | Tak |
| Ordering błędny? | Nie |
| Funkcje nieobsługiwane? | Nie (`hairGuide` + % w tekście) |
| Źródła? | SOK24 / WZN-S; przykład skroni w Z3 |
| Zakres? | Orientacyjna siwizna w odroście |
| 360 px? | Tak — bez wymogu odczytu napisów z bitmapy |

### N18 — Pełna diagnoza koloru

| Kryterium | Wynik |
|-----------|--------|
| Status | **gotowa do zatwierdzenia** |
| Guide zdradza odpowiedź? | Nie — case bez gotowego akapitu; dane odkrywane w Z1–Z4 |
| Typy w silniku? | Tak: singleChoice, matching, findError (bez multiSelect, bez ordering) |
| Feedback zgodny? | Tak; notatki autora osobno |
| Ordering błędny? | Usunięty — Z4 = findError kompletności |
| Funkcje nieobsługiwane? | Nie |
| Źródła? | SOK24–25; poza zakresem skóra/gęstość/pory roku |
| Zakres? | Tylko diagnoza koloru |
| 360 px? | Z5: 4 opcje — OK; opcja b dłuższa (świadomie jako wpis) |

### N19 — Powtórka mieszana

| Kryterium | Wynik |
|-----------|--------|
| Status | **gotowa do zatwierdzenia** |
| Guide zdradza odpowiedź? | Nie |
| Typy w silniku? | Tak |
| Feedback zgodny? | Tak |
| Ordering błędny? | Usunięty — Z5 = singleChoice kompletności |
| Funkcje nieobsługiwane? | Nie |
| Źródła? | E3, SOK24–25; poziomy 3,4,6,8,9 |
| Zakres? | Powtórka bez nowych reguł |
| 360 px? | Tak |

### N20 — Sprawdzian modułu

| Kryterium | Wynik |
|-----------|--------|
| Status | **gotowa do zatwierdzenia** |
| Guide zdradza odpowiedź? | Nie |
| Typy w silniku? | Tak |
| Feedback zgodny? | Tak |
| Ordering błędny? | Nie |
| Funkcje nieobsługiwane? | Nie |
| Źródła? | Synteza E3 + SOK; teaser zatwierdzony, bez nauki koła barw |
| Zakres? | Sprawdzian; pułapki receptury/oksydantu |
| 360 px? | Z5 case + 3 opcje — przy JSON warto złamać case na krótkie linie |

---

## Checklist zbiorczy (kryteria z briefu)

| Kryterium | N11 | N12 | N13 | N14 | N15 | N16 | N17 | N18 | N19 | N20 |
|-----------|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| Guide bez spoilera | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Typy w silniku | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Feedback 1× wspólny | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Brak błędnego orderingu | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Brak scaleGuide/karuzeli/multiSelect | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Zgodność ze źródłami / decyzjami | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Zakres lekcji | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 360 px | ✓ | ✓ | ✓* | ✓* | ✓ | ✓ | ✓ | ✓ | ✓ | ✓* |

\* drobne uwagi redakcyjne przy składaniu JSON (długość wierszy), nie blokują zatwierdzenia scenariusza.

---

## Podsumowanie liczbowe

| Status | Liczba |
|--------|--------|
| Gotowa do zatwierdzenia | **10** |
| Wymaga drobnej korekty | **0** |
| Wymaga przebudowy | **0** |

---

## Pozostałe blokady / uwagi (nieblokujące zatwierdzenia treści)

1. **Scenariusze N1–N10** nadal nie są w osobnym pliku pełnych scenariuszy — kolejność pracy właścicielki: najpierw N1–N10, potem zatwierdzenie N11–N20, potem JSON.  
2. **Karuzela kart wzornika** — poza silnikiem; w scenariuszach celowo `hairGuide` + tekst HTML. Osobny ticket UI w przyszłości.  
3. **Feedback per opcja** — poza silnikiem; notatki autora zostawione poza kontraktem JSON.  
4. **N14 Z1 / N13 Z1** — przy JSON uważać na długość etykiet matching na 360 px.  
5. **N20 Z5** — case w `question` jest gęsty; przy składaniu JSON złamać na krótkie linie (treść OK).

---

## Rekomendacja

**Tak — scenariusze N11–N20 można przekazać właścicielce do zatwierdzenia.**

Warunek procesowy (nie merytoryczny tej paczki): nie rozpoczynać JSON-ów modułu, dopóki nie zostaną zatwierdzone scenariusze N1–N10 oraz ta paczka N11–N20.

---

*Audyt po korekcie. Bez JSON, bez zmian kodu, bez commita/pusha.*
