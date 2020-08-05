<template>
  <div>
    <teacher-item id="content" table="certificate">
      <span slot="title-name">职业资格证书</span>
      <ul slot="content">
        <li v-for="(item,index) of t_teacherprofessionalcertificate" :key="index">
          [{{index+1}}]{{item.certificate}}
        </li>
      </ul>
    </teacher-item>
  </div>
</template>

<script>
  import TeacherItem from "../../TeacherItem";

  export default {
    name: "TeacherProfessionalCertificate",
    components: {TeacherItem},
    props: {
      t_teacherprofessionalcertificate: {}
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
