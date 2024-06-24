const menuIcons = document.getElementById('menuIcons');
const menuOpen = document.getElementById('menuOpen');
const menuClose = document.getElementById('menuClose');
const mainMenu = document.getElementById('mainMenu');
const menuCloseInside = document.getElementById('menuCloseInside');

menuIcons.addEventListener('click', () => {
    menuOpen.classList.toggle('d-none');
    menuClose.classList.toggle('d-none');
    mainMenu.classList.toggle('show');
});

menuClose.addEventListener('click', () => {
    menuOpen.classList.remove('d-none');
    menuClose.classList.add('d-none');
    mainMenu.classList.remove('show');
});

menuCloseInside.addEventListener('click', () => {
    menuOpen.classList.remove('d-none');
    menuClose.classList.add('d-none');
    mainMenu.classList.remove('show');
});
