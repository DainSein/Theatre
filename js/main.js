"use strict";

var burger = document.querySelector('.burger'),
    menu = document.querySelector('.header__nav'),
    close = document.querySelector('.nav__close'),
    overlay = document.querySelector('.overlay'),
    links = document.querySelectorAll('.nav__link');

function eventHandlerBurger() {
  menu.classList.toggle('open');
  overlay.classList.toggle('overlay--open');
  burger.classList.toggle('burger--active');

  if (burger.classList.contains('burger--active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

burger.addEventListener('click', function () {
  eventHandlerBurger();
});
close.addEventListener('click', function () {
  eventHandlerBurger();
});
overlay.addEventListener('click', function () {
  eventHandlerBurger();
});
links.forEach(function (link) {
  link.addEventListener('click', function () {
    eventHandlerBurger();
  });
});
"use strict";

var swiperHero = new Swiper('.hero-container', {
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  noSwipingClass: 'hero-container',
  effect: 'cube',
  cubeEffect: {
    slideShadows: false
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  autoplay: {
    delay: 5000
  },
  breakpoints: {
    320: {
      enabled: false
    },
    993: {
      enabled: true
    }
  }
});
"use strict";

var swiper = new Swiper('.perfomance-container', {
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  grabCursor: true,
  slidesOffsetBefore: 128,
  breakpoints: {
    279: {
      slidesOffsetBefore: 0
    },
    992: {
      slidesOffsetBefore: 128
    }
  }
});
// import "./vendor/swiper-bundle.min";
// import "./components/slider-perfomance";
"use strict";
//# sourceMappingURL=main.js.map
