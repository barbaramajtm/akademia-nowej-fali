$base = 'http://127.0.0.1:8765'
$catalog = @(
  'ph-co-oznacza-ph','ph-jak-wplywa-na-wlos','ph-preparaty-fryzjerskie','ph-przywracanie-ph-po-zabiegu',
  'ph-koloryzacja','ph-rozjasnianie','ph-szampony','ph-odzywki-i-maski','ph-produkty-zakwaszajace','ph-podsumowanie-modulu',
  'lesson-n1-numer-farby','lesson-n2-liczba-przed-separatorem','lesson-n3-skala-poziomow','lesson-n4-refleks-glowny',
  'lesson-n5-refleks-dodatkowy','lesson-n6-kolejnosc-refleksow','lesson-n7-podwojny-refleks','lesson-n8-czytanie-numeru',
  'lesson-n9-separatory','lesson-n10-legenda-producenta','lesson-n11-rozpoznawanie-poziomow','lesson-n12-poziom-a-refleks',
  'lesson-n13-sytuacje-kolorystyczne','lesson-n14-naturalny-odrost','lesson-n15-kolor-kosmetyczny','lesson-n16-rozjasnione-strefy',
  'lesson-n17-procent-siwizny','lesson-n18-pelna-diagnoza-koloru','lesson-n19-powtorka-mieszana','lesson-n20-sprawdzian-modulu',
  'wlos-z-czego-sklada-sie','wlos-oslonka-kora-rdzen','wlos-keratyna-rusztowanie'
)
$images = @(
  'assets/images/wlos-ph.jpg',
  'assets/images/hair-composition.png',
  'assets/images/hair-layers.png',
  'assets/images/hair-fibrous-keratin.png',
  'assets/images/wzornik-poziomow-1-10.png',
  'assets/images/wzornik-siwizny.png'
)

Write-Output '=== LESSON JSON ==='
$lessonOk = 0
foreach ($id in $catalog) {
  try {
    $r = Invoke-WebRequest -Uri "$base/lessons/$id.json" -UseBasicParsing -TimeoutSec 10
    if ($r.StatusCode -eq 200) { $lessonOk++; Write-Output "OK  $id" }
    else { Write-Output "FAIL $id HTTP $($r.StatusCode)" }
  } catch {
    Write-Output "FAIL $id $($_.Exception.Message)"
  }
}

Write-Output "`n=== LESSON IMAGES (referenced in JSON) ==="
foreach ($img in $images) {
  try {
    $r = Invoke-WebRequest -Uri "$base/$img" -UseBasicParsing -TimeoutSec 10
    Write-Output "OK  $img ($($r.RawContentLength) bytes)"
  } catch {
    Write-Output "MISSING $img"
  }
}

Write-Output "`nSummary: $lessonOk / $($catalog.Count) lessons reachable"
