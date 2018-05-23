<template>
<div>
  <!-- 插入 component Swiper1 -->
  <Swiper1 :swiperImages="swiperImages" :swiperText="false"></Swiper1>
  <!-- 插入 component Swiper1 end -->
  <!-- 內容 -->
  <div id="product">
  <div class="container">
  <!-- filter -->
  <div class="row mx-0 mb-4">
    <div class="col-auto  text-center border border-info pointer rounded-right"  :class="{ active: category == 0 }" @click="cleanSearch();addFilter({id:0,name:'全部'});changeRouter(1);getData()">
      全部
    </div>
    <div class="col-auto  text-center border border-left-0 border-info pointer rounded-right" v-for="item in totalCategories" :key="item.id" :class="{ active: item.id == category }" @click="cleanSearch();addFilter(item);changeRouter(1);getData()">
      {{item.name}}
    </div>
  </div>
  <!-- filter end -->
  <!-- input -->
  <div class="input-group mb-4">
  <input type="text" class="form-control" v-model="search">
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" @click="cleanSearch();changeRouter(1);getData()">Refresh</button>
    <button class="btn btn-outline-secondary" @click="changeRouter(1);getData()">Search</button>
  </div>
  </div>
  <!-- input end -->
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
            <div class="each" v-for="(item,index) in products" :key="item.id">
              <!-- 上方文字+日期 -->
              <div class="each-title">
                <h1 class="title">【實績案例】{{item.title}}</h1>
                <div class="date italic">{{item.created_date}}</div>
              </div>
              <!-- 中間圖片 -->
              <div class="each-image">
                <img :src="item['cover_image']">
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
                  <p class="text">{{item.description}}</p>
                </div>
                <!-- more按鈕 -->
                <div class="btn-block">
                  <router-link :to="{ name: 'ProductInner', params: { id: item.id}}">More</router-link>
                </div>
              </div>
              <!-- hr gold -->
              <hr class="hr-gold" v-if="index!=limit-1">
            </div>
          </div>
        </div>
      </div>



    </div>
    <!-- 內容 end -->
    <!-- 分頁 -->
    <div id="page-block">
      <paginate v-scroll-to="{el:'#product'}" :page-count="pageCount" :initial-page="thisPage-1"  :click-handler="changeRouter" :prev-text="'Prev'" :next-text="'Next'"
        :container-class="'pagination'" :page-class="'page-item'" :page-link-class="'page-link'" :prev-class="'page-item'"
        :prev-link-class="'page-link'" :next-class="'page-item'" :next-link-class="'page-link'" ref="paginate">
      </paginate>
    </div>
    <!-- 分頁 end -->
  </div>

</div>




</template>


<style lang="scss" scoped>
@import "../assets/scss/all.scss";
// @include media-breakpoint-up(xl)
.active{
  color: $gold;
}
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
        .text{
          font-size: 15px;
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
        &>a{
          cursor: pointer;
        }
      }
    }
  }
}

#page-block {
  margin-top: 145px;
  &>.pagination {
    justify-content: center;
    margin: 0;
  }
}

</style>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueScrollTo  from 'vue-scrollto'
Vue.use(VueScrollTo, VueAxios, axios)
import Swiper1 from './Swiper1'
import Paginate from 'vuejs-paginate'

export default {
  data() {
    return {
      swiperImages: [{
        src: '/static/pic/pic-06_1.png'
      }],
      products: [],
      thisPage: 1,
      // category只包含id 還不包含name
      category: '',
      totalCategories:[],
      productsCount: 10,
      pageCount: 10,
      limit: 2,
      lastProducts: [],
      search: '',

    }
  },
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
    }

  },
  beforeRouteUpdate(to, from, next) {
    let vm = this;
    vm.category = to.params['category'];
    vm.thisPage = to.params['page'];
    //頁數變換撈資料
    vm.getData();
    // console.log(to.params);
    vm.$refs.paginate.selected = vm.thisPage-1;

    next()
  },
  methods: {
    addFilter(item){
      // item = this category;
      let vm=this;
      vm.category=item.id;
    },
    cleanSearch(){
      let vm =this;
      vm.search='';
    },
    showPage: function (e) {
      alert(e);
    },
    changeRouter: function (e) {
      let vm = this;
      vm.thisPage = e;
      vm.$router.push({
        name: 'Product',
        params: {
          category: vm.category,
          page: e
        }
      });
      // router push 完之後觸發
      // vm.$refs.paginate.selected = vm.thisPage-1;
    },
    getData: function () {
      let vm = this;
      axios({
          method: "post",
          url: "http://ind.idea-infinite.com/api/v1/products",
          params: {
            limit: vm.limit,
            offset: ((vm.thisPage - 1) * vm.limit),
            search: vm.search,
            categories: vm.category
          }
        })
        .then(function (response) {
          console.log(response)
          //清空products
          vm.products = [];
          let root = 'http://' + response.data['image_domain'];
          let realData = response.data.data;
          let productsCount = response.data['total'];
          vm.productsCount = productsCount;
          vm.pageCount = Math.ceil(vm.productsCount / vm.limit);
          realData.forEach(element => {
            //+root
            element['cover_image'] = root + element['cover_image'];
            vm.products.push(element);

          });
          
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
    getTotalCategories: function () {
      let vm = this;
      axios({
          method: "post",
          url: "http://ind.idea-infinite.com/api/v1/categories",
        })
        .then(function (response) {
          console.log(response)
          //清空totalCatgories
          vm.totalCategories = [];
          let realData = response.data.data;
          realData.forEach(element => {
            vm.totalCategories.push(element);
          });
        })
    },



  },
  mounted() {
    let vm = this;
    vm.getTotalCategories();
    vm.getData();
    vm.getLastData();
    // console.log(vm.$route.params);
  },
  created() {
    let vm = this;
    vm.category = vm.$route.params['category'];
    vm.thisPage = vm.$route.params['page'];
  },
  components: {
    Swiper1,
    paginate: Paginate,
  }
}

</script>





