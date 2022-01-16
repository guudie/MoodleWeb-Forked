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
    console.log(state.token);
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
  },
  editProfile(params) {
    return api.post({
      url: "user/edit",
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
  getListRegistered(cateId) {
    return api.get({
      url: `course/registered`,
      headers: { x_authorization: state.token }
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
  },
  editCourseDetail(params) {
    return api.post({
      url: "course/edit",
      headers: { x_authorization: state.token },
      data: params
    });
  }
};

export const Topic = {
  getList() {
    return api.get({
      url: "topic"
    });
  },
  getTagsByFilter(filter) {
    return api.get({
      url: `topic?filter=${filter}`
    });
  },
  getTags() {
    return api.get({
      url: "topic/tags"
    });
  },
  getTagsByKey(key) {
    return api.get({
      url: `topic/tags?key=${key}`
    });
  },
  getDetail(id) {
    return api.get({
      url: `topic/detail?id=${id}`,
      headers: { x_authorization: state.token }
    });
  },
  create(params) {
    return api.post({
      url: `topic/create`,
      headers: { x_authorization: state.token },
      data: params
    });
  },
  edit(params) {
    return api.post({
      url: `topic/edit`,
      headers: { x_authorization: state.token },
      data: params
    });
  },
  getComments(id) {
    return api.get({
      url: `topic/comments?id=${id}`,
      headers: { x_authorization: state.token }
    });
  },
  comment(params) {
    return api.post({
      url: `topic/comment`,
      headers: { x_authorization: state.token },
      data: params
    });
  },
  editComment(params) {
    return api.post({
      url: `topic/edit-comment`,
      headers: { x_authorization: state.token },
      data: params
    });
  },

  deleteComment(params) {
    return api.post({
      url: `topic/delete-comment`,
      headers: { x_authorization: state.token },
      data: params
    });
  },

  like(id) {
    return api.post({
      url: `topic/like`,
      headers: { x_authorization: state.token },
      data: { topic_id: id }
    });
  },

  unlike(id) {
    return api.post({
      url: `topic/unlike`,
      headers: { x_authorization: state.token },
      data: { topic_id: id }
    });
  }
};
