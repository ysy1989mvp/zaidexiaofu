<template>
	<view class="bottomfixbar">
		<view class="bottom_bar">
			<view class="neirong_bar" v-for="(item,index) in barlist" :key="index" @click="selected(index,item.pagePath)">
				<image class="bar_img" :src="item.noselectimage" :class="{bar_hide:item.selected}" mode="scaleToFill"></image>
				<image class="bar_img" :src="item.selectedimage" :class="{bar_hide:!item.selected}" mode="scaleToFill"></image>
				<view class="bottom_text1" :class="{bar_hide:item.selected}">{{item.text}}</view>
				<view class="bottom_text2" :class="{bar_hide:!item.selected}">{{item.text}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'bottomfixbar',
		data() {
			return {
				barlist: [{
						selected: true,
						noselectimage: "/static/lxy/1051.png",
						selectedimage: "/static/lxy/105.png",
						text: "首页",
						pagePath: "/pages/index/index/index"
					},
					{
						selected: false,
						noselectimage: "/static/lxy/1061.png",
						selectedimage: "/static/lxy/106.png",
						text: "订单",
						pagePath: "/pages/order/index/index"
					},
					// {
					// 	selected: false,
					// 	noselectimage: "/static/lxy/1071.png",
					// 	selectedimage: "/static/lxy/107.png",
					// 	text: "客服",
					// 	pagePath: "/pages/kefu/index/index"
					// },
					{
						selected: false,
						noselectimage: "/static/lxy/1081.png",
						selectedimage: "/static/lxy/108.png",
						text: "我的",
						pagePath: "/pages/mycenter/index/index"
					},


				]
			}
		},
		methods: {
			selected(index, url1) {
				for (var i = 0; i < this.barlist.length; i++) {
					if (i != index) {
						this.barlist[i].selected = false;
					} else {
						this.barlist[i].selected = true;
					}
				}
				uni.switchTab({
					url: url1
				})
			}
		}
	}
</script>

<style>
	.bottomfixbar{
		background-color: #FFFFFF;
		width: 100%;
		position: fixed;
		bottom: 0upx;
	}
	.bottom_bar {
		width: 70%;
		height: 100upx;
		display: flex;
		justify-content: space-between;
		font-size: 20upx;
		margin: 0upx auto;

	}

	.neirong_bar {
		display: flex;
		flex-direction: column;
		justify-content: center;
		
	}

	.bar_img {
		height: 54upx;
		width: 54upx;
	}

	.bar_hide {
		display: none;
	}

	.bottom_text2 {
		color: #fa436a;
		text-align: center;
	}

	.bottom_text1 {
		color: #c0c4cc;
		text-align: center;
	}

	/* #fa436 */
	/* #c0c4cc */
</style>
