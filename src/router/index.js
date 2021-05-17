import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: resolve => require(['@/components/Home'],resolve)
        },
        {
            path: '/table',
            name: 'table',
            component: resolve => require(['@/components/Table'],resolve)
        }
    ]
})