$(function () {
  var bannerSwiper = new Swiper('.banner-swiper', {
    pagination: {
      el: '.banner-pagination',
    },
    // effect: 'coverflow',
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
  $('.menu .menuTitle').on('click', function () {
    if (img_flag) {
      $(this).addClass("on")
      $('.menu ul').animate({ top: '0.2rem' }, '100');
      $('.bg').show();
      img_flag = false;
    } else {
      $('.menu ul').animate({ top: '-6rem' }, '100');
      $('.bg').hide();
      $(this).removeClass("on")
      img_flag = true;
    }
  });
  $('.bg').on('click', function () {
    $('.menu ul').animate({ top: '-6rem' }, '100');
    $('.bg').hide();
    $('.menu .menuTitle').removeClass("on")
    img_flag = true;
  })
  $(".main").css("minHeight", $(window).height())
  // $(".main").css("minHeight", $(window).height())
  // if ($(".main").height()<=$(window).height()) {
  //   window.ontouchmove = function (e) {
  //     e.preventDefault && e.preventDefault();
  //     e.returnValue = false;
  //     e.stopPropagation && e.stopPropagation();
  //     return false;
  //   }
  // }
})
