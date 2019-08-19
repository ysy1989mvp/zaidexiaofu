<template>
	<view class="container">
		<view class="content">
			<view class="red">
				请选择反馈问题的类型
			</view>
			<view class="part1">
				<view class="fw">
					<view class="ee">
						<view class="c1">性能体验</view>
						<view class="c3">白屏、卡顿、闪退/图片加载不出</view>
						<view class="c2">〉</view>
					</view>
				</view>
				<view class="fw">
					<view class="ee">
						<view class="c1">功能异常</view>
						<view class="c3">现有功能无法正常使用</view>
						<view class="c2">〉</view>
					</view>
				</view>
				<view class="fw">
					<view class="ee">
						<view class="c1">产品建议</view>
						<view class="c2">〉</view>
					</view>
				</view>
				<view class="fw">
					<view class="ee">
						<view class="c1">其他反馈</view>
						<view class="c2">〉</view>
					</view>
				</view>
			</view>
			<view class="red">
				意见反馈
			</view>
			<view class="yijian">
				<textarea placeholder="您的意见……"></textarea>
			</view>
			<view class="images">
				<uploadimgs></uploadimgs>
			</view>
		</view>
	</view>
</template>

<script>
	import uploadimgs from "@/components/upload-image/upload-imgs.vue"
	export default {
		components: {
			uploadimgs
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		background-color: #B2B2B2;
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
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

	.red {
		font-size: 28upx;
		color: #6E0012;
		width: 90%;
		padding: 20upx 40upx;
		background-color: #EEEEEE;
	}

	.c1 {
		width: 20%;
	}

	.c3 {
		width: 70%;
		color: #8F8F94;
	}

	.yijian {
		width: 100%;
		background-color: #FFFFFF;
	}

	textarea {
		background-color: #FFFFFF;
		width: 90%;
		margin: 6upx auto;
		border: 2upx solid #EEEEEE;
	}
	.images{
		background-color: #FFFFFF;
		padding: 0upx 5vw;
	}
</style>
