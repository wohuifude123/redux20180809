let dataReadStart = 0;
let showPageData = 12;

module.exports = {

	async getData(start) {

		const _self = this;

		var response = [];

		try {

			const response = await fetch(`virtual/ocr/data${(start+ 1 + '').padStart(2, '0')}.json`)
			return await response.json();

		} catch (e) {
			console.log("Oops, error", e)
		}
	}
}


// getData(dataReadStart)
// 	.then(function(responseThenData) {
// 		console.log('responseThenData =', responseThenData);
// 		console.log(responseThenData['data'].length%showPageData)
// 	})
// 	.then(function() {
// 		//console.log('abc')
// 	})
// 	.catch(function(e) {
// 		console.log("promise, error =", e);
// 	})

// let dataPromise = _self.getData(dataReadStart);
// var showTime = new Date();
// showTime = showTime.getHours()+':'+showTime.getMinutes()+':'+showTime.getSeconds()
// console.log(`时间 ${showTime} 数据Promise =`,dataPromise);
//
// console.log('REACT_APP_SECRET_CODE = ', process.env.REACT_APP_SECRET_CODE)