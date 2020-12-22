$(function(){
	
//	$(".nav-box li").on('click',function(){
//		let index = $(this).index()
//		$(this).addClass('active').siblings().removeClass('active')
//	})
	

	
	
	
	
	//视频
	
	$("#play").click(function() {
		var player = document.getElementById("player");
		if(player.pause) {
			player.play();
			//console.log("a")
			$(".video-img").remove();
			$(this).css({
				"display": "none"
			});
			$("#player").attr("controls", "controls");
		} else {
			player.pause();
			$("#play").css({
				"display": "block"
			});
			//console.log("b")
		}
	})
	
	

})

	


