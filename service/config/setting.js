/**
 * environment
 * 全局配置文件，总体设置
 * 应用过程中不要进行修改
 */

var ENV = (function(){
	// 指定首页地址
	var defaultPage = '';
	/*
	*topic接口说明
	* /topic/event 动态资源
	* '' 静态假数据
	* */

	return {
		// 首页标题
		pageTitleCustom: '项目名',
		// 默认首页
		defaultPage: defaultPage,
		// 展示大屏
		telecommunication: {
			interval: 60, // 分钟
			// 读取真实数据时间间隔
			minute: 2.1, // 分钟
			// 读取模拟数据
			mockDataBoolean: false,
			// 读取真实数据时间间隔
			mockDataTime: 0.5 // 分钟
		},
		ws: {
			// url: '10.23.102.216',
			// port: 8018,
			url: 'example.123.university',
			port: 80,
			// url: '127.0.0.1',
			// port: 6600,
			username: 'admin',
			password: '123456'
		},

		/**
		 * 功能：python 接口
		 * 作者：Abbott.liu
		 *
		 */
		pythonAPI: {

			//userLogin : 'http://10.23.102.148:5002/api/login', // 用户登陆接口 api
			userLogin : 'http://demo.kube.univer/api/login',
			video: '', //
			searchOrdinary: 'http://demo.kube.univer/api/search/title', // 普通搜索接口
			//searchLabel: '/api/search/result', // 周同标签搜索、图片搜索
			searchLabel: 'http://demo.kube.univer/api/search/common',
			searchVideo : 'http://demo.kube.univer/api/search/result', // 周同标签搜索接口
			taskManager: 'http://demo.kube.univer/api/task/manager', // 任务管理器接口
			searchUpload: 'http://demo.kube.univer/api/search/upload', // 上传图片接口
            imageUrlPrefix: 'http://static.kube.univer', // 搜索图片url前缀
            videoUrlPrefix: 'http://' // 视频url前缀
		},

		/**
		 * 状态码
		 */

		stateCode: {
			success: 200
		},

		userRole: {
			demo: 1, // demo 展示用户
			employee: 2 // 内部员工
		},
		
		taskHost:'http://demo.kube.univer/'
		
	}
})();
