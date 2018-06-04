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
        <div class="col-xl-3 d-none d-xl-block">
          <div id="board">
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
            <div class="each" v-for="(item) in product" :key="item.id">
              <!-- 上方文字+日期 -->
              <div class="each-title">
                <h1 class="title">【實績案例】<br class="d-xl-none">{{item.title}}</h1>
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
    <!-- 插入 聯絡框 -->
 <div id="contact-btn"><a href="tel:0422607982">04-22607982</a><a href="tel:0928412128">0928-412128</a></div>
  <div id="contact-btn-mb" v-bind:class="{expand: isExpand}" ><div class="click-zone"  @click="isExpand=!isExpand"></div><a href="tel:0422607982">04-22607982</a><a href="tel:0928412128">0928-412128</a></div>
</div>

</template>


<style lang="scss" scoped>
@import "~bootstrap/scss/bootstrap";
@import "../assets/scss/all.scss";

// @include media-breakpoint-up(xl)
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

#gallary {
  .image {
    margin-bottom: 35px;
    width: 100%;
    @include media-breakpoint-up(xl) {
      width: 825px;
      height: 568px;
    }
  }
}
.breadcrumb {
  font-size: 16px;
  @include media-breakpoint-up(xl) {
    font-size: 25px;
  }
}
</style>

<script>
import Swiper1 from "./Swiper1";
export default {
  data() {
    return {
      id: 1,
      product: [],
      limit: 1,
      getDataDone: false,
      swiperImages: [
        {
          src: "/static/封面/實績案例.png",
          src_mobile: "/static/封面/mobile/實績案例.png"
        }
      ],
      lastProducts: [],
      isExpand:false,
    };
  },
  watch: {},
  beforeRouteUpdate(to, from, next) {
    let vm = this;
    // 這邊跟product邏輯不同，這邊routerchange會自動更改id
    vm.id = to.params["id"];
    //頁數變換撈資料
    vm.getData();
    // console.log(to.params);

    next();
  },
  methods: {
    getData() {
      let vm = this;
      vm
        .axios({
          method: "post",
          url: "http://ind.idea-infinite.com/api/v1/product/" + vm.id
        })
        .then(function(response) {
          console.log(response);
          //清空product
          vm.product = [];
          let root = "http://" + response.data["image_domain"];
          let realData = response.data.data;
          //+root
          realData["main_image_path"] = root + realData["main_image_path"];
          vm.product.push(realData);
          vm.product[0].gallary = [
            { src: "/static/pic/pic-01_1.png" },
            { src: "/static/pic/pic-01_1.png" },
            { src: "/static/pic/pic-01_1.png" }
          ];
          vm.getDataDone = true;
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
    }
  },
  mounted() {},
  created() {
    let vm = this;
    vm.id = vm.$route.params["id"];
    vm.getData();
    vm.getLastData();
  },
  components: {
    Swiper1
  }
};
</script>





