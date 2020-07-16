<template>
  <div>
    <swiper-comps :banners="banners"/>
  </div>
</template>

<script>
  import SwiperComps from "../../../common/Swiper";
  export default {
    name: "TeacherSwiper",
    components: {SwiperComps},
    props:{
      banners:{}
    },
  }
</script>

<style scoped>
  div {
    margin-top: 41px;
  }
</style>
