<template>
  <div>
    <div class="search">
      <input type="text" class="input-search" placeholder="输入城市名或拼音" v-model="keyWords">
    </div>
    <div class="sereah-content" ref="search" v-show="keyWords">
      <ul>
        <li v-for="item in list" :key="item.id" class="sereah-item border-bottom">{{item.name}}</li>
        <li  class="sereah-item border-bottom" v-show="hasNoData">没有匹配的数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name:"CitySearch",
  props:{
    cities:Object,
  },
  data(){
    return{
      keyWords:'',
      timer:null,
      list:[]
    }
  },
  methods:{
    getInfo(){
      console.log(this.list);
    }
  },
  created(){
    this.getInfo()
  },
  watch:{
     keyWords(){
          var arr=this.cities;
          if(!this.keyWords){
            this.list=[];
            return 
          };
          for (var k in arr){
            arr[k].forEach(item=>{
              if(item.spell.indexOf(this.keyWords)>-1||item.name.indexOf(this.keyWords)>-1){
                this.list.push(item);
              }
            })
          };
            
          
         
    },
  },
  computed:{
   
    hasNoData(){
      return this.list.length>0 ? false :true
    }
  },
  mounted(){
    // console.log(this.$refs.search);
    
    this.scroll = new BScroll(this.$refs.search);
  },
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
  .sereah-content
    overflow: hidden
    position:absolute
    top:1.6rem
    left:0
    right:0
    bottom:0     
    background-color :#ccc
    z-index:1
    .sereah-item
      padding-left: 0.2rem;
      line-height:.64rem;
      color:#666;
      background-color :#fff

</style>