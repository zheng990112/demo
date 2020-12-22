$(function() {
    //返回顶部
    // var w_h = $(window).height();
    $(window).scroll(function() {
        let content_top = $('.container')[0].getBoundingClientRect().top;
        console.log(content_top);
        if (content_top <= 0) {
            $('.back-top').fadeIn();
            $('.back-top').css({ 'bottom': '7rem' })
        } else {
            $('.back-top').fadeOut();
        };
    });

    $('.back-top').click(function() {
        var scrollTop = $(window).scrollTop();
        $("html,body").animate({ scrollTop: 0 }, 600);
    });



    // $(".floating_btn").click(function() {
    //     $('.floating').removeClass("tohide").addClass("show")

    //     $('.floating_btn').animate({
    //         opacity: "0"
    //     }, '500');
    //     $(".close_btn").show();
    // });

    // $(".close_btn").click(function() {
    //     $('.floating').removeClass("show").addClass("tohide")
    //     $('.floating_btn').animate({
    //         opacity: "1"
    //     }, '5000');
    //     $(".close_btn").hide();
    // })


    //二级导航固定
    // $(window).scroll(function() {
    //     let content_top = $('.content')[0].getBoundingClientRect().top;
    //     if (content_top <= 0) {
    //         $('.er-nav').css('position', 'fixed');
    //     } else {
    //         $('.er-nav').css('position', 'absolute');
    //     }
    // })

})