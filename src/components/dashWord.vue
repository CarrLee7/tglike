<template>
  <div id="dashWord">
      <p>{{msg.c}} <br/>{{msg.d}}</p>
    </div>
</template>
<script>
export default {
  name: 'dashWord',
  props: ['msg']
}
</script>
<style>
#dashWord{
  position: absolute;
  left: 4vw;
  top: 15vh;
  width:200px;
  color: rgba(0,0,0,0.1);
  font-size: 98px;
  font-family: SF Mono;
  display: inline-block;
}
.dash-enter-active, .dash-leave-active {
  transition: opacity .5s;
}
.dash-enter, .dash-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

