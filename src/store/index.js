import Vue from 'vue';
// Vuex requires some implementation of Promises. Let's include polyfill just in case.
import 'es6-promise/auto';
import Vuex from 'vuex';
import VuexORM from '@vuex-orm/core';

import Group from '../Group';
import Item from '../Item';

Vue.use(Vuex);

const database = new VuexORM.Database();

database.register(Group.item, Group.collection);
database.register(Item.item, Item.collection);

const store = new Vuex.Store({
  state: {
    selectedGroup: null,
  },

  plugins: [ VuexORM.install(database) ],
});

export default store;
