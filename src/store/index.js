import Vue from 'vue';
// Vuex requires some implementation of Promises. Let's include polyfill just in case.
import 'es6-promise/auto';
import Vuex from 'vuex';
import VuexORM from 'vuex-orm';

import Group from './Group';
import Item from './Item';

Vue.use(Vuex);

const database = new VuexORM.Database();

database.register(Group.item, Group.collection);
database.register(Item.item, Item.collection);

const store = new Vuex.Store({
  state: {
    selectedGroupId: null,
    nextGroupId: 1,
    nextItemId: 1,
  },

  getters: {
    selectedGroupId (state) {
      return state.selectedGroupId;
    },

    nextGroupId (state) {
      return state.nextGroupId;
    },

    nextItemId (state) {
      return state.nextItemId;
    },
  },

  mutations: {
    setSelectedGroupId (state, { groupId }) {
      state.selectedGroupId = groupId;
    },

    setNextGroupId (state, { nextGroupId }) {
      state.nextGroupId = nextGroupId;
    },

    setNextItemId (state, { nextItemId }) {
      state.nextItemId = nextItemId;
    },

    incrementNextGroupId (state) {
      state.nextGroupId++;
    },

    incrementNextItemId (state) {
      state.nextItemId++;
    },
  },

  plugins: [ VuexORM.install(database) ],
});

export default store;
