import Vuex from 'vuex';
import Vue from 'vue';

import auth from './modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
  },
  strict: process.env.NODE_ENV !== 'production',
});
