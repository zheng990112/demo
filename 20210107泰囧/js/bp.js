let bp_swiper = new Swiper('.bp-swiper', {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: '.bp_swiper-button .swiper-button-next',
    prevEl: '.bp_swiper-button .swiper-button-prev',
  },
});

$(".bp ul .p3").each(function () {
  let pWidth = document.documentElement.clientWidth / 7.5;
  if ($(this).height() / pWidth + "rem" > 0.36 + "rem") {
    $(this).css("textAlign", "left")
  }
})