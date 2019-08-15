<template>
	<view class="container">
		<view class="content">
			<view class="item">
				<view class="center">
					<view class="part1">
						<view class="XM">孙晓</view>
						<view class="nub">1685950420</view>
					</view>
					<view class="part2">
						<view class="default">默认</view>
						<view class="addr">云南省 昆明市 盘龙区 东华街道 环城东路50号 昆明市第一小学</view>
						<view class="m"> > </view>
					</view>
					<view class="part3">
						<view class="time">收货时间不限</view>
					</view>
				</view>
			</view>
			<view class="last">
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
						<view class="sl">-1+</view>
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
			<view class="D">
				<view class="D1">
					<view class="YT">共一套</view>
					<view class="HJ">合计：￥450</view>
				</view>
				<view class="GM" >立即购买</view>
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

		}
	}
</script>

<style>
	page{
		background-color: #EEEEEE;
	}
	.container{
		height: 100vh;
	}
	.part1,.part2{
		display: flex;
		justify-content: flex-start;
	}
	
	.default{
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
	.addr{
		font-size: 25upx;
		line-height: 40upx;
	}
	.center{
		font-size: 28upx;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		height: 20%;
	}
	.item{
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 20upx auto;
		padding-bottom: 20upx 20upx;
		width: 90%;
		border-radius: 10upx;
	}
	.img{
		width: 30upx;
		height: 10upx;
	}
	.ww{
		width: 200upx;
		height: 10upx;
		font-size: 20upx;
	}
	.parta1{
		display: flex;
		flex-direction: row;
	}
	.parta2{
		display: flex;
		flex-direction: row;
	}
	.ttt2{
		display: flex;
		flex-direction: column;
	}
	.e{
		display: flex;
		justify-content: space-between;
		font-size:20upx;
	}
	.y,.g1{
		display: flex;
		justify-content: space-between;
		font-size: 18upx;
	}
	.c{
		font-size: 18upx;
	}
	.parta3{
		display:flex;
		flex-direction: column;
		font-size: 18upx;
	}
	.g2,.g3{
		display: flex;
		flex-direction: row;
	}
	.last{
		width: 90%;
		background-color: #FFFFFF;
		margin: 20upx auto;
		padding-bottom: auto;
		border-radius: 10upx;
		height: 60%;
	}
	.D {
		display: flex;
		flex-direction: row;
		/* align-items: center; */
		justify-content: space-between;
		/* position: relative; */
	}
	.D1{
		display: flex;
		flex-direction: row;
		
	}
	.HJ {
		text-align: center;
		width: 50%;
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
</style>
