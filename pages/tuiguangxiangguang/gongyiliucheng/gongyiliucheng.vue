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
			<view class="part4">
				<view class="part4a">SEE MORE</view>
				<view class="part4b">校服定制</view>
			</view>
			<view class="gs" style="width: 98vw;margin: 0upx auto;">
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
				data:null,
				homeSlide: ["../../../static/ysy/gylc/lbt.png",
				"../../../static/ysy/gylc/lbt.png",
				"../../../static/ysy/gylc/lbt.png",
				"../../../static/ysy/gylc/lbt.png",
				"../../../static/ysy/gylc/lbt.png",],// 定义值接收轮播图数据
			}
		},
		onShow(){
			let params = {};
			let url = "/api/index/gylc_content";
			this.util.request(url, "POST", params, (res) => {
				////console.log(JSON.stringify(res));
				if (res.statusCode == 200) {
					if (res.data.code == 1) {
						this.data = res.data.data;
						let regex = new RegExp(`style="`, 'gi');
						let rich = '';
						if(this.data.content.indexOf(`style="`)>-1){
							rich = this.data.content.replace(regex, `style="max-width: 100%;`);
						}else{
							regex = new RegExp('<img', 'gi');
							rich = this.data.content.replace(regex, `<img style="max-width: 100%;width:100%;"`)
						}
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
	.swiper{
		height: 400upx;
	}
	.bannerImg{
		width: 100%;
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
