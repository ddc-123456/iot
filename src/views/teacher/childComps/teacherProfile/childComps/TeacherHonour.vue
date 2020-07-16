<template>
  <div>
    <teacher-item id="content">
      <span slot="title-name">个人荣誉</span>
      <ul slot="content">
        <li v-for="(item,index) of t_honour" :key="index">
          <p>{{item.issue_time}}{{item.issuance_Unit}}{{item.honour_name}}{{item.results}}</p>
        </li>
      </ul>
    </teacher-item>
  </div>
</template>

<script>
  import TeacherItem from "../../TeacherItem";

  export default {
    name: "TeacherHonour",
    components: {TeacherItem},
    props: {
      t_honour: {}
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
    padding: 19px 50px 0 0;
    margin-left: 50px;
    letter-spacing: 2px;
  }

  #content span {
    font-size: 20px;
    color: var(--color-title-font);
  }
</style>
