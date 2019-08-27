<template>
  <div>
    <!-- 先来说一下：
    :class 是可以与 一般用class 并存的
    动态添加的类名是基于数据的，当对应的数据为 true 时会显示，否则没有
     -->
    <span id="v1" class="active3" :class="{ 'active1':style1 }">对象绑定style1</span>
    <span id="v2" class="active3" :class="{ 'active1':style1 , active2:style2  }">对象绑定style2</span>
    <span id="v3" class="active3" :class="stl">通过计算属性绑定style</span>
    <span id="v4" :class="[s1 , s2 ]">数组语法同时添加多个class</span>
    <span id="v5" :class="[s3 ? s1 : s2 ]">数组语法同时添加多个class</span>
    <span id="v6" :style="styles">使用内联：style设置样式</span>
  </div>
</template>

<script>
  export default {
    name: "CssVue",
    data() {
      return {
        style1: true,
        style2: false,
        s1: "active1",
        s2: "active2",
        styles: {
          color: '#f00',
          fontSize: 17 + "px"
        }
      }
    },
    computed: {
      stl: function () {
        return {
          computedStyle: this.style1 && this.style2
        }
      }
    }
  }
</script>

<style scoped>

  div {
    /*width: 200px;*/
    height: 30px;
    margin: 100px;
  }

  /*
   .xxxx 是原css的格式
   如果:class 是可以与 一般用class 并存的 可以通过上面的方式来实现
  */
  .active1 {
    padding: 10px;
    background: #aff;
    color: #faa;
  }

  .active2 {
    border: 2px solid #faf;
  }

  .active3 {
    border: 2px solid #2a39ff;
  }


  .computedStyle {
    color: #f00;
  }

</style>
