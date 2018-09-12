<template>
  <div id="box1">
    <p class="title1"> {{msg.a}} <br /> {{msg.b}} </p>
  </div>
</template>
<script>
export default {
  name: 'box1',
  props: ['msg']
}
</script>
<style>
#box1{
  height: 160px;
  width: 24.25%;
  border: 1px solid #d1d9df;
  box-sizing: border-box;
  border-bottom: 3px solid #fc0502;
  padding: 10px 20px;
  transition: all .3s;
}
#box1 a{
  display: block;
  width: 100%;
  height: 100%;
}
</style>
