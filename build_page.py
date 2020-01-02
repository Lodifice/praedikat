import re
import sys

from mako.template import Template

def parse_orgfile(orgfile):
    heading = orgfile.readline()
    # TODO here we could check the heading
    for nr, line in enumerate(orgfile, start=2):
        match = re.match("^- (?P<description>(\w|\s)+) :: (?P<url>.+)\n$", line)
        if match:
            yield { "description": match.group("description"),
                    "url": match.group("url") }
        else:
            print("invalid line nr. {} <{}>".format(nr, line), file=sys.stderr)
            sys.exit(1)

def build_page(orgfile, j2file):
    with open(orgfile, "r") as f:
        links = parse_orgfile(f)
        template = Template(filename=j2file)
        print(template.render(links=links))

if __name__ == "__main__":
    assert len(sys.argv) == 3
    build_page(sys.argv[1], sys.argv[2])
