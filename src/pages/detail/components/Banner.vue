<template>
  <div class="container">
    <div class="banner" @click="handleGallaryShow">
      <img class="img" :src="bannerImg" alt="" srcset="">
      <div class="info">
        <div class="detail-title">{{sightName}}</div>
        <div class="detail-number">
          <span class="iconfont icon-tupian banner-icon"></span>
          39
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary :imgs="gallaryImgs" @close="handleGallaryClose" v-show="isGallaryShow"></common-gallary>
    </fade-animation>

  </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation  from 'common/fade/Fade'
export default {
  name:'Banner', 
  props:{
    sightName:{
      type:String
    },
    bannerImg:{
      type:String
    },
    gallaryImgs:{
      type:Array
    },
  },
  data(){
    return {
      isGallaryShow:false,
     
    }
  },
  methods:{
    handleGallaryShow(){
      this.isGallaryShow=true
    },
    handleGallaryClose(){
      this.isGallaryShow=false
    }
  },
  components:{
    CommonGallary,
    FadeAnimation
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    height:0
    padding-bottom :55%
    overflow:hidden
    position:relative
    .img
      width:100%
    .info
      position:absolute
      left:0
      right:0
      bottom:0
      height:.6rem
      line-height :.6rem
      color:#fff
      background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
      display:flex 
      .detail-title   
        flex:1
        padding :0 .2rem
        font-size:.32rem
      .detail-number
        padding :0 .24rem
        height:.46rem
        line-height :.46rem
        margin: .12rem 0.2rem 0 0
        font-size:0.24rem
        border-radius:0.2rem 
        background-color:rgba(0,0,0,.8)
        .banner-icon
          font-size:0.24rem
</style>