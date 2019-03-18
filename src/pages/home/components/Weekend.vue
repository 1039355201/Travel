<template>
    <div>
      <div class="title">周末去哪儿</div>
      <ul>
        <li class="item" v-for="item in recommendList" :key="item.id">
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
  data(){
    return{
            recommendList:[
                    {id:"001",title:"故宫",desc:"景点门票",imgUrl:"http://img1.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg"},
                    {id:"002",title:"故宫",desc:"一日游",imgUrl:"http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg"},
                    {id:"003",title:"故宫",desc:"北京必游",imgUrl:"http://img1.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg"},
                    
                ]
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
    padding-bottom :36.5%
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
