<template>
<div>
  <!-- 插入 component swiper1  -->
  <Swiper1 :swiperImages="swiperImages" :swiperText="true"></Swiper1>
  <!-- Our service 區塊-->
  <section id="ourService" class="container">
    <!-- 標題 -->
    <h1 class="topic">OUR SERVICE</h1>
    <!-- 圖片及hover效果 -->
    <div id="ourService-work" class="row">
      <!-- 每一格圖片 測試 -->
      
      <!-- 每一格圖片 正式 -->
      <div class="col-6 col-xl-4 element" v-for="item in categories" :key="item.id">
        <router-link :to="{ name: 'Service' , params:{ id:item.id} }"  >
        <img :src="item.src" class="element-image">
        <div class="text-hover">
        <!-- 初始文字 -->
        <p class="before-side">{{item.title}}</p>
        <!-- 展開圖示 -->
        <div class="after-side">
          <img :src="item.icon" class="element-icon">
          <h1>{{item.title}}</h1>
          <p class="d-none d-xl-block" v-html="item.text"></p>
        </div>
        </div> 

        </router-link>

      </div>
    </div>
  </section>
  <!-- Our service 區塊 end -->
  <!-- 插入 component Parallax -->
  <Parallax :parallaxImage="'/static/pic/pic-06_1.png'" :type1="true"></Parallax>
  <!-- 插入 component Parallax end-->
  <!-- Project 區塊 -->
  <section id="project" >
    <div class="container">
    <!-- 標題 -->
    <h1 class="topic">PROJECT</h1>
    <!-- (左)文字+(右)圖片 -->
    <div id="project-wrapper">
      <div class="text-block">
        <h2 class="text-block-topic d-none d-xl-block">{{swiper2Item['title']}}</h2>
        <div class="text-block-dark">
          <div class="row mx-0 top-block">
            <div class="col-6 col-xl-auto pr-0 pb-1 pb-xl-3"><img src="/static/pic/東林修改2/東林icon-06@4x.png" class=" icon"><p class="text">{{swiper2Item['place']}}</p></div>
            <div class="col-6 col-xl-auto pr-0 pb-1 pb-xl-3"><img src="/static/pic/東林修改2/東林icon-07@4x.png" class=" icon"><p class="text">{{swiper2Item['price']}}</p></div>
            <div class="col-6 col-xl-auto pr-0 pb-1 pb-xl-3"><img src="/static/pic/東林修改2/東林icon-08@4x.png" class=" icon"><p class="text">{{swiper2Item['pattern']}}</p></div>
            <div class="col-6 col-xl-auto pr-0 pb-1 pb-xl-3"><img src="/static/pic/東林修改2/東林icon-09@4x.png" class=" icon"><p class="text">{{swiper2Item['sqft']}}</p></div>
          </div>
          <!-- 中間"施作內容" -->
                <p class="mid-block">施作內容</p>
                <!-- ul文字 -->
                <div class="bottom-block">
                  <p class="text">{{swiper2Item.description}}</p>
                </div>
                <!-- more按鈕 -->
                <div class="btn-block d-flex justify-content-end">
                  
                  <router-link class="col-auto font" :to="{ name: 'ProductInner', params: { id: swiper2Item.id}}">More</router-link>
                 
                </div>
        </div>
      </div>
         <img :src="swiper2Item['cover_image']" class="img-block">  
          <div class="next-btn-mb d-block d-xl-none text-right" @click="sendToSwiper2"><p>Next</p></div>

    </div>
    <!-- 下方NEXT按鈕 -->
    <!-- <div class="next-btn">
      <router-link  :to="{ name: 'ProductInner', params: { id: swiper2Item['id'] }}" class="pointer">NEXT></router-link>
    </div> -->
    <div class="next-btn text-right d-none d-xl-block" ><div @click="sendToSwiper2" class="d-inline-block pointer">Next</div></div>
    </div>
  </section>
   
  <!-- Project 區塊 end-->
  <!-- 插入 component swiper2 -->
  <Swiper2 v-on:swiper2Func="swiper2Func" :HomeCall="HomeCall"></Swiper2>  
  <!-- 插入 component swiper2 end-->
  <!-- White divider 區塊 -->
  <div id="white-divider"></div>
  <!-- White divider 區塊 end-->
  <!-- 插入 component Parallax -->
  <Parallax :parallaxImage="'/static/pic/pic-12_1.png'" :type1="true"></Parallax>
  <!-- 插入 component Parallax end-->
  <!-- 插入 聯絡框 -->
  <div id="contact-btn"><a href="tel:0916787430">0916-787430</a><a href="tel:0928412128">0928-412128</a></div>
  <div id="contact-btn-mb" v-bind:class="{expand: isExpand}" ><div class="click-zone"  @click="isExpand=!isExpand"></div><a href="tel:0916787430">0916-787430</a><a href="tel:0928412128">0928-412128</a></div>
</div>

</template>

<style lang="scss" scoped>
@import "~bootstrap/scss/bootstrap";
@import "../assets/scss/all.scss";

// ourService欄位
#ourService {
  padding-top: 77px;
  padding-bottom: 71px;
  @include media-breakpoint-up(xl) {
    padding-top: 145px;
    padding-bottom: 300px;
  }
  .topic {
    margin-bottom: 67px;
    font-size: 21px;
    letter-spacing: calc(200 / 1000 * 21px);
    font-weight: bold;
    color: $gold;
    text-align: center;
    @include media-breakpoint-up(xl) {
      margin-bottom: 150px;
      font-size: 28px;
      letter-spacing: calc(200 / 1000 * 28px);
    }
  }
  #ourService-work {
    .element:nth-child(3n + 1) {
      @include media-breakpoint-up(xl) {
        padding-left: 15px;
        .text-hover {
          left: 15px;
        }
      }
    }
    .element:nth-child(3n) {
      @include media-breakpoint-up(xl) {
        padding-right: 15px;
        .text-hover {
          right: 15px;
        }
      }
    }
    .element {
      position: relative;
      padding-left: 7.5px;
      padding-right: 7.5px;
      margin-bottom: 15px;
      .element-image {
        width: 100%;
        height: 100%;
      }
      .element-icon {
        width: 95px;
        height: 90px;
        margin-bottom: 15px;
      }
      .text-hover {
        position: absolute;
        overflow: hidden;
        z-index: 1;
        left: 7.5px;
        right: 7.5px;
        bottom: 0;
        height: 50px;
        line-height: 50px;
        background-color: $light-green;
        color: white;
        transition: all 1s ease;
        text-align: center;
        .before-side {
          display: block;
        }
        .after-side {
          display: none;
          h1 {
            font-size: 23px;
            @include media-breakpoint-up(xl) {
              font-size: 28px;
            }
          }
        }
      }
      &:hover {
        .text-hover {
          height: 100%;
          padding-top: 10%;
          @include media-breakpoint-up(xl) {
               padding-top: 30%;
            }
         
          .before-side {
            display: none;
          }
          .after-side {
            display: block;
          }
        }
      }
    }
  }
}
// project 欄位
#project {
  background-color: $bg-green;
  padding-top: 75px;
  padding-bottom: 20px;
  @include media-breakpoint-up(xl) {
    padding-top: 200px;
    padding-bottom: 96px;
  }
  .container {
    padding: 0;
    @include media-breakpoint-up(xl) {
      padding: 0 15px;
    }
  }
  .topic {
    margin-bottom: 60px;
    letter-spacing: calc(200 / 1000 * 21px);
    font-size: 21px;
    font-weight: bold;
    color: $gold;
    text-align: center;
    @include media-breakpoint-up(xl) {
      margin-bottom: 200px;
      letter-spacing: calc(200 / 1000 * 28px);
      font-size: 28px;
    }
  }
  .next-btn {
    color: rgb(91, 85, 83);
    font-style: italic;
    font-size: 20px;
    text-align: end;
    @include media-breakpoint-up(xl) {
      font-size: 28px;
    }
  }

  #project-wrapper {
    position: relative;
    height: 520px;
    margin-bottom: 0;
    @include media-breakpoint-up(xl) {
      height: 542px;
      margin-bottom: 40px;
    }
    .next-btn-mb {
      position: absolute;
      bottom: 0;
      right: 10%;
      color: rgb(91, 85, 83);
      font-style: italic;
      cursor: pointer;
      font-size: 20px;
      text-align: end;
    }
    .text-block {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 200px;
      width: 85%;
      // height: 263px;
      z-index: 2;
      @include media-breakpoint-up(xl) {
        padding-top: 135px;
        padding-bottom: 66px;
        transform: translateX(-100%);
        bottom: 0;
        height: 100%;
        top: 0;
        width: 500px;
      }
      .text-block-topic {
        color: black;
        font-weight: bold;
        font-size: 21px;
        padding-left: 15px;
      }
      .text-block-dark {
        overflow: hidden;
        position: relative;
        background-color: rgba(91, 85, 83, 0.9);
        max-height: 263px;
        padding: 10px 10px 30px;
        @include media-breakpoint-up(xl) {
          padding: 25px;
          max-height: 100%;
          height: 100%;
        }

        .top-block {
          margin-bottom: 0;
          @include media-breakpoint-up(xl) {
            margin-bottom: 27px;
          }
          .icon {
            width: 22px;
          }
          .text {
            display: inline-block;
            color: white;
            font-size: 16px;
            margin-bottom: 0;
            padding-left: 10px;
            vertical-align: middle;
          }
        }
        .mid-block {
          margin-bottom: 15px;
          font-size: 18px;
          color: white;
          padding: 0 15px;
        }
        .bottom-block {
          color: white;
          padding: 0 15px;
          .text {
            overflow: hidden;
            font-size: 14px;
            white-space: pre-line;
            margin-bottom: 0;
            height: 105px;
            @include media-breakpoint-up(xl) {
              height: 125px;
            }
          }
        }
        .btn-block {
          // text-align: end;
          padding: 0 15px;
          & > .font {
            cursor: pointer;
            color: $font-green;
            font-size: 20px;
            @include media-breakpoint-up(xl) {
              font-size: 28px;
            }
          }
        }
      }
    }
    .img-block {
      position: absolute;
      right: 0;
      width: 100%;
      overflow: hidden;
      // height: 246px;
      max-height: 400px;
      bottom: 0;
      top: 0;
      z-index: 1;
      @include media-breakpoint-up(xl) {
        width: 791px;
        height: 542px;
        max-height: 542px;
      }
    }
  }
}
// 白色間隔
#white-divider {
  height: 274px;
  background-color: white;
  @include media-breakpoint-up(xl) {
    height: 368px;
  }
}
</style>


<script>
import Vue from "vue";
import Parallax from "./Parallax";
import Swiper1 from "./Swiper1";
import Swiper2 from "./Swiper2";

export default {
  data() {
    return {
      // 輪播圖
      swiperImages: [
        {
          src: "/static/封面/首頁.png",
          src_mobile: "/static/封面/mobile/首頁.png"
        },
        {
          src: "/static/封面/首頁2.png",
          src_mobile: "/static/封面/mobile/首頁2.png"
        },
        {
          src: "/static/封面/首頁3.png",
          src_mobile: "/static/封面/mobile/首頁3.png"
        },
      ],
      // 分類
      categories: [
        { id:'i0',
          src: "/static/pic/東林修改3/整建.png",
          icon: "/static/icon/icon-01@4x.png",
          title: "整建",
          text: "泥作翻修，整建，拆除，裝潢設計施工"
        },
        { id:'i1',
          src: "/static/pic/東林修改3/修繕.png",
          icon: "/static/icon/icon-04@4x.png",
          title: "修繕",
          text: "室內室外大小裝修修繕工程"
        },
        { id:'i2',
          src: "/static/pic/東林修改3/石材.png",
          icon: "/static/icon/icon-03@4x.png",
          title: "石材",
          text:
            "別墅、居家、廠辦大樓地坪、樓梯、<br>牆面、檯面的石材安裝、石材防護"
        },
        { id:'i3',
          src: "/static/pic/東林修改3/磁磚.png",
          icon: "/static/icon/磁磚icon.png",
          title: "磁磚",
          text: "嚴選義大利進口磁磚, 室內外磁磚舖設"
        },
        { id:'i4',
          src: "/static/pic/東林修改3/電視牆.png",
          icon: "/static/icon/電視牆icon.png",
          title: "電視牆",
          text: "電視牆背景牆各材質(漆類、壁紙、<br>木板、石材)施作"
        },
        { id:'i5',
          src: "/static/pic/東林修改3/防水.png",
          icon: "/static/icon/icon-02@4x.png",
          title: "防水",
          text:
            "內外牆防水,屋頂防水隔熱,壁癌,<br>廁所漏水,浴室漏水"
        }
      ],
      swiper2Item: {},
      HomeCall: 0,
      isExpand: false
    };
  },
  watch: {},
  methods: {
    swiper2Func(item) {
      let vm = this;
      vm.swiper2Item = item;
    },
    sendToSwiper2() {
      let vm = this;
      // 最多六筆 0-5
      if (vm.HomeCall == 5) {
        vm.HomeCall = 0;
      } else {
        vm.HomeCall = vm.HomeCall + 1;
      }
    }
  },

  mounted() {
    let vm = this;
  },
  created() {},
  components: {
    Parallax,
    Swiper2,
    Swiper1
  }
};
</script>




