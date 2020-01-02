<h1>One link to find them</h1>
<ul>
% for link in links:
    <li><a href=${link["url"]}>${link["description"]}</a></li>
% endfor
</ul>
