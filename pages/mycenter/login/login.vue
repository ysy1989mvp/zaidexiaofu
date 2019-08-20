<template>
	<view class="container">
		<view class="content">
			
			<view class="row">
				<view class="name">手机号:</view>
				<view class="val2">
					<input class="input2" placeholder="请输入家长号码" type="number"/>
				</view>
			</view>
			
			<view class="row">
				<view class="name">验证码:</view>
				<view class="val3">
					<input class="input2" placeholder="请输入短信验证码"/>
				</view>
				<view class="fasong" @click="fashe">{{miaoshu}}</view>
			</view>
			<view class="button_ysy">登录</view>
			<view class="button_ysy" @click="regist">注册</view>
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
				miaoshu:'发送',
				list: [ //要展示的数据
					'苹果',
					{
						value: '香蕉',
						disabled: true
					},
					'葡萄',
					'芒果',
					'大白菜',
				],
			}
		},
		methods: {
			fashe(){
				this.miaoshu = 60;
				setInterval(()=>{
					if(this.miaoshu>0){
						this.miaoshu--;
					}
				},1000);
			},
			regist(){
				uni.navigateTo({
					url:"../regist/regist"
				})
			}
		}
	}
</script>

<style>
	.input{
		border: 0upx solid #FFFFFF;
	}
	.row{
		width: 90%;
		height: 60upx;
		margin: 10upx auto;
		display: flex;
		border-bottom: 2upx solid #E5E5E5;
		justify-content: flex-start;
		align-items: center;
		padding: 10upx 0upx;
	}
	.val1{
		width: 70%;
	}
	.name{
		font-size: 32upx;
		margin-right: 20upx;
	}
	.val2{
		width: 60%;
	}
	.val3{
		width: 40%;
	}
	.fasong{
		background-color: #6F0011;
		width: 20%;
		border-radius: 20upx;
		color: #FFFFFF;
		text-align: center;
		font-size: 32upx;
		height: 50upx;
		line-height: 50upx;
	}
	.button_ysy{
		margin-top: 30upx;
		background-color: #6F0011;
	}
</style>
