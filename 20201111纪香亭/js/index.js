var swiper = new Swiper('.part2-swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.part2_swiper-button .swiper-button-next',
    prevEl: '.part2_swiper-button .swiper-button-prev',
  },
});
$(".part2-swiper .swiper-slide div").height($(".part2-swiper .swiper-slide div").width());

var swiper = new Swiper('.part6-swiper', {
  slidesPerView: 3,
  spaceBetween: 81,
  centeredSlides: true,
  initialSlide: 2,
  loop: true,
  navigation: {
    nextEl: '.part6_swiper-button .swiper-button-next',
    prevEl: '.part6_swiper-button .swiper-button-prev',
  },
});
$(".part6-swiper .swiper-slide").height($(".part6-swiper .swiper-slide").width / 1.84);
let width = $(".part6-swiper .swiper-slide").width();
let height = $(".part6-swiper .swiper-slide").height();
setInterval(function () {
  $(".part6_swiper .swiper-slide").width(width);
  $(".part6_swiper .swiper-slide").height(height);
  $(".part6_swiper .swiper-slide img").width(width);
  $(".part6_swiper .swiper-slide img").height(height);
  $(".part6_swiper .swiper-slide img").css({
    "marginLeft": 0,
    "marginTop": 0
  });
  $(".part6_swiper .swiper-slide.swiper-slide-active img").width(width * 1.2);
  $(".part6_swiper .swiper-slide.swiper-slide-active img").height(height * 1.2);
  $(".part6_swiper .swiper-slide.swiper-slide-active img").css({
    "marginLeft": -10 + "%",
    "marginTop": -5 + "%"
  });
}, 100);

var swiper = new Swiper('.part6b-swiper', {
  slidesPerView: 3,
  spaceBetween: 16,
  loop: true,
  navigation: {
    nextEl: '.part6b_swiper-button .swiper-button-next',
    prevEl: '.part6b_swiper-button .swiper-button-prev',
  },
});
$(".part6b-swiper .swiper-slide").height($(".part6b-swiper .swiper-slide").width() / 1.59);

let offsetTop1 = $(".part2").offset().top;
let offsetTop2 = $(".part3").offset().top;
let offsetTop3 = $(".part6 .part_main").offset().top;
setInterval(function (){
  if($(window).scrollTop()>offsetTop1){
    $(".part1").css("display","none")
  }else{
    $(".part1").css("display","block")
  }
  if($(window).scrollTop()>offsetTop2&&$(window).scrollTop()<offsetTop3){
    $(".part5 .last_box").css("display","block")
  }else{
    $(".part5 .last_box").css("display","none")
  }
},100)
