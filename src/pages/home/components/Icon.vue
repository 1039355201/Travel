<template>
  <div class="icons">
    <swiper :options="swiperOption" >
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="img-content" :src="item.imgUrl" alt="" srcset="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>

  </div>
</template>

<script>
export default {
  name:"HomeIcon",
  props:['iconList'],
  data(){
     return{
            swiperOption:{
                // pagination:'.swiper-pagination',
                // loop:true
                autoplay:false
            },
          
   } 
  },
  // 计算属性,如果图标下标>=8就开始放在另一个swiper里面 避免一个放不下的情形
  computed:{
    pages(){
      const pages=[];
      this.iconList.forEach((item,index)=>{
        const page=Math.floor(index/8);
        if(!pages[page]){
          pages[page]=[]
        }
        pages[page].push(item)
      });
      return pages
    }
  }
   
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins1.styl'
      .icons>>>.swiper-container
          width: 100%
          height: 0
          overflow :hideen
          padding-bottom :50%
     .icons
       margin-top :.4rem
      .icon
        float:left
        width: 25%
        height :0%
        padding-bottom :25%
        position:relative
       
        box-sizing:border-box
        // padding:.1rem
        .icon-img
          position:absolute
          top:0
          left:0
          right:0
          bottom 0.44rem
          
          .img-content
            display:block
            height: 100%
            margin:0 auto  
        .icon-desc 
          position:absolute
          left:0
          right:0
          bottom:0
          height :0.44rem
          line-height :0.44rem
          text-align:center
          color:$darkTextColor
          ellipsis()
          // 加...
          
</style>
