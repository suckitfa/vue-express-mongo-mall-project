<template>
  <div>
    <!-- start header -->
    <NavHeader />
    <!-- end header  -->

    <!-- start nav bread -->
    <NavBread />
    <!-- end nav bread -->

    <!-- price filter -->
    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">Sort by:</span>
          <a href="javascript:void(0)" class="default cur">Default</a>
          <a 
            @click="sortGoods"
            class="price"
            >Price
            <svg class="icon icon-arrow-short">
              <use xlink:href="#icon-arrow-short"></use></svg
          ></a>
          <!-- 小屏幕控制价格过滤表显示与隐藏 -->
          <a
            href="javascript:void(0)"
            class="filterby stopPop"
            @click="showFilterPop"
            >Filter by</a
          >
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div
            class="filter stopPop"
            :class="{ 'filterby-show': filterBy }"
            id="filter"
          >
            <dl class="filter-price">
              <dt>Price:</dt>
              <dd
                :class="{ cur: priceChecked === 'all' }"
                @click="priceChecked = 'all'"
              >
                <a
                  href="javascript:void(0)"
                  :class="{ cur: priceChecked === 'all' }"
                  >All
                </a>
              </dd>
              <dd
                v-for="(price, index) in priceFilter"
                :key="price.startPrice"
                :class="{ cur: priceChecked === index }"
                @click="setPriceFilter(index)"
              >
                <a
                  href="javascript:void(0)"
                  :class="{ cur: priceChecked == index }"
                >
                  {{ price.startPrice }} - {{ price.endPrice }}
                </a>
              </dd>
            </dl>
          </div>

          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li v-for="product in goodsList" :key="product.productId">
                  <div class="pic">
                    <a href="#"><img v-lazy="product.productImage" alt="" /></a>
                  </div>
                  <div class="main">
                    <div class="name">{{ product.productName }}</div>
                    <div class="price">{{ product.salePrice }}</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m">加入购物车</a>
                    </div>
                  </div>
                </li>
              </ul>
              <!-- 引入插件 -->

              <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
                加载中.....
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 遮罩层 -->
    <div class="md-overlay" v-show="overLayFlag" @click="closeFilterPop">

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
import NavBread from '../components/NavBread.vue'
import { getGoodsList } from '../../api/goods'
export default {
  name:"GoodsList",
  components: {
    NavHeader,
    NavFooter,
    NavBread
  },
  data(){
    return {
      priceChecked:'all',
      busy:true,
      overLayFlag:false,
      filterBy:false,
      sortFlag:false,
      page:1,
      pageSize:8,
      goodsList:[],
      priceFilter:[{
        startPrice:0,
        endPrice:100
      },
      {
        startPrice:100,
        endPrice:200
      },
      {
        startPrice:200,
        endPrice:500
      },{
        startPrice:500,
        endPrice:1000
      }
      ],
    }
  },
  mounted() {
    this.getGoodsListData()
  },
  methods: {
    getGoodsListData(flag) {
      let param = {
        page:this.page,
        pageSize:this.pageSize,
        sort:this.sortFlag === true ? 1 : -1
      }
      getGoodsList(param).then(res => {
        const resData = res.data;
        let goods = resData.result.list;
        // 处理图片的路径
        goods =  goods.map(item => {
          return {
            ...item,
            productImage: baseURL+ item.productImage
          }
        });

        if(flag) {
          this.goodsList = this.goodsList.concat(goods);
          if (goods.length === 0) {
            this.busy = true;
          } else {
            this.busy = false;
          }
        } else {
          this.goodsList = goods;
        }
      })
    },
    showFilterPop() {
      this.filterBy = true;
      this.overLayFlag = true;  
    },
    closeFilterPop() {
      this.overLayFlag = false;
      this.filterBy = false;
    },
    setPriceFilter(index) {
      this.priceChecked = index
      this.closeFilterPop()
    },
    sortGoods() {
      this.sortFlag = !this.sortFlag;
      this.page = 1;
      this.getGoodsListData()
    },
    loadMore() {
      this.busy = true;
      setTimeout(() => {
        for(let i = 0,j = 10; i < j; i++ ) {
          this.page ++;
          this.getGoodsListData(true)
        }
        this.busy = false;
      },500)
    }
  }
}
</script>
