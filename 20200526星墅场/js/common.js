$(function(){	
	let index_banner = new Swiper('.banner', {
        autoplay: true,
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        pagination: {
            el: '.index-pagination',
            clickable: true
        },
    })
	
	
	$(".play").click(function(){
		var player = $(this).next()[0];
		if(player.pause) {
            player.play();
            $(this).prev().remove();
            $(this).css({"display":"none"});
            $(this).next().attr("controls","controls");
        }else {
            player.pause();
            $(this).css({"display":"block"});
        }
	});
		
	//返回顶部
    var w_h = $(window).height();
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > w_h * 0.8) {
            $('.backTop').fadeIn();
            $('.backTop').css({ 'bottom': '200px' })
        } else {
            $('.backTop').fadeOut();
        };
    });

    $('.backTop').click(function() {
        var scrollTop = $(window).scrollTop();
        $("html,body").animate({ scrollTop: 0 }, 600);
    });
    
    
    
    //二级导航固定
    $(window).scroll(function() {
        let content_top = $('.content')[0].getBoundingClientRect().top;
        if (content_top <= 0) {
            $('.er-nav').css('position', 'fixed');
        }else {
            $('.er-nav').css('position', 'absolute');
        }
    })
    
	

	$(".play").click(function(){
		var player = $(this).next()[0];
		if(player.pause) {
            player.play();
            $(this).prev().remove();
            $(this).css({"display":"none"});
            $(this).next().attr("controls","controls");
        }else {
            player.pause();
            $(this).css({"display":"block"});
        }
	});
	
	


})
