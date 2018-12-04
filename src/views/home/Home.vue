<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control class="tab-control" @tabClick="tabClick" v-show="showTabControl" ref="topTab">
    </tab-control>
    <scroll :probe-type="3"
            class="content"
            ref="scroll"
            :pull-up-load="true"
            :data="[showGoodsList]"
            @scroll="contentScroll"
            @pullingUp="loadMore">
      <home-swiper :banners="banners" ref="hSwiper"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control class="tab-control" @tabClick="tabClick" ref="contentTop">
      </tab-control>
      <goods-list :goods="showGoodsList">
      </goods-list>
    </scroll>
    <back-top v-show="showBackTop" @click.native="backTop">

    </back-top>

  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import featureView from './childComps/featureView'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from './childComps/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backtop/BackTop'

  import {getMultiData, getProductData} from "../../network/home";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      featureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    computed: {
      showGoodsList() {
        return this.goods[this.currentType].list
      }
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 1, list: []},
          'new': {page: 1, list: []},
          'sell': {page: 1, list: []},
        },
        currentType: 'pop',
        showBackTop: false,
        showTabControl: false,
        tabOffsetTop: 0
      }
    },
    methods: {
      //网络请求
      _getMultiData() {
        getMultiData().then(res => {

          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      _getProductData(type) {
        //获取页码
        const page = this.goods[type].page
        getProductData(type, page).then(res => {
          const newList = res.data.list
          this.goods[type].list.push(...newList)
          this.goods[type].page += 1

          //完成加载更多数据
          this.$refs.scroll.finishPullUp()

        })
      },

      //事件监听
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;
        }
        this.$refs.contentTop.currentIndex = index;
        this.$refs.topTab.currentIndex = index

      },
      loadMore() {
        this._getProductData(this.currentType)
      },
      contentScroll(position) {
        this.showBackTop = position.y <= -1000;
        this.showTabControl = position.y <= -this.tabOffsetTop
      },
      backTop() {
        this.$refs.scroll.scrollTo(0,0,1000)
      }

    },
    created() {
      console.log('----');
      //请求轮播数据
      this._getMultiData()

      //请求商品数据
      this._getProductData('pop')
      this._getProductData('new')
      this._getProductData('sell')

    },
    updated() {
      this.tabOffsetTop = this.$refs.contentTop.$el.offsetTop
    },
    activated() {
      this.$refs.hSwiper && this.$refs.hSwiper.startTimer && this.$refs.hSwiper.startTimer()
    },
    deactivated() {
      this.$refs.hSwiper && this.$refs.hSwiper.stopTimer && this.$refs.hSwiper.stopTimer()

    },
  }
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    position: relative;
    z-index: 9;
  }

  #home {
    height: 100vh;
    position: relative;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .tab-control {
    position: relative;
    z-index: 10;
  }
</style>