import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import { SOME_MUTATION, GET_USERINFO } from '../constant/ActionTypes'

const state = {
	userInfo: null, //用户信息
	userDetail:null,//用户详情
}

Vue.use(Vuex)

export default new Vuex.Store({
	state,
	getters,
	actions ,
	mutations: {
		[SOME_MUTATION](state, info) {
			state.userInfo = info;
		},
		//获取用户信息存入vuex
		[GET_USERINFO](state, info) {
			state.userDetail = info;
		},
	}
})