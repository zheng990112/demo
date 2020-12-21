$(function() {
    // var $menu_list = $('.menu-list');
    // $('.menu-icon').click(function() {
    //     $menu_list.toggle();
    // })
    // $('.main').click(function() {
    //     $menu_list.css('display', 'none');
    // })

    var img_flag = true;
    $('.menu-icon').on('click', function() {
        if (img_flag) {
            $('.menu-list').animate({ right: '15' }, '100');
            img_flag = false;
        } else {
            $('.menu-list').animate({ right: '-50%' }, '100');
            img_flag = true;
        }
    })

    $('.main').on('click', function() {
        $('.menu-list').animate({ right: '-50%' }, '100');
        img_flag = true;
    })


    $('.play-icon').click(function() {
        var $video = $(this).parent().parent().children('.video');
        $video.css('display', 'block');
        $video[0].play();
    })
	
})