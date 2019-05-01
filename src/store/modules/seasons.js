import seasonsapi from '../../api/season-mock-api'
import playerMockApi from '../../api/player-mock-api'
import matchesapi from '../../api/match-mock-api'

const state = {
  seasonData: [],
  matchesBySeasonData: []
}

const getters = {
  seasonsDataGetter: state => state.seasonData,
  matchesBySeasonDataGetter:state => state.matchesBySeasonData
}

const actions = {
  getMatchesBySeason ({ commit }, data) {
    matchesapi.getMatchesBySeason(data => {
      commit('matchesBySeasonRecieved', data)
    }, data)
  },
  getSeasonsData ({ commit }) {
    seasonsapi.getSeasonsData(data => {
      data.map((element) => {
        element.Season_Year = element.Season_Year,
        element.orangeCap = playerMockApi.getPlayerById(element.Orange_Cap_Id),
        element.purpleCap = playerMockApi.getPlayerById(element.Orange_Cap_Id),
        element.manOfTheSeries = playerMockApi.getPlayerById(element.Man_of_the_Series_Id)
      })
      commit('seasonsDataRecieved', data)
    })
  }
}

const mutations = {
  seasonsDataRecieved (state, data) {
    state.seasonData = data
  },
  matchesBySeasonRecieved (state, data) {
    state.matchesBySeasonData = data
  }
}

export default{
  state,
  getters,
  actions,
  mutations
}
