import Vue from 'vue'
import Router from 'vue-router'
import Next from '../components/Next.vue';
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
            component: resolve => require(['@/components/Table'],resolve),
            children:[
                { path: '/table/next', component: Next},
            ]
        },
        // {
        //     path: '/table/next',
        //     name: 'next',
        //     component: resolve => require(['@/components/Next'],resolve)
        // },
        {
            path: '/practice',
            name: 'practice',
            component: resolve => require(['@/components/Practice'],resolve)
        }
    ]
})