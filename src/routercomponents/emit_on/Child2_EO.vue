<template>
  <div class="center">
    2.我的年龄是：{{age}}岁
    <button @click="send">我给3组件赋值</button>
  </div>
</template>

<script>
  export default {
    name: "Child1",
    data() {
      return {
        age: "3"
      };
    },
    props: {
      Event
    },
    methods: {
      send() {
        this.Event.$emit("message-b", this.age);
      }
    }
  }
</script>

<style scoped>

</style>
