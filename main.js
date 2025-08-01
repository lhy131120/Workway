// import * as bootstrap from 'bootstrap';
import { Modal } from 'bootstrap';

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
});