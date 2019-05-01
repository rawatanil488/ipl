<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 d-flex align-items-center justify-content-center page-title">
        Matches
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <GChart
          type="ColumnChart"
          :data="chartData"
          :options="chartOptions"
          class="chart-height"
        />  
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <b-table outlined :items="matchesData" :fields="fields" :bordered=false>
          <template slot="actionDiv" slot-scope="row">
            <button class="btn btn-primary" @click="showDetails(row.item)">Show Details</button>
          </template>
        </b-table>
      </div>
    </div>
    <b-modal v-model="detailsModal" ok-only>
      <div class="row">  
        <div class="col-md-4">
          Date: 
        </div>
        <div class="col-md-8">
          {{matchDetails.Match_Date}}
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          Team-1:
        </div>
        <div class="col-md-8">
        {{matchDetails.team1}}
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
        Team-2:
        </div>
        <div class="col-md-8">
          {{matchDetails.team2}}
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
        Season:
        </div>
        <div class="col-md-8">
          {{matchDetails.Season_Id}}
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          Venue:
        </div>
        <div class="col-md-8">
          {{matchDetails.Venue_Name}}
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          Toss Winner Team:
        </div>
        <div class="col-md-8">
          {{matchDetails.tossWinnerTeam}}
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          Toss Decision:
        </div>
        <div class="col-md-8">
          {{matchDetails.Toss_Decision}}
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          Superover:
        </div>
        <div class="col-md-8">
          {{matchDetails.IS_Superover}}
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          Duckworthlewis:
        </div>
        <div class="col-md-8">
          {{matchDetails.Is_DuckWorthLewis}}
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          Win-type:
        </div>
        <div class="col-md-8">
          {{matchDetails.Win_Type}}
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          Won by runs/wickets:
        </div>
        <div class="col-md-8">
          {{matchDetails.Won_By}}
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          Winning Team
        </div>
        <div class="col-md-8">
          {{matchDetails.winnerTeam}}
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          Man Of The Match
        </div>
        <div class="col-md-8">
         {{matchDetails.manOfTheMatch}}
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          First Umpire
        </div>
        <div class="col-md-8">
          {{matchDetails.firstUmpire}}
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          Second Umpire
        </div>
        <div class="col-md-8">
          {{matchDetails.secondUmpire}}
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          City
        </div>
        <div class="col-md-8">
          {{matchDetails.City_Name}}
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          Country
        </div>
        <div class="col-md-8">
          {{matchDetails.Host_Country}}
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { GChart } from "vue-google-charts"
export default {
  name: 'Matches',
  components: {
    GChart
  },
  data () {
    return {
      chartData: [],
      chartOptions: {
        chart: {
          title: "Team Performance",
          subtitle: ""
        }
      },
      detailsModal: false,
      matchDetails: {
        Match_Date: '',
        team1: '',
        team2: '',
        season: '',
        Venue_Name: '',
        tossWinnerTeam: '',
        Toss_Decision: '',
        IS_Superover: '',
        Is_DuckWorthLewis: '',
        Win_Type: '',
        Won_By: '',
        winnerTeam: '',
        manOfTheMatch: '',
        firstUmpire: '',
        secondUmpire: '',
        City_Name: '',
        Host_Country: ''
      },
      fields: [
        {
          key: 'Match_Date',
          label: 'Date',
          sortable: false
        },
        {
          key: 'Venue_Name',
          label: 'Venue',
          sortable: false
        },
        {
          key: 'City_Name',
          label: 'City',
          sortable: false
        },
        {
          key: 'Host_Country',
          label: 'Country',
          sortable: false
        },
        {
          key: 'team1',
          label: 'Team1',
          sortable: false
        },
        {
          key: 'team2',
          label: 'Team2',
          sortable: false
        },
        {
          key: 'actionDiv',
          label: '',
          sortable: false
        }
      ]
    }
  },
  methods: {
    showDetails (data) {
      this.matchDetails.Match_Date = data.Match_Date
      this.matchDetails.team1 = data.team1
      this.matchDetails.Season_Id = data.Season_Id
      this.matchDetails.team2 = data.team2
      this.matchDetails.Venue_Name = data.Venue_Name
      this.matchDetails.tossWinnerTeam = data.tossWinnerTeam
      this.matchDetails.Toss_Decision = data.Toss_Decision
      this.matchDetails.IS_Superover = data.IS_Superover
      this.matchDetails.Is_DuckWorthLewis = data.Is_DuckWorthLewis
      this.matchDetails.Win_Type = data.Win_Type
      this.matchDetails.Won_By = data.Won_By
      this.matchDetails.winnerTeam = data.winnerTeam
      this.matchDetails.manOfTheMatch = data.manOfTheMatch
      this.matchDetails.firstUmpire = data.firstUmpire
      this.matchDetails.secondUmpire = data.secondUmpire
      this.matchDetails.City_Name = data.City_Name
      this.matchDetails.Host_Country = data.Host_Country
      this.detailsModal = true
    }
  },
  created () {
    this.$store.dispatch('getMatchesData'),
    this.$store.dispatch('getMatchesChartsData').then((res) => {
      this.chartData = res
    })
  },
  computed: {
    ...mapGetters({
      matchesData: 'matchesDataGetter'
    })
  }
}
</script>
<style lang="scss">
  .page-title {
    height: 100px;
    font-size: 22px;
  }
  .chart-height{
    height: 500px !important;
  }
</style>
