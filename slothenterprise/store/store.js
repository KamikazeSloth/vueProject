// store/index.js
 
import Vue from "vue";
import Vuex from "vuex";
 
Vue.use(Vuex);
 
export default new Vuex.Store({
    state: {
        test: "globaltAbc"
      },
 getters: {},
 mutations: {
    changeGlobal (state, payload) {
      state.test = payload
    }
 },
 actions: {}
});