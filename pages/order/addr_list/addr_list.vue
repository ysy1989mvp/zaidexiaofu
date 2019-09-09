<template>
	<view class="container">
		<view class="content">
			<view class="item" v-for="(item,index) in addrs" :key="index">
				<image class="tubiao" src="../../../static/yangsongyan/imgs/address/513@3x.png"></image>
				<view class="center" @click="selected(item.address_id)">
					<view class="part1">
						<view class="name">{{item.name}}</view>
						<view class="mobile">{{item.phone}}</view>
					</view>
					<view class="part2">
						<view class="default" v-if="item.isdefault==1">默认</view>
						<view class="addr">{{item.address_name}} {{item.detail}}</view>
					</view>
				</view>
				<view class="editer" @click="addAddr(2,item.address_id)">编辑</view>
			</view>
			<view class="liubai"></view>
			<view class="button_ysy" @click="addAddr(1,0)">
				新增地址
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: 2,
				addrs: []
			}
		},
		onLoad(option) {
			this.type = option.type;
		},
		onShow() {
			let params = {};
			let url = "/api/address/lists";
			this.util.request(url, "POST", params, (res) => {
				if (res.statusCode == 200) {
					if (res.data.code == 1) {
						this.addrs = res.data.data;
					} else {
						this.util.showWindow(res.data.msg);
					}
				} else {
					this.util.showWindow("请求错误");
				}
			});
		},
		methods: {
			addAddr(index, addr_id) {
				uni.navigateTo({
					url: "../addr_list/addressManage?type=" + index + "&addr_id=" + addr_id
				});
			},
			selected(id) {
				if (this.type == 1) {
					uni.navigateTo({
						url: "../confirm_order/confirm_order?type=2&addr_id=" + id
					});
				}
			}

		}
	}
</script>

<style>
	page {
		background-color: #EEEEEE;
	}

	.item {
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 15upx auto;
		padding-bottom: 0upx 20upx;
	}

	.tubiao {
		width: 104upx;
		height: 88upx;
		margin-right: 10upx;
	}

	.center {
		font-size: 28upx;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		width: 70%;
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

	.editer {
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

	.name {
		line-height: 50upx;
		margin-right: 10upx;
	}

	.mobile {
		font-size: 25upx;
		line-height: 50upx;
		color: #AAAAAA;
	}

	.addr {
		font-size: 25upx;
		line-height: 40upx;
	}

	.button_ysy {
		position: fixed;
		bottom: -20upx;
		margin-left: 5%;
		background-color: #061637;
		color: #FFFFFF;
	}

	.liubai {
		height: 120upx;
	}
</style>
