<template>
  <div class="text">
<!--    <h1>子组件</h1>-->
    <h1>子组件：{{title}}</h1>
  </div>
</template>

<script>
  export default {
    name: "child",
    data() {
      return {}
    },
    props: {
      title: {
        type: String
      }
    },
  }
</script>

<style scoped>

</style>
