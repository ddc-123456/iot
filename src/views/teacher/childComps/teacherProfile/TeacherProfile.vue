<template>
  <div id="teacher-profile">
    <el-row type="flex" justify="center">
      <el-aside width="12%">
        <teacher-profile-aside :teacher_profile="teacher_profile" :t_picture="t_picture"/>
      </el-aside>
      <el-col :span="14">
        <el-main>
          <div id="teacher-profile-main">
            <teacher-personal-introduction :t_personalprofile="t_personalprofile"/>
            <teacher-work-experience :t_workexperience="t_workexperience"/>
            <teacher-study-experience :t_teacherstudyexperience="t_teacherstudyexperience"/>
            <teacher-professional-certificate :t_teacherprofessionalcertificate="t_teacherprofessionalcertificate"/>
            <teacher-thesis :t_thesis="t_thesis"/>
            <teacher-patent :t_patent="t_patent"/>
            <teacher-software-copyright :t_teachersoftwarecopyright="t_teachersoftwarecopyright"/>
            <teacher-research-project
              :t_teacherresearchprojecthortopics="t_teacherresearchprojecthortopics"
              :t_teacherresearchprojecthortopicsscientificresearch="t_teacherresearchprojecthortopicsscientificresearch"
              :t_teacherresearchprojecthortopicsteachingtopics="t_teacherresearchprojecthortopicsteachingtopics"/>
            <teacher-taking-student-competition :t_teachertakingstudentcompetition="t_teachertakingstudentcompetition"/>
            <teacher-honour :t_honour="t_honour"/>
            <teacher-record :t_teacherrecord="t_teacherrecord"/>
          </div>
        </el-main>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import TeacherProfileAside from "./childComps/TeacherProfileAside";
  import TeacherItem from "../TeacherItem";
  import TeacherIntroduction from "../TeacherIntroduction";
  import TeacherPersonalIntroduction from "./childComps/TeacherPersonalIntroduction";
  import TeacherWorkExperience from "./childComps/TeacherWorkExperience";
  import TeacherThesis from "./childComps/TeacherThesis";
  import TeacherPatent from "./childComps/TeacherPatent";
  import TeacherResearchProject from "./childComps/TeacherResearchProject";
  import TeacherTakingStudentCompetition from "./childComps/TeacherTakingStudentCompetition";
  import TeacherHonour from "./childComps/TeacherHonour";
  import TeacherRecord from "./childComps/TeacherRecord";
  import TeacherProfessionalCertificate from "./childComps/TeacherProfessionalCertificate";
  import TeacherSoftwareCopyright from "./childComps/TeacherSoftwareCopyright";
  import TeacherStudyExperience from "./childComps/TeacherStudyExperience";

  export default {
    name: "TeacherProfile",
    components: {
      TeacherStudyExperience,
      TeacherSoftwareCopyright,
      TeacherProfessionalCertificate,
      TeacherRecord,
      TeacherHonour,
      TeacherTakingStudentCompetition,
      TeacherResearchProject,
      TeacherPatent,
      TeacherThesis,
      TeacherWorkExperience,
      TeacherPersonalIntroduction, TeacherIntroduction, TeacherItem, TeacherProfileAside
    },
    data() {
      return {
        t_id: this.$route.query.t_id,
        t_personalprofile: '',
        teacher_profile: {},
        t_picture: '',
        t_patent: {},
        t_thesis: {},
        t_honour: {},
        t_teacherstudyexperience:{},
        t_workexperience: '',
        t_teachersoftwarecopyright: {},
        t_teacherprofessionalcertificate: {},
        t_teacherrecord: {},
        t_teachertakingstudentcompetition: {},
        t_teacherresearchprojecthortopics: {},
        t_teacherresearchprojecthortopicsscientificresearch: {},
        t_teacherresearchprojecthortopicsteachingtopics: {}

      }
    },
    created() {
      window.scroll(0, 0)
      this.getTeacherProfile(this.t_id)
    },
    methods: {
      getTeacherProfile(t_id) {
        this.$api.teacherProfile.getTeacherProfile(t_id).then(res => {
          this.teacher_profile = res[0][0]
          this.t_picture = res[0][0].t_picture
          this.t_personalprofile = res[0][0].t_personalprofile
          this.t_patent = res[1]
          this.t_thesis = res[2]
          this.t_honour = res[3]
          this.t_teachersoftwarecopyright = res[4]
          this.t_teacherrecord = res[5]
          this.t_teacherprofessionalcertificate = res[6]
          this.t_teachertakingstudentcompetition = res[7]
          this.t_teacherresearchprojecthortopics = res[8][0]
          this.t_teacherresearchprojecthortopicsscientificresearch = res[8][1]
          this.t_teacherresearchprojecthortopicsteachingtopics = res[8][2]
          this.t_teacherstudyexperience = res[9]
          this.t_workexperience = res[10]
        }).catch(err => {
          console.log(err);
        })
      }
    }
  }
</script>

<style scoped>
</style>
