<template>
  <div id="box2">
     <p class="title2"> {{msg.a}} <br /> {{msg.b}} </p>
  </div>
</template>
<script>
export default {
  name: 'box2',
  props: ['msg']
}
</script>
<style>
#box2{
  height: 230px;
  width: 24.25%;
  border: 1px solid #d1d9df;
  box-sizing: border-box;
  border-bottom: 3px solid #fc0502;
  padding: 5px 20px;
  transition: all .3s;
}
</style>
