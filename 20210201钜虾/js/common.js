$(function () {
  var bannerSwiper = new Swiper('.banner-swiper',{
		pagination: {
		    el:'.banner-pagination',
		},
		autoplay:true,
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
    $(".btn-menu a").toggleClass("on")
    if (img_flag) {
      $('.menu').css('display', 'table');
      img_flag = false;
    } else {
      $('.menu').css('display', 'none');
      img_flag = true;
    }
  });
  $('.menu').on('click', function () {
    $(".btn-menu a").toggleClass("on")
    if (img_flag) {
      $('.menu').css('display', 'table');
      img_flag = false;
    } else {
      $('.menu').css('display', 'none');
      img_flag = true;
    }
  });
 
})
