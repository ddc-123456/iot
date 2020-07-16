<template>
<div>
  <teacher-item id="content">
    <span slot="title-name">带学生比赛</span>
    <ul slot="content">
      <li v-for="(item,index) of t_teachertakingstudentcompetition" :key="index">
        {{item.award_grade}},{{item.issuance_Unit}},{{item.award_name}}{{item.award_results}},{{item.issue_time}}
      </li>
    </ul>
  </teacher-item>
</div>
</template>

<script>
  import TeacherItem from "../../TeacherItem";
  export default {
    name: "TeacherTakingStudentCompetition",
    components: {TeacherItem},
    props:{
      t_teachertakingstudentcompetition:{}
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
    /*text-indent: 2em; !*开头空两格*!*/
    word-wrap: break-word; /*解决英文不会自动换行*/
    margin-left: 50px;
    padding: 19px 0 0 0;
    letter-spacing: 2px;
  }

  #content span {
    font-size: 20px;
    color: var(--color-title-font);
  }
</style>
