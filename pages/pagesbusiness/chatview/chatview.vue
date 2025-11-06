<template>
	<view>
		<uni-nav-bar
			:border="false"
			style="position: fixed; top: 0; right: 0; left: 0; z-index: 99"
			left-icon="left"
			left-text="返回"
			right-icon="more-filled"
			title="楼长"
		></uni-nav-bar>
		<view class="content">
			<view class="content-chat you">
				<view class="chat-headport">
					<image src="/static/img/usertx-2.png" mode=""></image>
				</view>
				<view class="chat-ins img">
					<image src="/static/img/chat-img1.png" mode=""></image>
				</view>
			</view>
			<view class="time">
				<span>06-24 10:26</span>
			</view>
			<view class="content-chat you">
				<view class="chat-headport">
					<image src="/static/img/usertx-2.png" mode=""></image>
				</view>
				<view class="chat-ins">
					<view class="ins">
						<view class="arrow"></view>
						小别墅面积72-94m2,
						<br />
						赠送花园40m2大露台 总价176万/套起
						<br />
						🫴
						<br />
						现房,现房😍
					</view>
				</view>
			</view>
			<view class="content-chat you">
				<view class="chat-headport">
					<image src="/static/img/usertx-2.png" mode=""></image>
				</view>
				<view class="chat-ins video">
					<image src="/static/img/chat-img2.png" mode=""></image>
				</view>
			</view>
			<view class="content-chat me">
				<view class="chat-headport">
					<image src="/static/img/usertx-2.png" mode=""></image>
				</view>
				<view class="chat-ins">
					<view class="text">已读</view>
					<view class="ins">
						<view class="arrow"></view>
						你们不是海口的吗
					</view>
				</view>
			</view>
			<view class="content-chat me">
				<view class="chat-headport">
					<image src="/static/img/usertx-2.png" mode=""></image>
				</view>
				<view class="chat-ins">
					<view class="text">已读</view>
					<view class="ins">
						<view class="arrow"></view>
						有海口经理的电话吗
					</view>
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
.content {
	// border: 1px solid #000;
	padding-top: 100rpx;
	padding-bottom: 150rpx;
	.time {
		display: flex;
		justify-content: center;
		span {
			background-color: #c7cbce;
			padding: 5rpx 20rpx;
			border-radius: 10rpx;
			font-size: 25rpx;
			color: #fff;
		}
	}
	.content-chat {
		display: flex;
		margin: 20rpx;
		.chat-headport {
			width: 100rpx;
			display: flex;
			justify-content: center;
			image {
				border-radius: 100%;
				width: 85rpx;
				height: 80rpx;
			}
		}
		.chat-ins {
			margin: 0 10rpx;
			.ins {
				background-color: #fff;
				padding: 20rpx;
				border-radius: 15rpx;
				position: relative;
				font-size: 28rpx;
				// width: 470rpx;
				// font-weight: 550;
				.arrow {
					width: 0;
					height: 0;
					font-size: 0;
					border: solid 10px;
					position: absolute;
				}
			}
			image {
				border-radius: 15rpx;
			}
		}
		.chat-ins.img {
			image {
				width: 300rpx;
				height: 200rpx;
			}
		}
		.chat-ins.video {
			image {
				width: 180rpx;
				height: 320rpx;
			}
		}
	}
	.content-chat.you {
		.chat-ins {
			.ins {
				.arrow {
					border-color: transparent #fff transparent transparent;
					left: -30rpx;
				}
			}
		}
	}
	.content-chat.me {
		flex-direction: row-reverse;
		// justify-content: end;
		.chat-ins {
			position: relative;
			margin: 0 10rpx;
			// width-max: 200rpx;
			.text {
				position: absolute;
				left: -65rpx;
				bottom: 0;
				font-size: 20rpx;
				color: #a8adb1;
			}
			.ins {
				background-color: #60c696;
				color: #fff;
				.arrow {
					border-color: transparent transparent transparent #60c696;
					right: -30rpx;
				}
			}
		}
	}
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
		width: 80%;
		border-radius: 10rpx;
		background-color: #fff;
		height: 80rpx;
	}
}
</style>
