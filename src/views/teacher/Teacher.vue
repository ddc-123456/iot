<template>
  <div id="teacher">
    <el-row
      class="teacher-item"
      type="flex"
      justify="center"
    >
      <el-aside width="16%">
        <teacher-tab-bar />
      </el-aside>
      <el-col :span="14">
        <teacher-swiper :banners="swiperPicture" />
        <teacher-introduction :teacherIntroduction="teacherIntroduction" />
        <teacher-full-time-teacher :fullTimeTeacherArray="fullTimeTeacherArray" />
        <teacher-part-time-teacher :partTimeTeacherArray="partTimeTeacherArray" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TeacherIntroduction from "./childComps/TeacherIntroduction";
import TeacherSwiper from "./childComps/TeacherSwiper";
import TeacherFullTimeTeacher from "./childComps/TeacherFullTimeTeacher";
import TeacherPartTimeTeacher from "./childComps/TeacherPartTimeTeacher";
import TeacherTabBar from "./childComps/TeacherTabBar";

export default {
  name: "Teacher",
  components: { TeacherTabBar, TeacherPartTimeTeacher, TeacherFullTimeTeacher, TeacherSwiper, TeacherIntroduction },
  data () {
    return {
      fullTimeTeacherArray: {},
      partTimeTeacherArray: {},
      swiperPicture: {},
      teacherIntroduction: ''
    }
  },
  created () {
    this.getTeachersProfile()
    this.getSwiperPictureAndIntroduction()
  },
  methods: {
    getTeachersProfile () {
      this.$api.teacher.getTeachersProfile().then(res => {
        this.fullTimeTeacherArray = res[1]
        this.partTimeTeacherArray = res[0]
        // console.log(res);
      }).catch(err => {
        console.log(err);
      })
    },
    getSwiperPictureAndIntroduction () {
      this.$api.teacher.getSwiperPictureAndIntroduction().then(res => {
        this.swiperPicture = res.rotationChart1
        this.teacherIntroduction = res.teacherProfile
        // console.log(res);
      }).catch(err => {
        console.log(err);
      })
    }
  },
  mounted () {

  }
}
</script>

<style scoped>
</style>
