<template>
  <div class="game">
      <img src="../assets/pokeball.png" 
        alt="Icons made by Roundicons Freebies from www.flaticon.com is licensed by CC 3.0"
        height="30px"
      >
      <p>Game</p>
    </div>
</template>
<script>
export default {
  name: 'game'
}
</script>
<style>
.game{
  width: 10%;
  height: 80px;
  border: 1px solid #d9d1df;
  margin-left: 90%;
  margin-top: 350px;
}
.game img{
  display: block;
  margin: 10px 60px
}
.game p{
  padding: 2px 20px
}
</style>