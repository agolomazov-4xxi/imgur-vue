import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store';
import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList';
import UploadForm from './components/UploadForm';

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    {
      path: '/oauth/callback',
      component: AuthHandler,
      name: 'oauth',
    },
    {
      path: '/',
      component: ImageList,
      name: 'gallery',
    },
    {
      path: '/upload',
      component: UploadForm,
      name: 'upload',
    },
  ],
  mode: 'history',
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
