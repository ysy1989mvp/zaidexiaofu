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
	uploadurl:"/api/common/upload"
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
	if(token!=null){
		params["token"] = token;
	}
	var contentType = null;
	// if (url1.indexOf("/api/order/calculationprice") > -1||url1.indexOf("/api/order/calculationprice") > -1) {
	// 	contentType = "application/json;charset=utf-8";
	// } else {
	contentType = "application/x-www-form-urlencoded";
	// }
	console.log("提交地址:" + theApi.testurl + url1);
	console.log("提交参数:" + JSON.stringify(params));
	console.log("提交类型:" + contentType);
	uni.request({
		url: theApi.testurl + url1,
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
	
	// console.log("准备向后台发出请求"+url1);
	// var guolv = false;
	// if(url1.indexOf("/api/user/mobilelogin") > -1){
	// 	guolv = true;
	// }
	// if(url1.indexOf("/api/sms/send") > -1){
	// 	guolv = true;
	// }
	// if(url1.indexOf("/api/school") > -1){
	// 	guolv = true;
	// }
	// if(url1.indexOf("/api/school_grade") > -1){
	// 	guolv = true;
	// }
	// if (!guolv) {
	// 	 console.log("未过滤");
	// 	 console.log(url1.indexOf("/api/user/mobilelogin"));
	// 	let token1 = null;
	// 	uni.getStorage({
	// 		key: "token",
	// 		success(res) {
	// 			token1 = res.data;
	// 			if (params["token"] == null) {
	// 				params["token"] = token1;
	// 			}
	// 			var contentType = null;
	// 			// if (url1.indexOf("/api/order/calculationprice") > -1||url1.indexOf("/api/order/calculationprice") > -1) {
	// 			// 	contentType = "application/json;charset=utf-8";
	// 			// } else {
	// 			contentType = "application/x-www-form-urlencoded";
	// 			// }
	// 			console.log("提交地址:" + theApi.testurl + url1);
	// 			console.log("提交参数:" + JSON.stringify(params));
	// 			console.log("提交类型:" + contentType);
	// 			uni.request({
	// 				url: theApi.testurl + url1,
	// 				method: method,
	// 				// header: {'content-type': 'application/json'},
	// 				header: {
	// 					'content-type': contentType,
	// 					// 'Access-Control-Allow-Headers':'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
	// 					// 'Access-Control-Allow-Origin':theApi.testurl
	// 				},
	// 				data: params,
	// 				success: success,
	// 				fail: (error) => {
	// 					if (error.errMsg == "request:fail timeout") { //网络请求超时
	// 						showWindow("网络不稳定，请检查网络设置");
	// 					} else if (error.errMsg == "request:fail 请求超时。") {
	// 						showWindow("网络不稳定，请检查网络设置");
	// 					} else if (error.errMsg == "request:fail ") {
	// 						showWindow("请求失败");
	// 					} else {
	// 						showWindow("加载失败");
	// 					}
	// 				},
	// 				complete: () => {}
	// 			});
	// 		}
	// 	});
	// } else {
	// 	var contentType = null;
	// 	// if (url1.indexOf("/api/order/calculationprice") > -1||url1.indexOf("/api/order/calculationprice") > -1) {
	// 	// 	contentType = "application/json;charset=utf-8";
	// 	// } else {
	// 	contentType = "application/x-www-form-urlencoded";
	// 	// }
	// 	console.log("提交地址:" + theApi.testurl + url1);
	// 	console.log("提交参数:" + JSON.stringify(params));
	// 	console.log("提交类型:" + contentType);
	// 	uni.request({
	// 		url: theApi.testurl + url1,
	// 		method: method,
	// 		// header: {'content-type': 'application/json'},
	// 		header: {
	// 			'content-type': contentType,
	// 			// 'Access-Control-Allow-Headers':'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
	// 			// 'Access-Control-Allow-Origin':theApi.testurl
	// 		},
	// 		data: params,
	// 		success: success,
	// 		fail: (error) => {
	// 			if (error.errMsg == "request:fail timeout") { //网络请求超时
	// 				showWindow("网络不稳定，请检查网络设置");
	// 			} else if (error.errMsg == "request:fail 请求超时。") {
	// 				showWindow("网络不稳定，请检查网络设置");
	// 			} else if (error.errMsg == "request:fail ") {
	// 				showWindow("请求失败");
	// 			} else {
	// 				showWindow("加载失败");
	// 			}
	// 		},
	// 		complete: () => {}
	// 	});
	// }

};

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
// uploaddata
function requestImg(method, params, file, success) {
	let token1 = null;
	uni.getStorage({
		key: "token",
		success(res) {
			token1 = res.data;
			if (params["token"] == null) {
				params["token"] = token1;
			}
			// params["token"] = this.uploaddata.multipart.token;
			// params["bucket"] = this.uploaddata.bucket;
			uni.uploadFile({
				url: theApi.testurl +"/api/common/upload", // 后端api接口
				filePath: file, // uni.chooseImage函数调用后获取的本地文件路劲
				name: 'file', //后端通过'file'获取上传的文件对象
				fileType: 'image',
				formData: params,
				header: {
					"Content-Type": "multipart/form-data"
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
		}
	});
};


function requestType(url, method, params, contentType, success) {
	if (token != null) {
		params["token"] = this.token;
	}
	console.log("提交地址:" + theApi.testurl + url);
	console.log("提交参数:" + params);
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
	tabCurrentIndex
}
