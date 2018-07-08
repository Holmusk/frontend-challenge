import Vue from 'vue';

import '@/components/Item/Item.vue';

import store from '@/store';

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

      <div>
        <div v-for="item in items" v-bind:key="item.id">
          <Item
            v-bind:item="item"
            v-bind:disabled="disabled"
          />
        </div>
      </div>
    </div>
  `,
});

export default {};
