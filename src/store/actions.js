import { GET_USERINFO } from '../constant/ActionTypes';

export default {
    async getUserInfo({
        commit,
        state
    }) {
        let res = { Name: '在做Vuex测试', Description: 'Vuex测试Emit' }
        commit(GET_USERINFO, res)
    }
}