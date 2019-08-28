import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import CssVue from '../components/CssVue'
import IfVue from '../components/IfVue'
import ListVue from '../components/ListVue'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '530',
      component: ListVue
    }
  ]
})
