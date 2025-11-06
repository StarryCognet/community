<template>
	<view>
		<uni-nav-bar :border="false" left-icon="left" @clickLeft="backIndex" left-text="返回" title="修改手机号" />
		<div class="conmt">
			<div class="conmt-top">
				<div class="conmt-box">
					<uni-icons class="biao" style="color: #cc7059" custom-prefix="iconfont" type="icon-xiugaishoujihao" size="20"></uni-icons>

					<p>1352256671</p>
				</div>
			</div>
			<div class="conmt-top">
				<div class="conmt-box">
					<uni-icons class="biao" style="color: #3dce6d" custom-prefix="iconfont" type="icon-xiugaishoujihao" size="20"></uni-icons>
					<p>输入验证码</p>
				</div>
				<div class="box">
					<span>获取验证码</span>
				</div>
			</div>
			<div class="conmt-top">
				<div class="conmt-box">
					<uni-icons class="biao" style="color: #3dce6d" custom-prefix="iconfont" type="icon-xiugaishoujihao" size="20"></uni-icons>
					<p>请输入新的手机号</p>
				</div>
			</div>
		</div>

		<button @click="backIndex">下一步</button>
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
@import url(../../../static/css/changephonenumber.less);
</style>
