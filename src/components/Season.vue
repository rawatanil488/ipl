<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 d-flex align-items-center justify-content-center page-title">
        Seasons
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <b-table outlined :items="seasonsData" :fields="fields" :bordered=false>
          <template slot="actionDiv" slot-scope="row">
            <button class="btn btn-primary" @click="showAllMatches(row.item)">Show all matches</button>
          </template>
        </b-table>
      </div>
    </div>
    <div class="matches-modal">
      <b-modal v-model="detailsModal" ok-only>
        <b-table outlined :items="matchesBySeasons" :fields="Matchfields" :bordered=false>
        </b-table>
        <div class="row d-flex align-items-center justify-content-center">
          <b-link href="/#/matches" class="">All Matches</b-link>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Season',
  data () {
    return {
      detailsModal: false,
      fields: [
        {
          key: 'Season_Year',
          label: 'Year',
          sortable: false
        },
        {
          key: 'orangeCap',
          label: 'Orange Cap Winner',
          sortable: false
        },
        {
          key: 'purpleCap',
          label: 'Purple Cap Winner',
          sortable: false
        },
        {
          key: 'manOfTheSeries',
          label: 'Man of the series',
          sortable: false
        },
        {
          key: 'actionDiv',
          label: '',
          sortable: false
        }
      ],
      Matchfields: [
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
        }
      ]
    }
  },
  methods: {
    showAllMatches (data) {
      this.$store.dispatch('getMatchesBySeason', data)
      this.detailsModal = true
    }
  },
  created () {
    this.$store.dispatch('getSeasonsData')
  },
  computed: {
    ...mapGetters({
      seasonsData: 'seasonsDataGetter',
      matchesBySeasons: 'matchesBySeasonDataGetter'
    })
  }
}
</script>
<style lang="scss">
  .page-title {
    height: 100px;
    font-size: 22px;
  }
  .matches-modal {
    .modal-dialog {
      .modal-header{
        display:none;
      }
      .modal-body{
        padding: 5px;
        width: 710px;
        background-color: #ffffff;
        height: 700px;
        overflow-x: auto;
      }
      .modal-footer{
        display:none;
      }
    }
  }
</style>