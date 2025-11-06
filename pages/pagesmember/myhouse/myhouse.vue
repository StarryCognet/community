<template>
	<view>
		<uni-nav-bar :border="false" left-icon="left" left-text="返回" right-text="添加" @clickLeft="backIndex" @clickRight="goaddmember" title="我的房屋" />

		<div class="conmt">
			<div class="conmt-box">
				<div class="conmt-top">
					<span>巩华新村1号楼2单元</span>
					<p>认证中</p>
				</div>
				<div class="conmt-center">
					<div class="conmt-zi">
						<span>房号</span>
						<p>1201</p>
					</div>
					<div class="conmt-zi">
						<span>姓名</span>
						<p>张三</p>
					</div>
					<div class="conmt-zi">
						<span>电话</span>
						<p>13522566761</p>
					</div>
					<div class="conmt-zi">
						<span>住户类型</span>
						<p>业主</p>
					</div>
				</div>
				<div class="conmt-bottom">
					<span>2021-10-10 12:08</span>
					<div class="conmt-b">删除</div>
				</div>
			</div>
		</div>
		<div class="conmt">
			<div class="conmt-box">
				<div class="conmt-top">
					<span>巩华新村1号楼2单元</span>
					<p style="color: #038b0d">认证中</p>
				</div>
				<div class="conmt-center">
					<div class="conmt-zi">
						<span>房号</span>
						<p>1201</p>
					</div>
					<div class="conmt-zi">
						<span>姓名</span>
						<p>张三</p>
					</div>
					<div class="conmt-zi">
						<span>电话</span>
						<p>13522566761</p>
					</div>
					<div class="conmt-zi">
						<span>住户类型</span>
						<p>业主</p>
					</div>
				</div>
				<div class="conmt-bottom">
					<span>2021-10-10 12:08</span>
					<div class="conmt-b">删除</div>
				</div>
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
		goaddmember() {
			uni.navigateTo({
				url: '/pages/pages/myhouse/myhouse'
			});
		}
	}
};
</script>

<style lang="less">
@import url(../../../static/css/myhouse.less);
</style>
