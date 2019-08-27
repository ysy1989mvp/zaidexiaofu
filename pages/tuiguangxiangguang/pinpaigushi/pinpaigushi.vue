<template>
	<view class="container">
		<view class="content">
			<view class="banner">
				<swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1500">
					<swiper-item v-for="(item , index) in data.images" :key="index">
						<image class="bannerImg" :src="item.image" mode="scaleToFill"></image>
					</swiper-item>
				</swiper>
			</view>
			<view class="gs" style="width: 100vw;">
				<!-- <image class="image1" src="../../../static/ysy/ppgs.png" mode="widthFix"></image> -->
				<rich-text class="fuwenben" style="width: 98%;margin: 0upx auto;" type="node" :nodes="data.content"></rich-text>
			</view>
		</view>
		<bottombar></bottombar>
	</view>
</template>

<script>
	import bottombar from "@/components/bottombar/bottombar.vue"
	export default {
		components: {
			bottombar
		},
		data() {
			return {
				data: '',
				homeSlide: ["../../../static/ysy/gs.png",
					"../../../static/ysy/gs.png",
					"../../../static/ysy/gs.png",
					"../../../static/ysy/gs.png",
					"../../../static/ysy/gs.png",
				], // 定义值接收轮播图数据
			}
		},
		onLoad() {
			let params = {};
			let url = "/api/index/ppgs_content";
			this.util.request(url, "POST", params, (res) => {
				//console.log(JSON.stringify(res));
				if (res.statusCode == 200) {
					if (res.data.code == 1) {
						this.data = res.data.data;
						const regex = new RegExp('style="width:', 'gi');
						let rich = this.data.content.replace(regex, `style="max-width: 100%;width:`)
						this.data.content = rich;
					} else {
						this.util.showWindow(res.data.msg);
					}
				} else {
					this.util.showWindow("请求错误");
				}
			});

		},
		methods: {

		}
	}
</script>

<style>
	.swiper {
		height: 400upx;
	}

	swiper-item>uni-image {
		width: 100%;
	}
</style>
