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
    return request({
        url: "/users/action",
        method: 'delete',
        data
    })
}
//给用户分配角色
export function modifyRoler(data) {
    return request({
        url: "/users/action",
        method: 'put',
        data
    })
}