(function() {
    function b_resize() {
        document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
        document.documentElement.setAttribute('data-dpr', 1);
        document.documentElement.setAttribute('max-width', '540')
    }
    window.onresize = b_resize;
    b_resize();

    let hotcss = {};
    hotcss.rem2px = function($rem) {
        let window_W = document.documentElement.clientWidth;
        return $rem * window_W / 7.5;
    }

    window.hotcss = hotcss;
})(window, document);