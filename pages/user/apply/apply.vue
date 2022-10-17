<template>
	<view>
		<uni-forms ref="form" :model="formData" :rules="formRules" labelPosition="top">
			<uni-group>
				<uni-forms-item label="申请人:">
					<uni-easyinput v-model="formData.applicant" disabled></uni-easyinput>
				</uni-forms-item>
			</uni-group>

			<uni-group>
				<uni-forms-item label="申请时间:">
					<uni-datetime-picker type="date" v-model="formData.applyDate" disabled></uni-datetime-picker>
				</uni-forms-item>
			</uni-group>

			<uni-group>
				<uni-forms-item label="申请数量:">
					<uni-number-box min="1" max="20" v-model="formData.applyNum"></uni-number-box>
				</uni-forms-item>
			</uni-group>

			<uni-group>
				<uni-forms-item label="申请原因:">
					<uni-easyinput type="textarea" v-model="formData.applyReason"></uni-easyinput>
				</uni-forms-item>
			</uni-group>

			<button @click="submit">提交</button>
		</uni-forms>
		<view>
			<!-- 提示信息弹窗 -->
			<uni-popup ref="message" type="message">
				<uni-popup-message :type="msgType" :message="messageText" :duration="2000"></uni-popup-message>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				formData: {
					applicant: '',
					applyDate: '',
					applyNum: 1,
					applyReason: ''
				},
				msgType: '',
				messageText: ''
			}
		},
		onShow() {
			this.formData.applicant = uni.getStorageSync('phone')
			this.formData.applyDate = this.formatterDate(new Date())
		},
		methods: {
			formatterDate(date) {
				if (!date) {
					return ''
				}
				const year = date.getFullYear()
				let month = date.getMonth() + 1
				let day = date.getDate()
				if (month < 10) {
					month = '0' + month
				}
				if (day < 10) {
					day = '0' + day
				}
				const nowDate = year + '-' + month + '-' + day
				return nowDate
			},
			submit() {
				if (this.formData.applyReason === '') {
					this.msgType = 'error'
					this.messageText = '请填写申请原因！'
					this.$refs.message.open()
				} else {
					const _this = this
					uni.request({
						url: this.baseURL + '/applications',
						method: "POST",
						data: _this.formData,
						success: (res) => {
							if (res.data === true) {
								_this.msgType = 'success'
								_this.messageText = '申请成功！'
								_this.$refs.message.open()
								_this.formData.applyNum = 1
								_this.formData.applyReason = ''
							} else {
								_this.msgType = 'error'
								_this.messageText = '申请失败，请重试！'
								_this.$refs.message.open()
							}
						}
					})
				}
			}
		}
	}
</script>

<style>
	button {
		width: 600rpx;
		height: 100rpx;
		background-color: #f0f8ff;
		font-size: 120%;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}
</style>
