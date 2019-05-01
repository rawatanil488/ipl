import playerMockApi from '../../api/player-mock-api'

const state = {
  playersData: []
}

const getters = {
  playersDataGetter: state => state.playersData
}

const actions = {
  getPlayersByBattingType () {
    var arr = []
    arr[0] = ["Player Type", "No. of players"]
    return new Promise((resolve) => {
      playerMockApi.getPlayersData(data => {
        arr[1] = ["Right Handed", playerMockApi.getRightPlayerCountData()]
        arr[2] = ["Left Handed", playerMockApi.getLeftPlayerCountData()]
        resolve(arr)
      })
    })
  },
  getPlayerByNationsData () {
    var arr = []
    arr[0] = ["Player Type", "No. of players"]
    return new Promise((resolve) => {
      playerMockApi.getPlayersData(data => {
        arr[1] = ["Indians", playerMockApi.getIndianPlayerCountData()]
        arr[2] = ["Foreigners", playerMockApi.getForeignPlayerCountData()]
      })
      resolve(arr)
    })
  },
  getPlayersData ({ commit }) {
    playerMockApi.getPlayersData(data => {
      commit('playersDataRecieved', data)
    })
  }
}

const mutations = {
  playersDataRecieved (state, data) {
    state.playersData = data
  }
}

export default{
  state,
  getters,
  actions,
  mutations
}
