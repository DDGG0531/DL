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
    <div class="col-3 col-xl-auto  text-center border  pointer text-category rounded border-category"  :class="{ active: category == 0 }" @click="cleanSearch();addFilter({id:0,name:'全部'});changeRouter(1);getData()">
      全部
    </div>
    <!-- PC專用樣式  -->
    <div class="d-none d-xl-block col-xl-auto  text-center border border-left-0  pointer text-category rounded-right border-category" v-for="item in totalCategories" :key="item.id" :class="{ active: item.id == category}" @click="cleanSearch();addFilter(item);changeRouter(1);getData()">
      {{item.name}}
    </div>
     <!-- 手機專用樣式 -->
      <div class="d-xl-none d-block col-3  text-center border   pointer text-category rounded-right border-category" v-for="item in totalCategories" :key="item.id" :class="{ active: item.id == category,'col-6':item.id==6,'border-left-0': item.id !=5,'rounded':item.id==5,'border-top-0':item.id>4 }" @click="cleanSearch();addFilter(item);changeRouter(1);getData()">
      {{item.name}}
    </div>
  </div>
  <!-- filter end -->
  <!-- input -->
  <div class="input-group input-group-sm mb-4">
  <input type="text" class="form-control input-border"  v-model="search">
  <div class="input-group-append">
    <button class="btn btn-outline-secondary btn-black" @click="cleanSearch();changeRouter(1);getData()">重置</button>
    <button class="btn btn-outline-secondary btn-black" @click="changeRouter(1);getData()">搜尋</button>
  </div>
  </div>
  <!-- input end -->
      <div class="row">
        <!-- 左邊導覽 -->
        <div class="col-xl-3 d-none d-xl-block">
          <div id="board" >
            <h1 class="title">More</h1>
            <hr class="hr-brown">
            <ul>
              <router-link :to="{name:'ProductInner',params: { id: item.id }}" tag="li" v-for="item in lastProducts" :key="item.id" class="text">{{item.title}}</router-link>
            </ul>
          </div>
        </div>
        <!-- 右邊實作案例 -->
        <div class="col-12 col-xl-9">
          <div id="case">
            <!-- 每個範例 -->
            <div class="each" v-for="(item,index) in products" :key="item.id">
              <!-- 上方文字+日期 -->
              <div class="each-title">
                <h1 class="title">【實績案例】<br class=" d-xl-none">{{item.title}}</h1>
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
                  <div class="col-6 col-xl-auto">
                    <img src="/static/pic/東林修改2/東林icon-06@4x.png" class=" icon">
                    <p class="text">{{item.place}}</p>
                  </div>
                  <div class="col-6 col-xl-auto">
                    <img src="/static/pic/東林修改2/東林icon-07@4x.png" class=" icon">
                    <p class="text">{{item.price}}</p>
                  </div>
                  <div class="col-6 col-xl-auto">
                    <img src="/static/pic/東林修改2/東林icon-08@4x.png" class=" icon">
                    <p class="text">{{item.pattern}}</p>
                  </div>
                  <div class="col-6 col-xl-auto">
                    <img src="/static/pic/東林修改2/東林icon-09@4x.png" class=" icon">
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
  <div id="contact-btn"><a href="tel:0422607982">04-22607982</a><a href="tel:0928412128">0928-412128</a></div>
  <div id="contact-btn-mb" v-bind:class="{expand: isExpand}" ><div class="click-zone"  @click="isExpand=!isExpand"></div><a href="tel:0422607982">04-22607982</a><a href="tel:0928412128">0928-412128</a></div>

</div>




</template>


<style lang="scss" scoped>
@import "~bootstrap/scss/bootstrap";
@import "../assets/scss/all.scss";
.expand{
  width: 300px !important;
}
#contact-btn{
  display: none;
    @include media-breakpoint-up(xl) {
      display: block;
  }
  position: fixed;
  right: 0;
  bottom: 50px;
  z-index: 10;
  width: 300px;
  height: 100px;
  padding: 20px 0 20px 65px;
  color: white;
  font-size: 20px;
  letter-spacing: calc(150/1000*20px);
  text-align: center;
  background-image: url('/static/pic/東林修改/東林icon-05@4x.png');
  background-position: left center;
  background-size: contain;
  background-repeat: no-repeat;
  a{
    display: block;
    &:hover{
      color: $gold;
    }
  }
}
#contact-btn-mb{
  display: block;
    @include media-breakpoint-up(xl) {
      display: none;
  }
  position: fixed;
  right: 0;
  bottom: 0px;
  z-index: 10;
  width: 75px;
  height: 100px;
  padding: 10px 0 10px 100px;
  color: white;
  font-size: 20px;
  letter-spacing: calc(150/1000*20px);
  text-align: center;
  background-image: url('/static/pic/東林修改/東林icon-05@4x.png');
  background-position: left center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all ease 1s;
      .click-zone{
    position: absolute;
    left: 0;
    top: 0;
    width: 100px;
    height: 100px;
  }

  a{
    display: block;
    overflow: hidden;
    white-space:nowrap;
    line-height: 40px;
    &:hover{
      color: $gold;
    }
  }
}
// 分類欄
.active {
  @include media-breakpoint-up(xs) {
    color: $gold;
  }
  @include media-breakpoint-up(xl) {
    color: $gold;
  }
}
.border-category {
  border-color: black !important;
}
.text-category {
  font-size: 14px;
  font-weight: bold;
  padding: 5px 10px;
  @include media-breakpoint-up(xl) {
    font-size: 18px;
  }
}
// 分類欄 end
// 搜尋框
.btn-black {
  color: black;
  font-weight: bold;
  background-color: transparent;
  background-image: none;
  border-color: black;
  &:hover {
    color: #fff;
    background-color: black;
    border-color: black;
  }
}
.input-border {
  border-color: black;
  flex: 1 1 auto !important;
  // width: 100% !important;
  max-width: none !important;
  @include media-breakpoint-up(xl) {
    flex: 0 0 auto !important;
    width: 470px !important;
  }
}
// 搜尋框 end
#board {
  margin-top: 40px;
  background-color: $bg-gray;
  padding: 48px 38px;
  min-height: 862px;
  .title {
    font-size: 24px;
    letter-spacing: calc(200 / 1000 * 24px);
    font-weight: bold;
    color: $bg-brown;
  }
  .hr-brown {
    border-top: 2px solid $bg-brown;
  }
  .text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  ul {
    padding-left: 0;
    list-style-position: inside;
    & > li {
      cursor: pointer;
      &:hover {
        color: $gold;
      }
    }
  }
}

#product {
  padding-top: 50px;
  padding-bottom: 93px;
  @include media-breakpoint-up(xl) {
    padding-top: 150px;
    padding-bottom: 135px;
  }
}

#case {
  .each {
    .hr-gold {
      margin-top: 77px;
      margin-bottom: 77px;
    }
    .each-title {
      display: block;
      @include media-breakpoint-up(xl) {
        display: flex;
        justify-content: space-between;
      }

      .title {
        color: $gold;
        overflow: hidden;
        font-size: 21px;
        letter-spacing: calc(200 / 1000 * 21px);
        font-weight: bold;
        margin-bottom: 0;
        @include media-breakpoint-up(xl) {
          margin-bottom: 10px;
          font-size: 24px;
          letter-spacing: calc(200 / 1000 * 24px);
        }
      }
      .date {
        font-size: 21px;
        text-align: end;
        margin-bottom: 10px;
        @include media-breakpoint-up(xl) {
          font-size: 24px;
        }
      }
    }
    .each-image {
      margin-bottom: 10px;
      & > img {
        width: 100%;
        @include media-breakpoint-up(xl) {
          width: 825px;
          max-height: 568px;
        }
      }
    }
    .each-description {
      position: relative;
      background-color: $bg-brown;
      padding: 25px;
      .top-block {
        margin-bottom: 27px;
        & > .col-6 {
          margin-bottom: 10px;
        }
        .icon {
          width: 22px;
        }
        .text {
          overflow: hidden;
          display: inline-block;
          color: white;
          font-size: 14px;
          margin-bottom: 0;
          padding-left: 10px;
          vertical-align: middle;
          @include media-breakpoint-up(xl) {
            font-size: 21px;
          }
        }
      }
      .mid-block {
        margin-bottom: 15px;
        font-size: 14px;
        color: white;
        padding: 0;
        @include media-breakpoint-up(xl) {
          padding: 0 15px;
          margin-bottom: 15px;
          font-size: 18px;
        }
      }
      .bottom-block {
        color: white;
        padding: 0;
        @include media-breakpoint-up(xl) {
          padding: 0 15px;
        }
        .text {
          font-size: 14px;
          white-space: pre-line;
          @include media-breakpoint-up(xl) {
            font-size: 15px;
          }
        }
      }
      .btn-block {
        // position: absolute;
        // right: 0;
        // bottom: 20px;
        // width: 90px;
        // height: 26px;
        text-align: end;
        color: $font-green;
        font-size: 18px;
        @include media-breakpoint-up(xl) {
          font-size: 28px;
        }
        & > a {
          cursor: pointer;
        }
      }
    }
  }
}

#page-block {
  margin-top: 95px;
  @include media-breakpoint-up(xl) {
    margin-top: 145px;
  }

  & > .pagination {
    justify-content: center;
    margin: 0;
  }
}
</style>

<script>
import Vue from "vue";
import VueScrollTo from "vue-scrollto";
Vue.use(VueScrollTo);
import Swiper1 from "./Swiper1";
import Paginate from "vuejs-paginate";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/scss/page.css";

export default {
  data() {
    return {
      swiperImages: [
        {
          src: "/static/封面/實績案例.png",
          src_mobile: "/static/封面/mobile/實績案例.png"
        }
      ],
      products: [],
      thisPage: 1,
      // category只包含id 還不包含name
      category: "",
      totalCategories: [],
      productsCount: 10,
      pageCount: 10,
      limit: 2,
      lastProducts: [],
      search: "",
      isExpand:false,
    };
  },
  watch: {
    $route(to, from) {
      // 对路由变化作出响应...
    }
  },
  beforeRouteUpdate(to, from, next) {
    let vm = this;
    vm.category = to.params["category"];
    vm.thisPage = to.params["page"];
    //頁數變換撈資料
    vm.getData();
    // console.log(to.params);
    vm.$refs.paginate.selected = vm.thisPage - 1;

    next();
  },
  methods: {
    addFilter(item) {
      // item = this category;
      let vm = this;
      vm.category = item.id;
    },
    cleanSearch() {
      let vm = this;
      vm.search = "";
    },
    showPage: function(e) {
      alert(e);
    },
    changeRouter: function(e) {
      let vm = this;
      vm.thisPage = e;
      vm.$router.push({
        name: "Product",
        params: {
          category: vm.category,
          page: e
        }
      });
      // router push 完之後觸發
      // vm.$refs.paginate.selected = vm.thisPage-1;
    },
    getData: function() {
      let vm = this;
      vm
        .axios({
          method: "post",
          url: "http://ind.idea-infinite.com/api/v1/products",
          params: {
            limit: vm.limit,
            offset: (vm.thisPage - 1) * vm.limit,
            search: vm.search,
            categories: vm.category
          }
        })
        .then(function(response) {
          console.log(response);
          //清空products
          vm.products = [];
          let root = "http://" + response.data["image_domain"];
          let realData = response.data.data;
          let productsCount = response.data["total"];
          vm.productsCount = productsCount;
          vm.pageCount = Math.ceil(vm.productsCount / vm.limit);
          realData.forEach(element => {
            //+root
            element["cover_image"] = root + element["cover_image"];
            vm.products.push(element);
          });
        });
    },
    getLastData: function() {
      let vm = this;
      vm
        .axios({
          method: "post",
          url: "http://ind.idea-infinite.com/api/v1/products",
          params: {
            limit: 10,
            offset: 0
          }
        })
        .then(function(response) {
          //清空products
          vm.lastProducts = [];
          let root = "http://" + response.data["image_domain"];
          let realData = response.data.data;
          let productsCount = response.data["total"];
          realData.forEach(element => {
            //+root
            element["cover_image"] = root + element["cover_image"];
            vm.lastProducts.push(element);
          });
        });
    },
    getTotalCategories: function() {
      let vm = this;
      vm
        .axios({
          method: "post",
          url: "http://ind.idea-infinite.com/api/v1/categories"
        })
        .then(function(response) {
          console.log(response);
          //清空totalCatgories
          vm.totalCategories = [];
          let realData = response.data.data;
          realData.forEach(element => {
            vm.totalCategories.push(element);
          });
        });
    }
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
    vm.category = vm.$route.params["category"];
    vm.thisPage = vm.$route.params["page"];
  },
  components: {
    Swiper1,
    paginate: Paginate
  }
};
</script>





