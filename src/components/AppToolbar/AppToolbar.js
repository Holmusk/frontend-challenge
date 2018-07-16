
export default {
  name: 'AppToolbar',

  props: {
    bgColor: {
      type: String,
      default: 'white',
    },

    onDrawerToggleClick: {
      type: Function,
      default: null,
    },

    dark: {
      type: Boolean,
      default: false,
    },
  },
};
