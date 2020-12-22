$(function() {
    $('.menu-item>a').click(function() {
        let $er_nav = $(this).siblings('.item-nav');
        if ($er_nav.length) {
            if ($er_nav.css('display') === 'none') {
                $('.item-nav').slideUp();
                $er_nav.slideDown();
            } else {
                $er_nav.slideUp();
                // $er_nav.css('display', 'none')
            }
            // return false;
        }
    })
})