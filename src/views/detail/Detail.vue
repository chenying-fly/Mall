<template>
  <div id="detail">
    <!--详情标题栏-->
    <nav-bar class="nav-bar">
      <img src="~assets/img/common/back.svg" alt="" slot="left" @click="backClick">
      <div slot="center" class="title">
        <span v-for="(item,index) in titleInfos"
              :key="index"
              @click="itemClick(index)" :class="{'active':currentIndex===index}">
          {{item}}
        </span>
      </div>
    </nav-bar>

    <scroll class="content">
      <div>
        <!--轮播图-->
        <detail-swiper :top-images="topImages">
        </detail-swiper>

        <!--商品基本信息-->
        <detail-base-info :goods="goods"></detail-base-info>
      </div>

    </scroll>

    <h2>详情</h2>

    <!--底部-->
    <detail-bottom-bar></detail-bottom-bar>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'

  import NavBar from 'components/common/navbar/NavBar';
  import DetailBottomBar from './childComps/DetailBottomBar';
  import DetailSwiper from './childComps/DetailSwiper';
  import DetailBaseInfo from'./childComps/DetailBaseInfo'
  import {getDetail,Goods} from "../../network/detail";

  export default {
    name: "Detail",
    components:{
      NavBar,
      DetailBottomBar,
      Scroll,
      DetailSwiper,
      DetailBaseInfo
    },
    data() {
      return {
        titleInfos:['商品','参数','评论','推荐'],
        currentIndex:0,
        iid:'',
        topImages:[],
        goods:{}
      }
    },
    created(){
      this._getDetailData()
    },
    methods:{
      backClick() {
        this.$router.replace('/home')
      },
      itemClick(index) {

        this.currentIndex = index;
      },
      //处理网络请求
      _getDetailData() {
        //获取iid
        const iid = this.$route.query.iid;
        this.iid = iid;
        //请求数据
        getDetail(iid).then(res => {

          const data = res.result;
          console.log(data);
          //获取顶部轮播图信息
          this.topImages = data.itemInfo.topImages;
          //获取商品信息
          this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

        })

      }
    }
  }
</script>

<style scoped>

  #detail {
    height: 100vh;
    position: relative;
    z-index: 1;
    background-color: #fff;
  }
 .nav-bar {
   background-color: #e8e8e8;
 }
 .nav-bar img {
   margin-top: 10px;
 }
  .title {
    display: flex;
  }
  .title span {
    flex: 1;
  }

  .active {
    color: var(--color-high-text);
  }

</style>