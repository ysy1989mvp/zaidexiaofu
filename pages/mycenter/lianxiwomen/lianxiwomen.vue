<template>
	<view class="gw">
		<!-- <image class="image1" src="../../../static/ysy/gwxz.png" mode="widthFix"></image> -->
		 <rich-text :nodes="data.content"></rich-text>
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
			let params = {};
			let url = "/api/index/lxwm_content";
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
	.image1{
		width: 100%;
		height: 200%;
	}
</style>
