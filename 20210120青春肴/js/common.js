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
      $('.menu').animate({ right: 0 }, '100');
      $(".header .btn-menu span").addClass("active");
      $('.bg').show();
      img_flag = false;
    } else {
      $('.menu').animate({ right: '-100%' }, '100');
      $('.bg').hide();
      $(".header .btn-menu span").removeClass("active");
      img_flag = true;
    }
    $(".header").toggleClass("menu-open");
  });

  $('.bg').on('click', function () {
    $('.menu').animate({ right: '-100%' }, '100');
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
    $('.menu').animate({ right: '-100%' }, '100');
    $('.bg').hide();
    $(".header").removeClass("menu-open");
    $(".header .btn-menu span").removeClass("active");
    img_flag = true;
  })

  $(".menu .active .item a").on("click", function () {
    $('.menu').animate({ right: '-100%' }, '100');
    $('.bg').hide();
    $(".header").removeClass("menu-open");
    $(".header .btn-menu span").removeClass("active");
    img_flag = true;
    $(this).addClass("on").siblings().removeClass("on");
  })

  // 自定义样式
  // 最小高度
  $(".content").css("minHeight", $(window).height());
})


$(function () {
  // 无法在网址使用
  $(".menu li.active .item a").removeClass("on");
  let str = window.location.pathname;
  let arr = str.split('/');
  let len = arr.length;
  let i = arr[len - 1].lastIndexOf(".");
  let url = arr[len - 1].substr(0, i);
  // 获取id后面信息
  // let url = window.location.hash;
  // url = url.substr(1);

  $(".menu li.active").addClass(url).siblings().removeClass(url);
  setInterval(function () {
    let scrollTop = $(document).scrollTop() + 110;
    if (url == "pp") {
      if (scrollTop < $("#point2").offset().top) {
        $(".menu li.pp .item a").eq(0).addClass("on").siblings().removeClass("on");
      } else if (scrollTop < $("#point3").offset().top) {
        $(".menu li.pp .item a").eq(1).addClass("on").siblings().removeClass("on");
      } else if (scrollTop < $("#point4").offset().top) {
        $(".menu li.pp .item a").eq(2).addClass("on").siblings().removeClass("on");
      } else {
        $(".menu li.pp .item a").eq(3).addClass("on").siblings().removeClass("on");
      }
    } else if (url == "cp") {
      if (scrollTop < $("#point2").offset().top) {
        $(".menu ul li.cp .item a").eq(0).addClass("on").siblings().removeClass("on");
      } else if (scrollTop < $("#point3").offset().top) {
        $(".menu ul li.cp .item a").eq(1).addClass("on").siblings().removeClass("on");
      } else {
        $(".menu ul li.cp .item a").eq(2).addClass("on").siblings().removeClass("on");
      }
    } else if (url == "ld") {
      if (scrollTop < $("#point2").offset().top) {
        $(".menu ul li.ld .item a").eq(0).addClass("on").siblings().removeClass("on");
      } else if (scrollTop < $("#point3").offset().top) {
        $(".menu ul li.ld .item a").eq(1).addClass("on").siblings().removeClass("on");
      } else if (scrollTop < $("#point4").offset().top) {
        $(".menu ul li.ld .item a").eq(2).addClass("on").siblings().removeClass("on");
      } else if (scrollTop < $("#point5").offset().top) {
        $(".menu ul li.ld .item a").eq(3).addClass("on").siblings().removeClass("on");
      } else {
        $(".menu ul li.ld .item a").eq(4).addClass("on").siblings().removeClass("on");
      }
    } else if (url == "md") {
      if (scrollTop < $("#point2").offset().top) {
        $(".menu ul li.md .item a").eq(0).addClass("on").siblings().removeClass("on");
      } else if (scrollTop < $("#point3").offset().top) {
        $(".menu ul li.md .item a").eq(1).addClass("on").siblings().removeClass("on");
      } else {
        $(".menu ul li.md .item a").eq(2).addClass("on").siblings().removeClass("on");
      }
    } else if (url == "hz") {
      if (scrollTop < $("#point2").offset().top) {
        $(".menu ul li.hz .item a").eq(0).addClass("on").siblings().removeClass("on");
      } else if (scrollTop < $("#point3").offset().top) {
        $(".menu ul li.hz .item a").eq(1).addClass("on").siblings().removeClass("on");
      } else if (scrollTop < $("#point4").offset().top) {
        $(".menu ul li.hz .item a").eq(2).addClass("on").siblings().removeClass("on");
      } else if (scrollTop < $("#point5").offset().top) {
        $(".menu ul li.hz .item a").eq(3).addClass("on").siblings().removeClass("on");
      } else {
        $(".menu ul li.hz .item a").eq(4).addClass("on").siblings().removeClass("on");
      }
    }
  }, 100)
})