<template>
	<view class="container">
		<view class="header">
			<uni-icons type="person" size="100"></uni-icons>
			<text class="name">{{name}}</text>
			<text class="phone">{{phone}}</text>
		</view>
		<view class="row" @click="toMyApplies">
			<view>
				<uni-icons type="shop" size="30"></uni-icons>
			</view>
			<view>
				<text class="text">申请记录</text>
			</view>
			<view>
				<uni-icons type="forward" size="30"></uni-icons>
			</view>
		</view>
		<view class="row" :style="show" @click="toApprove">
			<view>
				<uni-icons type="compose" size="30"></uni-icons>
			</view>
			<view>
				<text class="text">待审批</text>
			</view>
			<view>
				<uni-icons type="forward" size="30"></uni-icons>
			</view>
		</view>
		<view class="row" :style="show" @click="toMyApproves">
			<view>
				<uni-icons type="auth" size="30"></uni-icons>
			</view>
			<view>
				<text class="text">审批记录</text>
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
				phone: '',
				show: ''
			}
		},
		onShow() {
			this.name = uni.getStorageSync('name')
			this.phone = uni.getStorageSync('phone')
			if(uni.getStorageSync('role') !== 'manager') {
				this.show = 'display: none;'
			} else {
				this.show = ''
			}
		},
		methods: {
			quit() {
				uni.clearStorage()
				uni.navigateTo({
					url: '/pages/index/index'
				})
			},
			toMyApplies() {
				uni.navigateTo({
					url: '/pages/user/myApplies/myApplies'
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
			},
			toApprove() {
				uni.navigateTo({
					url: '/pages/user/approve/approve'
				})
			},
			toMyApproves() {
				uni.navigateTo({
					url: '/pages/user/myApproves/myApproves'
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
