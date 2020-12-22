$(function() {
	$('.to1').click(function() {
		mySwiper.slideTo(0, 500, true);
	})
	$('.to2').click(function() {
		mySwiper.slideTo(1, 500, true);
//		location.href = "cp.html";
//		setInterval(function() {
//			console.log(mySwiper);
//			mySwiper.slideTo(1, 500, true);
//			alert("123")
//		}, 2000)
	})
	$('.to3').click(function() {
		mySwiper.slideTo(2, 500, true);
	})
	$('.to4').click(function() {
		mySwiper.slideTo(3, 500, true);
	})
})