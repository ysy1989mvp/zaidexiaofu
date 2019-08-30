<template>
	<view class="gs" style="width: 100vw;">
		<!-- <image class="image1" src="../../../static/ysy/ppgs.png" mode="widthFix"></image> -->
		 <rich-text class="fuwenben" style="width: 98%;margin: 0upx auto;" type="node" :nodes="data.content"></rich-text>
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
			let params = {};
			let url = "/api/index/gwxz_content";
			this.util.request(url, "POST", params, (res) => {
				////console.log(JSON.stringify(res));
				if (res.statusCode == 200) {
					if (res.data.code == 1) {
						this.data = res.data.data;
						let regex = new RegExp(`style="`, 'gi');
						let rich = '';
						if(this.data.content.indexOf(`style="`)>-1){
							rich = this.data.content.replace(regex, `style="max-width: 100%;`);
						}else{
							regex = new RegExp('<img', 'gi');
							rich = this.data.content.replace(regex, `<img style="max-width: 100%;width:100%;"`)
						}
						this.data.content = rich;
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
	.pt{
		width: 100%;
		display: flex;
		justify-content: center;
	}
	.image1{
		width: 90%;
		height: 200%;
		margin: 0upx auto;
	}
</style>
