$(function() {
//	var bannerSwiper = new Swiper('.banner-swiper',{
//		pagination: {
//		   el: '.swiper-pagination',
//		},
//		autoplay: 3000,
//		loop: true,
//		autoplayDisableOnInteraction: false
//	});
	

    $(".play").click(function() {
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

//  $('.menu .item a.active').parents('li').addClass('active').siblings().removeClass('active');
	var img_flag = true;
	$('.btn-menu').on('click', function() {
        if (img_flag) {
            $('.menu').animate({ right: "0.1rem" }, '100');
            $('.bg').show();
			img_flag = false;
			$(".btn-menu .open").css({"display":"none"});
			$(".btn-menu .close").css({"display":"block"});

        } else {
            $('.menu').animate({ right: '-100%' }, '100');
            $('.bg').hide();
            img_flag = true;
			$(".btn-menu .open").css({"display":"block"});
			$(".btn-menu .close").css({"display":"none"});
        }
    });
    $('.bg').on('click', function() {
        $('.menu').animate({ right: '-100%' }, '100');
        $('.bg').hide();
        img_flag = true;
		$(".btn-menu .open").css({"display":"block"});
		$(".btn-menu .close").css({"display":"none"});
    })
    
    
    $('.menu .title').on('click',function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
//		$(this).siblings().css({"display":"block"});
//		$(this).parent().siblings().children(".item").css({"display":"none"});
	})

//
// 	$('.backTop').click(function() {
//      var scrollTop = $(window).scrollTop();
//      $("html,body").animate({ scrollTop: 0 }, 600);
//  });
//
//	
//	
//	
	$(".menu .active .item a").on("click",function(){
		$(this).addClass("on").siblings().removeClass("on")
	})
	

})
