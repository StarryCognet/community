<template>
	<view>
		<uni-nav-bar left-icon="left" left-text="返回" @clickLeft="backIndex" title="房屋认证" />
		<div class="conmt">
			<div class="conmt-text">
				<p>房屋信息</p>
			</div>
			<div class="box">
				<div class="conmt-box">
					<p>小区</p>
					<div class="cont">
						<span>请选择小区</span>
						<uni-icons class="biao" style="color: #898989" custom-prefix="iconfont" type="icon-youjiantou" size="26rpx"></uni-icons>
					</div>
				</div>
				<div class="conmt-box" @click="gomyhouse2">
					<p>楼栋房号</p>
					<div class="cont">
						<span>请选择楼栋信息</span>
						<uni-icons class="biao" style="color: #898989" custom-prefix="iconfont" type="icon-youjiantou" size="26rpx"></uni-icons>
					</div>
				</div>
				<div class="conmt-box">
					<p>住户类型</p>
					<div class="cont">
						<span>请选择住户类型</span>
						<uni-icons class="biao" style="color: #898989" custom-prefix="iconfont" type="icon-youjiantou" size="26rpx"></uni-icons>
					</div>
				</div>
			</div>
			<div class="conmt-text">
				<p>个人信息</p>
			</div>
			<div class="box">
				<div class="conmt-box">
					<p>姓名</p>
					<div class="cont">
						<span>请填写姓名</span>
					</div>
				</div>
				<div class="conmt-box">
					<p>联系电话</p>
					<div class="cont">
						<span>13522568755</span>
					</div>
				</div>
				<button @click="gomyhouse4">提交</button>
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
		},
		gomyhouse4() {
			uni.navigateTo({
				url: '/pages/pages/myhouse5/myhouse5'
			});
		},
		gomyhouse2() {
			uni.navigateTo({
				url: '/pages/pages/myhouse2/myhouse2'
			});
		}
	}
};
</script>

<style lang="less">
@import url(../../../static/css/addmyhouse.less);
</style>
