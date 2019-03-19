<template>
    <div>
      <div class="title">热销推荐</div>
      <ul>
        <li class="item" v-for="item in recommendList" :key="item.id">
          <img class="item-img" :src="item.imgUrl" alt="" >
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>

export default {
  name: 'HomeRecommend',
  props:['recommendList'],
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
    // margin-top :.2rem
    padding-left:.1rem
  .item
    display:flex
    height :2.4rem
    
    overflow:hidden
    .item-img
      width:2.2rem
      height:2.2rem
      padding:.1rem
    .item-info
      flex:1
      padding:.1rem
      min-width:0
      .item-title
        line-height : .54rem
        font-size: .34em;
        font-weight:bold
        ellipsis()
      .item-desc
        line-height : .4rem
        color:#ccc
        ellipsis()
      .item-button
        margin-top:.16rem
        line-height :.44rem
        border-radius: 0.06rem
        background-color:#ff9300  
        padding:0 .2rem
        color:#fff
</style>
