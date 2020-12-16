
import Vue from 'vue'
import App from './App.vue'
import store from "../store/store";// Import the Auth0 configuration

import { domain, clientId } from "../auth/config";

import { Auth0Plugin } from "../auth/index";


import {router} from './router'

// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')

