# For now, we are only interested in "Prädikat wertvoll"
all: wertvoll.html

# An HTML page depends on its contents, given as ORG file,
# and on a template.
# It is rendered using python a script.
%.html: %.org %.mako
	python build_page.py $^ > $@
