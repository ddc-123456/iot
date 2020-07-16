<template>
  <div>
  <!--标题栏部分-->
  <el-row>
    <el-col class="teacher-title">
      <h5><span><slot name="title-name"/></span></h5>
    </el-col>
  </el-row>

  <!--内容栏部分-->
  <el-row>
    <el-col>
      <slot name="content"/>
    </el-col>
  </el-row>
  </div>
</template>

<script>
  export default {
    name: "TeacherItem"
  }
</script>

<style scoped>
  .el-col {
    background-color: white;
  }
  .teacher-title {
    /*border-bottom: 1px solid var(--line-color);*/
    line-height: 2;
    position: relative;
  }

  .teacher-title::after {
    content: '';
    position: absolute;
    width: calc(100% - 10px);
    height: 1px;
    bottom: 0;
    left: 5px;
    background-color: var(--color-title);
  }

  .teacher-title span {
    /*border-bottom: 5px solid var(--line-color);*/
    padding: 5px 8px;
    position: relative;
    z-index: 9;
  }

  .teacher-title span::after {
    content: '';
    position: absolute;
    width: calc(100% - 9px);
    height: 5px;
    bottom: -7px;
    left: 5px;
    background-color: var(--color-title);
  }

</style>
