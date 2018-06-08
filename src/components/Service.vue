<template>
  <div> 
    <!-- 插入 component Swiper1 -->
    <Swiper1 :swiperImages="swiperImages" :swiperText="false"></Swiper1>
    <!-- 插入 component Swiper1 end -->
    <!-- 標題跟綠底區塊分離!! -->
    <!-- 標題 -->
    <section id="title-block">
      <h1 class="title upper">our service</h1>
    </section>
    <!-- 標題 end -->
    <!-- 綠底區塊 -->
    <section id="main">
      <div class="container color-block">
        <div class="each" v-for="(item) in categories" :key="item.id" v-bind:id="item.id">
          <!-- 撐開但看不見的圖 -->
          <img src="/static/pic/東林內頁/服務項目pic-02.png" style="visibility: hidden;">
            <!-- 文字區塊 -->
          <div class="each-msg">
            <div class="msg-wrapper">
              <!-- 區塊內標題 -->
              <div class="title">{{item.title}}</div>
              <!-- hr -->
              <hr class="gold-hr">
              <!-- 區塊內描述 -->
              <div class="text" v-html="item.text"></div>
            </div>
            <!-- 簡圖 -->
            <div class="sub-image-wrapper"><img :src="item.s_icon" class="sub-image"></div>
              
          </div>
          <!-- 圖片區塊 -->
          <img :src="item.s_src" class="each-img">

          
        </div>
        <!-- 金色文字區塊 -->
        <div id="description">可結合水電、油漆、裝潢、鋁門窗等，作一次到位的服務</div>
      </div>
    </section>
    <!-- 綠底區塊 end -->
    <div id="contact-btn"><a href="tel:0916787439">0916-787439</a><a href="tel:0928412128">0928-412128</a></div>
  <div id="contact-btn-mb" v-bind:class="{expand: isExpand}" ><div class="click-zone"  @click="isExpand=!isExpand"></div><a href="tel:0916787439">0916-787439</a><a href="tel:0928412128">0928-412128</a></div>
  </div>
</template>


<style lang="scss" scoped>
@import "~bootstrap/scss/bootstrap";
@import "../assets/scss/all.scss";
// @include media-breakpoint-up(xl)
#title-block {
  background-color: $bg-green;
  @include media-breakpoint-up(xl) {
    background-color: transparent;
  }
  padding-top: 110px;
  padding-bottom: 110px;
  .title {
    color: $gold;
    font-size: 21px;
    text-align: center;
    letter-spacing: calc(200 / 1000 * 21px);
    @include media-breakpoint-up(xl) {
      font-size: 28px;
      letter-spacing: calc(200 / 1000 * 28px);
    }
  }
}

#main {
  .container {
    max-width: 100vw;
  }
  @media (min-width: 1200px) {
    .container {
      max-width: 100vw;
    }
  }
  @media (min-width: 1381px) {
    .container {
      max-width: 1381px;
    }
  }
  margin-bottom: 0;
  @include media-breakpoint-up(xl) {
    margin-bottom: 285px;
  }
  .color-block {
    background-color: $bg-green;
    padding-top: 0;
    @include media-breakpoint-up(xl) {
      padding-top: 200px;
    }
    .each {
      position: relative;
      width: 100%;
      // height: 215px;
      border: 3px solid $border-green;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 150px;
      @include media-breakpoint-up(xl) {
        width: 1049px;
        // height: 509px;
        margin-bottom: 215px;
      }
      &:nth-child(6) {
        margin-bottom: 0;
      }
      .each-msg {
        position: absolute;
        width: 80%;
        // height: 90px;
        left: 15px;
        top: -36px;
        background-color: white;
        color: black;
        z-index: 3;
        padding: 10px 10px 20px;
        filter: drop-shadow(12px 12px 10px rgba(0, 0, 0, 0.4));
         @include media-breakpoint-up(md) {
          width: 300px;
        }
        @include media-breakpoint-up(xl) {
          padding: 20px;
          left: -75px;
          top: 42px;
          width: 507px;
        }
        .msg-wrapper {
          position: relative;
          margin-bottom: 0px;
          padding-top: 10px;
          @include media-breakpoint-up(xl) {
            padding-top: 20px;
          }
          .title {
            color: $gold;
            font-size: 18px;
            letter-spacing: calc(50 / 1000 * 18px);
            @include media-breakpoint-up(xl) {
              font-size: 32px;
              letter-spacing: calc(50 / 1000 * 32px);
            }
          }
          .gold-hr {
            border-color: $gold;
            margin-top: 10px;
            margin-bottom: 10px;
          }
          .text {
            font-size: 12px;
            letter-spacing: calc(50 / 1000 * 12px);
            @include media-breakpoint-up(xl) {
              font-size: 21px;
              letter-spacing: calc(100 / 1000 * 21px);
            }
          }
        }
        .sub-image-wrapper{
          padding: 20px 0 10px;
          text-align: end;
          display: none;
          @include media-breakpoint-up(xl) {
            display: block;
            
          }
        }
        .sub-image {
          // position: absolute;
          // bottom: 10px;
          // right: 20px;
          width: 70px;
          height: 70px;
          display: none;
          @include media-breakpoint-up(xl) {
            display: inline-block;
            
          }
        }
      }
      .each-img {
        position: absolute;
        right: 18px;
        bottom: -20px;
        z-index: 2;
        width: 80%;
        max-height: 90%;
        filter: drop-shadow(12px 12px 8px rgba(0, 0, 0, 0.2));
        @include media-breakpoint-up(xl) {
          right: 50px;
          top: -67px;
          width: 65%;
          max-height: 508px;
        }
      }
    }
    #description {
      color: $gold;
      text-align: center;
      font-size: 18px;
      letter-spacing: calc(50 / 1000 * 18px);
      padding-top: 120px;
      padding-bottom: 100px;
      @include media-breakpoint-up(xl) {
        font-size: 32px;
        letter-spacing: calc(50 / 1000 * 32px);
        padding-top: 110px;
        padding-bottom: 110px;
      }
    }
  }
}
</style>


<script>
import Vue from "vue";
import Swiper1 from "./Swiper1";
import VueScrollTo from "vue-scrollto";
Vue.use(VueScrollTo);
export default {
  props:["id"],
  data() {
    return {
      swiperImages: [
        {
          src: "/static/封面/服務項目.png",
          src_mobile: "/static/封面/mobile/服務項目.png"
        }
      ],
      windowWidth: 10,
      categories: [
        {id:'i0',
          src: "/static/pic/pic-02_1.png",
          icon: "/static/icon/icon-01@4x.png",
          title: "整建",
          text: "泥作翻修，整建，拆除，裝潢設計施工</br>整建工程的規劃設計客製</br>讓您舊屋彷彿浴火重生",
          s_src: "/static/pic/東林修改3/整建.png",
          s_icon: "/static/icon/服務項目icon-01@4x.png"
        },
        {id:'i1',
          src: "/static/pic/pic-03_1.png",
          icon: "/static/icon/icon-02@4x.png",
          title: "修繕",
          text: "專門經營房屋修繕、整建隔間、套房改建，</br>專業團隊設計規劃施作一次到位",
          s_src: "/static/pic/東林修改3/修繕.png",
          s_icon: "/static/icon/服務項目icon-04@4x.png"
        },
        {id:'i2',
          src: "/static/pic/pic-04_1.png",
          icon: "/static/icon/icon-03@4x.png",
          title: "石材",
          text: "別墅、居家、廠辦大樓地坪、樓梯、牆面、</br>檯面的石材安裝、石材防護等工程</br>舉凡:景觀石材、室內設計裝潢、傢俱石材、</br>天然石材...</br>造型牆(景觀庭園灌漿牆、休閒室外屋牆等)",
          s_src: "/static/pic/東林修改3/石材.png",
          s_icon: "/static/icon/服務項目icon-03@4x.png"
        },
        {id:'i3',
          src: "/static/pic/pic-05_1.png",
          icon: "/static/icon/icon-04@4x.png",
          title: "磁磚",
          text: "嚴選義大利美利德進口磁磚,選用浴室磁磚、</br>木紋磚、文化石、拋光石英磚、馬賽克磁磚</br>及地磚、外牆磁磚…等</br>設計規劃施作一手承攬包辦",
          s_src: "/static/pic/東林修改3/磁磚.png",
          s_icon: "/static/icon/服務項目icon磁磚@4x.png"
        },
        {id:'i4',
          src: "/static/pic/pic-02_1.png",
          icon: "/static/icon/icon-01@4x.png",
          title: "電視牆",
          text: "電視牆背景牆各材質</br>(漆類、壁紙、木板、石材)通通包辦，</br>並提供豐富的型錄及全方位軟硬體整合，</br>包括電視牆版面設計，場域設計規劃，</br>無痛系統建置",
          s_src: "/static/pic/東林修改3/電視牆.png",
          s_icon: "/static/icon/服務項目icon電視牆@4x.png"
        },
        {id:'i5',
          src: "/static/pic/pic-03_1.png",
          icon: "/static/icon/icon-02@4x.png",
          title: "防水",
          text: "內外牆防水,屋頂防水隔熱,壁癌,廁所漏水,</br>浴室漏水,天花板漏水處理及鑑定",
          s_src: "/static/pic/東林修改3/防水.png",
          s_icon: "/static/icon/服務項目icon-02@4x.png"
        }
      ],
      isExpand: false
    };
  },
  watch: {},
  methods: {},
  mounted() {
    let vm = this;
    vm.windowWidth = window.innerWidth;
    let category=vm.$route.params["id"];
    // console.log('hi'+category);
    // console.log(this.id);
    cancelScroll = this.$scrollTo(`#${category}`, 600,{offset: -200,});
    if(category!='ii'){
      cancelScroll()
    }
    
  },
  created() {},
  components: {
    Swiper1
  }
};
</script>





