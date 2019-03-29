<template>
  <div class="header">
    <!-- header-abs -->
    <router-link class="header-abs" tag="div" to='/' v-show="showAbs">
      <span class="iconfont icon-fanhui"></span>
    </router-link>
    <!-- header-fixed -->
    <div class="header-fixed" v-show="!showAbs" :style="opacityObj">
      重点详情
      <router-link to="/">
        <div class="iconfont icon-fanhui icon-back"></div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name:"DetailHeader",
  data(){
    return {
      showAbs:true,
      opacityObj:{
        opacity:0
      }
    }
  },
  methods:{
    // 根据滑动距离改变fixed的透明度 
    handleHeaderClick(){
      var scrollTop=document.documentElement.scrollTop
      if(scrollTop>60){
        var opacity=scrollTop/150;
        opacity= opacity>1 ? 1: opacity;
        this.opacityObj= {opacity};
        this.showAbs=false;
      }else{
        this.showAbs=true;
      }
    }
  },
  // activated(){
  //   window.addEventListener('scroll',this.handleHeaderClick)
  // },
  // // 清除全局事件 只保证在当前页面显示
  //  deactivated(){
  //   window.removeEventListener('scroll',this.handleHeaderClick)
  // },
  mounted(){
     window.addEventListener('scroll',this.handleHeaderClick)
  }
}
</script>

<style lang="stylus" scoped>
@import  '~styles/varibles.styl'
  .header-abs
    position:absolute
    top:.2rem
    left:.2rem
    height :0.8rem
    line-height :0.8rem
    width :0.8rem
    text-align :center
    border-radius:0.4rem
    background:rgba(0,0,0,.5)
    color:#fff
  .header-fixed
    position:fixed
    top:0
    left:0
    right:0
    height :$headerHeight
    line-height:$headerHeight
    text-align:center
    background-color :$bgColor
    color:#fff
    font-size: 0.32rem
    z-index:2
    .icon-back
      position:absolute
      top:0
      left:0
      text-align :center
      width:.64rem
      font-size: 0.4rem
      color:#fff  



</style>