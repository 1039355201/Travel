<template>
  <div class="alphabet-list">
    <div class="item" 
    v-for="(item,i) in letters" 
    :key="i"
    :ref="item"
    @click="handleClick"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd">{{item}}</div>
  </div>
</template>
<script>
export default {
  name:"CityAlphabet",
  props:{
    cities:Object,
    
  },
  data(){
    return {
      touchStatus:false,
      startY:0,
      timer:null
    }
  },
  updated(){
    this.startY=this.$refs['A'][0].offsetTop;
  },
  methods:{
    handleClick(e){
      this.$emit("func",e.target.innerText)
    },
    handleTouchStart(){
      this.touchStatus=true;
    },
    handleTouchMove(e){
      if(this.touchStatus){
        // 节流 优化代码性能
        if(this.timer){
          clearTimeout(this.timer)
        }
        this.timer=setTimeout(()=>{
          var touchY=e.touches[0].clientY-80;
          var index=Math.floor((touchY-this.startY)/20);
          if(index>=0&&index<this.letters.length){
          this.$emit("func",this.letters[index])
         }
        })  
      //  / console.log(index);
        // console.log(e);
        // console.log(this.$refs);
  
      }
    },
    handleTouchEnd(){
      this.touchStatus=false;
    },
  },
  computed:{
    letters(){
      var letters=[];
      for(var k in this.cities){
        letters.push(k);
      }
      // ["A","B"]
      return letters
    }
  }
}
</script>
<style lang="stylus" scoped>
@import  '~styles/varibles.styl'
  .alphabet-list
    position:absolute
    top:1.6rem
    right:0
    bottom:0
    width:0.44rem
    color:$bgColor
    display:flex
    flex-direction :column
    justify-content :center
    align-items :center
    .item
      line-height :0.40rem
</style>