$(document).ready(function() {
  $('#fullpage').fullpage({
    navigation: true,
    // scrollBar: true,
    navigationPosition: screenLeft,
    anchors: ['page0'],
    // afterRender:function(index,nextIndex){
    // 	if(index.index == 0){
    // 		$(".footer").hide()
    // 	}else{
    // 		$(".footer").show()
    // 	}
    // },
    // onLeave: function(index,nextIndex,direction){
    // 	if(nextIndex.index == 0){
    // 		$(".footer").hide()
    // 	}else{
    // 		$(".footer").show()
    // 	}
    // }
  });
});