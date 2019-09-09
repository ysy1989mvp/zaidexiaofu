<template>
	<view class="container">
		<view class="content">
			<swiper class="swiper" indicator-dots="true" autoplay="false" interval="50000000" duration="1500">
				<swiper-item v-for="(item , index) in bannerlist" :key="index">
					<image class="bannerImg" :src="item" mode="scaleToFill"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="part2">
			<view><text class="xf">{{goodsdata.goods_name}}</text></view>
			<view class="w">{{goodsdata.first_title}}</view>
			<view class="p">￥{{goodsdata.price}}</view>
			<view class="jdtw">
				<image class="tu" src="../../../static/ysy/jdt.png" mode=""></image>
				<view class="yy">已定制85%</view>
			</view>
			
		</view>
		<!-- <view class="see1" @click="bubuy"> -->
		<!-- <image style="width: 100%;" :src="goodsdata.detailImage" mode="widthFix"></image> -->
		<!-- </view> -->
		<view class="gs" style="width: 90vw;margin: 0upx auto;">
			<rich-text :nodes="goodsdata.content"></rich-text>
		</view>
		<view class="D">
			<view class="HJ">合计：￥{{total_price}}</view>
			<view class="GM" @click="buy">立即购买</view>

			<view class="zhezhao" :class="{yincang:show_number==0}" @click="bubuy($event)">
				<view class="part3">
					<view class="l3a">
						<view class="w1">
							<img class="tt" :src="goodsdata.image" />
							<view class="t2">
								<view class="aa3">￥{{total_price}}</view>
								<view class="aa4">库存1236件</view>
								<view class="aa5">选择 需要的规格</view>
							</view>
						</view>
						<view v-for="(item,index) in specData" :key="index">
							<view class="t3">
								<view class="t3a">{{item.group_name}}</view>
								<view class="t3b"></view>
							</view>
							<view class="SZ">
								<text class="tex" v-for="(item1,index1) in item.spec_items" :class="{bianse:biaoji==index1}" :key="index1"
								 @click="selectGuige(item.group_id,item1.item_id,item.group_name,item1.spec_value,index1,$event)">{{item1.spec_value}}</text>
							</view>
						</view>
					</view>
					<view class="QR" @click="confirmBuy">确认</view>
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
				biaoji: -1,
				goodsId: null,
				sld: false,
				show_number: 0,
				bannerlist: [],
				goodsdata: '',
				canshulist: [],
				total_price: 0,
				specData: [],
				selectGuiges: [],
				selectGuigesName_value: []
			}
		},
		onLoad(option) {
			this.goodsId = option.id;
		},
		onShow() {
			let params = {
				"goodId": this.goodsId
			};
			let url = "/api/goods/detail";

			this.util.request(url, "GET", params, (res) => {
				if (res.statusCode == 200) {
					if (res.data.code == 1) {
						this.bannerlist = res.data.data.detail.images;
						this.goodsdata = res.data.data.detail;
						this.canshulist = res.data.data.detail.spec;
						this.total_price = res.data.data.detail.price;
						this.specData = res.data.data.specData;
						//console.log("替换之前:"+this.goodsdata.content);
						let regex = new RegExp(`style="`, 'g');
						let rich = '';
						if (this.goodsdata.content.indexOf(`style="`) > -1) {
							rich = this.goodsdata.content.replace(regex, `style="max-width: 100%;`);
						} else {
							regex = new RegExp(`<img`, 'g');
							rich = this.goodsdata.content.replace(regex, `<img style="max-width: 100%;"`)
						}
						this.goodsdata.content = rich;
						//console.log("替换之后:"+this.goodsdata.content);
					} else {
						this.util.showWindow(res.data.msg);
					}
				} else {
					this.util.showWindow("请求错误");
				}
			});
		},
		methods: {
			selectGuige(group_id, item_id, group_name, item_value, index,event) {
				// event.preventDefault();
				this.biaoji = index;
				let boolean = false;
				for (var i = 0; i < this.selectGuiges.length; i++) {
					if (this.selectGuiges[i].group_id == group_id) {
						this.selectGuiges[i].item_id = item_id;
						this.selectGuigesName_value[i].item_value = item_value;
						boolean = true;
					}
				}
				if (!boolean) {
					var guige = {
						'group_id': group_id,
						'item_id': item_id
					};
					var guigevalue = {
						"group_name": group_name,
						"item_value": item_value
					};
					this.selectGuiges.push(guige);
					this.selectGuigesName_value.push(guigevalue);
				}
				// this.goodsId
				let params = {
					"goods_id": parseInt(this.goodsId),
					"guige": this.selectGuiges,
					"goods_num": 1
				};
				let params1 = {
					"paramsdata": JSON.stringify(params)
				}
				let url = "/api/order/calculationprice";
				this.util.request(url, "POST", params1, (res) => {
					if (res.statusCode == 200) {
						if (res.data.code == 1) {
							this.total_price = res.data.data.order_total_price;
						} else {
							this.util.showWindow(res.data.msg);
							return;
						}
					} else {
						this.util.showWindow("请求错误");
						return;
					}
				});
			},
			buy() {
				this.show_number = 1;
			},
			bubuy(event) {
				// var el1 = event.currentTarget;
				// var el2 = event.target;
				// if (el1 == el2) {
					//do something
					this.show_number = 0;
				// }
			},
			confirmBuy() {
				var data1 = {
					"goods_id": this.goodsdata.goods_id,
					"selectGuiges": this.selectGuiges,
					"goods_name": this.goodsdata.goods_name,
					"selectGuigesName_value": this.selectGuigesName_value,
					"totalPrice": this.total_price,
					"goodsimg": this.goodsdata.image
				};

				uni.navigateTo({
					url: "../../order/confirm_order/confirm_order?type=1&data=" + JSON.stringify(data1)
				})
			},

		}
	}
</script>

<style>
	.title {
		font-size: 36upx;
		color: #8f8f94;
	}

	.swiper {
		height: 500upx;
	}

	.bannerImg {
		width: 100%;
	}

	/* // swiper-item 里面的图片高度
	.swiper-item image {
		width: 100%;
		height: 350upx;
	} */
	.xf {
		background-color: #061637;
		color: #FFFFFF;
		/* width: 200upx; */
		font-size: 25upx;
		padding: 0upx 10upx;
		margin-top: 30upx;
		/* display: block; */
		/* display: flex;
		justify-content: center; */
		border-radius: 100upx;
		/* -webkit-line-clamp: 1; */
		/* // 限制显示的文本的行数为3 */
		/* -webkit-box-orient: vertical; */
		/* // 水平排列<p>，使其不纵向显示 */
		/* word-break: break-all; */
		/* // 使<p>中的文字换行 */
		/* overflow: hidden; */
		/* // 超出的文字部分隐藏 */
		/* text-overflow: ellipsis; */
		/* // 超出的文字部分用...来显示 */
		/* display: -webkit-box; */
		/* // 将<p>变成高度定死，宽度自适应的行内块元素 */
	}

	.p {
		color: #6E0012;
		font-size: 35upx;
	}

	.w {
		color: #061637;
		font-size: 28upx;
		margin-top: 10upx;
	}

	.tu {
		width: 71upx;
		height: 5upx;
		padding-top: 12upx;
		padding-right: 20upx;
	}

	.jdtw {
		display: flex;
		flex-direction: row;
		font-size: 30upx;
		color: #6E0012;
	}

	.yy {
		font-size: 16upx;
	}

	.D {
		width: 100%;
		display: flex;
		flex-direction: row;
		/* align-items: center; */
		justify-content: space-between;
		position: fixed;
		bottom: 0upx;
	}

	.HJ {
		text-align: center;
		width: 50%;
		color: #6E0012;
		height: 80upx;
		line-height: 80upx;
		background-color: #E5E5E5;

	}

	.GM {
		text-align: center;
		width: 50%;
		background-color: #6E0012;
		color: #FFFFFF;
		height: 80upx;
		line-height: 80upx;
	}

	.see1 {
		background-color: #f5f5f5;
		margin-bottom: 81upx;
	}

	.w1 {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: space-between;
		width: 100%;
		height: 240upx;
		margin-top: 20upx;
		margin-bottom: 40upx;
	}

	.t2 {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		text-align: left;
		justify-content: space-between;
		align-items: flex-start;
		width: 55%;
		height: 150upx;
		margin-top: 25upx;
	}

	.aa3 {
		color: #6E0012;
		font-size: 30upx;
	}

	.aa4 {
		font-size: 25upx;
	}

	.aa5 {
		font-size: 25upx;
	}

	.tt {
		width: 250upx;
		height: 100%;
	}

	.SZ {
		height: 50%;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		/* margin: -50upx 0; */
		margin-top: 5upx;
	}

	.t3 {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		height: 50upx;
		font-size: 25upx;
		border-top: 2upx solid #E5E5E5;
		border-bottom: 2upx solid #E5E5E5;
	}

	.tex {
		width: 15%;
		background-color: #E5E5E5;
		padding: 6upx 12upx;
		border-radius: 10upx;
		margin: 12upx;
		text-align: center;
		font-size: 24upx;
	}

	.l3a {
		width: 90%;
		margin: 0upx auto;
	}

	.QR {
		text-align: center;
		background-color: #6E0012;
		color: #FFFFFF;
		height: 80upx;
		line-height: 80upx
	}

	.zhezhao {
		position: absolute;
		bottom: 0upx;
		background-color: #FFFFFF;
		width: 100%;
		height: 100vh;
		background-color: rgba(55, 55, 55, 0.5);
		border-top: 2upx solid #E5E5E5;
		border-bottom: 2upx solid #E5E5E5;
		/* border: 2upx solid red; */
		display: flex;
		justify-content: flex-end;
		flex-direction: column;
	}

	.part3 {
		/* border: 2upx solid red;
		 */
		background-color: #FFFFFF;
	}

	.t3a,
	.t3b {
		line-height: 60upx;
	}

	.bianse {
		background-color: #1BCC8D;
	}
	.part2{
		width: 90%;
		margin: 0upx auto;
	}
	.yincang{
		display: none;
	}
</style>
