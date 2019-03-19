<template>
  <div class="alphabet-list">
    <div class="item" v-for="(item,index) in cities" :key="index">{{index}}</div>
  </div>
</template>
<script>
export default {
  name:"CityAlphabet",
  props:{
    cities:Object,
  },
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
      line-height :0.44rem
</style>