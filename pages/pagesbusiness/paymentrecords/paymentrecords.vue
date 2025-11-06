<template>
	<view>
		<view class="header">
			<uni-nav-bar :border="false" left-icon="left" left-text="返回" @clickLeft="backIndex" title="缴费记录"></uni-nav-bar>
			<view class="header-item">
				<view>全部</view>
				<view>
					缴费类型
					<uni-icons custom-prefix="iconfont" type="icon-xiasanjiaoxing" size="20"></uni-icons>
				</view>
			</view>
			<view class="header-item">
				<view>
					清水湾1号楼1单元2203
					<uni-icons custom-prefix="iconfont" type="icon-xialajiantou" size="20"></uni-icons>
				</view>
				<view>
					2021-09
					<uni-icons custom-prefix="iconfont" type="icon-xiasanjiaoxing" size="20"></uni-icons>
				</view>
			</view>
		</view>
		<view class="content">
			<view class="content-title">物业费账单</view>
			<view class="content-items">
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
				<view class="item">
					<p>缴费时间</p>
					<p>2021-10-10</p>
				</view>
				<view class="item">
					<p>付款方式</p>
					<p>微信付款</p>
				</view>
			</view>
		</view>
		<view class="content">
			<view class="content-title">物业费账单</view>
			<view class="content-items">
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
				<view class="item">
					<p>缴费时间</p>
					<p>2021-10-10</p>
				</view>
				<view class="item">
					<p>付款方式</p>
					<p>微信付款</p>
				</view>
			</view>
		</view>
		<view class="content">
			<view class="content-title">物业费账单</view>
			<view class="content-items">
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
				<view class="item">
					<p>缴费时间</p>
					<p>2021-10-10</p>
				</view>
				<view class="item">
					<p>付款方式</p>
					<p>微信付款</p>
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
.bar2 {
	padding: 0 40rpx;
}
.header {
	.header-item {
		display: flex;
		justify-content: space-between;
		padding: 20rpx 30rpx;
	}
	.header-item:nth-child(2) {
		view:nth-child(1) {
			color: #3e9afe;
			font-size: 28rpx;
			font-weight: 800;
		}
		background-color: #fff;
	}
}
.content {
	padding: 30rpx;
	padding-top: 0;
	background-color: #fff;
	margin: 20rpx 10rpx;
	border-radius: 15rpx;
	font-size: 28rpx;
	.content-title {
		padding: 20rpx 0rpx;
		border-bottom: 1px solid #ececec;
	}
	.content-items {
		.item {
			padding: 15rpx 0rpx;
			display: flex;
			justify-content: space-between;
		}
	}
}
</style>
