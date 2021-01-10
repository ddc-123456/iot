<template>
  <div id="teacher">
    <el-row
      class="teacher-item"
      type="flex"
      justify="center"
    >
      <el-aside width="16%">
        <teacher-tab-bar class="tec-aside"/>
      </el-aside>
      <el-col :span="14">
        <teacher-swiper :banners="swiperPicture" class="slideDown"/>
        <teacher-introduction :teacherIntroduction="teacherIntroduction" class="slideDown"/>
        <teacher-full-time-teacher :fullTimeTeacherArray="fullTimeTeacherArray" class="slideDown"/>
        <teacher-part-time-teacher :partTimeTeacherArray="partTimeTeacherArray" class="slideDown"/>
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
    components: {TeacherTabBar, TeacherPartTimeTeacher, TeacherFullTimeTeacher, TeacherSwiper, TeacherIntroduction},
    data() {
      return {
        fullTimeTeacherArray: {},
        partTimeTeacherArray: {},
        swiperPicture: {},
        teacherIntroduction: ''
      }
    },
    created() {
      this.getTeachersProfile()
      this.getSwiperPictureAndIntroduction()
    },
    methods: {
      getTeachersProfile() {
        this.$api.teacher.getTeachersProfile().then(res => {
          this.fullTimeTeacherArray = res[1]
          this.partTimeTeacherArray = res[0]
          // console.log(res);
        }).catch(err => {
          console.log(err);
        })
      },
      getSwiperPictureAndIntroduction() {
        this.$api.teacher.getSwiperPictureAndIntroduction().then(res => {
          this.swiperPicture = res.rotationChart1
          this.teacherIntroduction = res.teacherProfile
          // console.log(res);
        }).catch(err => {
          console.log(err);
        })
      },

      animeInit() {
        this.$anime({
          targets: ['.tec-aside'],
          translateX: [-80, 0],
          translateY: [-150, 0],
          rotate: [90, 0]
        })

        this.$anime({
          targets: ['.slideDown'],
          translateY: [-50, 0],
          opacity: [0, 1],
          delay: this.$anime.stagger(100)
        })
      }
    },
    mounted() {
      this.animeInit();
    }
  }
</script>

<style scoped>
</style>
