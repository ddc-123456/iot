<template>
  <div id="index">

    <!-- 轮播图 -->
    <my-swiper></my-swiper>

    <el-row class="row-top">
      <!-- 热点 -->
      <hot-port></hot-port>
      <!-- 通知&公告 -->
      <Notify></Notify>
    </el-row>

    <el-row class="row-bottom">
      <!-- 比赛资讯 -->
      <Match></Match>
      <!-- 学生活动 -->
      <Activity></Activity>
    </el-row>

    <!-- 学生风采 -->
    <el-row class="row-student">
      <block-header :title="'学生风采'"></block-header>
      <div class="student-container">
        <student-item></student-item>
        <student-item></student-item>
        <student-item></student-item>
        <student-item></student-item>
        <student-item></student-item>
        <student-item></student-item>
        <student-item></student-item>
        <student-item></student-item>
      </div>
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

  export default {
    name: "Index",
    data() {
      return {
        hotData: {}
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
    // created() {
    //   this.$api.index.getIndexData().then(res => {
    //     let data = res.data
    //     this.hotData = data
    //   })
    // }
  }
</script>

<style scoped>
  #index {
    width: 1024px;
    margin: 0 auto;
  }
  .row-top {
    height: 235px;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
  }
  .row-bottom {
    margin-top: 25px;
    height: 170px;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
  }
  /*学生风采*/
  .row-student {
    margin-top: 50px;
    padding: 0 20px;
  }
  .row-student .student-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 25px;
  }
  </style>
