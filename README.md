# Alle Prädikate auf einen Blick

## Willkommen auf Prädikat

Hier eine Liste mit Links zu den Prädikaten

{% for page in site.pages %}
{% assign praedikat = page.path | replace:'.md','' %}
{% unless preadikat == README %}

- [{{ preadikat }}]({{ site.baseurl }}/{{ preadikat }})

{% endunless %}
{% endfor %}
