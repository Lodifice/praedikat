# Alle Prädikate auf einen Blick

## Willkommen auf Prädikat

Hier eine Liste mit Links zu den Prädikaten

{% for page in site.pages %}
{% assign praedikat = page.path | replace:'.md','' %}
{% unless praedikat == "README" or praedikat contains "css" %}

- [{{ praedikat }}]({{ site.baseurl }}/{{ praedikat }})

{% endunless %}
{% endfor %}
