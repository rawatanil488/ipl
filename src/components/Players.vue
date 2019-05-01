<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 d-flex align-items-center justify-content-center page-title">
        All Players
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <GChart
          type="PieChart"
          :data="playerNationsChartData"
          :options="chartOptions"
          class="chart-height"
        />  
      </div>
      <div class="col-md-6">
        <GChart
          type="PieChart"
          :data="playersBattingChartData"
          class="chart-height"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <b-table outlined :items="playersData" :fields="fields" :bordered=false></b-table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { GChart } from "vue-google-charts"
export default {
  name: 'Player',
  components: {
    GChart
  },
  data () {
    return {
      playersBattingChartData: [],
      playerNationsChartData: [],
      chartOptions: {
        chart: {
          title: "Player Performance",
          subtitle: ""
        }
      },
      fields: [
        {
          key: 'Player_Name',
          label: 'Name',
          sortable: false
        },
        {
          key: 'Batting_Hand',
          label: 'Batting Hand',
          sortable: false
        },
        {
          key: 'Bowling_Skill',
          label: 'Bowling Skill',
          sortable: false
        },
        {
          key: 'Country',
          label: 'Country',
          sortable: false
        }
      ]
    }
  },
  created () {
    this.$store.dispatch('getPlayersData')
    this.$store.dispatch('getPlayerByNationsData').then((res) => { 
      this.playerNationsChartData = res
    })
    this.$store.dispatch('getPlayersByBattingType').then((res) => {
      this.playersBattingChartData = res
      console.log(res)
    })
  },
  computed: {
    ...mapGetters({
      playersData: 'playersDataGetter'
    })
  }
}
</script>
<style>
  .chart-height {
    height: 500px;
  }
  .page-title {
    height: 100px;
    font-size: 22px;
  }
</style>
