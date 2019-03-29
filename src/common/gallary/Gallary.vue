<template>
  <div class="container" @click="handleGallaryShow" >
    <div class="wrapper">
        <swiper :options="swiperOption"   >
            <!-- slides -->
            <swiper-slide v-for="(item,index) in imgs" :key="index">
                <img class="img" :src="item" alt="" srcset="">
            </swiper-slide>  
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        
        </swiper>
    </div>
  </div>
</template>

<script>

export default {
  name:"CommonGallary",
  props:{
    imgs:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
        return{
            swiperOption:{
                pagination:'.swiper-pagination',
                paginationType:'fraction',
                observer:true,
                observeParents:true,
                loop:true
            },
            isGallaryShow:true,
           
        }
  },
  methods:{
    // handleGallaryShow(){
    //   this.isGallaryShow=false;
    // },
    handleGallaryShow(){
      this.$emit('close')
    }
  },

}
</script>

<style lang="stylus" scoped>
  .container>>> .swiper-container
    overflow:inherit
  .container
    display:flex
    flex-direction :column
    justify-content :center
    position:fixed
    left:0
    top:0
    bottom:0
    right:0
    background :#000
    z-index:99
    .wrapper
      height:0
      padding-bottom :100%
      // overflow:hidden
      width:100%
      .img
        width:100%
      .swiper-pagination
        color:#fff 
        bottom: -1.2rem; 
</style>