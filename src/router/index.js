import Vue from 'vue'
import Router from 'vue-router'
import pagesDefault from '../pages/home/default.vue'
import table from '../pages/home/table.vue'
import practice from '../pages/home/practice.vue'
import child from '../pages/home/child.vue'
import transform from '../pages/nobug/transform.vue'
import center from '../pages/home/center.vue'
Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: pagesDefault
        },
        {
            path: '/table',
            name: 'table',
            component: table
        },
        {
            path: '/child',
            name: 'child',
            component: child
        },
        {
            path: '/practice',
            name: 'practice',
            component: practice
        },
        {
            path: '/transform',
            name: 'transform',
            component: transform
        },
        {
            path: '/center',
            name: 'center',
            component: center
        }
    ]
})