<template>
<div>
  <!-- Our service 區塊-->
  <section id="ourService" class="container">
    <!-- 標題 -->
    <h1 class="topic">OUR SERVICE 微軟正黑體</h1>
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
  <!-- Project 區塊 -->
  <section id="project" class="container">
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
    
  </section>
  <!-- Project 區塊 end-->
</div>

</template>

<style lang="scss" scoped>
@import "~bootstrap/scss/bootstrap";
@import "../assets/scss/all.scss";
// @include media-breakpoint-up(xl)
// 可以吃到sass variable
#ourService {
  padding-top: 125px;
  padding-bottom: 245px;
  .topic {
    margin-bottom: 100px;
    font-size: 40px;
    font-weight: bold;
    color: $gold;
    text-align: center;
  }
  #ourService-work {
    .element {
      position: relative;
      .test-hover {
        position: absolute;
        overflow: hidden;
        z-index: 1;
        left: 15px;
        right: 15px;
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
#project{
  .topic {
    margin-bottom: 100px;
    font-size: 40px;
    font-weight: bold;
    color: $gold;
    text-align: center;
  }
  #project-wrapper{
    position: relative;
    height: 520px;
    .text-block{
      position: absolute;
      left: 0;
      width: 430px;
      bottom: 0;
      top: 0;
      height: 100%;
      padding-top: 95px;
      padding-bottom: 72px;
      z-index: 2;
      .text-block-topic{
        color: black;
        font-weight: bold;
        font-size: 24px;
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
      width: 760px;
      bottom: 0;
      top: 0;
      z-index: 1;
    }
  }
}



  
</style>


<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

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

  }
}
</script>




