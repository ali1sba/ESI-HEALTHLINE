import Vuex from 'vuex'

export default new Vuex.Store({
    strict: true,
    state: {
      token: null,
      user: null,
      role: null,
      isUserLoggedIn: false
    },
    mutations: {
      setToken (state, token) {
        state.token = token
        window.localStorage.setItem('token', JSON.stringify(token))
        if (token) {
          state.isUserLoggedIn = true
          window.localStorage.setItem('isUserLoggedIn', true)
        } else {
          state.isUserLoggedIn = false
          window.localStorage.setItem('isUserLoggedIn', false)
        }
      },
      setUser (state, user) {
        state.user = user
        window.localStorage.setItem('user', JSON.stringify(user))
      },
      setRole (state, role) {
        state.role = role
        window.localStorage.setItem('role', JSON.stringify(role))
      }
    },
    actions: {
      setToken ({commit}, token) {
        commit('setToken', token)
      },
      setUser ({commit}, user) {
        commit('setUser', user)
      },
      setRole ({commit}, role) {
        commit('setRole', role)
      }
    }
})