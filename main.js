import * as bootstrap from 'bootstrap';
// import { Modal } from 'bootstrap';

import './assets/scss/all.scss';

document.addEventListener('DOMContentLoaded', () => {
  
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

});