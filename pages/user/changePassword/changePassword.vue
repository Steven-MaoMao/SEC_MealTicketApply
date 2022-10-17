<template>
	<view class="container">
		<view class="header">
			<uni-icons type="person" size="100"></uni-icons>
			<text class="name">{{name}}</text>
			<text class="phone">{{phone}}</text>
		</view>
		<uni-section title="修改密码" type="line">
			<uni-card>
				<input type="password" v-model="password1" placeholder="请输入密码">
				<input type="password" v-model="password2" placeholder="请再次输入密码">
				<button class="submitButton" @click="submit">确定</button>
			</uni-card>
		</uni-section>
		<view>
			<!-- 提示信息弹窗 -->
			<uni-popup ref="message" type="message">
				<uni-popup-message :type="msgType" :message="messageText" :duration="2000"></uni-popup-message>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	import md5 from '../../../lib/js/md5.js'
	export default {
		data() {
			return {
				name: '',
				phone: '',
				msgType: '',
				messageText: '',
				password1: '',
				password2: '',
				personalInfo: {
					wno: null,
					name: null,
					phone: null,
					email: null,
					company: null,
					department: null,
					role: null,
					password: null
				}
			}
		},
		onShow() {
			this.name = uni.getStorageSync('name')
			this.phone = uni.getStorageSync('phone')
			
			this.personalInfo.wno = uni.getStorageSync('wno')
			this.personalInfo.name = uni.getStorageSync('name')
			this.personalInfo.phone = uni.getStorageSync('phone')
			this.personalInfo.email = uni.getStorageSync('email')
			this.personalInfo.company = uni.getStorageSync('company')
			this.personalInfo.department = uni.getStorageSync('department')
			this.personalInfo.role = uni.getStorageSync('role')
		},
		methods: {
			submit() {
				if(this.password1 !== this.password2) {
					this.msgType = 'error'
					this.messageText = '两次输入密码不同！'
					this.$refs.message.open()
					this.password1 = ''
					this.password2 = ''
				} else if(this.password1 === '' || this.password2 === '') {
					this.msgType = 'error'
					this.messageText = '密码不能为空！'
					this.$refs.message.open()
				} else {
					this.personalInfo.password = md5(this.password1)
					const _this = this
					uni.request({
						url: this.baseURL + '/users/wno/' + _this.personalInfo.wno,
						method: "PUT",
						data: _this.personalInfo,
						success: (res) => {
							if(res.data === true) {
								_this.msgType = 'success'
								_this.messageText = '修改成功！'
								_this.$refs.message.open()
								uni.clearStorage()
								uni.navigateTo({
									url: '/pages/index/index'
								})
							} else {
								_this.msgType = 'error'
								_this.messageText = '修改失败！'
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
	.header {
		height: 400rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #f0f8ff;
		border-bottom: 1rpx solid black;
	}
	
	.name, .phone {
		font-size: 100%;
	}
	
	.name {
		margin-top: 30rpx;
		margin-bottom: 20rpx;
	}
	
	input {
		margin-top: 20rpx;
		margin-bottom: 20rpx;
		height: 100rpx;
		border: 1rpx solid black;
		border-radius: 10rpx;
		padding-left: 10rpx;
	}
	
	.submitButton {
		margin-top: 100rpx;
		background-color: #f0f8ff;
	}
</style>
