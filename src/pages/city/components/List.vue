<template>
  
   <div class="list" ref="wrapper">
     <div  >
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.city}}</div>
          </div>
        
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hotcities" :key="item.id" @click="handleClickCity(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div> 
      </div>
      <div class="area" v-for="(item,index) in cities" :key="index" :ref="index">
        <div class="title border-topbottom" >{{index}}</div>
        <div class="item-list" >
          <div class="item border-bottom" v-for="cities in item" :key="cities.id" @click="handleClickCity(cities.name)">{{cities.name}}</div>   
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import {mapState} from 'Vuex'
export default {
  name:"CityList",
  props:{
    hotcities:Array,
    cities:Object,
    getLetter:String,
  },
  data(){
    return{}
  },
  methods:{
    handleClickCity(cityName){
      this.$store.commit('getHomeCityName',cityName);
      this.$router.push({path:'/'})
    }
  },
  watch:{
    getLetter(){
      if(this.getLetter){
        // console.log(this.$refs); ref最好的 例子
        
        var element=this.$refs[this.getLetter][0]
        this.scroll.scrollToElement(element)
      };
      
    }
  },
  computed:{
    ...mapState({city:'city'})
  },
  mounted(){
   this.scroll = new BScroll(this.$refs.wrapper,{click:true});
   
  },
}
</script>
<style lang="stylus" scoped>
@import  '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color :#ccc
    &:after
      border-color :#ccc  
  .list
    overflow: hidden
    position:absolute
    top:1.6rem
    left:0
    right:0
    bottom:0 
   

    .title
      line-height :.64rem
      padding-left:.2rem
      background-color :#eee
      color:#666
      font-size:.26rem
    .button-list
      padding:.1rem .6rem .1rem .2rem
      overflow: hidden
      .button-wrapper
        float:left
        width:33.33%
        line-height:.3rem
        box-sizing :border-box
        .button
          text-align:center
          border:.04rem solid #eee
          border-radius:.06rem
          padding:.1rem 
          margin :.1rem
    .item-list
      .item
        padding-left:.2rem
        line-height:.76rem
        color:#666 
      .border-bottom
        &:before
          border-color :#ccc
        &:after
          border-color :#ccc 
</style>