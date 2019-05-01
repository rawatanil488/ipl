<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view/>
    <AppFooter></AppFooter>
  </div>
</template>
<script>
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
 /* Import Bootstrap Vue Styles */
  @import 'bootstrap/dist/css/bootstrap.css';
  @import 'bootstrap-vue/dist/bootstrap-vue.css';
</style>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-bottom: 60px;
}
</style>
