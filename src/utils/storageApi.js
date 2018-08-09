/**
 * 时间：2018/07/30
 * 作者：刘建
 * 功能：封装操作 localStorage 本地存储、读取方法
 * @param url
 * @param params {}
 * @param headers
 * @returns {Promise}
 */

let storageApi = {

	//存储
	set(key, value) {
		localStorage.setItem(key, JSON.stringify(value));
	},
	//取出数据
	get(key) {
		return JSON.parse(localStorage.getItem(key));
	},
	// 删除数据
	remove(key) {
		localStorage.removeItem(key);
	}

}

// 暴露给外部访问
export default storageApi;


