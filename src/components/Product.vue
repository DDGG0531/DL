<template>
<div>
  <!-- 插入 component Swiper1 -->
  <Swiper1 :swiperImages="swiperImages" :swiperText="false"></Swiper1>
  <!-- 插入 component Swiper1 end -->
  <!-- 內容 -->
  <div id="product">
    <div class="container">
      <div class="row">
        <!-- 左邊導覽 -->
        <div class="col-xl-3">
          <div id="board">
            <h1 class="title">More</h1>
            <hr class="hr-brown">
            <ul>
              <router-link :to="{name:'Home'}" tag="li" v-for="item in lastProducts" :key="item.id">{{item.title}}</router-link>
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
                <div class="d-flex top-block">
                  <div class="col-auto"><img src="/static/icon/icon-05@4x.png" class="icon-1"><p class="text">{{item.place}}</p></div>
                  <div class="col-auto"><img src="/static/icon/icon-06@4x.png" class="icon-2"><p class="text">{{item.price}}</p></div>
                  <div class="col-auto"><img src="/static/icon/icon-07@4x.png" class="icon-3"><p class="text">{{item.pattern}}</p></div>
                  <div class="col-auto"><img src="/static/icon/icon-08@4x.png" class="icon-4"><p class="text">{{item.sqft}}</p></div>
                </div>
                <!-- 中間"施作內容" -->
                <p class="mid-block">施作內容</p>
                <!-- ul文字 -->
                <div class="bottom-block">
                  <ul>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam!</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                  </ul>
                </div>
                <!-- more按鈕 -->
                <div class="btn-block">more</div>
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
      <paginate :page-count="pageCount" :initial-page="thisPage-1" :click-handler="changeRouter" :prev-text="'Prev'" :next-text="'Next'"
        :container-class="'pagination'" :page-class="'page-item'" :page-link-class="'page-link'" :prev-class="'page-item'"
        :prev-link-class="'page-link'" :next-class="'page-item'" :next-link-class="'page-link'">
      </paginate>
    </div>
    <!-- 分頁 end -->
  </div>

</div>




</template>


<style lang="scss" scoped>
@import "../assets/scss/all.scss";
// @include media-breakpoint-up(xl)
#board{
  margin-top: 40px;
  background-color: $bg-gray;
  padding: 48px 38px;
  min-height: 862px;
  .title{
    font-size: 24px;
    letter-spacing: calc(200/1000*24px);
    font-weight: bold;
    color: $bg-brown;
  }
  .hr-brown{
    border-top: 2px solid $bg-brown;
  }
  ul{
    padding-left: 20px;
    &>li{
      cursor: pointer;
    }
  }
}
#product{
  padding-top: 150px;
  padding-bottom: 135px;
}
#case{
  .each{
    .hr-gold{
      margin-top: 133px;
      margin-bottom: 77px;
    }
    .each-title{
      display: flex;
      justify-content: space-between;
      .title{
        color: $gold;
        font-size: 24px;
        letter-spacing: calc(200/1000*24px);
        font-weight: bold;
      }
      .date{
      }
    }
    .each-image{
      margin-bottom: 10px;
      &>img{
        width: 825px;
        height: 568px;
      }
    }
    .each-description{
      position: relative;
      background-color: $bg-brown;
      padding: 25px;
      .top-block{
        margin-bottom: 27px;
        .icon-1{
          width: 21px;
          height: 29px;
        }
        .icon-2{
          width: 13px;
          height: 26px;
        }
        .icon-3{
          width: 27px;
          height: 27px;
        }
        .icon-4{
          width: 30px;
          height: 28px;
        }
        .text{
          display: inline-block;
          color: white;
          font-size: 21px;
          margin-bottom: 0;
          padding-left: 10px;
        }
      }
      .mid-block{
        margin-bottom: 15px;
        font-size: 18px;
        color: white;
        padding: 0 15px;
      }
      .bottom-block{
        color: white;
      }
      .btn-block{
        position: absolute;
        right: 0;
        bottom: 20px;
        width: 90px;
        height: 26px;
        color: $font-green;
        font-size: 28px;
        cursor: pointer;
      }
    }
  }

}

#page-block{
  padding: 50px 0;
  &>.pagination{
    justify-content: center;
    margin: 0;
  }
}
</style>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import Swiper1 from './Swiper1'
import Paginate from 'vuejs-paginate'
export default {
  data() {
    return {
      swiperImages:[{src:'/static/pic/pic-12_1.png'}],
      products:[],
      thisPage: 1,
      category:'',
      productsCount: 10,
      pageCount:10,
      limit: 2,
      lastProducts:[],

    }
  },
  watch:{
    '$route' (to, from) {
      // 对路由变化作出响应...
    }

  },
  beforeRouteUpdate (to, from, next) {
    let vm =this;
    //頁數變換撈資料
    vm.getData();
    // console.log(to.params);

    next()
  },
  methods: {
    showPage: function(e){
      alert(e);
    },
    changeRouter: function(e){
      let vm=this;
      vm.thisPage=e;
      vm.$router.push({ name: 'Product', params: { category: 1, page: e }});
    },
    getData:function(){
      let vm = this;
      axios({
        method: "post",
        url: "http://ind.idea-infinite.com/api/v1/products",
        params: {
          limit: vm.limit,
          offset: ((vm.thisPage-1)*vm.limit), 
        }
      })
      .then(function(response){
        //清空products
        vm.products=[];
        let root='http://'+response.data['image_domain'];
        let realData=response.data.data;
        let productsCount=response.data['total'];
        vm.productsCount=productsCount;
        vm.pageCount=Math.ceil(vm.productsCount/vm.limit);
        realData.forEach(element => {
          //+root
          element['cover_image']=root+element['cover_image'];
          vm.products.push(element);

        });
        console.log(response)
      })
    },
        getLastData:function(){
      let vm = this;
      axios({
        method: "post",
        url: "http://ind.idea-infinite.com/api/v1/products",
        params: {
          limit: 10,
          offset: 0,
        }
      })
      .then(function(response){
        //清空products
        vm.lastProducts=[];
        let root='http://'+response.data['image_domain'];
        let realData=response.data.data;
        let productsCount=response.data['total'];
        realData.forEach(element => {
          //+root
          element['cover_image']=root+element['cover_image'];
          vm.lastProducts.push(element);
        });
      })
    },


    
  },
  mounted() {
    let vm = this;
    vm.getData();
    vm.getLastData();
    // console.log(vm.$route.params);
  },
  created() {
    let vm = this;
    vm.category=vm.$route.params['category'];
    vm.thisPage=vm.$route.params['page'];
  },
  components: {
    Swiper1,
    paginate: Paginate,
  }
}
</script>





