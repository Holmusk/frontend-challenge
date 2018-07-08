import Vue from 'vue';

import copyToClipboard from 'copy-to-clipboard';

import axios from '../../utils/axios';
import '../../utils/axiosMock';

import config from '../../config';
import store from '../../store';

let nextGroupId = 1;
let nextItemId = 1;

const restoreState = (newState) => {
  if (!newState) {
    return;
  }

  const getMaxId = (value, item) => Math.max(value, item.id);

  const groups = [ ...newState.groups ];
  nextGroupId = groups.reduce(getMaxId, 0) + 1;
  store.dispatch('entities/groups/create', { data: groups });

  const items = [ ...newState.items ];
  nextItemId = items.reduce(getMaxId, 0) + 1;
  store.dispatch('entities/items/create', { data: items });

  store.commit('setSelectedGroupId', { groupId: newState.selectedGroupId || null });
};

Vue.component('Controls', {
  data: () => ({
    newGroupTitle: '',
    newItemTitle: '',
    serializedState: '',
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
          id: nextGroupId++,
          title: newGroupTitle,
          items: null,
        },
      });

      this.$data.newGroupTitle = '';
    },

    createItem () {
      const { newItemTitle } = this.$data;
      if (!newItemTitle) {
        return;
      }

      const { selectedGroupId } = store.getters;
      if (!selectedGroupId) {
        return;
      }

      store.dispatch('entities/items/insert', {
        data: {
          id: nextItemId++,
          groupId: selectedGroupId,
          title: newItemTitle,
          checked: false,
        },
      });

      this.$data.newItemTitle = '';
    },

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

  // @todo There should be a way to move template into .vue file and using
  // Vue.component at the same time.
  template: `
    <div>
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
    </div>
  `,
});

export default {};
