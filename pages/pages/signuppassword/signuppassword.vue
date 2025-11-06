<template>
  <view>
    <uni-nav-bar
      leftWidth="110rpx"
      rightWidth="110rpx"
      :border="false"
      style="position: relative; z-index: 2"
      color="#fff"
      background-color="transparent"
      left-icon="left"
      title="用户注册"
    ></uni-nav-bar>
    <image class="bgi" src="/static/img/bgi.png" mode=""></image>
    <view class="content">
      <!-- 			<view class="content-login">
				<span></span>
				<h2>验证码登录</h2>
				<span>密码登录</span>
			</view> -->
      <view class="content-input">
        <input type="text" placeholder="请输入手机号" />
        <input type="text" placeholder="请输入验证码" />
        <!-- <span>获取验证码</span> -->
      </view>
    </view>
    <view>
      <label class="radio">
        <radio value="" />
        <text>
          我已阅读并同意
          <span>《用户使用协议》</span>
          和
          <span>《隐私政策》</span>
        </text>
      </label>
    </view>
    <button>确定提交</button>
    <!-- <p>没有账号，立即注册</p> -->
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
page {
  background-color: #f4f4f4;
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
  margin-top: 200rpx;
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
      padding: 30rpx 0;
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
.radio {
  margin: 0 30rpx;
  text {
    font-size: 25rpx;
    span {
      color: #42b1ff;
    }
  }
}
</style>
