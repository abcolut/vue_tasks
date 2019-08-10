<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> | 
      <router-link to="/insert">Insert new task</router-link> | 
      <router-link to="/list">List of tasks</router-link> | 
      <router-link to="/about">About</router-link> | 
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components:{},
  mounted(){
    //this.$store.commit('readSettings')
    this.$store.dispatch('readTasks')
    //this.$store.dispatch('user/getUserProgress')
  },
}
</script>

<style lang="scss">
h1, h2, h3{
  text-align:center;
}
section{
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  #text-align: center;
  color: #2c3e50;
  font-size:large;
}
#nav {
  text-align: center;
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
