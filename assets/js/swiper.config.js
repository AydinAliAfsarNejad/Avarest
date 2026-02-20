// Browser-friendly Swiper initialization (uses global `Swiper` from swiper.js included in HTML)
document.addEventListener('DOMContentLoaded', function () {
  if (typeof Swiper === 'undefined') {
    console.warn('Swiper is not loaded. Make sure ./assets/Swiper/swiper.js is included before this script.');
    return;
  }

  const mySwiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
