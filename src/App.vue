<template>

  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/signup">Form Val.</router-link> |
    <router-link to="/fetch">FetchAPI</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/fun">Fun</router-link>
  </nav>


  <router-view /> -->

 <header-component/>
 <router-view/>
</template>

<script>
import headerComponent from "@/components/header.vue";   
export default {
  components: {headerComponent}
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

/* nav {
  padding: 10px;
  z-index: 5;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */

/* .page-header{
  position: fixed;
  left: 0;
  top: 0; 
  right: 0; 
  padding: 9px;
  background-color: grey;
  border-radius: 10px;
} */
</style>
