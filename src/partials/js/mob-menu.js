(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const logoindent = document.querySelector('[data-logo]');
  const fixed = document.querySelector('[data-header]');
  const body = document.querySelector('body');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    logoindent.classList.toggle('indent');
    fixed.classList.toggle('fixed');

    mobileMenuRef.classList.toggle('is-open');
    body.classList.toggle('menu-open');
  });
})();
