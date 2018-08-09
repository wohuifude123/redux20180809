/**
 * 功能：第三方工具类
 * 作者：刘建
 * 时间：2018年7月23日
 */

module.exports = {

	/**
	 * 自动调整屏幕
	 * @param dom
	 * 元素
	 * @param pWidth
	 */
	searchAPI(apiUrl) {

		var url, xhr, results, promise;
		url = apiUrl;
		promise = new Promise();
		xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);

		xhr.onload = function (e) {
			if (this.status === 200) {
				results = JSON.parse(this.responseText);
				promise.resolve(results);
			}
		};

		xhr.onerror = function (e) {
			promise.reject(e);
		};

		xhr.send();
		return promise;
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
	 * 设置 LocalStorage
	 * @param
	 */
	setLocalStorage(key,value){
		var curTime = new Date().getTime();
		var localStorageJSON = {
			data:value,
			time:curTime
		}
		localStorage.setItem(key,JSON.stringify(localStorageJSON));
	},
	/**
	 * 获取 LocalStorage
	 * @param
	 */
	getLocalStorage(key,exp){
		var data = localStorage.getItem(key);
		var dataObj = JSON.parse(data);
		if (new Date().getTime() - dataObj.time>exp) {
			console.log('信息已过期');
			//alert("信息已过期")
		}else{
			//console.log("data="+dataObj.data);
			//console.log(JSON.parse(dataObj.data));

			console.log("data="+JSON.stringify(dataObj));

			var dataObjDataToJson = dataObj.data
			return dataObjDataToJson;
		}
	}

}







