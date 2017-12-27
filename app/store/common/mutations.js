import { CHANGE_TITLE, CHANGE_INFO_DATA } from '../mutation-types'

export default {
  [CHANGE_TITLE](state, action) {
    state.pageTitle = action.value
  },
  [CHANGE_INFO_DATA](state, action) {
    state.info.value = action.value
  }
}