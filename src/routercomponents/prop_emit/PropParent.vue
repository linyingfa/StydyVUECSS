<template>
  <div class="container">
<!--    <h1>父组件</h1>-->
    <PropChild :title="title"></PropChild>
  </div>
</template>

<!--

一、 Prop / $emit
1、Prop 是你可以在组件上注册的一些自定义特性。当一个值传递给一个 Prop 特性的时候，它就变成了那个组件实例的一个属性。
父组件向子组件传值，通过绑定属性来向子组件传入数据，子组件通过 Props 属性获取对应数据
-->
<script>
  import PropChild from "./PropChild.vue"

  export default {
    name: "A",
    data() {
      return {
        title: "我是父组件给的"
      }
    },
    components: {
      PropChild
    },
  }
</script>

<style scoped>

</style>
