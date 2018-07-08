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
};
