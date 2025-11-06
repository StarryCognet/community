<template>
	<view>
		<uni-section type="line">
			<uni-search-bar
				cancelText="#4d5456"
				bgColor="#f4f6f5"
				class="uni-mt-10"
				radius="50"
				placeholder="搜索关键字"
				clearButton="auto"
				cancelButton="none"
				@confirm="search"
			/>
		</uni-section>
		<view class="center">
			<span>全部</span>
			<span>系统消息</span>
		</view>
		<uni-list>
			<uni-list :border="false">
				<uni-list-chat to="/pages/pagesbusiness/chatview/chatview" title="高玲" avatar="/static/img/user-tx-1.png" note="收到" time="上午 8:18"></uni-list-chat>
				<uni-list-chat
					to="/pages/pagesbusiness/chatview/chatview"
					title="张豪"
					avatar="/static/img/user.png"
					note="家里暖气不热了，能派人过来修吗"
					time="11月8日"
				></uni-list-chat>
				<uni-list-chat
					to="/pages/pagesbusiness/chatview/chatview"
					title="张豪"
					avatar="/static/img/user.png"
					note="家里暖气不热了，能派人过来修吗"
					time="11月8日"
				></uni-list-chat>
				<uni-list-chat
					to="/pages/pagesbusiness/chatview/chatview"
					title="张豪"
					avatar="/static/img/user.png"
					note="家里暖气不热了，能派人过来修吗"
					time="11月8日"
				></uni-list-chat>
			</uni-list>
		</uni-list>
	</view>
</template>

<script>
export default {
	data() {
		return {
			searchValue: '123123'
		};
	}
};
</script>

<style lang="less">
.center {
	display: flex;
	justify-content: space-between;
	padding: 40rpx 50rpx;
	span:nth-child(1) {
		color: #3b87f5;
	}
	span:nth-child(2) {
		color: #6f6f6f;
	}
}
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

.chat-custom-right {
	flex: 1;
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-end;
}

.chat-custom-text {
	font-size: 12px;
	color: #999;
}
</style>
