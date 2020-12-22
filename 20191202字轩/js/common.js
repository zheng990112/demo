$(function() {
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

//  $('.play-icon').on('click', function() {
//      $('.video-info').css('display', 'block');
//      $('.video-info')[0].play();
//  })
    
    $(".play").click(function() {
    	var player = $(this).next()[0];
    	if(player.pause) {
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

    

    $('.backTop').click(function() {
    	var scrollTop = $(window).scrollTop();
    	$("html,body").animate({
    		scrollTop: 0
    	}, 600);
    });
    
    
    
    $(window).scroll(function() {
    	var scrollTop = $(window).scrollTop();
		var er_nav_top = $('.banner-box').height() + 370;
//		var dom = $(".er-nav")[0].offsetTop - scrollTop;
//		console.log(banner_top)
		if(er_nav_top < scrollTop){
        	$(".er-nav").addClass("er-nav-fixed");
        }else{
        	$(".er-nav").removeClass("er-nav-fixed");
        }

    })
    
})