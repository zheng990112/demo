$(function () {
  let index_banner = new Swiper('.banner', {
    autoplay: true,
    loop: true,
    // effect: 'flip',
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: '.index-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.banner .swiper-button-next',
      prevEl: '.banner .swiper-button-prev',
    },
  })

  //返回顶部
  var w_h = $(window).height();
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > w_h * 0.8) {
      $('.backTop').fadeIn();
      $('.r-nav').fadeIn();
      // $('.r-nav').css({ 'top': '50%' })
      // $('.backTop').css({ 'bottom': '200px' })
    } else {
      $('.backTop').fadeOut();
      $('.r-nav').fadeOut();
    };
  });

  $('.backTop').click(function () {
    var scrollTop = $(window).scrollTop();
    $("html,body").animate({ scrollTop: 0 }, 600);
  });

  $(".play").click(function () {
    var player = $(this).next()[0];
    if (player.pause) {
      player.play();
      $(this).prev().remove();
      $(this).css({ "display": "none" });
      $(this).next().attr("controls", "controls");
    } else {
      player.pause();
      $(this).css({ "display": "block" });
    }
  });
  var img_flag = true;


  $('.bg').click(function () {
    $('.nav').show();
    $('.modal-box').animate({ left: "-9.04rem" }, '100');
    $('.bg').hide();
    img_flag = true;
  });

  // $('.bg').on('click', function () {
  //   $('.menu').animate({ right: '-100%' }, '100');
  //   $('.bg').hide();
  //   img_flag = true;
  //   $(".btn-menu .open").css({ "display": "block" });
  //   $(".btn-menu .close").css({ "display": "none" });
  // })

  // window.onscroll = function () {
  //   if(document.documentElement.scrollTop >0){
  //     $(".header").css("display","none")
  //   }else{
  //     $(".header").css("display","flex")
  //   }
  // }





})
