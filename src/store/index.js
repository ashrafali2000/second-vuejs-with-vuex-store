import axios from "axios";
import { createStore } from "vuex";
const store = createStore({
  state: {
    items: [],
    loading: false, // Add loading state
  },
  mutations: {
    SET_Item(state, items) {
      state.items = items;
    },
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    async loadItems({ commit }) {
      commit("SET_LOADING", true); // Set loading to true when fetching starts
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        commit("SET_Item", response.data);
      } catch (error) {
        console.error(error);
      } finally {
        commit("SET_LOADING", false); // Set loading to false when fetching ends
      }
    },
  },
  getters: {
    items: (state) => state.items,
    isLoading: (state) => state.loading, // Add a getter for the loading state
  },
  modules: {},
});
export default store;
