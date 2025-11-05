<template>
	<view>
		<uni-nav-bar :border="false" left-icon="left" left-text="返回" title="忘记密码"></uni-nav-bar>
		<view class="content">
			<view class="content-top lu">
				<view class="item">
					<uni-icons color="#d99585" custom-prefix="iconfont" type="icon-xiugaimima" size="20"></uni-icons>
					<input type="text" placeholder="请输入手机号" />
					<view></view>
				</view>
				<view class="item">
					<uni-icons color="#d99585" custom-prefix="iconfont" type="icon-xiugaimima" size="20"></uni-icons>
					<input type="password" placeholder="请输入6-12位的新密码" />
					<!-- <span>获取验证码</span> -->
				</view>
			</view>
			<view class="content-but lu">
				<view class="item">
					<uni-icons color="#60d687" custom-prefix="iconfont" type="icon-xiugaimima" size="20"></uni-icons>
					<input type="password" placeholder="再次输入密码" />
					<!-- <uni-icons custom-prefix="iconfont" type="icon-yincang" size="30"></uni-icons> -->
				</view>
			</view>
		</view>
		<button>提交</button>
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
	background-color: #f6f4f5;
}
.content {
	.lu {
		.item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 30rpx 20rpx;
			border-bottom: 1px solid #f9f9f9;
			background-color: #fff;
			input {
				width: 660rpx;
			}
			span {
				width: 150rpx;
				font-size: 25rpx;
				color: #3588ee;
			}
		}
		.item:nth-child(3) {
			padding: 40rpx 20rpx;
		}
	}
}
button {
	background-color: #1f8fff;
	color: #fff;
	border-radius: 50rpx;
	margin: 80rpx 150rpx;
	font-size: 27rpx;
}
</style>
