import * as bootstrap from 'bootstrap';
// import { Modal } from 'bootstrap';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import './assets/scss/all.scss';

document.addEventListener('DOMContentLoaded', () => {

  if(document.querySelector("#loginBtn")) {
    const btn = document.querySelector("#loginBtn");
    const modal = new bootstrap.Modal("#loginModal", {
      backdrop: 'static',
      focus: true,
      keyboard: false
    });
    const closeBtn = document.querySelector("#loginModal .btn-close");
    modal.show();
    btn.addEventListener('click', e => modal.show())
    closeBtn.addEventListener('click', e => modal.hide())


  }

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
    const _div = document.querySelector("#home-story");
    const swiper = new Swiper("#home-story .swiper", {
      slidesPerView: 1.05,
      spaceBetween: 16,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: true
      },
      breakpoints: {
        992: {
          slidesPerView: 2.85,
          spaceBetween: 24
        }
      },
      on: {
        // init: setSwiperCardHeight(_div),
        // slideChange: setSwiperCardHeight(_div),
      }
    });
    // window.addEventListener('resize', setSwiperCardHeight(_div));
    // window.addEventListener('load', setSwiperCardHeight(_div));
  }

  if (document.querySelector("#home-service")) {
    const _div = document.querySelector("#home-service");
    const swiper = new Swiper("#home-service .swiper", {
      slidesPerView: 1.15,
      spaceBetween: 16,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 24
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 24
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 24
        }
      },
      on: {
        // init: setSwiperCardHeight(_div),
        // slideChange: setSwiperCardHeight(_div),
      } 
    })
    // window.addEventListener('resize', setSwiperCardHeight(_div));
    // window.addEventListener('load', setSwiperCardHeight(_div));
  }

  if (document.querySelector("#about")) {
		const _div = document.querySelector("#about");
		const swiper = new Swiper("#about .swiper", {
			slidesPerView: 1.2,
			spaceBetween: 24,
			loop: false,
			autoplay: {
				delay: 30000,
				disableOnInteraction: true,
			},
			breakpoints: {
				768: {
					slidesPerView: 2.8,
					spaceBetween: 24,
				},
				992: {
					slidesPerView: 3.8,
					spaceBetween: 24,
				},
				1200: {
					slidesPerView: 4.8,
					spaceBetween: 24,
				},
			},
			on: {
				// init: setSwiperCardHeight(_div),
				// slideChange: setSwiperCardHeight(_div),
			},
		});
		// window.addEventListener('resize', setSwiperCardHeight(_div));
		// window.addEventListener('load', setSwiperCardHeight(_div));
	}

  function setSwiperCardHeight(div) {
    // console.log(div)
    const slides = div.querySelectorAll('.swiper-slide > div');
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