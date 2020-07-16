<template>
  <div id="teacher-personal-introduction">
    <teacher-item id="content">
      <span slot="title-name">个人简介</span>
      <p slot="content">{{t_personalprofile}}</p>
    </teacher-item>
  </div>
</template>

<script>
  import TeacherItem from "../../TeacherItem";

  export default {
    name: "TeacherPersonalIntroduction",
    components: {TeacherItem},
    props:{
      t_personalprofile:''
    }
  }
</script>

<style scoped>
  div {
    margin-top: 30px;
  }

  p {
    text-indent: 2em; /*开头空两格*/
    word-wrap: break-word; /*解决英文不会自动换行*/
    padding: 19px 19px;
    line-height: 1.3;
    letter-spacing: 2px;
  }

  #content span {
    font-size: 20px;
    color: var(--color-title-font);
  }
</style>
