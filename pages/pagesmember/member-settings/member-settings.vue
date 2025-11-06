<template>
	<view>
		<uni-nav-bar leftWidth="110rpx" rightWidth="110rpx" :border="false" left-icon="left" left-text="返回" @clickLeft="backIndex" title="会员设置"></uni-nav-bar>
		<view class="conmt">
			<view class="conmt-top" @click="gochangephonenumber">
				<view class="conmt-box">
					<uni-icons class="biao" style="font-size: 38rpx; color: #cc7059" custom-prefix="iconfont" type="icon-xiugaishoujihao" size="30"></uni-icons>

					<p>修改手机号</p>
				</view>
				<view class="box">
					<uni-icons custom-prefix="iconfont" type="icon-youjiantou" size="15"></uni-icons>
				</view>
			</view>
			<view class="conmt-top" @click="gochangepassword">
				<view class="conmt-box">
					<uni-icons class="biao" style="font-size: 38rpx; color: #3dce6d" custom-prefix="iconfont" type="icon-xiugaimima" size="30"></uni-icons>
					<p>修改密码</p>
				</view>
				<view class="box">
					<uni-icons custom-prefix="iconfont" type="icon-youjiantou" size="15"></uni-icons>
				</view>
			</view>
		</view>
		<view class="cont">
			<view class="cont-top">
				<view class="cont-box">
					<uni-icons class="biao" style="font-size: 38rpx; color: #359bec" custom-prefix="iconfont" type="icon-yunongtongqingchuhuancun" size="30"></uni-icons>
					<p>清除缓存</p>
				</view>
				<view class="box">
					<p>12M</p>
					<uni-icons custom-prefix="iconfont" type="icon-youjiantou" size="15"></uni-icons>
				</view>
			</view>
			<view class="cont-top">
				<view class="cont-box">
					<uni-icons class="biao" style="font-size: 38rpx; color: #75dc98" custom-prefix="iconfont" type="icon-dangqianbanben" size="30"></uni-icons>
					<p>当前版本</p>
				</view>
				<view class="box">
					<p>1.0.0</p>
					<uni-icons custom-prefix="iconfont" type="icon-youjiantou" size="15"></uni-icons>
				</view>
			</view>
		</view>
		<button @click="gologin">退出当前账号</button>
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
		gochangephonenumber() {
			uni.navigateTo({
				url: '/pages/pagesmember/changephonenumber/changephonenumber'
			});
		},
		gochangepassword() {
			uni.navigateTo({
				url: '/pages/pagesmember/changepassword/changepassword'
			});
		},
		gologin() {
			uni.navigateTo({
				url: '/pages/pages/login/login'
			});
		}
	}
};
</script>

<style lang="less">
@import url(../../../static/css/member-settings.less);
</style>
