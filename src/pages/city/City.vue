<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :hotcities="hotcities" :cities="cities" :getLetter="letter"></city-list>
    <city-alphabet :cities="cities" @func="getAlpha"></city-alphabet>
  </div>
</template>
<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
  name:'City',
  data(){
    return{
      cities:{},
      hotcities:[],
      letter:'',
    }
  },
  methods:{
    getCityInfo(){
      axios.get('/api/city.json').then(res=>{
        var data=res.data.data;
        if(res.data.ret&&res.data.data){
          this.cities=data.cities;
          this.hotcities=data.hotCities;
          console.log(data);
          
        }
        
        
      })
    },
    getAlpha(data){
      this.letter=data;
      
      
    }
  },
  mounted(){
    this.getCityInfo();
    this.getAlpha();
  },
  components:{
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  }
}
</script>
<style lang="stylus" scoped>

</style>
