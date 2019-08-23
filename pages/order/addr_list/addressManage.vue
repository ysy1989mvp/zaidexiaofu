<template>
	<view class="content">
		<view class="row b-b">
			<text class="tit">联系人</text>
			<input class="input" type="text" v-model="addressData.name" placeholder="收货人姓名" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">手机号</text>
			<input class="input" type="number" v-model="addressData.mobile" placeholder="收货人手机号码" placeholder-class="placeholder" />
		</view>
		<view class="row b-b" @click="toggleTab1">
			<text class="tit">地址</text>
			<!-- <text @click="chooseLocation" class="input">
				{{addressData.addressName}}
			</text> -->
			<text class="yticon icon-shouhuodizhi">{{toggleTab}}</text>

		</view>
		<view class="row b-b">
			<text class="tit">门牌号</text>
			<input class="input" type="text" v-model="addressData.area" placeholder="楼号、门牌" placeholder-class="placeholder" />
		</view>

		<view class="row default-row">
			<text class="tit">设为默认</text>
			<switch :checked="addressData.defaule" color="#fa436a" @change="switchChange" />
		</view>
		<button class="add-btn" v-if="type==2" @click="deleteAddr">删除</button>
		<button class="add-btn lvse" v-if="type==2" @click="modify">修改</button>
		<button class="add-btn lvse" v-if="type==1" @click="add_addr">新增收货地址</button>
		<w-picker mode="region" :defaultVal="[12,0,11]" @confirm="onConfirm" ref="region" themeColor="#f00"></w-picker>
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
	export default {
		components: {
			wPicker
		},
		data() {
			return {
				addr_id:null,
				addr_p: '',
				toggleTab: '点击选择地区',
				type: 1,
				addressData: {
					name: '',
					mobile: '',
					// addressName: '在地图选择',
					address: '',
					area: '',
					defaule:false,
					default: 0
				}
			}
		},
		onLoad(option) {
			this.type = option.type;
			let title = '新增收货地址';
			if (option.type === 2) {
				title = '编辑收货地址'
			}
			this.manageType = option.type;
			uni.setNavigationBarTitle({
				title
			});
			if (this.type == 2) {
				//编辑需要先获取对应id
				this.addr_id = option.addr_id;
				//查会对应的地址
				let params = {
					"id": this.addr_id
				};
				let url = "/api/address/getaddressinfo";
				
				this.util.request(url, "POST", params, (res) => {
					if (res.statusCode == 200) {
						if (res.data.code == 1) {
							this.addressData.name = res.data.data.name;
							this.addressData.mobile = res.data.data.phone;
							this.addressData.area = res.data.data.detail;
							if(res.data.data.isdefault=="0"){
							this.addressData.defaule = false;
							}else{
								this.addressData.defaule = true;
							}
							this.toggleTab = res.data.data.address_name;
							this.addr_p = res.data.data.address_name;
							this.addr_id = res.data.data.address_id;
						} else {
							this.util.showWindow(res.data.msg);
							return;
						}
					} else {
						this.util.showWindow("请求错误");
						return;
					}
				});
				//把地址赋值上去

			}
		},
		methods: {
			toggleTab1() {
				this.$refs['region'].show();
			},

			onConfirm(val) {
				this.toggleTab = val.result;
				this.addr_p = '';
				for (var i = 0; i < val.checkArr.length; i++) {
					this.addr_p += val.checkArr[i] + ' ';
				}
				this.addr_p = this.addr_p.trim();
			},
			switchChange(e) {
				if (e.detail.value) {
					this.addressData.default = 1;
				} else {
					this.addressData.default = 0;
				}
			},
			modify(){
				let data = this.addressData;
				if (!data.name) {
					this.util.showWindow('请填写收货人姓名');
					return;
				}
				if (!/(^1[3|4|5|7|8][0-9]{9}$)/.test(data.mobile)) {
					this.util.showWindow('请输入正确的手机号码');
					return;
				}
				if (!data.area) {
					this.util.showWindow('请填写门牌号信息');
					return;
				}
				let params = {
					"id":this.addr_id,
					"name": this.addressData.name,
					"phone": this.addressData.mobile,
					"detail": this.addressData.area,
					"isDefault": this.addressData.defaule?1:0,
					"addressName": this.addr_p
				};
				let url = "/api/address/add";
				
				this.util.request(url, "POST", params, (res) => {
					if (res.statusCode == 200) {
						if (res.data.code == 1) {
							this.util.showWindow("地址新增成功");
							uni.navigateBack();
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
			//提交
			add_addr() {

				let data = this.addressData;
				if (!data.name) {
					this.util.showWindow('请填写收货人姓名');
					return;
				}
				if (!/(^1[3|4|5|7|8][0-9]{9}$)/.test(data.mobile)) {
					this.util.showWindow('请输入正确的手机号码');
					return;
				}
				if (!data.area) {
					this.util.showWindow('请填写门牌号信息');
					return;
				}
				let params = {
					"name": this.addressData.name,
					"phone": this.addressData.mobile,
					"detail": this.addressData.area,
					"isDefault": this.addressData.default,
					"addressName": this.addr_p
				};
				let url = "/api/address/add";

				this.util.request(url, "POST", params, (res) => {
					if (res.statusCode == 200) {
						if (res.data.code == 1) {
							this.util.showWindow("地址新增成功");
							uni.navigateBack();
						} else {
							this.util.showWindow(res.data.msg);
							return;
						}
					} else {
						this.util.showWindow("请求错误");
						return;
					}
				});



				//this.$api.prePage()获取上一页实例，可直接调用上页所有数据和方法，在App.vue定义
				// this.$api.prePage().refreshList(data, this.manageType);

				// setTimeout(() => {
				// 	uni.navigateBack()
				// }, 800)
			},
			deleteAddr(){
				let params = {
					"id": this.addr_id
				};
				let url = "/api/address/del";
				
				this.util.request(url, "POST", params, (res) => {
					if (res.statusCode == 200) {
						if (res.data.code == 1) {
							this.util.showWindow("删除成功");
							uni.navigateBack();
							
						} else {
							this.util.showWindow(res.data.msg);
							return;
						}
					} else {
						this.util.showWindow("请求错误");
						return;
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: $page-color-base;
		padding-top: 16upx;
	}

	.row {
		display: flex;
		align-items: center;
		position: relative;
		padding: 0 30upx;
		height: 110upx;
		background: #fff;
		border-bottom: 2upx solid #CCCCCC;

		.tit {
			flex-shrink: 0;
			width: 120upx;
			font-size: 30upx;
			color: $font-color-dark;
		}

		.input {
			flex: 1;
			font-size: 30upx;
			color: $font-color-dark;
		}

		.icon-shouhuodizhi {
			font-size: 36upx;
			color: $font-color-light;
		}
	}

	.default-row {
		margin-top: 16upx;

		.tit {
			flex: 1;
		}

		switch {
			transform: translateX(16upx) scale(.9);
		}
	}

	.add-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 690upx;
		height: 80upx;
		margin: 60upx auto;
		font-size: $font-lg;
		color: #fff;
		background-color: $base-color;
		border-radius: 10upx;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
	}

	.lvse {
		background-color: #1BCC8D;
	}
</style>
