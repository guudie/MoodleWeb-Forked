import api from "./Api";
import state from "../../store/state";

export const Authen = {
  login(params) {
    return api.post({ url: "auth/login", data: params });
  },
  register(params) {
    return api.post({ url: "auth/register", data: params });
  },
  getUser() {
    return api.get({
      url: "user/profile",
      headers: { x_authorization: state.token }
    });
  },
  changePassword(params) {
    return api.post({
      url: "user/changePassword",
      headers: { x_authorization: state.token },
      data: params
    });
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
