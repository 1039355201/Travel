<template>
    <div>
        <home-header :city="city"></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icon :iconList="iconList"></home-icon>
        <home-recommend :recommendList="recommendList"></home-recommend>
        <home-weekend :weekendList="weekendList"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcon from './components/Icon'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
  name: 'Home',
  data(){
    return {
      city:"",
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[],

    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeekend,
  },
  methods:{
    getHomeInfo(){
      axios.get('/api/index.json').then(res=>{
        res=res.data;
        if(res.ret&&res.data){
          this.city=res.data.city
          this.swiperList=res.data.swiperList;
          this.iconList=res.data.iconList;
          this.recommendList=res.data.recommendList;
          this.weekendList=res.data.weekendList;
          this.recommendList=res.data.recommendList;
          
        }
        console.log(res);
        
      })
    },

  },
  mounted(){
    this.getHomeInfo()
  }
}
</script>

<style scoped>

</style>
