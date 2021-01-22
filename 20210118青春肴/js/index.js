$(document).ready(function () {
  $('#fullpage').fullpage({
    navigation: true,
    // scrollBar: true,
    navigationPosition: screenLeft,
    anchors: ['page0', 'page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10', 'page11'],
    afterRender: function (index, nextIndex) {
      if (index.index == 7) {
        $(".footer").show();
        $(".section-footer").hide();
      } else {
        $(".footer").hide();
        $(".section-footer").show();
      }
    },
    onLeave: function (index, nextIndex, direction) {
      if (nextIndex.index == 7) {
        $(".footer").show();
        $(".section-footer").hide();
      } else {
        $(".footer").hide();
        $(".section-footer").show();
      }
      if (nextIndex.index == 1) {
        $('.page1 .page_box').addClass('animated slideInLeft');
        $('.page1 .vedio-box').addClass('animated bounceIn');
      } else if (nextIndex.index == 2) {
        $(".page2 .img1").addClass('animated rotateIn');
        $(".page2 .pic1").addClass('animated rotateInDownLeft');
        $(".page2 .pic2").addClass('animated rotateInDownLeft');
        $(".page2 .pic3").addClass('animated rotateInDownLeft');
      } else if (nextIndex.index == 3) {
        $(".page3 .pic").addClass('animated rotateIn');
        $(".page3 .page_center").addClass('animated rotateInDownLeft');
        $(".page3 .swiper").addClass('animated fadeInUp');
      } else if (nextIndex.index == 4) {
        $(".page4 .pic_box").addClass('animated slideInLeft');
        $(".page4 .list_box").addClass('animated slideInRight');
      } else if (nextIndex.index == 5) {
        $(".page5 .first_img1").addClass('animated rotateInDownLeft');
        $(".page5 .first_img2").addClass('animated rotateInDownLeft');
        $(".page5 ul").addClass('animated rotateInDownRight');
      } else if (nextIndex.index == 6) {
        $(".page6 .listStr").addClass('animated rotateIn');
        $(".page6 .page_main>div").addClass('animated rotateIn');
      } else if (nextIndex.index == 7) {
        $(".page7 .news").addClass('animated slideInDown');
        $(".page7 .page-box").addClass('animated slideInDown');
      }


      if (index.index == 1) {
        $('.page1 .page_box').removeClass('animated slideInLeft');
        $('.page1 .vedio-box').removeClass('animated bounceIn');
      } else if (index.index == 2) {
        $(".page2 .img1").removeClass('animated rotateIn');
        $(".page2 .pic1").removeClass('animated rotateInDownLeft');
        $(".page2 .pic2").removeClass('animated rotateInDownLeft');
        $(".page2 .pic3").removeClass('animated rotateInDownLeft');
      } else if (index.index == 3) {
        $(".page3 .pic").removeClass('animated rotateIn');
        $(".page3 .page_center").removeClass('animated rotateInDownLeft');
        $(".page3 .swiper").removeClass('animated fadeInUp');
      } else if (index.index == 4) {
        $(".page4 .pic_box").removeClass('animated slideInLeft');
        $(".page4 .list_box").removeClass('animated slideInRight');
      } else if (index.index == 5) {
        $(".page5 .first_img1").removeClass('animated rotateInDownLeft');
        $(".page5 .first_img2").removeClass('animated rotateInDownLeft');
        $(".page5 ul").removeClass('animated rotateInDownRight');
      } else if (index.index == 6) {
        $(".page6 .listStr").removeClass('animated rotateIn');
        $(".page6 .page_main>div").removeClass('animated rotateIn');
      } else if (index.index == 7) {
        $(".page7 .news").removeClass('animated slideInDown');
        $(".page7 .page-box").removeClass('animated slideInDown');
      }

    }
  });
});


let sj_swiper = new Swiper('.page3_swiper .swiper-container', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  // centeredSlides: true,
  navigation: {
    nextEl: '.page3_button-btn .swiper-button-next',
    prevEl: '.page3_button-btn .swiper-button-prev',
  },
})

