<template>
  <div id="content">
    <teacher-item>
      <span slot="title-name" id="PartTeacher">兼职教师</span>
      <div class="teacher-list" slot="content">
        <teacher-list v-for="(item,index) of partTimeTeacherArray" :key="index">
          <img :src="$url+item.t_picture" alt="" slot="teacherIcon" @click="toProfile(item.t_id)">
          <h3 slot="teacherName">{{item.t_name}}</h3>
          <span slot="teacherTitle">职称 ：{{item.t_title}}</span>
          <span slot="teacherStation">岗位 ：{{item.t_stationt_}}</span>
          <span slot="teacherResearchField">领域 ：{{item.t_researchfield}}</span>
        </teacher-list>
      </div>
    </teacher-item>
  </div>
</template>

<script>
  import TeacherItem from "./TeacherItem";
  import TeacherList from "./TeacherList";

  export default {
    name: "TeacherPartTimeTeacher",
    components: {TeacherList, TeacherItem},
    props: {
      partTimeTeacherArray: {}
    },
    methods: {
      toProfile(t_id) {
        this.$router.push({
          path: '/teacherProfile',
          query: {
            t_id
          }
        })
      }
    }
  }
</script>
<style scoped>
  div {
    margin-top: 30px;
  }

  .teacher-list {
    margin: 0px 30px 0 60px;
    display: flex;
    flex-wrap: wrap;
  }

  .teacher-list-item img {
    width: 133px;
    height: 120px;
    border: 5px solid #bebebe;
    cursor: pointer;
  }

  .teacher-list-item h3 {
    margin-top: 11px;
    margin-bottom: 19px;
    color: var(--color-title-font);
    cursor: pointer;
  }

  .teacher-list-item span {
    line-height: 1.3;
    cursor: pointer;
  }

  #PartTeacher {
    font-size: 20px;
    color: var(--color-title-font);
  }
</style>
