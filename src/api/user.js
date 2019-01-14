import request from '@/utils/request'

export function getUserList(params) {
    return request({
        url: '/users/list', // 假地址 自行替换
        method: 'get',
        params
    })
}