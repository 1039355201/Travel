<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont icon-fanhui"></span>
        </div>
        <div class="header-input">
          <span class="iconfont icon-sousuo"></span>
          输入城市/景点/游玩主题
        </div>
        <div class="header-right">
          城市
          <span class="iconfont icon-jiantou"></span>
        </div>
        <!-- <router-link to="/list">列表页</router-link> -->
         <!-- <router-link to="/list">列表页</router-link> -->
    </div>
</template>


<script>

export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
// @import '../../../assets/styles/varibles.styl'
// @import '~@/assets/styles/varibles.styl'
@import '~styles/varibles.styl'
   .header 
     display:flex
     height :0.86rem
     line-height :0.86rem
     background :$bgColor
     color:#fff
     .header-left
       width:.64rem
       float:left
       .icon-fanhui
          display:block
          text-align:center 
          font-size:.4rem
     .header-right
       width:1.24rem
       float:right
       text-align :center
       .icon-jiantou
          margin-left:-0.04rem
     .header-input
        flex:1
        background:#fff
        border-radius:.1rem
        line-height :.62rem
        margin:.12rem .1rem
        padding-left:.1rem
        color:#ccc
</style>
