<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont icon-fanhui icon-back"></div>
    </router-link>
  </div>
</template>
<script>
export default {
  name:"CityHeader"
}
</script>
<style lang="stylus" scoped>
@import  '~styles/varibles.styl'
  .header
    position:relative
    height :$headerHeight
    line-height:$headerHeight
    text-align:center
    background-color :$bgColor
    color:#fff
    font-size: 0.32rem
    .icon-back
      position:absolute
      top:0
      left:0
      text-align :center
      width:.64rem
      font-size: 0.4rem
      color:#fff
</style>