<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont icon-fanhui"></span>
        </div>
        <div class="header-input">
          <span class="iconfont icon-sousuo"></span>
          输入城市/景点/游玩主题
        </div>
        <router-link to="/City" tag="div" >
          <div class="header-right">
            {{this.city}}
            <span class="iconfont icon-jiantou"></span>
          </div>
        </router-link>
        <!-- <router-link to="/list">列表页</router-link> -->
         <!-- <router-link to="/list">列表页</router-link> -->
    </div>
</template>


<script>
import {mapState,mapGetters} from 'Vuex'
export default {
  name: 'HomeHeader',
  computed:{
    ...mapState({city:'city'}),
    // ...mapGetters(['doubleCity'])
  }
}
</script>

<style lang="stylus" scoped>
// @import '../../../assets/styles/varibles.styl'
// @import '~@/assets/styles/varibles.styl'
@import '~styles/varibles.styl'
   .header 
    
     overflow:hidden
     display:flex
     align-items:center
     position relative
     height :0.86rem
     line-height :0.86rem
     background :$bgColor
     color:#fff
     width:100%
   
     .header-left
       width:.64rem
       float:left
       .icon-fanhui
          display:block
          text-align:center 
          font-size:.4rem
     .header-right
       min-width:1.04rem
       padding:0 .1rem
       float:right
       box-sizing :border-box 
       text-align :center
       
       .icon-jiantou
          margin-left:-0.04rem
     .header-input
        flex:1
        
        // width:100%
        background:#fff
        border-radius:.1rem
        line-height :.62rem
        margin:.12rem .1rem
        padding-left:.1rem
        color:#ccc
</style>
