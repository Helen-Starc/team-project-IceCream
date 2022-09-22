(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const logoindent = document.querySelector('[data-logo]');
  const body = document.querySelector('body');
  const menuBtnNav1 = document.querySelector('[menu-btn-nav-data1]');
  const menuBtnNav2 = document.querySelector('[menu-btn-nav-data2]');
  const menuBtnNav3 = document.querySelector('[menu-btn-nav-data3]');
  const menuBtnNav4 = document.querySelector('[menu-btn-nav-data4]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    logoindent.classList.toggle('indent');

    mobileMenuRef.classList.toggle('is-open');
    body.classList.toggle('menu-open');
  });

  menuBtnNav1.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    logoindent.classList.toggle('indent');

    mobileMenuRef.classList.toggle('is-open');
    body.classList.toggle('menu-open');
  });

  menuBtnNav2.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    logoindent.classList.toggle('indent');

    mobileMenuRef.classList.toggle('is-open');
    body.classList.toggle('menu-open');
  });

  menuBtnNav3.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    logoindent.classList.toggle('indent');

    mobileMenuRef.classList.toggle('is-open');
    body.classList.toggle('menu-open');
  });

  menuBtnNav4.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    logoindent.classList.toggle('indent');

    mobileMenuRef.classList.toggle('is-open');
    body.classList.toggle('menu-open');
  });
})();
