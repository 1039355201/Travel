<template>
    <div>
        <home-header ></home-header>
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
import {mapState} from 'Vuex'
export default {
  name: 'Home',
  data(){
    return {
      // city:"",
      lastCity:'',
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[],

    }
  },
  computed:{
    ...mapState(['city'])
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
      axios.get('/api/index.json?city='+this.city).then(res=>{
        res=res.data;
        if(res.ret&&res.data){
          
          this.swiperList=res.data.swiperList;
          this.iconList=res.data.iconList;
          this.recommendList=res.data.recommendList;
          this.weekendList=res.data.weekendList;
          this.recommendList=res.data.recommendList;
          
        }
        // console.log(res);
       
      })
    },

  },
  mounted(){
    this.lastCity=this.city;
    this.getHomeInfo();
    // console.log('mounted'); 
  },
  activated(){
    // this.getHomeInfo();
    // 当页面被重新渲染时,会执行
    if(this.lastCity!=this.city){
      this.lastCity=this.city;
      this.getHomeInfo();

    }
  },
}
</script>

<style scoped>

</style>
