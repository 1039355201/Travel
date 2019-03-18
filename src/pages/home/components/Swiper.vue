<template>
   <div class="wrapper">
        
        <swiper :options="swiperOption" class="swiper">
            <!-- slides -->
            <swiper-slide v-for="item in swiperList" :key="item.id">
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
    data(){
        return{
            swiperOption:{
                pagination:'.swiper-pagination',
                loop:true
            },
            swiperList:[
                    {id:"001",imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/278a88f18f1523eec8c52f650522be68.jpg_750x200_bc365244.jpg"},
                    {id:"002",imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/2f5f3ea4698c9b7898db7562d89b91ed.jpg_750x200_bd3b4ce9.jpg"}
                ]
            
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
