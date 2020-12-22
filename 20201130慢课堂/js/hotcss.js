(function() {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 19.2 + 'px';
    if (document.documentElement.clientWidth <= 1280) {
        document.documentElement.style.fontSize = 1280 / 19.2 + 'px';
    }
    window.onresize = function() {
        document.documentElement.style.fontSize = document.documentElement.clientWidth / 19.2 + 'px';
        if (document.documentElement.clientWidth <= 1280) {
            document.documentElement.style.fontSize = 1280 / 19.2 + 'px';
        }
    }

    let hotcss = {};

    hotcss.rem2px = function($rem) {
        let window_W = document.documentElement.clientWidth;
        if (window_W <= 1280) {
            return $rem * 1280 / 19.2;
        }
        return $rem * window_W / 19.2;
    }
    window.hotcss = hotcss;

})(window, document);