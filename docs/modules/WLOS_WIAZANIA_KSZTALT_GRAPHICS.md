# Plan grafik — „Włos, wiązania i zmiana kształtu”

Stan: **22 lipca 2026**.  
Zasada: **istniejąca odpowiednia grafika → użyj jej**. Nowe tylko jako `NOWA GRAFIKA — DO AKCEPTACJI` (bez generowania w tym etapie).

Szczegóły scenariuszy: [`WLOS_WIAZANIA_KSZTALT_SCENARIOS.md`](WLOS_WIAZANIA_KSZTALT_SCENARIOS.md).  
Inwentaryzacja: [`WLOS_WIAZANIA_KSZTALT_SOURCES.md`](WLOS_WIAZANIA_KSZTALT_SOURCES.md).

---

## 1. Podsumowanie decyzji

| Lekcja | Status grafiki | Plik | Ekran |
|--------|----------------|------|-------|
| L1 Co utrzymuje kształt | `ISTNIEJĄCA — UŻYĆ PONOWNIE` | `assets/images/hair-fibrous-keratin.png` | GUIDE |
| L2 Wiązania wodorowe | `ISTNIEJĄCA — WYMAGA CROPU` | `assets/images/hair-hydrogen-bonds.png` | GUIDE |
| L3 Wilgoć, ciepło i modelowanie | `NIEPOTRZEBNA` (opcjonalnie ponownie H) | — | — |
| L4 Skręt po wałkach | `NIEPOTRZEBNA` | — | — |
| L5 Wiązania siarkowe | `ISTNIEJĄCA — UŻYĆ` (nowo dodana) | `assets/images/hair-sulfur-bonds-permanent.png` | GUIDE |
| L6 Redukcja i utrwalenie | `ISTNIEJĄCA — UŻYĆ PONOWNIE` | `assets/images/hair-sulfur-bonds-permanent.png` | GUIDE |
| L7 Czasowa czy chemiczna? | `NIEPOTRZEBNA` | — | — |

**Łącznie nowych grafik do akceptacji: 1 (preferowane) albo maksymalnie 2.**

---

## 2. Istniejące — szczegółowe przypisanie

### 2.1 `assets/images/hair-fibrous-keratin.png`

| Pole | Wartość |
|------|---------|
| Status | `ISTNIEJĄCA — UŻYĆ PONOWNIE` |
| Co widać | Spirale peptydowe → keratyna włóknista |
| Lekcja | L1 |
| Ekran | GUIDE |
| Po co | Most: kształt = struktura keratyny (już znana), bez re-definicji |
| Używana wcześniej | Tak — `wlos-keratyna-rusztowanie` |
| Crop | Opcjonalny (liście/serca) — nie blokuje merytoryki |

### 2.2 `assets/images/hair-hydrogen-bonds.png`

| Pole | Wartość |
|------|---------|
| Status | `ISTNIEJĄCA — WYMAGA CROPU` |
| Co widać | Spirala, mostki O···H, tytuł „Mostki wodorowe”, podpis o tlenie i wodorze; **dekoracyjne liście, serce, gwiazdki** |
| Lekcja | L2 (obowiązkowo); L3 tylko jeśli UI wymaga obrazu |
| Ekran | GUIDE |
| Po co | Nazwa + wizualizacja mostków H przed zadaniami o modelowaniu |
| Używana wcześniej | Nie w JSON lekcji (plik przygotowany wcześniej) |
| Crop wymagany | Usunąć / wyciąć strefę dekoracji botanicznej i serc (zgodnie z `ILLUSTRATION_GUIDE.md`). **Zachować** spiralę, mostki O–H i tekst dydaktyczny. |
| Nie robić | Nowej ilustracji „ładniejszej” z tym samym sensem |

### 2.3 Świadomie nieprzypisane (obejrzane)

| Plik | Powód |
|------|--------|
| `hair-composition.png`, `hair-layers.png`, `hair-growth-cycle.png` | Etap budowy — poza tym modulem |
| `hair-keratin-formation.png`, `hair-amorphous-keratin.png`, `hair-cortex-structure.png` | reference-only / poza źródłami egzaminowymi |
| `wlos-ph.jpg` | Osłonka/pH; w L6 wystarczy tekst o pęcznieniu (Mat. 40). Unikamy re-lekcji pH. |
| Avatary, logo, oko, wzorniki koloru | UI / inny moduł |

---

## 3. Nowe — do akceptacji (nie generować teraz)

### Preferowane: **jedna** plansza na L5+L6

**Proponowana ścieżka po akceptacji:**  
`assets/images/hair-sulfur-bonds-permanent.png`

**Co ma przedstawiać:**

1. **Panel A — mostki siarczkowe:** uproszczone połączenia w keratynie z udziałem siarki (bez wzoru chemicznego na poziomie akademickim).
2. **Panel B — trzy kroki trwałej:**  
   (1) reduktor / przekształcenie („rozrywa”) mostków →  
   (2) nawinięcie / nowy kształt →  
   (3) utrwalacz odbudowuje mostki.
3. Krótki podpis PL: wiązania siarkowe = trwała zmiana kształtu (w odróżnieniu od wodorowych przy modelowaniu).

**Styl:** zgodny z zaakceptowaną planszą składu włosa / ILLUSTRATION_GUIDE (bez liści, serc, gwiazdek, bez fioletowego „AI glow”).

**Gdzie:**

| Lekcja | Fragment planszy | Ekran |
|--------|------------------|-------|
| L5 | Panel A (+ ewentualnie mały kontrast H vs S słownie) | GUIDE |
| L6 | Panel B (3 kroki) — ten sam plik, crop/focus na proces **albo** pełna plansza | GUIDE |

**Dlaczego żadna istniejąca nie wystarcza:**  
Brak lokalnego schematu mostków S i procesu trwałej; H-bonds ≠ S; `wlos-ph` ≠ mostki.

### Alternatywa (gorsza): dwie osobne

1. `hair-sulfur-bonds.png` — tylko mostki S (L5)  
2. `hair-permanent-wave-process.png` — tylko 3 kroki (L6)  

Wymaga dwóch akceptacji — **nie rekomendowane**, jeśli da się jedną planszą.

### Opcjonalne (nieblokujące)

Porównanie „lok modelowanie vs lok trwała” — **odrzucić na start**; L7 uczy matchingiem bez grafiki.

---

## 4. Checklist przed publikacją grafik

- [ ] Crop `hair-hydrogen-bonds.png` (dekoracje)
- [ ] Akceptacja właścicielki: 1 nowa plansza S + proces
- [ ] Alt i caption po polsku, bez spoilera odpowiedzi do Z1
- [ ] Max 1 ilustracja na lekcję
- [ ] Ścieżki tylko pod `assets/images/`
- [ ] Mobile 360–430 px: czytelne napisy, bez drobnego chemicznego „spaghetti”

---

## 5. Mapowanie ekranów (INTRO / GUIDE / …)

Zgodnie ze standardem: ilustracja w części edukacyjnej (`hairGuide`), **nie** w completion i nie jako tło opcji.

| Lekcja | INTRO | GUIDE | PRZED Zx | PO FEEDBACKU |
|--------|-------|-------|----------|--------------|
| L1 | brak | fibrous keratin | — | — |
| L2 | brak | H-bonds (crop) | — | — |
| L3–L4 | brak | brak / opcjonalnie H | — | — |
| L5–L6 | brak | nowa (po akceptacji) | — | — |
| L7 | brak | brak | — | — |
