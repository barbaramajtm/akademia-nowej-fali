# Wywóz — kalendarz wywozu szamba

Mobilna aplikacja PWA do śledzenia wywozu szamba.

## Co robi

- oznaczasz datę wywozu szamba
- widzisz, ile czasu minęło i ile zostało do następnego terminu
- ustawiasz własny cykl (np. 60 / 90 / 120 dni)
- dostajesz alerty w aplikacji na X dni przed terminem
- opcjonalnie włączasz powiadomienia systemowe telefonu

## Uruchomienie

Aplikacja to statyczne pliki — wystarczy lokalny serwer HTTP:

```bash
python3 -m http.server 8765
```

Otwórz: http://localhost:8765

Na telefonie: otwórz ten adres w przeglądarce (w tej samej sieci) albo wdróż pliki na hosting HTTPS, potem **Dodaj do ekranu głównego**.

## Pliki

```
index.html          — UI
css/styles.css      — wygląd
js/storage.js       — localStorage + obliczanie terminów
js/notifications.js — alerty / Notification API
js/app.js           — logika ekranów
manifest.json       — PWA
sw.js               — service worker (offline + powiadomienia)
assets/             — ikony
```

Dane zapisują się lokalnie w przeglądarce (`localStorage`).
