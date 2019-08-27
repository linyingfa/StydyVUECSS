<template>
  <div>
    <!-- todo   绑定 HTML Class  -->
    <!--todo  v-bind:class 对象语法 -->
    <div class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }"></div>
    <div v-bind:class="classObject"></div>
    <div v-bind:class="classObject2"></div>
    <div v-bind:class="[activeClass, errorClass]"></div>
    <div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>

    <!--todo  绑定内联样式  -->
    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
    <!--   直接绑定到一个样式对象通常更好，这会让模板更清晰： -->
    <div v-bind:style="styleObject"></div>

    <!-- todo :style的使用      :style=  是 v-bind:class= 他的简写   -->
    <div :class="myClass">红色文本</div>
    <div v-bind:class="myClass">
      <!--   一 ,最通用的写法    -->
      <h1 :style="{fontFamily:bold,color:'#26da22',backgroundColor:'#34d3da'}">530</h1>
      <!--   二， 三元表达式   -->
      <h1 :style="{color:(myClass.big?'#da1f2b':'#212fff')}">红色文本2</h1>
      <!--      一和二 可以联合起来写 如下-->
      <!-- <p :style="{fontFamily:arr.conFontFamily,fontSize:(arr.conFontSize!=0.36?arr.conFontSize+arr.conFontUnit:''),
      color:arr.conFontColor,backgroundColor:arr.conBgColor}">{{con.title}}</p>-->
      <!-- todo  这两种方式有个弊端，当需要把很多个样式添加到div上时，div看起来很臃肿-->
      <h1 v-if="myClass.big">Vue is awesome!</h1>
      <h1 v-else>Oh no 😢</h1>
    </div>

    <button @click="btnClick">改变class吧</button>
  </div>


</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        isActive: true,
        hasError: true,
        error: null,
        activeClass: 'active',
        errorClass: 'text-danger',
        classObject: {
          active: true,
          'text-danger': false
        },
        activeColor: 'red',
        fontSize: 30,
        styleObject: {
          color: 'red',
          fontSize: '13px'
        },
        myClass: {
          big: true,
        }
      }
    },
    computed: {
      classObject2: function () {
        return {
          active: this.isActive && !this.error,
          'text-danger': this.error && this.error.type === 'fatal'
        }
      }
    },
    methods: {
      btnClick: function () {
        this.myClass.big = !this.myClass.big;
      },
    }
  }
</script>

<style scoped>

  big {
    font-weight: bolder;
    font-size: 64px;
  }

  button {
    width: 120px;
    height: 45px;
    font-size: 12px;
    color: #2c3e50;
  }
</style>
