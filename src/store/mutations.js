export const SEND_TOKEN = (state, token) => {
  state.token = token;
<<<<<<< HEAD
  localStorage.setItem("access_token", token);
  console.log(state.token);
};
=======
  console.log(state.token)
  localStorage.setItem("access_token", token);
};

export const GET_USER = (state, user) => {
  state.user = user;
  console.log(state.user)
}
>>>>>>> feature/user-infor
