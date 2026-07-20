# -*- coding: utf-8 -*-
"""Smoke validation for Numeracja N1-N20 catalog integration."""
import json
import os
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
EXPECTED = [
    "lesson-n1-numer-farby",
    "lesson-n2-liczba-przed-separatorem",
    "lesson-n3-skala-poziomow",
    "lesson-n4-refleks-glowny",
    "lesson-n5-refleks-dodatkowy",
    "lesson-n6-kolejnosc-refleksow",
    "lesson-n7-podwojny-refleks",
    "lesson-n8-czytanie-numeru",
    "lesson-n9-separatory",
    "lesson-n10-legenda-producenta",
    "lesson-n11-rozpoznawanie-poziomow",
    "lesson-n12-poziom-a-refleks",
    "lesson-n13-sytuacje-kolorystyczne",
    "lesson-n14-naturalny-odrost",
    "lesson-n15-kolor-kosmetyczny",
    "lesson-n16-rozjasnione-strefy",
    "lesson-n17-procent-siwizny",
    "lesson-n18-pelna-diagnoza-koloru",
    "lesson-n19-powtorka-mieszana",
    "lesson-n20-sprawdzian-modulu",
]

errs = []

for lid in EXPECTED:
    path = ROOT / "lessons" / f"{lid}.json"
    if not path.exists():
        errs.append(f"MISSING_FILE {lid}")
        continue
    data = json.loads(path.read_text(encoding="utf-8"))
    if data.get("id") != lid:
        errs.append(f"ID_MISMATCH {lid} -> {data.get('id')}")
    tasks = data.get("tasks") or []
    if len(tasks) != 5:
        errs.append(f"TASK_COUNT {lid} = {len(tasks)}")
    hg = (data.get("intro") or {}).get("hairGuide") or {}
    src = hg.get("imageSrc")
    if src:
        img = ROOT / src.replace("/", os.sep)
        if not img.exists():
            errs.append(f"MISSING_IMG {lid} {src}")
        else:
            print(f"IMG_OK {lid} {src} ({img.stat().st_size} bytes)")
    teaser = ((data.get("completion") or {}).get("nextLesson") or {}).get("teaser")
    if lid == "lesson-n20-sprawdzian-modulu":
        if "neutralizuj" not in (teaser or ""):
            errs.append("N20_TEASER_UNEXPECTED")
        else:
            print("N20_TEASER_OK")

cat = (ROOT / "js" / "lessons-catalog.js").read_text(encoding="utf-8")
ids_in_cat = re.findall(r"id:\s*'([^']+)'", cat)
for lid in EXPECTED:
    if lid not in ids_in_cat:
        errs.append(f"CAT_MISSING {lid}")
dupes = [x for x in ids_in_cat if ids_in_cat.count(x) > 1]
if dupes:
    errs.append(f"CAT_DUPES {sorted(set(dupes))}")

if "moduleId: 'numeracja-farb'" not in cat:
    errs.append("MODULE_ID_MISSING")
if "['ph', 'numeracja-farb', 'wlos-kolor']" not in cat:
    errs.append("MODULE_ORDER_WRONG")

# Linear unlock chain N2..N20
for i, lid in enumerate(EXPECTED):
    if i == 0:
        continue
    prev = EXPECTED[i - 1]
    if f"requiresLessonId: '{prev}'" not in cat:
        errs.append(f"UNLOCK_MISSING {lid} requires {prev}")

# pH lessons still present
for ph in ("ph-co-oznacza-ph", "ph-podsumowanie-modulu", "wlos-z-czego-sklada-sie"):
    if ph not in ids_in_cat:
        errs.append(f"REGRESSION_CAT {ph}")

print("catalog_ids", len(ids_in_cat))
print("numeracja_in_catalog", sum(1 for x in ids_in_cat if x.startswith("lesson-n")))
if errs:
    print("FAIL")
    for e in errs:
        print(" -", e)
    sys.exit(1)
print("OK all checks passed")
