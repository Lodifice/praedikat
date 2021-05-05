const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const matchMediaPrefLight = window.matchMedia('(prefers-color-scheme: light)');
var currentTheme = localStorage.getItem('theme');

if (currentTheme) {
	document.documentElement.setAttribute('data-theme', currentTheme);

	if (currentTheme === 'light' || matchMediaPrefLight.matches) {
		toggleSwitch.checked = true;
	}
}

function switchTheme(e) {
	if (e.target.checked) {
		currentTheme = 'light';
	}
	else {
		currentTheme = 'dark';
	}
	document.documentElement.setAttribute('data-theme', currentTheme);
	localStorage.setItem('theme', currentTheme);
}

function onSystemThemeChange(e) {
	if (currentTheme) {
		return;
	}
	if (e.matches) {
		toggleSwitch.checked = true;
	}
	else {
		toggleSwitch.checked = false;
	}
}

toggleSwitch.addEventListener('change', switchTheme, false);
matchMediaPrefLight.addEventListener('change', onSystemThemeChange)

var easteregg = function(){
  console.log(`%c Welcome to`, "color:#00050f; font-family:monospace");
  console.log(`%c
            _ _
  _____    |_|_|  _ _ _         _
 |  _  |___ ___ _| |_| |_   ___| |_
 |   __|  _| .'| . | | '_|_| .'|  _|
 |__|  |_| |__,|___|_|_,_|_|__,|_|

`, "color:#ff6600; font-size:10px; font-family:monospace");
  console.log(`%c Your source for Prädikate.`, "color:#00050f; font-family:monospace");
  console.log(`%c I like your enthusiasm but here you won't find any content here`, "color:#00050f; font-family:monospace");
	console.log(`%c If you are interested in the source-code go to github.com/lodifice/praedikat`, "color:#00050f; font-family:monospace");
};

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  easteregg();
} else {
  document.addEventListener("DOMContentLoaded", easteregg);
}
