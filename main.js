import * as bootstrap from "bootstrap";
// import { Modal } from 'bootstrap';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Swiper from "swiper/bundle";
import "swiper/css/bundle";

import "./assets/scss/all.scss";
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    offset: 0
  });
  AOS.refresh();

  // console.log(AOS)

  if (document.querySelectorAll(".show-password").length > 0) {
    const btns = document.querySelectorAll(".show-password");
    btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const parent = btn.closest(".password-input-wrap");
        const input = parent.querySelector("input");
        const type =
          input.getAttribute("type") === "password" ? "text" : "password";
        input.setAttribute("type", type);
      });
    });
  }

  // Login Form Event
  if (document.querySelector("#toggle-login")) {
    document.getElementById("btn-register").addEventListener("click", () => {
      document.getElementById("login").classList.add("d-none");
      document.getElementById("register").classList.remove("d-none");
    });
    document.getElementById("btn-login").addEventListener("click", () => {
      document.getElementById("register").classList.add("d-none");
      document.getElementById("login").classList.remove("d-none");
    });
  }

  if (document.querySelector("#loginBtn")) {
    const btn = document.querySelector("#loginBtn");
    const modal = new bootstrap.Modal("#loginModal", {
      backdrop: "static",
      focus: true,
      keyboard: false,
    });
    const closeBtn = document.querySelectorAll("#loginModal .btn-close");
    btn.addEventListener("click", (e) => modal.show());
    closeBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => modal.hide());
    });
  }

  document.querySelector("#loginModal").addEventListener("hidden.bs.modal", () => {
    document.getElementById("login").classList.remove("d-none");
    document.getElementById("register").classList.add("d-none");
  });


  // Personal Data 
  if (document.querySelector("#changePasswordModal")) {
    const changePassWordBtn = document.querySelector("#changePassword");
    const changePassWordCloseBtn = document.querySelector(
      "#changePasswordModal .btn-close"
    );
    const changePassWordModal = new bootstrap.Modal("#changePasswordModal", {
      backdrop: "static",
      focus: true,
      keyboard: false,
    });

    changePassWordBtn.addEventListener("click", (e) => {
      changePassWordModal.show();
    });

    changePassWordCloseBtn.addEventListener("click", (e) =>
      changePassWordModal.hide()
    );
  }

  document.addEventListener("click", (e) => {
    const item = e.target.closest(".dropdown-item");
    if (item) {
      e.preventDefault();
      const selectedOption = item.getAttribute("data-option");
      const dropdownButton = item
        .closest(".dropdown")
        .querySelector(".dropdown-toggle");
      if (dropdownButton) {
        dropdownButton.textContent = selectedOption;
      }
    }
  });

  if (document.querySelector("#home-story")) {
    const _div = document.querySelector("#home-story");
    const swiper = new Swiper("#home-story .swiper", {
      slidesPerView: "auto",
      spaceBetween: 16,
      loop: false,
      // autoplay: {
      //   delay: 10000,
      //   disableOnInteraction: true,
      // },
      breakpoints: {
        992: {
          spaceBetween: 24,
        },
      },
    });
  }

  if (document.querySelector("#home-service")) {
    const _div = document.querySelector("#home-service");
    const swiper = new Swiper("#home-service .swiper", {
      slidesPerView: 1.15,
      spaceBetween: 16,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      },
    });
  }

  if (document.querySelector("#about")) {
    const _div = document.querySelector("#about");
    const swiper = new Swiper("#about .swiper", {
      slidesPerView: 1.2,
      spaceBetween: 24,
      loop: false,
      // autoplay: {
      //   delay: 30000,
      //   disableOnInteraction: true,
      // },
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
    });
  }
});

