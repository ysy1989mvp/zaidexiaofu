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
			<view class="part2">
				<image class="tagimg" src="../../../static/ysy/anli/zu10.png"></image>
			</view>
			<view class="bt">
				<view class="q1"> </view>
				<view class="q2">合作学校</view>
				<view class="q3"> </view>
			</view>
			<view class="schoollist">
				<uni-grid :column="4" :show-border="true" :square="true" :hor="35" :ver="-45">
					<uni-grid-item marker="badge" type="error" text="">
						<image class="image" :src="item.image" />
						<text class="text">{{item.value}}</text>
					</uni-grid-item>
				</uni-grid>
				
				<!-- <view class="school" v-for="(item,index) in schooldata" :key="index">
					<view class="tukuang">
						<image class="schooltagimg" :src="item.image" mode="widthFix"></image>
					</view>
					<view class="schoolname">{{item.value}}</view>
				</view> -->
			</view>
			<view class="bt">
				<view class="q1"> </view>
				<view class="q2">效果展示</view>
				<view class="q3"> </view>
			</view>
			<view class="gs" style="width: 90vw;margin: 0upx auto;">
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
				schooldata:null,
				homeSlide: ["../../../static/ysy/anli/a1.png",
				"../../../static/ysy/anli/a1.png",
				"../../../static/ysy/anli/a1.png",
				"../../../static/ysy/anli/a1.png",
				"../../../static/ysy/anli/a1.png",],// 定义值接收轮播图数据
			}
		},
		methods: {
			onLoad(){
				let params = {};
				let url = "/api/index/aljs_content";
				this.util.request(url, "POST", params, (res) => {
					//console.log(JSON.stringify(res));
					if (res.statusCode == 200) {
						if (res.data.code == 1) {
							this.data = res.data.data;
							const regex = new RegExp('style="', 'gi');
							let rich = this.data.content.replace(regex, `style="max-width: 100%;width:100%;`)
							this.data.content = rich;
						} else {
							this.util.showWindow(res.data.msg);
						}
					} else {
						this.util.showWindow("请求错误");
					}
				});
				let params1 = {};
				let url1 = "/api/school";
				this.util.request(url1, "POST", params1, (res) => {
					//console.log(JSON.stringify(res));
					if (res.statusCode == 200) {
						if (res.data.code == 1) {
							this.schooldata = res.data.data;
						} else {
							this.util.showWindow(res.data.msg);
						}
					} else {
						this.util.showWindow("请求错误");
					}
				});
			},
		}
	}
</script>

<style>
	.swiper{
		height: 400upx;
	}
	swiper-item>uni-image {
		width: 100%;
	}
	.tagimg{
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
		margin-bottom: 20upx;
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
	.image1{
				width: 100%;
				height: 100%;
	}
	.schoollist{
		width: 90%;
		margin: 0upx auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		margin-top: 30upx;
		margin-bottom: 30upx;
	}
	.school{
		width: 150upx;
		height: 160upx;
		/* border: 1upx solid red; */
		display: flex;
		justify-content: center;
		flex-direction: column;
		font-size: 20upx;
		margin: 15px 5px;
		
	}
	.tukuang{
		width: 70%;
		height: 110upx;
		margin: 0upx auto;
	}
	.schooltagimg{
		width: 100%;
		height: 100%;
		
	}
	.schoolname{
		margin-top: 15upx;
		text-align: center;
		-webkit-line-clamp: 1;
		/* // 限制显示的文本的行数为3 */
		-webkit-box-orient: vertical;
		/* // 水平排列<p>，使其不纵向显示 */
		word-break: break-all;
		/* // 使<p>中的文字换行 */
		overflow: hidden;
		/* // 超出的文字部分隐藏 */
		text-overflow: ellipsis;
		/* // 超出的文字部分用...来显示 */
		display: -webkit-box;
		/* // 将<p>变成高度定死，宽度自适应的行内块元素 */
	}
	.image {
		width: 60upx;
		height: 60upx;
	}
</style>
