<template>
  <view class="bigbox">
    <view class="title" style="display: flex; justify-content: space-between; color: white; padding-top: 100rpx">
      <view class="left">
        <uni-icons custom-prefix="iconfont" type="icon-xiangzuojiantou" style="font-size: 35rpx; margin-left: 10rpx; color: white" size="10"></uni-icons>
      </view>
      <view class="cton" style="display: flex; justify-content: center">登录</view>
      <view class="right"></view>
    </view>
    <!-- <image class="bgi" src="/static/image/loging.png" mode=""></image> -->
    <view class="content" style="height: 320rpx">
      <view class="content-login">
        <span></span>
        <h2>{{ isCodeLogin ? "验证码登录" : "密码登录" }}</h2>
        <span @click="isCodeLogin = !isCodeLogin">{{ isCodeLogin ? "密码登录" : "验证码登录" }}</span>
      </view>
      <view v-show="isCodeLogin" class="content-input">
        <view class="">
          <input type="text" v-model="form.mobile" placeholder="请输入手机号" />
        </view>
        <view class="" style="display: flex; align-items: center; height: 100rpx">
          <input type="text" v-model="form.code" placeholder="请输入验证码" />
          <span v-show="!isTime" style="display: flex; align-items: center" @tap="send">获取验证码</span>
          <span v-show="isTime" style="display: flex; align-items: center">{{ time }}s</span>
        </view>
      </view>

      <view v-show="!isCodeLogin" class="content-input">
        <view class="">
          <input type="text" v-model="form.mobile" placeholder="请输入手机号" />
        </view>
        <view class="" style="display: flex; align-items: center; height: 100rpx">
          <input type="text" v-model="form.pass" placeholder="请输入密码" />
        </view>
      </view>
    </view>
    <button style="font-size: 30rpx" @click="handleLogin">登录</button>
    <p @click="jup2">没有账号，立即注册</p>
  </view>
</template>

<script>
import store from "@/store/index.js"; //需要引入store
import { sendcode, loginByCode, login } from "@/apis/index.js";
import { checkMobile, checkCode } from "@/utils/verify.js";
import { error, success } from "@/utils/common.js";
export default {
  data() {
    return {
      isCodeLogin: true,
      form: {
        mobile: "13000000001",
      },
      isTime: false, //是否开启计时器
      time: 10,
      timer: null,
    };
  },
  methods: {
    async handleLogin() {
      if (!checkMobile(this.form.mobile)) return error("请输入正确的手机号");
      let loages;

      if (this.isCodeLogin) {
        delete this.form.pass;
        if (!checkCode(this.form.code)) return error("请输入正确的验证码");
        loages = await loginByCode(this.form);
        success("注册成功");
      } else {
        delete this.form.code;
        if (!this.form.pass) return error("请输入正确的密码");

        loages = await login(this.form);
      }
      store.commit("setbuildingState", loages.data.buildingState);
      store.commit("setbuildings", loages.data.buildings);
      store.commit("setmember", loages.data.member);
      store.commit("settoken", loages.data.token);
      success("登录成功");
      if (loages.data.buildingState == 0 && !loages.data.buildings.length) {
        this.$common.go("/pages/pages/myhouse/myhouse");
      }
      if (loages.data.buildingState == 1 && !loages.data.buildings.length) {
        this.$common.go("/pages/pages/myhouse6/myhouse6?mobile=" + this.form.mobile);
      }
      if (loages.data.buildingState == 2) {
        this.$common.go("/pages/pages/home/home");
      }
    },
    async send() {
      // this.$common.go("/pages/pages/home/home");
      if (!checkMobile(this.form.mobile)) return error("请输入正确的手机号");
      await sendcode({ mobile: this.form.mobile });
      success("发送成功");
      this.isTime = true;
      this.timer = setInterval(() => {
        this.time--;
        if (this.time <= 0) {
          this.handleReset();
        }
      }, 1000);
      // console.log(res);
      // console.log(this.form.mobile);
    },
    jup2() {
      uni.navigateTo({
        url: "/pages/pages/signuppassword/signuppassword",
      });
    },
    jup3() {
      uni.navigateTo({
        url: "/pages/pages/pass/pass",
      });
    },
    jup4() {
      uni.switchTab({
        url: "/pages/pages/home/home",
      });
    },
    handleReset() {
      this.isTime = false;
      this.time = 10;
      clearInterval(this.timer);
    },

    beforeDestroy() {
      this.handleReset();
    },
  },
};
</script>

<style lang="less">
page {
  background-color: #f4f4f4;
}

.bigbox {
  background-image: url(/static/img/bg.png);
  background-repeat: no-repeat;
  background-position: center top;
  /* 水平+垂直居中（最常用）*/
  background-size: 100% 380rpx;
  // background-color: #f9f9f9;
  // height: 140vh;
}

.bgi {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  height: 500rpx;
  z-index: 1;
}

.content {
  // border: 1px solid #000;
  position: relative;
  z-index: 2;
  background-color: #fff;
  margin: 20rpx;
  margin-top: 60rpx;
  border-radius: 15rpx;
  padding: 30rpx;

  .content-login {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30rpx 0rpx;
    padding-bottom: 50rpx;

    h2 {
      font-size: 35rpx;
    }

    span {
      width: 150rpx;
      font-size: 26rpx;
      font-weight: 800;
    }
  }

  .content-input {
    position: relative;

    input {
      height: 80RPX;
      padding-left: 30rpx;
      padding-right: 30rpx;
      font-size: 32rpx;
      color: #c5c5c5;
    }

    input:nth-child(1) {
      border-bottom: 1px solid #f5f5f5;
    }

    span {
      position: absolute;
      right: 0;
      bottom: 30rpx;
      font-size: 28rpx;
      color: #2275bd;
    }
  }
}

button {
  background-color: #39abf7;
  color: #fff;
  border-radius: 50rpx;
  margin: 80rpx 150rpx;
}

p {
  text-align: center;
}
</style>
