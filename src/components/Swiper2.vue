<template>
  <div> 
     <swiper :options="swiperOption2" ref="mySwiper2" class="">
              <swiper-slide v-for="(item) in swiperImages" :key="item.id" @click.native="swiper2Func(item)" style="cursor:pointer">
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
        loop: false,
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
    swiper2Func: function (item) {
    let vm=this;
    vm.$emit('swiper2Func',item);
    }
    
  },
  mounted() {
  },
  created() {
    let vm =this;
    let item = vm.swiperImages[0];
    vm.swiper2Func(item);
  },
  beforeUpdate(){

  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>





