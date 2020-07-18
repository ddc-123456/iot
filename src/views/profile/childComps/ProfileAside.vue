<template>
  <div id="profile-aside">
    <div class="img-box">
      <img :src="$url+ t_picture" alt="">
      <p>{{t_name}}</p>
    </div>
    <ul>
      <li>
        <router-link to="/profile/PersonalCourse"><span>我的课程</span></router-link>
      </li>
      <li>
        <router-link to="/profile/PersonalProfile"><span>个人信息</span></router-link>
      </li>
      <li>
        <router-link to="/profile/PersonalHomePage"><span>个人主页</span></router-link>
      </li>
      <li>
        <router-link to="/profile/PersonalPasswordManager"><span>密码管理</span></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "ProfileAside",
    data() {
      return {
        t_name: this.$store.state.t_name,
        t_picture: this.$store.state.t_picture
      }
    },
  }
</script>

<style scoped>
  #profile-aside {
    background-color: #fff;
    padding-bottom: 50px;
    margin-top: 50px;
  }

  .img-box {
    width: 100%;
    padding: 25px;
  }

  .img-box img {
    width: 100%;
    border: 5px solid #bebebe;
  }

  .img-box p {
    margin-top: 5px;
    text-align: center;
    font-weight: bold;
    font-size: 1.2em;
  }

  #profile-aside li {
    font-size: 17px;
    line-height: 35px;
    padding-left: 25px;
    padding-right: 25px;
    word-wrap: break-word;
    text-align: center;
  }

  #profile-aside li > span {
    cursor: pointer;
  }
</style>
