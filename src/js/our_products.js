
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Responsive breakpoints
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 18,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },
  },
});
