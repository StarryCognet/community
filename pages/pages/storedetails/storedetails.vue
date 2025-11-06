<template>
	<view class="page-container">
		<uni-nav-bar
			:border="false"
			style="position: absolute; top: 0; left: 0; z-index: 2"
			color="#fff"
			background-color="transparent"
			left-icon="left"
			title=""
			@clickLeft="backIndex"
		></uni-nav-bar>
		<view class="top">
			<view class="top_box">
				<view class="box_left">
					<image src="/static/img/nr-tx.png" alt="" mode="widthFix"></image>
				</view>
				<view class="box_right">
					<text>吉野家牛肉饭</text>
					<text>美食 | 午餐</text>
				</view>
			</view>
		</view>
		<view class="details">
			<view class="time">
				<uni-icons custom-prefix="iconfont" type="icon-date-2" size="24" color="#ff942e"></uni-icons>
				<text>营业时间:8:00-23:00</text>
			</view>
			<view class="time">
				<uni-icons custom-prefix="iconfont" type="icon-dingwei" size="25" color="#ff942e"></uni-icons>
				<text>商家地址:17号楼3单元1703</text>
			</view>
		</view>
		<view class="content">
			<view class="content_title">商家介绍</view>
			<view class="content_list">
				<image src="/static/img/nr-c-1.png" alt="" mode="widthFix"></image>
				<image src="/static/img/nr-c-2.png" alt="" mode="widthFix"></image>
			</view>
			<view class="con_word">
				<text>
					吉野家的名字来源于地名，日本的吉野山地区的牛肉饭最为著名，传说是12世纪时候日本名将源义经的爱妾静在掩护义经避难之时，在吉野山把制作牛肉饭的技巧教给了当地居民，于是牛肉饭成为当地的特产美味，吉野家之所以这样取名，也是为说明自己的牛肉饭正宗于是牛肉饭成为当地的特产美味，吉野家之所以这样取名，也是为说明自己的牛肉饭正宗
				</text>
			</view>
		</view>
		<view class="foot">
			<view class="foot_list">
				<uni-icons custom-prefix="iconfont" type="icon-dianhua" size="36" color="#ff7d00"></uni-icons>
				<text>联系电话:13890987832</text>
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
<style lang="less" scoped>
.page-container {
	width: 100%;
	min-height: 100vh;
	background-color: #fff;
	.top {
		width: 100%;
		height: 554rpx;
		background: url('/static/img/nr-dm.png') no-repeat;
		background-size: 100% 100%;
		padding-top: 1rpx;
		.top_box {
			background-color: #fff;
			width: 90%;
			height: 177rpx;
			margin: 500rpx auto 0;
			border-radius: 6rpx;
			display: flex;
			box-shadow: 0 6rpx 20rpx rgba(0, 0, 0, 0.1);
			.box_left {
				width: 97rpx;
				height: 97rpx;
				margin: 40rpx;
				image {
					width: 100%;
					height: 100%;
				}
			}
			.box_right {
				flex: 1;
				margin-top: 47rpx;
				display: flex;
				flex-direction: column;
				gap: 13rpx;
				text:first-child {
					font-size: 33rpx;
					font-weight: 500;
				}
				text:last-child {
					font-size: 23rpx;
					color: #666666;
				}
			}
		}
	}
	.details {
		margin-top: 184rpx;
		padding: 0 53rpx;
		.time {
			display: flex;
			align-items: center;
			font-size: 30rpx;
			margin-bottom: 27rpx;
			text {
				margin-left: 13rpx;
			}
		}
	}
	.content {
		margin-top: 107rpx;
		padding: 0 53rpx;
		.content_title {
			font-size: 32rpx;
			margin-bottom: 47rpx;
			font-weight: 500;
		}
		.content_list {
			display: flex;
			justify-content: space-between;
			gap: 13rpx;
			image {
				width: 48%;
				height: auto;
				border-radius: 6rpx;
			}
		}
		.con_word {
			text {
				margin-top: 33rpx;
				font-size: 27rpx;
				line-height: 47rpx;
				word-wrap: break-word;
				word-break: break-word;
				display: -webkit-box;
				-webkit-line-clamp: 5;
				-webkit-box-orient: vertical;
				overflow: hidden;
				text-overflow: ellipsis;
				color: #333;
			}
		}
	}
	.foot {
		width: 100%;
		height: 420rpx;
		padding-top: 1rpx;
		display: flex;
		justify-content: center;
		.foot_list {
			padding: 0 80rpx;
			height: 132rpx;
			background-color: #f1f5f8;
			margin: 133rpx auto;
			display: flex;
			align-items: center;
			border-radius: 15rpx;
			text {
				padding: 0 20rpx;
				font-size: 31rpx;
				line-height: 132rpx;
			}
		}
	}
}
</style>
