import api from "./Api";

const AuthenApi = {};

AuthenApi.login = params => {
  return api.post({ url: "auth/login", data: params });
};

AuthenApi.register = (params) => {
  return api.post({ url: "auth/register", data: params });
};

export default AuthenApi;
