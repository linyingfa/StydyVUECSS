<template>
  <div>

    <!--
    建议尽可能在使用 v-for 时提供 key，除非遍历输出的 DOM 内容非常简单，或者是刻意依赖默认行为以获取性能上的提升。

    因为它是 Vue 识别节点的一个通用机制，key 并不与 v-for 特别关联，key 还具有其他用途，我们将在后面的指南中看到其他用途。
    -->
    <ul id="example-1">
      <li v-for="item in items" v-bind:key="item.id">
        {{ item.message }}
      </li>
    </ul>

    <!--
     在 v-for 块中，我们可以访问所有父作用域的属性。v-for 还支持一个可选的第二个参数，即当前项的索引。
     v-bind 可以用 ：代替
     -->
    <ul id="example-2">
      <li v-for="(item, index) in items " v-bind:key="item.id">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
      </li>
    </ul>


    <!-- 你也可以用 of 替代 in 作为分隔符，因为它更接近 JavaScript 迭代器的语法： -->
    <ul id="example-3">
      <li v-for="item of items" v-bind:key="item.id">
        {{ item.message }}
      </li>
    </ul>

    <!--
     在 v-for 里使用对象
     你也可以用 v-for 来遍历一个对象的属性。
      -->
    <ul id="v-for-object">
      <li v-for="value in object" v-bind:key="value.id">
        {{ value }}
      </li>
    </ul>

    <!--
      你也可以提供第二个的参数为 property 名称 (变量名称)：
      key value
    -->
    <div v-for="(value, key) in object" v-bind:key="value.id">
      {{ key }}: {{ value }}
    </div>


    <!--
      还可以用第三个参数作为索引：
     -->
    <div v-for="(value, name, index) in object" :key="value.id">
      {{ index }}. {{ name }}: {{ value }}
    </div>

    <!--
      维护状态
      当 Vue 正在更新使用 v-for 渲染的元素列表时，它默认使用“就地更新”的策略。
      如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序，而是就地更新每个元素，
      并且确保它们在每个索引位置正确渲染。

      建议尽可能在使用 v-for 时提供 key attribute，除非遍历输出的 DOM 内容非常简单，或者是刻意依赖默认行为以获取性能上的提升。

      因为它是 Vue 识别节点的一个通用机制，key 并不仅与 v-for 特别关联。后面我们将在指南中看到，它还具有其它用途。

      不要使用对象或数组之类的非基本类型值作为 v-for 的 key。请用字符串或数值类型的值。
      -->
    <div v-for="item in items" v-bind:key="item.id">
      {{ item.message }}
    </div>


  </div>

</template>

<script>
  export default {
    name: "ListVue",
    data() {
      return {
        parentMessage: 'Parent',
        items: [
          {message: 'Foo'},
          {message: 'Bar'}
        ],
        object: {
          title: 'How to do lists in Vue',
          author: 'Jane Doe',
          publishedAt: '2016-04-10'
        }
      }
    }
  }
</script>

<style scoped>

  ul {
    flex: content;
    width: 300px;
  }

  li {
    text-align: center;
  }


</style>
