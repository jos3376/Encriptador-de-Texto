function obtenerId(element) {
    return document.getElementById(element);
}

//Modo oscuro - claro
var themeToggle = obtenerId('theme-toggle'); // Boton - cambio de tema
var sunIcon = obtenerId('sun-icon'); // sol
var moonIcon = obtenerId('moon-icon'); // luna

var currentTheme = localStorage.getItem('theme');
if (currentTheme === null) {
    currentTheme = 'dark-mode';
}
document.body.classList.add(currentTheme);
updateIcons(currentTheme);

themeToggle.addEventListener('click', function () {
    if (document.body.classList.contains('light-mode')) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        currentTheme = 'dark-mode';
    }
    else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        currentTheme = 'light-mode';
    }

    localStorage.setItem('theme', currentTheme);
    updateIcons(currentTheme);
});

function updateIcons(theme) {
    if (theme === 'light-mode') {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    }
    else {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    }
}
