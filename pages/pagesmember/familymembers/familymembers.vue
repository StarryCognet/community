<template>
	<view>
		<uni-nav-bar :border="false" left-icon="left" left-text="返回" @clickRight="goaddmember" @clickLeft="backIndex" right-text="添加" title="家庭成员" />
		<div class="conmt-text">
			<p>信息修改请与社区管理员联系</p>
		</div>
		<div class="conmt">
			<div class="conmt-box">
				<div class="conmt-top">
					<span>巩华新村1号楼2单元</span>
				</div>
				<div class="conmt-center">
					<div class="conmt-zi">
						<span>姓名</span>
						<p>张三</p>
					</div>
					<div class="conmt-zi">
						<span>性别</span>
						<p>男</p>
					</div>
					<div class="conmt-zi">
						<span>电话</span>
						<p>13522566761</p>
					</div>
					<div class="conmt-zi">
						<span>身份证号</span>
						<p>12111111111111111</p>
					</div>
					<div class="conmt-zi">
						<span>住户类型</span>
						<p>家属</p>
					</div>
				</div>
				<div class="conmt-bottom">
					<span>2021-10-10 12:08</span>
					<div class="conmt-b"><p>认证中</p></div>
				</div>
			</div>
		</div>
		<div class="conmt">
			<div class="conmt-box">
				<div class="conmt-top">
					<span>巩华新村1号楼2单元</span>
				</div>
				<div class="conmt-center">
					<div class="conmt-zi">
						<span>姓名</span>
						<p>张三</p>
					</div>
					<div class="conmt-zi">
						<span>性别</span>
						<p>男</p>
					</div>
					<div class="conmt-zi">
						<span>电话</span>
						<p>13522566761</p>
					</div>
					<div class="conmt-zi">
						<span>身份证号</span>
						<p>12111111111111111</p>
					</div>
					<div class="conmt-zi">
						<span>住户类型</span>
						<p>家属</p>
					</div>
				</div>
				<div class="conmt-bottom">
					<span>2021-10-10 12:08</span>
					<div class="conmt-b"><p style="color: #038b0d">认证中</p></div>
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
				url: '/pages/pagesmember/addmember/addmember'
			});
		}
	}
};
</script>

<style lang="less">
@import url(../../../static/css/familymembers.less);
</style>
