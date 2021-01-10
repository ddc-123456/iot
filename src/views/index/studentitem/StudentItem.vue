<template>
  <div class="student-item">
    <div class="student-item-img">
      <img :src="$url+home_students.stu_picture">
    </div>
    <div class="student-item-name">
      <h3>{{home_students.stu_name}}</h3>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "StudentItem",
    props:{
      home_students:Object
    }
  }
</script>

<style lang="scss" scoped>
  .student-item {
    width: 24%;
    height: 494px;
    background-color: white;
    /*padding: 0 0 5px 3px;*/
    margin-bottom: 25px;
  }
  .student-item .student-item-img {
    width: 100%;
    height: 230px;
    overflow: hidden;
  }
  .student-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .student-item .student-item-name {
    padding: 20px 0;
    text-align: center;
  }
  .student-item span {

  }

</style>
