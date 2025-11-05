<template>
	<view>
		<uni-nav-bar left-icon="left" left-text="返回" right-icon="more-filled" title="楼长"></uni-nav-bar>
		<view class="content">
			<view class="content-chat">
				<view class="chat-headport">
					<image src="/static/img/屏幕截图 2025-11-03 153526.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="chat">
			<uni-icons custom-prefix="iconfont" type="icon-yuyin" size="28" style="font-weight: 800"></uni-icons>
			<input type="text" name="" id="" />
			<uni-icons custom-prefix="iconfont" type="icon-biaoqing" size="35" style="font-weight: 800; position: relative; top: 5rpx"></uni-icons>
			<uni-icons custom-prefix="iconfont" type="icon-gengduo" size="32"></uni-icons>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style lang="less">
page {
	background-color: #e7ebee;
}
.chat {
	background-color: #f3f4f6;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 30rpx;
	input {
		width: 450rpx;
		border-radius: 10rpx;
		background-color: #fff;
		height: 80rpx;
	}
}
</style>
