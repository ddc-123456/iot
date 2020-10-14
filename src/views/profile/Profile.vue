<template>
  <el-row type="flex" justify="center">
    <el-aside width="12%">
      <profile-aside/>
    </el-aside>
    <el-col :span="14">
      <el-main>
        <router-view/>
      </el-main>
    </el-col>
  </el-row>
</template>

<script>
  import ProfileAside from "./childComps/ProfileAside";

  export default {
    name: "Profile",
    components: {ProfileAside},
    watch: {
      '$route'(to, from) {
        this.$store.state.loginCode !== 100 ? this.$router.push('/login') : null
      }
    }
  }
</script>

<style scoped>

</style>
