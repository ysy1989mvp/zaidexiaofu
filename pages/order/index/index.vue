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
				<view class="item" v-for="(item,index) in data" :key="index" @click="detail(item.order_no,$event)">
					<view class="part1">
						<view class="order_no">
							订单号:{{item.order_no}}
						</view>
						<view class="status zhuangtai">
							{{item.order_status_txt}}
						</view>
					</view>
					<view class="part2">
						<view class="image-view">
							<image :src="item.goods[0].image"></image>
						</view>
						<view class="neirong">
							<view class="name">{{item.goods[0].goods_name}}</view>
							<view>
								<view class="status">
									￥{{item.pay_price}}
								</view>
								<view class="status huise">
									×{{item.goods[0].total_num}}
								</view>

							</view>
							<!-- <view>&nbsp;</view> -->
							<!-- <view class="name">西服套装</view> -->
							<!-- <view class="daxiao">学院套装：145cm</view> -->
							<!-- <view class="biaoqian">
								<view>品质优选</view>
								<view>放心选购</view>
							</view> -->
						</view>

					</view>
					<view class="part3">
						<view class="yunfei">
							顺风到付
						</view>

						<!-- <view class="shangp">
							<view class="yijian">
								共1件商品
							</view>
							<view>合计:￥450.00</view>
						</view> -->
						<view>
							<view class="option" v-if="item.pay_status==10">
								<!-- 待付款 -->
								<view @click="cancer(item.order_no)">
									取消订单
								</view>
								<view @click="goPay(item.order_no)">
									订单付款
								</view>
							</view>
							<view class="option" v-if="item.pay_status==20&&item.freight_status==10">
								<!-- 待发货
							<view>
								查看物流
							</view>
							<view>
								提醒发货
							</view>-->
							</view>
							<!-- 待收货 -->
							<view class="option" v-if="item.pay_status==20&&item.freight_status==20&&item.receipt_status==10">
								<!-- <view>
								延长收货
							</view>
							<view>
								查看物流
							</view> -->
								<view class="red" @click="confirmshouhuo(item.order_no)">
									确认收货
								</view>
							</view>
							<!-- 订单完成 -->
							<view class="option" v-if="item.order_status=='30'">
								<view @click="goodsdetail(item.goods[0].goods_id)">
									再买一件
								</view>
							</view>
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
				// 订单状态
				currt: "3", //1是待付款，2是待发货，3是待收货，4完成
				tabCurrentIndex: 0,
				data: [],
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
		onShow() {
			// 页面显示是默认选中第一个
			this.tabCurrentIndex = this.util.tabCurrentIndex;
			// this.$options.methods.tabClick(this.tabCurrentIndex);
			this.util.tokenCheck((res) => {
				if (!res) {
					return;
				}

				let params = {};
				let url = "";
				switch (this.tabCurrentIndex) {
					// 全部
					case 0:
						url = "/api/order/all";
						break;
						// 待付款
					case 1:
						url = "/api/order/unpay";
						break;
						// 待发货
					case 2:
						url = "/api/order/unfreight";
						break;
						// 待收货
					case 3:
						url = "/api/order/unreceipt";
						break;
						// 已完成
					case 4:
						url = "/api/order/orderfinish";
						break;
				}

				this.util.request(url, "GET", params, (res) => {
					//console.log(JSON.stringify(res));
					if (res.statusCode == 200) {
						if (res.data.code == 1) {
							this.data = res.data.data;
							//console.log("后台返回数据:" + JSON.stringify(this.data));
						} else {
							this.util.showWindow(res.data.msg);
						}
					} else {
						this.util.showWindow("请求错误");
					}
				});
			});
		},
		methods: {
			cancer(goods_no) {
				let params = {
					"id": goods_no
				};
				let url = "/api/order/cancel";
				this.util.request(url, "GET", params, (res) => {
					//console.log(JSON.stringify(res));
					if (res.statusCode == 200) {
						if (res.data.code == 1) {
							this.util.showWindow(res.data.msg);
							uni.navigateTo({
								url:"./index"
							})
						} else {
							this.util.showWindow(res.data.msg);
						}
					} else {
						this.util.showWindow("请求错误");
					}
				});
			},
			goPay(goods_no) {
				uni.navigateTo({
					url: "../orderdetail/orderdetail?id=" + goods_no
				})
			},
			confirmshouhuo(goods_no) {
				//确认收货
				let params = {
					"id": goods_no
				};
				let url = "/api/order/finish";
				this.util.request(url, "GET", params, (res) => {
					////console.log(JSON.stringify(res));
					if (res.statusCode == 200) {
						if (res.data.code == 1) {
							this.util.showWindow(res.data.msg);
						} else {
							this.util.showWindow(res.data.msg);
						}
					} else {
						this.util.showWindow("请求错误");
					}
				});
			},
			goodsdetail(goods_id) {

				uni.navigateTo({
					url: "../../index/shop_detail/shop_detail?id=" + goods_id
				})
			},
			// changeTab(e) {
			// 	this.tabCurrentIndex = e.target.current;
			// 	////console.log("changetab："+this.tabCurrentIndex);
			// },
			//顶部tab点击
			tabClick(index) {
				this.util.tokenCheck((res) => {
					if (!res) {
						this.util.showWindow("您还没有登录");
						return;
					}
					this.tabCurrentIndex = index;
					////console.log("tabclick："+this.tabCurrentIndex);
					let params = {};
					let url = "";
					switch (index) {
						// 全部
						case 0:
							url = "/api/order/all";
							break;
							// 待付款
						case 1:
							url = "/api/order/unpay";
							break;
							// 待发货
						case 2:
							url = "/api/order/unfreight";
							break;
							// 待收货
						case 3:
							url = "/api/order/unreceipt";
							break;
							// 已完成
						case 4:
							url = "/api/order/orderfinish";
							break;
					}

					this.util.request(url, "GET", params, (res) => {
						// ////console.log(JSON.stringify(res));
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
				});
			},
			detail(id, event) {
				var el1 = event.currentTarget;
				var el2 = event.target;
				if (el1 == el2) {
					uni.navigateTo({
						url: "../orderdetail/orderdetail?id=" + id
					})
				}
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
		width: 68vw;
		height: 170upx;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
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
		align-items: center;
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

	.red {
		color: #FF0000;
	}

	.yunfei {
		background-color: #e54d42;
		margin-left: 15upx;
		border: 1upx solid red;
		height: 36upx;
		line-height: 36upx;
		color: #FFFFFF;
	}
	.zhuangtai{
		background-color: #9c26b0;
		color: #FFFFFF;
		padding: 0upx 10upx;
	}
</style>
