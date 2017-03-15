$(function() {
	//主体轮播开始
	function lunbo() {
		var _index = 0;
		var playTime = null;
		$(".but ul li").hover(function() { //鼠标滑到上面要做的事
			clearInterval(playTime); //清除定时器，停止自动轮展
			$(this).addClass("hover").siblings().removeClass("hover");
			//鼠标放上去的那个li添加 class="hover"
			_index = $(this).index(); //鼠标放上去的那个li的序列号
			$("ul.adlist li").eq(_index).fadeIn().siblings().fadeOut();
		}, function() { //鼠标移开时要做的事
			auto_Play(); //起动自动播放
		});
		//自动轮播
		function auto_Play() {
			playTime = setInterval(function() {
				_index++; //序列号加 index+1
				if (_index > 9) {
					_index = 0;
				}
				$(".but ul li").eq(_index).addClass("hover").siblings().removeClass("hover");
				$("ul.adlist li").eq(_index).fadeIn().siblings().fadeOut();
			}, 3000);
		}
		auto_Play(); //调用
	}
	lunbo();
	//主体轮播结束
	
	function marquee(){
		$.ajax({
			type:"get",
			url:"json/index.json",
			dataType: 'json', //数据类型 
			success:function(data){
				$.each(data, function(id,value) {
					console.log(value.content1)
					$('<p/>').appendTo('marquee').html(value.content1).addClass('p1');
					$('<p/>').appendTo('marquee').html(value.content2).addClass('p1');
					$('<p/>').appendTo('marquee').html(value.content3).addClass('p1');
				});
			}
		});
	};
	marquee();
	
});