$(function() {

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
	$('.menu-box').on('click',function(){
		if(img_flag){
			$(".menu-box .img1").css({"display":"none"});
			$(".menu-box .img2").css({"display":"block"});
			$('.menu').animate({right: 0},'100');
			$('.bg').show();
			img_flag = false;
		}else{
			$(".menu-box .img1").css({"display":"block"});
			$(".menu-box .img2").css({"display":"none"});
			$('.menu').animate({right: '-50%'},'100');
			$('.bg').hide();
			img_flag = true;
		}
	});
	$('.bg').on('click',function(){
		$('.menu').animate({right: '-50%'},'100');
		$('.bg').hide();
		img_flag = true;
	})

})