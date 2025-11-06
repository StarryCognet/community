<template>
	<view>
<<<<<<< HEAD
		<uni-nav-bar :border="false" left-icon="left" left-text="返回" title="问题反馈" @clickLeft="backIndex"></uni-nav-bar>
=======
		<uni-nav-bar :border="false" left-icon="left" left-text="返回" @clickLeft="backIndex" title="问题反馈"></uni-nav-bar>
>>>>>>> wang
		<view class="content">
			<view class="item">
				<p>类型</p>
				<view>
					请选择保修类型
					<uni-icons type="right" size="15"></uni-icons>
				</view>
			</view>
			<view class="item">
				<p>报修地址</p>
				<view>
					清水湾2号楼1单元2103
					<uni-icons type="right" size="15"></uni-icons>
				</view>
			</view>
			<view class="item">
				<p>联系电话</p>
				<view>
					13522568755
					<uni-icons type="right" size="15"></uni-icons>
				</view>
			</view>
			<view class="box-text">
				<textarea class="text" cols="10" rows="10" placeholder="请输入报修问题，以便维修人员尽快为您解决"></textarea>
			</view>
			<view class="picture">
				<view class="itemm">
					<uni-icons style="color: #898989" type="camera" size="35"></uni-icons>
				</view>
				<view class="itemm">
					<view class="chuo">
						<uni-icons style="color: #fff" type="closeempty" size="14"></uni-icons>
					</view>
				</view>
				<view class="itemm">
					<view class="chuo">
						<uni-icons style="color: #fff" type="closeempty" size="14"></uni-icons>
					</view>
				</view>
				<view class="itemm">
					<view class="chuo">
						<uni-icons style="color: #fff" type="closeempty" size="14"></uni-icons>
					</view>
				</view>
			</view>
			<view class="submit">提交</view>
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
.content {
	margin: 10rpx;
	.item {
		display: flex;
		justify-content: space-between;
		padding: 45rpx 20rpx;
		p {
			font-size: 20rpx;
			font-weight: 800;
		}
		view {
			font-size: 18rpx;
			color: #888888;
		}
	}
	.item:not(.item:nth-child(3)) {
		border-bottom: 1px solid #f4f4f4;
	}
	.box-text {
		width: 100%;
		.text {
			border: 1rpx solid #dcdcdc;
			border-radius: 15rpx;
			padding: 20rpx;
			width: 94%;
			height: 130rpx;
			color: #c8c8c8;
		}
	}
}
.picture {
	width: 90%;
	height: 100rpx;
	display: flex;

	.itemm {
		width: 100rpx;
		height: 100rpx;
		border: 1rpx solid #b6b6b6;
		margin: 40rpx;
		margin-left: 0;
		border-radius: 10rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;

		.chuo {
			width: 30rpx;
			height: 30rpx;
			background-color: #898989;
			border-radius: 15rpx;
			position: absolute;
			top: -10rpx;
			right: -10rpx;
			color: #fff;
			line-height: 30rpx;
			font-size: 10rpx;
			display: flex;
			justify-content: space-between;
		}
	}
}
.submit {
	width: 450rpx;
	height: 70rpx;
	margin: 0 auto;
	border-radius: 30rpx;
	margin-top: 100rpx;
	background-color: #1f8fff;
	color: #fff;
	text-align: center;
	line-height: 70rpx;
}
</style>
