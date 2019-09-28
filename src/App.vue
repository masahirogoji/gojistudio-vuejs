<template>
  <div id="app">
    <myheader></myheader>
    <router-view/>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from './components/myheader'
import myfooter from './components/myfooter'

export default {
  name: 'App',
  components: {
    myheader,
    myfooter
  }
}
</script>

<style lang="scss">
body {
  font-family: "Work Sans", "Noto Serif JP", sans-serif;
  font-size: 15px;
  letter-spacing: 0.2em;
  color: #777;
  margin: 0;
}
.container {
    width: auto;
    padding: 1em 10em;

  h2 {
    margin: 2em 0;
    color: #333;
  }

  .message{
      margin: 3em 0;
  }
}
</style>  
