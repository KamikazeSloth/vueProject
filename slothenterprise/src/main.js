
import Vue from 'vue'
import App from './App.vue'
import store from "../store/store";// Import the Auth0 configuration

// import { domain, clientId } from "../auth/config";

// Import the plugin here
// import { Auth0Plugin } from "../auth/index";


import {router} from './router'

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')