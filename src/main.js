import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router';
// import VueResource from 'vue-resource';
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// Vue.http.options.emulateJSON = true;
// Vue.use(VueAxios, axios)
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import store from './store'
import Welcome from './components/Welcome'
import ToDoItemGroup from './components/ToDoItemGroup'
import Home from './components/Home'
import User from './components/User'

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(iView);
Vue.config.productionTip = false;

const routes = [
    {
        path: "/",
        component: Welcome,
        name:"Welcome",
    },
    {
        path: "/Home",
        component: Home,
        children: [
            {
                path: "/ToDoItemGroup",
                component: ToDoItemGroup,
                name:"ToDoItemGroup"
            },
            {
                path: "/User",
                component: User,
                name:"User"

            }
        ]
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
