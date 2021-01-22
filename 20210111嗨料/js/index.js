$(document).ready(function () {
  $('#fullpage').fullpage({
    navigation: true,
    // scrollBar: true,
    navigationPosition: screenLeft,
    anchors: ['page0', 'page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10', 'page11'],
    afterRender: function (index, nextIndex) {
      if (index.index == 0) {
        $(".footer").hide()
      } else {
        $(".footer").show()
      }
    },
    onLeave: function (index, nextIndex, direction) {
      if (nextIndex.index == 0) {
        $(".footer").hide()
      } else {
        $(".footer").show()
      }
    }
  });



});
let page2_swiper = new Swiper('.page2_swiper .swiper-container', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 16,
  // centeredSlides: true,
  navigation: {
    nextEl: '.page2_swiper-btn .swiper-button-next',
    prevEl: '.page2_swiper-btn .swiper-button-prev',
  },
})

let page8_swiper = new Swiper('.page8_swiper .swiper-container', {
  // loop: true,
  pagination: {
    clickable: true,
    el: '.page8-swiper .swiper-pagination',
  },
})

$(function () {
  $(".page8_swiper .swiper-pagination-bullet").each(function (index) {
    index++;
    $(this).text("0"+index);
  })
})

let strHeight = 0;
$(".page6 ul .str").each(function () {
  let height = $(this).height();
  strHeight = strHeight > height ? strHeight : height;
});
$(".page6 ul .str").height(strHeight);

let p2Height = 0;
$(".page7 ul .p2").each(function () {
  let height = $(this).height();
  p2Height = p2Height > height ? p2Height : height;
});
$(".page7 ul .p2").height(p2Height);