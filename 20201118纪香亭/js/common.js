$(function () {
  var bannerSwiper = new Swiper('.banner-swiper', {
    autoplay: true,
    pagination: {
      el: '.banner-pagination',
    },
    effect: 'coverflow',
    autoplay: true,
    loop: true,
    autoplayDisableOnInteraction: false,
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
      $('.menu').animate({ right: 0 }, '100');
      $('.bg').show();
      img_flag = false;

    } else {
      $('.menu').animate({ right: '-100%' }, '100');
      $('.bg').hide();
      img_flag = true;
    }
  });
  $('.bg').on('click', function () {
    $('.menu').animate({ right: '-100%' }, '100');
    $('.bg').hide();
    $(".header").removeClass("menu-open")
    img_flag = true;
  })


  $('.menu .title').on('click', function () {
    $(this).parent().addClass('active').siblings().removeClass('active');
  })

  $(".menu .active .item a").on("click", function () {
    $('.menu').animate({ right: '-100%' }, '100');
    $('.bg').hide();
    $(".header").removeClass("menu-open")
    img_flag = true;
    $(this).addClass("on").siblings().removeClass("on");
  })

  $(".btn-menu").click(function () {
    $(".header").toggleClass("menu-open")
  })
})
