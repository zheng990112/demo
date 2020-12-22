$(document).ready(function() {
  $('#fullpage').fullpage({
    navigation: true,
    // scrollBar: true,
    navigationPosition: screenLeft,
    anchors: ['page0', 'page1', 'page2', 'page3'],
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

var swiper = new Swiper('.page-swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: '.page_swiper-button .swiper-button-next',
    prevEl: '.page_swiper-button .swiper-button-prev',
  },
});