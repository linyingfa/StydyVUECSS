import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import CssVue from '../components/CssVue'
import IfVue from '../components/IfVue'
import ListVue from '../components/ListVue'
import PropParent from '../routercomponents/prop_emit/PropParent'
import EmitParent from '../routercomponents/prop_emit/EmitParent'
import EmitParent_eo from '../routercomponents/emit_on/EmitParent_eo'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '530',
      component: EmitParent
    }
  ]
})
