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
				<view class="item" v-for="(item,index) in 5" :key="index" @click="detail">
					<view class="part1">
						<view class="order_no">
							订单号:201908124524
						</view>
						<view class="status">
							交易关闭
						</view>
					</view>
					<view class="part2">
						<view class="image-view">
							<image src="../../../static/yangsongyan/imgs/order/1.png"></image>
						</view>
						<view class="neirong">
							<view class="name">英伦学院风藏蓝格子</view>
							<view class="name">西服套装</view>
							<view class="daxiao">学院套装：145cm</view>
							<view class="biaoqian">
								<view>品质优选</view>
								<view>放心选购</view>
							</view>
						</view>
						<view>
							<view class="status">
								￥450.00
							</view>
							<view class="status huise">
								×1
							</view>

						</view>
					</view>
					<view class="part3">
						<view class="yunfei">
							顺风到付
						</view>
						<view class="shangp">
							<view class="yijian">
								共1件商品
							</view>
							<view>合计:￥450.00</view>
						</view>
					</view>
					<view class="option" v-if="currt==1">
						<!-- 待付款 -->
						<view>
							取消订单
						</view>
						<view>
							订单付款
						</view>
					</view>
					<view class="option"  v-if="currt==2">
						<!-- 待发货 -->
						<view>
							查看物流
						</view>
						<view>
							提醒发货
						</view>
					</view>
					<!-- 待收货 -->
					<view class="option"  v-if="currt==3">
						<view>
							延长收货
						</view>
						<view>
							查看物流
						</view>
						<view class="red">
							确认收货
						</view>
					</view>
					<!-- 订单完成 -->
					<view class="option"  v-if="currt==4">
						<view>
							再买一件
						</view>
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
				currt:"3",//1是待付款，2是待发货，3是待收货，4完成
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
			},
			detail(){
				uni.navigateTo({
					url:"../orderdetail/orderdetail"
				})
			}
		}
	}
</script>

<style>
	/* tab顶部切换 */
	@import url("../../../css/navbar.css");

	.center_content {
		width: 100%;
		background-color: #FFFFFF;
		/* 		display: flex;
		align-items: center; */
	}

	.container,
	.content,
	page {
		background-color: #EEEEEE;
	}

	.item {
		width: 90%;
		background-color: #FFFFFF;
		border-radius: 20upx;
		margin-top: 10upx;
		margin-bottom: 20upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: column;
		margin: 10upx auto;
		padding: 0upx 15upx;
		padding-bottom: 35upx;
		border-bottom: 2upx solid #EEEEEE;
	}

	.part1 {
		width: 96%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 20upx;
		margin-bottom: 10upx;
	}

	.part2 {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
	}

	.image-view>image {
		width: 23vw;
		height: 23vw;
	}

	.order_no {
		font-size: 26upx;
	}

	.status {
		font-size: 26upx;
		color: #6E0012;
		text-align: right;
	}

	.name {
		font-size: 28upx;
		font-weight: bold;
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

	.neirong {
		line-height: 45upx;
		width: 44vw;
	}

	.daxiao,
	.biaoqian {
		font-size: 20upx;
	}

	.biaoqian {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.biaoqian>view {
		margin-right: 10upx;
		color: #6E0012;
	}

	.huise {
		color: #E5E5E5;
	}

	.part3 {
		display: flex;
		justify-content: space-between;
		font-size: 26upx;
		color: #656565;
		width: 100%;
		line-height: 50upx;
	}

	.shangp {
		display: flex;
		justify-content: space-between;
	}

	.yijian {
		margin-right: 20upx;
	}

	.option {
		display: flex;
		color: #656565;
		font-size: 26upx;
		width: 100%;
		justify-content: flex-end;
	}

	.option>view {
		/* width: 100upx; */
		border: 2upx solid #AAAAAA;
		margin: 8upx 10upx;
		width: 150upx;
		border-radius: 20upx;
		height: 40upx;
		text-align: center;
		line-height: 40upx;
	}
	.red{
		color: #FF0000;
	}
</style>
