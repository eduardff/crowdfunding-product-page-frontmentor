const toggleMenu = (menuNav) => {
  menuNav.classList.toggle('nav-show');
};
const toggleMenuIcon = (menuNav, event) => {
  event.target.src = menuNav.classList.contains('nav-show')
    ? './public/icon-close-menu.svg'
    : './public/icon-hamburger.svg';
};

const showMenu = (menuToggle) => {
  menuToggle.addEventListener('click', (event) => {
    toggleMenu(document.getElementById('nav'));
    toggleMenuIcon(document.getElementById('nav'), event);
  });
};

export { showMenu };
