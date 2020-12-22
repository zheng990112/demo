$(function() {
	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		var dom1 = document.getElementById("zs");
		var dom2 = document.getElementById("hz");
		var dom3 = document.getElementById("hhr");

		function getOffsetTopByBody(el) {
			let offsetTop = 0
			while(el && el.tagName !== 'BODY') {
				offsetTop += el.offsetTop
				el = el.offsetParent
			}
			return offsetTop
		}
		var x1 = getOffsetTopByBody(dom1);
		var x2 = getOffsetTopByBody(dom2);
		var x3 = getOffsetTopByBody(dom3);
		x1 = x1 - scrollTop;
		x2 = x2 - scrollTop;
		x3 = x3 - scrollTop;
		if(x1 < 0 || x1 > -4900) {
			$(".adver .adver_nav a").removeClass("on");
			$(".adver .adver_nav a").eq(1).addClass("on");
		}
		if(x2 < 110) {
			$(".adver .adver_nav a").removeClass("on");
			$(".adver .adver_nav a").eq(2).addClass("on");
		}
		if(x3 < 350) {
			$(".adver .adver_nav a").removeClass("on");
			$(".adver .adver_nav a").eq(3).addClass("on");
		}
		

		if(scrollTop > 225) {
			$(".adver .adver_header .adver_nav").addClass("adver_nav_fix");
			$(".adver .zs").css({"margin-top": "46px"})
		} else {
			$(".adver .adver_header .adver_nav").removeClass("adver_nav_fix");
			$(".adver .zs").css({"margin-top": "0"})
		}

	});
	
	$('.backtop').click(function(){
		var scrollTop = $(window).scrollTop();
		$("html,body").animate({ scrollTop: 0 }, 600);
	});

})