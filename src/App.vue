<template>
  <div id="app">
    <transition name="fade-down" mode="out-in" appear>
        <router-view></router-view>
    </transition>
    <footer-view></footer-view>
  </div>
</template>

<script>
import FooterView from "./components/Footer.vue"
export default {
  name: 'App',
  components:{
    FooterView,
  }
}
</script>

 <style lang="scss" >
@import url('https://fonts.googleapis.com/css?family=Varela');
@import "~bootstrap/scss/bootstrap";

body {
  margin: 0;
}
#app {
  font-family: 'Varela','Microsoft JhengHei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
img{
  max-width: 100%;
}
a:link {
  text-decoration: inherit;
  color: inherit;
  cursor: auto;
}

a:visited {
  text-decoration: inherit;
  color: inherit;
  cursor: auto;
}
// animation
@keyframes fadeInDown {
    from {
        opacity: 0.05;
        transform: translate3d(0, -60px, 0);
    }
    to {
        opacity: 1;
        transform: none;
    }
}

@keyframes fadeOutUp {
    from {
        opacity: 1;
        transform: none;
    }
    to {
        opacity: 0.05;
        transform: translate3d(0, -60px, 0);
    }
}

.fade-down-enter-active {
    animation-name: fadeInDown;
    animation-duration: 0.5s;
}

.fade-down-leave-active {
    animation-name: fadeOutUp;
    animation-duration: 0.3s;
}
</style>
