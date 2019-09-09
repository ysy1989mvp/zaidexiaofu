<template>
	<view class="container">
		<view class="content">
			<view class="part1">
				<view class="part1a">
					<image class="TXA" :src="data.avatar"></image>
					<view class="zl">
						<view class="number">{{data.mobile}}</view>
						<view class="school">{{data.school_name}}</view>
					</view>
					<view class="bj" @click="edit">编辑</view>
				</view>
				<view class="fw" @click="addresses">
					<view class="ee">
						<view class="c1">我的收货地址</view>
						<view class="c2">〉</view>
					</view>
				</view>
			</view>
			<view class="part2">
				<view class="fw" @click="zhanghuanquan">
					<view class="ee">
						<view class="c1">账户与安全</view>
						<view class="c2">〉</view>
					</view>
				</view><view class="fw" @click="wentifankui">
					<view class="ee">
						<view class="c1">问题反馈</view>
						<view class="c2">〉</view>
					</view>
				</view><view class="fw" @click="guanyuzaide">
					<view class="ee">
						<view class="c1">关于载德</view>
						<view class="c2">〉</view>
					</view>
				</view>
				</view><view class="fw butn login" @click="loginout">
						账号切换
				</view>
				</view><view class="fw butn" @click="loginout">
						退出登录
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:null
			}
		},
		onShow(){
			let params = {
			};
			let url = "/api/user";
			this.util.request(url, "POST", params, (res) => {
				////console.log(JSON.stringify(res));
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
		},
		methods: {
			zhanghuanquan(){
				uni.navigateTo({
					url:"../zhanghuanquan/zhanghuanquan"
				});
			},
			wentifankui(){
				uni.navigateTo({
					url:"../serveback/serveback"
				});
			},
			guanyuzaide(){
				uni.navigateTo({
					url:"../guanyuzaide/guanyuzaide"
				});
			},
			addresses(){
				uni.navigateTo({
					url:"../../order/addr_list/addr_list?type="+2
				});
			},
			edit(){
				uni.navigateTo({
					url:"../Edit-data/Edit-data"
				});
			},
			loginout(){
				let params = {
				};
				let url = "/api/user/logout";
				this.util.request(url, "POST", params, (res) => {
					////console.log(JSON.stringify(res));
					if (res.statusCode == 200) {
						if (res.data.code == 1) {
							uni.setStorageSync("token","");
							uni.navigateTo({
								url:"../login/login"
							});
						} else {
							this.util.showWindow(res.data.msg);
						}
					} else {
						this.util.showWindow("请求错误");
					}
				});
			}
		}
	}
</script>

<style>
	page {
		background-color: #E4E7ED;
	}

	.TXA {
		height: 110upx;
		width: 130upx;
	}

	.zl {
		font-size: 28upx;
		width: 60%;
		line-height: 40upx;
	}

	.part1 {
		/* display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between; */
		font-size: 28upx;
		/* margin: 20upx 30upx;	 */
		background-color: #FFFFFF;
	}
	.part1a{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin: 0upx 30upx;
		padding-top: 20upx;
	}

	.bj {
		border-radius: 10upx;
		border: 2upx solid #000000;
		padding: 0upx 20upx;
	}

	.ee {
		display: flex;
		flex-direction: row;
		margin-top: 15upx;
		margin-bottom: 15upx;
		height: 80upx;
		justify-content: space-between;
		align-items: center;
		font-size: 28upx;
		width: 90%;
	}
	.fw{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #FFFFFF;
		border-bottom: 2upx solid #A5A5A5;
	}
	.dizhi1{
		margin-bottom: 35upx;
	}
	.butn{
		height: 80upx;
		margin-top: 30upx;
		font-size: 30upx;
	}
</style>
