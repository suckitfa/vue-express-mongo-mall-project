<template>
   <div>
     <div>这是商品页面</div>
     <p>商品序号：{{$route.params.goodsId}}</p>
     <p>管理员名字：{{$route.params.name}}</p>
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