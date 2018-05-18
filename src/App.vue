<template>
  <div id="app">
    <router-view/>
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
</style>
