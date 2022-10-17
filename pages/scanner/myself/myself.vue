<template>
	<view class="container">
		<view class="header">
			<uni-icons type="person" size="100"></uni-icons>
			<text class="name">{{name}}</text>
			<text class="phone">{{phone}}</text>
		</view>
		<view class="row" @click="toMyScans">
			<view>
				<uni-icons type="shop" size="30"></uni-icons>
			</view>
			<view>
				<text class="text">扫码记录</text>
			</view>
			<view>
				<uni-icons type="forward" size="30"></uni-icons>
			</view>
		</view>
		<view class="row" @click="toPersonalInfo">
			<view>
				<uni-icons type="gear" size="30"></uni-icons>
			</view>
			<view>
				<text class="text">个人信息</text>
			</view>
			<view>
				<uni-icons type="forward" size="30"></uni-icons>
			</view>
		</view>
		<view class="row" @click="toChangePassword">
			<view>
				<uni-icons type="eye-slash" size="30"></uni-icons>
			</view>
			<view>
				<text class="text">修改密码</text>
			</view>
			<view>
				<uni-icons type="forward" size="30"></uni-icons>
			</view>
		</view>
		<button class="quit" type="warn" @click="quit">退出登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: '',
				phone: ''
			}
		},
		onShow() {
			this.name = uni.getStorageSync('name')
			this.phone = uni.getStorageSync('phone')
		},
		methods: {
			quit() {
				uni.clearStorage()
				uni.navigateTo({
					url: '/pages/index/index'
				})
			},
			toMyScans() {
				uni.navigateTo({
					url: ''
				})
			},
			toPersonalInfo() {
				uni.navigateTo({
					url: '/pages/user/personalInfo/personalInfo'
				})
			},
			toChangePassword() {
				uni.navigateTo({
					url: '/pages/user/changePassword/changePassword'
				})
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
	
	.row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding-top: 15rpx;
		padding-bottom: 15rpx;
		border-bottom: 1rpx solid black;
	}
	
	.text {
		font-size: 120%;
		padding-left: 50rpx;
		margin-right: 400rpx;
	}
	
	.quit {
		width: 400rpx;
		height: 100rpx;
		font-size: 120%;
		margin-top: 300rpx;
	}
</style>
