import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from '@/views/GoodsList'
import Cart from '@/views/Cart'
import Address from '@/views/Address'
Vue.use(Router)
const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default:GoodsList,
      }
    },{
      path:"/cart",
      name:"cart",
      component:Cart
     },{
      path:"/address",
      name:"address",
      component:Address
     }
  ]
})
router.beforeEach((to,from,next) => {
  console.log(to.fullPath)
  next()
})
export default router;
