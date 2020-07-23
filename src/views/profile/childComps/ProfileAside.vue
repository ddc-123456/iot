<template>
  <div id="profile-aside">
    <div class="img-box">
      <img :src="$url+ t_picture" alt="" @click="dialogVisible = true">
      <p>{{t_name}}</p>
    </div>
    <ul>
      <li>
        <router-link to="/profile/PersonalCourse" :class="{'active':activeIndex === 'PersonalCourse'}"><span>我的课程</span>
        </router-link>
      </li>
      <li>
        <router-link to="/profile/PersonalProfile" :class="{'active':activeIndex === 'PersonalProfile'}">
          <span>个人信息</span></router-link>
      </li>
      <li>
        <router-link to="/profile/PersonalHomePage" :class="{'active':activeIndex === 'PersonalHomePage'}">
          <span>个人主页</span>
        </router-link>
      </li>
      <li>
        <router-link to="/profile/PersonalPasswordManager"
                     :class="{'active':activeIndex === 'PersonalPasswordManager'}"><span>密码管理</span>
        </router-link>
      </li>
    </ul>

    <el-dialog
      title="修改头像"
      :visible.sync="dialogVisible"
      width="60%"
      :before-close="handleClose">
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "ProfileAside",
    data() {
      return {
        t_name: this.$store.state.t_name,
        t_picture: this.$store.state.t_picture,
        activeIndex: 'PersonalCourse',
        dialogVisible: false
      }
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
      }
    },
    watch: {
      '$route'(to, from) {
        this.activeIndex = this.$route.name
      }
    }
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

  .active {
    color: var(--color-title);
  }
</style>
