 var d = "<div class='maple'>🍁<div>";
   		 setInterval(function () {
        var f = $(document).width();
        var e = Math.random() * f - 100; // 枫叶的定位left值
        var o = 0.2 + Math.random(); // 枫叶的透明度
        var fon = 25 + Math.random() * 10; // 枫叶大小
        var l = e - 350 + 200 * Math.random(); // 枫叶的横向位移
        var k = 8000 + 5000 * Math.random();
        var deg = Math.random() * 360; // 枫叶的方向
        $(d).clone().appendTo(".maplebg").css({
            left: e + "px",
            opacity: o,
            transform: "rotate(" + deg + "deg)",
            "font-size": fon,
        }).animate({
            top: "550px",
            left: l + "px",
            opacity: 0.1,
        }, k, "linear", function () {
            $(this).remove()
        })
    }, 500)
		 $(function(){
       $(".navbar-nav").click(function(){
            $(".dropdown ul li").each(function(index){
             $(this).click(function(){
                var ifr = window.frames[0];
                var src = $(this).attr('id') + '.html';
                ifr.location=src;
                $("ul li").removeClass('active');
                $(this).toggleClass('active');
                startInit('mainFrame', 880);
             })
            })
       });
		 	
			$("#start,#masterpiece").click(function(){
				var ifr = window.frames[0];
				var src = $(this).attr('id') + '.html';
				ifr.location=src;
				$("ul li").removeClass('active');
				$(this).toggleClass('active');
        startInit('mainFrame', 880);
			})
		 })	
	var browserVersion = window.navigator.userAgent.toUpperCase();
	var isOpera = browserVersion.indexOf("OPERA") > -1 ? true : false;
	var isFireFox = browserVersion.indexOf("FIREFOX") > -1 ? true : false;
	var isChrome = browserVersion.indexOf("Chrome") > -1 > -1 ? true : false;
	var isSafari = browserVersion.indexOf("SAFARI") > -1 ? true : false;
	var isIE = (!!window.ActiveXObject || "ActiveXObject" in window);
	var isIE9More = (! -[1, ] == false);
	function reinitIframe(iframeId, minHeight) {
    try {
        var iframe = document.getElementById(iframeId);
        var bHeight = 0;
        var dHeight = 0;
        if (isChrome !== true || !isSafari == true)
            bHeight = iframe.contentWindow.document.body.clientHeight;
        if (isFireFox == true)
            dHeight = iframe.contentWindow.document.documentElement.offsetHeight + 2;
        else if (isIE == false && isOpera == false)
            dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
        else if (isIE == true && isIE9More) {//ie9+
            var heightDeviation = bHeight - eval("window.IE9MoreRealHeight" + iframeId);
            if (heightDeviation == 0) {
                bHeight += 3;
            } else if (heightDeviation != 3) {
                eval("window.IE9MoreRealHeight" + iframeId + "=" + bHeight);
                bHeight += 3;
            }
        }
        else//ie[6-8]、OPERA
            bHeight += 3;

        var height = Math.max(bHeight, dHeight);
        if (height < minHeight) height = minHeight;
        iframe.style.height = height + "px";
    } catch (ex) { }
}
function startInit(iframeId, minHeight) {
    eval("window.IE9MoreRealHeight" + iframeId + "=0");
    window.setInterval("reinitIframe('" + iframeId + "'," + minHeight + ")", 100);
    reinitIframe(iframeId, minHeight);
} 
startInit('mainFrame', 880);