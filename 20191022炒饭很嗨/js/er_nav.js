$(function() {

	$(".er-nav_btn").click(function() {
		$('.er-nav').removeClass("hide").addClass("show")

		$('.er-nav_btn').animate({
			opacity: "0"
		}, '500');
		$(".close_btn").show();
	});

	$(".close_btn").click(function() {
		$('.er-nav').removeClass("show").addClass("hide")
		$('.er-nav_btn').animate({
			opacity: "1"
		}, '5000');
		$(".close_btn").hide();
	})

})