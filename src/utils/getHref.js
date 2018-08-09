// let getHref = window.location.href;
//
// console.log(getHref);
//
// console.log('location.search = ', location.search)
// var qs = (location.search.length>0?location.search.substring(1):"");
// var args = {};
// var items = qs.length?qs.split("&"):[];
// var item = null;
// var name = null;
// var value = null;
//
// var len = items.length;
// for (var i = 0; i < len; i++) {
// 	item = items[i].split("=");
// 	name = decodeURIComponent(item[0]);
// 	value = decodeURIComponent(item[1]);
// 	if (name.length) {
// 		args[name] = value;
// 	}
// }
//
// console.log('args =', args);
//
// let url = 'http://0.0.0.0:5700/api/database/common';
//
// //let username = 'abc';
// //let password = '123'
//
// let postBody = JSON.stringify({
// 	'username': '',
// 	'password': ''
// })
//
// let postHeaders = {
// 	'content-type': 'application/json'
// }
//
// fetch(url, {
// 	method: 'POST',
// 	//body: JSON.stringify({"username":1}),
// 	body: postBody,
// 	headers: {
// 		// 'Accept': 'application/json',
// 		'content-type': 'application/json'
// 	}
// }).then(function(response) {
// 	response.json().then(function (result) {
// 		console.log(result);
// 	})
// })
//
// // console.log( 'HttpUtil = ', HttpUtil)
//
// let postReturnData = HttpUtil.post(url, postBody, postHeaders);
//
// //console.log( 'postReturnData = ', postReturnData)
//
// postReturnData.then(function(value){
// 	console.log('value =', value);
// 	let returnValue = value;
// 	if( returnValue['code'] === ENV.stateCode.success) {
//
// 		Helper.setLocalStorage('userToken', returnValue.data.token);
//
// 		//var dataObjData=get('information',1000);//过期时间为1秒,正常情况下，你点击的时候已经过期
// 		//var dataObjData=get('information',1000*60);//过期时间为1分钟
// 		//var dataObjData=get('information',1000*60*60);//过期时间为1小时
// 		//var Obj=get('information',1000*60*60*24);//过期时间为24小时
// 		var objectData = Helper.getLocalStorage('userToken',1000*60*60*24*7);//过期时间为1周
// 		console.log(objectData || null);
// 		if ( objectData!="" && objectData!=null ) {
// 			//console.log( "token = "+ objectData);
// 			window.location.href= `http://${ENV.ws.url}:${ENV.ws.port}/video.html`;
// 		}else{
// 			console.log("获取的信息已经过期");
// 		}
// 	} else{
// 		//处理自定义异常
// 		_self.setState({
// 			current: 1
// 		})
// 	}
// },function(err){
// 	console.log('error = ', err)
// });