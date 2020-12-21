function checkUrl() {
	var e = /%3C|%3E|[<>'"\(\)]/gi,
		n = decodeURI(window.location.href);
	if(e.test(n)) {
		for(var i = "", t = 0; t < n.length; t++) i += n.substr(t, 1).replace(e, "");
		i = encodeURI(i), setTimeout(function() {
			window.location.href = i
		}, 0)
	}
}

function Contextdisplay(e) {
	document.getElementById(e).style.display = "block" != document.getElementById(e).style.display ? "block" : "none"
}

function changeIcon(e, n) {
	"block" != document.getElementById(e).style.display ? n.className += " " + e[0] + "ccsubmenu" : n.className = e[0] + "csubmenu"
}

function displayHidden(e) {
	document.getElementById(e).style.display = "none"
}

function displayBlock(e) {
	document.getElementById(e).style.display = "block"
}
if(checkUrl(), window.onload = function() {
		for(var e = 0; e < document.links.length; e++) document.links[e].onfocus = function() {
			this.blur()
		};
		var n = document.createElement("script");
		n.setAttribute("src", "/skins/MySkin/resources/js/guide.js?developer"), n.setAttribute("type", "text/javascript"), n.setAttribute("charset", "utf-8"), setTimeout(function() {
			document.getElementsByTagName("head")[0].appendChild(n)
		}, 1)
	}, "undefined" != typeof BMap) {
	var map = new BMap.Map("mmap"),
		point = new BMap.Point(116.307852, 40.057031);
	map.centerAndZoom(point, 15);
	var opts = {
			width: 250,
			height: 80,
			title: "<a href='http://j.map.baidu.com/K3IXc' style='color:#CC5522;font-weight:800'>鐧惧害澶у帵<a>"
		},
		infoWindow = new BMap.InfoWindow("鍦板潃锛氬寳浜競娴锋穩鍖轰笂鍦板崄琛�10鍙�<br/>鐢佃瘽锛�(010)59928888", opts);
	map.openInfoWindow(infoWindow, map.getCenter())
}
var screenWidth, getTheme = function(e) {
	return 1100 < e ? e = 1200 : 600 < e <= 1100 ? e = 1100 : e <= 600 && (e = 600), e
};
screenWidth = null == window.innerWidth ? document.documentElement.clientWidth : innerWidth;
var tend, current_theme = getTheme(screenWidth),
	window_resized = !1,
	time = 4500,
	slideEl = $("#slideContent"),
	indexAt = 1,
	slideHode = !1,
	clicked = !1,
	resized = [0, 0, 0, 0],
	changeLength = 3,
	initialBaner = function() {
		var e = $(".page li.show .img-content div:eq(0) img");
		IMGResizeHandler(e)
	};
$(document).ready(function() {
	window_resized = !0, resized[0] = 1, $(".page li:first").removeClass("hidden").addClass("show"), initialBaner()
});
var IMGResizeHandler = function(e, t) {
	e.each(function(e) {
		var n, i = parseInt($(this).height());
		n = t ? 440 * i / 264 : i * parseInt($(".hdp").css("height")) / 440, $(this).css("height", n + "px")
	})
};
$(window).resize(function() {
	screenWidth = null == window.innerWidth ? document.documentElement.clientWidth : innerWidth, current_theme != getTheme(screenWidth) && (tend = getTheme(screenWidth) > current_theme, resized = [0, 0, 0, 0], window_resized = !0, $(".page li").each(function(e) {
		if($(this).hasClass("show") && 0 == resized[e]) {
			resized[e] = 1;
			var n = $(".page li.show .img-content div:eq(0) img");
			IMGResizeHandler(n, tend)
		}
	}), current_theme = getTheme(screenWidth))
});
var changeBanner = function(e) {
		if(!slideHode || clicked) {
			clicked = !1;
			var n = $("#slideContent .page a li.show");
			n.removeClass("show").addClass("hidden");
			var i = $(".focus-content-item a.current");
			if(i.removeClass("current"), 0 == e ? ($("#slideContent .page a li:first").removeClass("hidden").addClass("show"), $(".focus-content-item a:first").addClass("current")) : (n.parent().parent().find("li:eq(" + e + ")").removeClass("hidden").addClass("show"), i.parent().parent().find("a:eq(" + e + ")").addClass("current")), 1 == window_resized && 0 == resized[e]) {
				resized[e] = 1;
				var t = $(".page li.show .img-content div:eq(0) img");
				IMGResizeHandler(t, tend)
			}
			indexAt = e + 1, indexAt %= changeLength
		}
	},
	slideAction = setInterval(function() {
		changeBanner(indexAt)
	}, time);
$(".focus-content-item a").hover(function() {
	var e = $(this).attr("idx");
	changeBanner(parseInt(e)), slideHode = !0
}, function() {
	slideHode = !1
}), $(".img-content").bind({
	mouseenter: function() {
		slideHode = !0
	},
	mouseleave: function() {
		slideHode = !1
	}
}), $(".slide-left").bind({
	click: function(e) {
		clicked = slideHode = !0, $("#slideContent .page a li").each(function(e) {
			if($(this).hasClass("show")) return changeBanner(0 === e ? 3 : e - 1), !1
		})
	},
	mouseout: function(e) {
		clicked = slideHode = !1
	}
}), $(".slide-right").bind({
	click: function(e) {
		clicked = slideHode = !0, $("#slideContent .page a li").each(function(e) {
			if($(this).hasClass("show")) return changeBanner(3 === e ? 0 : e + 1), !1
		})
	},
	mouseout: function(e) {
		clicked = slideHode = !1
	}
}), $(".notice").hover(function() {
	var e = parseInt($(this).attr("idx"));
	$(".screen ul li").each(function() {
		$(this).removeClass("yellow-point")
	}), $(".screen ul li").slice(e, e + 1).addClass("yellow-point");
	var n = "-" + 445 * e + "px";
	$(".screen .item div").css("left", n)
}, function() {
	$(".screen ul li").each(function() {
		$(this).removeClass("yellow-point")
	}), $(".screen ul li:first").addClass("yellow-point"), $(".screen .item div").css("left", 0)
});
var font_blur = function() {
	window.setInterval(function() {
		var e = $("#mservice h3.cashtitle-big");
		e.find("img").remove(), e.removeClass("cashtitle-big"), e.next("h3").length ? (e.next("h3").addClass("cashtitle-big"), e.next("h3").prepend("<img src='./skins/MySkin/resources/img/icon/quotation-left.png'>"), e.next("h3").append("<img src='./skins/MySkin/resources/img/icon/quotation-right.png' class='quote-style'> ")) : ($("#mservice h3:eq(0)").addClass("cashtitle-big"), $("#mservice h3:eq(0)").prepend("<img src='./skins/MySkin/resources/img/icon/quotation-left.png'>"), $("#mservice h3:eq(0)").append("<img src='./skins/MySkin/resources/img/icon/quotation-right.png' class='quote-style'> "))
	}, 4e3)
};
font_blur();
var nav_li = $("#nav ul>li"),
	current_page = null,
	nav_blur_action = function(e) {
		e.addClass("nav_selected_li"), e.find(">a").addClass("nav_selected_a"), e.find(">a .arrow").addClass("nav_selected_arrow")
	},
	nav_fadeout_action = function() {
		nav_li.removeClass("nav_selected_li"), nav_li.find(">a").removeClass("nav_selected_a"), nav_li.find(">a .arrow").removeClass("nav_selected_arrow")
	},
	nav_hover = function() {
		nav_li.hover(function() {
			var e = $(this);
			nav_fadeout_action(), null != current_page && current_page.find(">a").css({
				color: "#0098dd"
			}), nav_blur_action(e)
		}, function() {
			nav_fadeout_action(), null != current_page && current_page.find(">a").css({
				color: "#0098dd"
			})
		})
	};
nav_hover();
var nav_blur = function() {
	nav_li.each(function(e) {
		0 <= String(window.location).indexOf(encodeURI($(this).find(">a").attr("href"))) ? (current_page = $(this)).find(">a").css({
			color: "#0098dd"
		}) : $(this).find("a").each(function(e) {
			if(0 <= String(window.location).indexOf($(this).attr("href"))) {
				var n = $(this).parent().parent().parent().parent();
				(current_page = n).find(">a").css({
					color: "#0098dd"
				})
			}
		})
	})
};
nav_blur(), 0 <= String(window.location).indexOf(encodeURI("鎼滅储")) && (console.log("鎼滅储椤甸潰la"), $("#sidebar").css("display", "none"), $(".mcontainer").css("width", "100%")), 1 != $.browser.msie || "7.0" != $.browser.version && "8.0" != $.browser.version && "9.0" != $.browser.version || ($(".develop-bg").css("height", "320px"), $(".wrap .out").css("margin-top", "-215px"), $(".wrap .in").css("margin-top", "0"));