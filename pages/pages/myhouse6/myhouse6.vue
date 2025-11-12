<template>
  <view>
    <uni-nav-bar leftWidth="110rpx" rightWidth="110rpx" left-icon="left" left-text="返回" title="房屋认证" />
    <div class="conmt">
      <div class="box">
        <image src="/static/img/微信图片_2025-11-05_165231_126.png" mode=""></image>
      </div>
      <div class="box-zi">
        <p class="zi">尊敬的{{ mobile }}用户</p>
        <p>您的房屋正在审核中...</p>
        <p>请等待社区管理人员审核!</p>
      </div>
    </div>
    <button @click="jup">查看房屋认证情况</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      module: null,
    };
  },
  onLoad(options) {
    this.mobile = options.mobile;
  },
  methods: {
    jup() {
      uni.navigateTo({
        url: "/pages/pages/myhouse5/myhouse5",
      });
    },
  },
};
</script>

<style lang="less">
@import url(../../../static/css/addmyhouse3.less);
</style>
