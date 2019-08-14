<template>
	<view class="container">
		<view class="content">
			<!-- tab顶部切换 -->
			<!-- 头部 -->
			<view class="navbar">
				<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }"
				 @click="tabClick(index)">
					{{ item.text }}
				</view>
			</view>
			<!-- 显示区域 -->
			<!-- <view class="list" v-for="(item, index) in navList" :key="index" v-if="tabCurrentIndex === index"> -->
			<view class="center_content">
				<view class="item">
					<view class="part1">
						<view class="order_no">
							201908124524
						</view>
						<view class="">
							交易关闭
						</view>
					</view>
					<view class="part2">
						<view class="image-view">
							<image src="../../../static/yangsongyan/imgs/order/1.png"></image>
						</view>
						<view>
							<view>英伦学院风藏蓝格子</view>
							<view>西服套装</view>
							<view>学院套装：145cm</view>
							<view>
								<view>品质优选</view>
								<view>放心选购</view>
							</view>
						</view>
						<view>
							<view>
								￥450.00
							</view>
							<view>
								×1
							</view>
							<view>
								交易成功
							</view>
						</view>
					</view>
					<view class="part3">
						<view class="yunfei">
							顺风到付
						</view>
						<view>
							<view class="">
								共1件商品
							</view>
							<view>合计:￥450.00</view>
						</view>
					</view>
					<view>
						<view class="">
							删除订单
						</view>
						<view class="">
							删除订单
						</view>
						<view class="">
							删除订单
						</view>
					</view>
				</view>
			</view>
			<!-- tab顶部切换 -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabCurrentIndex: 0,
				navList: [{
						state: 0,
						text: '全部',
						orderList: []
					},
					{
						state: 1,
						text: '待付款',
						orderList: []
					},
					{
						state: 2,
						text: '待发货',
						orderList: []
					},
					{
						state: 3,
						text: '待收货',
						orderList: []
					},
					{
						state: 4,
						text: '已完成',
						orderList: []
					}
				]
			}
		},
		onLoad() {
			// 页面显示是默认选中第一个
			this.tabCurrentIndex = 0;
		},
		methods: {
			changeTab(e) {
				this.tabCurrentIndex = e.target.current;
			},
			//顶部tab点击
			tabClick(index) {
				this.tabCurrentIndex = index;
			}
		}
	}
</script>

<style>
	/* tab顶部切换 */
	@import url("../../../css/navbar.css");
	.center_content{
		width: 100%;
		background-color: #EEEEEE;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.item{
		width: 90%;
		background-color: #FFFFFF;
		border-radius: 20upx;
		margin-top: 10upx;
		margin-bottom: 20upx;
	}
	.part1{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.part2{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction:row;
	}
	.image-view>image{
		width: 23vw;
		height: 23vw;
	}
</style>
