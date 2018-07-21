import store from '@/store';

export default {
  name: 'CheckboxItem',

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
};
