import CheckboxGroup from '@/components/CheckboxGroup/CheckboxGroup.vue';

import store from '@/store';

export default {
  name: 'CheckboxList',

  components: {
    CheckboxGroup,
  },

  computed: {
    groups () {
      return store.getters['entities/groups/all']();
    },
  },
};
