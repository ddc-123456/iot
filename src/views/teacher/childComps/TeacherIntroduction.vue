<template>
  <div id="content">
    <teacher-item id="Introduction">
      <span slot="title-name" ref="Introduction">师资简介</span>
      <p slot="content">{{teacherIntroduction}}</p>
    </teacher-item>
  </div>
</template>

<script>
  import TeacherItem from "./TeacherItem";

  export default {
    name: "TeacherIntroduction",
    components: {TeacherItem},
    data(){
      return{
        teacher:'teacher'
      }
    },
    props: {
      teacherIntroduction: ''
    },
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

  #Introduction span {
    font-size: 20px;
    color: var(--color-title-font);
  }
</style>
