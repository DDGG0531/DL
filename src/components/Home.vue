<template>
<div>
  <!-- 插入 component swiper1  -->
  <Swiper1></Swiper1>
  <!-- Our service 區塊-->
  <section id="ourService" class="container">
    <!-- 標題 -->
    <h1 class="topic">OUR SERVICE</h1>
    <!-- 圖片及hover效果 -->
    <div id="ourService-work" class="row">
      <!-- 每一格圖片 測試 -->
      <div class="col element">
        <img src="/static/pic/pic-02_1.png">
        <div class="test-hover">
          <!-- 初始文字 -->
          <p class="before-side">Hover me</p>
          <!-- 展開圖示 -->
          <div class="after-side">
            <img src="/static/icon/icon-01@4x.png" style="height:95px">
            <p>Hello</p>
          </div>
        </div>
      </div>
      <div class="col element">
        <img src="/static/pic/pic-03_1.png">
        <div class="test-hover">
          <!-- 初始文字 -->
          <p class="before-side">Hover me</p>
          <!-- 展開圖示 -->
          <div class="after-side">
            <img src="/static/icon/icon-02@4x.png" style="height:95px">
            <p>Hello</p>
          </div>
        </div>
      </div>
      <div class="col element">
        <img src="/static/pic/pic-04_1.png">
        <div class="test-hover">
          <!-- 初始文字 -->
          <p class="before-side">Hover me</p>
          <!-- 展開圖示 -->
          <div class="after-side">
            <img src="/static/icon/icon-03@4x.png" style="height:95px">
            <p>Hello</p>
          </div>
        </div>
      </div>
      <div class="col element">
        <img src="/static/pic/pic-05_1.png">
        <div class="test-hover">
          <!-- 初始文字 -->
          <p class="before-side">Hover me</p>
          <!-- 展開圖示 -->
          <div class="after-side">
            <img src="/static/icon/icon-04@4x.png" style="height:95px">
            <p>Hello</p>
          </div>
        </div>
      </div>
      <!-- 每一格圖片 正式 -->
      <!-- <div class="col" v-for="item in items" :key="item.id">
        </div> -->
    </div>
  </section>
  <!-- Our service 區塊 end -->
  <!-- 插入 component Parallax -->
  <Parallax :parallaxImage="'/static/pic/pic-06_1.png'"></Parallax>
  <!-- 插入 component Parallax end-->
  <!-- Project 區塊 -->
  <section id="project" >
    <div class="container">
    <!-- 標題 -->
    <h1 class="topic">PROJECT</h1>
    <!-- (左)文字+(右)圖片 -->
    <div id="project-wrapper">
      <div class="text-block">
        <h2 class="text-block-topic">蘇先生2層透天屋整體修繕完工</h2>
        <div class="text-block-dark">
          ABC
        </div>
      </div>
      <img src="/static/pic/pic-07_1.png" class="img-block">  
    </div>
    <!-- 下方NEXT按鈕 -->
    <div class="next-btn"><a href="">NEXT></a></div>
    </div>
  </section>
  <!-- Project 區塊 end-->
  <!-- 插入 component swiper2 -->
  <Swiper2></Swiper2>  
  <!-- 插入 component swiper2 end-->
  <!-- White divider 區塊 -->
  <div id="white-divider"></div>
  <!-- White divider 區塊 end-->
  <!-- 插入 component Parallax -->
  <Parallax :parallaxImage="'/static/pic/pic-12_1.png'"></Parallax>
  <!-- 插入 component Parallax end-->
</div>

</template>

<style lang="scss" scoped>
// $grid-breakpoints: (
//         xs: 0,
//         sm: 576px,
//         md: 768px,
//         lg: 992px,
//         xl: 1440px,
// );
// $container-max-widths: (
//         sm: 540px,
//         md: 720px,
//         lg: 960px,
//         xl: 1366px,
// );

// @include media-breakpoint-up(xl)
// 可以吃到sass variable
@import "../assets/scss/all.scss";
// ourService欄位
#ourService {
  padding-top: 145px;
  padding-bottom: 300px;
  .topic {
    margin-bottom: 150px;
    font-size: 28px;
    letter-spacing: calc(200/1000*28px);
    font-weight: bold;
    color: $gold;
    text-align: center;
  }
  #ourService-work {
    .element:nth-child(1){
      padding-left: 15px;
      .test-hover{
        left: 15px;
      }
    }
    .element:nth-last-child(1){
      padding-right: 15px;
      .test-hover{
        right: 15px;
      }
    }
    .element {
      position: relative;
      padding-left: 7.5px;
      padding-right: 7.5px;
      .test-hover {
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
        }
      }
      &:hover {
        .test-hover {
          height: 100%;
          padding-top: 50%;
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
#project{
  background-color: $bg-green;
  padding-top: 200px;
  padding-bottom: 96px;
  .topic {
    margin-bottom: 200px;
    letter-spacing: calc(200/1000*28px);
    font-size: 28px;
    font-weight: bold;
    color: $gold;
    text-align: center;
  }
  .next-btn{
    font-size: 30px;
    color: rgb(91, 85, 83);
    font-style: italic;
    text-align: end;
    a{
      cursor: pointer;
    }
  }
  #project-wrapper{
    position: relative;
    height: 542px;
    margin-bottom: 40px;
    .text-block{
      position: absolute;
      left: 0;
      width: 454px;
      bottom: 0;
      top: 0;
      height: 100%;
      padding-top: 135px;
      padding-bottom: 66px;
      z-index: 2;
      .text-block-topic{
        color: black;
        font-weight: bold;
        font-size: 21px;
        padding-left: 15px;
      }
      .text-block-dark{
        background-color: rgba(91, 85, 83, .9);
        height: 100%;
      }
    }
    .img-block{
      position: absolute;
      right: 0;
      width: 791px;
      bottom: 0;
      top: 0;
      z-index: 1;
    }
  }
}
// 白色間隔
#white-divider{
  height: 368px;
  background-color: white;
}



  
</style>


<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import Parallax from './Parallax'
import Swiper1 from './Swiper1'
import Swiper2 from './Swiper2'

export default {
  data() {
    return {
     
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
    Parallax,
    Swiper2,
    Swiper1
  }
}
</script>




