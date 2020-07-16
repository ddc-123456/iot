<template>
  <el-col :span="7" class="notify-block">
    <block-header :title="'通知&公告'"></block-header>
    <div class="notify-content">
      <ul>
        <li>
          <p class="notify-text">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          <p class="notify-date">2020-7-1</p>
        </li>
        <li>
          <p class="notify-text">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          <p class="notify-date">2020-7-1</p>
        </li>
        <li>
          <p class="notify-text">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          <p class="notify-date">2020-7-1</p>
        </li>
        <li>
          <p class="notify-text">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          <p class="notify-date">2020-7-1</p>
        </li>
      </ul>
    </div>
  </el-col>
</template>

<script>
  import BlockHeader from "../blockheader/BlockHeader"

  export default {
    name: "Notify",
    components: {
      BlockHeader
    }
  }
</script>

<style scoped>
  /*通知&公告*/
  .notify-block {
    height: 100%;
  }
  .notify-block .notify-content {
    height: 200px;
    padding: 10px;
    background-color: white;
  }
  .notify-block .notify-content ul li {
    margin-bottom: 20px;
  }
  .notify-block .notify-content .notify-text {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .notify-block .notify-content .notify-date {
    font-size: 10px;
    display: flex;
    justify-content: flex-end;
  }
</style>
