<template>
	<view>
		<view class="container">
			<uqrcode ref="uqrcode" canvas-id="qrcode" :value="ticketId" size="350" auto></uqrcode>
			<button @click="selectTicket">选择饭票</button>
		</view>
		<uni-drawer ref="drawer" width="250">
			<scroll-view scroll-y="true" style="height: 100%;">
				<radio-group @change="radioChange">
					<label v-for="(ticket) in tickets" :key="ticket.id">
						<uni-row>
							<uni-col :span="4">
								<radio :value="ticket.id" style="transform:scale(1.2)" :disabled="ticket.state==='已使用'" />
							</uni-col>
							<uni-col :span="20">
								<view>
									id:{{ticket.id}}{{'\t'}}申请id:{{ticket.orderId}}
								</view>
								<view style="margin-top: 10rpx;">
									状态:{{ticket.state}}
								</view>
								<view style="margin-top: 10rpx;">
									申请:{{ticket.appearDate}}
								</view>
								<view style="margin-top: 10rpx;">
									使用:{{ticket.useDate}}
								</view>
								<view style="margin-top: 10rpx;">
									截止:{{ticket.expiredDate}}
								</view>
							</uni-col>
						</uni-row>
					</label>
				</radio-group>
				<view class="pageSelecterContainer">
					<uni-pagination @change="pageChange" :total="total" :current="current" />
				</view>
			</scroll-view>
		</uni-drawer>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: '',
				phone: '',
				tickets: [],
				current: 1,
				total: 0,
				ticketId: -1
			}
		},
		onShow() {
			this.name = uni.getStorageSync('name')
			this.phone = uni.getStorageSync('phone')
			
			const _this = this
			uni.request({
				url: this.baseURL + '/tickets/getTicket/' + _this.phone + '/' + _this.current + '/10',
				method: "GET",
				success: (res) => {
					_this.total = res.data.total
					_this.tickets = res.data.records
					_this.ticketId = _this.tickets[0].id
					for(const ticket of _this.tickets) {
						if(ticket.useDate === null) {
							ticket.useDate = '无'
						}
					}
				}
			})
		},
		methods: {
			selectTicket() {
				this.$refs.drawer.open()
			},
			pageChange(e) {
				this.current = e.current
				const _this = this
				uni.request({
					url: this.baseURL + '/tickets/getTicket/' + _this.phone + '/' + _this.current + '/10',
					method: "GET",
					success: (res) => {
						_this.total = res.data.total
						_this.tickets = res.data.records
						for(const ticket of _this.tickets) {
							if(ticket.useDate === null) {
								ticket.useDate = '无'
							}
						}
					}
				})
			},
			radioChange(e) {
				this.ticketId = e.detail.value
			}
		}
	}
</script>

<style>
	.container {
		height: 1200rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}
	
	button {
		width: 600rpx;
		height: 100rpx;
		background-color: #f0f8ff;
		font-size: 120%;
	}
	
	.uni-row {
		padding: 20rpx;
	}

	.pageSelecterContainer {
		width: 100%;
		height: 80rpx;
	}
</style>
