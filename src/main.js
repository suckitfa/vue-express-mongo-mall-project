// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'
import {currency} from '../utils/currency'
import Vuex from 'vuex'

Vue.use(Vuex)
// 定义Vuex的相关内容
const store = new Vuex.Store({
  state: {
    nickName:"",
    cartCount:0
  },
  mutations: {
    updateUserInfo(state,nickName) {
      state.nickName = nickName;
    },
    updateCartCount(state,cartCount) {
      state.cartCount += cartCount;
    }
  }
});
Vue.filter("currency",currency)
Vue.config.productionTip = false
Vue.use(VueLazyLoad,{
  loading:'/static/loadi g-svg/loading-bars.svg'
})
Vue.use(infiniteScroll)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
