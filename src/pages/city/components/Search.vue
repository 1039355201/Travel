<template>
  <div class="search">
    <input type="text" class="input-search" placeholder="输入城市名或拼音">
  </div>
</template>
<script>
export default {
  name:"CitySearch"
}
</script>
<style lang="stylus" scoped>
@import  '~styles/varibles.styl'
  .search
    position:relative
    height :.74rem
    line-height:.74rem
    background-color :$bgColor
    color:#fff
    padding:0 .1rem
    .input-search
      box-sizing :border-box
      height :.60rem
      line-height:.60rem
      text-align :center
      border-radius:.06rem
      color:#666
      width :100%
      padding:0 .12rem
      

</style>