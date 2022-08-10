import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/customIndex'
        },
        {
            path: '/myHome',
            name: 'myHome',
            component: () => import('@/views/myHome'),
        },
        {
            path: '/customIndex',
            name: 'customIndex',
            component: () => import('@/views/customIndex'),
        }
    ]
})
export default router
