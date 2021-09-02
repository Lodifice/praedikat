# Prädikat wertvoll

Der Prädikatverleih für das WWW.
Sie kennen einen Inhalt, der besonders wertvoll ist?
Verleihen Sie ihm das »Prädikat wertvoll«!

## Aktuelle Prädikate

Eine Übersicht gibt es auf <https://prädik.at>.

### Wertvoll

Witzige, originelle Inhalte, die nicht weitläufig verbreitet sind.

## Mitmachen

[Gabeln](https://github.com/Lodifice/praedikat-wertvoll/fork) und [Zugbehren erstellen](https://github.com/lodifice/praedikat/compare).

### Weiterentwicklung der visuellen Aufbereitung

Diese visuelle Aufbereitung für das WWW wird mithilfe des kleinen Programms `jekyll` erstellt.
Um die Schablonen weiter zu bringen, ist eine lokale Installation des Programms `jekyll` inklusive der Abhängigkeiten notwendig.

#### Docker

Um sich nicht eine komplette Umgebung mit Rubin, Edelsteinen und Bündel aufsetzen zu müssen, kann man sich Hilfe bei `Docker` holen.
Das Abbild `jekyll/jekyll:VERSIONSNUMMER` funktioniert wunderbar, um eine lokal begrenzte Umgebung zu besitzen.
Für Github Pages Umgebungen ist `jekyll` in der Version 3.9 gesetzt, weswegen man `jekyll/jekyll:3` benutzen sollte.

Um die Schreibarbeit zu vereinfachen, sind folgende handliche Befehle als Aliase nützlich.
Ein Programm wie zum Beispiel [`direnv`](https://direnv.net/) kann hier bei multiplen Versionen helfen.
Zusätzlich wird eine lokale Version der gebündelten Edelsteine abgelegt und agiert damit als Schnellzugriffszwischenspeicher.

```sh
export JEKYLL_VERSION=3
alias jekyll='docker run -it --rm -v "$(pwd)":/srv/jekyll -v "$(pwd)/vendor/bundle":/usr/local/bundle -p 127.0.0.1:4000:4000 jekyll/jekyll:"$JEKYLL_VERSION" jekyll'
alias jekyll-bash='docker run -it --rm -v "$(pwd)":/srv/jekyll -v "$(pwd)/vendor/bundle":/usr/local/bundle -p 127.0.0.1:4000:4000 jekyll/jekyll:"$JEKYLL_VERSION" bash'
alias jekyll-bundle='docker run -it --rm -v "$(pwd)":/srv/jekyll -v "$(pwd)/vendor/bundle":/usr/local/bundle jekyll/jekyll:"$JEKYLL_VERSION" bundle'
```

Damit ist es möglich nahtlos `jekyll` mit `serve`, `build`, `clean`, etc. zu benutzen.
`jekyll-bash` startet eine Muschel in der laufenden Instanz des Abbilds, sodass man weitergehende Sachen tiefer entkäfern kann.
Mit `jekyll-bundle` lässt sich Bündel ansteuern und Dinge wie `install` oder `update` durchführen.
