<template>
   <div>
     <div>这是商品页面</div>
     <p>商品序号：{{$route.params.goodsId}}</p>
     <p>管理员名字：{{$route.params.name}}</p>
     <router-link to="/goods/title">显示商品的标题</router-link>
     <router-link to="/goods/img">显示商品的图片</router-link>
     <router-view></router-view>
   </div>
</template>
<script>
export default {
    name:"GoodsList",
    mounted() {
        console.log(this.$route.params)
    }
}
</script>