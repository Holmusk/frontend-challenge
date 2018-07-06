import Vue from 'vue';

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
  },

  template: `
    <div>
      <input
        type="checkbox"
        v-bind:name="elementId"
        v-bind:id="elementId"
        v-bind:value="item.id"
        v-model="item.checked"
      />
      <label v-bind:for="elementId">{{item.title}}</label>
    </div>
  `,
});

export default {};
