$(function(){
	
	var img_flag = true;
	$('.nav').on('click',function(){
		if(img_flag){
			$('.menu').animate({right: "5%"},'100');
			$('.bg').show();
			img_flag = false;
		}else{
			$('.menu').animate({right: '-50%'},'100');
			$('.bg').hide();
			img_flag = true;
		}
	})
	$('.bg').on('click',function(){
		$('.menu').animate({right: '-50%'},'100');
		$('.bg').hide();
		img_flag = true;
	})

	
	
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
	

	
	
})


