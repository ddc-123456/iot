<template>
  <div id="container">
    <el-row type="flex" justify="center">
      <el-col :span="10">

        <el-row class="content">
          <el-col :span="7">
            <span>旧密码：</span>
          </el-col>
          <el-col :span="17">
            <el-input v-model="pwd"/>
          </el-col>
        </el-row>

        <el-row class="content">
          <el-col :span="7">
            <span>新密码：</span>
          </el-col>
          <el-col :span="17">
            <el-input v-model="t_pwd"/>
          </el-col>
        </el-row>

        <el-row class="content">
          <el-col :span="7">
            <span>确认新密码：</span>
          </el-col>
          <el-col :span="17">
            <el-input v-model="t_pwd_check"/>
          </el-col>
        </el-row>

        <el-row class="content">

          <el-col :span="12">
            <el-button @click="toChangePassword"><p>确认</p></el-button>
          </el-col>
          <el-col :span="12">
            <el-button><p>取消</p></el-button>
          </el-col>

        </el-row>


      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "ProfileMainPassWordManager",
    data() {
      return {
        t_id: this.$store.state.t_id,
        pwd: '',
        t_pwd: '',
        t_pwd_check: ''
      }
    },
    methods: {
      toChangePassword() {
        if (this.t_pwd !== this.t_pwd_check) {
          this.$message({
            message: '两次密码不一样！',
            type: 'error'
          })
        } else if (this.t_pwd === '' || this.pwd === '') {
          this.$message.error('输入值为空！')
        } else this.$api.ProfileMainPassWordManager.toChangePassword(this.t_id, this.pwd, this.t_pwd).then(res => {
          switch (res.code) {
            case 200 :
              this.$message.success('修改成功')
              this.pwd = ''
              this.t_pwd = ''
              this.t_pwd_check = ''
              break;

            case 404 :
              this.$message.error('旧密码输入错误')
              break;

            default:
              this.$message.error('服务器未知错误')
              break;
          }
          console.log(res);
        }).catch(err => {
          this.$message.error('服务器未知错误')
        })
      }
    }
  }
</script>

<style scoped>
  #container {
    background-color: #fff;
    padding-bottom: 50px;
    margin-top: 30px;

  }

  .content {
    margin-top: 30px;
  }


  span {
    line-height: 40px;
  }

  .el-button {
    margin-left: 50px;
    font-size: 0.8em;
    font-weight: bold;
  }

</style>
