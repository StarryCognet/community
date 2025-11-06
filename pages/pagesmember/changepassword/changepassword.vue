<template>
	<view>
		<uni-nav-bar leftWidth="110rpx" rightWidth="110rpx" :border="false" left-icon="left" @clickLeft="backIndex" left-text="返回" title="修改密码" />
		<div class="conmt">
			<div class="conmt-top">
				<div class="conmt-box">
					<uni-icons class="biao" style="font-size: 38rpx; color: #cc7059" custom-prefix="iconfont" type="icon-xiugaimima" size="30"></uni-icons>
					<input type="password" placeholder="输入旧密码" />
				</div>
			</div>
			<div class="conmt-top">
				<div class="conmt-box">
					<uni-icons class="biao" style="font-size: 38rpx; color: #3dce6d" custom-prefix="iconfont" type="icon-xiugaimima" size="30"></uni-icons>
					<input type="password" placeholder="输入6-12位的新密码" />
				</div>
			</div>
			<div class="conmt-top">
				<div class="conmt-box">
					<uni-icons class="biao" style="font-size: 38rpx; color: #3dce6d" custom-prefix="iconfont" type="icon-xiugaimima" size="30"></uni-icons>
					<input type="password" placeholder="再次输入新密码" />
				</div>
			</div>
		</div>

		<button @click="backIndex">提交</button>
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
@import url(../../../static/css/changepassword.less);
</style>
