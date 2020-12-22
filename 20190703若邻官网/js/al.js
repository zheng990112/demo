$(function(){	
	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		var w_h = $(window).height();
		var header_h = $(".header-box").height();
		var ernavTop = $(".main-box")[0].offsetTop - scrollTop - header_h + 50;
		var footerTop = $(".footer")[0].offsetTop - scrollTop;
		
		
		
		
		if(ernavTop < 0 ){
			$('.er-nav').addClass("er-navFixed");

		}else{
			$('.er-nav').removeClass("er-navFixed");
	  	};
	  	if(footerTop < 850){
			$('.er-nav').removeClass("er-navFixed");
	  		
	  	}
		
	})
	
	
	$(".er-nav .on").parent().parent().parent().addClass("active")
	
	$(".er-nav ul li .item").addClass("er-nav_top");
	$(".er-nav ul li:last-child .item").removeClass("er-nav_top").addClass("er-nav_bottom");
	$(".er-nav ul li:nth-last-child(2) .item").removeClass("er-nav_top").addClass("er-nav_bottom");
	$(".er-nav ul li:nth-last-child(3) .item").removeClass("er-nav_top").addClass("er-nav_bottom");
	$(".er-nav ul li:nth-last-child(4) .item").removeClass("er-nav_top").addClass("er-nav_bottom");
})