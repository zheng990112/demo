let part1_swiper = new Swiper('.part1_swiper .swiper-container', {
  //loop: true,
  autoplayDisableOnInteraction: false,
  pagination: {
    clickable: true,
    el: '.part1-swiper .swiper-pagination',
  },
})
$(function () {
  $(".part1_swiper .swiper-pagination-bullet").each(function (index) {
    index++;
    $(this).text("0" + index);
  })
})