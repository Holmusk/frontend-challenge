import Vue from 'vue';

import store from '../../store';

Vue.component('CreateGroupForm', {
  data: () => ({
    newGroupTitle: '',
  }),

  computed: {
    hasSelectedGroup () {
      return !!store.getters.selectedGroupId;
    },
  },

  methods: {
    createGroup () {
      const { newGroupTitle } = this.$data;
      if (!newGroupTitle) {
        return;
      }

      store.dispatch('entities/groups/insert', {
        data: {
          id: store.getters.nextGroupId,
          title: newGroupTitle,
          items: null,
        },
      });

      store.commit('incrementNextGroupId');

      this.$data.newGroupTitle = '';
    },
  },

  template: `
    <div>
      <input
        type="text"
        name="new-group-title"
        id="new-group-title"
        v-model.trim="newGroupTitle"
        placeholder="Group title"
      />
      <input type="button" value="Create group" v-on:click="createGroup" />
    </div>
  `,
});

export default {};
