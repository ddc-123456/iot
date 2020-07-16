<template>
  <el-col :span="7" class="activity-block">
    <block-header :title="'学生活动'"></block-header>
    <div class="activity-content">
      <ul>
        <li>
          <p class="activity-text">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          <p class="activity-date">2020-7-1</p>
        </li>
        <li>
          <p class="activity-text">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          <p class="activity-date">2020-7-1</p>
        </li>
        <li>
          <p class="activity-text">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          <p class="activity-date">2020-7-1</p>
        </li>
      </ul>
    </div>
  </el-col>
</template>

<script>
  import BlockHeader from "../blockheader/BlockHeader"
  export default {
    name: "Activity",
    components: {
      BlockHeader
    }
  }
</script>

<style scoped>
  /*学生活动*/
  .activity-block {
    height: 100%;
  }
  .activity-block .activity-content {
    height: 200px;
    padding: 10px;
    background-color: white;
  }
  .activity-block .activity-content ul li {
    margin-bottom: 16px;
  }
  .activity-block .activity-content .activity-text {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .activity-block .activity-content .activity-date {
    font-size: 10px;
    display: flex;
    justify-content: flex-end;
  }
</style>
