// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';

import 'vuetify/dist/vuetify.min.css';

import App from '@/components/App/App.vue';

const debug = process.env.NODE_ENV !== 'production';
Vue.config.productionTip = debug;
Vue.config.performance = debug;

Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
  el: '#app',

  components: {
    App,
  },

  template: '<App />',
});
