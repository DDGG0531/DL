<template>
  <div> 
     <swiper :options="swiperOption2" ref="mySwiper2" class="">
              <swiper-slide v-for="(item,index) in swiperImages" :key="item.id" @click.native="pickImgToTop(index)" style="cursor:pointer">
                <img :src="item.src">
              </swiper-slide>
                
              <div class="swiper-button-prev " slot="button-prev"></div>
              <div class="swiper-button-next " slot="button-next"></div>
      </swiper>
  </div>
</template>


<style lang="scss" scoped>


@import "../assets/scss/all.scss";
// @include media-breakpoint-up(xl)
</style>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

export default {
  data() {
    return {
      swiperImages:[{src:'/static/pic/pic-08_1.png'},{src:'/static/pic/pic-09_1.png'},{src:'/static/pic/pic-10_1.png'},{src:'/static/pic/pic-11_1.png'}],
      swiperOption2:{
        slidesPerView: 4,
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
    swiperSlide
  }
}
</script>





