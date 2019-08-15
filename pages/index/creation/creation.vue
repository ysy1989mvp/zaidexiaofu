<template>
	<view class="container">
		<view class="content">
			<!-- tab顶部切换 -->
			<view class="top_tag">
				<!-- 头部 -->
				<view class="navbar">
					<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }"
					 @click="tabClick(index)">
						{{ item.text }}
					</view>
				</view>
				<view class="zhengzhao" v-if="fou==1" @click="cancer">
					<view class="neirong">
						<view class="top_tag0" v-for="(item,index) in 10" :key="index" :class="{xuanzhong:index==1}" @click="select">
							外套
						</view>
					</view>
				</view>
			</view>
			<!-- 显示区域 -->
			<!-- <view class="list" v-for="(item, index) in navList" :key="index" v-if="tabCurrentIndex === index"> -->
			<view class="center_content">
				<view class="row" v-for="(item,index) in 12" :key="index" @click="goDetail">
					<image class="goods_img" src="../../../static/yangsongyan/imgs/creation/1.png"></image>
					<view>
						<view class="title">学院风经典针织菱形外套</view>
						<view class="tags">
							<view>修身</view>
							<view>百搭</view>
							<view>学院风</view>
						</view>
						<view class="last">
							<view class="tag_price">
								<view class="price">￥180</view>
								<view class="number">589人付款</view>
							</view>
							<view class="dingzhi">购买 〉</view>
						</view>
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
				fou:'0',
				currt: "3", //1是待付款，2是待发货，3是待收货，4完成
				tabCurrentIndex: 0,
				navList: [{
						state: 0,
						text: '全部',
						orderList: []
					},
					{
						state: 1,
						text: '学校',
						orderList: []
					},
					{
						state: 2,
						text: '休闲',
						orderList: []
					},
					{
						state: 3,
						text: '夏装',
						orderList: []
					},
					{
						state: 4,
						text: '冬装',
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
				if(index!=0){
					this.fou = 1;
				}else{
					this.fou = 0;
				}
			},
			cancer(){
				this.fou = 0;
			}
			,select(){
				console.log("我呗点了");
			},
			goDetail(){
				uni.navigateTo({
					url:"../shop_detail/shop_detail"
				})
			}
		}
	}
</script>

<style>
	/* tab顶部切换 */
	@import url("../../../css/navbar.css");

	* {
		/* border: 1px solid red; */
	}

	.top_tag {
		width: 100%;
		position: fixed;
		z-index: 100;
		top: 82upx;
	}

	.center_content {
		width: 95vw;
		margin-left: 5vw;
		margin-top: 84upx;
	}

	.row {
		float: left;
		width: 43vw;
		height: 37vh;
		margin-right: 10upx;
		margin-top: 20upx;
		margin-bottom: 10upx;
	}

	.goods_img {
		width: 100%;
		height: 75%;
	}

	.title {
		font-size: 28upx;
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

	.tags {
		font-size: 20upx;
		color: #a5a5a5;
		display: flex;
		line-height: 40upx;
	}

	.number {
		font-size: 20upx;
		color: #a5a5a5;
	}

	.tags>view {
		padding: 0upx 10upx;
		border-right: 2upx solid #A5A5A5;
	}

	.last {
		display: flex;
		justify-content: space-between;
	}

	.price {
		font-size: 28upx;
		color: #6E0012;
		margin-right: 10upx;
	}

	.tag_price {
		display: flex;
		justify-content: space-between;
		line-height: 40upx;
	}

	.dingzhi {
		font-size: 24upx;
		color: #6E0012;
		line-height: 46upx;
	}

	.zhengzhao {
		/* float: left; */
		z-index: 100;
		width: 100%;
		height: 100vh;
		background-color: rgba(65,65,65,0.5);
		top:100upx;
	}
	.neirong{
		background-color: #FFFFFF;
		display:flex;
		align-items: center;
		justify-content: flex-start;
		flex-wrap: wrap;
		padding-top: 15upx;
	}
	.top_tag0{
		width: 100upx;
		border: 2upx solid #AAAAAA;
		border-radius: 20upx;
		font-size: 28upx;
		text-align: center;
		margin: 10upx 20upx;
	}
	.xuanzhong{
		background-color: #061637;
		color: #FFFFFF;
	}
</style>
