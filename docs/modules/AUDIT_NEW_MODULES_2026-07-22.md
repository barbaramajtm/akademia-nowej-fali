# Audyt nowych modułów — 22.07.2026

Zakres: `trwala-procedura`, `bhp-higiena-salonu`, `strzyzenie-narzedzia` (18 lekcji) + integracja katalog/UI.

## Werdykt

**Struktura i integracja: OK.**  
**Merytoryka vs lokalne źródła: OK** (z dwoma zastrzeżeniami poniżej).  
**Pedagogika: akceptowalna** w linii całego kursu; poprawiono najsłabsze matchy/dystraktory w tej poprawce.

## Checklista techniczna

| Check | Wynik |
|-------|-------|
| JSON `schemaVersion: 1`, 5 zadań, rytm typów, nagrody 10/10/15/15/25 | OK (18/18) |
| Plik = wpis katalogu = tytuł | OK |
| Unlock chain (wymaga istniejącej lekcji) | OK |
| `LessonsModuleOrder` zawiera 3 moduły | OK |
| Badge + motif SVG + `continue-card--hair` | OK |
| Grafika `hair-sulfur-bonds-permanent.png` w przyborach | OK |
| Orphan JSON | brak |

## Źródła (spot-check)

| Moduł | Potwierdzone lokalnie | Uwagi |
|-------|----------------------|-------|
| Trwała | Mat. 19–22, Masz. 7/12/15/24/33, Tech. 10/30 (`f1b002f4…jpg`) | Lista nawijania = Tech. 30 |
| BHP | Tech. 7/11/27/3, Masz. 6/8/21–23/29/37/40, Mat. 26/47, Test BHP 1–7 (audyt 2026) | PDF 67 pyt. 3/6 (porażenie / gaśnica) — bez osobnego klucza audytu; zgodne z typową odpowiedzią egzaminacyjną + Masz. 37 |
| Strzyżenie | Tech. 14/15/24, Masz. 4/5/10/16/17/18/20/32/35/36/41 | Bez kątów/procedur (świadomie) |

## Zgodność ze standardem lekcji

- Brak `clientQuote`: **tak samo w całym kursie** (0/68 lekcji) — nie regresja tych modułów.
- `startButtonLabel: „Zacznij lekcję”`: spójne z kursem.
- Część edukacyjna: zwykle `narratorText`; `hairGuide` tylko w `trwala-przybory-i-przebieg` — dopuszczalne wg standardu.
- `perfectBonus: 15`: spójne z kursem (nie 20 z tekstu standardu).

## Poprawki po audycie (ten PR)

- Słabe matchingi w `strzyz-techniki-lista`, `strzyz-degazowanie`, `strzyz-cieniowanie` (prawe strony nie powtarzają lewych).
- Dystraktory „gaśnica / numer farby 1–10” w lekcjach strzyżenia/BHP/trwałej — zamienione na bliższe tematowi.
- Doprecyzowany cytat źródła Tech. 30 w `TRWALA_PROCEDURA_SOURCES.md`.

## Dług techniczny (nie blokuje)

- Długie `trueFalse` typu „wykład → echo” (np. BHP prąd / lista chorób).
- Mało `hairGuide` / grafik w nowych modułach (zgodnie z decyzją „grafiki później”).
- PDF BHP 67 (2015) — nie uczyć limitów liczbowych bez re-audytu (już w SOURCES).

## Re-audit (ten sam dzień, drugi przebieg)

Powtórzona walidacja JSON/katalog/UI + spot-check PDF: **PASS, 0 issues, 0 warns.**  
Po tym potwierdzeniu ruszył kolejny moduł: `prostowanie-wlosow`.
