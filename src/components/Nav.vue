<template>
  <div>
    <div id="nav">
      <div class="container">
        <!-- bootstrap nav -->
        <nav class="navbar navbar-expand-lg navbar-light ">
          <!-- 主題字 -->
          <router-link :to="{ name: 'Home'}" class="navbar-brand pointer">東林工程行</router-link>
          <!-- 漢堡按鈕 -->
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" >
            <span class="navbar-toggler-icon"></span>
          </button>
          <!-- 主要內容 -->
          <div class="collapse navbar-collapse " id="navbarNavDropdown">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item ">
                <router-link :to="{ name: 'Intro'}" class="nav-link">公司簡介</router-link>
              </li>
              <li class="nav-item ">
                <router-link :to="{ name: 'Service'}" class="nav-link">服務項目</router-link>
              </li>
              <li class="nav-item ">
                <router-link :to="{ name: 'Product', params: { category: 0, page: 1}}" class="nav-link"  >實績案例</router-link>
              </li>
              <li class="nav-item ">
                <router-link :to="{ name: 'Pipe'}" class="nav-link">接案流程</router-link>
              </li>
              <li class="nav-item ">
                <router-link :to="{ name: 'Contact'}" class="nav-link">聯絡我們</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
@import "~bootstrap/scss/bootstrap";
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
    padding: 10px;
    @include media-breakpoint-up(lg){
      padding: 0;
    }
    
  }
  .nav-item{
    text-align: center;
  }
  .nav-link{
    cursor: pointer;
    font-size: 21px;
    letter-spacing: calc(200/1000*21px);
        @include media-breakpoint-up(lg){
    font-size: 20px;
    letter-spacing: calc(200/1000*20px);    }
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
	    background-color: transparent;
        @include media-breakpoint-up(lg) {
	    background-color: $dark-green;
  }
    }
  }
  .nav-link.router-link-active{
    &::before {
      z-index:-1;
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      transform: skew(-30deg);
      transition: all 0.4s;
      background-color: transparent;
        @include media-breakpoint-up(lg) {
	    background-color: $dark-green;
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





