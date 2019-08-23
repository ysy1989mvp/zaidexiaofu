<template>
	<view class="container">
		<view class="content">
			<view class="TX">
				<image class="TXA" :src="data.avatar"></image>
				<view class="zl">
					<view class="name">更换头像</view>
				</view>
			</view>
			<view class="part1">
				<view class="fw">
					<view class="ee">
						<view class="c1">学校</view>
						<view class="c3">{{data.school_name}}</view>
						<view class="c2">〉</view>
					</view>
				</view>
				<view class="fw">
					<view class="ee">
						<view class="c1">电话号码</view>
						<view class="c3">{{data.mobile}}</view>
						<view class="c2">〉</view>
					</view>
				</view>
				<view class="fw">
					<view class="ee">
						<view class="c1">性别</view>
						<view class="c3">{{data.xingbie}}</view>
						<view class="c2">〉</view>
					</view>
				</view>
			</view>
			<view class="last">
				<view class="part2">
					注意：学校是所在学校的称谓，需和学校名字保持一致，能更有效的核对学校地址；防止地址信息错误，填写正确的性别还能更好的挑选满意的商品。
				</view>
				<view class="btn">保存</view>
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
		onLoad(){
			let params = {
			};
			let url = "/api/user";
			this.util.request(url, "POST", params, (res) => {
				console.log(JSON.stringify(res));
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

		}
	}
</script>

<style>
	.TXA {
		height: 150upx;
		width: 170upx;
		padding-top: 40upx;
	}

	.TX {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		height: 300upx;
		font-size: 28upx;
	}

	.name {
		color: red;
	}

	.zl {
		height: 80upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}

	.fw {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #FFFFFF;
		border-bottom: 2upx solid #A5A5A5;
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

	.part2 {
		display: flex;
		flex-direction: column;
	}

	.c1 {
		width: 20%;
	}

	.c3 {
		width: 50%;
	}

	.part2 {
		font-size: 23upx;
		height: 50upx;
		width: 90%;
		line-height: 40upx;
		margin: 36upx 38upx;
		color: #909399;
		height: 100%;
	}

	.btn {
		width: 60%;
		height: 150upx;
		border-radius: 20upx;
		background-color: #6E0012;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.last{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 350upx;
	}
</style>
