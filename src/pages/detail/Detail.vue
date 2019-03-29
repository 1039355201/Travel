<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="categoryList"></detail-list>
    <div class="blank"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name:"Detail",
  components:{
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data(){
    return {
      sightName:'',
      bannerImg:'',
      gallaryImgs:[],
      categoryList:[],
   
    }
  },
 
  methods:{
    getDetailInfo(){
      axios.get('/api/detail.json',{
        params:{
          id:this.$route.params.id
        }
      }).then(res=>{
        var res=res.data
        if(res.ret&&res.data){
          var data=res.data;
          this.sightName=data.sightName;
          this.bannerImg=data.bannerImg;
          this.gallaryImgs=data.gallaryImgs;
          this.categoryList=data.categoryList;
        }
        console.log(data);
      }
      
      )

    }
  },
  mounted(){
    this.getDetailInfo()
  }

}
</script>

<style lang="stylus" scoped>
  .blank
    height:50rem
</style>
