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
			} else if (error.errMsg == "request:fail") {
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
// 方案一：
function onBridgeReady(data,callback){
				showWindow("开始支付");
				WeixinJSBridge.invoke(
					'getBrandWCPayRequest', {
						"appId": data.payData.appId, //公众号名称，由商户传入     
						"timeStamp": data.payData.timeStamp, //时间戳，自1970年以来的秒数     
						"nonceStr":  data.payData.nonceStr, //随机串     
						"package": data.payData.package,
						"signType": "MD5", //微信签名方式：     
						"paySign": data.payData.paySign //微信签名 
					},
					(res) => {
						showWindow("返回结果:res:"+JSON.stringify(res));
						typeof(callback)==='function'&&callback(res);
					},
					(error) => {
						showWindow("返回错误结果:res:"+JSON.stringify(error));
					});
			}

// 方案二：
const wx = require('@/common/jweixin-1.4.0.js');
const wexinPay = (data, cb, errorCb) => {
    let [appId, timestamp, nonceStr, signature, packages, paySign] = [data.appId, data.timeStamp, data.nonceStr, data.signature,
        data.package, data.paySign
    ];
 
    wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId, // 必填，公众号的唯一标识
        timestamp, // 必填，生成签名的时间戳
        nonceStr, // 必填，生成签名的随机串
        signature, // 必填，签名，见附录1A
        jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });
 
    wx.ready(function() {
        wx.chooseWXPay({
            timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
            nonceStr, // 支付签名随机串，不长于 32 位
            'package': packages, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
            signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
            paySign, // 支付签名
            success(res) {
                // 支付成功后的回调函数
                cb(res);
            },
            fail(res) {
                errorCb(res);
            }
        });
    });
 
    wx.error(function(res) {
        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
        /*alert("config信息验证失败");*/
    });
}
 


export default {
	wexinPay,
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
	onBridgeReady,
}
