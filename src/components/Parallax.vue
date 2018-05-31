<template>
  <div> 
    <div id="parallax-1" v-if="type1" v-bind:style="{backgroundImage: 'url('+parallaxImage+')'}">
    </div>
    <div id="parallax-2" v-if="type2" v-bind:style="{backgroundImage: 'url('+parallaxImage+')'}">
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import "~bootstrap/scss/bootstrap";
@import "../assets/scss/all.scss";

// @include media-breakpoint-up(xl)
#parallax-1 {
  max-width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 186px;
  @include media-breakpoint-up(xl) {
    height: 670px;
  }
}
#parallax-2 {
  max-width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 186px;
  @include media-breakpoint-up(xl) {
    height: 750px;
  }
}
.parallax-Home {
  height: 667px;
}
.parallax-Intro {
  height: 667px;
}
</style>

<script>
export default {
  props: ["parallaxImage", "type1", "type2"],
  data() {
    return {
      // parallaxImage: '/static/pic/pic-06_1.png',
    };
  },
  watch: {},
  methods: {},
  mounted() {},
  created() {},
  components: {}
};
</script>





