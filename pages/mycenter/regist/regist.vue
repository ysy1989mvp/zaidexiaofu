<template>
	<view class="container">
		<view class="content">
			<view class="top">
				<image class="logo" src="../../../static/ysy/logo.png"></image>
			</view>
			<view class="row">
				<view class="name">选择学校:</view>
				<view class="val1">
					<xfl-select :list="xuexiaodata" :clearable="false" :showItemNum="50" :listShow="false" :isCanInput="true" :style_Container="'height: 34px; font-size: 16px;'"
					 :placeholder="'点击选择或输入有效学校'" :initValue="'点击选择或输入有效学校'" :selectHideType="'hideAll'" @change="xuexiaochange">
					</xfl-select>
				</view>
			</view>
			<view class="row">
				<view class="name">学校编号:</view>
				<view class="val2">
					<input class="input2" type="number" v-model="schoolcode" disabled="disabled"/>
				</view>
			</view>
			<view class="row">
				<view class="name">学生年级:</view>
				<view class="val2">
					<xfl-select :list="nianjidata" :clearable="false" :showItemNum="50" :listShow="false" :isCanInput="true" :style_Container="'height: 34px; font-size: 16px;'"
					 :placeholder="'选择年级'" :initValue="'选择年级'" :selectHideType="'hideAll'" @change="nianjichange">
					</xfl-select>
				</view>
			</view>
			<!-- <view class="row">
				<view class="name">学生昵称:</view>
				<view class="val2">
					<input class="input2" v-model="studentName"/>
				</view>
			</view> -->
			<view class="row">
				<view class="name">输入手机号码:</view>
				<view class="val2">
					<input class="input2" placeholder="(家长)" type="number" v-model="mobile"/>
				</view>
			</view>
			<view class="row">
				<view class="name">学生姓名:</view>
				<view class="val2">
					<input class="input2" placeholder="(必填)" v-model="studentNo"/>
				</view>
			</view>
			<view class="row">
				<view class="name">密码:</view>
				<view class="val2">
					<input class="input2" type="password" placeholder="(必填)" v-model="pwd"/>
				</view>
			</view>
			<view class="row">
				<view class="name">确认密码:</view>
				<view class="val2">
					<input class="input2" type="password" placeholder="(必填)" v-model="comfirmpwd"/>
				</view>
			</view>
			<view class="row">
				<view class="name">短信验证码:</view>
				<view class="val3">
					<input class="input2" placeholder="请输入验证码" v-model="vcode"/>
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
				pwd:'',
				comfirmpwd:'',
				miaoshu: '发送',
				xuexiaodata: [],
				schoolcode:'',
				schoolid:'',
				nianjiid:'',
				nianjidata:[],
				// studentName:'',
				studentNo:'',
				vcode:'',
				mobile:''
				
				
			}
		},
		onLoad() {
			let params = {};
			let url = "/api/school";

			this.util.request(url, "POST", params, (res) => {
				if (res.statusCode == 200) {
					if (res.data.code == 1) {
						this.xuexiaodata = res.data.data;
						
					} else {
						this.util.showWindow(res.data.msg);
					}
				} else {
					this.util.showWindow("请求错误");
				}
			});
		},
		methods: {
			xuexiaochange({newVal, oldVal, index, orignItem}){
				//console.log(newVal, oldVal, index, orignItem);
				this.schoolcode = orignItem.code;
				this.schoolid = orignItem.id;
				let params = {
					"id":this.schoolid
				};
				let url = "/api/school_grade";
				
				this.util.request(url, "GET", params, (res) => {
					if (res.statusCode == 200) {
						if (res.data.code == 1) {
							this.nianjidata = res.data.data;
						} else {
							this.util.showWindow(res.data.msg);
						}
					} else {
						this.util.showWindow("请求错误");
					}
				});
			},
			nianjichange({newVal, oldVal, index, orignItem}){
				this.nianjiid = orignItem.id;
			},
			fashe() {
				if(this.mobile==null){
					this.util.showWindow("电话号码不能为空");
					return;
				}
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
				if(this.pwd!=this.comfirmpwd){
					this.util.showWindow("密码输入不一致");
					return;
				}
				let params = {
					"mobile": this.mobile,
					"schoolId":this.schoolid,
					"schoolCode":this.schoolcode,
					"gradeId":this.nianjiid,
					// "name":this.studentName,
					"sno":this.studentNo,
					"captcha":this.vcode,
					"password":this.pwd
				};
				let url = "/api/user/mobilelogin";
				this.util.request(url, "POST", params, (res) => {
					if (res.statusCode == 200) {
						if (res.data.code == 1) {
							// window.localStorage.setItem("token", res.data.data.userinfo.token);
							// this.util.token = res.data.data.userinfo.token;
							uni.setStorageSync('token', res.data.data.userinfo.token);
							//成功后直接登陆
							uni.switchTab({
								url:"../../index/index/index"
							})
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
	.top{
		width: 100%;
		height: 82upx;
		display: flex;
		flex-direction: row-reverse;
		/* justify-content: center; */
		align-items: center;
	}
	.logo{
		width: 80upx;
		height: 80upx;
		margin-top: 20upx;
		margin-right: 20upx;
	}
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
	.input2{
		font-size: 28upx;
		color: #A5A5A5;
	}
</style>
