<template>
	<view>
		<button class="scan" @click="scan">扫一扫</button>
		<button class="myself" @click="myself">个人信息</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			scan() {
				uni.scanCode({
					success: function (res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
					}
				})
			},
			myself() {
				uni.navigateTo({
					url: '/pages/scanner/myself/myself'
				})
			}
		}
	}
</script>

<style>
	.scan, .myself {
		width: 600rpx;
		height: 100rpx;
		background-color: #f0f8ff;
		font-size: 120%;
		margin-top: 300rpx;
	}
</style>
