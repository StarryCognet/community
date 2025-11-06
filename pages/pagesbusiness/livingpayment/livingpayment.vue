<template>
	<view class="page">
		<uni-nav-bar :border="false" left-icon="left" left-text="返回" title="生活缴费" right-text="缴费记录" @clickLeft="backIndex"></uni-nav-bar>
		<view class="combobox">
			清水湾1号楼1单元2203
			<uni-icons custom-prefix="iconfont" type="icon-xialajiantou" size="18"></uni-icons>
		</view>
		<view class="jiaofei">
			<p>应缴费:360.00元</p>
			<button>缴费</button>
		</view>
		<view class="content">
			<view class="title">物业费账单</view>
			<view class="items">
				<view class="item">
					<p>房号</p>
					<p>1201</p>
				</view>
				<view class="item">
					<p>账单</p>
					<p>2021-8-1 至 2021-10-1</p>
				</view>
				<view class="item">
					<p>账单金额</p>
					<p>￥360.00元</p>
				</view>
			</view>
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
		}
	}
};
</script>

<style lang="less">
page {
	background-color: #f0f0f0;
}
.page {
	padding: 10rpx;
	.combobox {
		padding: 30rpx 10rpx;
	}
	.jiaofei {
		height: 330rpx;
		background: linear-gradient(to right, #0067fd, #44d7fa);
		border-radius: 20rpx;
		margin-bottom: 20rpx;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		p {
			color: #fff;
			font-size: 40rpx;
			margin: 50rpx;
		}
		button {
			padding: 0rpx 100rpx;
			// height: 80rpx;
			color: #23aaf1;
			border-radius: 50rpx;
		}
	}
	.content {
		// height: 330rpx;
		background-color: #ffffff;
		border-radius: 20rpx;
		padding: 20rpx;
		font-size: 28rpx;
		.title {
			padding: 10rpx 0;
			border-bottom: 1px solid #dedede;
		}
		.items {
			.item {
				padding: 20rpx 0;
				display: flex;
				justify-content: space-between;
			}
		}
	}
}
</style>
