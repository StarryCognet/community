<template>
    <div class="container">
        <header>
            <img class="logo" src="@/assets/images/logo.jpg" alt="">
        </header>
        <div class="main-continer">
            <main>
                <article>
                    <img class="banner" src="@/assets/images/banner.jpg" alt="">
                </article>
                <aside>
                    <div class="loginform">
                        <div class="qrcode">
                            <img src="@/assets/images/code.jpg" alt="">
                        </div>
                        <h2>账号登录</h2>
                        <el-form :model="form" :rules="rules" ref="ruleForm">
                            <el-form-item prop="username">
                                <el-input placeholder="请输入账号" prefix-icon="el-icon-user" v-model="form.username">
                                </el-input>
                            </el-form-item>
                            <el-form-item prop="pass">
                                <el-input placeholder="请输入密码" prefix-icon="el-icon-lock" show-password
                                    v-model="form.pass">
                                </el-input>
                            </el-form-item>
                            <el-form-item prop="verifyCode">
                                <el-input class="code-input" placeholder="请输入验证码" v-model="form.verifyCode">
                                </el-input>
                                <el-image class="code-img" @click="changeImage" :src="imageCode">
                                    <div slot="placeholder" class="image-slot">
                                        加载中<span class="dot">...</span>
                                    </div>
                                </el-image>
                            </el-form-item>
                            <el-form-item class="forget-pwd">
                                忘记密码?
                            </el-form-item>

                        </el-form>
                        <div>
                            <el-button class="loginbtn" type="primary" @click="submitForm('ruleForm')">{{ isLogining ?
                                '正在登录...' : '登录' }}</el-button>
                        </div>
                    </div>
                </aside>
            </main>
        </div>
        <footer>
            <div>
                北京乐宁科技@2023 京ICP备17033472号-4
            </div>
        </footer>
    </div>
</template>

<script>
import { authCode, checkloginByCode } from '@/api/administrator'
export default {

    name: 'LoginView',
    data() {
        return {
            form: {
                username: null,
                pass: null,
                verifyCode: null
            },
            imageCode: '',
            imageToken: null,
            rules: {
                uesrname: [
                    { required: true, message: '请输入账号', trigger: 'blur' },
                ],
                pass: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                ],
                verifyCode: [
                    { required: true, message: '请输入验证码', trigger: 'blur' },
                ]
            },
            isLogining: false,

        }
    },
    created() {
        this.getauthCode()
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(async(valid) => {
                if (valid) {
                    this.isLogining = true
                    // 请求api
                    this.form.token = this.imageToken
                    let logininfo=await this.login()
                    this.$store.dispatch('loginAsync', logininfo)

                    // 跳转
                    this.$router.push('/home');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },

        async login() {
            let {data} = await checkloginByCode(this.form);
            // 将token保存到localStorage中
            localStorage.setItem('token', data.token);
            return data;
        },
        async getauthCode() {
            let { imageCode, token } = await authCode()
            this.imageCode = imageCode,
                this.imageToken = token;

        },
        changeImage() {
            this.getauthCode()
        }
    }

}
</script>
<style lang="less">
@import "../assets/css/login.less";
</style>
