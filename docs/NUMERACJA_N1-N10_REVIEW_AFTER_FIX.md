# Ponowny audyt N1–N10 — po korekcie

Źródło: `docs/NUMERACJA_N1-N10_SCENARIOS.md` (wersja po poprawkach z `NUMERACJA_N1-N10_REVIEW_AFTER_CREATION.md`)  
Data: lipiec 2026  
N11–N20: bez zmian.

---

## Ocena ogólna

Korekty N3, N5, N6 i N10 usuwają główne zarzuty z poprzedniego audytu. N3 wprowadza skalę stopniowo (kierunek → grupy → lista przy Z3 → zastosowanie), bez kopiowania N11. Mechaniki pozostają w limicie silnika.

**Rekomendacja:** N1–N10 **można przekazać właścicielce do akceptacji**. Następny krok procesowy: zbiorczy audyt N1–N20, potem JSON.

---

## Audyt lekcji

### N1 — Co widać w numerze farby

| Kryterium | Wynik |
|-----------|--------|
| Status | **gotowa do zatwierdzenia** |
| Jeden cel | Tak |
| Guide zdradza odpowiedź? | Nie |
| Ćwiczenia wymagają rozumienia | Tak |
| Echo poprzedniego ekranu | Nie |
| Feedback zgodny z silnikiem | Tak |
| Mechaniki obsługiwane | Tak |
| Zgodność ze źródłami | E3 |
| Niepotwierdzone | Nie |
| 360 px | Tak |
| Zakres innych lekcji | Nie |

### N2 — Liczba przed separatorem

| Kryterium | Wynik |
|-----------|--------|
| Status | **gotowa do zatwierdzenia** |
| Jeden cel | Tak |
| Guide zdradza? | Nie |
| Rozumienie | Tak |
| Echo | Nie |
| Feedback / silnik | Tak |
| Źródła | E3 |
| 360 px | Tak |
| Zakres | Nie dubluje N3 |

### N3 — Skala poziomów 1–10

| Kryterium | Wynik |
|-----------|--------|
| Status | **gotowa do zatwierdzenia** |
| Jeden cel | Tak — wprowadzenie skali |
| Guide zdradza? | Nie — bez pełnej listy przed Z1 |
| Poziom 2 obecny | Tak (Z1 przykład, ekran A, Z5) |
| Lista przed odtwarzaniem | Pełna lista dopiero przy Z3; Z5 oddzielone przez Z3+Z4 |
| Funkcja ≠ N11 | Tak — brak serii matchingów/długiego orderingu |
| Rozumienie | Tak (kierunek, grupy, zastosowanie) |
| Echo | Zminimalizowane (Z4 przerwa przed Z5) |
| Feedback / silnik | Tak; bloki A/B nad Z3 (obejście braku mid-flow guide) |
| `scaleGuide` / karuzela | Nie |
| Pomiar z monitora | Świadomie odrzucony (Z4) |
| Źródła | SOK25 / PL-MAP / E3; disclaimer producentów |
| 360 px | Dwa krótkie bloki 1–5 i 6–10 — OK |
| Niepotwierdzone | Grupowanie 2–5 brązy / 6–10 blondy = orientacja dydaktyczna z nazw skali (oznaczone) |

### N4 — Pierwsza cyfra po separatorze

| Kryterium | Wynik |
|-----------|--------|
| Status | **gotowa do zatwierdzenia** |
| Guide zdradza? | Nie |
| `.1` uniwersalne? | Nie — odrzucone |
| Silnik / źródła / 360 | OK |

### N5 — Druga cyfra po separatorze

| Kryterium | Wynik |
|-----------|--------|
| Status | **gotowa do zatwierdzenia** |
| Literówka „Separators” | **Usunięta** → „Separatora” |
| Inne przypadkowe angielskie słowa w treści uczennicy | Nie stwierdzono |
| Guide zdradza? | Nie |
| Silnik / źródła | OK |

### N6 — Dlaczego 7.13 i 7.31 to nie to samo

| Kryterium | Wynik |
|-----------|--------|
| Status | **gotowa do zatwierdzenia** |
| Guide przed Z1 | Tylko problem (kolejność / czy ten sam opis) — **bez** reguł o poziomie i znaczeniach |
| Pełna reguła | We feedbacku i Z2 (opisy E3) |
| Legenda uniwersalna | Odrzucona w Z5 |
| Źródła 7.13 / 7.31 | Zgodne z E3 |

### N7 — Co oznacza 7.11

| Kryterium | Wynik |
|-----------|--------|
| Status | **gotowa do zatwierdzenia** |
| Guide | Zmiękczony (bez „poziom jest ten sam” przed Z1) |
| 7.11 | Tylko zakres E3 |
| Uniwersalne powtórzenie cyfr | Odrzucone |

### N8 — Czytanie całego numeru…

| Kryterium | Wynik |
|-----------|--------|
| Status | **gotowa do zatwierdzenia** |
| Guide bez schematu przed Z1 | Tak |
| Ordering = kolejność odczytu ze źródła | Tak |
| Silnik / 360 | OK |

### N9 — Separatory i nazwy…

| Kryterium | Wynik |
|-----------|--------|
| Status | **gotowa do zatwierdzenia** |
| Wella / Schwarzkopf | Tylko E3 |
| Separator nie zmienia poziomu | Tak |
| Silnik / 360 | OK |

### N10 — Legenda producenta

| Kryterium | Wynik |
|-----------|--------|
| Status | **gotowa do zatwierdzenia** |
| Guide przed Z1 | Sytuacja z dwiema tubkami — **bez** gotowej zasady |
| Reguła po odpowiedzi | We feedbacku Z1 (zgodna z briefem) |
| Teaser → N11 | Tak; bez diagnozy N13+ |
| `.1` zawsze | Odrzucone |

---

## Checklist zbiorczy

| Kryterium | N1–N10 |
|-----------|--------|
| Guide bez istotnych spoilerów | ✓ |
| Brak feedbacku per opcja | ✓ |
| Brak `scaleGuide` / karuzeli | ✓ |
| Brak zadań „tylko kolor monitora” | ✓ |
| Typy tylko z silnika | ✓ |
| `.1` nie jako uniwersalny popiel | ✓ |
| 7.13 / 7.31 / 7.11 w zakresie E3 | ✓ |
| N3 ≠ N11 | ✓ |
| N10 → N11 naturalnie | ✓ |
| Diagnoza N13–N20 nie wchodzi | ✓ |

---

## Pozostałe uwagi (nieblokujące)

1. **Ekrany A/B w N3** — w silniku nie ma mid-flow guide; scenariusz przewiduje bloki tekstu nad Z3 (zgodne z limitem bez zmiany silnika).  
2. **Grupowanie 2–5 / 6–10** — orientacja dydaktyczna z nazw skali (decyzja / PL-MAP), nie osobna reguła zabiegowa ze źródła.  
3. **Scenariusze N1–N10 nadal wymagają akceptacji właścicielki** przed JSON.

---

## Podsumowanie liczbowe

| Status | Liczba |
|--------|--------|
| Gotowa do zatwierdzenia | **10** |
| Wymaga drobnej korekty | **0** |
| Wymaga przebudowy | **0** |

---

## Rekomendacja

| Pytanie | Odpowiedź |
|---------|-----------|
| Czy przekazać N1–N10 właścicielce? | **Tak** |
| Czy można przejść do zbiorczego audytu N1–N20? | **Tak** (po lub równolegle z akceptacją) |
| Blokada JSON całego modułu? | **Tak, do akceptacji** N1–N10 oraz N11–N20 — nie do braku jakości scenariuszy |

---

*Audyt po korekcie. Bez JSON, bez zmian kodu, bez zmian N11–N20.*
