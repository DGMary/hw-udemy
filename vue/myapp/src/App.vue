<template>
  <div id="app">
    <h1>{{firstName}}</h1>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  components: {
    // HelloWorld,
  },
  data: () => ({
    firstName: 'Mary',
    num: 2,
  }),
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
