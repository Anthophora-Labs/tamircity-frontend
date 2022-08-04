import NextStep from "../../mixins/StepMixins";
const state = {
  brands: [],

}

const getters = {
  getStateBrands(state) {
    return state.brands;
  },
};

const mutations = {
  getBrand(state, payload) {
    state.brands = [];
    payload.forEach((item, index) => {
      let test = { id: index, text: item.Text }
      state.brands.push(test)
    })
    NextStep("device", "brand");
  },

};

const actions = {
  getBrands({ commit, rootState }, payload) {
    console.log("getBrands action worked " + payload.id + " " + payload.text)
    console.log("Rootstate SelectedItem device : " + rootState.selectedItems.device)
    // rootState.tabDisabled.brand = false;
    let brandList = [{ Id: 1, Text: "Apple" }, { Id: 2, Text: "Samsung" }]
    commit("getBrand", brandList);
    // axios.get("http://localhost:8080/api/v1/brand?device_type_id="+ payload.device_type_id)
    // .then(response => {
    //     console.log("brand response : " + response.data);
    //     commit("getBrand", response.data);
    // })
    // .catch(e => console.log(e));  

  },

};

// function StepGuide(removeElementId, addElementId) {
//   let remove_element = "#" + removeElementId;
//   let remove_element_tab = "#" + removeElementId;
//   let add_element = "#" + addElementId;
//   let add_element_tab = "#" + addElementId;

//   $(remove_element).removeAttr("disabled")
//   $(remove_element).removeClass("active")
//   $(remove_element_tab).removeClass("active show")
//   $(add_element).addClass("active")
//   $(add_element_tab).addClass("active show")
// }

export default {
  getters,
  state,
  mutations,
  actions,
};