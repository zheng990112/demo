$(document).ready(function () {
  $('#fullpage').fullpage({
    navigation: false,
    // scrollBar: true,
    // navigationPosition: screenLeft,
    anchors: ['page0', 'page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
    afterRender: function (index, nextIndex) {
      if (index.index == 8) {
        $(".footer").show();
        $(".section-footer").hide();
      } else {
        $(".footer").hide();
        $(".section-footer").show();
      }


    },
    onLeave: function (index, nextIndex, direction) {
      if (nextIndex.index == 8) {
        $(".footer").show();
        $(".section-footer").hide();
      } else {
        $(".footer").hide();
        $(".section-footer").show();
      }
      $('.section .section-title').removeClass('animated fadeInDownBig');
      $('.section .section-title').eq(nextIndex.index - 1).addClass('animated fadeInDownBig');

      // $('.section .section-title').addClass('animated fadeInUpBig');

      if (nextIndex.index == 1) {
        $('.page1 .str').addClass('animated rotateInDownLeft');
        $('.page1 .vedio-box').addClass('animated rotateInDownRight');
      } else if (nextIndex.index == 2) {
        $(".page2 .page-box").addClass('animated rotateInDownLeft');
        $(".page2 .swiper").addClass('animated fadeInUp');
      } else if (nextIndex.index == 3) {
        $(".page3 .page-box").addClass('animated rotateIn');
      } else if (nextIndex.index == 4) {
        $(".page4 .page-title").addClass('animated rotateIn');
        $('.page4 ul').addClass('animated slideInRight');
      } else if (nextIndex.index == 5) {
        $(".page5 .page-title").addClass('animated rotateInDownLeft');
        $('.page5 ul').addClass('animated fadeInUpBig');
      } else if (nextIndex.index == 6) {
        $(".page6 .page-box").addClass('animated rotateInDownLeft');
      } else if (nextIndex.index == 7) {
        $(".page7 .page-title").addClass('animated rotateIn');
        $('.page7 ul').addClass('animated rotateInDownRight');
      } else if (nextIndex.index == 8) {
        $(".page8 .page8-swiper").addClass('animated slideInLeft');
        $('.page8 ul').addClass('animated slideInRight');
      }

      if (index.index == 1) {
        $('.page1 .str').removeClass('animated rotateInDownLeft');
        $('.page1 .vedio-box').removeClass('animated rotateInDownRight');
      } else if (index.index == 2) {
        $(".page2 .page-box").removeClass('animated rotateInDownLeft');
        $(".page2 .swiper").removeClass('animated fadeInUp');
      } else if (index.index == 3) {
        $(".page3 .page-box").removeClass('animated rotateIn');
      } else if (index.index == 4) {
        $(".page4 .page-title").removeClass('animated rotateIn');
        $('.page4 ul').removeClass('animated slideInRight');
      } else if (index.index == 5) {
        $(".page5 .page-title").removeClass('animated rotateInDownLeft');
        $('.page5 ul').removeClass('animated fadeInUpBig');
      } else if (index.index == 6) {
        $(".page6 .page-box").removeClass('animated rotateInDownLeft');
      } else if (index.index == 7) {
        $(".page7 .page-title").removeClass('animated rotateIn');
        $('.page7 ul').removeClass('animated rotateInDownRight');
      } else if (index.index == 8) {
        $(".page8 .page8-swiper").removeClass('animated slideInLeft');
        $('.page8 ul').removeClass('animated slideInRight');
      }

    }
  });
});


let page2_swiper = new Swiper('.page2_swiper .swiper-container', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 40,
  navigation: {
    nextEl: '.page2_button-btn .swiper-button-next',
    prevEl: '.page2_button-btn .swiper-button-prev',
  },
})
$(".page2_swiper .swiper-slide img").height($(".page2_swiper .swiper-slide").width())
$(".page2_button-btn").height($(".page2_swiper .swiper-slide").width())

let page8_swiper = new Swiper('.page8-swiper .swiper-container', {
  // autoplay: true,
  loop: true,
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: '.page8-swiper .swiper-pagination',
    clickable: true
  },
})



