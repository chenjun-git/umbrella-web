import Cookies from 'js-cookie'
import { asyncRouterMap, constantRouterMap } from 'src/router';
import { getUsersTotal, getUsersInfo } from '../../api/user';

const user = {
  state: {
  },
  mutations: {
    SET_USER_TOTAL: (state, total) => {
      state.total = total
    },
  	SET_AUTH_TYPE: (state, type) => {
      state.auth_type = type;
    },
    SET_CODE: (state, code) => {
      state.code = code;
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_UID: (state, uid) => {
      state.uid = uid;
    },
    SET_EMAIL: (state, email) => {
      state.email = email;
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction;
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting;
    },
    SET_STATUS: (state, status) => {
      state.status = status;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    LOGIN_SUCCESS: () => {
      console.log('login success')
    },
    LOGOUT_USER: state => {
      state.user = '';
    }
  },
  actions: {
  	LoginByEmail({ commit }, userInfo) {
  	},
    GetUsersTotal({ commit }) {
      return new Promise((resolve, reject) => {
        getUsersTotal().then(res => {
          resolve(1000)
        }).catch(err => {
          reject("获取用户总数失败:" + err)
        })
      })
    },
  	GetUsersInfo({ commit, state }, { pageinfo }) {
      return new Promise((resolve, reject) => {
        reject("获取用户列表信息失败")
        // getUsersInfo(pageinfo.offset, pageinfo.total, pageinfo.pagecount).then(response => {

        //   resolve(response)
        // }).catch(error => {
        //   reject(error)
        // })
      })
  	},
  	LoginByThirdparty({ commit, state }, code) {
  	},
  	LogOut({ commit, state }) {
  	},
  	FedLogOut({ commit }) {
  	},
  	ChangeRole({ commit }, role) {
  	}
  }
}

export default user