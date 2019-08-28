<template>
  <div class="center">我的名字是{{name}}，今年{{age}}岁</div>
</template>

<script>
  export default {
    name: "Child1",
    data() {
      return {
        name: '',
        age: ''
      };
    },
    props: {
      Event
    },
    mounted() {
      this.Event.$on('message-a', name => {
        this.name = name;
      });
      this.Event.$on('message-b', age => {
        this.age = age;
      });
    },
  }
</script>

<style scoped>

</style>
