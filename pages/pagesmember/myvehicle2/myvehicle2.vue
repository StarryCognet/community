<template>
	<view>
		<uni-nav-bar :border="false" left-icon="left" left-text="返回" @clickLeft="backIndex" @clickRight="goaddvehicle" right-text="添加车辆" title="我的车辆" />
		<div class="conmt">
			<img src="../../../static/img/myvehicle.png" alt="" />
			<div class="check">
				<div class="conmt-box">
					<uni-icons class="biao" style="color: #cc7059" custom-prefix="iconfont" type="icon-xiugaishoujihao" size="20"></uni-icons>
					<p>京A67789</p>
				</div>
				<label class="radio">
					<radio value="r1" :checked="true" />
				</label>
			</div>
		</div>
		<button>删除</button>
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
		goaddvehicle() {
			uni.navigateTo({
				url: '/pages/pagesmember/addvehicle/addvehicle'
			});
		}
	}
};
</script>

<style lang="less">
@import url(../../../static/css/myvehicle.less);
</style>
