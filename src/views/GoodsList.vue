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
                <li v-for="product in goodsList" :key="product.id">
                  <div class="pic">
                    <a href="#"><img v-lazy="product.productImage" alt="" /></a>
                  </div>
                  <div class="main">
                    <div class="name">{{ product.productName }}</div>
                    <div class="price">{{ product.salePrice }}</div>
                    <div class="btn-area">
                      <a  class="btn btn--m" @click="addCart">加入购物车</a>
                    </div>
                  </div>
                </li>
              </ul>
              <!-- 引入插件 -->
              <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10" class="loading">
                <img src="../assets/loading-spinning-bubbles.svg" v-show="loading">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 遮罩层 -->
    <div 
      class="md-overlay" 
      v-show="overLayFlag" 
      @click="closeFilterPop"
    ></div>

    <!-- 加入购物车模态框组件 -->
    <Modal :mdShow="mdShow" @closeModalEvent="closeModal">
      <p slot="message">请先登入，否则无法加入到购物车中</p>
        <div slot="btn-group">
          <a href="#" class="btn btn--m"  @click="closeModal">关闭</a>
        </div>
    </Modal>

    <!--  -->
    <Modal :mdShow="mdShowCart" @closeModalEvent="closeCartModal">
      <p slot="message">
        <svg class="icon-status-ok">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-status-ok"></use>
        </svg>
        <span>加入购物车成功！</span>
      </p>
        <div slot="btn-group">
          <a href="#" class="btn btn--m"  @click="closeCartModal">继续购物</a>
          <router-link class="btn btn--m" to="/cart">查看购物车</router-link>
        </div>
    </Modal>
    <!-- 导航底部 -->
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
import Modal from '../components/Modal.vue'
import { getGoodsList,addToCart } from '../../api/goods'
import { baseURL } from '../../api'
export default {
  name:"GoodsList",
  components: {
    NavHeader,
    NavFooter,
    NavBread,
    Modal
  },
  data(){
    return {
      mdShowCart:false,
      mdShow:false,
      // 控制加载动画
      loading:false,
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
    this.getGoodsListData(true)
  },
  methods: {
    closeCartModal() {
      this.mdShowCart = false;
    },
    showCartModal() {
      this.mdShowCart = true;
    },
    closeModal() {
      this.mdShow = false;
    },
    showModal() {
      this.mdShow = true;
    },
    addCart(productId) {
      // this.showModal() 
      this.showCartModal()
    },
    getGoodsListData(flag) {
      this.loading = true;
      let param = {
        page:this.page,
        pageSize:this.pageSize,
        sort:this.sortFlag === true ? 1 : -1,
        priceLevel:this.priceChecked
      }
      getGoodsList(param).then(res => {
        const resData = res.data;
        let goods = resData.result.list;
        // 处理图片的路径
        goods =  goods.map(item => {
          return {
            ...item,
            id:item._id,
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
          this.busy = false;
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
          this.page ++;
          this.getGoodsListData(true);
          this.busy = false;
      },500)
    }
  }
}
</script>
<style scoped>
 .loading {
  display: flex;
  margin:auto;
  justify-content: center;
 }
</style>