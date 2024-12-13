var swiper = new Swiper(".mySlide01", {
  // autoplay:{
  //   delay:1000, //시간설정
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    type: 'bullets',
  },
});

var swiper = new Swiper(".mySwiper02", {
  pagination: {
    el: ".swiper-pagination",
  },
});
var swiper = new Swiper(".mySwiper03", {
  slidesPerView: 6,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});