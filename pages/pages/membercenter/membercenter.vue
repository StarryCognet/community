<template>
	<view class="box">
		<view class="img_box">
			<view class="title">
				<view class="left"></view>
				<view class="conter">会员中心</view>
				<view class="right" @click="gomembersettings">
					<view class="iconfont icon-shezhi"></view>
				</view>
			</view>
			<view class="account">
				<view class="touxiang">
					<image src="https://youke1.picui.cn/s1/2025/11/05/690af7f593e64.png" mode=""></image>
				</view>
				<view class="acc">
					<view class="text">13522566762</view>
					<view class="rencheng">
						<view class="iconfont icon-shimingrenzheng"></view>
						<view class="span">已认证</view>
					</view>
				</view>
			</view>
		</view>
		<view class="content_box">
			<view class="smallbox" @click="gomyhouse">
				<view class="content">
					<image src="/static/img/vip-top-1.png" mode=""></image>
				</view>
				<view class="text">我的房屋</view>
			</view>
			<view class="smallbox" @click="gomyvehicle">
				<view class="content_bx">
					<image src="/static/img/vip-top-2.png" mode=""></image>
				</view>
				<view class="text">我的车辆</view>
			</view>
			<view class="smallbox" @click="gopaymentrecords">
				<view class="content_fk">
					<image src="/static/img/vip-top-3.png" mode=""></image>
				</view>
				<view class="text">我的缴费</view>
			</view>
			<view class="smallbox" @click="gofamilymembers">
				<view class="content_bz">
					<image src="/static/img/vip-top-4.png" mode=""></image>
				</view>
				<view class="text">家庭成员</view>
			</view>
		</view>
		<view class="bottom_box">
			<view class="bottom">
				<view class="setting_box" @click="gowarrantyrecord">
					<view class="setting">
						<!-- <image src="/static/images/tubiao_03.png" mode=""></image> -->
						<view class="iconfont icon-tubiao_baoxiujilu"></view>
						<text></text>
						<view class="text">报修记录</view>
					</view>
					<view class="iconfont icon-youjiantou"></view>
				</view>
				<view class="setting_box" @click="gofeedbackrecord">
					<view class="setting">
						<!-- <image src="/static/images/tubiao_12.png" mode=""></image> -->
						<view class="iconfont icon-mti-fankuijilu"></view>
						<view class="text">反馈记录</view>
					</view>
					<view class="iconfont icon-youjiantou"></view>
				</view>
				<view class="setting_box" @click="gorelation">
					<view class="setting">
						<!-- <image src="/static/images/tubiao_09.png" mode=""></image> -->
						<view class="iconfont icon-xiaoxi2"></view>
						<view class="text">联系物业</view>
					</view>
					<view class="iconfont icon-youjiantou"></view>
				</view>
				<view class="setting_box" @click="gomembersettings">
					<view class="setting">
						<view class="iconfont icon-zhanghaoshezhi"></view>
						<view class="text">账号设置</view>
					</view>
					<view class="iconfont icon-youjiantou"></view>
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
		gomyhouse() {
			uni.navigateTo({
				url: '/pages/pagesmember/myhouse/myhouse'
			});
		},
		gomyvehicle() {
			uni.navigateTo({
				url: '/pages/pagesmember/myvehicle/myvehicle'
			});
		},
		gopaymentrecords() {
			uni.navigateTo({
				url: '/pages/pagesbusiness/paymentrecords/paymentrecords'
			});
		},
		gofamilymembers() {
			uni.navigateTo({
				url: '/pages/pagesmember/familymembers/familymembers'
			});
		},
		gowarrantyrecord() {
			uni.navigateTo({
				url: '/pages/pagesbusiness/warrantyrecord/warrantyrecord'
			});
		},
		gofeedbackrecord() {
			uni.navigateTo({
				url: '/pages/pagesbusiness/feedbackrecord/feedbackrecord'
			});
		},
		gomembersettings() {
			uni.navigateTo({
				url: '/pages/pagesmember/member-settings/member-settings'
			});
		}
	}
};
</script>
<style lang="less" scoped>
.box {
	background-color: #f6f6f6;
	.img_box {
		height: 405rpx;
		background: url(/static/img/vip-bg.png) no-repeat;
		background-size: 100% 405rpx;
		padding: 0 46rpx;
		background-color: #fff;
		.title {
			width: 100%;
			height: 46rpx;
			display: flex;
			justify-content: space-between;
			padding-top: 111rpx;
			padding-bottom: 58rpx;
			color: #fff;
			.left {
				width: 120rpx;
				text-align: left;
			}
			.right {
				width: 120rpx;
				text-align: right;
				display: flex;
				align-items: center;
				justify-content: center;
				.icon-shezhi {
					font-size: 42rpx;
				}
			}
			.conter {
				width: 100%rpx;
				text-align: center;
				font-size: 34rpx;
			}
		}
		.account {
			width: 100%;
			height: 114rpx;
			display: flex;
			align-items: center;
			.touxiang {
				width: 114rpx;
				height: 114rpx;
				border-radius: 50%;
				background-color: aqua;
				margin-right: 40rpx;
				image {
					width: 100%;
					height: 100%;
					border-radius: 50%;
					margin-right: 47rpx;
				}
			}
			.acc {
				width: 300rpx;
				height: 82rpx;
				.text {
					font-size: 24rpx;
					color: #fff;
				}
				.rencheng {
					width: 96rpx;
					height: 36rpx;
					border: 1rpx solid #fff;
					border-radius: 30rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					margin-top: 20rpx;
					color: #fff;
					.icon-shimingrenzheng {
						font-size: 25rpx;
					}
					.span {
						font-size: 17rpx;
					}
				}
			}
		}
	}
	.content_box {
		width: 100%;
		height: 258rpx;
		background-color: #fff;
		padding: 0 30rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-around;
		.smallbox {
			width: 90rpx;
			height: 111rpx;
			.content {
				width: 77rpx;
				height: 77rpx;
				background-color: #4f86ed;
				border-radius: 20rpx;
				margin: 0 auto;
				display: flex;
				justify-content: center;
				align-items: center;
				image {
					width: 52rpx;
					height: 52rpx;
				}
			}
			.content_bx {
				width: 77rpx;
				height: 77rpx;
				background-color: #71b78b;
				border-radius: 20rpx;
				margin: 0 auto;
				display: flex;
				justify-content: center;
				align-items: center;
				image {
					width: 52rpx;
					height: 52rpx;
				}
			}
			.content_fk {
				width: 77rpx;
				height: 77rpx;
				background-color: #e39e5e;
				border-radius: 20rpx;
				margin: 0 auto;
				display: flex;
				justify-content: center;
				align-items: center;
				image {
					width: 52rpx;
					height: 52rpx;
				}
			}
			.content_bz {
				width: 77rpx;
				height: 77rpx;
				background-color: #479cf7;
				border-radius: 20rpx;
				margin: 0 auto;
				display: flex;
				justify-content: center;
				align-items: center;
				image {
					width: 52rpx;
					height: 52rpx;
				}
			}
			.text {
				font-size: 20rpx;
				text-align: center;
				margin-top: 4rpx;
			}
		}
	}
	.bottom_box {
		width: 100%;
		.bottom {
			width: 100%;
			// height: 424rpx;
			background-color: #fff;
			margin-top: 20rpx;
			padding-left: 30rpx;
			padding-top: 32rpx;
			box-sizing: border-box;
			.setting_box {
				width: 100%;
				height: 88rpx;
				border-bottom: 1px solid #eeeeee;
				padding-right: 32rpx;
				padding-left: 10rpx;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 8rpx;
				color: #7a7a7a;
				.setting {
					display: flex;
					image {
						width: 34rpx;
						height: 34rpx;
						margin-right: 16rpx;
					}
					.icon-wuyebaoxiu {
						font-size: 34rpx;
						margin-right: 16rpx;
					}
					.icon-yijianfankui {
						font-size: 34rpx;
						margin-right: 16rpx;
					}
					.icon-xinxi {
						font-size: 34rpx;
						margin-right: 16rpx;
					}
					.icon-shezhi {
						font-size: 34rpx;
						margin-right: 16rpx;
					}
					.text {
						font-size: 24rpx;
					}
				}
			}
		}
	}
}
</style>
