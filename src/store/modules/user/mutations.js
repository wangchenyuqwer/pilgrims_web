import { UPDATE_USERINFO } from "../../mutation_type";

export default {
  [UPDATE_USERINFO]: (state, data) => {
    state.userInfo = data;
  }
}