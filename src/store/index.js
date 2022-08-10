import Vuex from 'vuex';
import Vue from 'vue'
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

export default store