import Vue from 'vue'
import theApi from "@/common/api.js"
const token = null;
const tabCurrentIndex = 0;
// "data": {
//     "uploadurl": "https://upload-z2.qiniup.com",
//     "cdnurl": "http://cdn.douke.51dreaming.com",
//     "savekey": "/uploads/{year}{mon}{day}/{filemd5}{.suffix}",
//     "maxsize": "10M",
//     "mimetype": "jpg,png,bmp,jpeg,gif,zip,rar,xls,xlsx",
//     "multiple": false,
//     "bucket": "douke",
//     "multipart": {
//       "token": "sJw9Qcazsr_MfxUSyeQyj6WTJ83owE6tjjz1KODF:CAmFMpepABq2cP2cr1ZGRztiRsM=:eyJzYXZlS2V5IjoidXBsb2Fkc1wvJCh5ZWFyKSQobW9uKSQoZGF5KVwvJChldGFnKSQoZXh0KSIsInNjb3BlIjoiZG91a2UiLCJkZWFkbGluZSI6MTU2NTM1OTY1Nn0=",
//       "admin": 0,
//       "user": 0
//     }

const uploaddata = {
	uploadurl: "/api/common/upload"
}; // 文件上传需要的配置数据
const uploadImgas = []; //上传云图片到后台的图片数据
const orderdata = null; //订单确认页数据
/**
 * 封装请求方法
 * url:请求地址
 * params：请求参数
 * method: 请求方式
 * success: 请求成功的回调
 */
function request(url1, method, params, success) {
	var token = uni.getStorageSync('token');
	////console.log("token---------"+token);
	var contentType = "application/x-www-form-urlencoded";
	//console.log("提交地址:" + theApi.testurl + url1);
	//console.log("提交参数:" + JSON.stringify(params));
	//console.log("提交类型:" + contentType);
	uni.request({
		url: theApi.testurl + url1,
		method: method,
		// header: {'content-type': 'application/json'},
		header: {
			'content-type': contentType,
			'token': token
			// 'Access-Control-Allow-Headers':'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
			// 'Access-Control-Allow-Origin':theApi.testurl
		},
		data: params,
		success: success,
		fail: (error) => {
			if (error.errMsg == "request:fail timeout") { //网络请求超时
				showWindow("网络不稳定，请检查网络设置");
			} else if (error.errMsg == "request:fail 请求超时。") {
				showWindow("网络不稳定，请检查网络设置");
			} else if (error.errMsg == "request:fail ") {
				showWindow("请求失败");
			} else {
				showWindow("加载失败");
			}
		},
		complete: () => {}
	});
};

function requestImg(method, params, file, success) {
	////console.log("本地文件路径:"+file);
	////console.log("本地文件路径:"+JSON.stringify(params));
	var token = uni.getStorageSync('token');
	uni.uploadFile({
		url: theApi.testurl + "/api/common/upload", // 后端api接口
		filePath: file, // uni.chooseImage函数调用后获取的本地文件路劲
		name: 'file', //后端通过'file'获取上传的文件对象
		formData: {
			"token": token
		},
		success: success,
		fail: (error) => {
			if (error.errMsg == "request:fail timeout") { //网络请求超时
				showWindow("网络不稳定，请检查网络设置");
			} else if (error.errMsg == "request:fail 请求超时。") {
				showWindow("网络不稳定，请检查网络设置");
			} else if (error.errMsg == "request:fail ") {
				showWindow("请求失败");
			} else {
				showWindow("加载失败");
			}
		},
		complete: () => {}
	});
};


function requestType(url, method, params, contentType, success) {
	if (token != null) {
		params["token"] = this.token;
	}
	////console.log("提交地址:" + theApi.testurl + url);
	////console.log("提交参数:" + params);
	uni.request({
		url: theApi.testurl + url,
		method: method,
		// header: {'content-type': 'application/json'},
		header: {
			'content-type': contentType,
			// 'Access-Control-Allow-Headers':'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
			// 'Access-Control-Allow-Origin':theApi.testurl
		},
		data: params,
		success: success,
		fail: (error) => {
			if (error.errMsg == "request:fail timeout") { //网络请求超时
				showWindow("网络不稳定，请检查网络设置");
			} else if (error.errMsg == "request:fail 请求超时。") {
				showWindow("网络不稳定，请检查网络设置");
			} else if (error.errMsg == "request:fail ") {
				showWindow("请求失败");
			} else {
				showWindow("加载失败");
			}
		},
		complete: () => {}
	});
};

function isSuccess(data) {
	if (data.result) {
		if (data.result.status == "failed") {
			loadClose()
			showWindow(data.result.data.message);
			return false
		} else {
			//status可能是“none” 或者“success”
			return true
		}
	} else {
		loadClose()
		showWindow("加载失败");
		return false
	}
};



function showWindow(txt) {
	uni.showToast({
		title: txt,
		icon: "none",
		duration: 2000
	})
}


/**
 * 预览图片
 * imageList：图片集合
 * index：当前图片index
 */
function previewImage(imageList, index) {
	for (let i = 0; i < imageList.length; i++) {
		if (imageList[i].indexOf(this.uploaddata.cdnurl) == -1) {
			let img = this.uploaddata.cdnurl + "/" + imageList[i];
			imageList[i] = img;
		}
	}
	uni.previewImage({
		current: imageList[index],
		urls: imageList
	});
}

function tokenCheck(callback) {
	var result = false;
	var token1 = uni.getStorageSync('token');
	var token2 = null;
	if (token1 == null && token1 == '') {
		return result;
	} else {
		let params = {};
		let url = "/api/token/check";
		this.request(url, "GET", params, (res) => {
			if (res.statusCode == 200) {
				if (res.data.code == 1) {
					token2 = res.data.data.token;
					if (token2 == token1) {
						result = true;
					}
					//console.log("校验回来的token：" + token2);
				} else {
					this.showWindow(res.data.msg);
				}
			} else if (res.data.code == 401) {
					result = false;
					//console.log("401的token：" + token);
			} else {
				this.util.showWindow("请求错误");
			}
			typeof(callback)==='function'&&callback(result);
		});
	}

}


export default {
	request,
	isSuccess,
	showWindow,
	previewImage,
	token,
	requestImg,
	requestType,
	uploaddata,
	uploadImgas,
	tabCurrentIndex,
	tokenCheck,
}
