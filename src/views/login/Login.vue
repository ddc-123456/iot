<template>
  <div id="login">
    <el-container>
      <img src="" alt="">
      <el-main>
        <el-row type="flex" justify="center">
          <el-col :span="6">

            <el-row class="content-top" type="flex" justify="center">
              <el-col :span="12">
                <img src="~assets/img/logo.png" alt="">
              </el-col>
            </el-row>

            <!--账号框-->
            <el-row class="content">
              <el-col>
                <el-input v-model="t_id" placeholder="学号/工号"/>
              </el-col>
            </el-row>

            <!--密码框-->
            <el-row class="content">
              <el-col>
                <el-input v-model="t_pwd" placeholder="密码" show-password/>
              </el-col>
            </el-row>

            <!--功能框-->
            <el-row class="content">

              <!--登陆模式-->
              <el-col :span="9">
                <el-radio v-model="model" label="0">学生/教师登录</el-radio>
              </el-col>

              <el-col :span="10">
                <el-radio v-model="model" label="1">管理员登录</el-radio>
              </el-col>

              <!--忘记密码-->
              <el-col :span="5">
<!--                <small>忘记密码？</small>-->
              </el-col>

            </el-row>

            <!--登录按钮-->
            <el-row class="content content-bottom">
              <el-col>
                <el-button id="login-button" @click="login"><span>登录</span></el-button>
              </el-col>
            </el-row>

          </el-col>
        </el-row>
      </el-main>
      <el-footer><!--<img src="../../assets/img/line.png" alt="">--></el-footer>
    </el-container>
  </div>


</template>

<script>

  export default {
    name: "Login",
    data() {
      return {
        t_id: '12',
        t_pwd: '123',
        model: '0',
        autoLogin: {
          type: Boolean,
          default: false
        },
      }
    },
    mounted() {
      console.log('跳转到首页'+this.$store.state.loginCode);
      // this.$store.state.loginCode === 100 ? this.$router.push('/index') : null
    },
    methods: {
      login(t_id, t_pwd) {
        this.$api.login.login(this.t_id, this.t_pwd).then(res => {
          const token = res.token
          const t_name = res.t_name
          const t_picture = res.t_picture
          const t_id = res.t_id
          if (token == null) {
            alert("登陆失败！账号或密码错误")
          } else {

            this.$message({
              message: '登录成功！',
              type: 'success'
            })

            /*先把数据存到本地，然后vuex从本地读取*/
            window.localStorage.setItem('token', token)
            window.localStorage.setItem('t_name', t_name)
            window.localStorage.setItem('t_picture', t_picture)
            window.localStorage.setItem('t_id', t_id)

            this.$store.commit('setToken', token)
            this.$store.commit('setName', t_name)
            this.$store.commit('setIcon', t_picture)
            this.$store.commit('setId', t_id)
            this.$store.commit('setloginCode', res.code)

            this.$store.commit('setShowOfUserBox', true)

            this.$router.go(-1) /*跳转到上一浏览界面*/
          }
        }).catch(err => {
          this.$message({
            message: '用户名或密码错误',
            type: 'warning'
          })
        })
      }
    }

  }
</script>

<style scoped>

  #login {
    margin-top: 50px;
  }

  .content {
    margin-top: 30px;
  }

  .content-top img {
    width: 100%;
  }

  .content-bottom {
    margin-top: 50px;
  }

  #login-button {
    width: 100%;
  }

  .el-footer {
    position: absolute;
    bottom: 200px;
    padding: 0;
    z-index: -2;
  }

  img {
    width: 100%;
  }

  /deep/ input::-webkit-input-placeholder {
    color: var(--color-title);
    text-align: center;
  }

  /deep/ input::-ms-input-placeholder {
    color: var(--color-title);
    text-align: center;
  }


</style>
<style>
  #login input::-webkit-input-placeholder {
    color: var(--color-title);
    text-align: center;
    line-height: normal;
  }

  #login input::-ms-input-placeholder {
    color: var(--color-title);
    text-align: center;
  }

  #login input::-moz-placeholder {
    color: var(--color-title) !important;
    line-height: 40px;
    /* Firefox 默认的 placeholder 有 opacity:0.4 属性 */
    text-align: center;
    opacity: 1;

  }

  #login .el-input__inner {
    border-color: var(--color-title);
  }

  #login .el-input__inner:hover {
    border-color: rgba(68, 87, 143, 0);
    box-shadow: 0 0 5px rgba(68, 87, 143, 0.5);
    transition: 0.1s ease;
  }

  #login .el-input.is-active .el-input__inner, #login .el-input__inner:focus {
    border-width: 2px;
    border-color: var(--color-title);
    box-shadow: 0 0 5px rgba(68, 87, 143, 0.5);
    outline: 0;
  }

  #login .el-button {
    background-color: var(--color-title);
    color: white;
    font-weight: bold;
    font-size: 20px;
  }

  #login .el-button:focus, #login .el-button:hover {
    color: var(--color-title);
    background-color: #fff;
    border-color: var(--color-title);
  }

</style>
