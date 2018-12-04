import Vue from 'vue';
Vue.prototype.$setTitle = function (text) {
  document.title = text;
}
Vue.prototype.$getPX = function (design,designWidth = 750) {
  //获取窗口尺寸
  let width = document.documentElement.getBoundingClientRect().width;
  //计算缩放比例
  let scale = width / designWidth;
  //获取实时尺寸
  return design * scale;
}