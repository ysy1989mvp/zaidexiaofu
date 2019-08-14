<template>
	<view class="container">
		<view class="content">
				<swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1500">
					<swiper-item v-for="(item , index) in homeSlide" :key="index">
						<image :src="item" mode="aspectFill"></image>
					</swiper-item>
				</swiper>
				
				<view class="part2">
					<image src="../../../static/lxy/30.png" mode=""></image>
				</view>
				<view class="part2a">
					<view class="part3">
						<view class="a lxy">
							<image src="../../../static/lxy/xiaofudingou@3x.png"></image>
							<text>校服订购</text>
						</view>
						<view class="b lxy">
							<image src="../../../static/lxy/pingpaigushi@3x.png"></image>
							<text>品牌故事</text>
						</view>
						<view class="c lxy">
							<image src="../../../static/lxy/anli@3x.png"></image>
							<text>案例</text>
						</view>
						<view class="d lxy">
							<image src="../../../static/lxy/gongyiliuc.png"></image>
							<text>工艺流程</text>
						</view>
					</view>
				</view>
				<view class="part4">
					<view class="part4a">LOADTAK SCHOOL UNIFORM DISPLAY</view>
					<view class="part4b">载德校服套装展示</view>
				</view>
				<view class="last part">
					<view class="part5 left">
						<view class="part5a mt">
							<image src="../../../static/lxy/a1.png"></image>
						</view>
						<view class="part5b price">
							<view class="ZW">英伦典雅学院风</br>西装套装</view>
							<view class="YW">Our strengths are British elegance college style</view>
							<view class="JQ">￥450</view>
							<view class="XQ">详情>>></view>
						</view>
					</view>
					<view class="part5 right">
						<view class="part5a mt">
							<image src="../../../static/lxy/a1.png"></image>
						</view>
						<view class="part5b price">
							<view class="ZW">英伦经典菱形格套装</view>
							<view class="YW">Class British diamond</view>
							<view class="JQ">￥399</view>
							<view class="XQ">详情>>></view>
						</view>
					</view>
					<view class="part5 left">
						<view class="part5a mt">
							<image src="../../../static/lxy/a1.png"></image>
						</view>
						<view class="part5b price">
							<view class="ZW">英伦学院风藏蓝格子西服套装</view>
							<view class="YW">British college style navy blue checked suit</view>
							<view class="JQ">￥450</view>
							<view class="XQ">详情>>></view>
						</view>
					</view>
					<view class="part5 right">
						<view class="part5a mt">
							<image src="../../../static/lxy/a1.png"></image>
						</view>
						<view class="part5b price">
							<view class="ZW">英伦典雅学院风</view>
							<view class="YW">Our strengths are British elegance college style</view>
							<view class="JQ">￥450</view>
							<view class="XQ">详情>>></view>
						</view>
					</view>
				</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				homeSlide: ["../../../static/lxy/1.png",
				"../../../static/lxy/1.png",
				"../../../static/lxy/1.png",
				"../../../static/lxy/1.png",
				"../../../static/lxy/1.png",],// 定义值接收轮播图数据
			}
		},
		onLoad() {
			
		},
		methods: {

			// #ifndef MP
			// 标题栏input搜索框点击
			onNavigationBarSearchInputClicked: async function(e) {
				this.$api.msg('点击了搜索框');
			},
			//点击导航栏 buttons 时触发
			onNavigationBarButtonTap(e) {
				const index = e.index;
				if (index === 0) {
					this.$api.msg('点击了扫描');
				} else if (index === 1) {
					// #ifdef APP-PLUS
					const pages = getCurrentPages();
					const page = pages[pages.length - 1];
					const currentWebview = page.$getAppWebview();
					currentWebview.hideTitleNViewButtonRedDot({
						index
					});
					// #endif
					uni.navigateTo({
						url: '/pages/notice/notice'
					})
				}
			}
			// #endif
			}
			}
</script>

<style>
	.title {
		font-size: 36upx;
		color: #8f8f94;
	}

	.swiper {
		height: 350upx;
		padding-top: 78upx;
	}

	// swiper-item 里面的图片高度
	swiper-item image {
		width: 100%;
		height: 350upx;
	}
	.part2 image{
		margin-top: -10upx;
		width:100%;
		height: 80upx;
	}
	.part2a{
		border-bottom: 1upx solid black ;
	}
	.part3{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content:space-between;
		width: 80%;
		margin: 0upx auto;
		font-size: 25upx;
		margin-top: 35upx;
		padding-bottom: 20upx;
	}
	.part3 image{
		width: 80upx;
		height: 80upx;
	}
	.lxy{
		display: flex;
		flex-direction: column ;
		align-items: center;
		justify-content: center;
	}
	.part4a{
		border-bottom: 1upx solid black ;
		width: 80%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.part4{
		display: flex;
		flex-direction: column ;
		align-items: center;
		justify-content: center;
		margin-top: 30upx;
		font-size: 30upx;
		/* font-weight:bold; */
		margin-bottom: 30upx;
	}
	.last{
		width: 90%;
		margin: 0upx auto;
	}
	.part5{
		margin-bottom: 50upx;
	}
	.mt image{
		width: 350upx;
		height: 400upx;
	}
	.price{
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		flex-direction: column;
	}
	.ZW{
		font-size: 34upx;
		color: #6e0012;
		font-weight: bold;
	}
	.YW{
		font-size: 25upx;
		color: black;
		width: 280upx;
	}
	.JQ{
		font-size: 25upx;
		color: #6E0012;	
	}
	.XQ{
		font-size: 25upx;
		background-color: #6e0012;
		color:#FFFFFF;
		width: 130upx;
		display: flex;
		justify-content: center;
	}
	.left{
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		flex-direction: row;
	}
	.right{
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		flex-direction: row-reverse;
	}
	.right>.price{
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;
		flex-direction: column;
	}
	.left>.price{
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		flex-direction: column;
	}
</style>
