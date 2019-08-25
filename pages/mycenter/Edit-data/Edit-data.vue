<template>
	<view class="container">
		<view class="content">
			<view class="TX">
				<image class="TXA" :class="{hidde1:showbool}" v-if="boolean==0||data.avatar!=null" :src="data.avatar"></image>
				<view class="images" v-if="boolean==1||data.avatar==null">
					<uploadimgs></uploadimgs>
				</view>
				<view class="zl" @click="genghuangtouxiang">
					<view class="name" v-if="data.avatar!=null">更换头像</view>
					<view class="name" v-if="data.avatar==null">上传头像</view>
				</view>

			</view>
			<view class="part1">
				<view class="fw">
					<view class="ee">
						<view class="c1">学校</view>
						<view class="c3">
							<xfl-select :list="xuexiaodata" :clearable="false" :showItemNum="50" :listShow="false" :isCanInput="true"
							 :style_Container="'height: 34px; font-size: 16px;'" :placeholder="'点击选择或输入有效学校'" :initValue="data.school_name"
							 :selectHideType="'hideAll'" @change="xuexiaochange">
							</xfl-select>
						</view>
						<!-- <view class="c2">〉</view> -->
						<view class="c2"></view>
					</view>
				</view>
				<view class="fw">
					<view class="ee">
						<view class="c1">电话号码</view>
						<view class="c3" style="width: 70%;">
							<input type="text" value="" v-model="data.mobile" />
						</view>

						<!-- <view class="c2">〉</view> -->
						<view class="c2"></view>
					</view>
				</view>
				<view class="fw">
					<view class="ee">
						<view class="c1">性别</view>
						<view class="c3">
							<xfl-select :list="xingbiedata" :clearable="false" :showItemNum="50" :listShow="false" :isCanInput="false"
							 :style_Container="'height: 34px; font-size: 16px;'" :placeholder="'点击选择性别'" :initValue="xingbie"
							 :selectHideType="'hideAll'" @change="xingbiechange">
							</xfl-select>
						</view>
						<!-- <view class="c2">〉</view> -->
						<view class="c2"></view>
					</view>
				</view>
			</view>
			<view class="last">
				<view class="part2">
					注意：学校是所在学校的称谓，需和学校名字保持一致，能更有效的核对学校地址；防止地址信息错误，填写正确的性别还能更好的挑选满意的商品。
				</view>
				<view class="btn" @click="modify">保存</view>
			</view>
		</view>
	</view>
</template>

<script>
	import xflSelect from '@/components/xfl-select/xfl-select.vue';
	import uploadimgs from "@/components/upload-image/upload-imgs.vue"
	export default {
		components: {
			uploadimgs,
			xflSelect
		},
		data() {
			return {
				showbool:false,
				boolean: 0,
				data: null,
				xuexiaodata: null,
				school_no: null,
				xingbie_id: null,//0为男，1为女
				xingbie:'',
				xingbiedata: [{
					id: 0,
					value: '男'
				}, {
					id: 1,
					value: '女'
				}]
			}
		},
		onLoad() {
			let params = {};
			let url = "/api/school";

			this.util.request(url, "POST", params, (res) => {
				if (res.statusCode == 200) {
					if (res.data.code == 1) {
						this.xuexiaodata = res.data.data;

					} else {
						this.util.showWindow(res.data.msg);
					}
				} else {
					this.util.showWindow("请求错误");
				}
			});
			let url1 = "/api/user";
			this.util.request(url1, "POST", params, (res) => {
				console.log(JSON.stringify(res));
				if (res.statusCode == 200) {
					if (res.data.code == 1) {
						this.data = res.data.data;
						this.school_no = this.data.school_id;
						this.util.uploadImgas[0] = this.data.avatar;
						this.xingbie_id = this.data.gender;
						if(this.xingbie_id==0){
							this.xingbie = '男';
						}else{
							this.xingbie = '女';
						}
					} else {
						this.util.showWindow(res.data.msg);
					}
				} else {
					this.util.showWindow("请求错误");
				}
			});

		},
		methods: {
			genghuangtouxiang() {
				this.boolean = 1;
				// this.data.avatar = ;
				this.showbool = true;
			},
			xuexiaochange({
				newVal,
				oldVal,
				index,
				orignItem
			}) {
				console.log("-------------"+JSON.stringify(orignItem));
				this.school_no = orignItem.id;
			},
			xingbiechange({
				newVal,
				oldVal,
				index,
				orignItem
			}) {
				this.xingbie_id = orignItem.id;
				this.xingbie = orignItem.value;
			},
			modify() {
				let params = {
					"avatar": this.util.uploadImgas[0],//头像
					"username": this.data.mobile,//电话
					"gender": this.xingbie_id,//性别
					"school_no":this.school_no//学校id
				};
				let url1 = "/api/user/profile";
				this.util.request(url1, "POST", params, (res) => {
					console.log(JSON.stringify(res));
					if (res.statusCode == 200) {
						if (res.data.code == 1) {
							uni.navigateTo({
								url:"./Edit-data"
							})
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
	.TXA {
		height: 120upx;
		width: 120upx;
		border-radius: 70upx;
		/* padding-top: 25upx; */
		/* padding-top: 40upx; */
	}

	.TX {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		/* height: 300upx; */
		font-size: 28upx;
		padding-top: 20upx;
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
		margin-top: 20upx;
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
		width: 80%;
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

	.last {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 350upx;
	}

	.images {
		width: 120upx;
	}
	.hidde1{
		display: none;
	}
</style>
