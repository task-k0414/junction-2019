const state = () => ({
  user: {
    token: '',
    name: 'task-k0414',
    photoURL: '',
    uid: ''
  }
})

const mutations = {
  addUser(state, user) {
    state.user = user
  }
}

const actions = {
  addAuthenticatedUser(context, user) {
    sessionStorage.token = user.token
    context.commit('addUser', user)
  }
}

export default {
  state,
  mutations,
  actions
}
