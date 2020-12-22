$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: [ 'page0', 'page1', 'page2', 'page3'],
		onLeave: function(index,nextIndex,direction){
			if (nextIndex.index == 0) {
				$(".page0 .des .img1").addClass("a1-translate");
				$(".page0 .des .img2").addClass("Scale1-2a");
				$(".page0 .des .img3").addClass("Scale1-2");
				$(".page0 .des .img4").addClass("a4-translate");
				$(".page0 .des .img5").addClass("a4-translate");
				$(".page1 .des .img1-1").removeClass("b1-translate1");
				$(".page1 .des .img1-2").removeClass("b1-translate2");
				$(".page1 .des .img2").removeClass("Scale1-2b");
				$(".page1 .des .img3").removeClass("b3-translate");
				$(".page1 .des .img4").removeClass("b4-translate");
				$(".page1 .des .img4").removeClass("Scale1-2");
			}
			if (nextIndex.index != 0 && nextIndex.index == 1){
				$(".page0 .des .img1").removeClass("a1-translate");
				$(".page0 .des .img2").removeClass("Scale1-2a");
				$(".page0 .des .img3").removeClass("Scale1-2");
				$(".page0 .des .img4").removeClass("a4-translate");
				$(".page0 .des .img5").removeClass("a4-translate");
				$(".page1 .des .img1-1").addClass("b1-translate1");
				$(".page1 .des .img1-2").addClass("b1-translate2");
				$(".page1 .des .img2").addClass("Scale1-2b");
				$(".page1 .des .img3").addClass("b3-translate");
				$(".page1 .des .img4").addClass("b4-translate");
				$(".page1 .des .img6").addClass("Scale1-2");
				
			}
		}
	});
});