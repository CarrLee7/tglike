<template>
  <div id="window">
    <gitsvg></gitsvg>
      <transition name = "dash">
        <dashWord v-if="two.isActive" :msg="two"></dashWord>
      </transition>
      <transition name = "dash">
        <dashWord v-if="three.isActive" :msg="three"></dashWord>
      </transition>
    <div class="box-container" :class="{ activeBoxCon : boxCon.isActive}">
      <box1 
        v-bind:msg="one" 
        @click.native="goTo()"
        @mouseover.native="addActive(boxCon)"
        @mouseout.native="remActive(boxCon)"
      ></box1>
      <box2
        class="box2"
        v-bind:msg="two" 
        @mouseover.native="addActive(two)"
        @mouseout.native="remActive(two)"
        :class="{ activeBox: two.isActive}"
      ></box2>
      <box2 
        v-bind:msg="three"
        @mouseover.native="addActive(three)"
        @mouseout.native="remActive(three)"
      ></box2>
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
    <game></game>
  </div>
</template>

<script>
import box1 from './box1.vue'
import box2 from './box2.vue'
import tipBox from './tipBox.vue'
import gitsvg from './gitsvg.vue'
import game from './game.vue'
import dashWord from './dashWord.vue'
export default {
  name: 'window',
  components: {
    box1,box2,tipBox,
    gitsvg,game,dashWord
  },
  data(){
    return{
      boxCon: {isActive: false},
      one: {a: 'My', b: 'Blog', isActive: false},
      two: {a: 'My',b: 'Project', c: 'P', d:'R O J E C T', isActive: false},
      three: {a: 'My',b: 'Resume', c: 'R', d:'E S U M E', isActive: false},
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
    addActive: function(e){
      console.log(e.isActive)
      e.isActive = true
      
    },
    remActive: function(e){
      e.isActive = false;
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
  min-width: 1200px;
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
  /* 盒子变大，背景变黑 */
  background-color: #000;
  transform: scale(1.2);
  color: #fff;
  box-shadow: -50px 50px 30px 2px rgba(0,0,0,0.1);
  border: none!important;
  animation: shakeBox .8s ease forwards .2s;
}
.box-container{
  padding-top: 145px;
  width: 100%;
  display: flex;
}
.activeBoxCon div{
  /* 四个盒子的同时变化 */
  border-bottom: 3px solid #84c4ac!important;
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

</style>
