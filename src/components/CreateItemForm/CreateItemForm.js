import store from '@/store';

export default {
  name: 'CreateItemForm',

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

      const { selectedGroupId } = store.getters;
      if (!selectedGroupId) {
        return;
      }

      store.dispatch('entities/items/insert', {
        data: {
          id: store.getters['entities/items/nextItemId'],
          groupId: selectedGroupId,
          title: newItemTitle,
          checked: false,
        },
      });

      store.commit('entities/items/incrementNextItemId');

      this.$data.newItemTitle = '';
    },
  },
};
