import api from "./Api";
import state from "../../store/state";

export const Authen = {
  login(params) {
    return api.post({ url: "auth/login", data: params });
  },
  register(params) {
    return api.post({ url: "auth/register", data: params });
  }
};

export const Course = {
  getList(cateId) {
    return api.get({
      url: `course?category=${cateId}`,
      headers: { x_authorization: state.token }
    });
  }
};
