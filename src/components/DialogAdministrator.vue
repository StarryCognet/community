<template>
  <el-dialog title="提示" :visible="dialogVisible" width="30%" :before-close="handleClose">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
      <el-form-item label="账号" prop="username" placeholder="请输入账号">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass" placeholder="请输入密码">
        <el-input v-model="ruleForm.pass"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="repass" placeholder="请再次输入密码">
        <el-input v-model="ruleForm.repass"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name" placeholder="请输入姓名">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="联系方式" prop="tel" placeholder="请输入联系方式">
        <el-input v-model="ruleForm.tel"></el-input>
      </el-form-item>
      <el-form-item label="角色" prop="typeid">
        <el-select v-model="ruleForm.region" placeholder="请选择角色">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="handleSubmit('ruleForm')">确 定</el-button>
      <el-button @click="handleCancel">取 消</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'DialogAdministrator',
  props: {
    dialogVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    var validateUsername = (rule, value, callback) => {
      let reg = /^[\u4e00-\u9fa5a-zA-Z][\u4e00-\u9fa5a-zA-Z0-9_.-]{1,15}$/
      if (!reg.test(value)) {
        return callback(new Error('账号支持中文，字母不能以数字开头2-16位'))
      }
      callback()
    }
    var validatePass = (rule, value, callback) => {
      let reg = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
      if (!reg.test(value)) {
        return callback(new Error('密码长度6-16位，包含数字、大小写字母、特殊字符'))
      }
      callback()
    }
    var validaterePass = (rule, value, callback) => {
      if (value !== this.ruleForm.pass) {
        return callback(new Error('两次密码不一致'))
      }
      callback()
    }
    var validateTel = (rule, value, callback) => {
      let reg = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/
      if (!reg.test(value)) {
        return callback(new Error('手机号码格式不正确'))
      }
      callback()
    }
    return {
      ruleForm: {
        name: '',
        region: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { validator: validateUsername, trigger: 'blur' },
        ],
        pass: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' },
        ],
        repass: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { validator: validaterePass, trigger: 'blur' },
        ],
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          // { validator: validaterePass, trigger: 'blur' },
        ],
        tel: [
          { required: true, message: '请输入联系方式', trigger: 'blur' },
          { validator: validateTel, trigger: 'blur' },
        ],
        typeid: [{ required: true, message: '请选择角色', trigger: 'change' }],
      },
    }
  },
  methods: {
    handleSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.handleCancel()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handleCancel() {
      this.$emit('handleCancel', false)
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(() => {
          this.handleCancel()
          done()
        })
        .catch(() => {})
    },
  },
}
</script>

<!-- <style lang="less" scoped></style> -->
