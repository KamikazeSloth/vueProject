<template>
  <div id="app">
    <NavigationBar></NavigationBar>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'
import{ init } from 'emailjs-com';
init("user_QCNObBG5B2zy4EIjqT97l");


export default {
components: {
  NavigationBar
  },
  name: 'App'
}
</script>

<style>
#app {
    background: linear-gradient(90deg,#360033 30%,#0b8793 100%);
    height: 100%;
    width: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
