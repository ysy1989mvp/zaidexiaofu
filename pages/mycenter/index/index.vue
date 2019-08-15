<template>
	<view class="container">
		<view class="content">
			<view class="part1" @click="setinfo">
				<view class="TX">
					<image class="TXA" src="../../../static/ysy/toux.png"></image>
					<view class="zl">
						<view class="name">戴帽子的鱼</view>
						<view class="number">16852028713</view>
						<view class="school">昆明市第一小学</view>
					</view>
				</view>
			</view>
			<view class="part2">
				<view class="p2" @click="goorders">
					<view class="a f1">
						<img src="../../../static/ysy/dfk.png">
						<view class="2a">待付款</view>
					</view>
				</view>
				<view class="bkx"> </view>
				<view class="p2"  @click="goorders">
					<view class="b f1">
						<img src="../../../static/ysy/dfh.png">
						<view class="2a">待发货</view>
					</view>
				</view>
				<view class="bkx"> </view>
				<view class="p2"  @click="goorders">
					<view class="c f1">
						<img src="../../../static/ysy/dsh.png">
						<view class="2a">待收货</view>
					</view>
				</view>
			</view>
			<view class="part3">
				<view class="3a">
					<view class="fw">
						<view class="fff">
							<img src="../../../static/ysy/fk.png">
							<view class="c1 ee">服务与反馈</view>
						</view>
						<view class="c2 ee">〉</view>
					</view>
					<view class="fw">
						<view class="fff">
							<img src="../../../static/ysy/xy.png">
							<view class="c1 ee">平台协议</view>
						</view>
						<view class="c2 ee">〉</view>
					</view>
					<view class="fw">
						<view class="fff">
							<img src="../../../static/ysy/wt.png">
							<view class="c1 ee">问题反馈</view>
						</view>
						<view class="c2 ee">〉</view>
					</view>
					<view class="fw">
						<view class="fff">
							<img src="../../../static/ysy/shop.png">
							<view class="c1 ee">购物须知</view>
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

			}
		},
		methods: {
			goorders() {
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
		background-image: url("../../../static/ysy/photo.png");
		background-repeat: no-repeat;
		background-size: contain;
		font-size: 28upx;
	}

	.TXA {
		height: 150upx;
		width: 170upx;
	}

	.part2 {
		display: flex;
		flex-direction: row;
		font-size: 30upx;
		justify-content: space-between;
		align-items: stretch;
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
	}

	.bkx {
		height: 30px;
		border: 1upx solid #8F8F94;
		display: flex;
		align-items: stretch;
		justify-content: space-between;
		margin-top: 45upx;
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
