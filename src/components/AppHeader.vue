<template>
  <div class="row Header-css">
    <div class="col-md-2 d-flex align-items-center justify-content-center">
      <b-link href="/#/" class="ml-2 mr-2 link-font">IPL Stats</b-link>
    </div>
    <div class="col-md-10 d-flex align-items-center justify-content-end">
      <b-link href="/#/" class="ml-2 mr-2 link-font">Home</b-link>
      <b-link href="/#/matches" class="ml-2 mr-2 link-font">Matches</b-link>
      <b-link href="/#/teams" class="ml-2 mr-2 link-font">Teams</b-link>
      <b-link href="/#/players" class="ml-2 mr-2 link-font">Players</b-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'header'
}
</script>
<style>
  .Header-css {
    background-color: rgb(3, 49, 30);
    height: 50px;
    color: #ffffff;
    margin: 0px;
  }
  .link-font {
    color: #ffffff;
  }
  a:hover {
    color: #ffffff;
    text-decoration: none;
  }
</style>
