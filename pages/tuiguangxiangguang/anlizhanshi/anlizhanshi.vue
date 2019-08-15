<template>
	<view class="container">
		<view class="content">
			<view class="banner">
				<swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1500">
					<swiper-item v-for="(item , index) in homeSlide" :key="index">
						<image :src="item" mode="aspectFill"></image>
					</swiper-item>
				</swiper>
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
		methods: {
			
		}
	}
</script>

<style>
	.swiper {
		height: 350upx;
	}
	swiper-item>uni-image{
		width: 100%;
	}
	
</style>
