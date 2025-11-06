<template>
  <view>
    <uni-nav-bar leftWidth="110rpx" rightWidth="110rpx" title="门店列表" @clickLeft="backIndex" />
    <div class="conmt">
      <div class="head">
        <div class="head-left">
          <input type="text" placeholder="搜索关键字" />
          <uni-icons class="biao" custom-prefix="iconfont" type="icon-sousuo" size="31rpx"></uni-icons>
        </div>
        <div class="head-reight">
          <input type="text" placeholder="搜索关键字" />
          <uni-icons class="biao" custom-prefix="iconfont" type="icon-shaixuan" size="31rpx"></uni-icons>
        </div>
      </div>
      <div class="conent">
        <div class="conent-box" @click="goStoredetails">
          <image src="/static/img/nr-xc.png" mode=""></image>
          <div class="con-zi">
            <h2>吉野家牛肉饭</h2>
            <p>美食 | 午饭</p>
            <div>查看详情</div>
          </div>
        </div>
      </div>
      <div class="conent">
        <div class="conent-box" @click="goStoredetails">
          <image src="/static/img/nr-xc.png" mode=""></image>
          <div class="con-zi">
            <h2>吉野家牛肉饭</h2>
            <p>美食 | 午饭</p>
            <div>查看详情</div>
          </div>
        </div>
      </div>
      <div class="conent">
        <div class="conent-box" @click="goStoredetails">
          <image src="/static/img/nr-xc.png" mode=""></image>
          <div class="con-zi">
            <h2>吉野家牛肉饭</h2>
            <p>美食 | 午饭</p>
            <div>查看详情</div>
          </div>
        </div>
      </div>
      <div class="conent">
        <div class="conent-box" @click="goStoredetails">
          <image src="/static/img/nr-xc.png" mode=""></image>
          <div class="con-zi">
            <h2>吉野家牛肉饭</h2>
            <p>美食 | 午饭</p>
            <div>查看详情</div>
          </div>
        </div>
      </div>
      <div class="conent">
        <div class="conent-box" @click="goStoredetails">
          <image src="/static/img/nr-xc.png" mode=""></image>
          <div class="con-zi">
            <h2>吉野家牛肉饭</h2>
            <p>美食 | 午饭</p>
            <div>查看详情</div>
          </div>
        </div>
      </div>
      <div class="conent">
        <div class="conent-box" @click="goStoredetails">
          <image src="/static/img/nr-xc.png" mode=""></image>
          <div class="con-zi">
            <h2>吉野家牛肉饭</h2>
            <p>美食 | 午饭</p>
            <div>查看详情</div>
          </div>
        </div>
      </div>
      <div class="conent">
        <div class="conent-box" @click="goStoredetails">
          <image src="/static/img/nr-xc.png" mode=""></image>
          <div class="con-zi">
            <h2>吉野家牛肉饭</h2>
            <p>美食 | 午饭</p>
            <div>查看详情</div>
          </div>
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
    goStoredetails() {
      uni.navigateTo({
        url: "/pages/pages/storedetails/storedetails",
      });
    },
  },
};
</script>

<style lang="less">
@import url(../../../static/css/storelist.less);
</style>
