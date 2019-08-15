<template>
	<view class="container">
		<view class="content">
			<swiper class="swiper" indicator-dots="true" autoplay="false" interval="50000000" duration="1500">
				<swiper-item v-for="(item , index) in homeSlide" :key="index">
					<image :src="item" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="part2">
			<view class="xf">载德国际校服</view>
			<view class="p">￥450</view>
			<view class="jdtw">
				<image class="tu" src="../../../static/ysy/jdt.png"></image>
				<view class="yy">已定制85%</view>
			</view>
			<view class="w">载德中小学生校服套装，西装服英伦风女童裙子男童长裤春夏</view>
		</view>
		<view class="see1" @click="bubuy">
			<img src="../../../static/ysy/see.png" />
		</view>
		<view class="D">
			<view class="HJ">合计：￥450</view>
			<view class="GM" @click="buy">立即购买</view>
			<view class="part3" v-if="show_number==1">
				<view class="l3a">
					<view class="w1">
						<img class="tt" src="../../../static/ysy/tt3.png">
						<view class="t2">
							<view class="aa3">￥450</view>
							<view class="aa4">库存1236件</view>
							<view class="aa5">选择 颜色分类、尺寸</view>
						</view>
					</view>
					<view v-for="(item,index) in 3" :key="index">
						<view class="t3">
							<view class="t3a">尺寸</view>
							<view class="t3b">S码</view>
						</view>
						<view class="SZ">
							<text class="tex" v-for="(item,index) in 8" :key="index">120</text>
						</view>
					</view>
				</view>
				<view class="QR">确认</view>
			</view>
		</view>


	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show_number: 0,
				homeSlide: ["../../../static/lxy/1.png",
					"../../../static/lxy/1.png",
					"../../../static/lxy/1.png",
					"../../../static/lxy/1.png",
					"../../../static/lxy/1.png",
				], // 定义值接收轮播图数据
			}
		},
		methods: {
			buy() {
				this.show_number = 1;
			},
			bubuy() {
				this.show_number = 0;
			}
		}
	}
</script>

<style>
	.title {
		font-size: 36upx;
		color: #8f8f94;
	}

	.swiper {
		height: 500upx;
	}

	swiper-item>uni-image {
		width: 100%;
	}

	/* // swiper-item 里面的图片高度
	.swiper-item image {
		width: 100%;
		height: 350upx;
	} */
	.xf {
		background-color: #061637;
		color: #FFFFFF;
		width: 200upx;
		font-size: 25upx;
		display: flex;
		justify-content: center;
		border-radius: 100upx;
	}

	.p {
		color: #6E0012;
		font-size: 35upx;
	}

	.w {
		color: #061637;
		font-size: 28upx;
	}

	.tu {
		width: 71upx;
		height: 5upx;
		padding-top: 12upx;
		padding-right: 20upx;
	}

	.jdtw {
		display: flex;
		flex-direction: row;
		font-size: 30upx;
		color: #6E0012;
	}

	.yy {
		font-size: 10upx;
	}

	img {
		width: 100%;
	}

	.D {
		width: 100%;
		display: flex;
		flex-direction: row;
		/* align-items: center; */
		justify-content: space-between;
		position: fixed;
		bottom: 0upx;
	}

	.HJ {
		text-align: center;
		width: 50%;
		color: #6E0012;
		height: 80upx;
		line-height: 80upx;
		background-color: #E5E5E5;
		
	}

	.GM {
		text-align: center;
		width: 50%;
		background-color: #6E0012;
		color: #FFFFFF;
		height: 80upx;
		line-height: 80upx;
	}

	.see1 {
		background-color: #f5f5f5;
		margin-bottom: 81upx;
	}

	.w1 {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: space-between;
		width: 100%;
		height: 240upx;
		margin-top: 20upx;
	}

	.t2 {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		text-align: left;
		justify-content: space-between;
		align-items: flex-start;
		width: 55%;
		height: 150upx;
		margin-top: 25upx;
	}

	.aa3 {
		color: #6E0012;
		font-size: 30upx;
	}

	.aa4 {
		font-size: 25upx;
	}

	.aa5 {
		font-size: 25upx;
	}

	.tt {
		width: 250upx;
	}

	.SZ {
		height: 50%;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		/* margin: -50upx 0; */
		margin-top: 5upx;
	}

	.t3 {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		height: 50upx;
		font-size: 25upx;
		border-top: 2upx solid #E5E5E5;
		border-bottom: 2upx solid #E5E5E5;
	}

	.SZ .tex {
		width: 15%;
		background-color: #E5E5E5;
		padding: 6upx 12upx;
		border-radius: 10upx;
		margin: 12upx;
		text-align: center;
		font-size: 24upx;
	}

	.l3a {
		width: 90%;
		margin: 0upx auto;
	}

	.QR {
		text-align: center;
		background-color: #6E0012;
		color: #FFFFFF;
		height: 80upx;
		line-height: 80upx
	}

	.part3 {
		position: absolute;
		bottom: 0upx;
		background-color: #FFFFFF;
		width: 100%;
	}
	.t3a,.t3b{
		line-height: 60upx;
	}
</style>
