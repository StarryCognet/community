<template>
  <view>
    <uni-nav-bar leftWidth="110rpx" rightWidth="110rpx" :border="false" left-icon="left" @clickLeft="backIndex" left-text="返回" title="添加车辆" />
    <div class="conmt">
      <img src="../../../static/img/myvehicle.png" alt="" />
      <input type="text" placeholder="请输入车牌号" name="" id="" />
      <button @click="backIndex">添加</button>
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
  },
};
</script>

<style lang="less">
@import url(../../../static/css/addvehicle.less);
</style>
