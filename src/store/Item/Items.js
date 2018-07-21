
export default {
  state: {
    nextItemId: 1,
  },

  getters: {
    nextItemId: (state) => {
      return state.nextItemId;
    },
  },

  mutations: {
    setNextItemId: (state, { nextItemId }) => {
      state.nextItemId = nextItemId;
    },

    incrementNextItemId (state) {
      state.nextItemId++;
    },
  },
};
