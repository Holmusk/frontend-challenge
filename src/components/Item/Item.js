import Vue from 'vue';

import store from '../../store';

Vue.component('Item', {
  props: {
    item: {
      // @todo Use VueTypes package for better type validation.
      type: Object,
      required: true,
    },

    disabled: {
      type: Boolean,
      required: true,
    },
  },

  computed: {
    elementId () {
      return `item-${this.item.id}`;
    },

    checked: {
      get () {
        return this.item.checked;
      },

      set (value) {
        store.dispatch('entities/items/update', {
          where: this.item.id,
          data: {
            checked: value,
          },
        });
      },
    },
  },

  template: `
    <div>
      <input
        type="checkbox"
        v-bind:name="elementId"
        v-bind:id="elementId"
        v-bind:value="item.id"
        v-bind:disabled="disabled"
        v-model="checked"
      />
      <label v-bind:for="elementId">{{item.title}}</label>
    </div>
  `,
});

export default {};
