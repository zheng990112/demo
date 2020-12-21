$(function() {
	

	$(".header_nav .title").on("click", function() {
		$('.bg').show();
		$(this).addClass("active");
		$(this).parent('.header_nav li').siblings().find('.title').removeClass("active");
		$(this).next(".header_nav .item").removeClass("none");
		$(this).parent('.header_nav li').siblings().find('.item').addClass("none");
	})
	$(".header_nav .item .ssxl").on("click", function() {
		$(".item2").fadeToggle();
	});
	$(".bg").on("click", function() {
		$(".bg").hide();
		$(".header_nav .item").addClass("none");
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


