import Vue from 'vue'
import App from './App.vue'
import Meta from 'vue-meta';
import VuePageTransition from 'vue-page-transition'

Vue.use(Meta);
Vue.use(VuePageTransition)

import { sync } from 'vuex-router-sync'

import './js/'
//import './css/main.css'
import './assets/scss/main.scss'

import router from './router'
import store from './store'

sync(store, router)

const app = new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')