import { UPDATE_NAV_BAR } from "./mutation_type"

export default {
  [UPDATE_NAV_BAR]: (state, data) => {
    state.navBar = data;
  }
}