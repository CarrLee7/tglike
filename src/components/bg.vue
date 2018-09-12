<template>
  <div id="bg">
    <router-view></router-view>
  </div>
</template>

<script>
import window from './window'
export default {
  name: 'bg',
  components:{
    window,
  }
}
</script>

<style>
#bg{
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-image: url('../assets/a.png');
  cursor:url(../assets/ab.png),auto; 
}
</style>
