<template>
  <div id="teacher-profile-aside">
    <div class="img-box">
      <img :src="$url+ t_picture" alt="">
    </div>
    <ul>
      <li>姓名：{{teacher_profile.t_name}}</li>
      <li>岗位：{{teacher_profile.t_stationt_}}</li>
      <li>职称：{{teacher_profile.t_title}}</li>
      <li>职务：{{teacher_profile.t_post}}</li>
      <li>学历：{{teacher_profile.t_education}}</li>
      <li>学位：{{teacher_profile.t_degree}}</li>
      <li>研究领域：{{teacher_profile.t_researchfield}}</li>
      <li><span>E-main：</span>{{teacher_profile.t_email}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "TeacherProfileAside",
    props: {
      teacher_profile: {},
      t_picture: ''
    },
  }
</script>

<style scoped>
  #teacher-profile-aside {
    background-color: #fff;
    padding-bottom: 50px;
    margin-top: 50px;
  }

  .img-box {
    width: 100%;
    padding: 25px;
  }

  .img-box img {
    width: 100%;
    border: 5px solid #bebebe;
  }

  #teacher-profile-aside li {
    font-size: 17px;
    line-height: 35px;
    padding-left: 25px;
    padding-right: 25px;
    word-wrap : break-word;
  }
  #teacher-profile-aside span {
    white-space: nowrap;
  }
</style>
