import Vue from 'vue';

import store from '../../store';

let nextGroupId = 1;

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
      const selectedGroupId = store.getters.selectedGroupId;

      if (selectedGroupId) {
        store.dispatch('entities/items/insert', {
          data: {
            id: nextGroupId++,
            groupId: selectedGroupId,
            title: this.$data.newGroupTitle,
            checked: false,
          },
        });
      }
    },
  },

  template: `
    <div>
      <div>
        <input type="text" name="new-group-title" id="new-group-title" v-model="newGroupTitle" />
        <input type="button" value="Create group" v-on:click="createGroup" />
      </div>
      <div v-if="hasSelectedGroup">
        <input type="text" name="new-item-title" id="new-item-title" v-model="newItemTitle" />
        <input type="button" value="Create item" v-on:click="createItem" />
      </div>
    </div>
  `,
});

export default {};
