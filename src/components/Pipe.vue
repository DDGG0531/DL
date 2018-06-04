<template>
  <div> 
  <!-- 插入 component Swiper1 -->
  <Swiper1 :swiperImages="swiperImages" :swiperText="false"></Swiper1>
  <!-- 插入 component Swiper1 end -->
  <div id="Pipe">
    <div class="container">
      <!-- 金色大字 -->
      <div id="gold-title">接案流程</div>
      <!-- 橫式圖串 -->
      <div class="pic-X">
        <picture>
        <source media="(min-width: 1200px)" srcset="/static/pic/東林修改/東林接案流程-01@4x.png">
        <img src="/static/pic/東林手機版/東林手機版接案流程-02@4x.png">
      </picture>
      </div>
      <hr class="gold-hr">
      <!-- 時間直圖 -->
      <div class="pic-Y text-center">
      <picture>
        <source media="(min-width: 1200px)" srcset="/static/pic/東林內頁2/東林-接案流程-03.png">
        <img src="/static/pic/東林手機版/東林手機版接案流程-03@4x.png">
      </picture>
      </div>
      
    </div>
    
  </div>
    <!-- 插入 聯絡框 -->
 <div id="contact-btn"><a href="tel:0422607982">04-22607982</a><a href="tel:0928412128">0928-412128</a></div>
  <div id="contact-btn-mb" v-bind:class="{expand: isExpand}" ><div class="click-zone"  @click="isExpand=!isExpand"></div><a href="tel:0422607982">04-22607982</a><a href="tel:0928412128">0928-412128</a></div>
  </div>
</template>


<style lang="scss" scoped>
@import "~bootstrap/scss/bootstrap";
@import "../assets/scss/all.scss";
.expand{
  width: 300px !important;
}
#contact-btn{
  display: none;
    @include media-breakpoint-up(xl) {
      display: block;
  }
  position: fixed;
  right: 0;
  bottom: 50px;
  z-index: 10;
  width: 300px;
  height: 100px;
  padding: 20px 0 20px 65px;
  color: white;
  font-size: 20px;
  letter-spacing: calc(150/1000*20px);
  text-align: center;
  background-image: url('/static/pic/東林修改/東林icon-05@4x.png');
  background-position: left center;
  background-size: contain;
  background-repeat: no-repeat;
  a{
    display: block;
    &:hover{
      color: $gold;
    }
  }
}
#contact-btn-mb{
  display: block;
    @include media-breakpoint-up(xl) {
      display: none;
  }
  position: fixed;
  right: 0;
  bottom: 0px;
  z-index: 10;
  width: 75px;
  height: 100px;
  padding: 10px 0 10px 100px;
  color: white;
  font-size: 20px;
  letter-spacing: calc(150/1000*20px);
  text-align: center;
  background-image: url('/static/pic/東林修改/東林icon-05@4x.png');
  background-position: left center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all ease 1s;
      .click-zone{
    position: absolute;
    left: 0;
    top: 0;
    width: 100px;
    height: 100px;
  }

  a{
    display: block;
    overflow: hidden;
    white-space:nowrap;
    line-height: 40px;
    &:hover{
      color: $gold;
    }
  }
}
#Pipe {
  padding-top: 66px;
  padding-bottom: 153px;
  @include media-breakpoint-up(xl) {
    padding-top: 105px;
    padding-bottom: 190px;
  }
  #gold-title {
    position: relative;
    color: $gold;
    text-align: center;
    margin-bottom: 60px;
    font-size: 21px;
    letter-spacing: calc(200 / 1000 * 21px);
    @include media-breakpoint-up(xl) {
      font-size: 28px;
      letter-spacing: calc(200 / 1000 * 28px);
      margin-bottom: 100px;
    }
    &::before {
      content: "";
      border: 0.5px solid $gold;
      position: absolute;
      width: calc(50% - 60px);
      top: 50%;
      left: 0;
      @include media-breakpoint-up(xl) {
        transform: translate(0, 0);
        width: 450px;
        left: 0;
      }
    }
    &::after {
      content: "";
      border: 0.5px solid $gold;
      position: absolute;
      width: calc(50% - 60px);
      top: 50%;
      right: 0;
      @include media-breakpoint-up(xl) {
        transform: translate(0, 0);
        right: 0;
        width: 450px;
      }
    }
  }
  .gold-hr {
    margin-top: 46px;
    margin-bottom: 65px;
    @include media-breakpoint-up(xl) {
      margin-top: 65px;
      margin-bottom: 126px;
    }
    border: 0.5px solid $gold;
  }
}
</style>

<script>
import Swiper1 from "./Swiper1";

export default {
  data() {
    return {
      swiperImages: [
        {
          src: "/static/封面/接案流程.png",
          src_mobile: "/static/封面/mobile/接案流程.png"
        }
      ],
      isExpand:false,
    };
  },
  watch: {},
  methods: {},
  mounted() {},
  created() {},
  components: {
    Swiper1
  }
};
</script>





