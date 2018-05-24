<template>
<div>
  <!-- 插入 component Swiper1 -->
  <Swiper1 :swiperImages="swiperImages" :swiperText="false"></Swiper1>
  <!-- 插入 component Swiper1 end -->
  <!-- 內容 -->
  <div id="product">
    <div class="container">
      <!-- 麵包屑 -->
      <nav>
        <ol class="breadcrumb ">
          <li class="breadcrumb-item ">
            <router-link :to="{ name: 'Product', params: { category: 0, page: 1}}" class="pointer">實績案例</router-link>
          </li>
          <li class="breadcrumb-item active">{{product[0]['title']}}</li>
        </ol>
      </nav>
      <div class="row">
        <!-- 左邊導覽 -->
        <div class="col-xl-3">
          <div id="board">
            <h1 class="title">More</h1>
            <hr class="hr-brown">
            <ul>
              <router-link :to="{name:'ProductInner',params: { id: item.id }}" tag="li" v-for="item in lastProducts" :key="item.id">{{item.title}}</router-link>
            </ul>
          </div>
        </div>
        <!-- 右邊實作案例 -->
        <div class="col-xl-9">
          <div id="case">
            <!-- 每個範例 -->
            <div class="each" v-for="(item) in product" :key="item.id">
              <!-- 上方文字+日期 -->
              <div class="each-title">
                <h1 class="title">【實績案例】{{item.title}}</h1>
                <div class="date italic">{{item.created_date}}</div>
              </div>
              <!-- 中間圖片 -->
              <div class="each-image">
                <img :src="item['main_image_path']">
              </div>
              <!-- 下方文字區塊 -->
              <div class="each-description">
                <!-- 上方圖片+字 -->
                <div class="row top-block">
                  <div class="col-auto">
                    <img src="/static/icon/icon-05@4x.png" class="icon-1">
                    <p class="text">{{item.place}}</p>
                  </div>
                  <div class="col-auto">
                    <img src="/static/icon/icon-06@4x.png" class="icon-2">
                    <p class="text">{{item.price}}</p>
                  </div>
                  <div class="col-auto">
                    <img src="/static/icon/icon-07@4x.png" class="icon-3">
                    <p class="text">{{item.pattern}}</p>
                  </div>
                  <div class="col-auto">
                    <img src="/static/icon/icon-08@4x.png" class="icon-4">
                    <p class="text">{{item.sqft}}</p>
                  </div>
                </div>
                <!-- 中間"施作內容" -->
                <p class="mid-block">施作內容</p>
                <!-- ul文字 -->
                <div class="bottom-block">
                  <p class="text">{{item.detail}}</p>
                </div>
              </div>
              <!-- hr gold -->
              <hr class="hr-gold">
            </div>
            <!-- 內頁 圖庫 -->
            <div v-if="getDataDone">
              <div v-for="(item) in product[0].gallary" :key="item.id" id="gallary">
                <img :src="item['src']" class="image">
              </div>
            </div>

            <!-- 內頁 圖庫 end  -->
          </div>
        </div>
      </div>



    </div>
    <!-- 內容 end -->
  </div>
</div>

</template>


<style lang="scss" scoped>
@import "../assets/scss/all.scss";
// @include media-breakpoint-up(xl)
#board {
  margin-top: 40px;
  background-color: $bg-gray;
  padding: 48px 38px;
  min-height: 862px;
  .title {
    font-size: 24px;
    letter-spacing: calc(200/1000*24px);
    font-weight: bold;
    color: $bg-brown;
  }
  .hr-brown {
    border-top: 2px solid $bg-brown;
  }
  ul {
    padding-left: 20px;
    &>li {
      cursor: pointer;
      &:hover{
        color: $gold;
      }
    }
  }
}

#product {
  padding-top: 150px;
  padding-bottom: 135px;
}

#case {
  .each {
    .hr-gold {
      margin-top: 77px;
      margin-bottom: 77px;
    }
    .each-title {
      display: flex;
      justify-content: space-between;
      .title {
        color: $gold;
        font-size: 24px;
        letter-spacing: calc(200/1000*24px);
        font-weight: bold;
      }
      .date {
        font-size: 24px;
      }
    }
    .each-image {
      margin-bottom: 10px;
      &>img {
        width: 825px;
        height: 568px;
      }
    }
    .each-description {
      position: relative;
      background-color: $bg-brown;
      padding: 25px;
      .top-block {
        margin-bottom: 27px;
        .icon-1 {
          width: 21px;
          height: 29px;
        }
        .icon-2 {
          width: 13px;
          height: 26px;
        }
        .icon-3 {
          width: 27px;
          height: 27px;
        }
        .icon-4 {
          width: 30px;
          height: 28px;
        }
        .text {
          display: inline-block;
          color: white;
          font-size: 21px;
          margin-bottom: 0;
          padding-left: 10px;
        }
      }
      .mid-block {
        margin-bottom: 15px;
        font-size: 18px;
        color: white;
        padding: 0 15px;
      }
      .bottom-block {
        color: white;
        padding: 0 15px;
        .text {
          font-size: 15px;
          white-space: pre-line;
        }
      }
      .btn-block {
        position: absolute;
        right: 0;
        bottom: 20px;
        width: 90px;
        height: 26px;
        color: $font-green;
        font-size: 28px;
        &>a {
          cursor: pointer;
        }
      }
    }
  }
}

#gallary{
  .image{
    margin-bottom: 35px;
    width: 825px;
    height: 568px;
  }
}

</style>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import Swiper1 from './Swiper1'
export default {
  data() {
    return {
      id:1,
      product:[],
      limit:1,
      getDataDone:false,
      swiperImages: [{
        src: '/static/pic/pic-06_1.png'
      }],
      lastProducts: [], 
    }
  },
  watch:{

  },
  beforeRouteUpdate(to, from, next) {
    let vm = this;
    // 這邊跟product邏輯不同，這邊routerchange會自動更改id
    vm.id = to.params['id'];
    //頁數變換撈資料
    vm.getData();
    // console.log(to.params);

    next()
  },
  methods: {
    getData(){
      let vm= this ;
      axios({
          method: "post",
          url: "http://ind.idea-infinite.com/api/v1/product/"+vm.id,
        })
        .then(function (response) {
          console.log(response);
          //清空product
          vm.product = [];
          let root = 'http://' + response.data['image_domain'];
          let realData = response.data.data;
          //+root
          realData['main_image_path'] = root + realData['main_image_path'];
          vm.product.push(realData);
          vm.product[0].gallary=[{src:'/static/pic/pic-01_1.png'},{src:'/static/pic/pic-02_1.png'},{src:'/static/pic/pic-03_1.png'}];
          vm.getDataDone=true;
        })
    },
    getLastData: function () {
      let vm = this;
      axios({
          method: "post",
          url: "http://ind.idea-infinite.com/api/v1/products",
          params: {
            limit: 10,
            offset: 0,
          }
        })
        .then(function (response) {
          //清空products
          vm.lastProducts = [];
          let root = 'http://' + response.data['image_domain'];
          let realData = response.data.data;
          let productsCount = response.data['total'];
          realData.forEach(element => {
            //+root
            element['cover_image'] = root + element['cover_image'];
            vm.lastProducts.push(element);
          });
        })
    },
    
  },
  mounted() {

  },
  created() {
    let vm=this;
    vm.id = vm.$route.params['id'];
    vm.getData();
    vm.getLastData();
  },
  components: {
    Swiper1
  }
}
</script>





