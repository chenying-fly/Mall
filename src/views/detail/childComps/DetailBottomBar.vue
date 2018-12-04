<template>
  <div class="bottom-bar">
    <div class="bar-item">
      <div>
        <i class="icon icon-left"></i>
        <span>客服</span>
      </div>
      <div>
        <i class="icon icon-center"></i>
        <span>店铺</span>
      </div>
      <div>
        <i class="icon icon-right"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bar-item">
      <span class="cart">加入购物车</span>
      <span class="buy">购买</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar"
  }
</script>

<style scoped>
  .bottom-bar {
    height: 58px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f5f5f5;
    display: flex;
    text-align: center;
    font-size: 13px;
  }
  .bar-item {
    flex: 1;
    display: flex;
  }
  .bar-item>div {
    flex: 1;
  }
  .icon {
    height: 22px;
    width: 22px;
    display: block;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
    margin: 10px auto 3px;
  }
  .icon-left {
    background-position: 0 -54px;
  }
  .icon-center {
    background-position: 0 -98px;
  }
  .bar-item>span {
    flex: 1;
    line-height: 58px;
    font-size: 15px;
  }
  .cart {
    background-color: #ffe817;
    color: #333;
  }
  .buy {
    background-color: #f69;
    color: #fff;
  }
</style>