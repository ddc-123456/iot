<template>
  <div>
    <teacher-item id="content" :table="table">
      <span slot="title-name">科研项目</span>
      <ol slot="content">

        <li v-for="item of t_teacherresearchprojecthortopics">
          <p>{{item.topic}}{{', '+item.money}}{{', '+item.client}}{{', '+item.topic_time}}</p>
        </li>

        <li v-for="item of t_teacherresearchprojecthortopicsscientificresearch">
          <p>{{item.project_name}}{{', '+item.project_unit}}{{item.start_time}}</p>
        </li>

        <li v-for="item of t_teacherresearchprojecthortopicsteachingtopics">
          <p>{{item.topics_name}}{{', '+item.topics_unit}}{{item.topic_time}}</p>
        </li>

      </ol>

    </teacher-item>
  </div>
</template>

<script>
  import TeacherItem from "../../TeacherItem";

  export default {
    name: "TeacherResearchProject",
    components: {TeacherItem},
    data(){
      return{
        table:['hortopics','scientific_research','teaching_topics']
      }
    },
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

  ol {
    padding-bottom: 19px;
    counter-reset: sectioncounter;
    list-style: none;
    word-wrap: break-word;
    /*list-style: square;*/
  }

  ol > li > p:before {
    content: '[' counter(sectioncounter) ']';
    counter-increment: sectioncounter;
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
