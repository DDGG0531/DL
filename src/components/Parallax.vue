<template>
  <div> 
    <div id="parallax" v-bind:style="{backgroundImage: 'url('+parallaxImage+')'}">
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import "../assets/scss/all.scss";
// @include media-breakpoint-up(xl)
#parallax{
  width: 100%;
  height: 667px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

export default {
  props: ['parallaxImage'],
  data() {
    return {
      // parallaxImage: '/static/pic/pic-06_1.png',
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





