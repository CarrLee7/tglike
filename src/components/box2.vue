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
@keyframes shakeBox {
  0%{
    transform: rotate(0deg) scale(1.2)
  }
  50%{
    transform: rotate(0deg) scale(1.2)
  }
  60%{
    transform: rotate(5deg)  scale(1.2)
  }
  70%{
    transform: rotate(-5deg) scale(1.2)
  }
  80%{
    transform: rotate(5deg) scale(1.2)
  }
  90%{
    transform: rotate(-5deg) scale(1.2)
  }
  100%{
    transform: rotate(0deg) scale(1.2)
  }
}
</style>
