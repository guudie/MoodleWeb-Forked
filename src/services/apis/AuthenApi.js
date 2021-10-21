import api from "./Api";

const AuthenApi = {};

AuthenApi.login = params => {
  return api.post({ url: "auth/login", data: params });
};

AuthenApi.register = () => {};

export default AuthenApi;
