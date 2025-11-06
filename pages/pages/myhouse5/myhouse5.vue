<template>
  <view>
    <uni-nav-bar leftWidth="110rpx" rightWidth="110rpx" left-icon="left" left-text="返回" @clickLeft="backIndex" title="房屋认证" />
    <div class="conmt">
      <div class="box">
        <uni-icons class="biao" style="color: #fff" custom-prefix="iconfont" type="icon-duihao" size="60rpx"></uni-icons>
      </div>
      <div class="box-zi">
        <p>恭喜你，操作成功!</p>
        <p class="zi">李晓彬</p>
        <p>你的门牌号是:1栋1单元102</p>
        <p>等待物业审核!</p>
      </div>
    </div>
    <button @click="gohome">返回首页</button>
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
    gohome() {
      uni.switchTab({
        url: "/pages/pages/home/home",
      });
    },
  },
};
</script>

<style lang="less">
@import url(../../../static/css/addmyhouse2.less);
</style>
