<template>
	<view>
		<uni-nav-bar :border="false" left-icon="left" left-text="返回" @clickLeft="backIndex" title="我要帮助"></uni-nav-bar>
		<view class="top">社区管理员</view>
		<view class="item">
			<view class="item_left">
				<view class="tp">
					<image src="/static/img/usertx-1.png" mode=""></image>
				</view>
				<view class="wz">
					<p style="font-weight: bold; line-height: 50rpx; font-size: 30rpx">赖致刚</p>
					<p style="color: #676767; font-size: 27rpx">[ 楼长 ]</p>
				</view>
			</view>
			<view class="item_right">
				<uni-icons custom-prefix="iconfont" type="icon-dianhua" size="20"></uni-icons>
			</view>
		</view>

		<view class="item">
			<view class="item_left">
				<view class="tp">
					<image src="/static/img/usertx-3.png" mode=""></image>
				</view>
				<view class="wz">
					<p style="font-weight: bold; line-height: 50rpx; font-size: 30rpx">梁小丽</p>
					<p style="color: #676767; font-size: 27rpx">[ 在职党员 ]</p>
				</view>
			</view>
			<view class="item_right">
				<uni-icons custom-prefix="iconfont" type="icon-dianhua" size="20"></uni-icons>
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
	background-color: #e8ecef;
}
.top {
	width: 100%;
	height: 70rpx;
	line-height: 70rpx;
	color: #666666;
	font-size: 15rpx;
	text-indent: 3em;
}
.item {
	width: 100%;
	// height: 200rpx;
	padding: 50rpx 0;
	background-color: #fff;
	display: flex;
	justify-content: space-between;
	border-bottom: 1rpx solid #e8ecef;
	.item_left {
		width: 50%;
		height: 50%;
		margin-left: 10rpx;
		display: flex;
		align-items: center;
		.tp {
			width: 115rpx;
			height: 100rpx;
			image {
				width: 100rpx;
				height: 90rpx;
				border-radius: 50%;
			}
		}
		.wz {
			width: 150rpx;
			height: 100rpx;

			// background-color: fuchsia;
		}
	}
	.item_right {
		// background-color: yellow;
		margin-right: 30rpx;
	}
}
</style>
