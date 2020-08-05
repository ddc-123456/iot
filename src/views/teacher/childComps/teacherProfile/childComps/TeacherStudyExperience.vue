<template>
  <div>
    <teacher-item id="content" :table="table">
      <span slot="title-name">学习经历</span>
      <ul slot="content">
        <li v-for="(item,index) of t_teacherstudyexperience">
          [{{index+1}}]{{item.start_time}}-{{item.end_time}} {{item.school}} {{item.specialty}} {{item.eduction}} {{item.degree}} {{item.remarks}}
        </li>
      </ul>
    </teacher-item>
  </div>
</template>

<script>
  import TeacherItem from "../../TeacherItem";

  export default {
    name: "TeacherStudyExperience",
    components: {TeacherItem},
    props:{
      t_teacherstudyexperience:{},
    },
    data(){
      return{
        table:['learning_experience']
      }
    },
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
    padding: 19px 50px 0 0;
    margin-left: 50px;
    letter-spacing: 2px;
    line-height: 25px;
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
