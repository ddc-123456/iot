<template>
  <div>
    <teacher-item id="content" table="softwarecopyright">
      <span slot="title-name">软件著作权</span>
      <ul slot="content">
        <li v-for="(item,index) of t_teachersoftwarecopyright" :key="index">
          <p>[{{index+1}}]{{item.inventor}}.{{item.software_name}},{{item.country}},{{item.register_num}},{{item.software_date}}.</p>
        </li>
      </ul>
    </teacher-item>
  </div>
</template>

<script>
  import TeacherItem from "../../TeacherItem";

  export default {
    name: "TeacherSoftwareCopyright",
    components: {TeacherItem},
    props:{
      t_teachersoftwarecopyright:{}
    }
  }
</script>

<style scoped>
  div {
    margin-top: 30px;
  }

  ul {
    padding-bottom: 19px;
    /*list-style: square;*/
  }

  li {
    word-wrap: break-word; /*解决英文不会自动换行*/
    padding: 19px 0 0 0;
    margin-left: 50px;
    letter-spacing: 2px;
  }

  #content span {
    font-size: 20px;
    color: var(--color-title-font);
  }
</style>
