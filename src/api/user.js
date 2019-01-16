import request from '@/utils/request'
// 获取数据列表
export function getUserList(params) {
    return request({
        url: '/users/list',
        method: 'get',
        params
    })
}
// 更新用户信息
export function updateUserInfo(data) {
    return request({
        url: "/users/update",
        method: 'post',
        data
    })
}
//删除用户
export function deleteUser(data) {
    console.log(data);
    return request({
        url: "/users/action",
        method: 'delete',
        data
    })
}
//