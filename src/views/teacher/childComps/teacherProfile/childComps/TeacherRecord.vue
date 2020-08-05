<template>
  <div>
    <teacher-item id="content" table="work_record">
      <span slot="title-name">工作记录</span>
      <ul slot="content">
        <li v-for="(item,index) of t_teacherrecord" :key="index">[{{index+1}}]{{item.work_date}}{{item.work_name}},{{item.exposition}}</li>
      </ul>
    </teacher-item>
  </div>
</template>

<script>
  import TeacherItem from "../../TeacherItem";

  export default {
    name: "TeacherRecord",
    components: {TeacherItem},
    props:{
      t_teacherrecord:{}
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
    margin-left: 50px;
    word-wrap: break-word; /*解决英文不会自动换行*/
    padding: 19px 0 0 0;
    letter-spacing: 2px;
  }

  #content span {
    font-size: 20px;
    color: var(--color-title-font);
  }
</style>
