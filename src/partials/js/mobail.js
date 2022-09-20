(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const logoindent = document.querySelector('[data-logo]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    logoindent.classList.toggle('indent');

    mobileMenuRef.classList.toggle('is-open');
  });
})();

// Modal

(() => {
  //перменные (константы), которые связываны с элементами, на которых есть соответствующие атрибуты
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    backdrop: document.querySelector('[data-backdrop]'),
  };

  //эдвэнтлистэнэр, который при клике активирует функцию "переключения"
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  //функция переключения классов
  function toggleModal() {
    //вешает на боди 'modal-open'
    document.body.classList.toggle('modal-open');
    //вешает на бєкдроп 'is-hidden'
    refs.backdrop.classList.toggle('is-hidden');
  }
})();

// Mobile menu
