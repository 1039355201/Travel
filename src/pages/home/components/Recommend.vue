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
  data(){
    return{
            recommendList:[
                    {id:"001",title:"故宫",desc:"景点门票",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"},
                    {id:"002",title:"故宫",desc:"一日游",imgUrl:"http://img1.qunarzz.com/sight/p0/1508/fe/434ee530e21f1c11bad088e8cc8d5e93.water.jpg_200x200_912ce9f4.jpg"},
                    {id:"003",title:"故宫",desc:"北京必游",imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png"},
                    {id:"004",title:"故宫",desc:"溜娃儿",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png"},
                    {id:"005",title:"故宫",desc:"爬长城",imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/0334cf5430b9b5505fd79e2b8d7e8670.png"},
                    {id:"006",title:"故宫",desc:"故宫茶馆",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png"},
                    {id:"007",title:"故宫",desc:"茶馆相声",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png"},
                    {id:"008",title:"故宫",desc:"踏青赏花",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png"},
                    {id:"009",title:"故宫",desc:"一日游",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"},
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
