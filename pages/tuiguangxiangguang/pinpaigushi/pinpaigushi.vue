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
			<view class="gs">
				<image class="image1" src="../../../static/ysy/ppgs.png" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				homeSlide: ["../../../static/ysy/gs.png",
				"../../../static/ysy/gs.png",
				"../../../static/ysy/gs.png",
				"../../../static/ysy/gs.png",
				"../../../static/ysy/gs.png",],// 定义值接收轮播图数据
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
	.image1{
		width: 100%;
	}
</style>
