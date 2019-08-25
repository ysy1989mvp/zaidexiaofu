<template>
	<view class="container">
		<view class="content">
			<view class="red">
				请选择反馈问题的类型
			</view>
			<view class="part1">
				<view class="fw">
					<view class="ee">
						<view class="c1">性能体验</view>
						<view class="c3">白屏、卡顿、闪退/图片加载不出</view>
						<view class="an">
						<async-switch :checked="checked1" @change="change1"></async-switch>
						</view>
					</view>
				</view>
				<view class="fw">
					<view class="ee">
						<view class="c1">功能异常</view>
						<view class="c3">现有功能无法正常使用</view>
						<async-switch :checked="checked2" @change="change2"></async-switch>
					</view>
				</view>
				<view class="fw">
					<view class="ee">
						<view class="c1">产品建议</view>
						<async-switch :checked="checked3" @change="change3"></async-switch>
					</view>
				</view>
				<view class="fw">
					<view class="ee">
						<view class="c1">其他反馈</view>
						<async-switch :checked="checked4" @change="change4"></async-switch>
					</view>
				</view>
			</view>
			<view class="red">
				意见反馈
			</view>
			<view class="yijian">
				<textarea placeholder="您的意见……" v-model="content"></textarea>
			</view>
			<view class="images">
				<uploadimgs></uploadimgs>
			</view>
		</view>
		<view class="button_ysy" @click="tijiao">提交反馈</view>
	</view>
</template>

<script>
	import uploadimgs from "@/components/upload-image/upload-imgs.vue"
	import asyncSwitch from "@/components/helang-asyncSwitch/helang-asyncSwitch.vue"
	export default {
		components: {
			"async-switch": asyncSwitch,
			uploadimgs
		},
		data() {
			return {
				checked1: false,
				checked2: false,
				checked3: false,
				checked4: false,
				content:''
			}
		},
		methods: {
			change1() {
				/* 设置 switch 组件是否选中的状态 */
				this.checked1 = !this.checked1;
				if(this.checked1){
				this.checked2 = false;
				this.checked3 = false;
				this.checked4 = false;
				}
			},
			change2() {
				/* 设置 switch 组件是否选中的状态 */
				this.checked2 = !this.checked2;
				if(this.checked2){
				this.checked1 = false;
				this.checked3 = false;
				this.checked4 = false;
				}
			},
			change3() {
				/* 设置 switch 组件是否选中的状态 */
				this.checked3 = !this.checked3;
				if(this.checked3){
				this.checked2 = false;
				this.checked1 = false;
				this.checked4 = false;
				}
			},
			change4() {
				/* 设置 switch 组件是否选中的状态 */
				this.checked4 = !this.checked4;
				if(this.checked4){
				this.checked2 = false;
				this.checked3 = false;
				this.checked1 = false;
				}
			},
			tijiao(){
				let type = 0;
				if(this.checked1){
					type = 1;
				}
				if(this.checked2){
					type = 2;
				}
				if(this.checked3){
					type = 3;
				}
				if(this.checked4){
					type = 4;
				}
				let images = '';
				for(let i=0;i<this.util.uploadImgas.length;i++){
					images += this.util.uploadImgas[i]+",";
				}
				let params = {
					"type": type,//头像
					"images": images,//电话
					"content": this.content,//性别
				};
				let url1 = "/api/question_feedback/add";
				this.util.request(url1, "POST", params, (res) => {
					console.log(JSON.stringify(res));
					if (res.statusCode == 200) {
						if (res.data.code == 1) {
							uni.navigateTo({
								url:"../index/index"
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
	.content {
		background-color: #B2B2B2;
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
	}

	.fw {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #FFFFFF;
		border-bottom: 2upx solid #A5A5A5;
	}

	.ee {
		display: flex;
		flex-direction: row;
		margin-top: 15upx;
		margin-bottom: 15upx;
		height: 80upx;
		justify-content: space-between;
		align-items: center;
		font-size: 28upx;
		width: 90%;
	}

	.red {
		font-size: 28upx;
		color: #6E0012;
		width: 90%;
		padding: 20upx 40upx;
		background-color: #EEEEEE;
	}

	.c1 {
		width: 20%;
	}

	.c3 {
		width: 70%;
		color: #8F8F94;
	}

	.yijian {
		width: 100%;
		background-color: #FFFFFF;
	}

	textarea {
		background-color: #FFFFFF;
		width: 90%;
		margin: 6upx auto;
		border: 2upx solid #EEEEEE;
	}

	.images {
		background-color: #FFFFFF;
		padding: 0upx 5vw;
	}
</style>
