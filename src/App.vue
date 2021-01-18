<template>
  <div id="app">
    <el-container>
      <el-header>
        <nav-bar></nav-bar>
      </el-header>
      <router-view></router-view>
      <!--    <button @click="btnClick">点击</button>-->
    </el-container>
  </div>
</template>

<script>

  import NavBar from "components/navbar/NavBar";


  export default {
    name: "App",
    data() {
      return {
        loading: false
      }
    },
    components: {
      NavBar
    },
    created() {
      this.getVuex();
    },

    methods: {
      getVuex() {
        this.$store.commit('setName', window.localStorage.getItem('t_name'))
        this.$store.commit('setIcon', window.localStorage.getItem('t_picture'))
        this.$store.commit('setId', window.localStorage.getItem('t_id'))
      },

      /*登陆状态校验*/
      async checkLogin() {
        console.log(this.$store.state.loginCode);
        this.loading = true
        await this.$api.app.checkLogin().then(res => {
          this.$store.commit("setloginCode", res.code)
          res.code === 100 ? this.$store.commit("setShowOfUserBox", true) : this.$store.commit("setShowOfUserBox", false)
          this.loading = false
        }).catch(err => {
          this.$store.commit("setShowOfUserBox", false)
          this.loading = false
          console.log(err);
        })
      }
    },
    watch: {
      '$route'(to, from) {
        this.checkLogin()
      }
    },
  }
</script>

<style>
  @import "~element-ui/lib/theme-chalk/index.css";
  @import "assets/css/base.css";
  @import "assets/css/normalize.css";

  body {
    overflow-x: hidden;
    min-width: 1061px;
  }


</style>
