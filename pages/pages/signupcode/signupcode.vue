<template>
	<view>
		<uni-nav-bar
			leftWidth="110rpx"
			:border="false"
			style="position: relative; z-index: 2"
			color="#fff"
			@clickLeft="backIndex"
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
			<view class="content-input" v-if="!isNqxt">
				<input v-model="form.mobile" type="text" placeholder="请输入手机号" />
				<input v-model="form.code" type="text" placeholder="请输入验证码" />
				<span v-show="!isTime" @tap="send">获取验证码</span>
				<span v-show="isTime">{{ time }}s</span>
			</view>
			<view class="content-input" v-else>
				<input type="text" v-model="form.pass" placeholder="请输入至少6位，包含大小写字母、特殊字符的密码" />
				<input v-model="form.repass" type="text" class="input_Pass" placeholder="请再次输入密码" />
			</view>
		</view>
		<view>
			<label class="radio" @click="isAgred = !isAgred">
				<radio value="" />
				<text>
					我已阅读并同意
					<span>《用户使用协议》</span>
					和
					<span>《隐私政策》</span>
				</text>
			</label>
		</view>
		<button v-if="!isNqxt" type="primary" @click="handleNext" style="background-color: #49a2f7; width: 500rpx; border-radius: 100rpx">下一步</button>
		<button v-else type="primary" @click="handleReg" style="background-color: #49a2f7; width: 500rpx; border-radius: 100rpx">提交</button>
	</view>
</template>

<script>
import store from '@/store/index.js'; //需要引入store
import { sendcode, regByCode, reg } from '@/apis/index.js';
import { checkMobile, checkCode, checkPass } from '@/utils/verify.js';
import { error, success } from '@/utils/common.js';
export default {
	data() {
		return {
			form: {
				mobile: '13000000001'
			},
			isTime: false, //是否开启计时器
			time: 10,
			timer: null,
			isAgred: false,
			isNqxt: false
		};
	},
	methods: {
		async handleNext() {
			if (!checkMobile(this.form.mobile)) return error('请输入正确的手机号');
			if (!checkCode(this.form.code)) return error('请输入正确的验证码');
			if (!this.isAgred) return error('请勾选协议');
			await regByCode(this.form);
			this.isNqxt = true;
		},
		async handleReg() {
			if (!checkPass(this.form.pass)) return error('密码格式不正确');
			if (this.form.repass != this.form.pass) return error('两次密码不一致');
			if (!this.isAgred) return error('请勾选协议');
			delete this.form.repass;
			delete this.form.code;
			let res = await reg(this.form);
		},
		async send() {
			if (!checkMobile(this.form.mobile)) return error('请输入正确的手机号');
			await sendcode({ mobile: this.form.mobile });
			success('发送成功');
			this.isTime = true;

			this.timer = setInterval(() => {
				this.time--;
				if (this.time <= 0) {
					this.handleReset();
				}
			}, 1000);
		},
		handleReset() {
			this.isTime = false;
			this.time = 10;
			clearInterval(this.timer);
		},
		jup() {
			uni.navigateTo({
				url: '/pages/pages/signuppassword/signuppassword'
			});
		}
	},
	beforeDestroy() {
		this.handleReset();
	},
	backIndex() {
		const pages = getCurrentPages();
		uni.navigateBack();
	}
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
		font-size: 10rpx !important;
		span {
			color: #42b1ff;
		}
	}
}
</style>
