<template>
	<view>
		<uni-nav-bar left-icon="left" left-text="返回" title="问题详情"></uni-nav-bar>
		<view class="center">
			<view class="centent">
				<view class="top">
					<view class="left">清水湾1号楼1单元2208 水管漏水</view>
					<view class="right">未处理</view>
				</view>
				<view class="nr">
					<view class="txt">公共区域有人随意占用,请物管及时.家里墙体有裂纹，请物管及时排工人进行维修。</view>
					<image style="margin-bottom: 20rpx" src="/static/img/detailsoftheissue1.png" mode=""></image>
					<image src="/static/img/detailsoftheissue2.png" mode=""></image>
				</view>
			</view>
			<view class="we">2021-10-2010:20</view>
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
	background-color: #f0f0f0;
}
.center {
	width: 95%;
	height: 1170rpx;
	background-color: #ffff;
	margin: 0 auto;
	margin-top: 20rpx;
	.centent {
		width: 90%;
		height: 90%;
		margin: 0 auto;
		border-bottom: 1rpx solid #ebebeb;
		padding-top: 5rpx;

		.top {
			width: 100%;
			height: 90rpx;
			border-bottom: 0.1rpx solid #ebebeb;
			display: flex;
			line-height: 90rpx;
			.left {
				width: 70%;
				height: 100%;
				font-size: 15rpx;
				color: #676767;
			}
			.right {
				width: 30%;
				height: 100%;
				text-align: right;
				font-size: 15rpx;
				color: #676767;
			}
		}
		.nr {
			width: 89%;
			height: 830rpx;
			.txt {
				width: 100%;
				height: 100rpx;
				font-size: 15rpx;
				line-height: 40rpx;
			}
			image {
				width: 530rpx;
				height: 400rpx;
			}
		}
	}
	.we {
		width: 100%;
		height: 50rpx;
		text-indent: 1em;
		line-height: 70rpx;
		color: #666666;
	}
}
</style>
