<template>
<div>
  <!-- 插入 component Swiper1 -->
  <Swiper1 :swiperImages="swiperImages" :swiperText="false"></Swiper1>
  <!-- 插入 component Swiper1 end -->
  <div id="Contact">
    <div class="container">
      <!-- 金色大字 -->
      <div id="gold-title">聯絡我們</div>
      <div class="sub-title">整修工程 | 翻修工程 | 石材 | 電視牆 | 背景牆 | 防水</div>
      <div class="narrow-div">
        <div class="row ">
          <div class="col-6 block-1">
            <img src="/static/pic/東林內頁2/東林-公司簡介-02.png">
          </div>
          <div class="col-6 block-2">
            <!-- 複製footer -->
            <div class="row h-100 align-content-center ">
              <!-- 每一行資訊+圖 -->
              <div class="col-12 element ">
                <div class="img-wrapper">
                  <img src="/static/icon/icon-11@4x.png" class="icon align-middle">
                </div>
                <span class="text text-cn">
                  <a href="https://www.google.com/maps?ll=24.108662,120.651551&z=16&t=m&hl=zh-TW&gl=TW&mapclient=embed&q=402%E5%8F%B0%E4%B8%AD%E5%B8%82%E5%8D%97%E5%8D%80%E7%A6%8F%E7%94%B0%E4%BA%8C%E8%A1%97367%E8%99%9F"
                    class="">台中市南區福田二街367號2樓</a>
                </span>
              </div>
              <div class="col-12 element">
                <div class="img-wrapper">
                  <img src="/static/icon/icon-12@4x.png" class="icon align-middle">
                </div>
                <span class="text ">
                  <a href="mailto:hong81512@gmail.com" class="">hong81512@gmail.com</a>
                </span>
              </div>
              <div class="col-12 element">
                <div class="img-wrapper">
                  <img src="/static/icon/icon-13@4x.png" class="icon align-middle">
                </div>
                <span class="text ">
                  <a href="tel:0422607982" class="">04-22607982</a>
                </span>
              </div>
              <div class="col-12 element">
                <div class="img-wrapper">
                  <img src="/static/icon/icon-14@4x.png" class="icon align-middle">
                </div>
                <span class="text ">
                  <a href="tel:0928412128" class="">0928-412128</a>
                </span>
              </div>

            </div>
            <!-- 複製footer end -->
          </div>
          <div class="col-xl-12 gmap-block">
            <!-- Google map -->
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3641.7961762998607!2d120.6493627149882!3d24.10866228441403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693c43a8e145ed%3A0x7802db2da37fd61!2zNDAy5Y-w5Lit5biC5Y2X5Y2A56aP55Sw5LqM6KGXMzY36Jmf!5e0!3m2!1szh-TW!2stw!4v1526616379199"
              width="200" height="320" frameborder="0" style="border:0" allowfullscreen></iframe>
            <!-- Google map end-->
          </div>
        </div>
      </div>
      <hr class="gold-hr">
      <div class="narrower-div">
        <div class="row">
          <div class="col-12">
            <!-- form -->
            <form>
              <div class="form-group row">
                <li class="col-sm-3 col-form-label">
                  <label for="name">姓&emsp;&emsp;名</label>
                </li>
                <div class="col-sm-9">
                  <input class="form-control" id="name" placeholder="">
                </div>
              </div>
              <div class="form-group row">
                <li class="col-sm-3 col-form-label">
                  <label for="address">服務地址</label>
                </li>
                <div class="col-sm-9">
                  <input class="form-control" id="address" placeholder="">
                </div>
              </div>
              <div class="form-group row">
                <li class="col-sm-3 col-form-label">
                  <label for="phone">電&emsp;&emsp;話</label>
                </li>
                <div class="col-sm-9">
                  <input class="form-control" id="phone" placeholder="">
                </div>
              </div>
              <div class="form-group row">
                <li class="col-sm-3 col-form-label">
                  <label for="mail">電子郵件</label>
                </li>
                <div class="col-sm-9">
                  <input class="form-control" id="mail" placeholder="">
                </div>
              </div>
              <!-- radios -->
               <fieldset class="form-group">
    <div class="row">
      <li class="col-form-label col-sm-3 pt-0"><label >詢問項目</label></li>  
      <div class="col-sm-9">
        <div class="custom-control custom-radio">
          <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" value="option1">
          <label class="custom-control-label" for="customRadio1">室內、室外防水抓漏工程</label>
        </div>
        <div class="custom-control custom-radio">
          <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" value="option2">
          <label class="custom-control-label" for="customRadio2">房屋增建、改造</label>
        </div>
        <div class="custom-control custom-radio">
          <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input" value="option3">
          <label class="custom-control-label" for="customRadio3">廚房、衛浴翻修、改造</label>
        </div>
        <div class="custom-control custom-radio">
          <input type="radio" id="customRadio4" name="customRadio" class="custom-control-input" value="option4">
          <label class="custom-control-label" for="customRadio4">房屋、大樓、公寓外牆整修</label>
        </div>
        <div class="custom-control custom-radio">
          <input type="radio" id="customRadio5" name="customRadio" class="custom-control-input" value="option4">
          <label class="custom-control-label" for="customRadio5">對於我們的建議</label>
        </div>

      </div>
    </div>
  </fieldset>
  <!-- redios end -->
  <div class="form-group row">
                <li class="col-sm-3 col-form-label">
                  <label for="address">詢問說明</label>
                </li>
                <div class="col-sm-9">
                  <textarea class="form-control" id="textarea" rows="5"></textarea>
                </div>
              </div>
              <div class="row justify-content-end">
                <div class="col-auto"><button ><span>提</span><span>交</span></button></div>
              </div>
            </form>
            <!-- form end-->
          </div>
        </div>
      </div>
    </div>

  </div>
</div>



</template>


<style lang="scss" scoped>
@import "~bootstrap/scss/bootstrap";
@import "../assets/scss/all.scss";
#Contact {
  padding-top: 105px;
  padding-bottom: 275px;
  #gold-title {
    position: relative;
    color: $gold;
    text-align: center;
    margin-bottom: 60px;
    font-size: 28px;
    letter-spacing: calc(200/1000*28px);
    &::before {
      content: '';
      border: .5px solid $gold;
      position: absolute;
      width: 450px;
      top: 50%;
      left: 0;
    }
    &::after {
      content: '';
      border: .5px solid $gold;
      position: absolute;
      width: 450px;
      top: 50%;
      right: 0;
    }
  }
  .sub-title {
    font-size: 20px;
    letter-spacing: calc(100/1000*20px);
    margin-bottom: 66px;
    text-align: center;
  }
  .gold-hr {
    margin-top: 65px;
    margin-bottom: 126px;
    border: .5px solid $gold;
  }
  .narrow-div {
    padding-left: 160px;
    padding-right: 160px;
    .block-1 {
      margin-bottom: 66px;
    }
    .block-2 {
      margin-bottom: 66px;
      .element {
        margin-bottom: 10px;
        .icon {
          height: 20px;
          max-width: 22px;
        }
        .text {
          height: 30px;
          font-size: 20px;
          letter-spacing: calc(100/1000*20px);
          line-height: 30px;
          vertical-align: middle;
        }
        .text-cn {
          vertical-align: sub;
        }
        .img-wrapper {
          width: 27px;
          display: inline-block;
          text-align: center;
          margin-right: 2px;
        }
      }
    }
    .gmap-block {
      margin-bottom: 90px;
      &>iframe {
        max-width: 100%;
        width: 100%;
      }
    }
  }
  .narrower-div{
    padding: 0 230px;
    label , legend {
      font-size: 21px;
      color: black;
      letter-spacing: calc(100/1000*21px);
    }
    li{
      list-style-position: inside;
      color: $gold;
    }


    .form-group{
      margin-bottom: 40px;
    }
    .form-control{
      background-color: $bg-gold;
      border-radius: 10px;
      border: 1px solid $gold;
      &:focus{
        box-shadow: none;
      }
    }
    .custom-control-label{
      &::before{
        background-color: $gold;
      }
    }
    button{
      font-size: 21px;
      color: white;
      padding: 5px 0 5px 35px;
      border-radius: 15px;
      letter-spacing: 35px;
      text-align: justify ;
      background: $font-brown;
      cursor: pointer;
    }

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





