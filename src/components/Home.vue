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
        <img :src="item.src" class="element-image">
        <div class="text-hover">
        <!-- 初始文字 -->
        <p class="before-side">{{item.title}}</p>
        <!-- 展開圖示 -->
        <div class="after-side">
          <img :src="item.icon" class="element-icon">
          <h1>{{item.title}}</h1>
          <p class="d-none d-xl-block">{{item.text}}</p>
        </div>
        </div> 
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
        <h2 class="text-block-topic">{{swiper2Item['title']}}</h2>
        <div class="text-block-dark">
          <div class="row mx-0 top-block">
            <div class="col-xl-auto pr-0"><img src="/static/icon/icon-05@4x.png" class="icon-1"><p class="text">{{swiper2Item['place']}}</p></div>
            <div class="col-xl-auto pr-0"><img src="/static/icon/icon-06@4x.png" class="icon-2"><p class="text">{{swiper2Item['price']}}</p></div>
            <div class="col-xl-auto pr-0"><img src="/static/icon/icon-07@4x.png" class="icon-3"><p class="text">{{swiper2Item['pattern']}}</p></div>
            <div class="col-xl-auto pr-0"><img src="/static/icon/icon-08@4x.png" class="icon-4"><p class="text">{{swiper2Item['sqft']}}</p></div>
          </div>
          <!-- 中間"施作內容" -->
                <p class="mid-block">施作內容</p>
                <!-- ul文字 -->
                <div class="bottom-block">
                  <p class="text">{{swiper2Item.description}}</p>
                </div>
                <!-- more按鈕 -->
                <div class="btn-block">
                  <router-link :to="{ name: 'ProductInner', params: { id: swiper2Item.id}}">More</router-link>
                </div>
        </div>
      </div>
         <img :src="swiper2Item['cover_image']" class="img-block">  
      
    </div>
    <!-- 下方NEXT按鈕 -->
    <!-- <div class="next-btn">
      <router-link  :to="{ name: 'ProductInner', params: { id: swiper2Item['id'] }}" class="pointer">NEXT></router-link>
    </div> -->
    <!-- <div class="next-btn" @click="sendToSwiper2"></div> -->
    </div>
  </section>
  <!-- Project 區塊 end-->
  <!-- 插入 component swiper2 -->
  <Swiper2 v-on:swiper2Func="swiper2Func"></Swiper2>  
  <!-- 插入 component swiper2 end-->
  <!-- White divider 區塊 -->
  <div id="white-divider"></div>
  <!-- White divider 區塊 end-->
  <!-- 插入 component Parallax -->
  <Parallax :parallaxImage="'/static/pic/pic-12_1.png'" :type1="true"></Parallax>
  <!-- 插入 component Parallax end-->
</div>

</template>

<style lang="scss" scoped>
@import "~bootstrap/scss/bootstrap";
@import "../assets/scss/all.scss";

// ourService欄位
#ourService {
  padding-top: 77px;
  padding-bottom: 71px;
    @include media-breakpoint-up(xl){
       padding-top: 145px;
  padding-bottom: 300px;   }
  .topic {
    margin-bottom: 67px;
    font-size: 21px;
    letter-spacing: calc(200/1000*21px);
    font-weight: bold;
    color: $gold;
    text-align: center;
            @include media-breakpoint-up(xl){
       margin-bottom: 150px;
           font-size: 28px;
    letter-spacing: calc(200/1000*28px); }
  }
  #ourService-work {
    .element:nth-child(3n+1){
      padding-left: 15px;
      .text-hover{
        left: 15px;
      }
    }
    .element:nth-child(3n){
      padding-right: 15px;
      .text-hover{
        right: 15px;
      }
    }
    .element {
      position: relative;
      padding-left: 7.5px;
      padding-right: 7.5px;
      margin-bottom: 15px;
      .element-image{
        width: 100%;
        max-height: 480px;
      }
      .element-icon{
        max-width: 95px;
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
          h1{
            font-size: 23px;
                          @include media-breakpoint-up(xl){
     font-size: 28px; }
          }  
        }
      }
      &:hover {
        .text-hover {
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
        position: relative;
        background-color: rgba(91, 85, 83, .9);
        padding: 25px;
        height: 100%;
        .top-block{
        margin-bottom: 27px;
        .icon-1 {
          width: 21px;
          height: 29px;
        }
        .icon-2 {
          width: 13px;
          height: 26px;
        }
        .icon-3 {
          width: 27px;
          height: 27px;
        }
        .icon-4 {
          width: 30px;
          height: 28px;
        }
        .text {
          display: inline-block;
          color: white;
          font-size: 16px;
          margin-bottom: 0;
          padding-left: 10px;
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
        .text{
          font-size: 15px;
          white-space: pre-line;
        }
      }
      .btn-block {
        position: absolute;
        right: 0;
        bottom: 20px;
        width: 90px;
        height: 26px;
        &>a{
          cursor: pointer;
          color: $font-green;
          font-size: 28px;
        }
      }
      }
    }
    .img-block{
      position: absolute;
      right: 0;
      width: 791px;
      height: 542px;
      bottom: 0;
      top: 0;
      z-index: 1;
    }
  }
}
// 白色間隔
#white-divider{
  height: 274px;
  background-color: white;
    @include media-breakpoint-up(xl){
     height: 368px;    }
}



  
</style>


<script>
import Vue from 'vue'
import Parallax from './Parallax'
import Swiper1 from './Swiper1'
import Swiper2 from './Swiper2'

export default {
  data() {
    return {
      // 輪播圖
          swiperImages: [{
        src: '/static/封面/首頁.png',
        src_mobile:'/static/封面/mobile/首頁.png'
      },
      {
        src: '/static/封面/首頁.png',
        src_mobile:'/static/封面/mobile/首頁.png'
      }],
      // 分類
      categories: [
        {src:'/static/pic/pic-02_1.png',icon:'/static/icon/icon-01@4x.png',title:'整建',text:'房間牆面或外牆的增建與改造'},
        {src:'/static/pic/pic-03_1.png',icon:'/static/icon/icon-02@4x.png',title:'修繕',text:'房間牆面或外牆的增建與改造'},
        {src:'/static/pic/pic-04_1.png',icon:'/static/icon/icon-03@4x.png',title:'石材',text:'房間牆面或外牆的增建與改造'},
        {src:'/static/pic/pic-05_1.png',icon:'/static/icon/icon-04@4x.png',title:'磁磚',text:'房間牆面或外牆的增建與改造'},
        {src:'/static/pic/pic-02_1.png',icon:'/static/icon/icon-01@4x.png',title:'電視牆/背景牆',text:'房間牆面或外牆的增建與改造'},
        {src:'/static/pic/pic-03_1.png',icon:'/static/icon/icon-02@4x.png',title:'防水',text:'房間牆面或外牆的增建與改造'},
      ],
      swiper2Item:{},
      HomeCall:0,
    }
  },
  watch: {

  },
  methods: {
    swiper2Func(item){
      let vm= this;
      vm.swiper2Item=item;
    },
    sendToSwiper2(){
      let vm= this;
      vm.HomeCall= vm.HomeCall+1;
    }

  },

  mounted() {
    let vm = this;
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




