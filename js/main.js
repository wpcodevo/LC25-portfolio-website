/* =========== Show Navbar =========== */
const navbar = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

const counters = [...document.querySelectorAll(".user-data .number")];
const speed = 5000; // change animation speed here

const start = () => {
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const inc = target / speed;
      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target + "+";
      }
    };
    updateCount();
  });
};

window.addEventListener(
  "scroll",
  () => {
    if (window.pageYOffset >= 250) {
      start();
    }
  },
  { passive: true }
);

/* Swiper */
const swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".custom-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".custom-button-prev",
    prevEl: ".custom-button-next",
  },
  breakpoints: {
    567: {
      slidesPerView: 2,
    },
    996: {
      slidesPerView: 3,
    },
  },
});
