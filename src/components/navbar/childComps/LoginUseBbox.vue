<template>
  <div id="content">
    <el-row type="flex" justify="center">
      <el-dropdown @command="handleCommand">

        <el-col :span="12">
          <img :src="$url+$store.state.t_picture" alt="">
        </el-col>

        <el-col :span="12">
          <span>{{$store.state.t_name}}</span>
        </el-col>

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="personalCentre">个人中心</el-dropdown-item>
          <el-dropdown-item command="exit">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

    </el-row>
  </div>
</template>

<script>
  export default {
    name: "LoginUseBbox",
    data() {
      return {
        t_name: this.$store.state.t_name,
        t_picture: this.$store.state.t_picture
      }
    },
    methods: {
      handleCommand(command) {
        switch (command) {
          case 'personalCentre' :
            this.$router.push('/profile')
            break;

          case 'exit' :
            window.localStorage.setItem("token", '666') //token不能为空，不能为null
            this.$store.commit('setShowOfUserBox', false)
            this.$store.commit('setloginCode', 1)
            this.$message('用户：' + this.t_name + ' 已退出');
            this.$router.push('/login')
            break;
        }
      }
    }
  }
</script>

<style scoped>
  #content {
    z-index: 9;
  }

  img {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    vertical-align: middle;
  }

  span {
    float: left;
  }

  .el-dropdown {
    display: block;
    width: 100%;
  }

  p {
    width: 100%;
  }
</style>
