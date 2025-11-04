<template>
	<view>
		<div class="conmt">
			<div class="conmt-top">
				<div class="conmt-box">
					<uni-icons class="biao" style="color: #cc7059" custom-prefix="iconfont" type="icon-xiugaishoujihao" size="30"></uni-icons>

					<p>修改手机号</p>
				</div>
				<div class="box">
					<span>></span>
				</div>
			</div>
			<div class="conmt-top">
				<div class="conmt-box">
					<uni-icons class="biao" style="color: #3dce6d" custom-prefix="iconfont" type="icon-xiugaimima" size="30"></uni-icons>
					<p>修改密码</p>
				</div>
				<div class="box">
					<span>></span>
				</div>
			</div>
		</div>
		<div class="cont">
			<div class="cont-top">
				<div class="cont-box">
					<uni-icons class="biao" style="color: #359bec" custom-prefix="iconfont" type="icon-yunongtongqingchuhuancun" size="30"></uni-icons>
					<p>清除缓存</p>
				</div>
				<div class="box">
					<p>12M</p>
					<span>></span>
				</div>
			</div>
			<div class="cont-top">
				<div class="cont-box">
					<uni-icons class="biao" style="color: #75dc98" custom-prefix="iconfont" type="icon-dangqianbanben" size="30"></uni-icons>
					<p>当前版本</p>
				</div>
				<div class="box">
					<p>1.0.0</p>
					<span>></span>
				</div>
			</div>
		</div>
		<button>退出当前账号</button>
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
@import url(../../../static/css/member-settings.less);
</style>
