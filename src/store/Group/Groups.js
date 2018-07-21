
export default {
  state: {
    nextGroupId: 1,
  },

  getters: {
    nextGroupId (state) {
      return state.nextGroupId;
    },
  },

  mutations: {
    setNextGroupId (state, { nextGroupId }) {
      state.nextGroupId = nextGroupId;
    },

    incrementNextGroupId (state) {
      state.nextGroupId++;
    },
  },
};
