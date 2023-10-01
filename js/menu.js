const createElement = (body) => {
  const element = document.createElement('div');
  element.classList.add('modal-backdrop');
  body.prepend(element);
};
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
    const menuNav = document.getElementById('nav');
    toggleMenu(menuNav);
    toggleMenuIcon(menuNav, event);

    // añadir y eliminar el div de fondo
    if (!menuNav.classList.contains('nav-show')) {
      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) {
        backdrop.remove();
        document.querySelector('.header__items').style.zIndex = '0';
      }
    } else {
      createElement(document.querySelector('body'));
      document.querySelector('.header__items').style.zIndex = '1050';
    }
  });
};

export { showMenu };
