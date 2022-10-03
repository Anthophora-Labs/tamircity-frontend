import NextStep from "../../../mixins/StepMixins";
const state = {
  brands: [],
};

const getters = {
  getStateBrands(state) {
    return state.brands;
  },
};

const mutations = {
  getBrand(state, payload) {
    state.brands = [];
    payload.forEach((item, index) => {
      let test = { id: item.id, text: item.name };
      state.brands.push(test);
    });
    NextStep("device", "brand");
  },
};

const actions = {
  getBrands({ commit, rootState }, payload) {
    rootState.selectedItems.device = payload;
    this.axios
      .get("/api/v1/brands/query?device_type_id=" + payload.id)
      .then((response) => {
        commit("getBrand", response.data.data);
      })
      .catch((e) => console.log(e));
  },
};

export default {
  getters,
  state,
  mutations,
  actions,
};
