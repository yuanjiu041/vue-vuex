import Vue from 'vue'
import Vuex from 'vuex'
import common from './common'

Vue.use(Vuex)

export default function createStore () {
  return new Vuex.Store ({
            modules: {
              common
            }
          })
}
