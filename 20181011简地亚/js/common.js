$(function() {
	//	nav
	$(document).ready(function() {
		$(".meun").click(function() {
			$(".hidd_navbox").slideToggle("slow");
		});
	});

	var bannerSwiper = new Swiper('.banner-swiper', {
		pagination: '.swiper-pagination',
		autoplay: 3000,
		loop: true
	});

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
	



	
	
}) //js结束

