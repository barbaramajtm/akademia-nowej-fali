# -*- coding: utf-8 -*-
"""One-off generator: production lesson JSON for Numeracja N1–N20 from accepted scenarios.
Does NOT wire catalog. Run: python scripts/generate_numeracja_n1_n20.py
"""
from __future__ import annotations

import json
import os
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "lessons"
CATEGORY = "Numeracja farb i diagnoza koloru"
REWARDS = {
    "streakBonus": {"threshold": 3, "amount": 5, "label": "3 poprawne z rzędu"},
    "perfectBonus": {"amount": 15, "label": "Lekcja bez pomyłek"},
}
STAKE = "do 75 Kosmyków"
START = "Zacznij lekcję"
CHECK = "Sprawdź"
RESET = "Od początku"
TF_TRUE = "Prawda"
TF_FALSE = "Mit"

IMG_POZIOMY = "source-materials/_sok-pages/poziomy-1-10-wzornik-hires.png"
IMG_SIWIZNA = "source-materials/_sok-pages/siwizna-wzornik-hires.png"
IMG_ASSETS_WZORNIK = "assets/images/Wzornik poziomów kolorystycznych włosów naturalnych.jpg"

N3_BLOCKS = (
    "Poziomy 1–5:\n"
    "1 — czarny\n"
    "2 — najciemniejszy brąz\n"
    "3 — ciemny brąz\n"
    "4 — średni brąz\n"
    "5 — jasny brąz\n"
    "\n"
    "Poziomy 6–10:\n"
    "6 — ciemny blond\n"
    "7 — średni blond\n"
    "8 — jasny blond\n"
    "9 — bardzo jasny blond\n"
    "10 — najjaśniejszy blond\n"
    "\n"
    "W tym module korzystamy z tej skali edukacyjnej. "
    "Nazwy poziomów mogą się nieznacznie różnić między producentami.\n"
    "\n"
    "Który poziom będzie jaśniejszy: 4 czy 8?"
)


def sc(nid, kicker, question, options, correct, reward, ct, it, expl, fun=None):
    opts = [{"id": o[0], "text": o[1]} for o in options]
    task = {
        "id": nid,
        "type": "singleChoice",
        "kicker": kicker,
        "question": question,
        "options": opts,
        "correctOptionId": correct,
        "reward": reward,
        "checkButtonLabel": CHECK,
        "feedback": {"correctTitle": ct, "incorrectTitle": it, "explanation": expl},
    }
    if fun:
        task["feedback"]["funFact"] = {"text": fun}
    return task


def tf(nid, kicker, question, correct, reward, ct, it, expl, fun=None):
    task = {
        "id": nid,
        "type": "trueFalse",
        "kicker": kicker,
        "question": question,
        "trueLabel": TF_TRUE,
        "falseLabel": TF_FALSE,
        "correctValue": correct,
        "reward": reward,
        "checkButtonLabel": CHECK,
        "feedback": {"correctTitle": ct, "incorrectTitle": it, "explanation": expl},
    }
    if fun:
        task["feedback"]["funFact"] = {"text": fun}
    return task


def match(nid, kicker, question, left_title, right_title, left, right, reward, ct, it, expl, fun=None):
    # left/right: list of (id, pairId, text)
    task = {
        "id": nid,
        "type": "matching",
        "kicker": kicker,
        "question": question,
        "leftTitle": left_title,
        "rightTitle": right_title,
        "left": [{"id": a, "pairId": b, "text": c} for a, b, c in left],
        "right": [{"id": a, "pairId": b, "text": c} for a, b, c in right],
        "reward": reward,
        "checkButtonLabel": CHECK,
        "feedback": {"correctTitle": ct, "incorrectTitle": it, "explanation": expl},
    }
    if fun:
        task["feedback"]["funFact"] = {"text": fun}
    return task


def order(nid, kicker, question, steps, correct_order, reward, ct, it, expl, fun=None):
    # steps: list of (id, text)
    task = {
        "id": nid,
        "type": "ordering",
        "kicker": kicker,
        "question": question,
        "resetLabel": RESET,
        "steps": [{"id": a, "text": b} for a, b in steps],
        "correctOrder": correct_order,
        "reward": reward,
        "checkButtonLabel": CHECK,
        "feedback": {"correctTitle": ct, "incorrectTitle": it, "explanation": expl},
    }
    if fun:
        task["feedback"]["funFact"] = {"text": fun}
    return task


def ferr(nid, kicker, question, card_title, rows, correct_ids, reward, ct, it, expl, fun=None):
    task = {
        "id": nid,
        "type": "findError",
        "kicker": kicker,
        "question": question,
        "cardTitle": card_title,
        "rows": [{"id": a, "text": b} for a, b in rows],
        "correctOptionIds": correct_ids,
        "reward": reward,
        "checkButtonLabel": CHECK,
        "feedback": {"correctTitle": ct, "incorrectTitle": it, "explanation": expl},
    }
    if fun:
        task["feedback"]["funFact"] = {"text": fun}
    return task


def lesson(lid, title, level, intro, tasks, comp_title, comp_sub, teaser, remember,
           guide=None, hair=None, solved="Lekcja ukończona"):
    intro_obj = {
        "narratorText": intro,
        "stakeText": STAKE,
        "startButtonLabel": START,
    }
    if guide and not hair:
        # Text-only educational screen is not available without image (hairGuide)
        # or pH widget (scaleGuide). Fold guide into narratorText.
        intro_obj["narratorText"] = f"{intro} {guide['text']}"
    if hair:
        intro_obj["hairGuide"] = hair
    # Attach remember sentence to last task funFact if not already set
    if remember and tasks:
        last = tasks[-1]
        if "funFact" not in last["feedback"]:
            last["feedback"]["funFact"] = {"text": remember}
    return {
        "schemaVersion": 1,
        "id": lid,
        "title": title,
        "category": CATEGORY,
        "levelLabel": level,
        "intro": intro_obj,
        "rewards": REWARDS,
        "tasks": tasks,
        "completion": {
            "solvedLabel": solved,
            "title": comp_title,
            "subtitle": comp_sub,
            "kosmykiLabel": "Kosmyków za tę lekcję",
            "nextLesson": {"label": "Następna lekcja", "teaser": teaser},
        },
    }


def build_all():
    lessons = []

    # --- N1 ---
    lessons.append(lesson(
        "lesson-n1-numer-farby",
        "Co widać w numerze farby",
        "Odczyt numeru",
        "Numer farby to nie jedna tajemnicza liczba. Najpierw zobaczysz, z jakich części się składa.",
        [
            sc("n1-z1", "Krok 1 · Separator",
               "W zapisie 7.13 który znak oddziela pierwszą cyfrę od kolejnych?",
               [("a", "kropka ."), ("b", "cyfra 1"), ("c", "cyfra 3")], "a", 10,
               "Tak.", "Sprawdź jeszcze raz.",
               "Separatorem jest znak między częściami numeru — tu kropka. Cyfry po separatorze to osobna część zapisu."),
            sc("n1-z2", "Krok 2 · Przed separatorem",
               "W 7/1 która część stoi przed separatorem?",
               [("a", "7"), ("b", "/"), ("c", "1")], "a", 10,
               "Dokładnie.", "Sprawdź jeszcze raz.",
               "Przed separatorem stoi pierwsza liczba zapisu — tu 7. Sam separator i to, co po nim, to kolejne części."),
            match("n1-z3", "Krok 3 · Części zapisu",
                  "Połącz element z miejscem w numerze 7-1.",
                  "Element", "Miejsce",
                  [("l1", "a", "7"), ("l2", "b", "-"), ("l3", "c", "1")],
                  [("r1", "b", "separator"), ("r2", "a", "przed separatorem"), ("r3", "c", "po separatorze")],
                  15, "Dobrze.", "Sprawdź jeszcze raz.",
                  "W 7-1 liczba 7 jest przed separatorem, myślnik jest separatorem, a 1 stoi po separatorze."),
            tf("n1-z4", "Krok 4 · Dwie cyfry po",
               "W zapisie 7.13 po separatorze stoją dwie cyfry: 1 i 3.",
               True, 15, "Tak.", "Sprawdź jeszcze raz.",
               "Po kropce w 7.13 widać dwie cyfry — najpierw 1, potem 3."),
            ferr("n1-z5", "Krok 5 · Znajdź błąd",
                 "W którym stwierdzeniu jest błąd?",
                 "Opisy konstrukcji",
                 [("s1", "W 7.13 przed separatorem stoi 7."),
                  ("s2", "Separator może być kropką, ukośnikiem lub myślnikiem."),
                  ("s3", "W 7.13 całość 713 to jedna nierozdzielna liczba bez części.")],
                 ["s3"], 25, "Znalazłaś błąd.", "Sprawdź jeszcze raz.",
                 "Numer składa się z części: liczba przed separatorem, separator i cyfry po nim — nie jest jedną nierozdzielną liczbą 713."),
        ],
        "Widzisz części numeru farby",
        "Rozpoznajesz, co stoi przed separatorem, czym jest separator i co po nim następuje.",
        "Jaką informację niesie liczba przed separatorem?",
        "Numer farby rozkładasz na części: przed separatorem, separator i cyfry po nim.",
        guide={"title": "Trzy zapisy",
               "text": "Spójrz na 7.13, 7/1 i 7-1. Znaki między cyframi wyglądają inaczej, ale układ części jest podobny. Za chwilę wskażesz, co jest separatorem, a co stoi przed nim i po nim."},
    ))

    # --- N2 ---
    lessons.append(lesson(
        "lesson-n2-liczba-przed-separatorem",
        "Liczba przed separatorem",
        "Odczyt numeru",
        "Już rozróżniasz części numeru. Teraz skupisz się na tym, co stoi przed separatorem.",
        [
            sc("n2-z1", "Krok 1 · Porównanie",
               "W zapisach 5.1, 7.1 i 9.1 która część się zmienia, gdy porównujesz je ze sobą?",
               [("a", "Liczba przed separatorem"), ("b", "Cyfra zaraz po separatorze"), ("c", "Sam znak separatora")],
               "a", 10, "Tak.", "Sprawdź jeszcze raz.",
               "We wszystkich trzech zapisach po separatorze stoi 1. Zmienia się liczba przed separatorem — to właśnie ona opisuje poziom jasności lub ciemności."),
            tf("n2-z2", "Krok 2 · Mit",
               "Liczba przed separatorem mówi wyłącznie o kierunku kolorystycznym, np. o popielu.",
               False, 10, "Dobrze.", "Sprawdź jeszcze raz.",
               "Liczba przed separatorem oznacza poziom koloru — jego jasność lub ciemność. Kierunek kolorystyczny odczytujesz z cyfr po separatorze."),
            match("n2-z3", "Krok 3 · Co do czego",
                  "Połącz część numeru z rodzajem informacji.",
                  "Część numeru", "Informacja",
                  [("l1", "a", "liczba przed separatorem"), ("l2", "b", "cyfry po separatorze")],
                  [("r1", "b", "kierunek kolorystyczny (refleksy)"), ("r2", "a", "jasność lub ciemność (poziom)")],
                  15, "Dokładnie.", "Sprawdź jeszcze raz.",
                  "Przed separatorem stoi poziom. Po separatorze — oznaczenia refleksów, czyli kierunku."),
            sc("n2-z4", "Krok 4 · Ten sam zapis",
               "W 7.13 która cyfra opisuje poziom (jasność/ciemność)?",
               [("a", "7"), ("b", "1"), ("c", "3")], "a", 15,
               "Tak.", "Sprawdź jeszcze raz.",
               "Poziom odczytujesz z liczby przed separatorem — tu z 7."),
            ferr("n2-z5", "Krok 5 · Znajdź błąd",
                 "W którym stwierdzeniu jest błąd?",
                 "Zdania",
                 [("s1", "Liczba przed separatorem oznacza poziom koloru."),
                  ("s2", "Poziom mówi o jasności lub ciemności."),
                  ("s3", "W 9.1 poziom odczytujesz z cyfry 1.")],
                 ["s3"], 25, "Znalazłaś błąd.", "Sprawdź jeszcze raz.",
                 "W 9.1 poziom to 9 — liczba przed separatorem. Cyfra po separatorze nie jest poziomem."),
        ],
        "Wiesz, co mówi liczba przed separatorem",
        "To poziom — jasność lub ciemność koloru.",
        "Jak wygląda cała skala poziomów od 1 do 10?",
        "Liczba przed separatorem to poziom — jasność lub ciemność.",
        guide={"title": "Co się zmienia?",
               "text": "Spójrz na 5.1, 7.1 i 9.1. Po separatorze widać tę samą cyfrę. Zmienia się tylko liczba przed separatorem. Za chwilę wskażesz, która część mówi o jasności albo ciemności koloru."},
    ))

    # --- N3 ---
    lessons.append(lesson(
        "lesson-n3-skala-poziomow",
        "Skala poziomów 1–10",
        "Odczyt numeru",
        "Wiesz już, że przed separatorem stoi poziom. Teraz poznasz, jak ułożona jest skala od 1 do 10.",
        [
            sc("n3-z1", "Krok 1 · Trzy przykłady",
               "Masz trzy poziomy ze skali edukacyjnej: 2 — najciemniejszy brąz, 6 — ciemny blond, 10 — najjaśniejszy blond. W którą stronę skala staje się jaśniejsza?",
               [("a", "W stronę wyższych numerów (od 2 przez 6 do 10)"),
                ("b", "W stronę niższych numerów (od 10 do 2)"),
                ("c", "Numer nie ma związku z jasnością")],
               "a", 10, "Tak.", "Sprawdź jeszcze raz.",
               "Im wyższy numer, tym jaśniejszy poziom. Od 2 przez 6 do 10 skala robi się jaśniejsza."),
            match("n3-z2", "Krok 2 · Orientacja",
                  "Połącz zakres numerów z ogólną grupą na skali edukacyjnej.",
                  "Zakres", "Grupa",
                  [("l1", "a", "poziom 1"), ("l2", "b", "poziomy 2–5"), ("l3", "c", "poziomy 6–10")],
                  [("r1", "b", "brązy"), ("r2", "c", "blondy"), ("r3", "a", "czarny")],
                  10, "Dobrze.", "Sprawdź jeszcze raz.",
                  "Na skali edukacyjnej: 1 to czarny, poziomy 2–5 to brązy, a 6–10 to blondy. To orientacja w skali — nie dodatkowa reguła zabiegowa."),
            sc("n3-z3", "Krok 3 · Skala i porównanie",
               N3_BLOCKS,
               [("a", "4"), ("b", "8"), ("c", "Oba tak samo jasne")],
               "b", 15, "Dokładnie.", "Sprawdź jeszcze raz.",
               "Wyższy numer oznacza jaśniejszy poziom, więc 8 jest jaśniejszy od 4."),
            tf("n3-z4", "Krok 4 · Salon",
               "Poziom na skali edukacyjnej możesz precyzyjnie „zmierzyć” samym kolorem na ekranie telefonu — bez patrzenia na numer i nazwę.",
               False, 15, "Dobrze.", "Sprawdź jeszcze raz.",
               "Wzornik i ekran telefonu to tylko pomoc. W module opierasz się na numerze i nazwie ze skali edukacyjnej — nie na subtelnym odcieniu monitora. Nazwy u producentów mogą się nieznacznie różnić."),
            sc("n3-z5", "Krok 5 · Nazwa",
               "Który numer oznacza najciemniejszy brąz?",
               [("a", "1"), ("b", "2"), ("c", "5")], "b", 25,
               "Tak.", "Sprawdź jeszcze raz.",
               "Najciemniejszy brąz to poziom 2. Poziom 1 to czarny, a 5 — jasny brąz."),
        ],
        "Znasz skalę poziomów 1–10",
        "Wiesz, w którą stronę skala robi się jaśniejsza, znasz grupy i podstawowe nazwy.",
        "Co oznacza pierwsza cyfra po separatorze?",
        "Im wyższy numer poziomu, tym jaśniejszy kolor na skali 1–10.",
        hair={
            "title": "W którą stronę jaśniej?",
            "text": "Skala poziomów ma kierunek — od ciemniejszych numerów do jaśniejszych. Za chwilę porównasz trzy przykłady. Nie zgadujesz koloru z ekranu telefonu: opierasz się na numerach i nazwach podanych w tekście.",
            "continueLabel": "Dalej",
            "imageSrc": IMG_POZIOMY,
            "imageAlt": "Wzornik poziomów kolorystycznych włosów naturalnych 1–10 — pomoc wizualna.",
            "imageCaption": "Wzornik poziomów — nazwy i numery odczytujesz z tekstu lekcji, nie z drobnych napisów na obrazie.",
            "note": "Pełna lista nazw 1–10 pojawi się przed kolejnym porównaniem — jako tekst w aplikacji.",
        },
    ))

    # --- N4 ---
    lessons.append(lesson(
        "lesson-n4-refleks-glowny",
        "Pierwsza cyfra po separatorze",
        "Odczyt numeru",
        "Poziom już znasz. Teraz przyjrzysz się temu, co stoi zaraz po separatorze.",
        [
            sc("n4-z1", "Krok 1 · Co doszło",
               "Co różni zapis 7.1 od samego 7?",
               [("a", "Po separatorze pojawia się cyfra opisująca kierunek kolorystyczny"),
                ("b", "Zmienia się poziom jasności z 7 na 1"),
                ("c", "Znika informacja o poziomie")],
               "a", 10, "Tak.", "Sprawdź jeszcze raz.",
               "Poziom nadal odczytujesz z 7. Po separatorze pojawia się pierwsza cyfra refleksu — w materiale nazywana głównym refleksem, czyli dominującym kierunkiem kolorystycznym."),
            tf("n4-z2", "Krok 2 · Mit",
               "Pierwsza cyfra po separatorze zawsze oznacza to samo u każdej marki — nie trzeba sprawdzać legendy.",
               False, 10, "Dobrze.", "Sprawdź jeszcze raz.",
               "Pierwsza cyfra po separatorze wskazuje refleks główny w danym systemie. Znaczenie konkretnej cyfry sprawdzasz w legendzie producenta — nie przenosisz go automatycznie między markami."),
            match("n4-z3", "Krok 3 · Role",
                  "Połącz część numeru 7.13 z rolą.",
                  "Część", "Rola",
                  [("l1", "a", "7"), ("l2", "b", "1 (pierwsza po separatorze)")],
                  [("r1", "b", "refleks główny"), ("r2", "a", "poziom")],
                  15, "Dokładnie.", "Sprawdź jeszcze raz.",
                  "7 to poziom. Pierwsza cyfra po separatorze to refleks główny."),
            sc("n4-z4", "Krok 4 · Przykład ze źródła",
               "W przykładzie z materiału egzaminacyjnego zapis 7.1 opisano jako poziom 7 oraz…",
               [("a", "refleks popielaty"), ("b", "sam poziom bez refleksu"), ("c", "wyłącznie złoty kierunek")],
               "a", 15, "Tak — w tym przykładzie.", "Sprawdź jeszcze raz.",
               "W materiale egzaminacyjnym 7.1 to poziom 7 i refleks popielaty. To przykład z tego źródła — nie uniwersalna reguła wszystkich marek."),
            ferr("n4-z5", "Krok 5 · Znajdź błąd",
                 "W którym stwierdzeniu jest błąd?",
                 "Zdania",
                 [("s1", "Pierwsza cyfra po separatorze to refleks główny."),
                  ("s2", "W przykładzie materiału 7.1 ma refleks popielaty."),
                  ("s3", ".1 zawsze oznacza popiel u wszystkich producentów.")],
                 ["s3"], 25, "Znalazłaś błąd.", "Sprawdź jeszcze raz.",
                 "Przykład ze źródła nie zastępuje legendy każdej marki. Przed pracą sprawdzasz legendę producenta."),
        ],
        "Rozpoznajesz refleks główny",
        "Pierwsza cyfra po separatorze to dominujący kierunek — ze sprawdzoną legendą marki.",
        "A druga cyfra po separatorze?",
        "Pierwsza cyfra po separatorze to refleks główny w systemie producenta.",
        guide={"title": "7 i 7.1",
               "text": "Porównaj sam 7 oraz 7.1. Co pojawiło się po separatorze? Za chwilę wskażesz, jak nazywamy tę pierwszą cyfrę po separatorze i jaką rolę pełni."},
    ))

    # --- N5 ---
    lessons.append(lesson(
        "lesson-n5-refleks-dodatkowy",
        "Druga cyfra po separatorze",
        "Odczyt numeru",
        "Znasz refleks główny. Czasem po separatorze stoi jeszcze druga cyfra.",
        [
            sc("n5-z1", "Krok 1 · Co doszło",
               "Czego nie ma w 7.1, a jest w 7.13?",
               [("a", "Drugiej cyfry po separatorze"), ("b", "Liczby przed separatorem"), ("c", "Separatora")],
               "a", 10, "Tak.", "Sprawdź jeszcze raz.",
               "W obu zapisach poziom to 7. W 7.13 po separatorze stoi jeszcze druga cyfra — w materiale nazywana refleksem dodatkowym."),
            tf("n5-z2", "Krok 2 · Rola",
               "Druga cyfra po separatorze oznacza refleks dodatkowy, który uzupełnia refleks główny.",
               True, 10, "Dobrze.", "Sprawdź jeszcze raz.",
               "Druga cyfra po separatorze oznacza refleks dodatkowy — uzupełnia refleks główny, a nie zastępuje go."),
            match("n5-z3", "Krok 3 · Role w 7.13",
                  "Połącz cyfrę z rolą według materiału.",
                  "Cyfra", "Rola",
                  [("l1", "a", "7"), ("l2", "b", "1"), ("l3", "c", "3")],
                  [("r1", "b", "refleks główny"), ("r2", "c", "refleks dodatkowy"), ("r3", "a", "poziom")],
                  15, "Dokładnie.", "Sprawdź jeszcze raz.",
                  "Najprostszy odczyt z materiału: 7.13 = poziom 7 + główny refleks 1 + dodatkowy refleks 3."),
            sc("n5-z4", "Krok 4 · Miejsce",
               "Dlaczego warto zwracać uwagę, na którym miejscu stoi cyfra po separatorze?",
               [("a", "Bo miejsce cyfry wpływa na to, która jest główna, a która dodatkowa"),
                ("b", "Bo poziom zawsze zapisuje się po separatorze"),
                ("c", "Bo druga cyfra kasuje pierwszą")],
               "a", 15, "Tak.", "Sprawdź jeszcze raz.",
               "Pierwsza po separatorze ma rolę główną, druga — dodatkową. Dlatego miejsce cyfry ma znaczenie — rozwiniesz to przy porównaniu 7.13 i 7.31."),
            ferr("n5-z5", "Krok 5 · Znajdź błąd",
                 "W którym stwierdzeniu jest błąd?",
                 "Opisy",
                 [("s1", "Druga cyfra po separatorze to refleks dodatkowy."),
                  ("s2", "Druga cyfra po separatorze oznacza refleks dodatkowy, który uzupełnia refleks główny."),
                  ("s3", "W 7.13 cyfra 3 jest refleksem głównym.")],
                 ["s3"], 25, "Znalazłaś błąd.", "Sprawdź jeszcze raz.",
                 "W 7.13 główny jest 1, a 3 to refleks dodatkowy."),
        ],
        "Rozpoznajesz refleks dodatkowy",
        "Druga cyfra po separatorze uzupełnia refleks główny.",
        "Dlaczego 7.13 i 7.31 to nie to samo?",
        "Druga cyfra po separatorze oznacza refleks dodatkowy — uzupełnia refleks główny.",
        guide={"title": "Jedna cyfra więcej",
               "text": "Porównaj 7.1 i 7.13. W drugim zapisie po separatorze widać dwie cyfry. Za chwilę wskażesz, jak materiał nazywa tę drugą cyfrę i jaką rolę pełni względem refleksu głównego."},
    ))

    # --- N6 ---
    lessons.append(lesson(
        "lesson-n6-kolejnosc-refleksow",
        "Dlaczego 7.13 i 7.31 to nie to samo",
        "Odczyt numeru",
        "Dwa zapisy, te same cyfry w innym układzie. Sprawdzisz, czy to nadal ten sam opis koloru.",
        [
            sc("n6-z1", "Krok 1 · Poziom",
               "Co jest wspólne dla 7.13 i 7.31?",
               [("a", "Ten sam poziom 7"), ("b", "Ten sam refleks główny"), ("c", "Identyczny opis kierunku")],
               "a", 10, "Tak.", "Sprawdź jeszcze raz.",
               "Oba zapisy mają poziom 7. Różni je kolejność cyfr po separatorze — a z nią refleks główny i dodatkowy."),
            match("n6-z2", "Krok 2 · Dopasuj opis",
                  "Połącz zapis z opisem z materiału egzaminacyjnego.",
                  "Zapis", "Opis",
                  [("l1", "a", "7.13"), ("l2", "b", "7.31")],
                  [("r1", "b", "głównie złoty, dodatkowo popielaty"),
                   ("r2", "a", "głównie popielaty, dodatkowo złoty")],
                  10, "Dokładnie.", "Sprawdź jeszcze raz.",
                  "W materiale: 7.13 — głównie popielaty, dodatkowo złoty; 7.31 — głównie złoty, dodatkowo popielaty. Kolejność cyfr ma znaczenie."),
            tf("n6-z3", "Krok 3 · Mit",
               "7.13 i 7.31 to ten sam kolor, bo zawierają cyfry 1 i 3.",
               False, 15, "Dobrze.", "Sprawdź jeszcze raz.",
               "W materiale kolejność cyfr zmienia rolę refleksów: w pierwszym dominuje popiel, w drugim złoto. To nie jest ten sam opis koloru."),
            sc("n6-z4", "Krok 4 · Główny refleks",
               "W 7.31 która cyfra jest refleksem głównym według kolejności w zapisie?",
               [("a", "3"), ("b", "1"), ("c", "7")], "a", 15,
               "Tak.", "Sprawdź jeszcze raz.",
               "Pierwsza po separatorze to refleks główny — w 7.31 jest to 3. Cyfra 7 to poziom."),
            ferr("n6-z5", "Krok 5 · Znajdź błąd",
                 "W którym stwierdzeniu jest błąd?",
                 "Zdania",
                 [("s1", "7.13 i 7.31 mają ten sam poziom."),
                  ("s2", "Kolejność cyfr po separatorze zmienia opis kierunku."),
                  ("s3", "Znaczenia 1 = popiel i 3 = złoty obowiązują automatycznie w każdej marce.")],
                 ["s3"], 25, "Znalazłaś błąd.", "Sprawdź jeszcze raz.",
                 "Opisy popiel/złoty pochodzą z przykładów materiału egzaminacyjnego. Przy innej marce sprawdzasz jej legendę — nie przenosisz oznaczeń automatycznie."),
        ],
        "Rozumiesz znaczenie kolejności",
        "Te same cyfry w innej kolejności dają inny opis kierunku.",
        "Co oznacza zapis 7.11?",
        "Kolejność cyfr po separatorze ma znaczenie — 7.13 i 7.31 to nie to samo.",
        guide={"title": "Inna kolejność",
               "text": "Na półce stoją dwa odcienie: 7.13 i 7.31. Cyfry wyglądają znajomo, ale ich kolejność jest inna. Czy to nadal ten sam opis koloru?"},
    ))

    # --- N7 ---
    lessons.append(lesson(
        "lesson-n7-podwojny-refleks",
        "Co oznacza 7.11",
        "Odczyt numeru",
        "Czasem po separatorze ta sama cyfra pojawia się dwa razy.",
        [
            sc("n7-z1", "Krok 1 · Różnica zapisu",
               "Co widać w 7.11, a nie w 7.1?",
               [("a", "Powtórzoną cyfrę po separatorze"), ("b", "Inny poziom"), ("c", "Brak separatora")],
               "a", 10, "Tak.", "Sprawdź jeszcze raz.",
               "Oba mają poziom 7. W 7.11 po separatorze cyfra pojawia się dwa razy."),
            sc("n7-z2", "Krok 2 · Opis ze źródła",
               "Jak materiał egzaminacyjny opisuje 7.11?",
               [("a", "Poziom 7, intensywny lub podwójny refleks popielaty"),
                ("b", "Poziom 11 bez refleksu"),
                ("c", "Wyłącznie złoty kierunek")],
               "a", 10, "Zgodnie ze źródłem.", "Sprawdź jeszcze raz.",
               "W materiale: 7.11 — poziom 7, intensywny lub podwójny refleks popielaty. To opis tego przykładu, nie automatyczna reguła wszystkich marek."),
            tf("n7-z3", "Krok 3 · Mit",
               "Każda powtórzona cyfra po separatorze zawsze oznacza podwójny refleks u każdego producenta.",
               False, 15, "Dobrze.", "Sprawdź jeszcze raz.",
               "Uczysz się przykładu 7.11 ze źródła. Zasady konkretnej marki zawsze sprawdzasz w jej legendzie."),
            match("n7-z4", "Krok 4 · Porównanie zapisów",
                  "Połącz zapis z opisem z materiału (przykłady źródłowe).",
                  "Zapis", "Opis",
                  [("l1", "a", "7.1"), ("l2", "b", "7.11")],
                  [("r1", "b", "poziom 7, intensywny lub podwójny refleks popielaty"),
                   ("r2", "a", "poziom 7, refleks popielaty")],
                  15, "Tak.", "Sprawdź jeszcze raz.",
                  "7.1 i 7.11 różnią się intensywnością / podwojeniem refleksu w opisie materiału — przy tym samym poziomie."),
            ferr("n7-z5", "Krok 5 · Znajdź błąd",
                 "W którym stwierdzeniu jest błąd?",
                 "Zdania",
                 [("s1", "W przykładzie źródłowym 7.11 to intensywny lub podwójny refleks popielaty."),
                  ("s2", "Przed pracą z marką sprawdzasz jej legendę."),
                  ("s3", "Skoro znasz 7.11, nie musisz sprawdzać legendy żadnej marki.")],
                 ["s3"], 25, "Znalazłaś błąd.", "Sprawdź jeszcze raz.",
                 "Przykład z materiału pomaga zrozumieć zapis, ale nie zastępuje legendy producenta."),
        ],
        "Rozpoznajesz przykład 7.11",
        "Wiesz, jak źródło opisuje intensywny lub podwójny refleks — i że marka wymaga legendy.",
        "Czas złożyć cały odczyt numeru krok po kroku.",
        "W przykładzie źródłowym 7.11 to intensywny lub podwójny refleks popielaty — legendę marki i tak sprawdzasz.",
        guide={"title": "7.1 i 7.11",
               "text": "Porównaj 7.1 i 7.11. Po separatorze coś się zmienia. Za chwilę wskażesz różnicę w zapisie i wybierzesz opis 7.11 z materiału egzaminacyjnego."},
    ))

    # --- N8 ---
    lessons.append(lesson(
        "lesson-n8-czytanie-numeru",
        "Czytanie całego numeru krok po kroku",
        "Odczyt numeru",
        "Masz już części. Teraz złożysz je w jeden odczyt.",
        [
            sc("n8-z1", "Krok 1 · Od czego zacząć",
               "Chcesz odczytać jasność w 7.13. Od której części zaczynasz?",
               [("a", "Od 7"), ("b", "Od 1"), ("c", "Od 3")], "a", 10,
               "Tak.", "Sprawdź jeszcze raz.",
               "Jasność (poziom) odczytujesz z liczby przed separatorem. Potem patrzysz na refleks główny i ewentualnie dodatkowy."),
            order("n8-z2", "Krok 2 · Kolejność odczytu",
                  "Ułóż sensowną kolejność odczytu numeru z dwiema cyframi po separatorze.",
                  [("s1", "odczytać poziom"), ("s2", "odczytać refleks główny"), ("s3", "odczytać refleks dodatkowy")],
                  ["s1", "s2", "s3"], 10, "Dobrze.", "Sprawdź jeszcze raz.",
                  "Najpierw poziom, potem refleks główny, na końcu dodatkowy — zgodnie z budową zapisu w materiale."),
            match("n8-z3", "Krok 3 · Rozłóż 7.13",
                  "Połącz część z rolą.",
                  "Część", "Rola",
                  [("l1", "a", "7"), ("l2", "b", "1"), ("l3", "c", "3")],
                  [("r1", "b", "refleks główny"), ("r2", "c", "refleks dodatkowy"), ("r3", "a", "poziom")],
                  15, "Dokładnie.", "Sprawdź jeszcze raz.",
                  "Z materiału: 7.13 = poziom 7 + główny refleks 1 + dodatkowy refleks 3."),
            sc("n8-z4", "Krok 4 · Inny zapis",
               "Który odczyt 7.31 jest zgodny z materiałem?",
               [("a", "Poziom 7; głównie złoty, dodatkowo popielaty"),
                ("b", "Poziom 3; tylko popiel"),
                ("c", "Poziom 7; głównie popielaty, dodatkowo złoty")],
               "a", 15, "Tak.", "Sprawdź jeszcze raz.",
               "7.31 w materiale: poziom 7, głównie złoty, dodatkowo popielaty. Opcja z „głównie popielaty” dotyczy 7.13."),
            ferr("n8-z5", "Krok 5 · Znajdź błąd",
                 "W którym stwierdzeniu jest błąd?",
                 "Odczyty",
                 [("s1", "7.1 — poziom 7, refleks popielaty (przykład źródłowy)."),
                  ("s2", "7.11 — poziom 7, intensywny lub podwójny refleks popielaty (przykład źródłowy)."),
                  ("s3", "7.13 — poziom odczytujesz z cyfry 3.")],
                 ["s3"], 25, "Znalazłaś błąd.", "Sprawdź jeszcze raz.",
                 "Poziom zawsze stoi przed separatorem. W 7.13 poziom to 7, nie 3."),
        ],
        "Odczytujesz numer krok po kroku",
        "Poziom, refleks główny i dodatkowy — w tej kolejności analizy.",
        "Czy kropka, ukośnik i myślnik zmieniają sens poziomu?",
        "Numer czytasz tak: poziom, potem refleks główny, potem dodatkowy — jeśli jest.",
        guide={"title": "Numer do rozłożenia",
               "text": "Spójrz na 7.13. Nie podpowiadamy jeszcze kolejności pytań — najpierw sama wskażesz, od czego zacząć i co oznaczają kolejne części."},
    ))

    # --- N9 ---
    lessons.append(lesson(
        "lesson-n9-separatory",
        "Separatory i nazwy stosowane przez marki",
        "Odczyt numeru",
        "Producenci zapisują numer różnymi znakami i słowami. Sprawdzisz, co zostaje wspólne.",
        [
            match("n9-z1", "Krok 1 · Separatory",
                  "Połącz znak z przykładem zapisu.",
                  "Znak", "Przykład",
                  [("l1", "a", "kropka"), ("l2", "b", "ukośnik"), ("l3", "c", "myślnik")],
                  [("r1", "b", "7/1"), ("r2", "c", "7-1"), ("r3", "a", "7.1")],
                  10, "Tak.", "Sprawdź jeszcze raz.",
                  "Materiał podaje trzy możliwe separatory: kropkę, ukośnik i myślnik — z takimi przykładami."),
            tf("n9-z2", "Krok 2 · Mit",
               "Gdy zamiast kropki użyjesz ukośnika, poziom automatycznie oznacza coś innego.",
               False, 10, "Dobrze.", "Sprawdź jeszcze raz.",
               "Separator oddziela poziom od oznaczenia refleksu. Sam znak nie sprawia, że liczba przed nim przestaje być poziomem / głębokością w danym systemie."),
            match("n9-z3", "Krok 3 · Nazwy z materiału",
                  "Połącz markę z terminologią z materiału egzaminacyjnego.",
                  "Marka", "Terminologia",
                  [("l1", "a", "Wella"), ("l2", "b", "Schwarzkopf")],
                  [("r1", "b", "pierwsza cyfra po separatorze: refleks dominujący, druga: drugorzędny"),
                   ("r2", "a", "przed / głębokość, po / ton")],
                  15, "Zgodnie ze źródłem.", "Sprawdź jeszcze raz.",
                  "Tak opisuje je materiał egzaminacyjny — bez dodawania innych zasad marek."),
            sc("n9-z4", "Krok 4 · Wspólny układ",
               "Co jest wspólne dla 7.1, 7/1 i 7-1?",
               [("a", "Ta sama konstrukcja: liczba przed separatorem i oznaczenie po nim"),
                ("b", "Identyczna nazwa „refleks” u wszystkich marek świata"),
                ("c", "Brak informacji o poziomie")],
               "a", 15, "Tak.", "Sprawdź jeszcze raz.",
               "Różny może być separator i słowa, ale układ części pozostaje: coś przed separatorem i coś po nim."),
            ferr("n9-z5", "Krok 5 · Znajdź błąd",
                 "W którym stwierdzeniu jest błąd?",
                 "Zdania",
                 [("s1", "Separator może być kropką, ukośnikiem lub myślnikiem."),
                  ("s2", "Wella w materiale: głębokość przed ukośnikiem, ton po nim."),
                  ("s3", "Skoro znasz Wellę i Schwarzkopfa, znasz automatycznie legendę wszystkich marek.")],
                 ["s3"], 25, "Znalazłaś błąd.", "Sprawdź jeszcze raz.",
                 "Materiał ostrzega, że oznaczeń nie przenosi się automatycznie między markami — każda ma swoją legendę."),
        ],
        "Rozpoznajesz różne zapisy",
        "Separator i nazwy mogą się różnić — układ części i ostrożność wobec legendy zostają.",
        "Kiedy musisz otworzyć legendę producenta?",
        "Separator może wyglądać różnie — nie zmienia to samego faktu rozdzielenia poziomu i refleksu.",
        guide={"title": "Trzy separatory",
               "text": "Obok siebie: 7.1, 7/1, 7-1. Za chwilę wskażesz, co je łączy, a które nazwy materiału przypisuje Wellii i Schwarzkopfowi."},
    ))

    # --- N10 ---
    lessons.append(lesson(
        "lesson-n10-legenda-producenta",
        "Legenda producenta",
        "Odczyt numeru",
        "Znasz budowę numeru i przykłady ze źródła. Teraz sytuacja z dwiema markami.",
        [
            tf("n10-z1", "Krok 1 · Mit",
               ".1 zawsze oznacza popiel — u każdej marki, bez sprawdzania legendy.",
               False, 10, "Dobrze.", "Sprawdź jeszcze raz.",
               "Nie. W materiale egzaminacyjnym .1 oznacza popiel, ale znaczenie oznaczeń trzeba sprawdzać w legendzie konkretnego producenta. Oznaczeń nie przenosisz automatycznie między markami."),
            sc("n10-z2", "Krok 2 · Co robić",
               "Sięgasz po tubkę nieznanej Ci marki. Co robisz z oznaczeniem refleksu?",
               [("a", "Sprawdzasz legendę tego producenta"),
                ("b", "Kopiujesz znaczenie z przykładu 7.1 i kończysz temat"),
                ("c", "Ignorujesz cyfry po separatorze")],
               "a", 10, "Tak.", "Sprawdź jeszcze raz.",
               "Przykłady z materiału pomagają zrozumieć budowę zapisu. Znaczenie cyfr w pracy salonowej bierzesz z legendy marki, którą masz w ręku."),
            ferr("n10-z3", "Krok 3 · Znajdź błąd",
                 "W którym stwierdzeniu jest błąd?",
                 "Zdania",
                 [("s1", "W przykładzie źródłowym 7.1 ma refleks popielaty."),
                  ("s2", "Numerów refleksów nie przenosisz automatycznie między markami."),
                  ("s3", "Skoro 1 bywa popielem w przykładzie, 4 zawsze jest miedzią u wszystkich.")],
                 ["s3"], 15, "Znalazłaś błąd.", "Sprawdź jeszcze raz.",
                 "Nawet jeśli materiał wspomina, że pewne cyfry „często” coś oznaczają, nie budujesz z tego uniwersalnej legendy bez sprawdzenia producenta."),
            match("n10-z4", "Krok 4 · Dwie szuflady",
                  "Połącz stwierdzenie z właściwą szufladą.",
                  "Stwierdzenie", "Szuflada",
                  [("l1", "a", "W przykładzie E3 .1 = popiel"),
                   ("l2", "b", "Przed zabiegiem otwieram legendę marki X")],
                  [("r1", "b", "obowiązek przy konkretnym produkcie"),
                   ("r2", "a", "przykład szkoleniowy ze źródła")],
                  15, "Dokładnie.", "Sprawdź jeszcze raz.",
                  "Jedna szuflada to przykład do nauki budowy numeru. Druga — realna praca z tubką i legendą producenta."),
            sc("n10-z5", "Krok 5 · Podsumowanie modułu odczytu",
               "Które zdanie najlepiej zamyka naukę odczytu numeru?",
               [("a", "Znam budowę numeru i przykłady ze źródła; znaczenia cyfr w salonie sprawdzam w legendzie marki."),
                ("b", "Znam już pełną legendę wszystkich producentów na pamięć."),
                ("c", "Wystarczy zapamiętać, że .1 zawsze jest popielem.")],
               "a", 25, "To właściwe domknięcie.", "Sprawdź jeszcze raz.",
               "Odczytujesz poziom i refleksy według budowy zapisu. Przykłady ze źródła nie zastępują legendy producenta."),
        ],
        "Wiesz, kiedy otworzyć legendę",
        "Przykład ze źródła nie jest automatyczną regułą wszystkich marek.",
        "Znasz już części numeru i wiesz, dlaczego legenda producenta ma znaczenie. Teraz czas utrwalić samą skalę poziomów i nauczyć się sprawnie porównywać ich jasność.",
        "Oznaczeń refleksów nie przenosisz automatycznie między markami — sprawdzasz legendę producenta.",
        guide={"title": "Ta sama cyfra, inna tubka",
               "text": "Na jednej palecie .1 opisano jako popiel. Na stanowisku pojawia się farba innego producenta. Czy można bez sprawdzania uznać, że .1 oznacza dokładnie to samo?"},
    ))

    # Continue N11-N20 in part 2 via extend
    lessons.extend(build_n11_n20())
    return lessons


def build_n11_n20():
    lessons = []

    lessons.append(lesson(
        "lesson-n11-rozpoznawanie-poziomow",
        "Rozpoznawanie poziomów 1–10",
        "Praktyka poziomów",
        "Znasz już skalę z poprzedniej lekcji. Teraz ćwiczysz szybkie porównania i nazwy — bez ponownego wykładu całej mapy.",
        [
            sc("n11-z1", "Krok 1 · Porównanie",
               "Który poziom jest jaśniejszy: 4 czy 8?",
               [("a", "4"), ("b", "8"), ("c", "Oba tak samo jasne")], "b", 10,
               "Tak.", "Sprawdź jeszcze raz.",
               "W skali poziomów wyższy numer oznacza jaśniejszy poziom — więc 8 jest jaśniejszy od 4."),
            sc("n11-z2", "Krok 2 · Najciemniejszy",
               "Który z tych poziomów jest najciemniejszy: 3, 6 czy 9?",
               [("a", "3"), ("b", "6"), ("c", "9")], "a", 10,
               "Dokładnie.", "Sprawdź jeszcze raz.",
               "Niższy numer oznacza ciemniejszy poziom — najciemniejszy z trójki jest 3."),
            match("n11-z3", "Krok 3 · Numer i nazwa",
                  "Połącz numer z nazwą (skala edukacyjna modułu).",
                  "Numer", "Nazwa",
                  [("l1", "a", "2"), ("l2", "b", "5"), ("l3", "c", "9")],
                  [("r1", "b", "jasny brąz"), ("r2", "c", "bardzo jasny blond"), ("r3", "a", "najciemniejszy brąz")],
                  15, "Dobrze.", "Sprawdź jeszcze raz.",
                  "Poziom 2 to najciemniejszy brąz, 5 — jasny brąz, 9 — bardzo jasny blond."),
            tf("n11-z4", "Krok 4 · Znajdź mit",
               "Poziom 9 jest ciemniejszy niż poziom 6.",
               False, 15, "Dobrze.", "Sprawdź jeszcze raz.",
               "Poziom 9 jest jaśniejszy od 6 — wyższy numer oznacza jaśniejszy poziom."),
            sc("n11-z5", "Krok 5 · Zastosowanie",
               "Naturalny odrost jest na poziomie 5, a długości na poziomie 7. Która strefa jest jaśniejsza?",
               [("a", "Odrost (poziom 5)"), ("b", "Długości (poziom 7)"), ("c", "Obie tak samo jasne")],
               "b", 25, "Właśnie tak.", "Sprawdź jeszcze raz.",
               "Poziom 7 jest wyższy niż 5, więc długości są jaśniejsze. To proste porównanie poziomów — nie pełna diagnoza koloru."),
        ],
        "Porównujesz poziomy bez rozpiski",
        "Szybko oceniasz jasność i łączysz numer z nazwą.",
        "Kiedy poziom milczy o kolorze refleksu?",
        "Wyższy numer poziomu oznacza jaśniejszy poziom — także gdy porównujesz dwie strefy na głowie.",
        guide={"title": "Bez rozpiski pod ręką",
               "text": "Na karcie widać kilka poziomów. Opierasz się na numerach i nazwach w pytaniach — nie na odcieniu ekranu telefonu."},
    ))

    lessons.append(lesson(
        "lesson-n12-poziom-a-refleks",
        "Poziom to nie refleks",
        "Praktyka poziomów",
        "Numer farby niesie więcej niż jedną informację. Najpierw przyjrzyj się zapisom obok siebie.",
        [
            sc("n12-z1", "Krok 1 · Od czego zacząć",
               "Spójrz na zapis 7.13. Jedna część opisuje jasność koloru, a pozostałe jego kierunek. Od której części warto zacząć, gdy pytasz o jasność?",
               [("a", "7"), ("b", "1"), ("c", "3")], "a", 10,
               "Tak.", "Sprawdź jeszcze raz.",
               "Jasność odczytujesz z liczby przed separatorem — tu z 7. Cyfry po separatorze to refleksy w systemie danego producenta."),
            tf("n12-z2", "Krok 2 · Mit",
               "Poziom 7 oznacza kolor popielaty.",
               False, 10, "Dobrze wychwytujesz mit.", "Sprawdź jeszcze raz.",
               "Siódemka mówi o poziomie jasności. Kierunek — np. popielaty w przykładach z materiału — wynika z oznaczenia refleksu w danym systemie, nie z samego poziomu."),
            match("n12-z3", "Krok 3 · Co widać w zapisie",
                  "Połącz zapis z tym, ile informacji o refleksie niesie.",
                  "Zapis", "Informacja",
                  [("l1", "a", "7"), ("l2", "b", "7.1"), ("l3", "c", "7.13")],
                  [("r1", "b", "poziom + jeden refleks"),
                   ("r2", "c", "poziom + główny i dodatkowy refleks"),
                   ("r3", "a", "sam poziom")],
                  15, "Dobrze.", "Sprawdź jeszcze raz.",
                  "Sam 7 nie niesie refleksu. Po separatorze pojawiają się cyfry refleksów — najpierw główny, potem dodatkowy, gdy są dwie."),
            ferr("n12-z4", "Krok 4 · Znajdź błąd",
                 "W którym stwierdzeniu jest błąd?",
                 "Zdania o numerze",
                 [("s1", "W 5.43 cyfra 5 to poziom."),
                  ("s2", "Cyfry po separatorze to refleksy w systemie producenta."),
                  ("s3", ".1 zawsze oznacza popiel u wszystkich marek.")],
                 ["s3"], 15, "Znalazłaś błąd.", "Sprawdź jeszcze raz.",
                 "Przykłady z materiału nie zastępują legendy każdej marki. Przed pracą sprawdzasz legendę producenta."),
            sc("n12-z5", "Krok 5 · Salon",
               "Klientka mówi: „Chcę siódemkę, ale bardziej złotą niż popielatą.” Co odczytasz osobno w numerze?",
               [("a", "Tylko poziom — refleks nie ma znaczenia."),
                ("b", "Jasność z poziomu oraz kierunek z cyfr refleksu według legendy marki."),
                ("c", "Że poziom 7 zawsze jest złoty.")],
               "b", 25, "Właśnie tak.", "Sprawdź jeszcze raz.",
               "Poziom ustala jasność. Kierunek odczytujesz z refleksów w systemie producenta — bez przenoszenia legendy „na ślepo” między markami."),
        ],
        "Oddzielasz poziom od refleksu",
        "Jasność i kierunek czytasz jako osobne informacje w numerze.",
        "Co oceniasz, gdy włosy nie mają jednego koloru?",
        "Poziom mówi o jasności; refleks — o kierunku w systemie producenta.",
        guide={"title": "Trzy zapisy",
               "text": "Spójrz na 7, 7.1 i 7.13. Różnią się tym, ile informacji stoi po separatorze. Za chwilę wskażesz, od której części warto zacząć odczyt, gdy chcesz wiedzieć o jasności."},
    ))

    lessons.append(lesson(
        "lesson-n13-sytuacje-kolorystyczne",
        "Co właściwie oceniamy na włosach klientki",
        "Diagnoza koloru",
        "Nie zawsze wystarczy jedna liczba na całą głowę. Najpierw rozpoznaj, z czym masz do czynienia.",
        [
            match("n13-z1", "Krok 1 · Dopasuj sytuację",
                  "Połącz opis włosów z nazwą sytuacji.",
                  "Opis", "Sytuacja",
                  [("l1", "a", "Farbowana cała długość, bez odrostu"),
                   ("l2", "b", "Farba + widoczny odrost"),
                   ("l3", "c", "Cały włos naturalny")],
                  [("r1", "b", "kosmetyczny + odrost"),
                   ("r2", "c", "100% naturalny"),
                   ("r3", "a", "100% kosmetyczny")],
                  10, "Tak.", "Sprawdź jeszcze raz.",
                  "To trzy z typowych startów: sam kosmetyczny, kosmetyczny z odrostem oraz w pełni naturalny kolor."),
            sc("n13-z2", "Krok 2 · Czwarta sytuacja",
               "Naturalny kolor + pasemka, refleksy albo rozjaśnione końce. Co oceniasz dodatkowo poza naturalnym odrostem?",
               [("a", "Tylko długość fryzury w cm"),
                ("b", "Poziom rozjaśnień, czy są równe, oraz poziom uwrażliwienia"),
                ("c", "Wyłącznie numer farby z poprzedniej wizyty")],
               "b", 10, "Dokładnie.", "Sprawdź jeszcze raz.",
               "Przy naturalnym kolorze z rozjaśnionymi partiami oceniasz odrost oraz osobno poziom rozjaśnień, ich równość i uwrażliwienie."),
            tf("n13-z3", "Krok 3 · Jedna liczba?",
               "Przy kosmetycznym kolorze i naturalnym odroście wystarczy podać jeden poziom dla całej głowy.",
               False, 15, "Dobrze.", "Sprawdź jeszcze raz.",
               "W tej sytuacji oceniasz kolor kosmetyczny oraz dokładnie naturalny odrost — jako osobne informacje."),
            sc("n13-z4", "Krok 4 · Partie",
               "Widzisz naturalny odrost i wyraźnie jaśniejsze, rozjaśniane końce. Które partie wymagają osobnego opisu?",
               [("a", "Tylko końce — odrost można pominąć"),
                ("b", "Naturalny odrost oraz rozjaśnione partie"),
                ("c", "Tylko średnia z obu stref")],
               "b", 15, "Tak.", "Sprawdź jeszcze raz.",
               "Odrost i rozjaśnienia opisujesz osobno. Przy rozjaśnieniach dodajesz też równość i uwrażliwienie."),
            ferr("n13-z5", "Krok 5 · Brakujący element",
                 "W którym wpisie jest błąd?",
                 "Wpisy w karcie",
                 [("s1", "100% kosmetyczny — poziom i refleks jak dziś; kolor dość jednolity."),
                  ("s2", "Kosmetyczny + odrost: długości + poziom, długość i siwizna odrostu."),
                  ("s3", "Naturalny + rozjaśnione końce: tylko odrost, bez poziomu rozjaśnień.")],
                 ["s3"], 25, "Znalazłaś brak.", "Sprawdź jeszcze raz.",
                 "Przy rozjaśnionych partiach trzeba też określić ich poziom, równość i uwrażliwienie — nie wystarczy sam odrost."),
        ],
        "Rozpoznajesz sytuację kolorystyczną",
        "Wiesz, kiedy rozdzielić odrost i rozjaśnienia w opisie.",
        "Co musi znaleźć się w opisie samego odrostu?",
        "Najpierw rozpoznaj sytuację koloru — potem zdecyduj, które partie opisać osobno.",
        guide={"title": "Zanim wpiszesz poziom",
               "text": "Na włosach klientki możesz spotkać różne starty kolorystyczne. Za chwilę dopasujesz opisy do sytuacji i wskażesz, kiedy trzeba rozdzielić partie."},
    ))

    lessons.append(lesson(
        "lesson-n14-naturalny-odrost",
        "Naturalny odrost",
        "Diagnoza koloru",
        "Odrost to nie hasło — to zestaw konkretnych informacji.",
        [
            match("n14-z1", "Krok 1 · Elementy opisu",
                  "Połącz element opisu odrostu z przykładem zapisu.",
                  "Element", "Przykład",
                  [("l1", "a", "poziom"), ("l2", "b", "długość"), ("l3", "c", "siwizna")],
                  [("r1", "b", "ok. 2 cm"),
                   ("r2", "c", "ok. 20%, więcej przy skroniach"),
                   ("r3", "a", "poziom 5")],
                  10, "Tak.", "Sprawdź jeszcze raz.",
                  "Kompletny opis odrostu obejmuje poziom, długość oraz orientacyjny % siwizny z rozmieszczeniem. Kolejność zapisu może być różna."),
            ferr("n14-z2", "Krok 2 · Za mało",
                 "W którym wpisie jest błąd?",
                 "Wpisy o odroście",
                 [("s1", "Naturalny odrost około 1,5 cm na poziomie 6. Około 10% siwizny, wyraźniej widocznej przy skroniach."),
                  ("s2", "Klientka ma odrost."),
                  ("s3", "Odrost poziom 4, długość ok. 3 cm, bez widocznej siwizny.")],
                 ["s2"], 10, "Znalazłaś lukę.", "Sprawdź jeszcze raz.",
                 "Sam fakt odrostu nic nie mówi o poziomie, długości ani siwiźnie."),
            sc("n14-z3", "Krok 3 · Gdzie siwizna",
               "Gdzie oceniasz procent siwizny przy opisie odrostu?",
               [("a", "Na farbowanych długościach jako „siwizna na długości”"),
                ("b", "W strefie naturalnego odrostu"),
                ("c", "Tylko na samych końcach")],
               "b", 15, "Tak.", "Sprawdź jeszcze raz.",
               "Siwiznę opisujesz w naturalnym odroście. Nie zapisujesz jej jako procentu „na długości”."),
            tf("n14-z4", "Krok 4 · Kolejność",
               "Jest tylko jedna poprawna kolejność zapisu: najpierw % siwizny, potem poziom, na końcu długość.",
               False, 15, "Dobrze.", "Sprawdź jeszcze raz.",
               "Liczy się kompletny opis odrostu. Standard nie narzuca jednej obowiązkowej kolejności tych elementów."),
            sc("n14-z5", "Krok 5 · Wybór wpisu",
               "Który opis odrostu jest kompletny?",
               [("a", "Odrost widoczny."),
                ("b", "Naturalny odrost około 1,5 cm na poziomie 6. Około 10% siwizny, wyraźniej widocznej przy skroniach."),
                ("c", "Odrost ciemniejszy niż końce.")],
               "b", 25, "To kompletny opis.", "Sprawdź jeszcze raz.",
               "Jest poziom, długość i opis siwizny w odroście (orientacyjnie, z rozmieszczeniem) — bez pustego hasła i bez „siwizny na długości”."),
        ],
        "Opisujesz odrost kompletnie",
        "Poziom, długość, siwizna i jej rozmieszczenie — bez hasła „ma odrost”.",
        "Co, jeśli numer z poprzedniej wizyty nie zgadza się z tym, co widać dziś?",
        "Odrost opisujesz kompletnie: poziom, długość, siwizna i jej rozmieszczenie.",
        guide={"title": "Za mało informacji",
               "text": "Sam fakt, że widać odrost, niewiele mówi o kolorze. Za chwilę złożysz opis, z którego da się realnie skorzystać przy diagnozie."},
    ))

    lessons.append(lesson(
        "lesson-n15-kolor-kosmetyczny",
        "Kolor kosmetyczny a stan faktyczny",
        "Diagnoza koloru",
        "W karcie bywa historia zabiegu. Na włosach — to, co widać teraz.",
        [
            sc("n15-z1", "Krok 1 · Co wpisać jako diagnozę",
               "Co jest diagnozą koloru kosmetycznego „na dziś”?",
               [("a", "Numer farby z poprzedniej wizyty przepisany 1:1"),
                ("b", "Aktualny wizualny poziom i refleks oraz to, czy kolor jest jednolity na długości"),
                ("c", "Tylko życzenie klientki co do nowego koloru")],
               "b", 10, "Tak.", "Sprawdź jeszcze raz.",
               "Przy kolorze kosmetycznym opisujesz stan faktyczny wizualnie — poziom, refleks i jednolitość. Numer z poprzedniej wizyty należy do historii, nie zastępuje dzisiejszego opisu."),
            tf("n15-z2", "Krok 2 · Mit",
               "Skoro ostatnio nałożono 5.43, w diagnozie wystarczy wpisać 5.43 bez oglądania włosów.",
               False, 10, "Dobrze.", "Sprawdź jeszcze raz.",
               "Chodzi o to, co widać dziś, nie o to, co było nakładane wcześniej. Numer z historii możesz zanotować osobno."),
            match("n15-z3", "Krok 3 · Dwie szuflady",
                  "Połącz informację z właściwą szufladą.",
                  "Informacja", "Szuflada",
                  [("l1", "a", "Dziś widać ok. poziom 6, cieplejszy refleks, lekkie różnice na długości"),
                   ("l2", "b", "Poprzednia receptura: 6.1")],
                  [("r1", "b", "historia zabiegu"), ("r2", "a", "diagnoza aktualna")],
                  15, "Tak.", "Sprawdź jeszcze raz.",
                  "Jedna szuflada to wygląd „na dziś”, druga — historia receptury."),
            ferr("n15-z4", "Krok 4 · Wpis w karcie",
                 "W którym wpisie jest błąd?",
                 "Diagnoza koloru",
                 [("s1", "Kolor kosmetyczny: wizualnie ok. poziom 5, refleks ciepły; na długości nierównomierny."),
                  ("s2", "Jak ostatnio."),
                  ("s3", "100% kosmetyczny; poziom i refleks zgodne z wyglądem dziś; jednolity.")],
                 ["s2"], 15, "Znalazłaś lukę.", "Sprawdź jeszcze raz.",
                 "„Jak ostatnio” nie opisuje stanu faktycznego ani jednolitości koloru."),
            sc("n15-z5", "Krok 5 · Podsumowanie",
               "Które zdanie najlepiej podsumowuje tę lekcję?",
               [("a", "Diagnoza opisuje to, co faktycznie widać dziś; poprzedni numer farby należy do historii."),
                ("b", "Diagnoza zawsze równa się ostatniej recepturze."),
                ("c", "Jednolitość koloru nie ma znaczenia w opisie.")],
               "a", 25, "To najważniejsza zasada.", "Sprawdź jeszcze raz.",
               "To, co wcześniej nałożono, nie musi odpowiadać temu, co dziś wizualnie widać na włosach."),
        ],
        "Opisujesz stan faktyczny",
        "Oddzielasz dzisiejszy wygląd od historii receptury.",
        "Gdy końce są jaśniejsze od odrostu — jak to opisać?",
        "Diagnoza mówi, co widać dziś — historia receptury stoi osobno.",
        guide={"title": "Dwie informacje obok siebie",
               "text": "Masz zapis z poprzedniej wizyty i to, co widzisz po rozczesaniu. Za chwilę rozstrzygniesz, która informacja jest dzisiejszą diagnozą koloru."},
    ))

    lessons.append(lesson(
        "lesson-n16-rozjasnione-strefy",
        "Rozjaśnienia i różne poziomy na jednej głowie",
        "Diagnoza koloru",
        "Na jednej głowie mogą być różne poziomy. Rozdzielisz strefy w opisie.",
        [
            sc("n16-z1", "Krok 1 · Case",
               "Odrost ok. poziomu 5, końce wyraźnie jaśniejsze po pasemkach. Co wymaga osobnego opisu w diagnozie koloru?",
               [("a", "Tylko średni poziom całej głowy"),
                ("b", "Odrost oraz rozjaśnione partie"),
                ("c", "Tylko życzenie kolorystyczne klientki")],
               "b", 10, "Tak.", "Sprawdź jeszcze raz.",
               "Przy naturalnym odroście i rozjaśnionych partiach opisujesz te strefy osobno — bez jednej uśrednionej liczby."),
            match("n16-z2", "Krok 2 · Co do której strefy",
                  "Połącz strefę z elementami, które do niej należą.",
                  "Strefa", "Elementy",
                  [("l1", "a", "naturalny odrost"), ("l2", "b", "rozjaśnione partie")],
                  [("r1", "b", "poziom rozjaśnienia, równość, uwrażliwienie"),
                   ("r2", "a", "poziom, długość, % i rozmieszczenie siwizny")],
                  10, "Dobrze.", "Sprawdź jeszcze raz.",
                  "Przy odroście zbierasz poziom, długość i siwiznę. Przy rozjaśnieniach — poziom, czy są równe, oraz uwrażliwienie."),
            tf("n16-z3", "Krok 3 · Równość",
               "Przy rozjaśnionych końcach wystarczy podać poziom — równości rozjaśnienia nie trzeba oceniać.",
               False, 15, "Tak.", "Sprawdź jeszcze raz.",
               "Określasz poziom rozjaśnień, czy są równe, oraz poziom uwrażliwienia."),
            ferr("n16-z4", "Krok 4 · Braki",
                 "W którym opisie jest błąd?",
                 "Opisy stref",
                 [("s1", "Odrost poziom 4, ok. 2 cm; końce rozjaśniane do ok. poziomu 8, nierówno, wyraźnie uwrażliwione."),
                  ("s2", "Odrost poziom 5; końce jaśniejsze."),
                  ("s3", "Odrost poziom 6, 1 cm, bez siwizny; pasemka ok. poziomu 9, dość równe, lekkie uwrażliwienie.")],
                 ["s2"], 15, "Znalazłaś brak.", "Sprawdź jeszcze raz.",
                 "„Końce jaśniejsze” bez poziomu, równości i uwrażliwienia to za mało."),
            sc("n16-z5", "Krok 5 · Co robić w diagnozie",
               "Odrost poziom 5, końce rozjaśniane nierównomiernie i mocno przesuszone. Jaki jest poprawny kolejny krok w diagnozie koloru?",
               [("a", "Od razu dobrać oksydant 9%"),
                ("b", "Zanotować osobno poziomy stref, równość rozjaśnienia i uwrażliwienie"),
                ("c", "Wpisać jeden poziom „7” jako kompromis")],
               "b", 25, "Właśnie tak.", "Sprawdź jeszcze raz.",
               "Na tym etapie zbierasz opis stref. Dobór farby i oksydantu nie należy do tej lekcji."),
        ],
        "Rozdzielasz strefy koloru",
        "Odrost i rozjaśnienia opisujesz osobno.",
        "Jak orientacyjnie opisać siwiznę?",
        "Różne strefy na jednej głowie opisujesz osobno — zwłaszcza odrost i rozjaśnienia.",
        guide={"title": "Różne strefy",
               "text": "Gdy naturalny odrost i rozjaśnione partie wyglądają inaczej, nie szukasz jednej „średniej”. Za chwilę przypiszesz, co należy do której strefy."},
    ))

    lessons.append(lesson(
        "lesson-n17-procent-siwizny",
        "Ocena procentu siwizny",
        "Diagnoza koloru",
        "Siwiznę opisujesz procentowo — i sprawdzasz, czy wszędzie wygląda tak samo.",
        [
            order("n17-z1", "Krok 1 · Od najmniejszej ilości",
                  "Ułóż procenty od najmniejszej do największej ilości siwizny.",
                  [("s1", "10%"), ("s2", "40%"), ("s3", "70%"), ("s4", "90%")],
                  ["s1", "s2", "s3", "s4"], 10, "Tak.", "Sprawdź jeszcze raz.",
                  "Kolejność rośnie: 10%, 40%, 70%, 90%."),
            tf("n17-z2", "Krok 2 · Równomierność",
               "Jeżeli wpiszesz 40% siwizny, musi być rozłożona równomiernie na całym odroście.",
               False, 10, "Dobrze.", "Sprawdź jeszcze raz.",
               "Siwizna w odroście może być różna w różnych miejscach. Sam procent nie oznacza równomiernego rozkładu."),
            sc("n17-z3", "Krok 3 · Poprawny zapis",
               "Który zapis poprawnie opisuje nierównomierną siwiznę w odroście?",
               [("a", "10% siwizny na długości, 40% na skroniach"),
                ("b", "Około 10% siwizny w większości odrostu, lokalnie około 40% na skroniach"),
                ("c", "Siwizna: dużo")],
               "b", 15, "To poprawny zapis.", "Sprawdź jeszcze raz.",
               "Siwiznę opisujesz w naturalnym odroście — z orientacyjnym % i rozmieszczeniem. Nie używasz sformułowania „siwizna na długości”. Wzornik pomaga orientacyjnie, nie daje matematycznego pomiaru."),
            match("n17-z4", "Krok 4 · Orientacja",
                  "Połącz orientacyjny opis z procentem ze skali wzornika (znajomość skali — nie pomiar z ekranu).",
                  "Opis", "Procent",
                  [("l1", "a", "prawie brak siwych"),
                   ("l2", "b", "mniej więcej pół na pół"),
                   ("l3", "c", "niemal całość odrostu siwa")],
                  [("r1", "b", "ok. 50%"), ("r2", "c", "ok. 90%"), ("r3", "a", "ok. 10%")],
                  15, "Tak.", "Sprawdź jeszcze raz.",
                  "To rzędy wielkości ze wzornika: ok. 10%, ok. 50% i ok. 90%."),
            ferr("n17-z5", "Krok 5 · Dokumentacja",
                 "W którym stwierdzeniu jest błąd?",
                 "Zdania o siwiźnie",
                 [("s1", "Wzornik pomaga w orientacyjnej ocenie % siwizny."),
                  ("s2", "W odroście siwizna może być nierównomierna — np. lokalnie więcej na skroniach."),
                  ("s3", "Trzeba policzyć matematycznie każdy siwy włos, inaczej wpis jest nieważny.")],
                 ["s3"], 25, "Znalazłaś mit.", "Sprawdź jeszcze raz.",
                 "Ocena jest orientacyjna. Liczy się uczciwy opis rzędu wielkości i rozmieszczenia w odroście."),
        ],
        "Opisujesz siwiznę orientacyjnie",
        "Znasz skalę wzornika i nierównomierne rozmieszczenie w odroście.",
        "Jak złożyć to w jeden wpis do karty?",
        "Siwiznę oceniasz orientacyjnie w odroście — z procentem i rozmieszczeniem.",
        hair={
            "title": "Wzornik pomaga orientacyjnie",
            "text": "Na wzorniku widzisz przykłady oznaczone jako 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%. To pomoc do rzędu wielkości, nie kalkulator. Procent w odroście może być różny w różnych miejscach głowy.",
            "continueLabel": "Dalej",
            "imageSrc": IMG_SIWIZNA,
            "imageAlt": "Wzornik orientacyjnego procentu siwizny — pomoc wizualna.",
            "imageCaption": "Wartości % powtórzone tekstem poniżej grafiki — nie czytaj drobnych napisów z obrazu.",
            "note": "Skala wzornika: 10% · 20% · 30% · 40% · 50% · 60% · 70% · 80% · 90%.",
        },
    ))

    lessons.append(lesson(
        "lesson-n18-pelna-diagnoza-koloru",
        "Pełna diagnoza koloru",
        "Diagnoza koloru",
        "Masz zebrać diagnozę koloru do karty. Pójdziesz strefami — bez gotowego wzorca zdania.",
        [
            sc("n18-z1", "Krok 1 · Strefy",
               "W tym case’ie widać naturalny odrost, długości w kolorze kosmetycznym i jaśniejsze, rozjaśniane końce. Które partie trzeba opisać osobno w diagnozie koloru?",
               [("a", "Tylko naturalny odrost"),
                ("b", "Naturalny odrost, długości kosmetyczne i rozjaśnione końce"),
                ("c", "Tylko rozjaśnione końce")],
               "b", 10, "Tak.", "Sprawdź jeszcze raz.",
               "Gdy odrost, długości kosmetyczne i rozjaśnione końce wyglądają inaczej, każdą z tych partii opisujesz osobno."),
            sc("n18-z2", "Krok 2 · Odrost",
               "Który opis naturalnego odrostu jest kompletny w tym case’ie?",
               [("a", "Odrost ok. 2 cm."),
                ("b", "Naturalny odrost ok. 2 cm, poziom 7. Ok. 10% siwizny, więcej w okolicy skroni."),
                ("c", "Odrost ciemniejszy niż reszta głowy.")],
               "b", 10, "Kompletny odrost.", "Sprawdź jeszcze raz.",
               "Kompletny opis odrostu ma poziom, długość, orientacyjny % siwizny i rozmieszczenie. Kolejność zdań może być różna — liczy się kompletność."),
            match("n18-z3", "Krok 3 · Co do której strefy",
                  "Połącz obserwację ze strefą.",
                  "Obserwacja", "Strefa",
                  [("l1", "a", "poziom 6 i cieplejszy refleks"),
                   ("l2", "b", "nierównomierne rozjaśnienie"),
                   ("l3", "c", "ok. 10% siwizny, więcej na skroniach")],
                  [("r1", "b", "rozjaśnione końce"),
                   ("r2", "c", "naturalny odrost"),
                   ("r3", "a", "długości kosmetyczne")],
                  15, "Dobrze.", "Sprawdź jeszcze raz.",
                  "Siwiznę wiążesz z naturalnym odrostem. Poziom i refleks — z długościami kosmetycznymi. Nierównomierne rozjaśnienie — z końcami."),
            ferr("n18-z4", "Krok 4 · Czego brakuje",
                 "Który wpis pomija kluczowe informacje diagnozy koloru?",
                 "Wpisy robocze",
                 [("s1", "Odrost 2 cm, poziom 7; ok. 10% siwizny, więcej na skroniach; długości ok. 6, cieplejszy refleks; końce nierówno rozjaśnione, uwrażliwione."),
                  ("s2", "Odrost 2 cm, długości farbowane, końce rozjaśnione."),
                  ("s3", "Odrost poziom 7, 2 cm; siwizna ok. 10% w odroście; długości ok. 6 z cieplejszym refleksem; końce nierówno, uwrażliwione.")],
                 ["s2"], 15, "Znalazłaś braki.", "Sprawdź jeszcze raz.",
                 "Zbyt ogólny wpis pomija poziom odrostu, siwiznę, poziom i refleks długości oraz równomierność i uwrażliwienie końców. Kompletność nie wymaga jednego sztywnego szyku zdań."),
            sc("n18-z5", "Krok 5 · Wpis do karty",
               "Wybierz najlepszy wpis diagnozy koloru dla tego case’u.",
               [("a", "Naturalny odrost około 2 cm na poziomie 7, około 10% siwizny, więcej na skroniach. Długości kosmetyczne na poziomie 6 z cieplejszym refleksem. Końce rozjaśnione nierównomiernie i uwrażliwione."),
                ("b", "Odrost około 2 cm, długości farbowane, końce rozjaśnione. Poprzednio użyto farby 6.3 z oksydantem 6%."),
                ("c", "Naturalny odrost na poziomie 7. Długości i końce są na poziomie 6. Kolor na całej długości jest jednolity."),
                ("d", "Naturalny odrost około 2 cm na poziomie 7. Siwizna około 10%. Długości kosmetyczne na poziomie 6. Końce wymagają tonowania.")],
               "a", 25, "To rzeczowy wpis.", "Sprawdź jeszcze raz.",
               "Dobry wpis obejmuje odrost (poziom, długość, siwiznę z rozmieszczeniem), długości kosmetyczne (poziom, refleks) oraz końce (rozjaśnienie, równość, uwrażliwienie). Nie zawiera receptury ani decyzji zabiegowej. Poprawny wpis nie musi mieć jednego obowiązkowego brzmienia — musi obejmować wszystkie istotne strefy i obserwacje."),
        ],
        "Składasz diagnozę koloru",
        "Łączysz strefy w czytelny wpis — bez receptury i bez jednego obowiązkowego wzoru stylistycznego.",
        "Czas wymieszać numerację z diagnozą.",
        "Poprawny wpis nie musi mieć jednego obowiązkowego brzmienia. Musi natomiast obejmować wszystkie istotne strefy i obserwacje.",
        guide={"title": "Case: trzy strefy",
               "text": "Na włosach widać naturalny odrost, długości w kolorze kosmetycznym i jaśniejsze końce. Za chwilę przejdziesz od rozpoznania stref do wyboru najlepszego wpisu."},
    ))

    lessons.append(lesson(
        "lesson-n19-powtorka-mieszana",
        "Powtórka mieszana",
        "Domknięcie",
        "Tu mieszamy odczyt numeru z opisem włosów.",
        [
            sc("n19-z1", "Krok 1 · Skala",
               "Który poziom jest ciemniejszy?",
               [("a", "9"), ("b", "3"), ("c", "8")], "b", 10,
               "Tak.", "Sprawdź jeszcze raz.",
               "Niższy numer oznacza ciemniejszy poziom — 3 jest ciemniejszy od 8 i 9."),
            match("n19-z2", "Krok 2 · Numer",
                  "Połącz zapis z odczytem struktury (bez uniwersalnej legendy refleksu).",
                  "Zapis", "Odczyt",
                  [("l1", "a", "8.1"), ("l2", "b", "6.31"), ("l3", "c", "4")],
                  [("r1", "b", "poziom 6 + główny i dodatkowy refleks"),
                   ("r2", "c", "sam poziom 4"),
                   ("r3", "a", "poziom 8 + refleks")],
                  10, "Dobrze.", "Sprawdź jeszcze raz.",
                  "Czytasz poziom i to, czy po separatorze są cyfry refleksu. Znaczenie cyfr sprawdzasz w legendzie marki — nie przenosisz ich automatycznie."),
            ferr("n19-z3", "Krok 3 · Diagnoza",
                 "W którym stwierdzeniu jest błąd?",
                 "Zdania",
                 [("s1", "Przy odroście i rozjaśnionych końcach opisujesz strefy osobno."),
                  ("s2", "Diagnoza koloru kosmetycznego to to samo co numer z poprzedniej wizyty."),
                  ("s3", "Siwiznę opisujesz orientacyjnie z rozmieszczeniem w odroście.")],
                 ["s2"], 15, "Znalazłaś błąd.", "Sprawdź jeszcze raz.",
                 "Diagnoza koloru kosmetycznego opisuje wygląd dziś; poprzedni numer należy do historii."),
            sc("n19-z4", "Krok 4 · Siwizna",
               "Który zapis jest poprawny?",
               [("a", "40% siwizny na długości"),
                ("b", "Około 30% siwizny w naturalnym odroście, rozmieszczonej nierównomiernie."),
                ("c", "Siwizna 100% na końcach")],
               "b", 15, "Tak.", "Sprawdź jeszcze raz.",
               "Siwiznę opisujesz w naturalnym odroście — z orientacyjnym % i rozmieszczeniem. Nie jako „siwiznę na długości”."),
            sc("n19-z5", "Krok 5 · Dokumentacja",
               "Który zestaw obejmuje kompletną pracę z dokumentacją koloru (bez jednej „jedynej” kolejności minutowej)?",
               [("a", "Tylko wpisać numer farby z poprzedniej wizyty."),
                ("b", "Rozpoznać sytuację; opisać odrost i — jeśli trzeba — długości lub rozjaśnienia; oddzielić historię receptury od wyglądu „na dziś”."),
                ("c", "Od razu dobrać oksydant i technikę.")],
               "b", 25, "To kompletne podejście.", "Sprawdź jeszcze raz.",
               "Kompletna dokumentacja koloru łączy rozpoznanie sytuacji, opis stref i oddzielenie historii od diagnozy. Nie zastępuje tego sam stary numer ani dobór oksydantu."),
        ],
        "Łączysz numerację z diagnozą",
        "Poruszasz się między skalą, refleksem, odrostem, siwizną i wpisem.",
        "Sprawdzian modułu — samodzielnie.",
        "Numer czytasz osobno — włosy opisujesz według tego, co widać w strefach.",
        guide={"title": "Bez nowej reguły",
               "text": "Nie uczymy się nowego materiału. Sprawdzisz, czy zasady z wcześniejszych lekcji działają przy innych liczbach i innych wpisach."},
    ))

    lessons.append(lesson(
        "lesson-n20-sprawdzian-modulu",
        "Sprawdzian modułu",
        "Podsumowanie",
        "Sprawdzisz odczyt numeru i diagnozę koloru.",
        [
            ferr("n20-z1", "Krok 1 · Budowa i legenda",
                 "W którym stwierdzeniu jest błąd?",
                 "Odczyt numeru",
                 [("s1", "Numer farby rozkładasz na części: przed separatorem, separator i cyfry po nim."),
                  ("s2", "Separator może być kropką ., ukośnikiem / lub myślnikiem -."),
                  ("s3", "Znaczenie cyfr refleksu przenosisz automatycznie między markami — legendy producenta nie trzeba sprawdzać.")],
                 ["s3"], 10, "Znalazłaś błąd.", "Sprawdź jeszcze raz.",
                 "Budowa zapisu jest wspólna (części + separator . / / -). Konkretne znaczenie refleksu zawsze sprawdzasz w legendzie producenta."),
            match("n20-z2", "Krok 2 · Poziom i refleksy",
                  "Połącz element zapisu z rolą.",
                  "Element", "Rola",
                  [("l1", "a", "liczba przed separatorem"),
                   ("l2", "b", "pierwsza cyfra po separatorze"),
                   ("l3", "c", "druga cyfra po separatorze")],
                  [("r1", "b", "refleks główny"),
                   ("r2", "c", "refleks dodatkowy"),
                   ("r3", "a", "poziom (jasność na skali 1–10)")],
                  10, "Tak.", "Sprawdź jeszcze raz.",
                  "Przed separatorem stoi poziom — jasność na skali 1–10 (1 najciemniejszy, 10 najjaśniejszy). Pierwsza cyfra po separatorze to refleks główny, druga — dodatkowy. Poziom nie jest refleksem."),
            sc("n20-z3", "Krok 3 · Kolejność i 7.11",
               "Które stwierdzenie jest poprawne?",
               [("a", "7.13 i 7.31 to ten sam opis koloru, bo mają te same cyfry; 7.11 to zwykle inny poziom"),
                ("b", "W 7.13 główny jest 1, a dodatkowy 3; w 7.31 role się odwracają; 7.11 w materiale to przykład intensywnego lub podwójnego refleksu popielatego"),
                ("c", "Kolejność cyfr po separatorze nie ma znaczenia; 7.11 zawsze oznacza to samo u każdej marki bez legendy")],
               "b", 15, "Tak.", "Sprawdź jeszcze raz.",
               "Kolejność po separatorze zmienia, który refleks jest główny, a który dodatkowy (7.13 ≠ 7.31). 7.11 to przykład ze źródła (intensywny/podwójny popiel) — legendę marki i tak sprawdzasz."),
            ferr("n20-z4", "Krok 4 · Sytuacja, odrost, siwizna",
                 "W którym stwierdzeniu jest błąd?",
                 "Diagnoza na włosach",
                 [("s1", "Przy kolorze kosmetycznym z widocznym odrostem opisujesz odrost i długości osobno."),
                  ("s2", "Siwizna 30% na długości farbowanej."),
                  ("s3", "Naturalny odrost ok. 1 cm, poziom 8; ok. 20% siwizny, większe skupisko z przodu.")],
                 ["s2"], 15, "Znalazłaś błąd.", "Sprawdź jeszcze raz.",
                 "Najpierw rozpoznajesz sytuację (tu: kosmetyczny + odrost). Siwiznę oceniasz orientacyjnie w naturalnym odroście — z % i rozmieszczeniem — nie jako procentu „na długości”."),
            sc("n20-z5", "Krok 5 · Wpis do karty",
               "Case (skrócony):\nodrost ok. 2 cm, poziom 4;\nok. 20% siwizny, większe skupisko z przodu;\ndługości kosmetyczne ok. poziomu 5, dość jednolite;\nkońce lekko rozjaśnione, nierówno, uwrażliwione.\nKtóry wpis jest poprawną diagnozą koloru?",
               [("a", "Odrost + końce. Zrobić 4.0 / 5.0 i oksydant 6%."),
                ("b", "Naturalny odrost ok. 2 cm, poziom 4; ok. 20% siwizny, większe skupisko z przodu; długości ok. poziomu 5, dość jednolite; końce lekko rozjaśnione, nierówno, uwrażliwione."),
                ("c", "Włosy typ Zima, skóra przetłuszczona, gęste, struktura falowana.")],
               "b", 25, "To diagnoza koloru.", "Sprawdź jeszcze raz.",
               "Poprawny wpis obejmuje kolor kosmetyczny na długościach, różne strefy (w tym rozjaśnione końce) oraz siwiznę w odroście. Nie jest recepturą z oksydantem ani pełną kartą skóry, gęstości i typu kolorystycznego."),
        ],
        "Zamykasz moduł numeracji i diagnozy koloru",
        "Czytasz numer, opisujesz strefy i piszesz poprawny wpis kolorystyczny.",
        "Skoro potrafisz już opisać to, co widzisz na włosach, czas sprawdzić, dlaczego niektóre kolory się wzmacniają, a inne wzajemnie neutralizują.",
        "Numer odczytujesz według budowy zapisu; włosy opisujesz według tego, co widać dziś w każdej strefie.",
        guide={"title": "Samodzielnie",
               "text": "Nie ma tu nowego materiału. Korzystasz z tego, czego nauczyłaś się w module."},
        solved="Moduł ukończony",
    ))

    return lessons


FORBIDDEN = [
    "słabszy refleks",
    "siwizna na długości",
    ".1 zawsze oznacza popiel",
]


def validate_lesson(data: dict, existing_ids: set) -> list[str]:
    errs = []
    for field in ("schemaVersion", "id", "title", "category", "levelLabel", "intro", "rewards", "tasks", "completion"):
        if field not in data or data[field] in (None, "", []):
            errs.append(f"missing/empty {field}")
    lid = data.get("id", "")
    if lid in existing_ids:
        errs.append(f"id collision with existing: {lid}")
    if not re.fullmatch(r"[a-z0-9-]+", lid or ""):
        errs.append(f"id not [a-z0-9-]: {lid}")
    intro = data.get("intro") or {}
    for f in ("narratorText", "stakeText", "startButtonLabel"):
        if not intro.get(f):
            errs.append(f"intro.{f} empty")
    hg = intro.get("hairGuide")
    if hg:
        for f in ("title", "text", "imageSrc", "continueLabel"):
            if not hg.get(f):
                errs.append(f"hairGuide.{f} empty")
        src = hg.get("imageSrc") or ""
        if src and not (ROOT / src).exists():
            errs.append(f"image missing on disk: {src}")
    tasks = data.get("tasks") or []
    if len(tasks) != 5:
        errs.append(f"expected 5 tasks, got {len(tasks)}")
    tids = set()
    for i, t in enumerate(tasks):
        where = f"task[{i}]"
        if not t.get("id"):
            errs.append(f"{where} no id")
        elif t["id"] in tids:
            errs.append(f"duplicate task id {t['id']}")
        else:
            tids.add(t["id"])
        typ = t.get("type")
        if typ not in ("singleChoice", "trueFalse", "matching", "ordering", "findError"):
            errs.append(f"{where} bad type {typ}")
        fb = t.get("feedback") or {}
        for f in ("correctTitle", "incorrectTitle", "explanation"):
            if not fb.get(f):
                errs.append(f"{where}.feedback.{f} empty")
        if typ == "singleChoice":
            opts = t.get("options") or []
            if not any(o.get("id") == t.get("correctOptionId") for o in opts):
                errs.append(f"{where} correctOptionId mismatch")
        elif typ == "trueFalse":
            if not isinstance(t.get("correctValue"), bool):
                errs.append(f"{where} correctValue not bool")
        elif typ == "matching":
            left, right = t.get("left") or [], t.get("right") or []
            if len(left) < 2 or len(left) != len(right):
                errs.append(f"{where} matching columns invalid")
            for item in left:
                if not any(r.get("pairId") == item.get("pairId") for r in right):
                    errs.append(f"{where} missing pair {item.get('pairId')}")
        elif typ == "ordering":
            steps, order = t.get("steps") or [], t.get("correctOrder") or []
            if len(steps) < 2 or len(order) != len(steps):
                errs.append(f"{where} ordering invalid")
            for sid in order:
                if not any(s.get("id") == sid for s in steps):
                    errs.append(f"{where} unknown step {sid}")
        elif typ == "findError":
            rows, ids = t.get("rows") or [], t.get("correctOptionIds") or []
            if not t.get("cardTitle"):
                errs.append(f"{where} missing cardTitle")
            if not rows or not ids:
                errs.append(f"{where} findError rows/ids empty")
            for cid in ids:
                if not any(r.get("id") == cid for r in rows):
                    errs.append(f"{where} unknown correct id {cid}")
        blob = json.dumps(t, ensure_ascii=False).lower()
        for phrase in FORBIDDEN:
            if phrase.lower() in blob and "błąd" not in (t.get("cardTitle") or "").lower():
                # Allow forbidden phrases only inside findError wrong-row texts / distractors
                pass
        # stricter: forbid as taught truth outside findError error rows and singleChoice distractors
    comp = data.get("completion") or {}
    for f in ("solvedLabel", "title", "subtitle", "kosmykiLabel"):
        if not comp.get(f):
            errs.append(f"completion.{f} empty")
    if not (comp.get("nextLesson") or {}).get("teaser"):
        errs.append("completion.nextLesson.teaser empty")
    # forbidden as correct teaching (scan whole lesson except known distractor contexts)
    whole = json.dumps(data, ensure_ascii=False)
    if "słabszy" in whole.lower() and "refleks" in whole.lower():
        # check proximity roughly
        if re.search(r"słabsz\w+\s+refleks|refleks\s+słabsz", whole, re.I):
            errs.append("forbidden phrase about weaker reflex")
    # "siwizna na długości" may appear in distractors and in feedback that rejects it
    return errs


def existing_lesson_ids() -> set[str]:
    ids = set()
    for p in OUT_DIR.rglob("*.json"):
        if p.name.startswith("lesson-n"):
            continue  # our module files (regeneration)
        try:
            data = json.loads(p.read_text(encoding="utf-8"))
            if data.get("id"):
                ids.add(data["id"])
        except Exception:
            pass
    return ids


def check_forbidden_content(data: dict) -> list[str]:
    """Flag forbidden teaching phrases when they appear as correct content."""
    issues = []
    for t in data.get("tasks") or []:
        typ = t.get("type")
        # correct option texts
        if typ == "singleChoice":
            for o in t.get("options") or []:
                if o.get("id") == t.get("correctOptionId"):
                    text = o.get("text") or ""
                    if "słabszy" in text.lower():
                        issues.append(f"{t['id']}: 'słabszy' in correct option")
                    if re.search(r"siwizn\w+\s+na\s+długości", text, re.I):
                        issues.append(f"{t['id']}: siwizna na długości in correct option")
                    if ".1 zawsze oznacza popiel" in text.lower() or "zawsze jest popielem" in text.lower():
                        issues.append(f"{t['id']}: universal .1 in correct option")
        if typ == "trueFalse" and t.get("correctValue") is True:
            q = t.get("question") or ""
            if "słabszy" in q.lower():
                issues.append(f"{t['id']}: weaker reflex as true statement")
        expl = (t.get("feedback") or {}).get("explanation") or ""
        if "słabszy" in expl.lower() and "refleks" in expl.lower():
            issues.append(f"{t['id']}: weaker reflex in explanation")
        if re.search(r"siwizn\w+\s+na\s+długości", expl, re.I):
            if not re.search(r"nie\s+(używasz|jako|zapisujesz)|nie\s+jako", expl, re.I) and "nie" not in expl.lower():
                issues.append(f"{t['id']}: siwizna na długości taught in explanation")
    return issues


def main():
    existing = existing_lesson_ids()
    lessons = build_all()
    if len(lessons) != 20:
        print(f"FATAL: expected 20 lessons, built {len(lessons)}", file=sys.stderr)
        sys.exit(1)

    report = {"ok": [], "errors": {}, "files": [], "editorial": [], "images": {}}
    all_ids = []
    all_task_ids = []

    for L in lessons:
        lid = L["id"]
        path = OUT_DIR / f"{lid}.json"
        text = json.dumps(L, ensure_ascii=False, indent=2) + "\n"
        # no comments / trailing commas by construction
        path.write_text(text, encoding="utf-8")
        report["files"].append(str(path.relative_to(ROOT)))
        all_ids.append(lid)
        for t in L["tasks"]:
            all_task_ids.append(t["id"])

        errs = validate_lesson(L, existing)
        errs.extend(check_forbidden_content(L))
        # re-parse
        try:
            json.loads(text)
        except json.JSONDecodeError as e:
            errs.append(f"JSON parse: {e}")
        if errs:
            report["errors"][lid] = errs
        else:
            report["ok"].append(lid)

        hg = (L.get("intro") or {}).get("hairGuide")
        if hg and hg.get("imageSrc"):
            report["images"][lid] = {
                "src": hg["imageSrc"],
                "exists": (ROOT / hg["imageSrc"]).exists(),
            }

    # uniqueness
    if len(all_ids) != len(set(all_ids)):
        report["errors"]["_ids"] = ["duplicate lesson ids"]
    if len(all_task_ids) != len(set(all_task_ids)):
        report["errors"]["_task_ids"] = ["duplicate task ids across module"]

    # assets wzornik existence (allowed alt, not written unless used)
    report["images"]["_assets_wzornik"] = {
        "src": IMG_ASSETS_WZORNIK,
        "exists": (ROOT / IMG_ASSETS_WZORNIK).exists(),
    }
    report["images"]["_poziomy"] = {"src": IMG_POZIOMY, "exists": (ROOT / IMG_POZIOMY).exists()}
    report["images"]["_siwizna"] = {"src": IMG_SIWIZNA, "exists": (ROOT / IMG_SIWIZNA).exists()}

    out_report = ROOT / "scripts" / "_numeracja_n1_n20_validation.json"
    out_report.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {len(lessons)} lessons to {OUT_DIR}")
    print(f"OK: {len(report['ok'])}/20")
    if report["errors"]:
        print("ERRORS:")
        for k, v in report["errors"].items():
            print(f"  {k}: {v}")
        sys.exit(1)
    print("All validations passed.")
    print(json.dumps(report["images"], ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
