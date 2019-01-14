import { getUserList } from '@/api/user';
const state = {
    list: []
};
const mutations = {
    updataList(state, list) {
        state.list = list;
    }
};
const actions = {
    getUserList({ commit }, query) {
        return new Promise((resolve, reject) => {
            getUserList(query).then(res => {
                if (res.data.code == 1) {
                    commit('updataList', res.data.data.list)
                    resolve();
                } else {
                    reject(res.data.msg);
                }
            }).catch(err => {
                reject(err)
            })
        })
    }
};
export default {
    namespaced: true,
    state,
    mutations,
    actions
}