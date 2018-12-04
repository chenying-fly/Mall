<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles"
         class="tab-control-item"
         @click="itemClick(index)"
         :class="{active:currentIndex === index}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles:{
        type:Array,
        default() {
          return ['流行','新款','精选']
        }
      }
    },
    data(){
      return {
        currentIndex:0
      }
    },
    methods:{
      itemClick(index) {
        this.currentIndex = index
        this.$emit('tabClick',index)
      }
    }


  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    padding: 10px 0;
    font-size: 15px;
    background-color: #fff;
  }
  .tab-control-item {
    flex:1
  }
  span {
    padding: 5px;
  }
  .active {
    color: var(--color-high-text);
  }
  .active span {
    border-bottom: 2px solid var(--color-high-text);
  }
</style>