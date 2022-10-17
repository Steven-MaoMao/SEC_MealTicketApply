<template>
	<view class="container">
		<view class="header">
			<uni-icons type="person" size="100"></uni-icons>
			<text class="name">{{name}}</text>
			<text class="phone">{{phone}}</text>
		</view>
		<uni-section title="待审批" type="line">
			<uni-collapse accordion>
				<uni-collapse-item v-for="approve in approveList" :key="approve.id" :title="approve.id + '----' + approve.applicant + '----' + approve.applyDate">
					<uni-row>
						<uni-col>
							<view class='row'>编号：{{approve.id}}</view>
						</uni-col>
					</uni-row>
					<uni-row>
						<uni-col>
							<view class='row'>申请人：{{approve.applicant}}</view>
						</uni-col>
					</uni-row>
					<uni-row>
						<uni-col>
							<view class='row'>申请人姓名：{{approve.applicantName}}</view>
						</uni-col>
					</uni-row>
					<uni-row>
						<uni-col>
							<view class='row'>申请日期：{{approve.applyDate}}</view>
						</uni-col>
					</uni-row>
					<uni-row>
						<uni-col>
							<view class='row'>申请数量：{{approve.applyNum}}</view>
						</uni-col>
					</uni-row>
					<uni-row>
						<uni-col>
							<view class='row'>申请原因：{{approve.applyReason}}</view>
						</uni-col>
					</uni-row>
					<uni-row>
						<uni-col :span="12">
							<button class="button" @click="pass(approve)" type="primary">通过</button>
						</uni-col>
						<uni-col :span="12">
							<button class="button" @click="fail(approve)" type="warn">不通过</button>
						</uni-col>
					</uni-row>
				</uni-collapse-item>
			</uni-collapse>
		</uni-section>
		<view class="pageSelecterContainer">
			<uni-pagination @change="pageChange" :total="total" :current="current" />
		</view>
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
				name: '',
				phone: '',
				approveList: [],
				current: 1,
				total: 0,
				msgType: '',
				messageText: '',
			}
		},
		onShow() {
			this.name = uni.getStorageSync('name')
			this.phone = uni.getStorageSync('phone')
			
			const _this = this
			uni.request({
				url: this.baseURL + '/applications/toApprove/' + _this.phone + '/' + _this.current + '/10',
				method: "GET",
				success: (res) => {
					_this.total = res.data.total
					_this.approveList = res.data.records
				}
			})
		},
		methods: {
			pageChange(e) {
				this.current = e.current
				const _this = this
				uni.request({
					url: this.baseURL + '/applications/toApprove/' + _this.phone + '/' + _this.current + '/10',
					method: "GET",
					success: (res) => {
						_this.total = res.data.total
						_this.approveList = res.data.records
					}
				})
			},
			formatterDate (date) {
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
			pass(approve) {
				approve.approver = this.phone
				approve.approvalState = '通过'
				approve.approvalDate = this.formatterDate(new Date())
				const _this = this
				uni.request({
					url: this.baseURL + '/approve/pass',
					method: "PUT",
					data: approve,
					success: (res) => {
						if(res.data===true) {
							_this.msgType = 'success'
							_this.messageText = '审批成功！'
							_this.$refs.message.open()
							uni.redirectTo({
								url: '/pages/user/approve/approve'
							})
						} else {
							_this.msgType = 'error'
							_this.messageText = '审批失败！'
							_this.$refs.message.open()
						}
					}
				})
			},
			fail(approve) {
				approve.approver = this.phone
				approve.approvalState = '不通过'
				approve.approvalDate = this.formatterDate(new Date())
				const _this = this
				uni.request({
					url: this.baseURL + '/approve/pass',
					method: "PUT",
					data: approve,
					success: (res) => {
						if(res.data===true) {
							_this.msgType = 'success'
							_this.messageText = '审批成功！'
							_this.$refs.message.open()
							uni.redirectTo({
								url: '/pages/user/approve/approve'
							})
						} else {
							_this.msgType = 'error'
							_this.messageText = '审批失败！'
							_this.$refs.message.open()
						}
					}
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
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		margin-left: 40rpx;
	}
	
	.pageSelecterContainer {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background-color: white;
	}
	
	.uni-pagination {
		height: 100rpx;
		width: 500rpx;
	}
	
	.button {
		margin: 20rpx;
	}
</style>
