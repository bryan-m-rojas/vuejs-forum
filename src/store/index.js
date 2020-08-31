import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import categories from '@/store/modules/categories'
import forums from '@/store/modules/forums'
import threads from '@/store/modules/threads'
import posts from '@/store/modules/posts'
import users from '@/store/modules/users'
import auth from '@/store/modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters,
  actions,
  mutations,

  modules: {
    categories,
    forums,
    threads,
    posts,
    users,
    auth
  }
})
