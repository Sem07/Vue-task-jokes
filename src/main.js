import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import {routes} from "./routes";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const router = new VueRouter({
  routes, mode: 'history'
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
