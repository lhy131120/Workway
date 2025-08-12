import * as bootstrap from 'bootstrap';
// import { Modal } from 'bootstrap';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import './assets/scss/all.scss';

document.addEventListener('DOMContentLoaded', () => {

  if (document.querySelector('#changePasswordModal')) {
    const changePassWordBtn = document.querySelector("#changePassword");
    const changePassWordCloseBtn = document.querySelector("#changePasswordModal .btn-close");
    const changePassWordModal = new bootstrap.Modal('#changePasswordModal', {
      backdrop: 'static',
      focus: true,
      keyboard: false,
    });

    changePassWordBtn.addEventListener("click", e => {
      changePassWordModal.show();
    })

    changePassWordCloseBtn.addEventListener('click', e => changePassWordModal.hide())
  }


  document.addEventListener('click', e => {
    const item = e.target.closest('.dropdown-item');
    if (item) {
      e.preventDefault();
      const selectedOption = item.getAttribute('data-option');
      const dropdownButton = item.closest('.dropdown').querySelector('.dropdown-toggle');
      if (dropdownButton) {
        dropdownButton.textContent = selectedOption;
      }
    }
  });

  // if (document.querySelector("#home-story")) {
  //   const swiper = new Swiper("#home-story .swiper", {
  //     slidesPerView: 1.05,
  //     spaceBetween: 16,
  //     breakpoints: {
  //       992: {
  //         slidesPerView: "auto",
  //         spaceBetween: 24
  //       }
  //     }
  //   })
  // }

})