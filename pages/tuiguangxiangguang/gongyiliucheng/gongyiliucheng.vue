<template>
	<view class="container">
		<view class="content">
			<view class="banner">
				<swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1500">
					<swiper-item v-for="(item , index) in homeSlide" :key="index">
						<img class="bannerImg" :src="item"/>
					</swiper-item>
				</swiper>
			</view>
			<view class="part4">
				<view class="part4a">SEE MORE</view>
				<view class="part4b">工艺展示</view>
			</view>
			<view class="part2">
				<image class="image1" src="../../../static/ysy/gylc/p2.png" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				homeSlide: ["../../../static/ysy/gylc/lbt.png",
				"../../../static/ysy/gylc/lbt.png",
				"../../../static/ysy/gylc/lbt.png",
				"../../../static/ysy/gylc/lbt.png",
				"../../../static/ysy/gylc/lbt.png",],// 定义值接收轮播图数据
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.bannerImg {
		width: 100%
	}
	
	.banner {
		width: 100%;
	}
	
	.swiper {
		height: 350upx;
	}
	.part4a{
		border-bottom: 1upx solid black ;
		width: 70%;
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
		color: #061637;
	}
	.image1{
		width: 100%;
		/* height: 80upx; */
		/* margin: 30upx 180upx; */
	}
	.part2{
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
