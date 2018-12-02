<template>
  <div class="login-container" style="background-color: #141a48;margin: 0px;overflow: hidden;">
    <div id="canvascontainer" ref='can'></div>
    <Form ref="loginForm" autoComplete="on" :model="loginForm" :rules="loginRules"  class="card-box login-form">
      <Form-item prop="email">
        <Input type="text" v-model="loginForm.email" placeholder="Username" autoComplete="on">
          <Icon type="ios-person-outline" slot="prepend" ></Icon>
        </Input>
      </Form-item>
      <Form-item prop="password">
        <Input type="password" v-model="loginForm.password" placeholder="Password" @keyup.enter.native="handleLogin">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </Form-item>
      <Form-item>
      <Button type="primary" @click="handleLogin('loginForm')" long>登录</Button>
      </Form-item>
      <div class='tips'>admin账号为:admin@wz.com 密码123456</div>
      <div class='tips'>editor账号:editor@wz.com 密码123456</div>
    </Form>
  </div>
</template>

<script>
import { isWscnEmail } from 'utils/validate'

export default {
  name: 'login',
  data () {
    const validateEmail = (rule, value, callback) => {
      if (!isWscnEmail(value)) {
        callback(new Error('请输入正确的合法邮箱'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能小于6位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        email: 'admin@wz.com',
        password: ''
      },
      loginRules: {
        email: [
          { required: true, trigger: 'blur', validator: validateEmail }
        ],
        password: [
          { required: true, trigger: 'blur', validator: validatePass }
        ]
      }
    }
  },
  mounted () {
  },
  methods: {
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        this.$Message.success('登录成功')

        if (valid) {
          this.loading = true
          this.$store.dispatch('LoginByEmail', this.loginForm).then(() => {
            alert(6)

            this.$Message.success('登录成功')
            this.loading = false
            this.$router.push({ path: '/' })
          }).catch(err => {
            this.$message.error(err)
            this.loading = false
          })
        } else {
          this.$message.error('error submit!!')
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style>
.login-container a{color:#0078de;}
#canvascontainer{
  position: absolute;
  top: 0px;
}
</style>

<style rel="stylesheet/scss" lang="scss">
.tips{
  font-size: 14px;
  color: #fff;
  margin-bottom: 5px;
}

.login-container {
  height: 100vh;
  background-color: #2d3a4b;
  input {
    background: transparent;
    border: 1px solid #2d8cf0;
    -webkit-appearance: none;
    border-radius: 3px;
    padding: 12px 5px 12px 15px;
    color: #eeeeee;
    height: 47px;
  }
}
.login-form {
  position: absolute;
  left: 0;
  right: 0;
  width: 400px;
  padding: 35px 35px 15px 35px;
  margin: 120px auto;
}
</style>
