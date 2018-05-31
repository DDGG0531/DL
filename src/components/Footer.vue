<template>
  <div> 
    <div id="footer">
      <div class="container">
        <div class="row">
          <div class="col-12">
                      <h1 class="topic-xs d-block d-xl-none">東林工程行</h1>
          </div>

          <div class="col-12 col-xl-6 gmap-block">
            <!-- Google map -->
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3641.7961762998607!2d120.6493627149882!3d24.10866228441403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693c43a8e145ed%3A0x7802db2da37fd61!2zNDAy5Y-w5Lit5biC5Y2X5Y2A56aP55Sw5LqM6KGXMzY36Jmf!5e0!3m2!1szh-TW!2stw!4v1526616379199" width="540" height="257" frameborder="0" style="border:0" allowfullscreen></iframe>
            <!-- Google map end-->
          </div>
          <div class="col-12 col-xl-6 text-block">
            <!-- 聯絡資訊 -->
            <h1 class="topic d-none d-xl-block">東林工程行</h1>
            <p class="topic-second">整修工程 | 翻修工程 | 石材 | 電視牆 | 背景牆 | 防水</p>
            <hr class="hr">
            <div class="row align-items-center justify-content-center" >
              <!-- 每一行資訊+圖 -->
              <div class="col-auto col-xl-12 element ">
                <div class="img-wrapper">
                  <img src="/static/pic/東林修改/東林icon-01_1@4x.png" class="icon align-middle">
                </div>
                <span class="text text-cn"><a href="https://www.google.com/maps?ll=24.108662,120.651551&z=16&t=m&hl=zh-TW&gl=TW&mapclient=embed&q=402%E5%8F%B0%E4%B8%AD%E5%B8%82%E5%8D%97%E5%8D%80%E7%A6%8F%E7%94%B0%E4%BA%8C%E8%A1%97367%E8%99%9F" class="">台中市南區福田二街367號2樓</a></span>
              </div>
            </div>
            <div class="row align-items-center justify-content-center">
              <!-- 每一行資訊+圖 -->
              <div class="col-auto col-xl-12 element">
                <div class="img-wrapper"><img src="/static/pic/東林修改/東林icon-02@4x.png" class="icon align-middle"></div>
                <span class="text "><a href="mailto:hong81512@gmail.com" class="">hong81512@gmail.com</a></span>
              </div>
            </div>
            <div class="row align-items-center justify-content-center">
              <!-- 每一行資訊+圖 -->
              <div class="col-auto col-xl-12 element">
                <div class="img-wrapper"><img src="/static/pic/東林修改/東林icon-03@4x.png" class="icon align-middle"></div>
                <span class="text "><a href="tel:0422607982" class="">04-22607982</a></span>
              </div>
            </div>
            <div class="row align-items-center justify-content-center">
              <!-- 每一行資訊+圖 -->
              <div class="col-auto col-xl-12 element">
                <div class="img-wrapper"><img src="/static/pic/東林修改/東林icon-04@4x.png" class="icon align-middle"></div>
                <span class="text "><a href="tel:0928412128" class="">0928-412128</a></span>
              </div>
            </div>
            <!-- 聯絡資訊 end-->
          </div>
        </div>
      </div> 
    </div>
  <!-- Brown 區塊 -->
  <div id="brown"></div>
  <!-- Brown 區塊 end-->    
  </div>
</template>


<style lang="scss" scoped>
@import "~bootstrap/scss/bootstrap";
@import "../assets/scss/all.scss";
#brown {
  background-color: rgb(91, 85, 83);
  height: 20px;
  @include media-breakpoint-up(xl) {
    height: 41px;
  }
}

#footer {
  background-color: $bg-green;
  padding-top: 80px;
  padding-bottom: 36px;
  @include media-breakpoint-up(xl) {
    padding-top: 95px;
    padding-bottom: 87px;
  }
  .topic-xs {
    font-size: 24px;
    letter-spacing: calc(200 / 1000 * 24px);
    font-weight: bold;
    text-align: center;
    margin-bottom: 15px;
  }
  .gmap-block {
    & > iframe {
      max-width: 100%;
      width: 100%;
    }
    padding-left: 15;
    padding-right: 15px;
    margin-bottom: 40px;
    @include media-breakpoint-up(xl) {
      padding-left: 0px;
      padding-right: 25px;
      margin-bottom: 0px;
    }
  }
  .text-block {
    color: $font-brown;
    padding-left: 15px;
    padding-right: 15px;
    @include media-breakpoint-up(xl) {
      padding-left: 25px;
      padding-right: 0px;
    }
    & > .row {
      margin: 0;
    }
    .topic {
      font-size: 29px;
      letter-spacing: calc(200 / 1000 * 29px);
      text-align: center;
      font-weight: bold;
      @include media-breakpoint-up(xl) {
        text-align: left;
      }
    }
    .topic-second {
      font-size: 13px;
      letter-spacing: calc(100 / 1000 * 11px);
      text-align: center;
      font-weight: bold;
      @include media-breakpoint-up(xl) {
        font-size: 19px;
        letter-spacing: calc(100 / 1000 * 19px);
        text-align: left;
        font-weight: 600;
      }
    }
    .element {
      min-width: 280px;
      margin-bottom: 10px;
      padding-left: 0;
      .icon {
        height: 30px;
      }
      .text {
        height: 30px;
        font-size: 14px;
        letter-spacing: calc(100 / 1000 * 14px);
        line-height: 30px;
        vertical-align: middle;
        @include media-breakpoint-up(xl) {
          font-size: 20px;
          letter-spacing: calc(100 / 1000 * 20px);
        }
      }
      .img-wrapper {
        display: inline-block;
        text-align: left;
        margin-right: 10px;
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {};
  },
  watch: {},
  methods: {},
  mounted() {},
  created() {},
  components: {}
};
</script>





