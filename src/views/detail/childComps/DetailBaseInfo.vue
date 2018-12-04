<template>
  <div class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span>{{goods.price}}</span>
      <span>{{goods.oldPrice}}</span>
      <span>{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>


  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props:{
      goods:{
        typeof:Object,
      }
    }
  }
</script>

<style scoped>
  .base-info {
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }
</style>