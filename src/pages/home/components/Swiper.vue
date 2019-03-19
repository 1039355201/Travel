<template>
   <div class="wrapper">
        
        <swiper :options="swiperOption" class="swiper" v-if="showSwiper">
            <!-- slides -->
            <swiper-slide v-for="item in swiperList" :key="item.id" >
                <img class="swiper-img" :src="item.imgUrl" alt="" srcset="">
            </swiper-slide>
            
        
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        
        </swiper>
 
   </div>
</template>

<script>
export default {
    name:"HomeSwiper",
    props:{
        swiperList:Array
    },
    data(){
        return{
            swiperOption:{
                pagination:'.swiper-pagination',
                loop:true
            },
           
        }
    },
    computed:{
        showSwiper(){
            return this.swiperList.length
        }
    }
}
</script>
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
     background-color :#f00  !important      
  .wrapper
    width: 100%
    height: 0
    overflow :hideen
    padding-bottom :27%
    background-color :#ccc
   .swiper-img
     width:100% 
          
    
</style>
