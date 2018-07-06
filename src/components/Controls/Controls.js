import Vue from 'vue';

import store from '../../store';

let nextGroupId = 1;
let nextItemId = 1;

Vue.component('Controls', {
  data: () => ({
    newGroupTitle: '',
    newItemTitle: '',
  }),

  computed: {
    hasSelectedGroup () {
      return !!store.getters.selectedGroupId;
    },
  },

  methods: {
    createGroup () {
      if (!this.$data.newGroupTitle) {
        return;
      }

      store.dispatch('entities/groups/insert', {
        data: {
          id: nextGroupId++,
          title: this.$data.newGroupTitle,
          items: null,
        },
      });

      this.$data.newGroupTitle = '';
    },

    createItem () {
      if (!this.$data.newItemTitle) {
        return;
      }

      const selectedGroupId = store.getters.selectedGroupId;

      if (selectedGroupId) {
        store.dispatch('entities/items/insert', {
          data: {
            id: nextItemId++,
            groupId: selectedGroupId,
            title: this.$data.newItemTitle,
            checked: false,
          },
        });
      }
    },
  },

  template: `
    <div>
      <div>
        <input type="text" name="new-group-title" id="new-group-title" v-model.trim="newGroupTitle" />
        <input type="button" value="Create group" v-on:click="createGroup" />
      </div>
      <div v-if="hasSelectedGroup">
        <input type="text" name="new-item-title" id="new-item-title" v-model.trim="newItemTitle" />
        <input type="button" value="Create item" v-on:click="createItem" />
      </div>
    </div>
  `,
});

export default {};
