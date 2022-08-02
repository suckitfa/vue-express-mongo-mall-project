import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from '@/views/GoodsList'
import Title from '@/views/Title'
import Image from '@/views/Image'
import Cart from '@/views/Cart'
Vue.use(Router)
const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default:GoodsList,
        title:Title,
        img:Image,
      }
    },{
      path:"/cart",
      name:"cart",
      component:Cart
     }
  ]
})
router.beforeEach((to,from,next) => {
  console.log(to.fullPath)
  next()
})
export default router;
