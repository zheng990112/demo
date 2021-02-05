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
      $('.navR').fadeIn();
    } else {
      $('.backTop').fadeOut();
      $('.navR').fadeOut();
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


  $(".menu ul li").on("mouseenter", function () {
    let index = $(this).index();
    $(".menu ul li").eq(index).children(".item").slideDown();
  })
  $(".menu ul li").on("mouseleave", function () {
    let index = $(this).index();
    $(".menu ul li").eq(index).children(".item").slideUp();
  })


  $(".header_nav ul li").on("mouseenter", function () {
    let index = $(this).index();
    $(".header_nav ul li").eq(index).children(".item").slideDown();
  })
  $(".header_nav ul li").on("mouseleave", function () {
    let index = $(this).index();
    $(".header_nav ul li").eq(index).children(".item").slideUp();
  })



  // $(".nav a").each(function () {
  //   let text = $(this).text().trim();
  //   let txt1 = text.substring(0, 2);
  //   let txt2 = text.substring(2);
  //   $(this).empty().append(txt1 + '</br>' + txt2);
  // })

  // let bl = document.documentElement.clientWidth / 19.2;
  // $(".content").css("minHeight",$(window).height() - 1.3 *bl +"px")

  let sectionW0 = $(".section-title").width();
  let sectionW1 = $(".section-title .p1").width();
  let sectionW2 = $(".section-title .p2").width();
  $(".section-title .solid").width(sectionW0 - sectionW1 - sectionW2);
})
