<template>
	<view>
		<uni-section type="line">
			<uni-search-bar textColor="#000000" bgColor="#f4f6f5" class="uni-mt-10" radius="50" placeholder="搜索关键字" clearButton="auto" cancelButton="none" @confirm="search" />
		</uni-section>
	</view>
</template>

<script>
export default {
	data() {
		return {
			searchValue: '123123'
		};
	},
	methods: {
		search(res) {
			uni.showToast({
				title: '搜索：' + res.value,
				icon: 'none'
			});
		},
		input(res) {
			console.log('----input:', res);
		},
		clear(res) {
			uni.showToast({
				title: 'clear事件，清除值为：' + res.value,
				icon: 'none'
			});
		},
		blur(res) {
			uni.showToast({
				title: 'blur事件，输入值为：' + res.value,
				icon: 'none'
			});
		},
		focus(e) {
			uni.showToast({
				title: 'focus事件，输出值为：' + e.value,
				icon: 'none'
			});
		},
		cancel(res) {
			uni.showToast({
				title: '点击取消，输入值为：' + res.value,
				icon: 'none'
			});
		}
	},
	onBackPress() {
		// #ifdef APP-PLUS
		plus.key.hideSoftKeybord();
		// #endif
	}
};
</script>

<style lang="less">
.search-result {
	padding-top: 10px;
	padding-bottom: 20px;
	text-align: center;
}

.search-result-text {
	text-align: center;
	font-size: 14px;
	color: #666;
}

.example-body {
	display: block;
	padding: 0px;
}

.uni-mt-10 {
	margin-top: 10px;
}
</style>