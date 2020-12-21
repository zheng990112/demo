$(function() {
    $('.menu-btn').on('click', function() {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $('.menu-box').animate({
                height: '100%'
            });
        } else {
            $(this).removeClass('active');
            $('.menu-box').animate({
                height: '0px'
            });
        }

    })

    $('.video-play').on('click', function() {
        console.log('123')
        $('.player').css('display', 'block');
        $('.player')[0].play();
    })
})