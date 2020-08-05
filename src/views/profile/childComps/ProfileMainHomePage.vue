<template>
<teacher-profile-list/>
</template>

<script>
  import TeacherProfileList from "./TeacherProfileList";
  export default {
    name: "ProfileMainHomePage",
    components: {TeacherProfileList},
    mounted() {
      this.$bus.$emit('isShow',true)

    }
  }
</script>

<style scoped>

</style>
