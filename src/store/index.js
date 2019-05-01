import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import teams from './modules/teams'
import matches from './modules/matches'
import seasons from './modules/seasons'
import players from './modules/players'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    teams,
    matches,
    seasons,
    players
  },
  strict: debug
  // plugins: debug ? [createLogger()] : []
})
