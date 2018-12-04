<template>
  <div>
    <swiper v-if="topImages.length">
      <swiper-item v-for="(item,index) in topImages" :key="index" class="item">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import Swiper from 'components/common/swiper/Swiper';
  import SwiperItem from 'components/common/swiper/SwiperItem';

  export default {
    name: "DetailSwiper",
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      topImages:{
        typeof: Array,
        required:true
      }
    }
  }
</script>

<style scoped>
  .item {
    text-align: center;
    height: 300px;
  }

</style>