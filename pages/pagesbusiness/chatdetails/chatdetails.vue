<template>
  <view>
    <uni-nav-bar leftWidth="110rpx" rightWidth="110rpx" :border="false" left-icon="left" @clickLeft="backIndex" title="聊天详情"></uni-nav-bar>
    <view class="tx">
      <view class="tx-nr">
        <image src="/static/img/chatdetails-tx.png" mode=""></image>
        <p>设计师...</p>
      </view>
    </view>
    <view class="items">
      <view class="item">
        置顶聊天
        <switch />
      </view>
      <view class="item">
        消息免打扰
        <switch />
      </view>
      <view class="item">
        屏蔽拉黑
        <switch />
      </view>
    </view>
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
  },
};
</script>

<style lang="less">
page {
  background-color: #fafafa;
}
.tx {
  padding: 50rpx 30rpx;
  background-color: #fff;
  margin-bottom: 20rpx;
  .tx-nr {
    image {
      width: 100rpx;
      height: 100rpx;
      border-radius: 20rpx;
    }
    p {
      font-size: 25rpx;
    }
  }
}
.items {
  .item {
    margin-top: 7rpx;
    padding: 20rpx 20rpx;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
  }
}
</style>
