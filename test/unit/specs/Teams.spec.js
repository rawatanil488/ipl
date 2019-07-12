import Vuex from 'vuex'
import Teams from '../../../src/components/Teams'
import { shallow, createLocalVue } from 'vue-test-utils'
import { expect, assert } from 'chai'

const localVue = createLocalVue()
localVue.use(Vuex)

function prepareMockData () {
  let getters
  let actions
  let store

  const _Teams = [
    {
      "Team_Id": 1,
      "Team_Name": "Kolkata Knight Riders",
      "Team_Short_Code": "KKR"
    },
    {
      "Team_Id": 2,
      "Team_Name": "Royal Challengers Bangalore",
      "Team_Short_Code": "RCB"
    },
    {
      "Team_Id": 3,
      "Team_Name": "Chennai Super Kings",
      "Team_Short_Code": "CSK"
    }
  ]

  var getTeamsDatacallback = sinon.spy()

  actions = {
    getTeamsData: getTeamsDatacallback
  }

  getters = {
    teamsDataGetter: () => {
      return _Teams
    }
  }
  
  store = new Vuex.Store({
    state: {},
    actions,
    getters
  })

  return {
    store: store,
    getters: getters,
    getTeamsDatacallback: getTeamsDatacallback
  }
}


describe('Teams.vue', () => {
  describe('Store Tests', () => {
    var mockData = {}
    beforeEach(() => {
      mockData = prepareMockData()
    })
    
    it('Calls the store action "getTeamsData" on view load', () => {
      const wrapper = shallow(Teams, { store: mockData.store, localVue })
      assert(mockData.getTeamsDatacallback.called)
    })
  })

  describe('Events tests', function() {
    var mockData = {}
    beforeEach(function() {
      mockData = prepareMockData()
    })

    it('sets the actionDivVisible true', () => {
      const wrapper = shallow(Orders, { store: mockData.store, localVue })
      expect(wrapper.vm.ordersData[0].actionDivVisible).to.equal(false)
      wrapper.vm.setActionDivVisible(wrapper.vm.ordersData[0])
      expect(wrapper.vm.ordersData[0].actionDivVisible).to.equal(true)
    })
  })

  describe('Store tests', function () {
    var mockData = {}
    beforeEach(function () {
      mockData = prepareMockData()
    })

    it('calls store action "getOrdersTableData" on view load', () => {
      const wrapper = shallow(Orders, { store: mockData.store, localVue })
      assert(mockData.getOrdersTablecallback.called)
    })
  })
})
