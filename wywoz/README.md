# Wywóz — kalendarz wywozu szamba

Mobilna aplikacja PWA do śledzenia wywozu szamba (katalog `wywoz/` w repozytorium).

## Co robi

- oznaczasz datę wywozu szamba
- widzisz, ile czasu minęło i ile zostało do następnego terminu
- ustawiasz własny cykl (np. 60 / 90 / 120 dni)
- dostajesz alerty w aplikacji na X dni przed terminem
- opcjonalnie włączasz powiadomienia systemowe telefonu

## Uruchomienie

```bash
python3 -m http.server 8765
```

Otwórz: http://localhost:8765/wywoz/

Na telefonie dodaj stronę do ekranu głównego (PWA), żeby mieć szybki dostęp i powiadomienia.

Dane zapisują się lokalnie w przeglądarce (`localStorage`).
