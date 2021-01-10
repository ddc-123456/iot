<template>
  <el-col :span="7" class="activity-block">
    <block-header :title="'学生活动'"></block-header>
    <div class="activity-content">
      <ul>
        <li v-for="item of home_activities" :key="item.activity_title">
          <p class="activity-text">{{item.activity_title}}</p>
          <p class="activity-date">{{item.activity_time}}</p>
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
    },
    props:{
      home_activities:Array
    }
  }
</script>

<style scoped lang="scss">
  /*学生活动*/
  .activity-block {
    height: 100%;
  }
  .activity-block .activity-content {
    height: 135px;
    padding: 15px;
    background-color: white;
  }
  .activity-block .activity-content ul li {
    margin-bottom: 10px;
  }
  .activity-block .activity-content .activity-text {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .activity-block .activity-content .activity-date {
    font-size: 10px;
    display: flex;
    position: relative;
    justify-content: flex-end;

    &::after{
      content: '';
      position: absolute;
      width: calc(100% - 80px);
      height: 1px;
      bottom: 7px;
      left: 5px;
      background-color: var(--color-title);
    }
  }

</style>
