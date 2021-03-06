const actions = {
    async onAuthStateChangedAction(state, { authUser, claims }) {
      if (!authUser) { // * if login failed
        // * remove state
        state.commit('SET_USER', null)
  
        // * redirect 
        this.$router.push({
          path: '/auth/login',
        })
      } else { // * if login succes
        // * extract data from authUser
        const { uid, email } = authUser
        state.commit('SET_USER', {
          uid,
          email,
        })
      }
    },
  }
  
  const mutations = {
    SET_USER(state, user) {
      state.user = user
    },
  }
  
  const state = () => ({
    user: null,
  })
  
  const getters = {
    getUser(state) {
      return state.user
    },
  }
  
  export default {
    state,
    actions,
    mutations,
    getters,
  }
  