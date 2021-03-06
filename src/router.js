import Vue from 'vue'
import VueRouter from 'vue-router'

const HomeComponent = () => import("./components/Home.vue");
const TestComponent = () => import("./components/Test.vue");
const FinalComponent = () => import("./components/Final.vue");
const TestFirstComponent = () => import("./components/TestFirst.vue");

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    hashbang: false,
    routes: [
        { path: '/test/:id', component: TestComponent },
        { path: '*',         component: HomeComponent },
        { path: '/testFirst',         component: TestFirstComponent },
        { path: '/final/:id',    component: FinalComponent }
    ]
})