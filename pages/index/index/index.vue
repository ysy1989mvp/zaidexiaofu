<template>
	<view class="container">
		<view class="content">
				<swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1500">
					<swiper-item v-for="(item , index) in homeSlide" :key="index">
						<image :src="item" mode="aspectFill"></image>
					</swiper-item>
				</swiper>
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
				"../../../static/lxy/1.png"]// 定义值接收轮播图数据
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
		},
		}
</script>

<style>
	.title {
		font-size: 36upx;
		color: #8f8f94;
	}

	.swiper {
		height: 400upx;
		padding-top: 78upx;
	}

	// swiper-item 里面的图片高度
	swiper-item image {
		width: 100%;
		height: 400upx;
	}
</style>
