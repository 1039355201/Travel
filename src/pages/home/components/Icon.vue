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
  data(){
     return{
            swiperOption:{
                // pagination:'.swiper-pagination',
                // loop:true
            },
            iconList:[
                    {id:"001",desc:"景点门票",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"},
                    {id:"002",desc:"一日游",imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png"},
                    {id:"003",desc:"北京必游",imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png"},
                    {id:"004",desc:"溜娃儿",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png"},
                    {id:"005",desc:"爬长城",imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/0334cf5430b9b5505fd79e2b8d7e8670.png"},
                    {id:"006",desc:"故宫茶馆",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png"},
                    {id:"007",desc:"茶馆相声",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png"},
                    {id:"008",desc:"踏青赏花",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png"},
                    {id:"009",desc:"一日游",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"},
                ]
   } 
  },
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
