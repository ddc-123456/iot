<template>
  <div id="content">
    <teacher-item>
      <span slot="title-name" ref="fullTeacher" id="FullTeacher">专任教师</span>
      <div class="teacher-list" slot="content">
        <teacher-list v-for="(item,index) of fullTimeTeacherArray" :key="index">
          <img :src="$url+item.t_picture" alt="" slot="teacherIcon" @click="toProfile(item.t_id)">
          <h3 slot="teacherName" @click="toProfile(item.t_id)">{{item.t_name}}</h3>
          <span slot="teacherTitle" @click="toProfile(item.t_id)">职称 ：{{item.t_title}}</span>
          <span slot="teacherStation" @click="toProfile(item.t_id)">岗位 ：{{item.t_stationt_}}</span>
          <span slot="teacherResearchField" @click="toProfile(item.t_id)">领域 ：{{item.t_researchfield}}</span>
        </teacher-list>
      </div>
    </teacher-item>
  </div>
</template>

<script>
  import TeacherItem from "./TeacherItem";
  import TeacherListitem from "./TeacherList";
  import TeacherList from "./TeacherList";

  export default {
    name: "TeacherFullTimeTeacher",
    components: {TeacherList, TeacherListitem, TeacherItem},
    props: {
      fullTimeTeacherArray: {},
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

  #FullTeacher {
    font-size: 20px;
    color: var(--color-title-font);
  }
</style>
