<template>
	<view>
		{{status_ysy}}
	</view>
</template>

<script>
	var wx = require('../../../common/jweixin-1.4.0.js')
	export default {
		data() {
			return {
				order_id: '',
				order_no:'',
				code_state: '',
				code: '',
				status_ysy: '',
				data: {}
			}
		},
		onShow() {
			this.order_id = uni.getStorageSync("order_id");
			this.order_no = uni.getStorageSync("order_no");
			// this.code = option.code;
			var url = window.location.href;
			this.code_state = url.substring(url.indexOf("?") + 1, url.indexOf("#"));
			this.code = this.code_state.substring(0, this.code_state.indexOf("&"));
			this.code = this.code.substr(this.code.indexOf("=") + 1, 32);
			// this.status_ysy = this.code;
			let params1 = {
				"order_no": this.order_id,
				"code": this.code
			}
			// this.status_ysy = JSON.stringify(params1);
			let url1 = "/api/order/orderpay";
			this.util.request(url1, "GET", params1, (res) => {
				// this.util.showWindow(JSON.stringify(res.data.data));
				if (res.statusCode == 200) {
					if (res.data.code == 1) {
						this.data = res.data.data;
						/********方案一*******/
						// // 安卓调用微信支付 
						// if (typeof WeixinJSBridge == "undefined") {
						// 	this.util.showWindow("没有对象");
						// 	if (document.addEventListener) {
						// 		this.util.showWindow("addeventlistener看看");
						// 		document.addEventListener('WeixinJSBridgeReady', this.util.onBridgeReady, false);
						// 	} else if (document.attachEvent) {
						// 		this.util.showWindow("attachEvent看看");
						// 		document.attachEvent('WeixinJSBridgeReady', this.util.onBridgeReady);
						// 		document.attachEvent('onWeixinJSBridgeReady', this.util.onBridgeReady);
						// 	}
						// } else {
						// 	this.util.showWindow("准备支付");
						// 	this.util.onBridgeReady(this.data,(res) => {
						// 		this.util.showWindow("支付结束，result:"+JSON.stringify(res));
						// 		this.status_ysy = JSON.stringify(res);
						// 		console.log(JSON.stringify(res));
						// 		if (res.err_msg == "get_brand_wcpay_request:ok") {
						// 			// 使用以上方式判断前端返回,微信团队郑重提示：
						// 			//res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
						// 			this.util.showWindow("支付成功");
						// 			uni.switchTab({
						// 				url: "../index/index"
						// 			});
						// 		}
						// 	});
						// }
						/********方案一*******/

						/********方案二*******/
						this.util.wexinPay(this.data.payData,
							(res) => {
								this.util.showWindow("支付成功");
								this.order_no = uni.getStorageSync("order_no");
								uni.navigateTo({
									url: "../orderdetail/orderdetail?type=1&id=" + this.order_no
								});
								// let params3 = {
								// 	"order_id": this.order_id,
								// 	"package": this.data.payData.package
								// }
								// let url1 = "/api/orderpay/return";
								// this.util.request(url1, "GET", params3, (res) => {
								// 	if (res.statusCode == 200) {
								// 		if (res.data.code == 1) {
								// 			uni.navigateTo({
								// 				url: "../orderdetail/orderdetail?id=" + this.order_id
								// 			})
								// 		} else {
								// 			this.util.showWindow(res.data.msg);
								// 			return;
								// 		}
								// 	} else {
								// 		this.util.showWindow("请求支付结果通知出现错误");
								// 		return;
								// 	}
								// });
							}, (res) => {
								this.order_no = uni.getStorageSync("order_no");
								this.util.showWindow("支付失败");
								uni.navigateTo({
									url: "../orderdetail/orderdetail??type=1&id=" + this.order_no
								})
							});

					} else {
						this.util.showWindow(res.data.msg);
						return;
					}
				} else {
					this.util.showWindow("请求错误1");
					return;
				}
			});
		},
		methods: {}
	}
</script>

<style>

</style>
