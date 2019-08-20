<template>
	<view class="container">
		<view class="content">
			<view class="row">
				<view class="name">选择学校:</view>
				<view class="val1">
					<xfl-select :list="xuexiaodata" :clearable="false" :showItemNum="5" :listShow="true" :isCanInput="true" :style_Container="'height: 40px; font-size: 16px;'"
					 :placeholder="'点击选择或输入有效学校'" :initValue="''" :selectHideType="'hideAll'" @change="xuexiaochange">
					</xfl-select>
				</view>
			</view>
			<view class="row">
				<view class="name">输入学校编号:</view>
				<view class="val2">
					<input class="input2" type="number" />
				</view>
			</view>
			<view class="row">
				<view class="name">输入学生年级:</view>
				<view class="val2">
					<input class="input2" />
				</view>
			</view>
			<view class="row">
				<view class="name">输入学生姓名:</view>
				<view class="val2">
					<input class="input2" />
				</view>
			</view>
			<view class="row">
				<view class="name">输入手机号码:</view>
				<view class="val2">
					<input class="input2" placeholder="(家长)" type="number" />
				</view>
			</view>
			<view class="row">
				<view class="name">输入学号:</view>
				<view class="val2">
					<input class="input2" placeholder="(选填)" />
				</view>
			</view>
			<view class="row">
				<view class="name">短信验证码:</view>
				<view class="val3">
					<input class="input2" placeholder="请输入验证码" />
				</view>
				<view class="fasong" @click="fashe">{{miaoshu}}</view>
			</view>
			<view class="button_ysy" @click="regist">提交资料</view>
		</view>
	</view>
</template>

<script>
	import xflSelect from '@/components/xfl-select/xfl-select.vue';

	export default {
		components: {
			xflSelect
		}, //注册为子组件
		data() {
			return {
				miaoshu: '发送',
				xuexiaodata: [{
						"id": 2,
						"value": "云南师范大学附属中学 ",
						"image": "/uploads/20190808/FiiCiSUPseWbCrvNDB1cisCKzrc-.jpg",
						"code": "111111",
						"createtime": 1565235005
					},
					{
						"id": 1,
						"value": "云南大学",
						"image": "/uploads/20190808/FhT1DEAfZr9IZXvJ_46KhdEat75q.jpg",
						"code": "2222",
						"createtime": 1565234412
					}
				],
			}
		},
// 		onLoad() {
// 			let params = {};
// 			let url = "/api/school";
// 
// 			this.util.request(url, "POST", params, (res) => {
// 				if (res.statusCode == 200) {
// 					if (res.data.code == 1) {
// 						this.xuexiaodata = res.data.data;
// 					} else {
// 						this.util.showWindow(res.data.msg);
// 					}
// 				} else {
// 					this.util.showWindow("请求错误");
// 				}
// 			});
		// },
		methods: {
			xuexiaochange({newVal, oldVal, index, orignItem}){
				console.log(newVal, oldVal, index, orignItem);
				
			},
			fashe() {
				let params = {
					"mobile": this.mobile
				};
				let url = "/api/sms/send";

				this.util.request(url, "POST", params, (res) => {
					if (res.statusCode == 200) {
						if (res.data.code == 1) {
							this.util.showWindow("短信发送成功");
						} else {
							this.util.showWindow(res.data.msg);
						}
					} else {
						this.util.showWindow("请求错误");
					}
				});
				this.miaoshu = 60;
				setInterval(() => {
					if (this.miaoshu > 0) {
						this.miaoshu--;
					}
				}, 1000);
			},
			//注册
			regist() {
				let params = {
					"mobile": this.mobile
				};
				let url = "/api/sms/send";

				this.util.request(url, "POST", params, (res) => {
					if (res.statusCode == 200) {
						if (res.data.code == 1) {
							this.util.showWindow("短信发送成功");
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
		margin-right: 20upx;
	}

	.val2 {
		width: 60%;
	}

	.val3 {
		width: 40%;
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
		margin-top: 130upx;
		background-color: #6F0011;
	}
</style>
