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
      url: `course?category=${cateId}`
      // headers: { x_authorization: state.token }
    });
  },
  getCategory() {
    return api.get({
      url: "course/categories"
    });
  },
  registerCourse(params) {
    return api.post({
      url: "course/register",
      headers: { x_authorization: state.token },
      data: params
    });
  },
  unRegisterCourse(params) {
    return api.post({
      url: "course/unregister",
      headers: { x_authorization: state.token },
      data: params
    });
  },
  getRegisteredCourse() {
    return api.get({
      url: "course/registered",
      headers: { x_authorization: state.token }
    });
  },
  createCourse(params) {
    return api.post({
      url: "course/create",
      headers: { x_authorization: state.token },
      data: params
    });
  },
  getCourseDetail(course_id) {
    return api.get({
      url: `course/detail?course=${course_id}`,
      headers: { x_authorization: state.token }
    });
  }
};
