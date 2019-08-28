<template>
  <div class="container">
    <div class="title">我是父组件，{{title}}</div>
    <EmitChild @changeTitle="parentTitle"></EmitChild>
  </div>
</template>

<!--

一、 Prop / $emit
2、$emit 子组件向父组件传值（通过事件形式），子组件通过 $emit 事件向父组件发送消息，将自己的数据传递给父组件。

小总结：常用的数据传输方式，父子间传递。

-->
<script>
  import EmitChild from "./EmitChild.vue"

  export default {
    name: "A",
    data() {
      return {
        title: null
      }
    },
    components: {
      EmitChild
    },
    methods: {
      parentTitle(e) {
        this.title = e;
      }
    }
  }
</script>

<style scoped>

</style>
