<template>
	<view class="container">
		<view class="header">
			<uni-icons type="person" size="100"></uni-icons>
			<text class="name">{{name}}</text>
			<text class="phone">{{phone}}</text>
		</view>
		<uni-section title="审批记录" type="line">
			<uni-collapse accordion>
				<uni-collapse-item v-for="approve in approveList" :key="approve.id" :title="approve.id + '----' + approve.applicantName + '----' + approve.applyDate">
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
						<uni-col>
							<view class='row'>审批人：{{approve.approver}}</view>
						</uni-col>
					</uni-row>
					<uni-row>
						<uni-col>
							<view class='row'>审批人姓名：{{approve.approverName}}</view>
						</uni-col>
					</uni-row>
					<uni-row>
						<uni-col>
							<view class='row'>审批状态：{{approve.approvalState}}</view>
						</uni-col>
					</uni-row>
					<uni-row>
						<uni-col>
							<view class='row'>审批日期：{{approve.approvalDate}}</view>
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
				url: this.baseURL + '/applications/approved/' + _this.phone + '/' + _this.current + '/10',
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
					url: this.baseURL + '/applications/approved/' + _this.phone + '/' + _this.current + '/10',
					method: "GET",
					success: (res) => {
						_this.total = res.data.total
						_this.approveList = res.data.records
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
</style>
