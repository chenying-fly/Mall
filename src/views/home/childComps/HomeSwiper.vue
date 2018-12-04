<template>
  <swiper ref="swiper" v-if="banners.length">
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper'
  export default {
    name: "HomeSwiper",
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      banners:{
        type:Array,
        required:true
      }
    },
    methods:{
      startTimer() {
        this.$refs.swiper && this.$refs.swiper.startTimer();
      },
      stopTimer() {
        this.$refs.swiper && this.$refs.swiper.stopTimer()
      }
    }
  }
</script>

<style scoped>

</style>