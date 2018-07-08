import Vue from 'vue';

import copyToClipboard from 'copy-to-clipboard';

import axios from '@/utils/axios';
import '@/utils/axiosMock';

import config from '@/config';
import store from '@/store';

const restoreState = (newState) => {
  if (!newState) {
    return;
  }

  const getMaxId = (value, item) => Math.max(value, item.id);

  const groups = [ ...newState.groups ];
  store.dispatch('entities/groups/create', { data: groups });
  store.commit('setNextGroupId', { nextGroupId: groups.reduce(getMaxId, 0) + 1 });

  const items = [ ...newState.items ];
  store.dispatch('entities/items/create', { data: items });
  store.commit('setNextItemId', { nextItemId: items.reduce(getMaxId, 0) + 1 });

  store.commit('setSelectedGroupId', { groupId: newState.selectedGroupId || null });
};

Vue.component('ManageStateForm', {
  data: () => ({
    serializedState: '',
  }),

  methods: {
    setState () {
      const { serializedState } = this.$data;
      if (!serializedState) {
        return;
      }

      let newState;
      try {
        newState = JSON.parse(serializedState);
      }
      catch (error) {
        // @todo Display nice message.
        console.error(error);
      }

      restoreState(newState);
    },

    copyState () {
      const state = {
        selectedGroupId: store.getters.selectedGroupId,
        groups: store.getters['entities/groups/all'](),
        items: store.getters['entities/items/all'](),
      };

      const copySuccess = copyToClipboard(JSON.stringify(state));
      if (!copySuccess) {
        // Sadly, this package isn't verbose enough to determine what exactly went wrong.
        console.error('Failed to copy serialized data to clipboard due to browser restrictions (probably)');
      }
    },

    loadState () {
      axios
        .get(config.dataUri)
        .then((response) => restoreState(response.data))
        .catch(console.error);
    },
  },

  template: `
    <div>
      <textarea
        name="serialized-state"
        id="serialized-state"
        v-model="serializedState"
        placeholder="Please paste state here in JSON format"
      >
      </textarea>

      <input type="button" value="Set state" v-on:click="setState" />
      <input type="button" value="Copy state to clipboard" v-on:click="copyState" />
      <input type="button" value="Load state" v-on:click="loadState" />
    </div>
  `,
});

export default {};
