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
        <img src="/static/pic/東林內頁2/東林-接案流程-02.png">
      </div>
      <hr class="gold-hr">
      <!-- 時間直圖 -->
      <div class="pic-Y text-center">
        <img src="/static/pic/東林內頁2/東林-接案流程-03.png">
      </div>
      
    </div>
    
  </div>
  </div>
</template>


<style lang="scss" scoped>
@import "~bootstrap/scss/bootstrap";
@import "../assets/scss/all.scss";
#Pipe {
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
  .gold-hr{
    margin-top: 65px;
    margin-bottom: 126px;
    border: .5px solid $gold;
  }
  
}

</style>

<script>
import Swiper1 from './Swiper1'

export default {
  data() {
    return {
    swiperImages: [{
        src: '/static/pic/東林內頁2/東林-接案流程-01.png'
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
  }
}
</script>





