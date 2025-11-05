<template>
  <view>
    <uni-nav-bar :border="false" left-icon="left" left-text="返回" title="添加居民" />
    <div class="conmt">
      <div class="conmt-text">
        <p>居民信息</p>
      </div>
      <div class="conent">
        <div class="conent-te">
          <span>楼栋房号</span>
          <div class="box">
            <span>请选择楼栋信息</span>
            <uni-icons class="biao" custom-prefix="iconfont" type="icon-youjiantou" size="18"></uni-icons>
          </div>
        </div>
        <div class="conent-te">
          <span>姓名</span>
          <div class="box">
            <span class="zi">请填写姓名</span>
          </div>
        </div>
        <div class="conent-te">
          <span>身份证号</span>
          <div class="box">
            <span>请填写身份证号</span>
          </div>
        </div>
        <div class="conent-te">
          <span>性别</span>
          <div class="box">
            <span>请选择性别</span>
            <uni-icons class="biao" custom-prefix="iconfont" type="icon-youjiantou" size="18"></uni-icons>
          </div>
        </div>
        <div class="conent-te">
          <span>联系电话</span>
          <div class="box">
            <span>请填写联系电话</span>
          </div>
        </div>
        <button>提交</button>
      </div>
    </div>
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
@import url(../../../static/css/addmember.less);
</style>
