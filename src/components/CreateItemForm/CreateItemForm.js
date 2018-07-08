import Vue from 'vue';

import store from '../../store';

Vue.component('CreateItemForm', {
  data: () => ({
    newItemTitle: '',
  }),

  computed: {
    hasSelectedGroup () {
      return !!store.getters.selectedGroupId;
    },
  },

  methods: {
    createItem () {
      const { newItemTitle } = this.$data;
      if (!newItemTitle) {
        return;
      }

      const {
        selectedGroupId,
        nextItemId,
      } = store.getters;

      if (!selectedGroupId) {
        return;
      }

      store.dispatch('entities/items/insert', {
        data: {
          id: nextItemId,
          groupId: selectedGroupId,
          title: newItemTitle,
          checked: false,
        },
      });

      store.commit('incrementNextItemId');

      this.$data.newItemTitle = '';
    },
  },

  template: `
    <div v-if="hasSelectedGroup">
      <input
        type="text"
        name="new-item-title"
        id="new-item-title"
        v-model.trim="newItemTitle"
        placeholder="Item title"
      />
      <input type="button" value="Create item" v-on:click="createItem" />
    </div>
  `,
});

export default {};
