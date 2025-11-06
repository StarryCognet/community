<template>
	<view>
		<uni-nav-bar :border="false" left-icon="left" @clickLeft="backIndex" left-text="返回" title="修改密码" />
		<div class="conmt">
			<div class="conmt-top">
				<div class="conmt-box">
					<uni-icons class="biao" style="color: #cc7059" custom-prefix="iconfont" type="icon-xiugaimima" size="30"></uni-icons>

					<p>输入旧密码</p>
				</div>
			</div>
			<div class="conmt-top">
				<div class="conmt-box">
					<uni-icons class="biao" style="color: #3dce6d" custom-prefix="iconfont" type="icon-xiugaimima" size="30"></uni-icons>
					<p>输入6-12位的新密码</p>
				</div>
			</div>
			<div class="conmt-top">
				<div class="conmt-box">
					<uni-icons class="biao" style="color: #3dce6d" custom-prefix="iconfont" type="icon-xiugaimima" size="30"></uni-icons>
					<p>再次输入新密码</p>
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
