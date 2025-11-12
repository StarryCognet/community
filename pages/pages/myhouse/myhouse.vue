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
						<picker @change="bindPickerChange" :value="index" :range="buildingData" range-key="name">
							<span>请选择小区</span>
							<uni-icons class="biao" custom-prefix="iconfont" type="icon-youjiantou" style="font-size: 25rpx; margin-left: 10rpx" size="10"></uni-icons>
						</picker>
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
						<picker @change="bindPickerChange" :value="index" :range="array">
							<span>请选择住户类型</span>
							<uni-icons class="biao" custom-prefix="iconfont" type="icon-youjiantou" style="font-size: 25rpx; margin-left: 10rpx" size="10"></uni-icons>
						</picker>
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
		return {
			array: ['中国', '美国', '巴西', '日本'],
			index: 0,
			buildingData: []
		};
	},
	onLoad() {
		this.getbuilding();
	},
	methods: {
		async getbuilding() {
			let {
				data: { list }
			} = await building();
			this.buildingData = list;
			// console.log(this.buildingData);
		},
		bindPickerChange: function (e) {
			console.log('picker发送选择改变，携带值为', e.detail.value);
			this.index = e.detail.value;
		},
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
