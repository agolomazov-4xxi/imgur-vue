import api from '../../api/imgur';
import qs from 'qs';
import {tail} from 'ramda';
import {router} from '../../main';

const state = {
  token: window.localStorage.getItem('imgur_token') || null,
};

const getters = {
  isLoggedIn: state => {
    return !!state.token;
  },
};

const actions = {
  login: () => {
    api.login();
  },
  finalizeLogin: ({commit}, hash) => {
    const sqString = tail(hash);
    const qsData = qs.parse(sqString);
    localStorage.setItem('imgur_token', qsData['access_token']);
    commit('setToken', qsData['access_token']);
    router.push('/');
  },
  logout: ({commit}) => {
    commit('setToken', null);
    localStorage.removeItem('imgur_token');
    router.push('/');
  },
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
