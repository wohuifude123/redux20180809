#!/bin/bash

if [ ! -f "./service/config/setting.js" ];then
    echo "文件不存在"
else
    rm -f ./service/config/setting.js
fi

UNIVER_USER_LOGIN=${UNIVER_USER_LOGIN:-http://127.0.0.1/api/login}

UNIVER_PROJECR_URL=${UNIVER_PROJECR_URL:-127.0.0.1}
UNIVER_PROJECR_PORT=${UNIVER_PROJECR_PORT:-6600}


if [ $UNIVER_SEARCH_ORDINARY ]; then
    searchOrdinary=$UNIVER_SEARCH_ORDINARY
else
    searchOrdinary='http://127.0.0.1/api/search/common'
fi

if [ $UNIVER_SEARCH_LABEL ]; then
    searchLabel=$UNIVER_SEARCH_LABEL
else
    searchLabel='http://127.0.0.1/api/search/common'
fi

UNIVER_SEARCH_VIDEO=${UNIVER_SEARCH_VIDEO:-http://127.0.0.1/api/search/common}

if [ $UNIVER_TASK_MANAGER ]; then
    taskManager=$UNIVER_TASK_MANAGER
else
    taskManager='http://127.0.0.1/api/task/manager'
fi

if [ $UNIVER_TASK_HOST ]; then
    taskHost=$UNIVER_TASK_HOST
else
    taskHost='http://demo.kube.univer/'
fi

if [ $UNIVER_SEARCH_UPLOAD ]; then
    searchUpload=$UNIVER_SEARCH_UPLOAD
else
    searchUpload='http://demo.kube.univer/'
fi

if [ $UNIVER_IMAGE_URL ]; then
    imageUrlPrefix=$UNIVER_IMAGE_URL
else
    imageUrlPrefix='http://demo.kube.univer/'
fi

if [ $UNIVER_VIDEO_URL ]; then
    videoUrlPrefix=$UNIVER_VIDEO_URL
else
    videoUrlPrefix='http://demo.kube.univer/'
fi

echo "/**
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
			userLogin : '$UNIVER_USER_LOGIN',
			video: '', //
			searchOrdinary: '$searchOrdinary', // 普通搜索接口
			//searchLabel: '/api/search/result', // 周同标签搜索、图片搜索
			searchLabel: '$searchLabel',
			searchVideo : '$UNIVER_SEARCH_VIDEO', // 周同标签搜索接口
			taskManager: '$taskManager', // 任务管理器接口
			searchUpload: '$searchUpload', // 上传图片接口
            imageUrlPrefix: '$imageUrlPrefix', // 搜索图片url前缀
            videoUrlPrefix: '$videoUrlPrefix' // 视频url前缀
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
		
		taskHost:'$taskHost'
		
	}
})();" >> ./service/config/setting.js

