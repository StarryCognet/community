<template>
  <view>
    <uni-nav-bar :border="false" left-icon="left" left-text="返回" title="资讯"></uni-nav-bar>
    <view class="ss">
      <view class="left">
        <input style="margin-top: 25rpx" type="text" placeholder="搜索关键字" />
      </view>
      <view class="right">
        <uni-icons custom-prefix="iconfont" type="icon-sousuo" size="20"></uni-icons>
      </view>
    </view>
    <view class="item">
      <view class="item_left">
        <p>关于调整我行ATM跨行取现手</p>
        <p>续费收费标准的公示</p>
        <span>2021-07-23</span>
      </view>
      <view class="item_right">
        <image src="/static/img/list-t.png" mode=""></image>
      </view>
    </view>

    <view class="item" style="margin-top: 50rpx">
      <view class="item_left">
        <p>施辉:从固定成本率比较你家</p>
        <p>公司能挣钱吗?</p>
        <span>2021-11-01</span>
      </view>
      <view class="item_right">
        <image src="/static/img/list-t.png" mode=""></image>
      </view>
    </view>

    <view class="item" style="margin-top: 50rpx">
      <view class="item_left">
        <p>陈歆磊:从公牛电器被罚探讨</p>
        <p>转售价格限制</p>
        <span>2021-11-01</span>
      </view>
      <view class="item_right">
        <image src="/static/img/list-t.png" mode=""></image>
      </view>
    </view>

    <view class="item" style="margin-top: 50rpx">
      <view class="item_left">
        <p>关于调整我行ATM跨行取现手</p>
        <p>续费收费标准的公示</p>
        <span>2021-07-23</span>
      </view>
      <view class="item_right">
        <image src="/static/img/list-t.png" mode=""></image>
      </view>
    </view>

    <view class="item" style="margin-top: 50rpx">
      <view class="item_left">
        <p>施辉:从固定成本率比较你家</p>
        <p>公司能挣钱吗?</p>
        <span>2021-11-01</span>
      </view>
      <view class="item_right">
        <image src="/static/img/list-t.png" mode=""></image>
      </view>
    </view>

    <view class="item" style="margin-top: 50rpx">
      <view class="item_left">
        <p>陈歆磊:从公牛电器被罚探讨</p>
        <p>转售价格限制</p>
        <span>2021-11-01</span>
      </view>
      <view class="item_right">
        <image src="/static/img/list-t.png" mode=""></image>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less">
.ss {
  width: 90%;
  height: 80rpx;
  background-color: #f4f6f5;
  border-radius: 50rpx;
  margin: 0 auto;
  display: flex;
  margin-top: 20rpx;
  justify-content: space-between;
  .left {
    width: 500rpx;
    height: 100%;

    line-height: 100rpx;
    text-indent: 1em;
    input {
      font-size: 20rpx;
    }
  }
  .right {
    width: 70rpx;
    height: 50%;
    margin-top: 30rpx;
  }
}
.item {
  width: 90%;
  height: 180rpx;
  margin: 0 auto;
  margin-top: 70rpx;
  display: flex;
  .item_left {
    width: 60%;
    height: 100%;
    p {
      font-size: 28rpx;
    }
    span {
      font-size: 20rpx;
      color: #787878;
      display: inline-block;
      margin-top: 60rpx;
    }
  }
  .item_right {
    width: 40%;
    height: 100%;
    image {
      width: 93%;
      height: 100%;
      margin-left: 20rpx;
      border-radius: 10rpx;
    }
  }
}
</style>
