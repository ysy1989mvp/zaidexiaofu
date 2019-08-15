<template>
	<view class="container">
		<view class="content">
			<view class="item" v-for="(item,index) in 10" :key="index">
				<image class="tubiao" src="../../../static/yangsongyan/imgs/address/513@3x.png"></image>
				<view class="center"  @click="selected">
					<view class="part1">
						<view class="name">陈明</view>
						<view class="mobile">138888888888</view>
					</view>
					<view class="part2">
						<view class="default">默认</view>
						<view class="addr">云南省 昆明市 盘龙区 东华街道 环城东路50号 昆明市第一小学</view>
					</view>
				</view>
				<view class="editer" @click="addAddr(2)">编辑</view>
			</view>
			<view class="liubai"></view>
			<view class="button_ysy" @click="addAddr(1)">
				新增地址
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
			addAddr(index){
				uni.navigateTo({
					url:"../addr_list/addressManage?type="+index
				});
			},
			selected(){
				uni.navigateTo({
					url:"../confirm_order/confirm_order"
				});
			}
			
		}
	}
</script>

<style>
	page{
		background-color: #EEEEEE;
	}
	.item{
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 15upx auto;
		padding-bottom: 0upx 20upx;
	}
	.tubiao{
		width: 104upx;
		height: 88upx;
		margin-right: 10upx;
	}
	.center{
		font-size: 28upx;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
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
	.editer{
		font-size: 32upx;
		width: 100upx;
		height: 60upx;
		line-height: 60upx;
		color: #AAAAAA;
		border-left: 2upx solid #AAAAAA;
		padding-left: 15upx;
		margin-left: 10upx;
		margin-right: 10upx;
	}
	.name{
		line-height: 50upx;
		margin-right: 10upx;
	}
	.mobile{
		font-size: 25upx;
		line-height: 50upx;
		color: #AAAAAA;
	}
	.addr{
		font-size: 25upx;
		line-height: 40upx;
	}
	.button_ysy{
		position: fixed;
		bottom: -20upx;
		margin-left: 5%;
		background-color: #061637;
		color: #FFFFFF;
	}
	.liubai{
		height: 120upx;
	}
</style>
