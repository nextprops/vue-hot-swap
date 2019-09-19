import Vue from "vue";
import router from "./router";
import store from "./store/";
import App from "./App.vue";
import Router from 'vue-router'


if (process.env.NODE_ENV == "development") {
  console.log("development mode");
  Vue.config.debug = true;
}

// 解决route.push Uncaught (in promise)
// https://blog.csdn.net/weixin_43202608/article/details/98884620
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
