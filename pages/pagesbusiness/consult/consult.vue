<template>
	<view>
		<uni-nav-bar leftWidth="110rpx" rightWidth="110rpx" :border="false" left-icon="left" left-text="返回" title="资讯" @clickLeft="backIndex"></uni-nav-bar>
		<uni-section type="line">
			<uni-search-bar
				v-model="searchKey"
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
		<view class="news-list">
			<view v-for="item in newsList" :key="item.id" class="item" @click="goDynamicdetails(item.id)">
				<view class="item_left">
					<p>{{ item.title }}</p>
					<span>{{ item.addtime.split('.')[0] }}</span>
				</view>
				<view class="item_right" v-if="item.picture">
					<image :src="getImageUrl(item.picture)" mode="aspectFill"></image>
				</view>
			</view>
			<view class="empty" v-if="newsList.length === 0">暂无公告数据</view>
		</view>
	</view>
</template>

<script>
import { newsList } from '@/apis/index.js';
export default {
	data() {
		return {
			newsList: [],
			searchKey: '',
			query: {
				page: 1,
				pageSize: 8,
				key: ''
			},
			pageCounts: 1
		};
	},
	onLoad() {
		this.getNewsList();
	},
	onPullDownRefresh() {
		this.query.page = 1;
		this.getNewsList();
		uni.stopPullDownRefresh();
	},
	onReachBottom() {
		this.query.page++;
		if (this.query.page > this.pageCounts) {
			uni.showToast({
				title: '没有更多了...',
				icon: 'none'
			});
			return;
		}
		this.getNewsList();
	},
	methods: {
		getImageUrl(picture) {
			return `http://api.quanjiu.net/estate/upload/${picture}`;
		},
		async getNewsList() {
			uni.showLoading({
				title: '加载中'
			});
			try {
				let params = {
					page: this.query.page,
					psize: this.query.pageSize,
					key: this.query.key
				};
				let res = await newsList(params);
				uni.hideLoading();
				if (res.errCode === 10000) {
					if (this.query.page == 1) {
						this.newsList = res.data.list;
					} else {
						this.newsList = [...this.newsList, ...res.data.list];
					}
					this.pageCounts = res.data.pageCounts || 1;
				}
			} catch (error) {
				uni.hideLoading();
				console.error('获取公告列表失败:', error);
			}
		},
		search() {
			this.query.page = 1;
			this.query.key = this.searchKey;
			this.getNewsList();
		},
		backIndex() {
			uni.navigateBack();
		},
		goDynamicdetails(id) {
			uni.navigateTo({
				url: `/pages/pagesbusiness/dynamicdetails/dynamicdetails?id=${id}`
			});
		}
	}
};
</script>

<style lang="less">
.news-list {
	padding-bottom: 30rpx;
}
.item {
	width: 90%;
	height: 180rpx;
	margin: 0 auto;
	margin-top: 30rpx;
	padding: 20rpx 0;
	border-bottom: 1rpx solid #f0f0f0;
	display: flex;
	align-items: center;
	.item_left {
		flex: 1;
		padding-right: 20rpx;
		p {
			font-size: 28rpx;
			line-height: 42rpx;
			color: #333;
			overflow: hidden;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			word-break: break-all;
		}
		span {
			font-size: 20rpx;
			color: #787878;
			display: inline-block;
			margin-top: 20rpx;
		}
	}
	.item_right {
		width: 200rpx;
		height: 140rpx;
		image {
			width: 100%;
			height: 100%;
			border-radius: 10rpx;
		}
	}
}
.empty {
	text-align: center;
	padding: 80rpx 0;
	color: #999;
	font-size: 28rpx;
}
</style>
