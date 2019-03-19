<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :hotcities="hotcities" :cities="cities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
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
      hotcities:[]
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
    }
  },
  mounted(){
    this.getCityInfo();
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
