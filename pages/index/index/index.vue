<template>
	<view class="container">
		<view class="content">
			<view class="search">
				<input class="shurukuang" type="text" v-model="search_value" placeholder="" />
				<image class="searchbtn" src="../../../static/yangsongyan/imgs/110.png" @click="search"></image>
			</view>
			<view class="banner">
				<swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1500">
					<swiper-item v-for="(item , index) in bannerlist" :key="index">
						<image class="bannerImg" :src="item.image" mode="scaleToFill"></image>
					</swiper-item>
				</swiper>
			</view>

			<view class="part2">
				<image src="../../../static/lxy/30.png" mode=""></image>
				<view class="shuoming">
					<view class="yingwen">WELCOME TO LOADTAK</view>
					<view class="huanying">欢迎{{name}}家长来到载德校服商城</view>
				</view>
			</view>
			<view class="part2a">
				<view class="part3">
					<view class="a lxyl" @click="xiaofudinggou">
						<image src="../../../static/lxy/xiaofudingou@3x.png"></image>
						<text>校服订购</text>
					</view>
					<view class="b lxyl" @click="pinpaigushi">
						<image src="../../../static/lxy/pingpaigushi@3x.png"></image>
						<text>品牌故事</text>
					</view>
					<view class="c lxyl" @click="anlizhanshi">
						<image src="../../../static/lxy/anli@3x.png"></image>
						<text>案例</text>
					</view>
					<view class="d lxyl" @click="gongyiliucheng">
						<image src="../../../static/lxy/gongyiliuc.png"></image>
						<text>工艺流程</text>
					</view>
				</view>
			</view>
			<view class="part4">
				<view class="part4a">LOADTAK SCHOOL UNIFORM DISPLAY</view>
				<view class="part4b">载德校服套装展示</view>
			</view>
			<view class="last part">
				<view class="qudenglu" :class="{yincan:loginNow}" @click="login">您没有权限查看，请登录!</view>
				<view class="qudenglu" :class="{yincan:!loginNow||(loginNow&&!nogoods)}">您没有可查看的商品，请联系客服!</view>
				<view class="part5" v-for="(item,index) in goodslist" :key="index" :class="index%2==0?left1:right1" @click="shopdetail(item.goods_id)">
					<view class="part5a mt">
						<image :src="item.image"></image>
					</view>
					<view class="part5b price">
						<view class="ZW">{{item.goods_name}}</view>
						<view class="YW">{{item.first_title}}</view>
						<view class="JQ">￥{{item.price}}</view>
						<view class="XQ">详情>>></view>
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
				nogoods: true,
				loginNow: false,
				search_value: '',
				name: '某某', //家长姓名
				imageURL: "../../../static/lxy/30.png", //蝴蝶结图片
				left1: 'left',
				right1: 'right',
				bannerlist: [], //轮播图数据
				goodslist: [], //商品数据
			}
		},
		onShow() {
			this.util.tokenCheck((res) => {
				if (!res) {
					this.loginNow = false;
				} else {
					this.loginNow = true;
				}
				let params = {
					// "token": token
				};
				let url = "/api/goods/goodsindex";
				this.util.request(url, "GET", params, (res) => {
					// ////console.log(JSON.stringify(res));
					if (res.statusCode == 200) {
						if (res.data.code == 1) {
							let data1 = res.data.data;
							this.bannerlist = data1.banner;
							this.goodslist = data1.goodslist;
							this.name = data1.name;
							if (this.goodslist.length > 0) {
								this.nogoods = false;
							}
							////console.log("看看数据2:"+JSON.stringify(data1));
						} else {
							this.util.showWindow(res.data.msg);
						}
					} else {
						this.util.showWindow("请求错误");
					}
				});
			});



			(function(m, ei, q, i, a, j, s) {
				m[i] = m[i] || function() {
					(m[i].a = m[i].a || []).push(arguments)
				};
				j = ei.createElement(q),
					s = ei.getElementsByTagName(q)[0];
				j.async = true;
				j.charset = 'UTF-8';
				j.src = 'https://static.meiqia.com/dist/meiqia.js?_=t';
				s.parentNode.insertBefore(j, s);
			})(window, document, 'script', '_MEIQIA');
			_MEIQIA('entId', 162728);
		},
		methods: {
			xiaofudinggou() {
				this.util.tokenCheck((res) => {
					if (!res) {
						uni.navigateTo({
							url: "../../mycenter/login/login"
						})
						return;
					}
					uni.navigateTo({
						url: "../creation/creation"
					})
				});
			},
			pinpaigushi() {
				uni.navigateTo({
					url: "../../tuiguangxiangguang/pinpaigushi/pinpaigushi"
				})
			},
			anlizhanshi() {
				uni.navigateTo({
					url: "../../tuiguangxiangguang/anlizhanshi/anlizhanshi"
				})
			},
			gongyiliucheng() {
				uni.navigateTo({
					url: "../../tuiguangxiangguang/gongyiliucheng/gongyiliucheng"
				})
			},
			shopdetail(id) {
				uni.navigateTo({
					url: "../shop_detail/shop_detail?id=" + id
				})
			},
			search() {
				if (uni.getStorageSync("token") == '') {
					uni.navigateTo({
						url: "../../mycenter/login/login"
					})
					return;
				}
				////console.log("搜索内容:" + this.search_value);
				uni.navigateTo({
					url: "../creation/creation?content=" + this.search_value
				})
			},
			login() {
				uni.navigateTo({
					url: "../../mycenter/login/login"
				});
			}


		}
	}
</script>

<style>
	.bannerImg {
		width: 100%;
		height: 100%;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}

	.banner {
		width: 100%;
	}

	.swiper {
		height: 350upx;
	}

	swiper-item>uni-image {
		width: 100%;
		height: 350upx;
	}

	// swiper-item 里面的图片高度
	.swiper-item image {
		width: 200%;
		height: 550upx;
	}

	.part2 {
		margin-top: -10upx;
	}

	.part2 image {
		margin-top: -10upx;
		width: 100%;
		height: 80upx;
	}

	.part2a {
		border-bottom: 1upx solid black;
	}

	.part3 {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 80%;
		margin: 0upx auto;
		font-size: 25upx;
		margin-top: 35upx;
		padding-bottom: 20upx;
	}

	.part3 image {
		width: 80upx;
		height: 80upx;
	}

	.lxyl {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.part4a {
		border-bottom: 1upx solid black;
		width: 80%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.part4 {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 30upx;
		font-size: 30upx;
		/* font-weight:bold; */
		margin-bottom: 30upx;
	}

	.last {
		width: 90%;
		margin: 0upx auto;
	}

	.part5 {
		margin-bottom: 50upx;
	}

	.mt image {
		width: 350upx;
		height: 400upx;
	}

	.price {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		flex-direction: column;
	}

	.ZW {
		font-size: 34upx;
		color: #6e0012;
		font-weight: bold;
	}

	.YW {
		font-size: 25upx;
		color: #0A2153;
		/* width: 280upx; */
	}

	.JQ {
		font-size: 25upx;
		color: #6E0012;
	}

	.XQ {
		font-size: 25upx;
		background-color: #6e0012;
		color: #FFFFFF;
		width: 130upx;
		display: flex;
		justify-content: center;
	}

	.left {
		display: flex;
		align-items: flex-end;
		justify-content: flex-start;
		flex-direction: row;
	}

	.right {
		display: flex;
		align-items: flex-end;
		justify-content: flex-start;
		flex-direction: row-reverse;
	}

	.left>.mt {
		margin-right: 25upx;
	}

	.right>.price {
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;
		flex-direction: column;
		margin-bottom: 30upx;
		margin-right: 25upx;
	}

	.left>.price {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		flex-direction: column;
		margin-bottom: 30upx;

	}

	.part2 {
		/* border: 2upx solid red; */
		width: 100%;
		height: 88upx;
		position: relative;
	}

	.shuoming {
		float: left;
		position: absolute;
		top: -6upx;
		left: 33%;
		color: #FFFFFF;
		font-size: 22upx;
	}

	.search {
		/* position: fixed; */
		width: 100vw;
		height: 70upx;
		background-color: #0A2051;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 100;
	}

	.shurukuang {
		height: 60%;
		/* background-color: #FFFFFF; */
		width: 60%;
		border-radius: 20upx;
		border: 2upx solid #FFFFFF;
	}

	.searchbtn {
		margin-left: -80upx;
		width: 80upx;
		height: 100%;
		/* 
		color: #000000;
		background-color: #5B091B; */
		border-radius: 20upx;
		text-align: center;
		font-size: 26upx;
		line-height: 150%;
	}

	.qudenglu {
		width: 100%;
		text-align: center;
		text-decoration: underline;
		color: #FF0000;
		margin-top: 100upx;
		font-size: 28upx;
	}

	.yincan {
		display: none;
	}
	.yingwen{
		text-align: center;
	}
	
</style>
