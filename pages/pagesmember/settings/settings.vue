<template>
  <view>
    <!-- <uni-nav-bar :border="false"  title="导航栏组件"></uni-nav-bar> -->
    <div class="conmt">
      <div class="head">
        <div class="head-top">
          <h2>会员中心</h2>
          <span class="iconfont icon-shezhi"></span>
        </div>
        <div class="head-cent">
          <img src="../../../static/img/huiyuan-toxiang.png" alt="" />
          <div class="head-zi">
            <p>13522566762</p>
            <div class="head-rz">
              <span></span>
              <h2>已认证</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="cont">
        <div class="cont-box">
          <div class="box-wai">
            <span>dwa</span>
          </div>
          <p>我的房屋</p>
        </div>
        <div class="cont-box">
          <div class="box-wai" style="background-color: #57b988">
            <span>adw</span>
          </div>
          <p>我的车辆</p>
        </div>
        <div class="cont-box">
          <div class="box-wai" style="background-color: #ee9a52">
            <span>ad</span>
          </div>
          <p>我的缴费</p>
        </div>
        <div class="cont-box">
          <div class="box-wai" style="background-color: #4f94f1">
            <span>dwa</span>
          </div>
          <p>家庭成员</p>
        </div>
      </div>
      <div class="botm">
        <div class="shezhi">
          <div class="sehzhi-box">
            <div class="box-left">
              <span>></span>
              <p>报修记录</p>
            </div>
            <span>></span>
          </div>
          <div class="sehzhi-box">
            <div class="box-left">
              <span>></span>
              <p>反馈记录</p>
            </div>
            <span>></span>
          </div>
          <div class="sehzhi-box">
            <div class="box-left">
              <span>></span>
              <p>联系物业</p>
            </div>
            <span>></span>
          </div>
          <div class="sehzhi-box">
            <div class="box-left">
              <span>></span>
              <p>账号设置</p>
            </div>
            <span>></span>
          </div>
        </div>
      </div>
      <div class="daohang">
        <div class="de-box">
          <div class="de">
            <span style="color: #3b85f6">dww</span>
          </div>
          <p style="color: #9cb2ee">主页</p>
        </div>
        <div class="de-box">
          <div class="de">
            <span>dww</span>
          </div>
          <p style="color: #9cb2ee">商店</p>
        </div>
        <div class="de-box">
          <div class="de">
            <span>dww</span>
          </div>
          <p style="color: #9cb2ee">消息</p>
        </div>
        <div class="de-box">
          <div class="de">
            <span>dww</span>
          </div>
          <p style="color: #9cb2ee">我的</p>
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
};
</script>

<style lang="less">
@import url("../../../static/css/huiyuan.less");
</style>
