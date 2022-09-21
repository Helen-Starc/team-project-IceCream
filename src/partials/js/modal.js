(() => {
  const refs = {
    //   hero
    openModalBtnHero: document.querySelector('[data-modal-open-hero]'),
    closeModalBtnHero: document.querySelector('[data-modal-close-hero]'),
    backdropHero: document.querySelector('[data-backdrop-hero]'),

    // products
    openModalBtnProduct: document.querySelector('[data-modal-open-product]'),
    closeModalBtnProduct: document.querySelector('[data-modal-close-product]'),
    backdropProduct: document.querySelector('[data-backdrop-product]'),

    // locations
    openModalBtnLocations: document.querySelector(
      '[data-modal-open-locations]'
    ),
    closeModalBtnLocations: document.querySelector(
      '[data-modal-close-locations]'
    ),
    backdropLocations: document.querySelector('[data-backdrop-locations]'),

    // franchise
    openModalBtnFranchise: document.querySelector(
      '[data-modal-open-franchise]'
    ),
    closeModalBtnFranchise: document.querySelector(
      '[data-modal-close-franchise]'
    ),
    backdropFranchise: document.querySelector('[data-backdrop-franchise]'),

    // about
    openModalBtnAbout: document.querySelector('[data-modal-open-about]'),
    closeModalBtnAbout: document.querySelector('[data-modal-close-about]'),
    backdropAbout: document.querySelector('[data-backdrop-about]'),
  };

  refs.openModalBtnHero.addEventListener('click', toggleModalHero);
  refs.closeModalBtnHero.addEventListener('click', toggleModalHero);

  refs.openModalBtnProduct.addEventListener('click', toggleModalProduct);
  refs.closeModalBtnProduct.addEventListener('click', toggleModalProduct);

  refs.openModalBtnLocations.addEventListener('click', toggleModalLocations);
  refs.closeModalBtnLocations.addEventListener('click', toggleModalLocations);

  refs.openModalBtnFranchise.addEventListener('click', toggleModalFranchise);
  refs.closeModalBtnFranchise.addEventListener('click', toggleModalFranchise);

  refs.openModalBtnAbout.addEventListener('click', toggleModalAbout);
  refs.closeModalBtnAbout.addEventListener('click', toggleModalAbout);

  function toggleModalHero() {
    document.body.classList.toggle('modal-open');
    refs.backdropHero.classList.toggle('is-hidden');
  }

  function toggleModalProduct() {
    document.body.classList.toggle('modal-open');
    refs.backdropProduct.classList.toggle('is-hidden');
  }

  function toggleModalLocations() {
    document.body.classList.toggle('modal-open');
    refs.backdropLocations.classList.toggle('is-hidden');
  }

  function toggleModalFranchise() {
    document.body.classList.toggle('modal-open');
    refs.backdropFranchise.classList.toggle('is-hidden');
  }

  function toggleModalAbout() {
    document.body.classList.toggle('modal-open');
    refs.backdropAbout.classList.toggle('is-hidden');
  }
})();
