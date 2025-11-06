<template>
	<view>
		<uni-nav-bar leftWidth="110rpx" rightWidth="110rpx" :border="false" @clickLeft="backIndex" left-icon="left" left-text="返回" title="关于我们" />
		<div class="conmt">
			<image src="../../../static/img/aboutus.png" mode=""></image>
			<p>扫一扫下载 甜城app</p>
		</div>
		<div class="conent">
			<div class="conent-box">
				<div class="con-zi">
					<uni-icons style="color: #b9b9b9" custom-prefix="iconfont" type="icon-mti-fankuijilu" size="20"></uni-icons>
					<span>用户协议</span>
				</div>
				<uni-icons class="biao" style="color: #b9b9b9" custom-prefix="iconfont" type="icon-youjiantou" size="20"></uni-icons>
			</div>
			<div class="conent-box">
				<div class="con-zi">
					<uni-icons style="color: #b9b9b9" custom-prefix="custom-icon" type="calendar" size="20"></uni-icons>
					<span>个人隐私</span>
				</div>
				<uni-icons class="biao" style="color: #b9b9b9" custom-prefix="iconfont" type="icon-youjiantou" size="20"></uni-icons>
			</div>
			<div class="con">
				<span>@Copyright2021</span>
				<p>北京互领科技有限公司版权所有</p>
			</div>
		</div>
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
@import url(../../../static/css/aboutus.less);
</style>
