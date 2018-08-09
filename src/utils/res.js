/**
 * 功能：刷新大屏尺寸
 * 作者：Abbott.liu
 * 时间：2018年1月8日
 */

module.exports = {

	/**
	 * 自动调整屏幕
	 * @param dom
	 * 元素
	 * @param pWidth
	 */
	adaptiveScreen(dom, pWidth) {

		//console.log('自动适应开始');
		//console.log(dom);
		//console.log(pWidth);
		dom.style.transform = 'scale(' + pWidth + ')';
		dom.style.transformOrigin = 'left top';

		var html = document.getElementsByTagName('html')[0];

		console.log('html = ', html);
		console.log('height = ', html.style.height);


		//if(document.body.offsetHeight < windowHeight){
		//html.style.height = windowHeight;
		//}
	},
	/**
	 * 刷新大屏函数
	 * @param id
	 */
	resizeWindow(id) {

		var baseWidth = 1920;
		var baseHeight = 1080;

		// querySelector() 方法返回文档中匹配指定 CSS 选择器的一个元素
		var body = document.querySelector('body');
		var scale = document.querySelector(id);

		// 网页可见区域宽： document.body.clientWidth
		// 网页可见区域高： document.body.clientHeight
		var perWidth = body.clientWidth / baseWidth;
		var perHeight = body.clientHeight / baseHeight;

		// console.log(scale)
		var timeout = null;

		var _self = this;

		// onresize 事件会在窗口或框架被调整大小时发生
		window.onresize = function () {
			console.log('重新刷新了');
			clearTimeout(timeout);
			timeout = setTimeout(function () {
				perWidth = body.clientWidth / baseWidth;
				_self.adaptiveScreen(scale, perWidth);
			}, 300);
		};
		this.adaptiveScreen(scale, perWidth);
	},

	/**
	 * 自动调整背景大小
	 * @param dom
	 * 元素
	 * @param pWidth
	 */
	adaptiveImage(dom, pWidth, pHeight) {

		dom.width = pWidth;
		dom.height = pHeight - 5;
		//if(document.body.offsetHeight < windowHeight){
		//html.style.height = windowHeight;
		//}
	},
	/**
	 * 刷新背景图片
	 * @param id
	 */
	resizeImage(id) {

		// querySelector() 方法返回文档中匹配指定 CSS 选择器的一个元素
		var body = document.querySelector('body');
		var scale = document.querySelector(id);

		let landscapeImage = document.getElementById('landscapeImage');
		let landscapeImageClass = document.getElementsByClassName('landscape_image');

		//console.log('scale = ', scale)
		//console.log('landscapeImage = ', landscapeImage)
		//console.log('landscape_image = ', landscapeImageClass)


		// 网页可见区域宽： document.body.clientWidth
		// 网页可见区域高： document.body.clientHeight

		// 网页可见区域宽（包括边线和滚动条的宽）: offsetWidth
		// 网页可见区域高（包括边线的宽）: offsetHeight


		let perWidth = document.documentElement.clientWidth;
		let perHeight = document.documentElement.clientHeight;

		// console.log(scale)
		var timeout = null;

		var _self = this;

		// onresize 事件会在窗口或框架被调整大小时发生
		window.onresize = function () {
			//console.log('重新刷新背景');
			//console.log('网页可见区域宽度 = ', document.documentElement.clientWidth )
			//console.log('网页可见区域高度 = ', document.documentElement.clientHeight )

			clearTimeout(timeout);
			timeout = setTimeout(function () {
				perWidth = document.documentElement.clientWidth ;
				perHeight  = document.documentElement.clientHeight ;
				_self.adaptiveImage(scale, perWidth, perHeight);
			}, 300);
		};

		this.adaptiveImage(scale, perWidth, perHeight);

	},

	adaptiveScreenY(dom, perHeight) {
		dom.style.transform = 'scaleY(' + perHeight + ')';
		dom.style.transformOrigin = 'left top';
	},

	resizeHtmlY(id) {
		var body = document.querySelector('body');
		var scale = document.querySelector(id);

		//console.log('网页可见区域宽 = ', document.documentElement.clientWidth)
		//console.log('网页可见区域高 = ', document.documentElement.clientHeight)

		var baseHeight = 1080;

		var perHeight = document.documentElement.clientHeight / baseHeight;

		var timeout = null;

		var _self = this;
		//console.log('scale = ', scale)

		console.log('perHeight = ', perHeight)

		// scale.style.transform = 'scaleY(' + perHeight + ')';
		// scale.style.transformOrigin = 'left top';

		var html_div = document.querySelector('html');

		console.log('html_div = ', html_div)

		// onresize 事件会在窗口或框架被调整大小时发生
		window.onresize = function () {
			console.log('重新刷新了');
			clearTimeout(timeout);
			timeout = setTimeout(function () {
				perHeight = document.documentElement.clientHeight / baseHeight;
				_self.adaptiveScreenY(scale, perHeight);
			}, 300);
		};
		this.adaptiveScreenY(scale, perHeight);
	},


	resizeMarginTop(id) {
		var body = document.querySelector('body');
		var scale = document.querySelector(id);

		console.log('网页可见区域宽 = ', document.documentElement.clientWidth)
		console.log('网页可见区域高 = ', document.documentElement.clientHeight)

		var baseHeight = 1080;

		var perHeight = document.documentElement.clientHeight / baseHeight;

		var timeout = null;

		var _self = this;

		console.log('scale = ', scale)
	}


}