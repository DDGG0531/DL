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
          <div class="col-12 col-xl-6 block-1 d-none d-xl-block order-xl-1">
            <img src="/static/pic/東林內頁2/東林-公司簡介-02.png">
          </div>
          <div class="col-12 col-xl-6 block-2 order-2 order-xl-2">
            <!-- 複製footer -->
            <div class="row   justify-content-start">
              <!-- 每一行資訊+圖 -->
              <div class="col-auto col-xl-12 element ">
                <div class="img-wrapper">
                  <img src="/static/pic/東林修改/東林icon-01_1@4x.png" class="icon align-middle">
                </div>
                <span class="text text-cn">
                  <a href="https://www.google.com/maps?ll=24.108662,120.651551&z=16&t=m&hl=zh-TW&gl=TW&mapclient=embed&q=402%E5%8F%B0%E4%B8%AD%E5%B8%82%E5%8D%97%E5%8D%80%E7%A6%8F%E7%94%B0%E4%BA%8C%E8%A1%97367%E8%99%9F"
                    class="">台中市南區福田二街367號2樓</a>
                </span>
              </div>
              </div>
               <div class="row   justify-content-start">
              <div class="col-auto col-xl-12 element">
                <div class="img-wrapper">
                  <img src="/static/pic/東林修改/東林icon-02@4x.png" class="icon align-middle">
                </div>
                <span class="text ">
                  <a href="mailto:hong81512@gmail.com" class="">hong81512@gmail.com</a>
                </span>
              </div>
              </div>
               <div class="row   justify-content-start">
              <div class="col-auto col-xl-12 element">
                <div class="img-wrapper">
                  <img src="/static/pic/東林修改/東林icon-03@4x.png" class="icon align-middle">
                </div>
                <span class="text ">
                  <a href="tel:0422607982" class="">04-22607982</a>
                </span>
              </div>
              </div>
               <div class="row  justify-content-start">
              <div class="col-auto col-xl-12 element">
                <div class="img-wrapper">
                  <img src="/static/pic/東林修改/東林icon-04@4x.png" class="icon align-middle">
                </div>
                <span class="text ">
                  <a href="tel:0928412128" class="">0928-412128</a>
                </span>
              </div>
              </div>
            <!-- 複製footer end -->
          </div>
          <div class="col-xl-12 gmap-block order-1 order-xl-3">
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
                  <input class="form-control" :class="{invalid: invalidShow[0]['isvalid']}" id="name" v-model="sendObj.user_name" placeholder="">
                  <div class="invalid-feedback d-block" v-if="invalidShow[0]['text']!=''">
                    {{invalidShow[0]['text']}}
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <li class="col-sm-3 col-form-label">
                  <label for="address">服務地址</label>
                </li>
                <div class="col-sm-9">
                  <input class="form-control"  id="address" v-model="sendObj.address" placeholder="">
                </div>
              </div>
              <div class="form-group row">
                <li class="col-sm-3 col-form-label">
                  <label for="phone">電&emsp;&emsp;話</label>
                </li>
                <div class="col-sm-9">
                  <input class="form-control" id="phone" :class="{invalid: invalidShow[1]['isvalid']}" v-model="sendObj.phone" placeholder="">
                  <div class="invalid-feedback d-block" v-if="invalidShow[1]['text']!=''">
                    {{invalidShow[1]['text']}}
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <li class="col-sm-3 col-form-label">
                  <label for="email">電子郵件</label>
                </li>
                <div class="col-sm-9">
                  <input class="form-control" id="email" :class="{invalid: invalidShow[2]['isvalid']}" v-model="sendObj.email" placeholder="">
                  <div class="invalid-feedback d-block" v-if="invalidShow[2]['text']!=''">
                    {{invalidShow[2]['text']}}
                  </div>
                </div>
              </div>
              <!-- radios -->
              <fieldset class="form-group">
                <div class="row">
                  <li class="col-form-label col-sm-3 pt-0">
                    <label>詢問項目</label>
                  </li>
                  <div class="col-sm-9">
                    <div class="custom-control custom-radio">
                      <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" value="室內、室外防水抓漏工程"  v-model="sendObj.title">
                      <label class="custom-control-label" for="customRadio1">室內、室外防水抓漏工程</label>
                    </div>
                    <div class="custom-control custom-radio">
                      <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" value="房屋增建、改造" v-model="sendObj.title">
                      <label class="custom-control-label" for="customRadio2">房屋增建、改造</label>
                    </div>
                    <div class="custom-control custom-radio">
                      <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input" value="廚房、衛浴翻修、改造" v-model="sendObj.title">
                      <label class="custom-control-label" for="customRadio3">廚房、衛浴翻修、改造</label>
                    </div>
                    <div class="custom-control custom-radio">
                      <input type="radio" id="customRadio4" name="customRadio" class="custom-control-input" value="房屋、大樓、公寓外牆整修" v-model="sendObj.title">
                      <label class="custom-control-label" for="customRadio4">房屋、大樓、公寓外牆整修</label>
                    </div>
                    <div class="custom-control custom-radio">
                      <input type="radio" id="customRadio5" name="customRadio" class="custom-control-input" value="對於我們的建議" v-model="sendObj.title">
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
                  <textarea class="form-control" :class="{invalid: invalidShow[3]['isvalid']}" id="textarea" rows="5" v-model="sendObj.content"></textarea>
                  <div class="invalid-feedback d-block" v-if="invalidShow[3]['text']!=''">
                    {{invalidShow[3]['text']}}
                  </div>
                </div>
              </div>
              <div class="row justify-content-end">
                <div class="col-auto">
                  <button @click.prevent="sendData()">
                    <span>提</span>
                    <span>交</span>
                  </button>
                </div>
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


.invalid{
  border-color: red !important;
}
#Contact {
  padding-top: 61px;
  padding-bottom: 122px;
      @include media-breakpoint-up(xl) {
        padding-top: 105px;
      padding-bottom: 275px;
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
      letter-spacing: calc(200/1000*28px);
      margin-bottom: 100px;
    }
    &::before {
      content: '';
      border: .5px solid $gold;
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
      content: '';
      border: .5px solid $gold;
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
  .sub-title {
    font-size: 20px;
    letter-spacing: calc(100/1000*20px);
    margin-bottom: 66px;
    text-align: center;
    font-weight: bold;
  }
  .gold-hr {
    margin-top: 68px;
    margin-bottom: 20px;
    border: .5px solid $gold;
     @include media-breakpoint-up(xl) {
    margin-top: 65px;
    margin-bottom: 126px;
      }
  }
  .narrow-div {
    padding-left: 0;
    padding-right: 0;
          @include media-breakpoint-up(xl) {
    padding-left: 160px;
    padding-right: 160px;
      }
    .block-1 {
      margin-bottom: 66px;
    }
    .block-2 {
      margin-bottom: 0;
              overflow: hidden;
      @include media-breakpoint-up(xl) {
    margin-bottom: 66px;
      }
      .element {
        min-width: 350px;
        margin-bottom: 10px;
        .icon {
        height: 30px;
      }
      .text {
        height: 30px;
        font-size: 20px;
        letter-spacing: calc(100/1000*20px);
        line-height: 30px;
        vertical-align: middle;
        @include media-breakpoint-up(xl) {
          font-size: 20px;
          letter-spacing: calc(100/1000*20px);
        }
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
      margin-bottom: 30px;
       @include media-breakpoint-up(xl) {
            margin-bottom: 90px;
      }
      &>iframe {
        max-width: 100%;
        width: 100%;
      }
    }
  }
  .narrower-div{
    padding: 0;
            @include media-breakpoint-up(xl) {
           padding: 0 230px;
      }
    label , legend {
      font-size: 15px;
      letter-spacing: calc(100/1000*15px);
      color: black;
       @include media-breakpoint-up(xl) {
           font-size: 21px;
           letter-spacing: calc(100/1000*21px);
      }
      
    }
    li{
      list-style-position: inside;
      color: $gold;
    }


    .form-group{
      margin-bottom: 10px;
      @include media-breakpoint-up(xl) {
           margin-bottom: 40px;
      }
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
      &:focus{
        outline: none;
      }
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
    sendObj:{title : "室內、室外防水抓漏工程"},
    valid:{},
    invalidShow:[],
    }
  },
  watch:{

  },
  methods: {
    sendData(){
      let vm=this;
      vm.axios({
          method: "post",
          url: "http://ind.idea-infinite.com/api/v1/contact",
          params: vm.sendObj,
        })
        .then(function (response) {
          console.log(response);
          vm.valid=response.data;
          vm.setValid();         
        })
    },
    initValid(){
      let vm=this;
      vm.invalidShow=[];
      for(let i=0;i<4;i++){
        let obj={text:'',isvalid:false};
        vm.invalidShow.push(obj);
        
      }
    },
    setValid(){
      let vm=this;
      vm.initValid();
      if(vm.valid.status==false){
        vm.valid.error.forEach(element => {
          // 填入每個輸入區塊的invalid文字與class;invalidShow
          if(element.field=='user_name' && vm.invalidShow[0]['text']==''){ vm.invalidShow[0]['text']=element.message;vm.invalidShow[0]['isvalid']=true}
          else if(element.field=='phone' && vm.invalidShow[1]['text']==''){ vm.invalidShow[1]['text']=element.message;vm.invalidShow[1]['isvalid']=true}
          else if(element.field=='email' && vm.invalidShow[2]['text']==''){ vm.invalidShow[2]['text']=element.message;vm.invalidShow[2]['isvalid']=true}
          else if(element.field=='content' && vm.invalidShow[3]['text']==''){ vm.invalidShow[3]['text']=element.message;vm.invalidShow[3]['isvalid']=true}
        });
      }
      else{
        vm.sendObj={title : "室內、室外防水抓漏工程"};
        alert(vm.valid.message);
        
      }
    }
    
  },
  mounted() {
    let vm=this;
    vm.initValid();
  },
  created() {

  },
  components: {
    Swiper1,
  }
}
</script>





