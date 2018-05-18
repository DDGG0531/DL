<template>
  <div>
    <div id="swiper">
      <swiper :options="swiperOption1" ref="mySwiper1" class="">
        <swiper-slide v-for="(item,index) in swiperImages" :key="item.id" @click.native="pickImgToTop(index)" style="cursor:pointer"
          class="swiper-slide">
          <img :src="item.src" class="main-img">
          <div class="append-text">
            <h1 class="topic">專業團隊防水抓漏、規劃、施工</h1>
            <p class="topic-second">30年以上泥作防漏經驗，一次搞定溼答答的煩惱</p>
          </div>
        </swiper-slide>

        <div class="swiper-button-prev " slot="button-prev"></div>
        <div class="swiper-button-next " slot="button-next"></div>
      </swiper>
      <Nav id="nav"></Nav>
    </div>

  </div>
</template>



<style lang="scss" scoped>
@import "../assets/scss/all.scss";
// @include media-breakpoint-up(xl)
#swiper {
  position: relative;
  #nav {
    position: absolute;
    z-index: 5;
    left: 0;
    right: 0;
    top: 30px;
  }
  .swiper-slide {
    position: relative;
    .append-text {
      position: absolute;
      color: rgb(254, 254, 254);
      bottom: 90px;
      width: 656px;
      height: 96px;
      left: 20%;
      .topic {
        font-size: 35px;
        letter-spacing: calc(200/1000*35px);
      }
      .topic-second {
        font-size: 25px;
        letter-spacing: calc(200/1000*25px);
      }
    }
  }
}




</style>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Nav from './Nav'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

export default {
  data() {
    return {
      swiperImages:[{src:'/static/pic/pic-01_1.png'},{src:'/static/pic/pic-01_1.png'},{src:'/static/pic/pic-01_1.png'},{src:'/static/pic/pic-01_1.png'}],
      swiperOption1:{
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
      }
    }
  },
  watch:{

  },
  methods: {
    
  },
  mounted() {

  },
  created() {

  },
  components: {
    swiper,
    swiperSlide,
    Nav
  }
}
</script>





