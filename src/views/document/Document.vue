<template>
  <div id="document">
    <el-row
      class="document-item"
      type="flex"
      justify="center"
    >
      <el-aside width="16%">
        <document-tab-bar />
      </el-aside>
      <el-col :span="14">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import DocumentTabBar from "./childComps/DocumentTabBar";
export default {
  name: "test",
  components: {
    DocumentTabBar
  }
}
</script>

<style scoped>
</style>
