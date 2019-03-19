<template>
    <div>
      <div class="title">周末去哪儿</div>
      <ul>
        <li class="item" v-for="item in weekendList" :key="item.id">
          <div class="item-img-wrapper">
             <img class="item-img" :src="item.imgUrl" alt="" > 
          </div>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            
          </div>
        </li>
      </ul>
    </div>
</template>

<script>

export default {
  name: 'HomeWeekend',
  props:['weekendList'],
  data(){
    return{
      
   } 
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins1.styl'
  .title
    background-color:#eee
    line-height :.8rem
    margin-top :.2rem
    padding-left:.1rem
  .item-img-wrapper
    height :0
    padding-bottom :37%
    overflow:hidden
    .item-img
      width:100%
  .item-info
    padding:.2rem
    .item-title
        line-height : .54rem
        font-size: .34em;
        font-weight:bold
        ellipsis()
      .item-desc
        line-height : .4rem
        color:#ccc
        ellipsis()
      
</style>
