<template>
  <el-col :span="15" class="hot-block">
    <block-header :title="'热点'"></block-header>
    <el-row class="hot-content">
      <el-col :span="10" class="hot-left">
        <img src="~assets/img/kaws.jpg">
      </el-col>
      <el-col :span="10" class="hot-right">
        <ul>
          <li>
            <p class="hot-text">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            <p class="hot-date">2020-7-1</p>
          </li>
          <li>
            <p class="hot-text">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            <p class="hot-date">2020-7-1</p>
          </li>
          <li>
            <p class="hot-text">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            <p class="hot-date">2020-7-1</p>
          </li>
          <li>
            <p class="hot-text">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            <p class="hot-date">2020-7-1</p>
          </li>
        </ul>
      </el-col>
    </el-row>
  </el-col>
</template>

<script>
  import BlockHeader from "../blockheader/BlockHeader"
  export default {
    name: "HotPort",
    components: {
      BlockHeader
    }
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
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .hot-block .hot-right .hot-date {
    font-size: 10px;
    display: flex;
    justify-content: flex-end;
  }
</style>
