<template>
  <div class="center">
    1.我的名字是：{{name}}
    <button @click="send">我给3组件赋值</button>
  </div>
</template>

<script>
  export default {
    name: "Child1",
    data() {
      return {
        name: "510哇"
      };
    },
    props: {
      Event
    },
    methods: {
      send() {
        this.Event.$emit("message-a", this.name);
      }
    }
  }
</script>

<style scoped>

</style>
