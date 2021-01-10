<template>
  <el-col :span="15" class="match-block">
    <block-header :title="'比赛资讯'"></block-header>
    <div class="match-content">
      <ul>
        <li v-for="item of home_matches" :key="item.match_title">
          <p class="match-text">{{item.match_title}}</p>
          <p class="match-date">{{item.match_time}}-7-1</p>
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
    },
    props: {
      home_matches: Array
    }
  }
</script>

<style lang="scss" scoped>
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
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: calc(100% - 100px);
      height: 1px;
      bottom: 7px;
      left: 5px;
      background-color: var(--color-title);
    }

  }
</style>
