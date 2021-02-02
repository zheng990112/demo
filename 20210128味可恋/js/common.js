$(function () {
  var bannerSwiper = new Swiper('.banner .swiper-container', {
    autoplay: true,
    // effect: 'coverflow',
    loop: true,
    autoplayDisableOnInteraction: false,
    pagination: {
      el: '.banner-pagination',
    },
  });


  $(".play").click(function () {
    var player = $(this).next()[0];
    if (player.pause) {
      player.play();
      $(this).prev().remove();
      $(this).css({
        "display": "none"
      });
      $(this).next().attr("controls", "controls");
    } else {
      player.pause();
      $(this).css({
        "display": "block"
      });
    }
  });

  var img_flag = true;
  $('.btn-menu').on('click', function () {
    if (img_flag) {
      $('.menu').animate({ top: 1.1 + "rem" }, '100');
      $(".header .btn-menu span").addClass("active");
      $('.bg').show();
      img_flag = false;
    } else {
      $('.menu').animate({ top: '-110%' }, '100');
      $('.bg').hide();
      $(".header .btn-menu span").removeClass("active");
      img_flag = true;
    }
    $(".header").toggleClass("menu-open");
  });

  $('.bg').on('click', function () {
    $('.menu').animate({ top: '-110%' }, '100');
    $('.bg').hide();
    $(".header").removeClass("menu-open");
    $(".header .btn-menu span").removeClass("active");
    img_flag = true;
  })


  $('.menu .title').on('click', function () {
    $(this).parent().addClass('active').siblings().removeClass('active');
  })
  $('.menu .active .title').on('click', function () {
    $(this).parent().addClass('active').siblings().removeClass('active');
    $('.menu').animate({ top: '-110%' }, '100');
    $('.bg').hide();
    $(".header").removeClass("menu-open");
    $(".header .btn-menu span").removeClass("active");
    img_flag = true;
  })

  $(".menu .active .item a").on("click", function () {
    $('.menu').animate({ top: '-110%' }, '100');
    $('.bg').hide();
    $(".header").removeClass("menu-open");
    $(".header .btn-menu span").removeClass("active");
    img_flag = true;
    $(this).addClass("on").siblings().removeClass("on");
  })

  // 自定义样式
  // 最小高度
  //$(".content").css("minHeight", $(window).height());
})


