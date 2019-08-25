<template>
	<view class="container">
		<view class="content">
			<view class="part1" @click="setinfo">
				<view class="TX" :style="{background: 'url('+imageURL+'),no-repeat;background-size:cover'}">
					<image class="TXA" :src="data.avatar"></image>
					<view class="zl">
						<view class="name">{{data.name}}</view>
						<view class="number">{{data.mobile}}</view>
						<view class="school">{{data.school_name}}</view>
					</view>
				</view>
			</view>
			<view class="part2">
				<view class="p2" @click="goorders(1)">
					<view class="a f1">
						<image src="../../../static/ysy/dfk.png" mode="widthFix"></image>
						<view class="2a">待付款</view>
					</view>
				</view>
				<view class="bkx"> </view>
				<view class="p2"  @click="goorders(2)">
					<view class="b f1">
						<image src="../../../static/ysy/dfh.png" mode="widthFix"></image>
						<view class="2a">待发货</view>
					</view>
				</view>
				<view class="bkx"> </view>
				<view class="p2"  @click="goorders(3)">
					<view class="c f1">
						<image src="../../../static/ysy/dsh.png" mode="widthFix"></image>
						<view class="2a">待收货</view>
					</view>
				</view>
			</view>
			<view class="part3">
				<view class="3a">
					<view class="fw" @click="fuwuyufankui">
						<view class="fff">
							<img src="../../../static/ysy/fk.png">
							<view class="c1 ee">服务反馈</view>
						</view>
						<view class="c2 ee">〉</view>
					</view>
					<view class="fw" @click="pingtaixieyi">
						<view class="fff">
							<img src="../../../static/ysy/xy.png">
							<view class="c1 ee">平台协议</view>
						</view>
						<view class="c2 ee">〉</view>
					</view>
					<view class="fw" @click="wentiyufankui">
						<view class="fff">
							<img src="../../../static/ysy/wt.png">
							<view class="c1 ee">问题反馈</view>
						</view>
						<view class="c2 ee">〉</view>
					</view>
					<view class="fw" @click="gouwuxuzhi">
						<view class="fff">
							<img src="../../../static/ysy/shop.png">
							<view class="c1 ee">购物须知</view>
						</view>
						<view class="c2 ee">〉</view>
					</view>
					<view class="fw" @click="lianxiwomen">
						<view class="fff">
							<img src="../../../static/ysy/shop.png">
							<view class="c1 ee">联系我们</view>
						</view>
						<view class="c2 ee">〉</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageURL:'../../../static/ysy/photo.png',
				data:{
				}
			}
		},
		onLoad(){
			let params = {
			};
			let url = "/api/user";
			this.util.request(url, "POST", params, (res) => {
				console.log(JSON.stringify(res));
				if (res.statusCode == 200) {
					if (res.data.code == 1) {
						this.data = res.data.data;
					} else {
						this.util.showWindow(res.data.msg);
					}
				} else {
					this.util.showWindow("请求错误");
				}
			});
		},
		methods: {
			fuwuyufankui(){
				uni.navigateTo({
					url:"../fuwufankui/fuwufankui"
				})
			},
			pingtaixieyi(){
				uni.navigateTo({
					url:"../pingtaixieyi/pingtaixieyi"
				})
			},
			wentiyufankui(){
				uni.navigateTo({
					url:"../serveback/serveback"
				})
			},
			gouwuxuzhi(){
				uni.navigateTo({
					url:"../gouwuxuzhi/gouwuxuzhi"
				})
			},
			lianxiwomen(){
				uni.navigateTo({
					url:"../lianxiwomen/lianxiwomen"
				})
			},
			goorders(index) {
				this.util.tabCurrentIndex = index;
				uni.switchTab({
					url: "../../order/index/index"
				})
			},
			setinfo(){
				uni.navigateTo({
					url:"../set/set"
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #E4E7ED;
	}

	.TX {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 500upx;
		background: url("../../../static/ysy/photo.png") no-repeat;
		background-size: cover;
		background-size: contain;
		font-size: 28upx;
	}

	.TXA {
		height: 170upx;
		width: 170upx;
		border-radius: 93upx;
	}

	.part2 {
		display: flex;
		flex-direction: row;
		font-size: 30upx;
		justify-content: space-between;
		align-items: center;
		width: 80%;
		padding-left: 80upx;
		padding-right: 70upx;
		height: 150upx;
		background-color: #FFFFFF;
	}

	img {
		width: 102upx;
		height: 90upx;
	}

	.f1 {
		display: flex;
		flex-direction: column;
		/* width:200upx ; */
		height: 78upx;
		justify-content: center;
	}
	.f1>image{
		width: 58upx;
		height: 90upx;
	}
	.bkx {
		height: 30px;
		border: 1upx solid #8F8F94;
		display: flex;
		align-items: stretch;
		justify-content: space-between;
	}

	.fw {
		display: flex;
		flex-direction: row;
		background-color: #FFFFFF;
		margin-top: 15upx;
		margin-bottom: 15upx;
		height: 80upx;
		justify-content: space-between;
		align-items: center;

	}

	.fff {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		font-size: 26upx;
	}

	.c1 {
		height: 35upx;
	}

	.c2 {
		height: 50upx;
	}

	.zl {
		height: 150upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}
</style>
