<template>
  <div> 
    <!-- text main-->
    <h1 class="test-text">main-color</h1> 
    <h2 class="test-text-2">main-color-2</h2>
     
    <!--  -->
  </div>
</template>

<style lang="sass" scoped>
@import "~bootstrap/scss/bootstrap"
@import "../assets/sass/all.sass"
// @include media-breakpoint-up(xl)
// 可以吃到sass variable
.test-text-2
  color: $main-color
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




