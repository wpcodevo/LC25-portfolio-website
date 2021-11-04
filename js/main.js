/* =========== Show Navbar =========== */
const navbar = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

window.addEventListener("scroll", () => {
  navbar.classList.remove("show");
});

/* =========== User Data =========== */

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

/* ========== Swiper =========== */
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

/* =========== Scroll Top =========== */
const scrollTop = document.querySelector(".scroll-top");

scrollTop.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", (e) => {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 300) {
    scrollTop.classList.add("show");
  } else {
    scrollTop.classList.remove("show");
  }
});

/* ========== Scroll Reveal ============ */
const scroll = ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 300,
  reset: true,
});

scroll.reveal(`.hero .col:last-child`, { delay: 600 });

scroll.reveal(
  `.about-1 .col:last-child h3,.about-1 .col:last-child p,
  .about-1 .col:last-child li`,
  {
    origin: "bottom",
    interval: 100,
  }
);

scroll.reveal(
  `.about-2 .col:last-child h3,.about-2 .col:last-child p,
  .about-2 .col:last-child li, .hero .col h1, .hero .col p,.hero .col .btn`,
  {
    origin: "top",
    interval: 100,
  }
);

scroll.reveal(
  `.about-1 .col:first-child img, .languages img, .testimonials .row`,
  {
    origin: "top",
  }
);

scroll.reveal(`.about-2 .col:first-child img`, { origin: "right" });

scroll.reveal(`.footer .col div,.footer .col p`, {
  origin: "top",
  interval: 100,
});
