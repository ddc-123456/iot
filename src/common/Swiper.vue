<template>
  <el-row>
    <el-col>
      <div id="swiper">
        <swiper class="swiper-container" :options="swiperOptions">
          　　
          <div class="swiper-slide" :key="banner" v-for="banner in banners">
            <img :src="$url+banner">
          </div>
          　　
          <div class="swiper-pagination" slot="pagination"></div>

        </swiper>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  export default {
    name: "SwiperComps",
    components: {
      Swiper,
      SwiperSlide
    },
    props:{
      banners:{}
    },
    data() {
      return {
        //首页轮播图图片地址
        // banners: [
        //   // 动态绑定图片路径（相对路径/绝对路径）
        //   // 需要使用require('......')引入
        //   require('../assets/img/wallhaven-1.png'),
        //   require('../assets/img/wallhaven-2.jpg'),
        //   require('../assets/img/wallhaven-3.jpg')
        // ],
        //swiper的配置及初始化
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true // 允许点击小圆点跳转
          },
          autoplay: {
            delay: 2000,
            disableOnInteraction: false // 手动切换之后继续自动轮播
          },
          loop: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
      }
    }
  }
</script>

<style scoped>
  .swiper-container {
    width: 100%;
    height: 400px;
    margin: 0 auto;
    --swiper-theme-color: #d3dce6;
  }
  .swiper-slide img {
    width: 100%;
    height: 100%;
  }
</style>
