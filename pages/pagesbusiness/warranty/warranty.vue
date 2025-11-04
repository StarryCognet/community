<template>
	<view>
		<uni-nav-bar left-icon="left" left-text="返回" title="报修"></uni-nav-bar>
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
			// width: 820rpx;
			width: 94%;
			height: 130rpx;
			color: #c8c8c8;
		}
	}
}
</style>
