$(document).ready(function() {
	$('#fullpage').fullpage({
		navigation: true,
    scrollBar: true,
		navigationPosition: screenLeft,
		anchors: [ 'page0', 'page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10', 'page11'],
		afterRender:function(index,nextIndex){
			if(index.index == 0){
				$(".footer").hide()
			}else{
				$(".footer").show()
			}
		},
		onLeave: function(index,nextIndex,direction){
			if(nextIndex.index == 0){
				$(".footer").hide()
			}else{
				$(".footer").show()
			}
		}
	});
	let rotation1 = new Swiper('.rotation1', {
		autoplay: true,
		loop: true,
	 // effect: 'flip',
		fadeEffect: {
				crossFade: true,
		},
		pagination: {
				el: '.rotation1 .swiper-pagination',
				clickable: true
		},
	})
	let rotation2 = new Swiper('.rotation2', {
		autoplay: true,
		loop: true,
	 // effect: 'flip',
		fadeEffect: {
				crossFade: true,
		},
		pagination: {
				el: '.rotation2 .swiper-pagination',
				clickable: true
		},
	})
	let rotation3 = new Swiper('.rotation3', {
		autoplay: true,
		loop: true,
	 // effect: 'flip',
		fadeEffect: {
				crossFade: true,
		},
		pagination: {
				el: '.rotation3 .swiper-pagination',
				clickable: true
		},
	})
	$(".page7 .page_main").height($(window).height())
});


