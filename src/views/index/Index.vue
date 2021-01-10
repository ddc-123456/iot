<template>
  <div id="index">

    <!-- 轮播图 -->
    <my-swiper class="slideDown" :home_swipers="home_swipers"></my-swiper>

    <el-row class="row-top slideDown" type="flex" justify="space-between">
      <!-- 热点 -->
      <hot-port :hotPoint="hotPoint"></hot-port>
      <!-- 通知&公告 -->
      <Notify :home_notices="home_notices"></Notify>
    </el-row>

    <el-row class="row-bottom slideDown" type="flex" justify="space-between">
      <!-- 比赛资讯 -->
      <Match class="slideDown" :home_matches="home_matches"></Match>
      <!-- 学生活动 -->
      <Activity class="slideDown" :home_activities="home_activities"></Activity>
    </el-row>

    <!-- 学生风采 -->
    <el-row class="row-student" type="flex" justify="space-between">
      <el-col>
        <block-header :title="'学生风采'"></block-header>
        <div class="student-container" ref="stu_container">
          <student-item class="student-item"
                        :class="'student-item'+index"
                        v-for="(item,index) of home_students"
                        :key="item.stu_name"
                        :home_students="item"></student-item>

        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>

  import MySwiper from './swiper/MySwiper'
  import BlockHeader from "./blockheader/BlockHeader"
  import HotPort from "./hotport/HotPort"
  import Notify from "./notify/Notify"
  import Match from "./match/Match"
  import Activity from "./activity/Activity"
  import StudentItem from "./studentitem/StudentItem"

  import {scrollToListener} from '../../common/utils'

  export default {
    name: "Index",
    data() {
      return {
        idxData: {},
        hotPoint: [],
        home_notices: [],
        home_matches: [],
        home_activities: [],
        home_students: [],
        home_swipers: []
      }
    },
    components: {
      MySwiper,
      BlockHeader,
      HotPort,
      Notify,
      Match,
      Activity,
      StudentItem
    },
    mounted() {
      this.getIndexData();
      this.animeInit();
      this.ifScrollToStudent();
    },
    methods: {
      animeInit() {
        this.$anime(
          {
            targets: ['.slideDown'],
            translateY: [-50, 0],
            opacity: [0, 1],
            delay: this.$anime.stagger(100)
          }
        )
      },

      /*学生风采第一次展示时动画*/
      ifScrollToStudent() {
        scrollToListener(document.getElementsByClassName('student-container')[0], e => {
          if (e) {
            this.$anime({
              targets: ['.student-item'],
              translateY: [-50, 0],
              opacity: [0, 1],
              delay: this.$anime.stagger(100)
            })
          }
        })
      },

      /*获取首页的数据*/
      getIndexData() {
        this.$api.index.getIndexData()
          .then(res => {
            this.idxData = res;

            const {
              home_hots,
              home_notices,
              home_matches,
              home_activities,
              home_students, home_swipers
            } = res;

            this.hotPoint = home_hots.slice(0, 3);
            this.home_notices = home_notices.slice(0, 4);
            this.home_matches = home_matches.slice(0, 3);
            this.home_activities = home_activities.slice(0, 3);
            this.home_students = home_students.slice(0, 8);
            this.home_swipers = home_swipers.slice(0, 3);
          });
      }
    }

    // created() {
    //   this.$api.index.getIndexData().then(res => {
    //     let data = res.data
    //     this.hotData = data
    //   })
    // }
  }
</script>

<style lang="scss" scoped>
  #index {
    width: 1024px;
    margin: 0 auto;
  }

  .row-top {
    height: 235px;
    margin-top: 40px;

  }

  .row-bottom {
    margin-top: 25px;
    height: 170px;
  }

  /*学生风采*/
  .row-student {
    margin-top: 25px;
    /*padding: 0 20px;*/
  }

  .row-student .student-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 25px;
  }

  @for $i from 0 through 8 {
    .student-item#{$i} {
      @if $i % 2 == 0 {
        margin-top: 20px;
      }
    }
  }

</style>
