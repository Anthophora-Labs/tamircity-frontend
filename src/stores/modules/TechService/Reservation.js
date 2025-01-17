import NextStep from "../../../mixins/StepMixins";

const state = {
  userInfo: {},
};

const getters = {};

const mutations = {
  createTechReservation(state, payload) {},
};

const actions = {
  createTechReservation({ commit, rootState }, payload) {
    rootState.selectedItems.extra = payload;
    NextStep("extraProduct", "reservation");
    // this.axios.get("/api/v1/extra-services")
    // .then(response => {
    //     console.log("extraService response : " + JSON.stringify(response.data));
    //     commit("getExtra", response.data.data);
    // })
    // .catch(e => console.log(e));
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
