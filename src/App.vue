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
    components: {
      NavBar
    },
    created() {

      /*每次刷新时校验登陆状态*/
      this.checkLogin()
      this.getVuex()
    },
    methods: {
      getVuex() {
        this.$store.state.t_name = window.localStorage.getItem('t_name')
        this.$store.state.t_picture = window.localStorage.getItem('t_picture')
        this.$store.state.t_id = window.localStorage.getItem('t_id')
      },

      /*登陆状态校验*/
      checkLogin() {
        this.$api.app.checkLogin().then(res => {
          this.$store.commit("setloginCode",res.code)
          res.code === 100 ? this.$store.commit("setShowOfUserBox", true) : this.$store.commit("setShowOfUserBox", false)
          console.log(res);
        }).catch(err => {
          this.$store.commit("setShowOfUserBox", false)
          console.log(err);
        })
      }
    }
  }
</script>

<style>
  @import "~element-ui/lib/theme-chalk/index.css";
  @import "assets/css/base.css";
  @import "assets/css/normalize.css";

  body {
    overflow-x: hidden;
    min-width: 1516px;
  }

  input::-webkit-input-placeholder {
    color: var(--color-title);
    text-align: center;
    line-height: normal;
  }

  input::-ms-input-placeholder {
    color: var(--color-title);
    text-align: center;
  }

  input::-moz-placeholder {
    color: var(--color-title) !important;
    line-height: 40px;
    /* Firefox 默认的 placeholder 有 opacity:0.4 属性 */
    text-align: center;
    opacity: 1;

  }

  .el-input__inner {
    border-color: var(--color-title);
  }

  .el-input__inner:hover {
    border-color: rgba(68, 87, 143, 0);
    box-shadow: 0 0 5px rgba(68, 87, 143, 0.5);
    transition: 0.1s ease;
  }

  .el-input.is-active .el-input__inner, .el-input__inner:focus {
    border-width: 2px;
    border-color: var(--color-title);
    box-shadow: 0 0 5px rgba(68, 87, 143, 0.5);
    outline: 0;
  }

  .el-button {
    background-color: var(--color-title);
    color: white;
    font-weight: bold;
    font-size: 20px;
  }

  .el-button:focus, .el-button:hover {
    color: var(--color-title);
    background-color: #fff;
    border-color: var(--color-title);
  }

</style>
