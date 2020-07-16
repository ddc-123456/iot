<template>
  <div class="student-item">
    <div class="student-item-img">
      <img src="~assets/img/tomcat.jpg">
    </div>
    <div class="student-item-name">
      <h3>张三</h3>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "StudentItem"
  }
</script>

<style scoped>
  .student-item {
    width: 24%;
    background-color: white;
    padding: 0 0 5px 3px;
    margin-bottom: 25px;
  }
  .student-item .student-item-img {
    width: 230px;
    height: 230px;
    overflow: hidden;
  }
  .student-item img {
    width: 100%;
    height: 100%;
  }
  .student-item .student-item-name {
    padding: 20px 0;
    text-align: center;
  }
  .student-item span {

  }
</style>
