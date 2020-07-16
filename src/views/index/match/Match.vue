<template>
  <el-col :span="15" class="match-block">
    <block-header :title="'比赛资讯'"></block-header>
    <div class="match-content">
      <ul>
        <li>
          <p class="match-text">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          <p class="match-date">2020-7-1</p>
        </li>
        <li>
          <p class="match-text">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          <p class="match-date">2020-7-1</p>
        </li>
        <li>
          <p class="match-text">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          <p class="match-date">2020-7-1</p>
        </li>
      </ul>
    </div>
  </el-col>
</template>

<script>
  import BlockHeader from "../blockheader/BlockHeader"
  export default {
    name: "Match",
    components: {
      BlockHeader
    }
  }
</script>

<style scoped>
  /*比赛资讯*/
  .match-block {
    height: 100%;
  }
  .match-block .match-content {
    height: 135px;
    padding: 15px 25px;
    background-color: white;
  }
  .match-block .match-content ul li {
    margin-bottom: 10px;
  }
  .match-block .match-content .match-text {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .match-block .match-content .match-date {
    font-size: 10px;
    display: flex;
    justify-content: flex-end;
  }
</style>
