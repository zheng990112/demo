$(document).ready(function () {
  $('#fullpage').fullpage({
    navigation: false,
    // scrollBar: true,
    // navigationPosition: screenLeft,
    anchors: ['page0', 'page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10'],
    afterRender: function (index, nextIndex) {
      if (index.index == 2 || index.index == 5 || index.index == 6 || index.index == 7 || index.index == 8) {
        $(".header .logo img").attr("src", "../img/logo-on.png");
        $(".header .solid img").attr("src", "../img/solid-on.png");
        $(".header").css("color", "#919292");
        $(".header .tel").addClass('on');
        $(".nav img:nth-child(2)").addClass('on').siblings().removeClass('on');
      }
      if (index.index == 3 || index.index == 4 || index.index == 6 || index.index == 9 || index.index == 10) {
        $(".nav img:first-child").addClass('on').siblings().removeClass('on');
      }
      if (index.index == 10) {
        $('.header').css("display", "none")
      } else {
        $('.header').css("display", "flex")
      }
    },
    onLeave: function (index, nextIndex, direction) {
      if (nextIndex.index == 2 || nextIndex.index == 5 || nextIndex.index == 6 || nextIndex.index == 7 || nextIndex.index == 8) {
        $(".header .logo img").attr("src", "../img/logo-on.png");
        $(".header .solid img").attr("src", "../img/solid-on.png");
        $(".header").css("color", "#919292");
        $(".header .tel").addClass('on');
        $(".nav img:nth-child(2)").addClass('on').siblings().removeClass('on');
      } else {
        $(".header .logo img").attr("src", "../img/logo.png");
        $(".header .solid img").attr("src", "../img/solid.png");
        $(".header").css("color", "#ffffff");
        $(".header .tel").removeClass('on');
        $(".nav img:first-child").addClass('on').siblings().removeClass('on');
      }
      if (nextIndex.index == 3 || nextIndex.index == 4 || nextIndex.index == 6 || nextIndex.index == 9 || nextIndex.index == 10) {
        $(".nav img:first-child").addClass('on').siblings().removeClass('on');
      } else {
        $(".nav img:nth-child(2)").addClass('on').siblings().removeClass('on');
      }
      if (nextIndex.index == 10) {
        $('.header').css("display", "none")
      } else {
        $('.header').css("display", "flex")
      }

      if (nextIndex.index == 1) {
        $('.page1 .page-main').addClass('animated slideInRight');
      } else if (nextIndex.index == 2) {
        $('.page2 .str').addClass('animated slideInLeft');
        $('.page2 ul').addClass('animated slideInRight');
      } else if (nextIndex.index == 3) {
        $('.page3 .first-img').addClass('animated rotateIn');
        $('.page3 .page-box').addClass('animated rotateInDownRight');
      } else if (nextIndex.index == 4) {
        $('.page4 .page-main').addClass('animated rotateIn');
      }else if (nextIndex.index == 5) {
        $('.page5 .str').addClass('animated slideInLeft');
        $('.page5 .last-img').addClass('animated slideInRight');
      }else if (nextIndex.index == 6) {
        $('.page6 .first_img').addClass('animated rotateInDownLeft');
        $('.page6 .page_box').addClass('animated rotateInDownRight');
      }else if (nextIndex.index == 7) {
        $('.page7 .page-main').addClass('animated rotateIn');
      }else if (nextIndex.index == 8) {
        $('.page8 .page_title').addClass('animated rotateInDownLeft');
        $('.page8 .news').addClass('animated slideInRight');
      }else if (nextIndex.index == 9) {
        $('.page9 .from-box').addClass('animated fadeInUpBig');
      }else if (nextIndex.index == 10) {
        $('.page10 .foot-t').addClass('animated fadeInUpBig');
      }


      if (index.index == 1) {
        $('.page1 .page-main').removeClass('animated slideInRight');
      } else if (index.index == 2) {
        $('.page2 .str').removeClass('animated slideInLeft');
        $('.page2 ul').removeClass('animated slideInRight');
      } else if (index.index == 3) {
        $('.page3 .first-img').removeClass('animated rotateIn');
        $('.page3 .page-box').removeClass('animated rotateInDownRight');
      } else if (index.index == 4) {
        $('.page4 .page-main').removeClass('animated rotateIn');
      }else if (index.index == 5) {
        $('.page5 .str').removeClass('animated slideInLeft');
        $('.page5 .last-img').removeClass('animated slideInRight');
      }else if (index.index == 6) {
        $('.page6 .first_img').removeClass('animated rotateInDownLeft');
        $('.page6 .page_box').removeClass('animated rotateInDownRight');
      }else if (index.index == 7) {
        $('.page7 .page-main').removeClass('animated rotateIn');
      }else if (index.index == 8) {
        $('.page8 .page_title').removeClass('animated rotateInDownLeft');
        $('.page8 .news').removeClass('animated slideInRight');
      }else if (index.index == 9) {
        $('.page9 .from-box').removeClass('animated fadeInUpBig');
      }else if (index.index == 10) {
        $('.page10 .foot-t').removeClass('animated fadeInUpBig');
      }
      
    }
  });
});



