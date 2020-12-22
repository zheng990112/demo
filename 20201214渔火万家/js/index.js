$(document).ready(function () {
  $('#fullpage').fullpage({
    navigation: true,
    // scrollBar: true,
    navigationPosition: screenLeft,
    anchors: ['page0', 'page1', 'page2', 'page3', 'page4', 'page6', 'page7', 'page8', 'page9'],
    // afterRender:function(index,nextIndex){
    // 	console.log(index.index)
    // },
    onLeave: function (index, nextIndex, direction) {

      if (nextIndex.index == 1) {
        $('.page1 .fl-lt').addClass('animated bounceInLeft');
        $('.page1 .fl-rt').addClass('animated bounceInRight');
      } else if (nextIndex.index == 2) {
        $('.page2 .page_main').addClass('animated rotateIn')
      } else if (nextIndex.index == 3) {
        $('.page3 .fl-lt').addClass('animated bounceInLeft');
        $('.page3 .fl-rt').addClass('animated bounceInRight');
      } else if (nextIndex.index == 4) {
        $('.page4 .fl-lt').addClass('animated bounceInLeft');
        $('.page4 .fl-rt').addClass('animated rotateIn');
      } else if (nextIndex.index == 5) {
        $('.page6 .page_box').addClass('animated rotateIn');
        $('.page6 .fl-rt').addClass('animated bounceInRight');
      } else if (nextIndex.index == 6) {
        $('.page7 .page_main').addClass('animated rotateInDownLeft');
      } else if (nextIndex.index == 7) {
        $('.page8 .page8_swiper').addClass('animated rotateInDownLeft');
        $('.page8 .news').addClass('animated rotateInUpLeft');
      } else if (nextIndex.index == 8) {
        $('.page9 .page_main').addClass('animated rotateIn');
      }
      if (index.index == 1) {
        $('.page1 .fl-lt').removeClass('animated bounceInLeft');
        $('.page1 .fl-rt').removeClass('animated bounceInRight');
      } else if (index.index == 2) {
        $('.page2 .page_main').removeClass('animated rotateIn')
      } else if (index.index == 3) {
        $('.page3 .fl-lt').removeClass('animated bounceInLeft');
        $('.page3 .fl-rt').removeClass('animated bounceInRight');
      } else if (index.index == 4) {
        $('.page4 .fl-lt').removeClass('animated bounceInLeft');
        $('.page4 .fl-rt').removeClass('animated rotateIn');
      } else if (index.index == 5) {
        $('.page6 .page_box').removeClass('animated rotateIn');
        $('.page6 .fl-rt').removeClass('animated bounceInRight');
      } else if (index.index == 6) {
        $('.page7 .page_main').removeClass('animated rotateInDownLeft');
      } else if (index.index == 7) {
        $('.page8 .page8_swiper').removeClass('animated rotateInDownLeft');
        $('.page8 .news').removeClass('animated rotateInUpLeft');
      } else if (index.index == 8) {
        $('.page9 .page_main').removeClass('animated rotateIn');
      }
    }
  });
});

$(function () {
  $("#fp-nav").css("margin", "0");
});

let swiper = new Swiper('.page8-swiper', {
  loop: true, // 循环模式选项
  autoplay: true,
  pagination: {
    el: '.page8_swiper .swiper-pagination',
    clickable: true,
  },
});
