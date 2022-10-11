<template>
	<view class="container">
		<view class="header">
			<uni-icons type="person" size="100"></uni-icons>
			<text class="name">{{name}}</text>
			<text class="phone">{{phone}}</text>
		</view>
		<uni-section title="个人信息" type="line">
			<uni-card>
				<uni-row>
					<uni-col>
						<view class="row">工号：{{personalInfo.wno}}</view>
					</uni-col>
				</uni-row>
				<uni-row>
					<uni-col>
						<view class="row">姓名：{{personalInfo.name}}</view>
					</uni-col>
				</uni-row>
				<uni-row>
					<uni-col>
						<view class="row">手机：{{personalInfo.phone}}</view>
					</uni-col>
				</uni-row>
				<uni-row>
					<uni-col>
						<view class="row">邮箱：{{personalInfo.email}}</view>
					</uni-col>
				</uni-row>
				<uni-row>
					<uni-col>
						<view class="row">公司：{{personalInfo.company}}</view>
					</uni-col>
				</uni-row>
				<uni-row>
					<uni-col>
						<view class="row">部门：{{personalInfo.department}}</view>
					</uni-col>
				</uni-row>
				<uni-row>
					<uni-col>
						<view class="row">角色：{{personalInfo.role}}</view>
					</uni-col>
				</uni-row>
			</uni-card>
		</uni-section>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: '',
				phone: '',
				personalInfo: {
					wno: null,
					name: null,
					phone: null,
					email: null,
					company: null,
					department: null,
					role: null
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
		margin: 20rpx;
		font-size: 120%;
	}
</style>
