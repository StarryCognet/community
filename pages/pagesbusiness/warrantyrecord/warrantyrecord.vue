<template>
	<view>
		<view class="top">
			<uni-nav-bar :border="false" left-icon="left" left-text="返回" title="保修记录"></uni-nav-bar>
			<view class="buttom">
				<view class="itemm" style="color: #0080fe">未处理</view>
				<view class="itemm">已处理</view>
				<view class="itemm">全部</view>
			</view>
		</view>
		<view class="item">
			<view class="center">
				<view class="top">公共区域有人随意占用，请物管及时.家里墙体有裂纹，请物管及时排工人..</view>
				<view class="centent">
					<view class="centent_top">
						<image src="/static/img/detailsoftheissue1.png" mode=""></image>
						<image src="/static/img/detailsoftheissue2.png" mode=""></image>
						<image src="/static/img/detailsoftheissue1.png" mode=""></image>
					</view>
					<view class="centent_buttom">
						<view class="centent_buttom_left">清水湾1楼1单元2208</view>
						<view class="centent_buttom_right">水管漏水</view>
					</view>
				</view>
				<view class="buttom">
					<view class="buttom_left">2021-10-2010:20</view>
					<view class="buttom_right">
						<view style="border: 0.1rpx solid #666666; color: #666666">未处理</view>
						<view style="background-color: #01a2f2; color: #fff">撤销</view>
					</view>
				</view>
			</view>
		</view>

		<view class="item">
			<view class="center">
				<view class="top">公共区域有人随意占用，请物管及时.家里墙体有裂纹，请物管及时排工人..</view>
				<view class="centent">
					<view class="centent_top">
						<image src="/static/img/detailsoftheissue1.png" mode=""></image>
						<image src="/static/img/detailsoftheissue2.png" mode=""></image>
						<image src="/static/img/detailsoftheissue1.png" mode=""></image>
					</view>
					<view class="centent_buttom">
						<view class="centent_buttom_left">清水湾1楼1单元2208</view>
						<view class="centent_buttom_right">水管漏水</view>
					</view>
				</view>
				<view class="buttom">
					<view class="buttom_left">2021-10-2010:20</view>
					<view class="buttom_right">
						<view style="border: 0.1rpx solid #666666; color: #666666">未处理</view>
						<view style="background-color: #01a2f2; color: #fff">撤销</view>
					</view>
				</view>
			</view>
		</view>

		<view class="item">
			<view class="center">
				<view class="top">公共区域有人随意占用，请物管及时.家里墙体有裂纹，请物管及时排工人..</view>
				<view class="centent">
					<view class="centent_top">
						<image src="/static/img/detailsoftheissue1.png" mode=""></image>
						<image src="/static/img/detailsoftheissue2.png" mode=""></image>
						<image src="/static/img/detailsoftheissue1.png" mode=""></image>
					</view>
					<view class="centent_buttom">
						<view class="centent_buttom_left">清水湾1楼1单元2208</view>
						<view class="centent_buttom_right">水管漏水</view>
					</view>
				</view>
				<view class="buttom">
					<view class="buttom_left">2021-10-2010:20</view>
					<view class="buttom_right">
						<view style="border: 0.1rpx solid #666666; color: #666666">未处理</view>
						<view style="background-color: #01a2f2; color: #fff">撤销</view>
					</view>
				</view>
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
page {
	background-color: #f0f0f0;
}
.top {
	width: 100%;
	height: 200rpx;
	background-color: #fff;
	.buttom {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		display: flex;
		justify-content: space-between;
		font-size: 29rpx;
		.itemm {
			margin-left: 20rpx;
			margin-right: 20rpx;
		}
	}
}
.item {
	width: 709rpx;
	height: 550rpx;
	background-color: #fff;
	margin: 0 auto;
	margin-top: 20rpx;
	margin-bottom: 20rpx;
	border: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	.center {
		width: 85%;
		height: 85%;

		.top {
			width: 100%;
			height: 90rpx;

			font-size: 25rpx;
			line-height: 40rpx;
		}
		.centent {
			width: 100%;
			height: 270rpx;
			.centent_top {
				width: 100%;
				height: 190rpx;
				display: flex;
				align-items: center;
				justify-content: space-around;
				image {
					width: 170rpx;
					height: 130rpx;
				}
			}
			.centent_buttom {
				width: 95%;
				height: 75rpx;
				display: flex;
				line-height: 75rpx;
				margin-left: 20rpx;
				color: #666666;
				font-size: 25rpx;

				.centent_buttom_left {
					width: 60%;
					height: 100%;
				}
				.centent_buttom_right {
					width: 40%;
					height: 100%;
					text-align: right;
				}
			}
		}
		.buttom {
			width: 95%;
			height: 75rpx;
			display: flex;
			margin-left: 20rpx;

			border-top: 1rpx solid #f0f0f0;
			line-height: 90rpx;
			font-size: 25rpx;
			.buttom_left {
				width: 50%;
				height: 90rpx;
			}
			.buttom_right {
				width: 40%;
				height: 80rpx;
				margin-left: 50rpx;
				margin-top: 25rpx;
				text-align: right;
				display: flex;
				justify-content: space-between;
				view {
					width: 100rpx;
					height: 50rpx;
					text-align: center;
					line-height: 50rpx;
					border-radius: 10rpx;
				}
			}
		}
	}
}
</style>
