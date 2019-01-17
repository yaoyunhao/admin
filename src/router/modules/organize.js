/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const organizeRouter = {
    path: '/organize',
    component: Layout,
    redirect: '/organize/coding',
    name: 'Organize',
    meta: {
        title: 'Organize',
        icon: 'table'
    },
    children: [{
        path: 'coding',
        component: () =>
            import ('@/views/user/user'),
        name: 'Coding',
        meta: { title: 'Coding', roles: ['coding'] }
    }, {
        path: 'review',
        component: () =>
            import ('@/views/user/user'),
        name: 'Review',
        meta: { title: 'Review', roles: ['review'] }
    }, {
        path: 'commit',
        component: () =>
            import ('@/views/user/user'),
        name: 'Commit',
        meta: { title: 'Commit', roles: ['commit'] }
    }, {
        path: 'prd',
        component: () =>
            import ('@/views/user/user'),
        name: 'Prd',
        meta: { title: 'Prd', roles: ['prd'] }
    }, {
        path: 'demand',
        component: () =>
            import ('@/views/user/user'),
        name: 'Demand',
        meta: { title: 'Demand', roles: ['demand'] }
    }, {
        path: 'activity',
        component: () =>
            import ('@/views/user/user'),
        name: 'Activity',
        meta: { title: 'Activity', roles: ['activity'] }
    }, {
        path: 'ui',
        component: () =>
            import ('@/views/user/user'),
        name: 'UI',
        meta: { title: 'UI', roles: ['ui'] }
    }]
}
export default organizeRouter