$(function () {
  var mySwiper = new Swiper('.container', {
    initialSlide: 0,
    // loop: true,
    direction: 'horizontal',
    direction: 'vertical',//竖着切换
    // navigation: {
    // 	nextEl: '.swiper-button-next',
    // 	prevEl: '.swiper-button-prev',
    // },
    on: {
      init: function () {
        //Swiper初始化了
        swiperAnimateCache(this); //隐藏动画元素
        swiperAnimate(this); //初始化完成开始动画
      },
      slideChangeTransitionStart: function () {
        //当页面不在视频这一屏是暂停播放
        if (this.activeIndex != 1) {
          $('video')[0].pause();
        }
        if (this.activeIndex == 1) {
          $(".page2 .news").addClass('animated slideInLeft');
          $(".page2 ul").addClass('animated slideInRight');
          $('.page2 .vedio-box').addClass('animated fadeInUpBig');
        } else {
          $(".page2 .news").removeClass('animated slideInLeft');
          $(".page2 ul").removeClass('animated slideInRight');
          $('.page2 .vedio-box').removeClass('animated fadeInUpBig');
        }
        if (this.activeIndex == 2) {
          $('.page3 .page-title').addClass('animated rotateIn');
          $('.page3 ul').addClass('animated rotateInDownLeft');
        } else {
          $('.page3 .page-title').removeClass('animated rotateIn');
          $('.page3 ul').removeClass('animated rotateInDownLeft');
        }
        if (this.activeIndex == 3) {
          $('.page4 .page-title').addClass('animated rotateIn');
          $('.page4 ul').addClass('animated fadeInUpBig');
        } else {
          $('.page4 .page-title').removeClass('animated rotateIn');
          $('.page4 ul').removeClass('animated fadeInUpBig');
        }
        if (this.activeIndex == 4) {
          $('.page5 .page-title').addClass('animated rotateIn');
          $('.page5 ul').addClass('animated fadeInUpBig');
        } else {
          $('.page5 .page-title').removeClass('animated rotateIn');
          $('.page5 ul').removeClass('animated fadeInUpBig');
        }
        if (this.activeIndex == 5) {
          $('.page6 .page-title').addClass('animated rotateIn');
          $('.page6 .pic').addClass('animated rotateInDownLeft');
          $('.page6 ul').addClass('animated rotateInDownRight');
        } else {
          $('.page6 .page-title').removeClass('animated rotateIn');
          $('.page6 .pic').removeClass('animated rotateInDownLeft');
          $('.page6 ul').removeClass('animated rotateInDownRight');
        }
        if (this.activeIndex == 6) {
          $('.page7 .page-title').addClass('animated rotateIn');
          $('.page7 ul').addClass('animated slideInRight');
        } else {
          $('.page7 .page-title').removeClass('animated rotateIn');
          $('.page7 ul').removeClass('animated slideInRight');
        }
        if (this.activeIndex == 7) {
          $('.page8 .page-title').addClass('animated slideInLeft');
          $('.page8 .form_box').addClass('animated rotateIn');
          $('.page8 .img1').addClass('animated slideInRight');
          $('.page8 .address').addClass('animated slideInRight');
        } else {
          $('.page8 .page-title').removeClass('animated slideInLeft');
          $('.page8 .form_box').removeClass('animated rotateIn');
          $('.page8 .img1').removeClass('animated slideInRight');
          $('.page8 .address').removeClass('animated slideInRight');
        }
      },
      slideChangeTransitionEnd: function () {
        //console.log(this.activeIndex)
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画

      },
    },

  });
})