<template>
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
</template>

<script>
  import TeacherItem from "../../teacher/childComps/TeacherItem";
  import TeacherIntroduction from "../../teacher/childComps/TeacherIntroduction";
  import TeacherPersonalIntroduction
    from "../../teacher/childComps/teacherProfile/childComps/TeacherPersonalIntroduction";
  import TeacherWorkExperience from "../../teacher/childComps/teacherProfile/childComps/TeacherWorkExperience";
  import TeacherThesis from "../../teacher/childComps/teacherProfile/childComps/TeacherThesis";
  import TeacherPatent from "../../teacher/childComps/teacherProfile/childComps/TeacherPatent";
  import TeacherResearchProject from "../../teacher/childComps/teacherProfile/childComps/TeacherResearchProject";
  import TeacherTakingStudentCompetition
    from "../../teacher/childComps/teacherProfile/childComps/TeacherTakingStudentCompetition";
  import TeacherHonour from "../../teacher/childComps/teacherProfile/childComps/TeacherHonour";
  import TeacherRecord from "../../teacher/childComps/teacherProfile/childComps/TeacherRecord";
  import TeacherProfessionalCertificate
    from "../../teacher/childComps/teacherProfile/childComps/TeacherProfessionalCertificate";
  import TeacherSoftwareCopyright from "../../teacher/childComps/teacherProfile/childComps/TeacherSoftwareCopyright";
  import TeacherStudyExperience from "../../teacher/childComps/teacherProfile/childComps/TeacherStudyExperience";


  export default {
    name: "TeacherProfileList",
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
      TeacherPersonalIntroduction, TeacherIntroduction, TeacherItem,
    },
    data() {
      return {
        t_id: this.$store.state.t_id,
        t_personalprofile: '',
        teacher_profile: {},
        t_picture: '',
        t_patent: {},
        t_thesis: {},
        t_honour: {},
        t_teacherstudyexperience: {},
        t_workexperience: '',
        t_teachersoftwarecopyright: {},
        t_teacherprofessionalcertificate: {},
        t_teacherrecord: {},
        t_teachertakingstudentcompetition: {},
        t_teacherresearchprojecthortopics: {},
        t_teacherresearchprojecthortopicsscientificresearch: {},
        t_teacherresearchprojecthortopicsteachingtopics: {},
        setting: require("../../../assets/img/setting.png")

      }
    },
    created() {
      window.scroll(0, 0)
      this.getTeacherProfile(this.t_id)
    },
    methods: {
      getTeacherProfile(t_id) {
        this.$api.teacherProfile.getTeacherProfile(t_id).then(res => {
          console.log(res);
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
          this.t_teacherresearchprojecthortopics = res[8][0].hortopics
          this.t_teacherresearchprojecthortopicsscientificresearch = res[8][1].scientific_researches
          this.t_teacherresearchprojecthortopicsteachingtopics = res[8][2].teaching_topics
          this.t_teacherstudyexperience = res[9]
          this.t_workexperience = res[10]
        }).catch(err => {
          console.log(err);
        })
      }
    },
  }
</script>

<style scoped>

</style>
