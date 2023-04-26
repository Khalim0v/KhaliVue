import { setItem } from "../helpers/persisteneStorage"
import AuthService from "../service/auth"

const state = {
  isLoading: false,
  user: null,
  errors: null,
}

const mutations = { //mutatsalar bilan ishlayotganda mutatsalarni commit qilinadi
  registerStart(state) {
    state.isLoading = true
    state.user = null
    state.errors = null
  },
  registerSuccess(state, payload) {
    state.isLoading = false
    state.user = payload
  },
  registerFailure(state, payload) {
    state.isLoading = false
    state.errors = payload.errors
  },
  loginStart(state) {
    state.isLoading = true
    state.user = null
    state.errors = null
  },
  loginSuccess(state, payload) {
    state.isLoading = false
    state.user = payload
  },
  loginFailure(state, payload) {
    state.isLoading = false
    state.user = payload
  },
}

const actions = { //action lar bilan ishlayotganda action lar dispatch qilinadi
  register(context, user) { //context commit qilish uchun user esa parametrga data larni berish uchun
    return new Promise((resolve, reject) => {
      context.commit('registerStart')
      AuthService.register(user)
        .then(response => {
          context.commit('registerSuccess', response.data.user)
          setItem('token', response.data.user.token)//localStorage ga token kiritish
          resolve(response.data.user)
        })
        .catch(error => {
          context.commit('registerFailure', error.response.data)
          reject(error.response.data)
        })
    })
  },
  login(context, user) { // context bizga comment qilishimiz uchun kerak; user esa payload parametrga data larni berish uchun kerak
    return new Promise((resolve, reject) => {
      context.commit('loginStart')
      AuthService.login(user)
        .then(response => {
          context.commit('loginSuccess', response.data.user)
          setItem('token', response.data.user.token)
          resolve(response.data.user)
        })
        .catch(error => {
          context.commit('loginFailure', error.response.data)
          reject(error.response.data)
        })
    })
  }
}

export default {
  state,
  mutations,
  actions
}