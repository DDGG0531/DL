<template>
  <div> 
    <div id="parallax" v-bind:style="{backgroundImage: 'url('+parallaxImage+')',height:parallaxHeight+'px'}">
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import "../assets/scss/all.scss";
// @include media-breakpoint-up(xl)
#parallax{
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.parallax-Home{
  height: 667px;
}
.parallax-Intro{
  height: 667px;
}
</style>

<script>


export default {
  props: ['parallaxImage','parallaxHeight'],
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





