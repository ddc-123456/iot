<template>
  <div>
    <teacher-item id="content">
      <span slot="title-name">研究项目</span>
      <ul slot="content">

        <li v-for="item of t_teacherresearchprojecthortopics">
          <p>{{item.topic}}{{', '+item.money}}{{', '+item.client}}{{', '+item.topic_time}}</p>
        </li>

        <li v-for="item of t_teacherresearchprojecthortopicsscientificresearch">
          <p>{{item.project_name}}{{', '+item.project_unit}}{{item.start_time}}</p>
        </li>

        <li v-for="item of t_teacherresearchprojecthortopicsteachingtopics">
          <p>{{item.topics_name}}{{', '+item.topics_unit}}{{item.topic_time}}</p>
        </li>

      </ul>

    </teacher-item>
  </div>
</template>

<script>
  import TeacherItem from "../../TeacherItem";

  export default {
    name: "TeacherResearchProject",
    components: {TeacherItem},
    props: {
      t_teacherresearchprojecthortopics: {},
      t_teacherresearchprojecthortopicsscientificresearch: {},
      t_teacherresearchprojecthortopicsteachingtopics: {}
    }
  }
</script>

<style scoped>
  div {
    margin-top: 30px;
  }

  ul {
    padding-bottom: 19px;
    list-style: square;
  }

  li {
    word-wrap: break-word; /*解决英文不会自动换行*/
    padding: 19px 50px 0 0;
    margin-left: 50px;
    letter-spacing: 2px;
    line-height: 20px;
  }

  #content span {
    font-size: 20px;
    color: var(--color-title-font);
  }
</style>
