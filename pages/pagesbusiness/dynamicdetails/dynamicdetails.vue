<template>
	<view>
		<uni-nav-bar left-icon="left" title="动态详情"></uni-nav-bar>
		<view class="top">vipkid少儿英语:学习1年+，总结出3点避坑经验!</view>
		<view class="top_2">
			<view class="top_3" style="margin-right: 20rpx; color: #455682">选课007</view>
			<view class="top_4" style="color: #b5b5b5">1月31日</view>
		</view>

		<view class="item">
			<p>鱼Sir曾做过计算，如果一个孩子从6岁开</p>
			<p>始在vipkid少儿英语学习，到小学六年级</p>
			<p>上完全部课程，在vipkid不涨价的前提</p>
			<p>
				下，
				<span style="font-weight: bold">大概需要17万元左右</span>
				。
			</p>
		</view>

		<view class="item">
			<p>这个价格，确实足以让vipkid成为在线少</p>
			<p>儿英语课程中的“真名媛”了。除了价格昂</p>
			<p>贵之外，vipkid的课程质量也一直是饱受</p>
			<p>争议。</p>
		</view>

		<view class="item">
			<p>这个价格，确实足以让vipkid成为在线少</p>
			<p>儿英语课程中的“真名媛”了。除了价格昂</p>
			<p>贵之外，vipkid的课程质量也一直是饱受</p>
			<p>争议。</p>
		</view>
		<view class="xian"></view>
		<view class="item_1">
			<view class="topp">阅读 931</view>

			<view class="topp_2">
				<view class="buttomm">
					<uni-icons type="hand-up-filled" size="30" style="font-size: 30rpx; color: #3d4d7e"></uni-icons>
					0
				</view>

				<view class="buttomm">
					<uni-icons custom-prefix="iconfont" type="icon-fenxiang" style="font-size: 10rpx; color: #3d4d7e"></uni-icons>
					发送给朋友
				</view>

				<view class="buttomm">
					<uni-icons custom-prefix="iconfont" type="icon-pengyouquan" style="font-size: 30rpx; color: #3d4d7e"></uni-icons>
					转到朋友圈
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
.top {
	width: 89%;
	height: 130rpx;
	font-size: 40rpx;
	font-weight: bold;
	margin-left: 50rpx;
	line-height: 60rpx;
}
.top_2 {
	width: 89%;
	height: 150rpx;
	margin-left: 50rpx;
	display: flex;
}
.item {
	width: 89%;
	height: 270rpx;
	margin-left: 50rpx;
	font-size: 37rpx;
	line-height: 50rpx;
	font-weight: 300;
	color: #808080;
}
.xian {
	width: 100%;
	height: 40rpx;
	background-color: #f2f2f2;
}

.item_1 {
	width: 89%;
	height: 150rpx;
	// background-color: green;
	margin-left: 50rpx;
	font-size: 37rpx;
	line-height: 50rpx;
	font-weight: 300;
	color: #808080;
	margin-top: 20rpx;
	.topp {
		width: 100%;
		height: 70rpx;
		font-size: 20rpx;
		line-height: 70rpx;
	}
	.topp_2 {
		width: 84%;
		height: 70rpx;
		display: flex;
		margin-left: 120rpx;
		.buttomm {
			width: 180rpx;
			height: 70rpx;
			font-size: 20rpx;
			line-height: 70rpx;
			font-weight: bold;
			color: #3d4d7e;
			display: flex;
			margin-right: 20rpx;
			.uni-icons {
				margin-right: 10rpx;
			}
		}
	}
}
</style>
