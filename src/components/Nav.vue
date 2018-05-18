<template>
  <div>
    <div id="nav">
      <div class="container">
        <!-- bootstrap nav -->
        <nav class="navbar navbar-expand-lg navbar-light ">
          <!-- 主題字 -->
          <a class="navbar-brand " href="#">東林工程行</a>
          <!-- 漢堡按鈕 -->
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" >
            <span class="navbar-toggler-icon"></span>
          </button>
          <!-- 主要內容 -->
          <div class="collapse navbar-collapse " id="navbarNavDropdown">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item ">
                <a class="nav-link" href="#">
                  公司簡介
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="#">
                  服務項目
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="#">
                  實績案例
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="#">
                  最新訊息
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="/asdasd">
                  聯絡我們
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
@import "../assets/scss/all.scss";
// @include media-breakpoint-up(xl)
#nav{
  background-color: $light-green;
  .navbar-brand{
    font-size: 36px;
    line-height: 36px;
    color: white;
    letter-spacing: calc(200/1000*36px);
    font-weight: bold;
  }
  .navbar{
    padding: 0;
  }
  .nav-link{
    cursor: pointer;
    font-size: 21px;
    letter-spacing: calc(200/1000*21px);
    text-decoration: none;
    color: #fff;
    margin-left: 0px;
    padding: 20px;
    position: relative;
    &::before {
      z-index:-1;
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: transparent;
      transform: skew(-30deg);
      transition: all 0.4s;
    }
    &:hover::before {
	    background-color: $dark-green;
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





