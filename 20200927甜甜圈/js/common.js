$(function() {
	var bannerSwiper = new Swiper('.banner-swiper',{
		pagination: {
		    el:'.banner-pagination',
		},
		autoplay:true,
		loop: true,
		autoplayDisableOnInteraction: false,
	});
	

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
            $('.menu').animate({ top: '0' }, '100');
            $('.header').addClass("header-open");
            $('.bg').show();
			img_flag = false;
            $(".header .btn-menu .btn_img1").css("display","none");
            $(".header .btn-menu .btn_img2").css("display","block");
        } else {
            $('.menu').animate({ top: '-6rem' }, '100');
            $('.header').removeClass("header-open");
            $('.bg').hide();
            $(".header .btn-menu .btn_img1").css("display","block");
            $(".header .btn-menu .btn_img2").css("display","none");
            img_flag = true;
        }
    });
    $('.bg').on('click', function() {
        $('.menu').animate({ top: '-6rem' }, '100');
        $('.header').removeClass("header-open");
        $('.bg').hide();
        $(".header").removeClass("menu-open");
        $(".header .btn-menu .btn_img1").css("display","block");
        $(".header .btn-menu .btn_img2").css("display","none");
        img_flag = true;
    })
    
    
   


 	$('.backTop').click(function() {
        var scrollTop = $(window).scrollTop();
        $("html,body").animate({ scrollTop: 0 }, 600);
    });

	
	
	$(".menu .active .item a").on("click",function(){
		$(this).addClass("on").siblings().removeClass("on")
	})

	$(".btn-menu").click(function(){
		$(".header").toggleClass("menu-open")
    })
    
    // 自定义控件
    // $(".sub_title span").each(function(){
    //     $(this).siblings("img").height($(this).height())
    // })
})
