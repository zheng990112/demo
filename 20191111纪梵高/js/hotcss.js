(function() {
    //根据devicePixelRatio自定计算scale
    //可以有效解决移动端1px这个世纪难题。
    var viewportEl = document.querySelector('meta[name="viewport"]'),
        hotcssEl = document.querySelector('meta[name="hotcss"]'),
        dpr = window.devicePixelRatio || 1,
        maxWidth = 540,
        // dpr = dpr >= 3 ? 3 : (dpr >= 2 ? 2 : 1);
        dpr = 1;

    //允许通过自定义name为hotcss的meta头，通过initial-dpr来强制定义页面缩放
    if (hotcssEl) {
        var hotcssCon = hotcssEl.getAttribute('content');
        if (hotcssCon) {
            var initialDprMatch = hotcssCon.match(/initial\-dpr=([\d\.]+)/);
            if (initialDprMatch) {
                dpr = parseFloat(initialDprMatch[1]);
            }
            var maxWidthMatch = hotcssCon.match(/max\-width=([\d\.]+)/);
            if (maxWidthMatch) {
                maxWidth = parseFloat(maxWidthMatch[1]);
            }
            var designWidthMatch = hotcssCon.match(/design\-width=([\d\.]+)/);
            if (designWidthMatch) {
                designWidth = parseFloat(designWidthMatch[1]);
            }
        }
    }
    document.documentElement.setAttribute('data-dpr', dpr);
    document.documentElement.setAttribute('max-width', maxWidth);
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
})(window, document);