import { createStore } from 'vuex'

export default createStore({
  state: {
    userId: -1,
    userName: '',
    is_login: false,
  },
  getters: {
  },
  mutations: {
    update(state,user) {
      state.userId = user.userId;
      state.userName = user.userName;
      state.is_login = user.is_login;
    }
  },
  actions: {
    login(context,user) {
      context.commit('update',user);
    },
    logout(context) {
      context.commit('update',{
        userId: -1,
        userName:' ',
        is_login: false,
      });
    }
  },
  modules: {
  }
})
