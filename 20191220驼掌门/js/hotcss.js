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

})(window, document);