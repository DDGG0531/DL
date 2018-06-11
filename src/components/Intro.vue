<template>
  <div> 
  <!-- 插入 component Swiper1 -->
  <Swiper1 :swiperImages="swiperImages" :swiperText="false"></Swiper1>
  <!-- 插入 component Swiper1 end -->
  <div id="intro">
    <div class="container">
      <!-- 金色大字 -->
      <div id="gold-title">公司簡介</div>
      <!-- 4格內容 -->
      <div class="row">
        <div class="col-12 col-xl-6 order-1 order-xl-1 each top"><img src="/static/pic/東林內頁2/東林-公司簡介-02.png"></div>
        <div class="col-12 col-xl-6 order-2 order-xl-2 each top"><ul><li><span>緣起</span></li></ul>
          「不只是工程·．每一件都是作品」<br>
          東林工程行成立於2017年，<br>
          專營石材/磁磚等設計規劃及技術服務，<br>
          目標為提供比起傳統工程行更多元的選擇，<br>
          秉持著「責任」、「專業」、「超越」、「多元」<br>四個品牌經營理念<br>
          我們陣容堅強，以豐富的經驗、優秀的品質、高效率的服務<br>
          展望未來能為每位客戶打造自己獨一無二的居家美學作品。
</div>
        <div class="col-12 col-xl-6 order-4 order-xl-3 each bottom"><ul><li><span>服務內容</span></li></ul>
        房屋整修翻修修繕<br>
        室內外石材磁磚規劃施工<br>
        各式背景牆電視牆羅馬柱裝潢<br>
        防水抓漏專家,外牆/屋頂/浴廁防水隔熱工程<br>
        免費諮詢專線: <a style="d-inline-block" href="tel:0928412128">0928-412128</a>
</div>
        <div class="col-12 col-xl-6 order-3 order-xl-4 each bottom"><img src="/static/pic/東林內頁2/東林-公司簡介-03.png"></div>
      </div>
    </div>
    
  </div>
  <!-- 插入 component Parallax -->
  <Parallax :parallaxImage="'/static/pic/東林內頁2/東林-公司簡介-04.jpg'" :type2="true"></Parallax>
  <!-- 插入 component Parallax end-->
  <div id="white-block"></div>
    <!-- 插入 聯絡框 -->
 <div id="contact-btn"><a href="tel:0916787430">0916-787430</a><a href="tel:0928412128">0928-412128</a></div>
  <div id="contact-btn-mb" v-bind:class="{expand: isExpand}" ><div class="click-zone"  @click="isExpand=!isExpand"></div><a href="tel:0916787430">0916-787430</a><a href="tel:0928412128">0928-412128</a></div>
  </div>
</template>


<style lang="scss" scoped>
@import "~bootstrap/scss/bootstrap";
@import "../assets/scss/all.scss";
#intro {
  padding-top: 61px;
  padding-bottom: 0px;
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
  .each {
    font-size: 13px;
    @include media-breakpoint-up(md) {
      font-size: 18px;
    }
    @include media-breakpoint-up(xl) {
      font-size: 20px;
    }
    &:nth-child(odd) {
      padding-right: 15px;
      @include media-breakpoint-up(xl) {
        padding-right: 60px;
      }
    }
    img {
      width: 100%;
    }
    &.top {
      margin-bottom: 70px;
    }
    &.bottom {
      margin-bottom: 70px;
    }
    ul {
      padding-left: 20px;
      font-weight: bold;
      li {
        color: $gold;
      }
      span {
        font-size: 18px;
        color: black;
        @include media-breakpoint-up(xl) {
          font-size: 20px;
        }
      }
    }
  }
}

#white-block {
  height: 0;
  @include media-breakpoint-up(xl) {
    height: 390px;
  }
}
</style>

<script>
import Swiper1 from "./Swiper1";
import Parallax from "./Parallax";

export default {
  data() {
    return {
      swiperImages: [
        {
          src: "/static/封面/公司簡介.png",
          src_mobile: "/static/封面/mobile/公司簡介.png"
        }
      ],
      isExpand: false
    };
  },
  watch: {},
  methods: {},
  mounted() {},
  created() {},
  components: {
    Swiper1,
    Parallax
  }
};
</script>





