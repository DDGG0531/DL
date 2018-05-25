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
        <div class="each" v-for="(item) in categories" :key="item.id">
            <!-- 文字區塊 -->
          <div class="each-msg">
            <div class="msg-wrapper">
              <!-- 區塊內標題 -->
              <div class="title">{{item.title}}</div>
              <!-- hr -->
              <hr class="gold-hr">
              <!-- 區塊內描述 -->
              <div class="text">{{item.text}}</div>
            </div>
            <!-- 簡圖 -->
              <img :src="item.s_icon" class="sub-image">
          </div>
          <!-- 圖片區塊 -->
          <img :src="item.s_src" class="each-img">

          
        </div>
        <!-- 金色文字區塊 -->
        <div id="description">可結合水電、油漆、裝潢、鋁門窗等，作一次到位的服務</div>
      </div>
    </section>
    <!-- 綠底區塊 end -->
  </div>
</template>


<style lang="scss" scoped>
@import "~bootstrap/scss/bootstrap";
@import "../assets/scss/all.scss";

// @include media-breakpoint-up(xl)
#title-block {
  padding-top: 110px;
  padding-bottom: 110px;
  .title {
    color: $gold;
    font-size: 28px;
    text-align: center;
    letter-spacing: calc(200/1000*28px);
  }
}

#main {
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
  margin-bottom: 285px;
  .color-block {
    background-color: $bg-green;
    padding-top: 200px;
    .each {
      position: relative;
      width: 1049px;
      height: 509px;
      border: 3px solid $border-green;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 215px;
      &:nth-child(6) {
        margin-bottom: 0;
      }
      .each-msg {
        position: absolute;
        width: 507px;
        height: 224px;
        left: -75px;
        top: 42px;
        background-color: white;
        color: black;
        z-index: 3;
        padding-left: 20px;
        padding-right: 20px;
        filter: drop-shadow(12px 12px 10px rgba(0, 0, 0, 0.4));
        .msg-wrapper {
          position: relative;
          margin-bottom: 0px;
          padding-top: 20px;
          .title {
            color: $gold;
            font-size: 32px;
            letter-spacing: calc(50/1000*32px);
          }
          .gold-hr {
            border-color: $gold;
            margin-top: 10px;
            margin-bottom: 10px;
          }
          .text {
            font-size: 21px;
            letter-spacing: calc(100/1000*21px);
          }
        }
        .sub-image {
          position: absolute;
          bottom: 10px;
          right: 20px;
          width: 70px;
          height: 70px;
        }
      }
      .each-img {
        position: absolute;
        right: 50px;
        top: -67px;
        z-index: 2;
        filter: drop-shadow(12px 12px 8px rgba(0, 0, 0, 0.2));
      }
    }
    #description {
      font-size: 32px;
      color: $gold;
      text-align: center;
      letter-spacing: calc(50/1000*32px);
      padding-top: 110px;
      padding-bottom: 110px;
    }
  }
}

</style>


<script>
import Swiper1 from './Swiper1'
export default {
  data() {
    return {
      swiperImages:[{src:'/static/pic/pic-12_1.png'}],
      windowWidth: 10,
      categories: [
        {src:'/static/pic/pic-02_1.png',icon:'/static/icon/icon-01@4x.png',title:'整建工程',text:'房間牆面或外牆的增建與改造',s_src:'/static/pic/東林內頁/服務項目pic-01.png',s_icon:'/static/pic/東林內頁/服務項目icon-01@4x.png'},
        {src:'/static/pic/pic-03_1.png',icon:'/static/icon/icon-02@4x.png',title:'修繕工程',text:'房間牆面或外牆的增建與改造',s_src:'/static/pic/東林內頁/服務項目pic-02.png',s_icon:'/static/pic/東林內頁/服務項目icon-02@4x.png'},
        {src:'/static/pic/pic-04_1.png',icon:'/static/icon/icon-03@4x.png',title:'石材',text:'房間牆面或外牆的增建與改造',s_src:'/static/pic/東林內頁/服務項目pic-03.png',s_icon:'/static/pic/東林內頁/服務項目icon-03@4x.png'},
        {src:'/static/pic/pic-05_1.png',icon:'/static/icon/icon-04@4x.png',title:'磁磚',text:'房間牆面或外牆的增建與改造',s_src:'/static/pic/東林內頁/服務項目pic-04.png',s_icon:'/static/pic/東林內頁/服務項目icon-04@4x.png'},
        {src:'/static/pic/pic-02_1.png',icon:'/static/icon/icon-01@4x.png',title:'電視牆/背景牆',text:'房間牆面或外牆的增建與改造',s_src:'/static/pic/東林內頁/服務項目pic-01.png',s_icon:'/static/pic/東林內頁/服務項目icon-01@4x.png'},
        {src:'/static/pic/pic-03_1.png',icon:'/static/icon/icon-02@4x.png',title:'防水',text:'房間牆面或外牆的增建與改造',s_src:'/static/pic/東林內頁/服務項目pic-02.png',s_icon:'/static/pic/東林內頁/服務項目icon-02@4x.png'},
      ]
    }
  },
  watch:{

  },
  methods: {
    
  },
  mounted() {
    let vm=this;
    vm.windowWidth=window.innerWidth;
  },
  created() {

  },
  components: {
    Swiper1
  }
}
</script>





