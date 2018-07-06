import Vue from 'vue';

import store from '../../store';

Vue.component('Group', {
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
  },

  template: `
    <div>
      <input
        type="radio"
        name="group"
        v-bind:id="elementId"
        v-bind:value="group.id"
        v-model="selectedGroupId"
      />
      <label v-bind:for="elementId">{{group.title}}</label>
    </div>
  `,
});

export default {};
