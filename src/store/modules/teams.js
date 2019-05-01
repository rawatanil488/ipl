import teamsApi from '../../api/teams-mock-api'

const state = {
  getTeamsData: []
}

const getters = {
  teamsDataGetter: state => state.getTeamsData
}

const actions = {
  getTeamsData ({ commit }) {
    teamsApi.getTeamsData(data => {
      var arr = data.map(element => {
        element.value = element.Team_Id
        element.text = element.Team_Name + "(" + element.Team_Short_Code + ")"
      })
      commit('teamsDataRecieved', data)
    })
  }
}

const mutations = {
  teamsDataRecieved (state, data) {
    state.getTeamsData = data
  }
}

export default{
  state,
  getters,
  actions,
  mutations
}
