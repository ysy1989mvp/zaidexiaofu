<template>
	<view class="container">
		<view class="content">

			<view class="row">
				<view class="name">手机号:</view>
				<view class="val2">
					<input class="input2" placeholder="请输入家长号码" type="number" v-model="mobile" />
				</view>
			</view>
			<view class="row">
				<view class="name">密 码:</view>
				<view class="val2">
					<input class="input2" placeholder="请输入密码" type="password" v-model="pwd" />
				</view>
			</view>
<!-- 
			<view class="row">
				<view class="name">验证码:</view>
				<view class="val3">
					<input class="input2" placeholder="请输入短信验证码" v-model="vcode" />
				</view>
				<view class="fasong" @click="fashe">{{miaoshu}}</view>
			</view> -->
			<view class="button_ysy" @click="login">登录</view>
			<view class="button_ysy" @click="regist">注册</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				miaoshu: '发送',
				mobile: '',
				// vcode: ''
				pwd:''
			}
		},
		methods: {
// 			fashe() {
// 				if (this.mobile == '') {
// 					this.util.showWindow("电话号码不能为空");
// 					return;
// 				}
// 				let params = {
// 					"mobile": this.mobile
// 				};
// 				let url = "/api/sms/send";
// 
// 				this.util.request(url, "POST", params, (res) => {
// 					if (res.statusCode == 200) {
// 						if (res.data.code == 1) {
// 							this.util.showWindow("短信发送成功");
// 						} else {
// 							this.util.showWindow(res.data.msg);
// 						}
// 					} else {
// 						this.util.showWindow("请求错误");
// 					}
// 				});
// 				this.miaoshu = 60;
// 				setInterval(() => {
// 					if (this.miaoshu > 0) {
// 						this.miaoshu--;
// 					} else if (this.miaoshu == 0) {
// 						this.miaoshu = "重新发送";
// 					}
// 				}, 1000);
// 			},
			regist() {
				uni.navigateTo({
					url: "../regist/regist"
				})
			},
			login() {
				let params = {
					"mobile": this.mobile,
					"password": this.pwd
				};
				let url = "/api/user/mobilelogin";
				this.util.request(url, "POST", params, (res) => {
					//console.log(JSON.stringify(res));
					if (res.statusCode == 200) {
						if (res.data.code == 1) {
							uni.setStorageSync('token', res.data.data.userinfo.token);
							// uni.setStorage({
							// 	key: "token",
							// 	data: res.data.data.userinfo.token,
							// });
							// this.util.token = res.data.data.userinfo.token;
							uni.switchTab({
								url: "../../index/index/index"
							});
						} else {
							this.util.showWindow(res.data.msg);
						}
					} else {
						this.util.showWindow("请求错误");
					}
				});

			}
		}
	}
</script>

<style>
	.input {
		border: 0upx solid #FFFFFF;
	}

	.row {
		width: 90%;
		height: 60upx;
		margin: 10upx auto;
		display: flex;
		border-bottom: 2upx solid #E5E5E5;
		justify-content: flex-start;
		align-items: center;
		padding: 10upx 0upx;
	}

	.val1 {
		width: 70%;
	}

	.name {
		font-size: 32upx;
		margin-right: 10upx;
	}

	.val2 {
		width: 60%;
	}

	.val3 {
		width: 60%;
	}

	.fasong {
		background-color: #6F0011;
		width: 20%;
		border-radius: 20upx;
		color: #FFFFFF;
		text-align: center;
		font-size: 32upx;
		height: 50upx;
		line-height: 50upx;
	}

	.button_ysy {
		margin-top: 30upx;
		background-color: #6F0011;
	}
</style>
