$(function() {
	
	$('.backTop').click(function() {
        var scrollTop = $(window).scrollTop();
        $("html,body").animate({ scrollTop: 0 }, 600);
    });

})