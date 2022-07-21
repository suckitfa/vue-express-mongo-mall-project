<template>
    <div>
        <h1>Number: {{num}}</h1>
        <h2>{{msg}}</h2>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </div>
</template>
<script>
export default {
    name:"Counter",
    props: ["num"],
    data() {
        return {
            msg: "hello world",
        }
    },
    methods: {
        decrement() {
            this.$emit("decrement")
        },
        increment() {
            this.$emit("increment")
        }
    }
}
</script>
<style scoped>
button {
    border:none;
    padding:10px;
    min-width: 80px;
    color:#fff;
    background: green;
    font-size: 20px;
}
</style>