<template>
	<view>
		<uni-nav-bar left-icon="left" left-text="返回" title="修改个人资料" />
		<div class="conmt">
			<div class="conent">
				<div class="conent-te">
					<div class="head">
						<uni-icons style="color: #1f8fff" class="anbut" custom-prefix="iconfont" type="icon-wode1" size="18"></uni-icons>
						<span>头像</span>
					</div>
					<div class="box">
						<img src="../../../static/img/huiyuan-toxiang.png" alt="" />
						<uni-icons class="biao" custom-prefix="iconfont" type="icon-youjiantou" size="18"></uni-icons>
					</div>
				</div>
				<div class="conent-te">
					<div class="head">
						<uni-icons style="color: #1f8fff" class="anbut" custom-prefix="iconfont" type="icon-yonghunicheng" size="18"></uni-icons>
						<span>昵称</span>
					</div>
					<div class="box">
						<span>嘎哥</span>
						<uni-icons class="biao" custom-prefix="iconfont" type="icon-youjiantou" size="18"></uni-icons>
					</div>
				</div>
				<div class="conent-te">
					<div class="head">
						<uni-icons style="color: #1f8fff" class="anbut" custom-prefix="iconfont" type="icon-tongxingbie" size="18"></uni-icons>
						<span>性别</span>
					</div>
					<div class="box">
						<span>保密</span>
						<uni-icons class="biao" custom-prefix="iconfont" type="icon-youjiantou" size="18"></uni-icons>
					</div>
				</div>
				<div class="conent-te">
					<div class="head">
						<uni-icons style="color: #1f8fff" class="anbut" custom-prefix="iconfont" type="icon-xiugaishoujihao" size="18"></uni-icons>
						<span>手机</span>
					</div>
					<div class="box">
						<span>13522566761</span>
						<uni-icons class="biao" custom-prefix="iconfont" type="icon-youjiantou" size="18"></uni-icons>
					</div>
				</div>
			</div>
			<button>保存</button>
		</div>
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
@import url(../../../static/css/editpersonalinfo.less);
</style>
