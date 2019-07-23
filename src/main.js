import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router';
// import VueResource from 'vue-resource';
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// Vue.http.options.emulateJSON = true;
// Vue.use(VueAxios, axios)
import store from './store'
import Welcome from './components/Welcome'
import ToDoItemGroup from './components/ToDoItemGroup'
import Home from './components/Home'
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.config.productionTip = false;

const routes=[
  {
    path:"/",
    component:Welcome
  },{
  path:"/ToDoItemGroup",
    component:ToDoItemGroup
  },
  {
    path:"/Home",
    component:Home
  }
];
const router = new VueRouter({routes})


new Vue({
  store,
  router,
  // axios,
  // VueAxios,
  render: h => h(App),
}).$mount('#app')
