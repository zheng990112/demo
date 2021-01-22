$(function() {

  // 公共轮播图
  let pagehw5_swiper = new Swiper('.pagehw5_swiper .swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 16,
    // centeredSlides: true,
    navigation: {
      nextEl: '.pagehw5_swiper-btn .swiper-button-next',
      prevEl: '.pagehw5_swiper-btn .swiper-button-prev',
    },
  })

})