import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = {
  pageTitle: 'page1',
  info: {
    title: '更多',
    value: null
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
