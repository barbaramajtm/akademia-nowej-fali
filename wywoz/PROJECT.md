# Wywóz — kalendarz wywozu szamba

## Cel

Mobilna aplikacja (PWA) do obsługi kalendarza wywozu szamba: zapis daty wywozu, odliczanie czasu, alerty przed terminem.

## Funkcje MVP

- oznaczenie wywozu (data + opcjonalna notatka)
- historia wywozów
- konfiguracja cyklu (interwał w dniach)
- alert na określoną przez użytkownika liczbę dni przed terminem
- alert w aplikacji (baner) + opcjonalne powiadomienia systemowe
- instalacja na telefonie (manifest + service worker)

## Architektura

Statyczna PWA, dane w `localStorage`.

```
index.html
css/styles.css
js/storage.js
js/notifications.js
js/app.js
manifest.json
sw.js
assets/
```

## Status

MVP gotowe do użycia na telefonie przez przeglądarkę / „Dodaj do ekranu głównego”.
