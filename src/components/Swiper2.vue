<template>
  <div> 
     <swiper :options="swiperOption2" ref="mySwiper2" class="">
              <swiper-slide v-for="(item) in swiperData" :key="item.id" @click.native="swiper2Func(item)" style="cursor:pointer">
                <img :src="item['cover_image']" class="swiper-image">
              </swiper-slide>
              <div class="swiper-button-prev " slot="button-prev"></div>
              <div class="swiper-button-next " slot="button-next"></div>
      </swiper>
  </div>
</template>


<style lang="scss" scoped>
@import "~bootstrap/scss/bootstrap";
@import "../assets/scss/all.scss";

// @include media-breakpoint-up(xl)
.swiper-image {
  width: 100%;
  height: 140px;
  @include media-breakpoint-up(xl) {
    height: 367px;
  }
}
</style>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  props: ["HomeCall"],
  data() {
    return {
      swiperImages: [
        { src: "/static/pic/pic-08_1.png" },
        { src: "/static/pic/pic-09_1.png" },
        { src: "/static/pic/pic-10_1.png" },
        { src: "/static/pic/pic-11_1.png" }
      ],
      swiperOption2: {
        slidesPerView: 4,
        spaceBetween: 0,
        loop: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          // 向下
          1199: {
            slidesPerView: 2,
            spaceBetween: 0
          }
        }
      },
      swiperData: []
    };
  },
  watch: {
    HomeCall: function() {
      // alert(this.HomeCall);
      this.swiper2Func(this.swiperData[this.HomeCall]);
    }
  },
  methods: {
    swiper2Func: function(item) {
      let vm = this;
      vm.$emit("swiper2Func", item);
    },
    getSwiperData() {
      let vm = this;
      vm
        .axios({
          method: "post",
          url: "http://ind.idea-infinite.com/api/v1/products",
          params: {
            limit: 6,
            offset: 0,
            slider: 1
          }
        })
        .then(function(response) {
          //清空products
          vm.swiperData = [];
          let root = "http://" + response.data["image_domain"];
          let realData = response.data.data;
          realData.forEach(element => {
            //+root
            element["cover_image"] = root + element["cover_image"];
            vm.swiperData.push(element);
          });
          console.log(vm.swiperData);
          let item = vm.swiperData[0];
          vm.swiper2Func(item);
        });
    }
  },
  mounted() {},
  created() {
    let vm = this;
    vm.getSwiperData();
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>





