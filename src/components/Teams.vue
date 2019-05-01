<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 d-flex align-items-center justify-content-center page-title">
        Teams
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <b-table outlined :items="TeamsData" :fields="fields" :bordered=false></b-table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      fields: [
        {
          key: 'Team_Name',
          label: 'Team',
          sortable: false
        },
        {
          key: 'Team_Short_Code',
          label: 'Code',
          sortable: false
        }
      ]
    }
  },
  created () {
    this.$store.dispatch('getTeamsData')
  },
  computed: {
    ...mapGetters({
      TeamsData: 'teamsDataGetter'
    })
  }
}
</script>

<style>
  .page-title {
    height: 100px;
    font-size: 22px;
  }
</style>
