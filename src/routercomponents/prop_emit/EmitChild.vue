<template>
  <div class="center">
    <button @click="childTitle">我给父组件赋值</button>
  </div>
</template>

<script>
  export default {
    name: "child",
    data() {
      return {key: 1}
    },
    methods: {
      childTitle() {
        this.$emit('changeTitle', `我给父组件的第${this.key}次`);
        this.key++;
      }
    }
  }
</script>

<style scoped>

</style>
