// swiper 包含navbar
<template>
  <div>
    <div id="swiper">
      <swiper :options="swiperOption1" ref="mySwiper1" class="">
        <swiper-slide v-for="(item) in swiperImages" :key="item.id"  class="swiper-slide">
          <img :src="item.src" class="main-img">
          <div class="append-text" v-if="swiperText">
            <h1 class="topic">專業團隊防水抓漏、規劃、施工</h1>
            <p class="topic-second">30年以上泥作防漏經驗，一次搞定溼答答的煩惱</p>
          </div>
        </swiper-slide>

        <div class="swiper-button-prev " slot="button-prev" v-show="hasArrow"></div>
        <div class="swiper-button-next " slot="button-next" v-show="hasArrow"></div>
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
    .main-img{
      max-height: 850px;
      width: 100%;
    }
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

export default {
  props:['swiperImages','swiperText'],
  data() {
    return {
      swiperOption1:{
        slidesPerView: 1,
        spaceBetween: 0,
        loop: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
      },
      // 有無箭頭
      hasArrow: true,
    }
  },
  watch:{

  },
  methods: {
    
  },
  mounted() {
    
  },
  created() {
    let vm=this;
    console.log(vm.swiperImages.length==1);
    if(vm.swiperImages.length==1){
      vm.swiperOption1.loop=false;
      vm.hasArrow=false;
    }
    else{
      vm.swiperOption1.loop=true;
      vm.hasArrow=true;
    }
  },
  components: {
    swiper,
    swiperSlide,
    Nav
  }
}
</script>





