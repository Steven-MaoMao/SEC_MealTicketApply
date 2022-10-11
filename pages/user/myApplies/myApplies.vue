<template>
	<view class="container">
		<view class="header">
			<uni-icons type="person" size="100"></uni-icons>
			<text class="name">{{name}}</text>
			<text class="phone">{{phone}}</text>
		</view>
		<uni-section title="申请记录" type="line">
			<uni-collapse accordion>
				<uni-collapse-item v-for="apply in applyList" :key="apply.id" :title="apply.id + '----' + apply.applyDate + '----' + apply.approvalState">
					<uni-row>
						<uni-col>
							<view class='row'>编号：{{apply.id}}</view>
						</uni-col>
					</uni-row>
					<uni-row>
						<uni-col>
							<view class='row'>申请人：{{apply.applicant}}</view>
						</uni-col>
					</uni-row>
					<uni-row>
						<uni-col>
							<view class='row'>申请人姓名：{{apply.applicantName}}</view>
						</uni-col>
					</uni-row>
					<uni-row>
						<uni-col>
							<view class='row'>申请日期：{{apply.applyDate}}</view>
						</uni-col>
					</uni-row>
					<uni-row>
						<uni-col>
							<view class='row'>申请数量：{{apply.applyNum}}</view>
						</uni-col>
					</uni-row>
					<uni-row>
						<uni-col>
							<view class='row'>申请原因：{{apply.applyReason}}</view>
						</uni-col>
					</uni-row>
					<uni-row>
						<uni-col>
							<view class='row'>审批人：{{apply.approver}}</view>
						</uni-col>
					</uni-row>
					<uni-row>
						<uni-col>
							<view class='row'>审批人姓名：{{apply.approverName}}</view>
						</uni-col>
					</uni-row>
					<uni-row>
						<uni-col>
							<view class='row'>审批状态：{{apply.approvalState}}</view>
						</uni-col>
					</uni-row>
					<uni-row>
						<uni-col>
							<view class='row'>审批日期：{{apply.approvalDate}}</view>
						</uni-col>
					</uni-row>
					<uni-row>
						<uni-col :span="12">
							<button class="button" @click="showUpdateApply(apply)" type="primary" :disabled="apply.approvalState!=='待审批'">修改</button>
						</uni-col>
						<uni-col :span="12">
							<button class="button" @click="deleteApply(apply.id)" type="warn" :disabled="apply.approvalState!=='待审批'">删除</button>
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
		<view>
			<!-- 输入框示例 -->
			<uni-popup ref="inputDialog" type="dialog">
				<view class="updateApply">
					<text style="font-size: 150%;">修改申请</text>
					<uni-row>
						<uni-col :span="6">
							<text>id:</text>
						</uni-col>
						<uni-col :span="18">
							<uni-easyinput v-model="updateApply.id" disabled></uni-easyinput>
						</uni-col>
					</uni-row>
					<uni-row>
						<uni-col :span="6">
							<text>申请人:</text>
						</uni-col>
						<uni-col :span="18">
							<uni-easyinput v-model="updateApply.applicant" disabled></uni-easyinput>
						</uni-col>
					</uni-row>
					<uni-row>
						<uni-col :span="6">
							<text>申请日期:</text>
						</uni-col>
						<uni-col :span="18">
							<uni-datetime-picker type="date" v-model="updateApply.applyDate"></uni-datetime-picker>
						</uni-col>
					</uni-row>
					<uni-row>
						<uni-col :span="6">
							<text>申请数量:</text>
						</uni-col>
						<uni-col :span="18">
							<uni-number-box min="1" max="20" v-model="updateApply.applyNum"></uni-number-box>
						</uni-col>
					</uni-row>
					<uni-row>
						<uni-col :span="6">
							<text>申请原因:</text>
						</uni-col>
						<uni-col :span="18">
							<uni-easyinput v-model="updateApply.applyReason" type="textarea"></uni-easyinput>
						</uni-col>
					</uni-row>
					<uni-row>
						<uni-col :span="12">
							<view class="dialogButton" @click="updateSubmit" style="background-color: green">确定</view>
						</uni-col>
						<uni-col :span="12">
							<view class="dialogButton" @click="updateCancel" style="background-color: red;">取消</view>
						</uni-col>
					</uni-row>
				</view>
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
				applyList: [],
				current: 1,
				total: 0,
				msgType: '',
				messageText: '',
				updateApply: {
					id: -1,
					applicant: '',
					applyDate: '',
					applyNum: 1,
					applyReason: '',
					approver: '',
					approvalState: '',
					approvalDate: ''
				}
			}
		},
		onShow() {
			this.name = uni.getStorageSync('name')
			this.phone = uni.getStorageSync('phone')
			
			const _this = this
			uni.request({
				url: this.baseURL + '/applications/pageByPhone/' + _this.phone + '/' + _this.current + '/10',
				method: "GET",
				success: (res) => {
					_this.total = res.data.total
					_this.applyList = res.data.records
					for(const apply of _this.applyList) {
						if(apply.approver === null) {
							apply.approver = '无'
							apply.approverName = '无'
						}
						if(apply.approvalDate === null) {
							apply.approvalDate = '无'
						}
					}
				}
			})
		},
		methods: {
			pageChange(e) {
				this.current = e.current
				const _this = this
				uni.request({
					url: this.baseURL + '/applications/pageByPhone/' + _this.phone + '/' + _this.current + '/10',
					method: "GET",
					success: (res) => {
						_this.total = res.data.total
						_this.applyList = res.data.records
						for(const apply of _this.applyList) {
							if(apply.approver === null) {
								apply.approver = '无'
								apply.approverName = '无'
							}
							if(apply.approvalDate === null) {
								apply.approvalDate = '无'
							}
						}
					}
				})
			},
			deleteApply(id) {
				const _this = this
				uni.request({
					url: this.baseURL + '/applications/' + id,
					method: "DELETE",
					success: (res) => {
						if(res.data===true) {
							_this.msgType = 'success'
							_this.messageText = '删除成功！'
							_this.$refs.message.open()
							uni.redirectTo({
								url: '/pages/user/myApplies/myApplies'
							})
						} else {
							_this.msgType = 'error'
							_this.messageText = '删除失败！'
							_this.$refs.message.open()
						}
					}
				})
			},
			showUpdateApply(apply) {
				this.updateApply.id = apply.id
				this.updateApply.applicant = apply.applicant
				this.updateApply.applyDate = apply.applyDate
				this.updateApply.applyNum = apply.applyNum
				this.updateApply.applyReason = apply.applyReason
				this.updateApply.approver = apply.approver
				this.updateApply.approvalState = apply.approvalState
				this.updateApply.approvalDate = apply.approvalDate
				
				this.$refs.inputDialog.open()
			},
			updateSubmit() {
				if(this.updateApply.applyDate === '' || this.updateApply.applyReason === '') {
					this.msgType = 'error'
					this.messageText = '日期或原因不能为空！'
					this.$refs.message.open()
				} else {
					const _this = this
					if(this.updateApply.approver === '无') {
						this.updateApply.approver = null
					}
					if(this.updateApply.approvalDate === '无') {
						this.updateApply.approvalDate = null
					}
					uni.request({
						url: this.baseURL + '/applications',
						method:	"PUT",
						data: _this.updateApply,
						success: (res) => {
							if(res.data===true) {
								_this.msgType = 'success'
								_this.messageText = '更新成功！'
								_this.$refs.message.open()
								_this.$refs.inputDialog.close()
								uni.redirectTo({
									url: '/pages/user/myApplies/myApplies'
								})
							} else {
								_this.msgType = 'error'
								_this.messageText = '更新失败！'
								_this.$refs.message.open()
							}
						}
					})
				}
			},
			updateCancel() {
				this.$refs.inputDialog.close()
			}
		},
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
	
	.updateApply {
		width: 600rpx;
		height: 1000rpx;
		background-color: white;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		border-radius: 20rpx;
		padding: 20rpx;
	}
	
	.dialogButton {
		margin: 20rpx;
		padding: 20rpx;
		border: 1px solid black;
		border-radius: 10rpx;
		color: white;
	}
</style>
