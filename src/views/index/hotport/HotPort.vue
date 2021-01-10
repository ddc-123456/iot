<template>
  <el-col :span="15" class="hot-block">
    <block-header :title="'热点'"></block-header>
    <el-row class="hot-content">
      <el-col :span="10" class="hot-left">
        <img src="~assets/img/kaws.jpg">
      </el-col>
      <el-col :span="10" class="hot-right">
        <ul class="hot-ul">
          <li v-for="item of hotPoint" :key="item.hot_title">
            <p class="hot-text">{{item.hot_title}}</p>
            <p class="hot-date">{{item.hot_time}}</p>
          </li>

        </ul>
      </el-col>
    </el-row>
  </el-col>
</template>

<script>
  import BlockHeader from "../blockheader/BlockHeader";

  export default {
    name: "HotPort",
    components: {
      BlockHeader
    },
    props: {
      hotPoint:Array,
    },
    mounted() {

    },
    methods: {}
  }
</script>

<style scoped>
  /*热点*/
  .hot-block {
    height: 100%;
  }

  .hot-block .hot-content {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 0 25px;
  }

  .hot-block .hot-left {
    width: 50%;
  }

  .hot-block .hot-left img {
    width: 275px;
    height: 155px;
  }

  .hot-block .hot-right {
    width: 50%;
  }

  .hot-block .hot-right .hot-text {
    margin-bottom: 2px;
    height: 37px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .hot-block .hot-right .hot-date {
    font-size: 10px;
    display: flex;
    justify-content: flex-end;
    position: relative;
  }

  .hot-block .hot-right .hot-date::after{
    content: '';
    position: absolute;
    width: calc(100% - 80px);
    height: 1px;
    bottom: 7px;
    left: 5px;
    background-color: var(--color-title);
  }
</style>
