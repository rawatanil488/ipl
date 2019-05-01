import matchesapi from '../../api/match-mock-api'
import teamsApi from '../../api/teams-mock-api'
import playerMockApi from '../../api/player-mock-api'

const state = {
  matchesData: []
}

const getters = {
  matchesDataGetter: state => state.matchesData
}

const actions = {
  getMatchesChartsData ({ commit }) {
    var arr = []
    arr[0] = ["Team", "Wins"]
    return new Promise((resolve) => {
      teamsApi.getTeamsData(data => {
        data.forEach(element => {
          var obj = []
          obj[0] = element.Team_Name
          obj[1] = matchesapi.getWinCountsById(element.Team_Id)
          arr.push(obj)
        })
        resolve(arr)
      })
    })
  },
  getMatchesData ({ commit }) {
    matchesapi.getMatchesData(data => {
      var arr = data.map(element => {
        element.team1 = teamsApi.getTeamById(element.Team_Name_Id),
        element.team2 = teamsApi.getTeamById(element.Opponent_Team_Id),
        element.winnerTeam = teamsApi.getTeamById(element.Match_Winner_Id),
        element.tossWinnerTeam = teamsApi.getTeamById(element.Toss_Winner_Id),
        element.manOfTheMatch = playerMockApi.getPlayerById(element.Man_Of_The_Match_Id),
        element.firstUmpire = playerMockApi.getPlayerById(element.First_Umpire_Id),
        element.secondUmpire = playerMockApi.getPlayerById(element.Second_Umpire_Id)
      })
      commit('matchesDataRecieved', data)
    })
  }
}

const mutations = {
  matchesDataRecieved (state, data) {
    state.matchesData = data
  }
}

export default{
  state,
  getters,
  actions,
  mutations
}
