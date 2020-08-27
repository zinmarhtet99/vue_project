import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Homework'
import Testing from '../components/Testing'

Vue.use(VueRouter)


const routes = [
    { path: '/', component: Home },
    { path: '/testing', component: Testing }
]

const router = new VueRouter({
    routes // short for `routes: routes`
})

export default router;