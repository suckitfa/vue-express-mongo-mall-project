<template>
   <div>
     <div>这是商品页面</div>
     <p>商品序号：{{$route.params.goodsId}}</p>
     <p>管理员名字：{{$route.params.name}}</p>
     <router-link to="/goods/title">显示商品的标题</router-link>
     <router-link to="/goods/img">显示商品的图片</router-link>
     <router-view></router-view>
     <router-link to="/cart">跳转到购物车</router-link>
     <div>
       <button @click="toCart">购物车</button>
     </div>
   </div>
</template>
<script>
export default {
    name:"GoodsList",
    mounted() {
        console.log(this.$route.params)
    },
    methods: {
      toCart() {
        // this.$router.push('/cart')
        // this.$router.push({path:"/cart?goodsId=123"})
        this.$router.go(-2)
      }
    }
}
</script>

<style>
  button {
    margin-top: 20px;
    padding:5px;
    color:white;
    background-color: green;
    border: none;
  }
  a {
    color:green;
    text-decoration:none;
  }
</style>