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
			<view class="part2">
				<img src="../../../static/ysy/anli/zu10.png"></img>
			</view>
			<view class="bt">
				<view class="q1"> </view>
				<view class="q2">合作学校</view>
				<view class="q3"> </view>
			</view>
			<view class="part3">
				<img src="../../../static/ysy/anli/qq.png"></img>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				homeSlide: ["../../../static/ysy/anli/a1.png",
				"../../../static/ysy/anli/a1.png",
				"../../../static/ysy/anli/a1.png",
				"../../../static/ysy/anli/a1.png",
				"../../../static/ysy/anli/a1.png",],// 定义值接收轮播图数据
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
		height: 350upx;
	}
	img{
		width: 50%;
		height: 80upx;
		/* margin: 30upx 180upx; */
	}
	.part2{
		display: flex;
		align-items: center;
		justify-content: center;
		height: 150upx;
	}
	.bt{
		font-size: 26upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		color: #061637;
	}
	.q1,.q3{
		border-bottom: 1upx solid #B2B2B2 ;
		height: 15upx;
		width: 18%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.q2{
		margin: 0upx 15upx;
		color: #061637;
	}
	.part3>img{
				width: 100%;
				height: 100%;
	}
</style>
