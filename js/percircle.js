
$(window).load(function () {
	$('.flexslider').flexslider({
		animation: "slide",
		start: function (slider) {
			$('body').removeClass('loading');
		}
	});
});

jQuery(document).ready(function ($) {
	$(".scroll").click(function (event) {
		event.preventDefault();
		$('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
	});
});

$(document).ready(function () {
	$().UItoTop({ easingType: 'easeOutQuart' });
	var rotationMultiplier = 3.6;
	$("div[id$='circle']").each(function () {
		var classList = $(this).attr('class').split(/\s+/);
		for (var i = 0; i < classList.length; i++) {
			if (classList[i].match("^p")) {
				var rotationPercentage = classList[i].substring(1, classList[i].length);
				var rotationDegrees = rotationMultiplier * rotationPercentage;
				$('.c100.p' + rotationPercentage + ' .bar').css({
					'-webkit-transform': 'rotate(' + rotationDegrees + 'deg)',
					'-moz-transform': 'rotate(' + rotationDegrees + 'deg)',
					'-ms-transform': 'rotate(' + rotationDegrees + 'deg)',
					'-o-transform': 'rotate(' + rotationDegrees + 'deg)',
					'transform': 'rotate(' + rotationDegrees + 'deg)'
				});
			}
		}
	});
});

////----------------------------------------------
//点击播放视频
function bofang(){
	document.getElementById("demo_vide").style.display="none";//隐藏
	document.getElementById("demo_vides").style.display="none";//隐藏
	var video=document.getElementById("box");
	video.play();
}

(function () {
	let deviceWidth = document.documentElement.clientWidth || document.body.clientWidth
	let htmlDom = document.getElementsByTagName('html')[0]
	if (deviceWidth > 750) deviceWidth = 750
	htmlDom.style.fontSize = deviceWidth / (750 / 100) + 'px' // 750 设计图大小 100 换算rem 
})()
//视频处理
var box = document.querySelector("#box");
//浏览器适配
box.requestFullScreen = box.requestFullScreen || box.mozRequestFullScreen || box.webkitRequestFullScreen;
document.exitFullScreen = document.exitFullScreen || document.webkitCancelFullScreen || document.mozCancelFullScreen;
box.onclick = function (e) { //当前是否是全屏状态 webkit 下 要加 Is
	if (document.webkitIsFullScreen || document.mozFullScreen || document.fullScreen) {
		//异常处理
		//如果try 里面的代码报错 则执行 catch 的代码
		try {
			document.exitFullScreen()
		} catch (e) {
			alert("您的浏览器不支持全屏!");
		}
	} else {
		try {
			box.requestFullScreen();
		} catch (e) {
			alert("您的浏览器不支持全屏!");
		}
	}
}
	$(".on_submit").click(function () {
		var name = $("input[name='username']").val();
		var phones = $("input[name='userphones']").val();
		var time = $("input[name='usertime']").val();
		var work = $("input[name='userwork']").val();
		// var phone = $.trim($('#buyer_phone').val());
		let reg = /^1[0-9]{10}$/
		if(name==""||name==null){
			alert("姓名不能为空");
			return false
		}else if(phones==''||phones==null){
			alert("手机号码不能为空");
			return false;
		}else if(!reg.test(phones)){
			alert("手机号码有误！");
			return false;
		}
		else if(time==""||time==null){
			alert("预约时间不能为空");
			return false
		}else if(work==""||work==null){
			alert("预约事项不能为空");
			return false
		}
		if(name&&phones&&time&&work){
			$.ajax({
				url: "https://www.zjwl.shop/daisy/api/website/addAppoint",
				headers: { "Content-type": "application/x-www-form-urlencoded; charset=utf-8" },
				type: "post",
				data: {
					realname: name,
					phone: phones,
					ordertime: time,
					content: work
				},
				success: function (result) {
					if (result.code == 200) {
						alert("预约成功");
						window.location.reload();
					}
				}
			});
		}
	});

	// 点击按钮，返回顶部
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
//图片预加载
function preloader() {
    if (document.images) {
				var img1 = new Image();
				var img2 = new Image();
				img1.src = "../images/index/video_img.png";
				img2.src = "../images/index/us_body.png";
    }
}
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}
addLoadEvent(preloader);