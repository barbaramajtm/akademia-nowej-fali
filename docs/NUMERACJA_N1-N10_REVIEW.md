# Audyt scenariuszy N1–N10 — numeracja farb

Data: lipiec 2026  
Status: **AUDYT TREŚCI NIEMOŻLIWY — brak kompletnych scenariuszy**

Zgodnie z briefem: nie traktowano listy tytułów ani krótkiego planu jako kompletnych scenariuszy.  
Nie zmieniano N11–N20. Nie tworzono JSON. Nie modyfikowano kodu ani silnika. Bez commita/pusha.

---

## 1. Ścieżki — wynik wyszukiwania

### Kompletne scenariusze N1–N10

**Nie znaleziono.**  
Brak pliku typu `docs/NUMERACJA_*N1*N10*_SCENARIOS.md` oraz brak `lessons/numeracja-*.json`.

Kompletny scenariusz w rozumieniu projektu = tytuł, cel, intro, część edukacyjna, 5 zadań z opcjami, poprawne odpowiedzi, feedback, completion — **tego dla N1–N10 nie ma**.

### Materiały pokrewne (istniejące)

| Ścieżka | Co zawiera | Czy to scenariusze N1–N10? |
|---------|------------|---------------------------|
| `docs/NUMERACJA_DIAGNOZA_N11-N20_SCENARIOS.md` | Pełne scenariusze **N11–N20**; N1–N10 tylko jako wymagania wstępne / różnica N3 vs N11 | **Nie** |
| `docs/NUMERACJA_DIAGNOZA_N11-N20_REVIEW.md` | Audyt N11–N20; stwierdza brak pliku scenariuszy N1–N10 | **Nie** |
| `docs/NUMERACJA_DIAGNOZA_N11-N20_REVIEW_AFTER_FIX.md` | Ponowny audyt N11–N20; to samo zastrzeżenie | **Nie** |
| `docs/modules/WLOS_WIAZANIA_TEORIA_KOLORU.md` | Starszy zarys „Etap 4 — Numeracja” (L19–L22), inny schemat ID | **Nie** |
| `source-materials/materiały do egzaminu fryzjerskiego.pdf` (+ `_exam-pages/`) | Źródło merytoryczne (strona 3) | **Nie** (źródło, nie scenariusz) |
| `source-materials/_sok-pages/` | Wzorniki poziomów/siwizny (głównie pod N11+) | **Nie** |
| `lessons/` | Tylko `ph-*`, `wlos-*` (+ archiwum) — **brak** lekcji numeracji | **Nie** |
| Historia czatu (agent transcript) | Tabela planu N1–N10: tytuły, cele, typy ćwiczeń w skrócie | **Tylko plan** — bez pełnej treści zadań i feedbacku |

---

## 2. Ocena ogólna

**Nie ma czego audytować dydaktycznie ani merytorycznie na poziomie scenariuszy N1–N10.**

Istnieje wyłącznie:

1. **Plan / zarys** z rozmowy (tytuły N1–N10 + krótkie cele i typy),  
2. **Zaakceptowana struktura N11–N20** (pełne scenariusze), która zakłada ukończenie N1–N10,  
3. **Źródło E3** (strona 3 materiału egzaminacyjnego) — do przyszłego pisania scenariuszy.

Dlatego nie wypełniono tabeli statusów „gotowa / drobna korekta / przebudowa” dla treści lekcji — nie ma tekstów lekcji do oceny.

---

## 3. Tabela N1–N10

| Lekcja | Cel (z briefu / planu) | Mocne strony scenariusza | Problemy | Wymagane poprawki | Status |
|--------|------------------------|--------------------------|----------|-------------------|--------|
| N1–N10 | — | — | **Brak pliku kompletnych scenariuszy** | Napisać pełne scenariusze N1–N10 w formacie jak N11–N20 | **brak materiału do audytu** |

Szczegółowy audyt punktów 1–13 (dydaktyka) oraz punktów merytorycznych 1–12 **odroczony** do momentu powstania pliku scenariuszy.

---

## 4–8. Listy audytowe

| Sekcja | Wynik |
|--------|--------|
| 4. Fragmenty zdradzające odpowiedź | **n/d** — brak treści guide/zadań |
| 5. Powtórzenia zakresu między lekcjami | **n/d** — brak treści; przy pisaniu pilnować N3 ≠ N11 (już ustalone w N11–N20) |
| 6. Informacje niepotwierdzone w źródle | **n/d** dla scenariuszy; źródłem ma być E3 s. 3 |
| 7. Nieobsługiwane mechaniki | **n/d** w N1–N10; przy pisaniu stosować ograniczenia jak w N11–N20 (bez feedbacku per opcja, karuzeli, `scaleGuide` jako wzornika poziomów) |
| 8. Propozycje poprawek z gotowym brzmieniem | **n/d** — najpierw trzeba **napisać** scenariusze, nie poprawiać |

---

## 9. Zgodność z strukturą N11–N20

Zatwierdzona paczka N11–N20 **zakłada** istnienie N1–N10 (odczyt numeru + N3 wprowadzające skalę).  
Bez N1–N10 nie da się domknąć spójnego modułu ani bezpiecznie przejść do JSON całego N1–N20.

Wymagania przejściowe (już zapisane po stronie N11–N20), które muszą spełnić przyszłe scenariusze N1–N10:

- N3 = wprowadzenie skali 1–10 (z poziomem 2); N11 = praktyka porównań — bez dublowania.  
- N10 = legenda producenta; zakaz „`.1` zawsze = popiel”.  
- Te same typy silnika i model feedbacku co w N11–N20.

---

## 10. Przejście N10 → N11

**Nie da się ocenić na treściach** — brak scenariusza N10.  
Docelowo: N10 zamyka odczyt numeru i legendę; N11 otwiera praktyczne rozpoznawanie poziomów (już napisane).

---

## 11. Rekomendacja

| Pytanie | Odpowiedź |
|---------|-----------|
| Czy N1–N10 można zatwierdzić? | **Nie** — nie istnieją jako kompletne scenariusze |
| Czy najpierw je poprawić? | **Nie „poprawić” — najpierw napisać** pełne scenariusze N1–N10 |
| Czy po poprawkach (napisaniu) zrobić zbiorczy audyt N1–N20? | **Tak** — najpierw audyt/korekta N1–N10, potem zbiorczy audyt z N11–N20, potem JSON |

### Blokady przed JSON-ami modułu

1. Brak kompletnych scenariuszy **N1–N10**.  
2. Brak zatwierdzenia N1–N10.  
3. Dopiero potem: zatwierdzenie N11–N20 (scenariusze już po korekcie) → JSON N1–N20.

---

## Co istnieje vs czego brakuje (skrót)

**Istnieje**
- Plan tytułów/celów N1–N10 (czat / zarys).  
- Pełne scenariusze N11–N20 + audyty.  
- Źródło: egzamin s. 3; standardy lekcji w `docs/`.  
- Silnik z typami: `singleChoice`, `trueFalse`, `matching`, `ordering`, `findError`.

**Brakuje**
- Pliku `docs/…SCENARIOS…` z pełną treścią N1–N10 (intro, guide, 5 zadań, feedback, completion).  
- JSON-ów lekcji numeracji.

---

## Liczby (status lekcji)

| Status | Liczba |
|--------|--------|
| Gotowa do zatwierdzenia | **0** |
| Wymaga drobnej korekty | **0** |
| Wymaga przebudowy | **0** |
| Brak scenariusza (nieaudytowalne) | **10** (N1–N10) |

### Trzy najważniejsze problemy

1. **Brak pliku kompletnych scenariuszy N1–N10.**  
2. **Nie da się wykonać audytu dydaktycznego/merytorycznego treści**, która nie istnieje.  
3. **Blokada JSON całego modułu** do czasu napisania i zatwierdzenia N1–N10.

---

*Raport blokady. Następny krok po decyzji właścicielki: napisać `docs/NUMERACJA_N1-N10_SCENARIOS.md` (pełne scenariusze), potem audyt jak dla N11–N20.*
