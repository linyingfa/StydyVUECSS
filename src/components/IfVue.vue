<template>
  <div>
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>

    <div v-if="awesome">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </div>

    <!-- v-else 元素必须紧跟在带 v-if 或者 v-else-if 的元素的后面，否则它将不会被识别。   -->
    <div v-if="Math.random() > 0.5">
      Now you see me
    </div>
    <div v-else>
      Now you don't
    </div>
    <!--
    v-else-if，顾名思义，充当 v-if 的“else-if 块”，可以连续使用：
    类似于 v-else，v-else-if 也必须紧跟在带 v-if 或者 v-else-if 的元素之后。
    -->
    <div v-if="type === 'A'">
      A
    </div>
    <div v-else-if="type === 'B'">
      B
    </div>
    <div v-else-if="type === 'C'">
      C
    </div>
    <div v-else>
      Not A/B/C
    </div>

    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username">
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address">
    </template>

    <!--   <template v-if="loginType === 'username'">
         <label>Username</label>
         &lt;!&ndash;
          loginType 将不会清除用户已经输入的内容。因为两个模板使用了相同的元素，
          <input> 不会被替换掉——仅仅是替换了它的 placeholder。
         注意，<label> 元素仍然会被高效地复用，因为它们没有添加 key 属性.&ndash;&gt;
         <input placeholder="Enter your username" key="username-input">
       </template>
       <template v-else>
         <label>Email</label>
         <input placeholder="Enter your email address" key="email-input">
       </template>-->

    <!--
    另一个用于根据条件展示元素的选项是 v-show 指令。用法大致一样：
    不同的是带有 v-show 的元素始终会被渲染并保留在 DOM 中。
    v-show 只是简单地切换元素的 CSS 属性 display。
    注意，v-show 不支持 <template> 元素，也不支持 v-else。
    v-if vs v-show
  v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
  v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
  相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
  一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，
  则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。
    -->
    <h1 v-show="ok">Hello!</h1>

  </div>

</template>

<script>
  export default {
    name: "IfVue",
    data() {
      return {
        awesome: false,
        type: 'A',
        loginType: 'username',
        ok: true
      }
    }
  }

</script>

<style scoped>

</style>
