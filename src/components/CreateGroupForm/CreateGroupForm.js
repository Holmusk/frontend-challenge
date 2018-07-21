import store from '@/store';

export default {
  name: 'CreateGroupForm',

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
          id: store.getters['entities/groups/nextGroupId'],
          title: newGroupTitle,
          items: null,
        },
      });

      store.commit('entities/groups/incrementNextGroupId');

      this.$data.newGroupTitle = '';
    },
  },
};
