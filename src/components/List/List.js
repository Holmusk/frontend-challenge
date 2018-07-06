import Vue from 'vue';

import '../Group/Group.vue';

import store from '../../store';

Vue.component('List', {
  computed: {
    groups () {
      return store.getters['entities/groups/all']();
    },
  },

  template: `
    <div>
      <div v-for="group in groups" v-bind:key="group.id">
        <Group v-bind:group="group" />
      </div>
    </div>
  `,
});

export default {};
