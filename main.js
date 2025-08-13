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

  if (document.querySelector("#home-story")) {
    const swiper = new Swiper("#home-story .swiper", {
      slidesPerView: 1.05,
      spaceBetween: 16,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: true
      },
      breakpoints: {
        992: {
          slidesPerView: 2.85,
          spaceBetween: 24
        }
      },
      on: {
        init: setSwiperCardHeight(),
        slideChange: setSwiperCardHeight(),
      }
    });

    // 監聽窗口大小變化
    window.addEventListener('resize', setSwiperCardHeight);

    // 確保圖片加載完成後重新計算高度
    window.addEventListener('load', setSwiperCardHeight);
  }

  function setSwiperCardHeight() {
    const slides = document.querySelectorAll('.swiper-slide .card');
    let maxHeight = 0;

    // 重置高度以計算真實內容高度
    slides.forEach(slide => {
      slide.style.height = 'auto';
      const slideHeight = slide.offsetHeight;
      if (slideHeight > maxHeight) {
        maxHeight = slideHeight;
      }
    });

    // 將最大高度應用到所有卡片
    slides.forEach(slide => {
      slide.style.height = `${maxHeight}px`;
    });
  }

})