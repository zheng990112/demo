var showMask = function() {
    var event = event || window.event;
    if (event && event.stopPropagation) {
        event.stopPropagation(); 
    } else {
        event.cancelBubble = true;
    }
    var $display = $('.mask').css('display');
    // console.log($display)
    $display = $display === 'flex' ? 'none' : 'flex';
    // console.log($display)
    if ($display === 'flex') {
        $('.text').css('display', 'none');
        $('.close').css('display', 'block')
    } else {
        $('.text').css('display', 'block');
        $('.close').css('display', 'none')
    }
    $('.mask').css('display', $display)
}

$(function() {
    $('.mask').click(showMask);

    $('.menu-box').on('click', showMask);

    // $('.mask').on('click', showMask)

})