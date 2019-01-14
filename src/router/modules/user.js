/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const userRouter = {
    path: '/user',
    component: Layout,
    redirect: '/user/userList',
    name: 'User',
    meta: {
        title: 'User',
        icon: 'table'
    },
    children: [{
        path: 'userList',
        component: () =>
            import ('@/views/user/user'),
        name: 'userList',
        meta: { title: 'userList' }
    }]
}
export default userRouter