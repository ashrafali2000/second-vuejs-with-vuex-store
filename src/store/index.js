import { createStore } from "vuex";
const store = createStore({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    Decrement(state) {
      state.count--;
    },
  },
  actions: {},
  getters: {},
  modules: {},
});
export default store;
