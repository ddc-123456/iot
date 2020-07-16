<template>
  <div>
    <teacher-item id="content">
      <span slot="title-name">学习和工作经历</span>
      <p slot="content">{{t_workexperience}}</p>
    </teacher-item>
  </div>
</template>

<script>
  import TeacherItem from "../../TeacherItem";

  export default {
    name: "TeacherWorkExperience",
    components: {TeacherItem},
    props: {
      t_workexperience: ''
    }
  }
</script>

<style scoped>
  div {
    margin-top: 30px;
  }

  ul {
    padding-bottom: 19px;
  }

  li {
    text-indent: 2em; /*开头空两格*/
    word-wrap: break-word; /*解决英文不会自动换行*/
    padding: 19px 0 0 0;
    letter-spacing: 2px;
  }

  #content span {
    font-size: 20px;
    color: var(--color-title-font);
  }

  p {
    text-indent: 2em; /*开头空两格*/
    word-wrap: break-word; /*解决英文不会自动换行*/
    padding: 19px 19px;
    line-height: 1.3;
    letter-spacing: 2px;
  }

</style>
