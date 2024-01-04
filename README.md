# Strona Parafialna Kościoła w Pogorzeli
Ten projekt jest realizacją nowoczesnej strony internetowej dla Parafii kościoła katolickiego pod wezwaniem św. Michała Archanioła w Pogorzeli. Celem było stworzenie intuicyjnej, łatwej w obsłudze i estetycznej platformy, która umożliwi parafianom dostęp do najnowszych informacji, wydarzeń oraz innych ważnych treści z życia parafii. Równocześnie istotnym było zapewnienie księżom oraz administratorowi maksymalnie prostego sposobu administrowania stroną.

Zakres prac obejmował [projekt graficzny w Figma](https://www.figma.com/file/ZoUBSToIXnBMWNxMKfTIxB/Parafia-Pogorzela?type=design&node-id=0%3A1&mode=design&t=L65c6KqYN0lz3uki-1) i pełną implementację witryny.

### Pierwsze jest pierwsze
Najważniejszym elementem są odnośniki do dwóch plików PDF: ogłoszeń parafialnych i intencji mszalnych. Oba pliki to główny powód odwiedzin strony przez parafian. 

### Ułatwienie zarządzania
Wspomniane pliki są przyczyną wykorzystania Sanity jako CMS. System ten pozwolił mi zaprojektować panel administracyjny w taki sposób, aby wszelkie powtarzalne informacje wydobyć jednym zapytaniem. Administrator z kolei dawniej przepisywał treści dokumentów z Microsoft Office do strony WordPressa. Całość wymagała następnie przeformatowania. Obecnie wystarczy, że załaduje PDF do odpowiedniego pola.

### Redukcja kosztów utrzymania strony
Przed wdrozeniem mojego rozwiązania parafia musiała pokryć koszty hostingu, domeny i SSL. Obiecałem redukcję kosztów do ok. 60 zł rocznie, czyli samego kosztu domeny. Dotrzymałem słowa, optymalizując stronę do stopnia bezpiecznego wykorzystania darmowego planu Vercel oraz Sanity. Zostanie jeszcze dużo zapasu przepustowości w obu usługach.

### Niezawodność rozwiązania
WordPress okazał się nieintuicyjny i zbyt rozbudowany dla administratorów. Po kilku latach silnik był nieaktualny, a front-end zniszczony. Był dla parafii ciężarem, a parafia nie może pozwolić sobie na koszt opieki nad stroną. 

Astro z kolei pozwala na SSG i SSR. Nikt nie ma bezpośredniego dostępu do kodu strony. Sanity jest banalne w użyciu i bezpieczne. Tym razem mogłem zagwarantować, że za 10 lat strona będzie wyglądała i działała tak samo.

## Technologie
- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [GROQ](https://www.sanity.io/docs/groq) - query language & GraphQL alternative

## Usługi
- [Sanity.io](https://www.sanity.io/) as CMS
- [Vercel](https://vercel.com/) as hosting

## Optymalizacja i Wydajność
Strona została zoptymalizowana pod kątem minimalizacji przesyłania danych, co jest szczególnie istotne w świetle ograniczeń darmowego planu Vercela i Sanity. Optymalizacja ta opierała się na analizie statystyk miesięcznych odwiedzin strony przed wdrożeniem nowej wersji.

## Projektowanie
[Projekt graficzny](https://www.figma.com/file/ZoUBSToIXnBMWNxMKfTIxB/Parafia-Pogorzela?type=design&node-id=0%3A1&mode=design&t=L65c6KqYN0lz3uki-1) został stworzony w Figma, co pozwoliło na precyzyjne zaplanowanie layoutu, kolorystyki i elementów interaktywnych strony. Każdy aspekt designu ma źródło w historii parafii i jej codziennym życiu, aby upewnić się, że strona wygląda znajomo i budzi zaufanie odwiedzających.

## Instalacja i Uruchomienie
Aby uruchomić projekt lokalnie, wykonaj następujące kroki:

```
git clone https://github.com/frontendkris/parafiapogorzela-pl.git
cd parafiapogorzela-pl
npm install
npm run dev
```

Projekt wymaga podania zmiennych środowiskowych do integracji z Sanity w pliku `.env`.

## Użytkowanie CMS
Sanity CMS pozwala na łatwe zarządzanie treścią strony. Administratorzy mogą dodawać, edytować i usuwać treści za pomocą prostego w obsłudze interfejsu użytkownika. [Dokumentacja CMS](https://www.sanity.io/docs).

## Licencja
Ten projekt jest udostępniony w celu przeglądania i nauki. Zezwala się na klonowanie tego repozytorium wyłącznie do celów przeglądania kodu w lokalnym środowisku programistycznym (IDE).

Jakiekolwiek inne wykorzystanie kodu, w tym modyfikacja, dystrybucja, wykorzystanie komercyjne, czy publiczne udostępnianie, jest surowo zabronione bez wyraźnej pisemnej zgody autora.
