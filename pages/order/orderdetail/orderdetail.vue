<template>
	<view class="container">
		<view class="content">
			<view class="item">
				<view class="center">
					<view class="uu">
						<view class="part1">
							<view class="XM">{{addr_data.name}}</view>
							<view class="nub">{{addr_data.phone}}</view>
						</view>
						<view class="part2">
							<view class="part22">
							<!-- <view class="default" v-if="addr_data.default==1">默认</view> -->
							<view class="addr">{{addr_data.province_name}} {{addr_data.city_name}} {{addr_data.region_name}} {{addr_data.detail}}</view>
							</view>
							<view class="m"> </view>
						</view>
						<view class="part3">
							<!-- <view class="time">收货时间不限</view> -->
							<view class="time"></view>
						</view>
					</view>
				</view>
			</view>
			<view class="last">
				<view class="kk">
					<view class="parta1">
						<image class="icon" src="../../../static/lxy/icon.png" mode="widthFix"></image>
						<view class="ww">载德国际校服</view>
					</view>
					<view class="parta2">
						<image class="ttt" :src="goods_data.image"></image>
						<view class="ttt2">
							<view class="e">
								<view class="e1">{{goods_data.goods_name}}</view>
								<!-- <view class="e2">￥{{order_data.total_price}}</view> -->
								<view class="e2"></view>
							</view>
							<!-- <view class="y">
								<view class="y1">颜色分类:</view>
								<view class="y2">×1</view>
							</view> -->
							<view class="c" v-for="(item,index) in order_data.spec" :key="index">{{item.spec_name}}：{{item.spec_value}}</view>
						</view>
					</view>
					<view class="parta3">
						<view class="g1">
							<view class="gm">购买数量</view>
							<view class="sl">
								<view class="s3" >{{order_data.total_num}}</view>
							</view>
						</view>
						<view class="g2">
							<view class="u1">配送方式</view>
							<view class="u2">{{order_data.express_company}}</view>
						</view>
						<view class="g3">
							<view class="u3">运费</view>
							<view class="u4">{{order_data.express_price}}</view>
						</view>
					</view>
				</view>
			</view>
			<view class="D">
				<view class="D1">
					<view class="HJ">合计：￥{{order_data.pay_price}}</view>
				</view>
				<view class="GM" v-if="order_data.pay_status==10" @click="pay">支付</view>
				<view class="GM" v-if="order_data.pay_status==20" @click="pay">已支付</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				order_id:null,
				goods_data:null,
				addr_data:null,
				order_data:null,
			}
		},
		onLoad(option){
			// 商品详情页跳转
				this.order_id = option.id;
				let params = {
					"id":this.order_id
				};
				let url = "/api/order/detail";
				this.util.request(url, "GET", params, (res) => {
					console.log(JSON.stringify(res));
					if (res.statusCode == 200) {
						if (res.data.code == 1) {
							this.addr_data = res.data.data.address;
							this.goods_data = res.data.data.goods;
							this.order_data = res.data.data.order;
						} else {
							this.util.showWindow(res.data.msg);
							return;
						}
					} else {
						this.util.showWindow("请求错误");
						return;
					}
				});
			
		},
		methods: {
			pay(){
				uni.switchTab({
					url: "../index/index"
				})
			}

		}
	}
</script>

<style>
	page {
		background-color: #FFFFFF;
	}

	.container {
		height: 100vh;
	}

	.part1{
		display: flex;
		justify-content: flex-start;
	}
	.part2 {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
	.part22{
		display: flex;
		justify-content: flex-start;
	}
	.default {
		width: 90upx;
		height: 30upx;
		font-size: 20upx;
		background-color: #FFD0CB;
		text-align: center;
		line-height: 30upx;
		border-radius: 20upx;
		margin-top: 4upx;
		margin-right: 10upx;
	}

	.addr {
		font-size: 25upx;
		line-height: 40upx;
	}

	.center {
		width: 100%;
		font-size: 28upx;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		height: 20%;
		border-bottom: 1upx solid #E5E5E5;
	}

	.item {
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 20upx auto;
		padding-bottom: 20upx 20upx;
		width: 90%;
		border-radius: 10upx;
	}

	.img {
		width: 23upx;
		height: 9upx;
	}

	.ww {
		width: 200upx;
		/* height: 20upx; */
		font-size: 28upx;
		margin-left: 20upx;
	}

	.parta1 {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 20upx;
	}

	.parta2 {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.ttt2 {
		display: flex;
		flex-direction: column;
		height: 200upx;
		justify-content: space-between;
		align-items: stretch;
		width: 65%;
	}

	.parta2>image {
		width: 260upx;
		height: 203upx;
		width: 30%;
	}

	.e {
		display: flex;
		justify-content: space-between;
		font-size: 25upx;
	}

	.y,
	.g1 {
		display: flex;
		justify-content: space-between;
		font-size: 20upx;
	}

	.c {
		font-size: 20upx;
	}

	.parta3 {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		font-size: 20upx;
		height: 150upx;
	}

	.g2,
	.g3 {
		display: flex;
		flex-direction: row;
	}

	.last {
		width: 90%;
		background-color: #FFFFFF;
		margin: 20upx auto;
		padding-bottom: auto;
		border-radius: 10upx;
	}

	.D {
		display: flex;
		flex-direction: row;
		/* align-items: center; */
		justify-content: space-between;
		position: fixed;
		font-size: 28upx;
		width: 100%;
		bottom: 0upx;
	}

	.D1 {
		display: flex;
		flex-direction: row;
		width: 50%;
		align-items: center;
		background-color: #E5E5E5;
		justify-content: center;

	}

	.HJ {
		text-align: center;
		color: #6E0012;
		height: 80upx;
		line-height: 80upx
	}

	.GM {
		text-align: center;
		width: 50%;
		background-color: #1BCC8D;
		color: #FFFFFF;
		height: 80upx;
		line-height: 80upx;
	}

	.kk {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 500upx;
		margin: 20upx 20upx;
		padding: 10upx 10upx;
	}

	.uu {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 10upx 10upx;
		padding: 10upx 10upx;
		width: 100%;
	}

	.e2 {
		color: #6E0012;
	}

	.u2,
	.u4 {
		color: #909399;
		width: 80%;
	}

	.g2,
	.g3 {
		display: flex;
		justify-content: space-between;
		align-items: stretch;
	}

	.sl {
		display: flex;
		justify-content: space-between;
		align-items: stretch;
	}

	.s2 {
		border: 2upx solid #555555;
		width: 64upx;
		height: 44upx;
		/* border-radius: 22upx; */
		/* background-color: #A5A5A5; */
		color: #000000;
		/* height: 30upx; */
		font-size: 32upx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: bold;
		line-height: 6upx;
	}

	.s3 {
		font-size: 32upx;
		margin: 2upx 15upx;
	}

	.jd {
		font-size: 35upx;
	}

	.m {
		color: #A5A5A5;
	}
	.icon{
		width: 50upx;
		height: 18upx;
	}
</style>
