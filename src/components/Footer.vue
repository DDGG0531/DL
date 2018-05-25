<template>
  <div> 
    <div id="footer">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 gmap-block">
            <!-- Google map -->
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3641.7961762998607!2d120.6493627149882!3d24.10866228441403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693c43a8e145ed%3A0x7802db2da37fd61!2zNDAy5Y-w5Lit5biC5Y2X5Y2A56aP55Sw5LqM6KGXMzY36Jmf!5e0!3m2!1szh-TW!2stw!4v1526616379199" width="540" height="257" frameborder="0" style="border:0" allowfullscreen></iframe>
            <!-- Google map end-->
          </div>
          <div class="col-xl-6 text-block">
            <!-- 聯絡資訊 -->
            <h1 class="topic">東林工程行</h1>
            <p class="topic-second">整修工程 | 翻修工程 | 石材 | 電視牆 | 背景牆 | 防水</p>
            <hr class="hr">
            <div class="row align-items-center" >
              <!-- 每一行資訊+圖 -->
              <div class="col-12 element">
                <div class="img-wrapper">
                  <img src="/static/icon/icon-11@4x.png" class="icon align-middle">
                </div>
                <span class="text text-cn">台中市南區福田二街367號2樓</span>
              </div>
            </div>
            <div class="row align-items-center">
              <!-- 每一行資訊+圖 -->
              <div class="col-12 element">
                <div class="img-wrapper"><img src="/static/icon/icon-12@4x.png" class="icon align-middle"></div>
                <span class="text ">hong.81512@gmail.com</span>
              </div>
            </div>
            <div class="row align-items-center">
              <!-- 每一行資訊+圖 -->
              <div class="col-12 element">
                <div class="img-wrapper"><img src="/static/icon/icon-13@4x.png" class="icon align-middle"></div>
                <span class="text ">04-22607982</span>
              </div>
            </div>
            <div class="row align-items-center">
              <!-- 每一行資訊+圖 -->
              <div class="col-12 element">
                <div class="img-wrapper"><img src="/static/icon/icon-14@4x.png" class="icon align-middle"></div>
                <span class="text ">0928-412128</span>
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
  height: 41px;
}

#footer {
  background-color: $bg-green;
  padding-top: 95px;
  padding-bottom: 87px;
  .gmap-block {
    &>iframe{
      max-width: 100%;
      width: 100%;
    }
    padding-left: 0;
    padding-right: 25px;
  }
  .text-block {
    color: $font-brown;
    padding-left: 25px;
    padding-right: 0;
    &>.row{
      margin: 0;
    }
    .topic {
      font-size: 29px;
      letter-spacing: calc(200/1000*29px);
    }
    .topic-second {
      font-size: 19px;
      letter-spacing: calc(100/1000*19px);
    }
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
      .text-cn{
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
}


</style>

<script>


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





