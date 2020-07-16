<template>
  <div class="teacher-list-item" >
    <el-row>

      <!--左边图片-->
      <el-col :span="10">
        <slot name="teacherIcon"></slot>
      </el-col>

      <!--右边资料-->
      <el-col :span="14">

        <el-row>
          <el-col>
            <slot name="teacherName"></slot>
          </el-col>
        </el-row>

        <el-row>
          <el-col>
            <slot name="teacherTitle"></slot>
          </el-col>
        </el-row>

        <el-row>
          <el-col>
            <slot name="teacherStation"></slot>
          </el-col>
        </el-row>

        <el-row>
          <el-col>
            <!--            <span>研究领域:自动化</span>-->
            <slot name="teacherResearchField"></slot>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "TeacherList"
  }
</script>

<style scoped>
  .teacher-list-item {
    width: 50%;
    height: 168px;
  }
</style>
