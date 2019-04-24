# Zadanie rekrutacyjne Front End Developer

Witaj,

Prosimy Ciê o wykonanie poni¿szego zadania najlepiej jak tylko umiesz. Pozwoli to nam lepiej oceniæ Twoje umiejêtnoœci :)
Masz na to czas do koñca miesi¹ca. Je¿eli nie zd¹¿ysz spe³niæ wszystkich za³o¿eñ przeka¿ nam to co masz gotowe i opisz braki.

## OPIS

W katalogu znajdziesz projekt graficzny. Prosimy Ciê o jego pociêcie oraz napisanie funkcjonalnoœci dla poszczególnych elementów. Swoje prace rób jako fork tego repozytorium.


### CEL

- Pociêta strona ma wype³niaæ ca³e okno przegl¹darki. Przy mniejszych rozdzielczoœciach (w granicach 960-1920px) elementy powinny siê proporcjonalnie zmniejszyæ - chodzi o osi¹gniêcie efektu zbli¿onego do ogl¹dania projektu na fullscreenie niezale¿nie od rozdzielczoœci ekranu (przyk³adowo element na FHD ma 100px wysokoœci, wiêc przy rozdzielczoœci 1366px która jest o oko³o 30% mniejsza od FHD dany element zmieni wysokoœæ na 70px). Nie chodzi tu by zmniejszaj¹c okno przegl¹darki elementy siê od razu skalowa³y ale dopiero po przekroczeniu breakpointu.

- Header powinien byæ 'fixed'. Logo HTML5 w headerze powinno linkowaæ do '/' .  

- Stopka strony w przypadku ma³ej iloœci treœci w contencie powinna i tak byæ na samym dole strony a nie 'doklejaæ' siê pod contentem.

- W bloku pierwszym s¹ radiobuttony, ich wybór a nastêpnie klikniêcie przycisku w bloku drugim wykona akcjê podmiany lub doklejenia tekstu w bloku ostatnim. Treœci które maj¹ zostaæ u¿yte nale¿y pobraæ z JSONa (szczegó³y ni¿ej). Opcja pierwsza wybierze zawsze treœæ pierwsz¹, opcja druga drug¹ a opcja losowa dowoln¹ z pozosta³ych. Ka¿da osobna treœæ w ostatnim bloku powinna byæ objêta tagiem <article>. Doklejaj¹c treœæ nale¿y unikn¹æ powielania ju¿ istniej¹cej treœci (w przypadku u¿ycia opcji losowej nale¿y wylosowaæ kolejn¹ jeszcze nie u¿yt¹ treœæ). 

- Button 'poka¿' w footerze po klikniêciu pokazuje ramkê (wysuwa j¹ spod footera) z 2 klikalnymi opcjami. Pierwsza przywraca stronê do pocz¹tkowych ustawieñ, druga w headerze dokleja Twoje imiê i nazwisko.


### PLIK JSON

Zbudowaæ plik z tablic¹ przynajmniej 6 elementów zawieraj¹cych dowoln¹ treœæ. Wolno w JSONie trzymaæ dodatkowe dane je¿eli uproœci to wykonanie zadania.


### WARUNKI

- Nie u¿ywaæ bootstrapa ani innych podobnych frameworków. Na potrzeby JS'a dozwolone jest jQuery.
- Nie u¿ywaæ display: grid, dozwolony (a nawet mocno zalecany) flexbox.
- Przynajmniej 3 breakpointy w zakresie 960-1920px (samemu dobraæ jakie - warto zwróciæ uwagê na to które rozdzielczoœci s¹ popularne).
- Poni¿ej 960px wed³ug uznania dokonaæ zmian w projekcie by jak najlepiej przedstawiæ stronê (wykorzystuj¹c przyk³ad projektu mobilnego).
- Strona ma dzia³aæ poprawnie w aktualnych wersjach Edge, Firefox, Chrome, Safari, Opera. Z tego wzglêdu nie ma sensu u¿ywania prefixów zapewniaj¹cych kompatybilnoœæ w starszych przegl¹darkach.


### DODATKOWE PLUSY

- Brak plików graficznych w koñcowym projekcie.
- CSS IS AWESOME w footerze - po najechaniu myszk¹ ramka (bez tekstu) powinna wykonaæ animowany obrót.
- Zastosowanie SCSS (ale bez zbêdnego pisania skomplikowanych funkcji na potrzeby ich jednokrotnego wykorzystania).
- Zastosowanie BEM (ale tylko je¿eli faktycznie ma siê œwiadomoœæ ¿e robi siê to dobrze, b³êdne u¿ycie bêdzie dzia³a³o na niekorzyœæ)
- Logiczne wykorzystanie jednostek rem, em (w efekcie jak najmniejsze u¿ycie jednostki px).
- Jak najmniej kodu odpowiedzialnego za responsywnoœæ.
- Wsparcie dla IE11.
- Doklejaj¹c treœæ sprawiæ by w ostatnim bloku treœci by³y posortowane alfabetycznie.
- Przy doklejaniu treœci w przypadku nie mo¿liwoœci spe³nienia warunku by by³a unikalna wyœwietliæ stosowny komunikat.
- Button w footerze ("poka¿") wysuwaj¹cy ramkê bez u¿ycia JSa.

## UWAGI
Projekt nie musi byæ 'pixel perfect' (choæ warto próbowaæ). Z uwagi na brak pliku Ÿród³owego a jedynie jpg nale¿y wymiary samemu zmierzyæ. Ale przyk³adowo je¿eli jakiœ element po zmierzeniu wydaje siê ¿e ma 139px to dobr¹ praktyk¹ bêdzie zaokr¹gliæ go do 140px. Je¿eli osi¹gniêcie jakiejœ ma³o istotnej dekoracji wymagaæ bêdzie dziesi¹tek linii dodatkowego kodu to lepiej sobie to odpuœciæ.
U¿yty w projekcie font to OpenSans.

## WYSY£KA PRACY
Nale¿y przes³aæ link do swojego repozytorium z rozwi¹zaniem (bêd¹cy fork'iem tego repozytorium). Dodatkowo wrzuæ dokument tekstowy z list¹ rzeczy których nie uda³o siê wykonaæ z celów g³ównych oraz listê rzeczy które zrobiono dodatkowo.

POWODZENIA :)
