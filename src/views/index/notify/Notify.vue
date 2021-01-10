<template>
  <el-col :span="7" class="notify-block">
    <block-header :title="'通知&公告'"></block-header>
    <div class="notify-content">
      <ul class="notify-ul">
        <li v-for="item of home_notices" :key="item.notice_title">
          <p class="notify-text">{{item.notice_title}}</p>
          <p class="notify-date">{{item.notice_time}}</p>
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
    },
    props: {
      home_notices: Array
    }
  }
</script>

<style lang="scss" scoped>
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
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: calc(100% - 80px);
      height: 1px;
      bottom: 7px;
      left: 5px;
      background-color: var(--color-title);
    }
  }

  .notify-ul {
    display: flex;
    flex-flow: column;
  }
</style>
