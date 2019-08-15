<template>
	<view class="container">
		<view class="content">
			<view class="item" @click="addrs">
				<view class="center">
					<view class="uu">
						<view class="part1">
							<view class="XM">孙晓</view>
							<view class="nub">1685950420</view>
						</view>
						<view class="part2">
							<view class="default">默认</view>
							<view class="addr">云南省 昆明市 盘龙区 东华街道 环城东路50号 昆明市第一小学</view>
							<view class="m"> 〉</view>
						</view>
						<view class="part3">
							<view class="time">收货时间不限</view>
						</view>
					</view>
				</view>
			</view>
			<view class="last">
				<view class="kk">
					<view class="parta1">
						<img class="icon" src="../../../static/lxy/icon.png">
						<view class="ww">载德国际校服</view>
					</view>
					<view class="parta2">
						<image class="ttt" src="../../../static/lxy/a2.png"></image>
						<view class="ttt2">
							<view class="e">
								<view class="e1">载德中小学生校服套装，西装服英伦风女童裙子男童长裤春夏</view>
								<view class="e2">￥450</view>
							</view>
							<view class="y">
								<view class="y1">颜色分类:</view>
								<view class="y2">×1</view>
							</view>
							<view class="c">尺码：M</view>
						</view>
					</view>
					<view class="parta3">
						<view class="g1">
							<view class="gm">购买数量</view>
							<view class="sl">
								<view class="s2 jd" @click="jian()">-</view>
								<view class="s3" >{{number}}</view>
								<view class="s2 jd" @click="jia">+</view>
							</view>
						</view>
						<view class="g2">
							<view class="u1">配送方式</view>
							<view class="u2">普通配送</view>
						</view>
						<view class="g3">
							<view class="u3">订单备注</view>
							<view class="u4">选填，和商家协商一致</view>
						</view>
					</view>
				</view>
			</view>
			<view class="D">
				<view class="D1">
					<view class="HJ">合计：￥450</view>
				</view>
				<view class="GM" @click="tijiao">提交订单</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				number: 1
			}
		},
		methods: {
			tijiao() {
				uni.switchTab({
					url: "../index/index"
				})
			},
			addrs() {
				uni.navigateTo({
					url: "../addr_list/addr_list"
				})
			},
			jia() {
				this.number++;
			},
			jian() {
				if (this.number > 1) {
					this.number--;
				}
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

	.part1,
	.part2 {
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
		height: 10upx;
		font-size: 28upx;
		margin-left: 20upx;
	}

	.parta1 {
		display: flex;
		flex-direction: row;
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
		background-color: #6E0012;
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
</style>
