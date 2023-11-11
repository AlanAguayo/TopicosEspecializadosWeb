<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <ContadorComponent/>
  <ApiComponent/>
</template>

<script>
import ContadorComponent from './components/ContadorComponent.vue'
import ApiComponent from './components/ApiComponent.vue';

export default {
  name: 'App',
  components: {
    ContadorComponent,
    ApiComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
