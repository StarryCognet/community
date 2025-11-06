<template>
	<view>
		<uni-nav-bar :border="false" left-icon="left" @clickLeft="backIndex" background-color="#f3f3f3" title="收银台"></uni-nav-bar>
		<view class="header">
			<view class="money">
				<span>￥</span>
				360
				<span>.00</span>
			</view>
		</view>
		<view class="content">
			<view class="content-top">全部付款方式</view>
			<view class="content-items">
				<radio-group>
					<view class="item">
						<view>
							<uni-icons style="color: #14bb0c" custom-prefix="iconfont" type="icon-big-WeChat" size="30"></uni-icons>
							<span>微信支付</span>
						</view>
						<radio color="#f93b1b" />
					</view>
					<view class="item">
						<view>
							<uni-icons style="color: #01a9f2" custom-prefix="iconfont" type="icon-zhifubao" size="30"></uni-icons>
							<span>支付宝支付</span>
						</view>
						<radio color="#f93b1b" />
					</view>
				</radio-group>
			</view>
		</view>
		<view class="but">
			<button @click="gohome">微信支付￥360.00</button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		backIndex() {
			const pages = getCurrentPages();
			uni.navigateBack();
		},
		gohome() {
			uni.switchTab({
				url: '/pages/pages/home/home'
			});
		}
	}
};
</script>

<style lang="less">
page {
	background-color: #f3f3f3;
}
.header {
	height: 300rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	.money {
		color: #fb1c14;
		font-weight: 800;
		font-size: 50rpx;
		span {
			font-size: 35rpx;
		}
	}
}
.content {
	.content-top {
		background-color: #fff;
		padding: 35rpx;
	}
	.content-items {
		margin-top: 20rpx;
		.item {
			background-color: #fff;
			padding: 30rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			view {
				display: flex;
				align-items: center;
				width: 200rpx;
				font-size: 28rpx;
				// font-weight: 800;
				span {
					margin-left: 20rpx;
				}
			}
		}
	}
}
.but {
	display: flex;
	justify-content: center;
	button {
		border-radius: 100rpx;
		background-color: #f21119;
		color: #fff;
		position: relative;
		bottom: -150rpx;
		padding: 10rpx 200rpx;
		font-size: 25rpx;
	}
}
</style>
