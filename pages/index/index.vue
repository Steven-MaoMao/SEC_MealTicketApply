<template>
	<view class="container">
		<text class="title">用户登录</text>
		<input v-model="phone" type="number" placeholder="请输入手机号">
		<input v-model="password" type="password" placeholder="请输入密码">
		<button class="loginButton" @click="login()">登录</button>
		<view>
			<!-- 提示信息弹窗 -->
			<uni-popup ref="message" type="message">
				<uni-popup-message :type="msgType" :message="messageText" :duration="2000"></uni-popup-message>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	import md5 from '../../lib/js/md5.js'
	export default {
		data() {
			return {
				phone: '',
				password: '',
				msgType: '',
				messageText: ''
			}
		},
		methods: {
			// 用户登录
			login() {
				const _this = this
				uni.request({
					url: this.baseURL + "/login",
					method: "POST",
					data: {
						phone: _this.phone,
						password: md5(_this.password)
					},
					success: (res) => {
						if (res.data === 'PHONE_ERROR') {
							_this.msgType = 'error'
							_this.messageText = '账号错误！'
							_this.$refs.message.open()
							_this.phone = ''
							_this.password = ''
						} else if (res.data === 'PASSWORD_ERROR') {
							_this.msgType = 'error'
							_this.messageText = '密码错误！'
							_this.$refs.message.open()
							_this.password = ''
						} else {
							_this.msgType = 'success'
							_this.messageText = '登录成功！'
							_this.$refs.message.open()
							uni.request({
								url: this.baseURL + '/users/phone/' + _this.phone,
								method: 'GET',
								success: (res) => {
									// 登录成功后将用户信息存入storage中
									uni.setStorageSync('wno', res.data.wno),
									uni.setStorageSync('name', res.data.name),
									uni.setStorageSync('phone', res.data.phone),
									uni.setStorageSync('email', res.data.email),
									uni.setStorageSync('company', res.data.company),
									uni.setStorageSync('department', res.data.department),
									uni.setStorageSync('role', res.data.role)
									
									// 根据用户身份的不同跳转到不同的页面
									if (uni.getStorageSync('role') === 'scanner') {
										uni.redirectTo({
											url: '/pages/scanner/scan/scan'
										})
									} else {
										uni.switchTab({
											url: '/pages/user/QRcode/QRcode'
										})
									}
								}
							})
						}
					}
				})
			}
		}
	}
</script>

<style>
	.container {
		height: 1200rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.title {
		font-size: 200%;
		width: 600rpx;
		margin-bottom: 150rpx;
	}

	input {
		width: 600rpx;
		height: 100rpx;
		margin-bottom: 50rpx;
		border: 1rpx solid black;
		border-radius: 10rpx;
		padding-left: 10rpx;
	}

	.loginButton {
		width: 600rpx;
		height: 100rpx;
		background-color: #f0f8ff;
		font-size: 120%;
		margin-top: 50rpx;
	}
</style>
