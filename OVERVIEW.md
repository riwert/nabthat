# Przegląd pracy

Demo zadania można zobaczyć tutaj: [riwert.github.io/nabthat](https://riwert.github.io/nabthat/).

## Czego nie udało się wykonać
- wszystkie punkty z celów głównych udało się wykonać.

## Co udało się zrobić dodatkowo
- praktycznie wszystkie punkty z dodatkowych plusów udało się wykonać oprócz zastosowania BEM (alternatywna w uwagach poniżej).

### Znane problemy
- uruchamiając zadanie lokalnie bez serwera http może wystąpić problem związany z ograniczeniem CORS przez odczyt lokalnego pliku JSON.

### Uwagi
- postanowiłem nie używać jQuery i wykorzystać tylko czysty JavaScript,
- dla uproszczenia obsługi JS jest bez ES6+ (poza let i const, które niczego nie psują),
- w celu zachowania kompatybilności z IE 11 dołączyłem polyfill `Array.from`,
- SCSS przetworzone jest do CSS przez rozszerzenie VS Code,
- zamiast zastosowania metodyki BEM stworzyłem zbliżoną ideą strukturę plików SCSS opartą o zagnieżdżanie,
- wielkość elementów skaluje się proporcjonalnie do wielkości czcionki znacznika głównego (html) przez zastosowanie jednostek rem więc w celu użycia jak najmniejszej ilości kodu odpowiedzialnego za responsywność nie dostosowywałem ich dodatkowo,
- zamiast grafik użyłem Font Awesome więc niektóre elementy mogą różnić się minimalnie.
