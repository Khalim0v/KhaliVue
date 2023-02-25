const state = {
  isLoading: false,
}

const mutations = { //mutatsalar bilan ishlayotganda mutatsalarni commit qilinadi
  setLoading(state) {
    state.isLoading = true
  }
}

const actions = { //action lar bilan ishlayotganda action lar dispatch qilinadi
  register(context) {
    setTimeout(() => {
      context.commit('setLoading')
    }, 2000)
  }
}

export default {
  state,
  mutations,
  actions
}