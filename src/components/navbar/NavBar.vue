<template>
  <el-row
    id="nav-bar"
    v-if="isShow"
  >
    <!--left-->
    <el-col
      :span="5"
      class="grid-content grid-left"
    >
      <span>物联网应用技术专业</span>
    </el-col>
    <!--center-->
    <el-col
      :span="17"
      class="grid-content grid-center"
    >
      <router-link
        v-for="(item, index) in navBarArray"
        :to="item.path"
        :key="index"
        :class="{'router-link-active': activeIndex === index}"
      >
        <span>{{ item.title }}</span>
      </router-link>
    </el-col>
    <!--right-->
    <el-col
      :span="2"
      class="grid-content grid-right"
    >

      <login-use-bbox v-show="$store.state.isShowOfUserBox" />
      <p
        @click="toLogin"
        v-show="!$store.state.isShowOfUserBox"
      >登录</p>
    </el-col>
  </el-row>
</template>

<script>
import LoginUseBbox from "./childComps/LoginUseBbox";

export default {
  name: "NavBar",
  components: { LoginUseBbox },
  data () {
    return {
      activeIndex: 0,
      // 导航栏每项的标题及跳转路径
      navBarArray: [
        {
          title: '首页',
          path: '/index'
        },
        {
          title: '专业特色',
          path: '/feature'
        },
        {
          title: '师资风采',
          path: '/teacher'
        },
        {
          title: '教学文件',
          path: '/document'
        },
        {
          title: '新闻动态',
          path: '/news'
        },
        {
          title: '课程资源',
          path: '/course'
        },
        {
          title: '项目研发',
          path: '/project'
        },
        {
          title: '比赛资讯',
          path: '/match'
        },
        {
          title: '论坛天地',
          path: '/forum'
        },
        {
          title: '历届学子',
          path: '/student'
        }
      ],
      isShow: true,
    }
  },
  watch: {
    '$route' (to, from) {
      this.activeIndex = this.$route.name
      this.isShow = this.$route.name !== 11 && this.$route.name !== 'ChangeProfilePage' /*当处于login界面时，navBar不显示*/
    }
  },
  methods: {
    toLogin () {
      this.$router.push('/login')
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
#nav-bar {
  width: 80%;
  height: 60px;
  line-height: 60px;
  margin: 0 auto;
  overflow: hidden;
}

.grid-content {
  text-align: center;
}

.grid-left {
  color: #3ca59d;
  background-color: #fff;
}

.grid-left h2 {
  font-size: 20px;
}

.grid-center {
  display: flex;
  justify-content: space-around;
  height: 62px;
  background-color: var(--color-title-font);
}

.grid-center a {
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
}

.grid-center a:hover {
  /*border-bottom: solid var(--color-title) 3px;*/
  font-size: 20px;
  transition: 0.1s ease;
}

.grid-right {
  font-size: 12px;
  color: #000;
  background-color: #fff;
}

.grid-right i {
  margin-left: 10px;
}

.router-link-active {
  font-weight: bold;
  /*border-bottom: 10px solid var(--color-title);*/
  position: relative;
}

.router-link-active::after {
  position: absolute;
  content: "";
  bottom: 0;
  right: 0;
  width: 100%;
  height: 6px;
  background-color: var(--color-title);
}

.router-link-active span {
  font-size: 16px;
}

.grid-left span {
  font-size: 20px;
  font-weight: bold;
  color: var(--color-title-font);
}

.grid-right p {
  cursor: pointer;
}
</style>
