(()=>{const o=document.querySelector("[data-menu-button]"),e=document.querySelector("[data-menu]"),t=document.querySelector("[data-logo]");o.addEventListener("click",(()=>{const d="true"===o.getAttribute("aria-expanded")||!1;o.classList.toggle("is-open"),o.setAttribute("aria-expanded",!d),t.classList.toggle("indent"),e.classList.toggle("is-open")}))})(),(()=>{const o={openModalBtnHero:document.querySelector("[data-modal-open-hero]"),closeModalBtnHero:document.querySelector("[data-modal-close-hero]"),backdropHero:document.querySelector("[data-backdrop-hero]"),openModalBtnProduct:document.querySelector("[data-modal-open-product]"),closeModalBtnProduct:document.querySelector("[data-modal-close-product]"),backdropProduct:document.querySelector("[data-backdrop-product]"),openModalBtnLocations:document.querySelector("[data-modal-open-locations]"),closeModalBtnLocations:document.querySelector("[data-modal-close-locations]"),backdropLocations:document.querySelector("[data-backdrop-locations]"),openModalBtnAbout:document.querySelector("[data-modal-open-about]"),closeModalBtnAbout:document.querySelector("[data-modal-close-about]"),backdropAbout:document.querySelector("[data-backdrop-about]"),openModalBtnFranchise:document.querySelector("[data-modal-open-franchise]"),closeModalBtnFranchise:document.querySelector("[data-modal-close-franchise]"),backdropFranchise:document.querySelector("[data-backdrop-franchise]")};function e(){document.body.classList.toggle("modal-open"),o.backdropHero.classList.toggle("is-hidden")}function t(){document.body.classList.toggle("modal-open"),o.backdropProduct.classList.toggle("is-hidden")}function d(){document.body.classList.toggle("modal-open"),o.backdropAbout.classList.toggle("is-hidden")}function c(){document.body.classList.toggle("modal-open"),o.backdropFranchise.classList.toggle("is-hidden")}o.openModalBtnHero.addEventListener("click",e),o.closeModalBtnHero.addEventListener("click",e),o.openModalBtnProduct.addEventListener("click",t),o.closeModalBtnProduct.addEventListener("click",t),o.openModalBtnLocations.addEventListener("click",toggleModalLocations),o.closeModalBtnLocations.addEventListener("click",toggleModalLocations),o.openModalBtnAbout.addEventListener("click",d),o.closeModalBtnAbout.addEventListener("click",d),o.openModalBtnFranchise.addEventListener("click",c),o.closeModalBtnFranchise.addEventListener("click",c)})();
//# sourceMappingURL=index.8df2fe6d.js.map
