<template>
  <div class="container">
    <h1>111111111111111</h1>
<!--    <Child1_EO :Event="Event"></Child1_EO>-->
<!--    <Child2_EO :Event="Event"></Child2_EO>-->
<!--    <Child3_EO :Event="Event"></Child3_EO>-->
  </div>
</template>

<!--

二、 $emit / ​$on
这个方法是通过创建了一个空的 vue 实例，当做 $emit 事件的处理中心（事件总线），
通过他来触发以及监听事件，方便的实现了任意组件间的通信，包含父子，兄弟，隔代组件。

-->
<script>
  import Child1_EO from "./Child1_EO.vue"
  import Child2_EO from "./Child2_EO.vue"
  import Child3_EO from "./Child3_EO.vue"
  import {v} from "vue";

  const Event = new Vue();

  export default {
    name: "A",
    data() {
      return {
        Event: Event
      }
    },
    components: {
      Child1_EO, Child2_EO, Child3_EO
    }
  }
</script>

<style scoped>

  div{
    width: 200px;
    background: #2a39ff;
  }

</style>
