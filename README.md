# Techsessie AngularJS

## Vereisten

+ Git
+ Node.js

## Installatie

```
git clone git@github.com:GHengeveld/angular-techsessie.git
cd angular-techsessie
npm install
grunt server
```

De applicatie draait op http://localhost:9001/

## Opdrachten

Voor iedere opdracht is in deze repository een branch gemaakt. Deze branch geldt als het startpunt voor de opdracht.
Een overzicht van de opdrachten en bijbehorende branches:

| # | Opdracht                       | Branch (startpunt)       |
|---| ------------------------------ | ------------------------ |
| 1 | De basis                       | `master`                 |
| 2 | Sorteren                       | `sorting`                |
| 3 | Zoeken                         | `searching`              |
| 4 | Directive                      | `directive`              |
| 5 | Data preloaden                 | `resolve`                |
| 6 | Communiceren met een service   | `service`                |

De opdracht kan worden ingeladen door de branch uit te checken, bijvoorbeeld:

```
git checkout sorting
```

Mogelijk lukt het niet om van branch te wisselen omdat je nog openstaande wijzingen hebt. Dit is eenvoudig te omzeilen
door je lokale wijzigingen te 'stashen':

```
git stash
git checkout sorting
```


### 1. De basis

1. Bouw een formulier voor het toevoegen van uren, met de volgende velden:
    + Klant
    + Datum
    + Aantal uren
    + Omschrijving
2. Sla de resultaten op in een simpele array en toon deze in een tabel.

### 2. Sorteren

1. Zorg er voor dat de rijen in de tabel gesorteerd worden weergegeven.
2. Laat de gebruiker de sortering bepalen door op de kolomtitel te klikken.
3. Implementeer ook het sorteren in omgekeerde volgorde.

### 3. Zoeken

1. Implementeer een zoekveld die de rijen filtert op de zoekterm.

### 4. Directive

1. Implementeer een directive voor een icoontje dat de sorteervolgorde weergeeft.
2. Toon de icoon-directive in de relevante kolommen, met het juiste pijltje.

### 5. Data preloaden

Voor de laatste twee opdrachten maken we gebruik van een aparte backend applicatie,
deze kan als volgt worden geïnstalleerd en gebruikt:

```
git clone git@github.com:GHengeveld/angular-techsessie-backend.git
cd angular-techsessie-backend
npm install
script/server
```

De API draait op http://localhost:9002/

1. Maak gebruik van de resolve-property om de lijst van klanten op te halen van de API. De URL is
http://localhost:9002/api/customers

### 6. Communiceren met een service

1. Implementeer een service met de volgende methods:
    + addEntry
    + listEntries
2. Zorg er voor dat de HoursController deze service gebruikt bij het toevoegen van uren-records.
3. Maak gebruik van de resolve-property om de lijst van uren-records op te halen.
4. Bonus: Implementeer het wijzigen en verwijderen van uren-records.
