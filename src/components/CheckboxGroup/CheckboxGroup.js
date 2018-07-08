import CheckboxItem from '@/components/CheckboxItem/CheckboxItem.vue';

import store from '@/store';

export default {
  name: 'CheckboxGroup',

  components: {
    CheckboxItem,
  },

  props: {
    group: {
      // @todo Use VueTypes package for better type validation.
      type: Object,
      required: true,
    },
  },

  computed: {
    elementId () {
      return `group-${this.group.id}`;
    },

    selectedGroupId: {
      get () {
        return store.state.selectedGroupId;
      },

      set (value) {
        store.commit('setSelectedGroupId', { groupId: value });
      },
    },

    disabled () {
      // Haven't figured out a good way to make sure that all items in
      // storage are stored with correct type. E.g. selectedGroupId
      // might have been updated using group key (which is String)
      // insted of group id (which _should be_ Number).
      return Number(store.state.selectedGroupId) !== Number(this.group.id);
    },

    items () {
      return store.getters['entities/items/query']().where('groupId', this.group.id).get();
    },
  },
};
