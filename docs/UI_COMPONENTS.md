# Komponenty UI — Akademia Nowej Fali

Dokument opisuje warstwę wizualną aplikacji: kierunek graficzny, motyw przewodni, komponenty, mikroanimacje i system nagród. Uzupełnia [PROJECT.md](PROJECT.md) i [ILLUSTRATION_GUIDE.md](ILLUSTRATION_GUIDE.md).

**Zakres:** wyłącznie prezentacja (HTML, CSS, lekkie haki w `js/ui-effects.js`). Logika lekcji, JSON i postęp pozostają bez zmian.

## Spis treści

1. [Kierunek wizualny](#1-kierunek-wizualny)
2. [Paleta](#2-paleta)
3. [Motyw przewodni — oko](#3-motyw-przewodni--oko)
4. [Kompozycja ekranu](#4-kompozycja-ekranu)
5. [Elementy zakazane](#5-elementy-zakazane)
6. [Komponenty](#6-komponenty)
7. [System nagród i Kosmyków](#7-system-nagród-i-kosmyków)
8. [Mikroanimacje](#8-mikroanimacje)
9. [Dostępność i wydajność](#9-dostępność-i-wydajność)
10. [Pliki implementacji](#10-pliki-implementacji)

---

## 1. Kierunek wizualny

**Nazwa:** Minimal Mid-Century Editorial Design inspired by contemporary Scandinavian design.

Aplikacja ma sprawiać wrażenie **nowoczesnej aplikacji edukacyjnej premium** z subtelną gamifikacją.

**Inspiracje:** Mid-Century Modern, Scandinavian Editorial Design, Apple Human Interface, Headspace, Calm, Notion. Mechanika motywacji inspirowana Duolingo — **nie** styl graficzny Duolingo.

**Nie jest:** grą, szkolnym e-learningiem, Canvą ani Pinterestem.

**Cechy:**
- miękkie geometryczne formy i łagodne krzywizny;
- dużo pustej przestrzeni;
- prosta hierarchia typograficzna;
- spokojne, edytorialne kompozycje;
- płaskie kolory, bez gradientów i efektów 3D.

Styl **nie** jest „Organic Scandinavian” z dekoracyjnymi liśćmi, gałązkami i ornamentami — ten kierunek jest wykluczony.

---

## 2. Paleta

| Token | Rola |
|-------|------|
| warm ivory `#F7F2EB` | tło główne |
| cream `#F1E9DE` | karty, pola drugorzędne |
| dusty pink `#E8C3B9` | powieka oka, akcent miękki |
| terracotta `#D06A4E` | Kosmyki, akcent aktywny, pasek modułu |
| muted coral `#C86B52` | stany błędu, delikatny akcent |
| mustard `#E8B23E` | bonusy, serie |
| sage `#A7B69A` | sukces, pasek postępu |
| olive `#7F8A63` | etykiety, kickery |
| soft mint `#D7E7DF` | tła podpowiedzi, karty ukończonych |
| deep navy `#1E2A44` | tekst, przyciski primary, hook |

**Zasada:** jeden ekran lub plansza — maksymalnie 2–3 kolory dominujące.

Zmienne CSS: `css/styles.css` (`:root`).

---

## 3. Motyw przewodni — oko

Geometryczne, płaskie oko — **nie** logo, **nie** maskotka.

**Znaczenie:** obserwacja, diagnoza, uważność, świadome patrzenie.

**Budowa:**
- białko: cream;
- powieka: dusty pink;
- źrenica: deep navy.

**Gdzie występuje:**
- watermark na Home (półprzezroczysty);
- „Wskazówka eksperta” w feedbacku lekcji;
- ekran ukończenia lekcji;
- przyszła odznaka „Sokole Oko”.

**Zasady:** nigdy nie dominuje ekranu; najczęściej opacity 10–15%; animacja mrugnięcia wyłącznie przy nagrodzie.

Implementacja SVG: `js/ui-effects.js` (`EYE_SVG`).

---

## 4. Kompozycja ekranu

Każdy ekran opiera się na:

1. kremowym / ivory tle;
2. jednej dużej miękkiej formie w tle (plama mint lub pink);
3. jednym głównym obiekcie (karta modułu, pytanie, podsumowanie);
4. prostych kartach z cienką obwódką;
5. cienkich liniach prowadzących (pasek postępu 4 px);
6. dużych marginesach bocznych (20 px w widoku lekcji);
7. wysokiej czytelności typografii (Poppins nagłówki, Inter treść).

Pusta przestrzeń **pozostaje pusta** — nie wypełniamy jej ornamentami.

---

## 5. Elementy zakazane

Nie stosujemy w UI ani ilustracjach:

- liści, gałązek, kwiatów;
- kropek dekoracyjnych, confetti, patternów;
- ornamentów i ozdobnych kresek;
- kropek w siatce, ukośnych pasków;
- dekoracyjnych fal z wielu cienkich linii;
- elementów dodanych wyłącznie po to, by zapełnić pustą przestrzeń;
- monet, diamentów, skrzyń, fajerwerków, neonów, brokatu;
- ciągłego migania i efektów kasynowych.

---

## 6. Komponenty

| Komponent | Klasa / plik | Opis |
|-----------|--------------|------|
| Przycisk primary | `.btn-primary`, `.cta` | navy, zaokrąglenie 14–20 px |
| Przycisk ghost | `.btn-ghost` | przezroczysty, obwódka cream |
| Karta modułu | `.hero`, `.home-module-hero` | kremowa karta, akcent mint w tle |
| Kafel lekcji | `.lesson-tile` | lewa krawędź terracotta = dostępna; mint = ukończona |
| Pasek postępu | `.progress .seg`, `.bar`, `.hbar` | cienka linia, wypełnienie sage / terracotta |
| Panel feedbacku | `#fb` | sheet od dołu, zaokrąglenie górne |
| Wskazówka eksperta | `#faha`, `.aha` | oko + nagłówek, tło cream |
| Nawigacja dolna | `#shellNav` | 4 ikony, aktywna: navy + kropka terracotta |
| Kosmyk pill | `.kosmyk-pill` | licznik na Home |
| Hook następnej lekcji | `.hook` | navy, teaser białym tekstem |

Szczegóły ilustracji w lekcjach: [ILLUSTRATION_GUIDE.md](ILLUSTRATION_GUIDE.md).

---

## 7. System nagród i Kosmyków

**Kosmyk** zastępuje monetę — ikona liścia/włókna w kolorze terracotta.

Nagroda ma dawać **satysfakcję**, nie wrażenie kasyna.

**Po poprawnej odpowiedzi:**
- krótki przelot Kosmyków do licznika (`kosmyk-particle`);
- puls licznika w topbarze.

**Po ukończeniu lekcji (~2 s):**
- sekwencja reveal na ekranie done;
- oko na ekranie completion z delikatnym mrugnięciem;
- po powrocie na Home: płynne wypełnienie paska modułu, błysk, podświetlenie nowej lekcji;
- watermark oka mruga jednokrotnie.

**Odznaka (kolekcja):** scale-in + jedno odbicie (`.slot.newb.pop`).

Powtórka ukończonej lekcji: bez nowych nagród postępu (logika bez zmian).

---

## 8. Mikroanimacje

Animacje **tylko jako nagroda** — na co dzień UI jest statyczne i spokojne.

| Zdarzenie | Efekt | Plik |
|-----------|-------|------|
| Poprawna odpowiedź | przelot Kosmyków, puls licznika | `ui-effects.js`, `animations.css` |
| Ukończenie lekcji | glow tła, oko, reveal bloków | `app.js`, `ui-effects.js` |
| Powrót na Home | pasek modułu + błysk, tile unlock glow | `shell.js`, `ui-effects.js` |
| Odznaka w kolekcji | badge-reward-pop | `animations.css` |

**Pasek postępu:** krótka pauza → płynne `transition: width` → subtelny błysk (`.bar-reward`).

**Implementacja:** CSS `transform`, `opacity`, `transition`; unikamy ciężkich bibliotek animacji.

---

## 9. Dostępność i wydajność

**`prefers-reduced-motion: reduce`:**
- wyłączone przeloty Kosmyków, mruganie oka, glow, animacje scale;
- pozostaje natychmiastowa zmiana stanu (tekst, klasy, szerokość paska bez opóźnienia).

**Kontrast:** tekst navy na ivory/cream spełnia wymogi czytelności na telefonie.

**Wydajność:** animacje na GPU (`transform`, `opacity`); particles usuwane z DOM po ~1 s.

---

## 10. Pliki implementacji

| Plik | Rola |
|------|------|
| `css/styles.css` | tokeny, layout, komponenty |
| `css/animations.css` | keyframes nagród |
| `js/ui-effects.js` | Kosmyki, oko, nagroda po lekcji |
| `index.html` | watermark, struktura widoków |
| `js/shell.js` | wywołanie efektów po `onLessonComplete` / `goHome` |
| `js/app.js` | `awardKosmyki`, `markCompletionReward` |

Nowe lekcje **nie wymagają** zmian w warstwie UI, o ile używają istniejących typów zadań i pól JSON.
