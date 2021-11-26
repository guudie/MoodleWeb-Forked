export const SEND_TOKEN = (state, token) => {
  state.token = token;
  localStorage.setItem("access_token", token);
  console.log(state.token);
};
