<template>
  <swiper class="swiper-container" :options="swiperOptions">
    　　 <div class="swiper-slide" :key="banner" v-for="banner in banners">
    <img :src="banner" />
  </div>
    　　<div class="swiper-pagination" slot="pagination"></div>
    　　<!--<div class="swiper-button-prev" slot="button-prev"></div>
  　　<div class="swiper-button-next" slot="button-next"></div>-->
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: "MySwiper",
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        //首页轮播图图片地址
        banners: [
          // 动态绑定图片路径（相对路径/绝对路径）
          // 需要使用require('......')引入
          require('../../../assets/img/wallhaven-1.png'),
          require('../../../assets/img/wallhaven-2.jpg'),
          require('../../../assets/img/wallhaven-3.jpg')
        ],
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
    },
  }
</script>

<style scoped>
  .swiper-container {
    height: 405px;
    --swiper-theme-color: #d3dce6;
  }
  .swiper-slide img {
    width: 100%;
    height: 100%;
  }
</style>
