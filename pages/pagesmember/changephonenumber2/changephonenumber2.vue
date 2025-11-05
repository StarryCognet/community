<template>
	<view>
		<uni-nav-bar left-icon="left" left-text="返回" title="修改手机号" />
		<div class="conmt">
			<div class="conmt-top">
				<div class="conmt-box">
					<uni-icons class="biao" style="color: #3dce6d" custom-prefix="iconfont" type="icon-xiugaishoujihao" size="20"></uni-icons>

					<p>1352256671</p>
				</div>
			</div>
			<div class="conmt-top">
				<div class="conmt-box">
					<uni-icons class="biao" style="color: #3dce6d" custom-prefix="iconfont" type="icon-xiugaimima" size="20"></uni-icons>
					<p>输入验证码</p>
				</div>
			</div>
		</div>

		<button>完成</button>
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
@import url(../../../static/css/changephonenumber2.less);
</style>
