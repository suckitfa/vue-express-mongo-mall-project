import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodsList from '@/views/GoodsList'
import Title from '@/views/Title'
import Image from '@/views/Image'
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path:"/goods/:goodsId/admin/:name",
      name:"GoodsList",
      component:GoodsList,
      // 嵌套路由
      children: [{
        // 这里不要加 / 这样会变成一级路由
        path:"title",
        name:"title",
        component:Title
      },{
        path:"image",
        name:"image",
        component:Image
      }]
    },
  ]
})
