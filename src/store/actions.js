import { Course } from "../services/apis/ApiService";

export const sendToken = ({ commit }, token) => {
  commit("SEND_TOKEN", token);
};

export const getUser = ({ commit }, user) => {
  commit("GET_USER", user);
};

export const logOut = ({ commit }) => {
  commit("LOG_OUT");
};

export const getRegisteredCourse = ({ commit }) => {
  Course.getListRegistered()
    .then(res => {
      let list = res.data.items.map(item => {
        return {
          title: item.title,
          short_title: item.short_title,
          href: "/courses/" + item.id,
          image: item.image
        };
      });

      commit("GET_REGISTERED_COURSE", list);
    })
    .catch(() => {
      commit("GET_REGISTERED_COURSE", []);
    });
};
