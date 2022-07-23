<template>
   <div>
      <NavHeader />
      <div class="nav-breadcrumb-wrap">
        <div class="container">
          <nav class="nav-breadcrumb">
            <a href="/">Home</a>
            <span>Goods</span>
          </nav>
        </div>
      </div>
      <div class="accessory-result-page accessory-page">
        <div class="container">
          <div class="filter-nav">
            <span class="sortby">Sort by:</span>
            <a href="javascript:void(0)" class="default cur">Default</a>
            <a href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
            <a href="javascript:void(0)" class="filterby stopPop">Filter by</a>
          </div>
          <div class="accessory-result">
            <!-- filter -->
            <div class="filter stopPop" id="filter">
              <dl class="filter-price">
                <dt>Price:</dt>
                <dd><a href="javascript:void(0)">All</a></dd>
                <dd>
                  <a href="javascript:void(0)">0 - 100</a>
                </dd>
                <dd>
                  <a href="javascript:void(0)">100 - 500</a>
                </dd>
                <dd>
                  <a href="javascript:void(0)">500 - 1000</a>
                </dd>
                <dd>
                  <a href="javascript:void(0)">1000 - 2000</a>
                </dd>
              </dl>
            </div>

            <!-- search result accessories list -->
            <div class="accessory-list-wrap">
              <div class="accessory-list col-4">
                <ul>
                  <li v-for="product in goodsList" :key="product.productId">
                    <div class="pic">
                      <a href="#"><img :src="product.productImage" alt=""></a>
                    </div>
                    <div class="main">
                      <div class="name">{{product.productName}}</div>
                      <div class="price">{{product.productPrice}}</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavFooter />
    </div>
</template>
<script>
import './../assets/css/base.css'
import './../assets/css/product.css'
import './../assets/css/login.css'
import './../assets/css/checkout.css'
import NavHeader from '@/components/NavHeader'
import NavFooter from '@/components/NavFooter'
import {getGoodsList} from '../../api/goods'
import {baseURL} from '../../api/index'
export default {
  name:"GoodsList",
  components: {
    NavHeader,
    NavFooter
  },
  name:"GoodsList",
  mounted() {
    this.getGoodsListData()
  },
  methods: {
    getGoodsListData() {
      getGoodsList().then(res => {
        const resData = res.data;
        const goods = resData.result;
        this.goodsList =  goods.map(item => {
          return {
            ...item,
            productImage: baseURL+ item.productImage
          }
        })
        // console.log(res)
        // // 更新data数据
      })
    }
  },
  data() {
    return {
      goodsList:[]
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