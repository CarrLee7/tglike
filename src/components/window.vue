<template>
  <div id="window">
    <svg viewBox="0 0 16 16" height="30px">
      <path fill="#000" d="M7.999,0.431c-4.285,0-7.76,3.474-7.76,7.761 c0,3.428,2.223,6.337,5.307,7.363c0.388,0.071,0.53-0.168,0.53-0.374c0-0.184-0.007-0.672-0.01-1.32 c-2.159,0.469-2.614-1.04-2.614-1.04c-0.353-0.896-0.862-1.135-0.862-1.135c-0.705-0.481,0.053-0.472,0.053-0.472 c0.779,0.055,1.189,0.8,1.189,0.8c0.692,1.186,1.816,0.843,2.258,0.645c0.071-0.502,0.271-0.843,0.493-1.037 C4.86,11.425,3.049,10.76,3.049,7.786c0-0.847,0.302-1.54,0.799-2.082C3.768,5.507,3.501,4.718,3.924,3.65 c0,0,0.652-0.209,2.134,0.796C6.677,4.273,7.34,4.187,8,4.184c0.659,0.003,1.323,0.089,1.943,0.261 c1.482-1.004,2.132-0.796,2.132-0.796c0.423,1.068,0.157,1.857,0.077,2.054c0.497,0.542,0.798,1.235,0.798,2.082 c0,2.981-1.814,3.637-3.543,3.829c0.279,0.24,0.527,0.713,0.527,1.437c0,1.037-0.01,1.874-0.01,2.129 c0,0.208,0.14,0.449,0.534,0.373c3.081-1.028,5.302-3.935,5.302-7.362C15.76,3.906,12.285,0.431,7.999,0.431z"></path>
    </svg>
    <div class="box-container">
      <box1 v-bind:msg="one" @click.native="goTo()"></box1>
      <box2
        v-bind:msg="two" 
        @mouseover.native="addActive()"
        
        @mouseout.native="remActive()"
        :class="{ activeBox: this.one.isActive}"
      ></box2>
      <box2 v-bind:msg="three"></box2>
      <box1 v-bind:msg="four"></box1>
    </div>
    <div class="paragraph1">
      <p>Idea By <br/>lstore-graphics</p>
    </div>
    <div class="paragraph2">
      <p>If u have any question or problem <br/> Please email me at suggest@tglike.com</p>
    </div>
    <tipBox class="tip1" v-html="tip1"></tipBox>
    <tipBox class="tip2" v-html="tip2"></tipBox>
    <tipBox class="tip3" v-html="tip3"></tipBox>
    <div class="game">
      <img src="../assets/pokeball.png" 
        alt="Icons made by Roundicons Freebies from www.flaticon.com is licensed by CC 3.0"
        height="30px"
      >
      <p>Game</p>
    </div>
  </div>
</template>

<script>
import box1 from './box1.vue'
import box2 from './box2.vue'
import tipBox from './tipBox.vue'
export default {
  name: 'window',
  components: {
    box1,
    box2,
    tipBox
  },
  data(){
    return{
      one: {a: 'My',b: 'Blog',isActive: false},
      two: {a: 'My',b: 'Project'},
      three: {a: 'My',b: 'Resume'},
      four: {a: 'My',b: 'Pig'},
      tip1: '<p>Useful <br/> Resource',
      tip2: '<p>Useful <br/> Resource',
      tip3: '<p>Useful <br/> Resource'
    }
  },
  methods: {
    goTo: function(){
      location.href="https://carrlee.cn"
    },
    addActive: function(){
      this.one.isActive = true;
      
    },
    remActive: function(){
      this.one.isActive = false;
    }
  }
}
</script>

<style>
#window{
  width: 82vw;
  height: 88vh;
  background-color: #f0f5f8;
  margin: 0 auto;
  margin-top: 5vh;
  padding: 1vh 4vw;
  position: relative;
  font-family: CONSOLAS;
}
#window svg{
  position: absolute;
  top: 40px
}
.title1,.title2{
  font-size: 2em;
  line-height: 1em;
  height: 2em;
}
.title1{
  margin-top: 1.5em;
}
.title2{
  margin-top: 4em;
}
.activeBox{
  background-color: #000;
  transform: scale(1.2);
  color: #fff;
  box-shadow: -50px 50px 30px 2px rgba(0,0,0,0.1);
  border: none!important;
}
.box-container{
  padding-top: 145px;
  width: 100%;
  display: flex;
}
.box-container>div:nth-child(1),.box-container>div:nth-child(2),.box-container>div:nth-child(3){
  margin-right: 1%;
}
.box-container>div:nth-child(1),.box-container>div:nth-child(3),.box-container>div:nth-child(4){
  margin-top: 70px
} 
.paragraph1{
  position: absolute;
  bottom: 20px;
  font-size: 2em;
}
.paragraph2{
  position: absolute;
  bottom: 30px;
  left: 350px;
  font-size: 1.2em
}
.tip1{
  margin-left: 25.25%
}
.tip2{
  margin-left: 50.5%;
  margin-top: -500px
}
.tip3{
  margin-left: 65%;
  margin-top: 400px
}
.game{
  width: 10%;
  height: 80px;
  border: 1px solid #d9d1df;
  margin-left: 90%;
  margin-top: -150px;
}
.game img{
  display: block;
  margin: 10px 60px
}
.game p{
  padding: 2px 20px
}
</style>
