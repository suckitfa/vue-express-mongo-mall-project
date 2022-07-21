<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- 动态的绑定num，让num跟着变化 -->
    <Counter :num="num" @increment="increment" @decrement="decrement"/>
  </div>
</template>

<script>
import CounterVue from './Counter.vue'
export default {
  components: {
    Counter:CounterVue
  },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      num:10
    }
  },
  methods: {
    increment() {
      this.num ++;
    },
    decrement() {
      this.num --;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
