<template>
	<view>
		<button class="scan" @click="scan">扫一扫</button>
		<button class="myself" @click="myself">个人信息</button>
		<view>
			<!-- 提示窗 -->
			<uni-popup ref="alertDialog" type="dialog">
				<uni-popup-dialog :type="msgType" confirmText="确认" cancelText="关闭" :title="msgTitle" :content="message" @confirm="dialogClose"
					@close="dialogClose"></uni-popup-dialog>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: this.baseURL,
				msgType: '',
				msgTitle: '',
				message: ''
			}
		},
		methods: {
			scan() {
				const _this = this
				uni.scanCode({
					scanType: ['qrCode'],
					success: function (res) {
						uni.request({
							url: _this.url + '/tickets/useTicket/' + res.result,
							method: "PUT",
							success: (res) => {
								if(res.data === "STATE_ERROR") {
									_this.msgType = 'error'
									_this.msgTitle = '错误'
									_this.message = '饭票已失效！'
									_this.$refs.alertDialog.open()
								} else if(res.data === "DATE_ERROR") {
									_this.msgType = 'error'
									_this.msgTitle = '错误'
									_this.message = '饭票已过期！'
									_this.$refs.alertDialog.open()
								} else if (res.data === "ERROR") {
									_this.msgType = 'error'
									_this.msgTitle = '错误'
									_this.message = '扫码失败，请重试！'
									_this.$refs.alertDialog.open()
								} else {
									_this.msgType = 'success'
									_this.msgTitle = '成功'
									_this.message = '扫码成功！'
									_this.$refs.alertDialog.open()
								}
							}
						})
					}
				})
			},
			myself() {
				uni.navigateTo({
					url: '/pages/scanner/myself/myself'
				})
			},
			dialogClose() {
				this.$refs.alertDialog.close()
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
		margin-top: 100rpx;
	}
</style>
