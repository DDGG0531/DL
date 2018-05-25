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
        <div class="col-6 each top"><img src="/static/pic/東林內頁2/東林-公司簡介-02.png"></div>
        <div class="col-6 each top"><ul><li><span>緣起</span></li></ul>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat adipisci exercitationem delectus iure nihil magni quas corporis culpa asperiores, nesciunt ducimus excepturi ex aliquid, quo soluta vero, aspernatur ipsam cum beatae! Rem non, quo, cupiditate ratione harum aspernatur et consequatur, reiciendis laborum soluta odit quidem odio necessitatibus iure exercitationem vel.</div>
        <div class="col-6 each bottom"><ul><li><span>服務內容</span></li></ul>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum deserunt inventore incidunt deleniti non quis necessitatibus vel eligendi id ullam itaque, vitae ab magni ducimus nemo consequatur impedit, voluptates possimus, aliquam veniam eum provident fugiat nesciunt? Numquam iste necessitatibus libero obcaecati iusto voluptatem, quidem quisquam ut pariatur fugiat in minima!</div>
        <div class="col-6 each bottom"><img src="/static/pic/東林內頁2/東林-公司簡介-03.png"></div>
      </div>
    </div>
    
  </div>
  <!-- 插入 component Parallax -->
  <Parallax :parallaxImage="'/static/pic/東林內頁2/東林-公司簡介-04.jpg'" :parallaxHeight="751"></Parallax>
  <!-- 插入 component Parallax end-->
  <div id="white-block"></div>
  </div>
</template>


<style lang="scss" scoped>
@import "~bootstrap/scss/bootstrap";
@import "../assets/scss/all.scss";
#intro {
  padding-top: 105px;
  padding-bottom: 190px;
  #gold-title{
    position: relative;
    color: $gold;
    text-align: center;
    margin-bottom: 100px;
    font-size: 28px;
    letter-spacing: calc(200/1000*28px);
    &::before{
      content: '';
      border: .5px solid $gold;
      position: absolute;
      width: 450px;
      top: 50%;
      left: 0;
    }
    &::after{
      content: '';
      border: .5px solid $gold;
      position: absolute;
      width: 450px;
      top: 50%;
      right: 0;
    }
  }
  .each{
    font-size: 20px;
    &:nth-child(odd){
      padding-right: 60px;
    }
    &.top{
      margin-bottom: 70px;
    }
    ul{
      padding-left: 20px;
      font-weight: bold;
      li{
        color: $gold;
      }
      span{
        color: black;
      }
    }
  }
}

#white-block {
  height: 390px;
}

</style>

<script>
import Swiper1 from './Swiper1'
import Parallax from './Parallax'

export default {
  data() {
    return {
    swiperImages: [{
        src: '/static/pic/pic-06_1.png'
      }],
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
    Swiper1,
    Parallax
  }
}
</script>





