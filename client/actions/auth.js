// User login and signup actions

import axios from "axios";

import { USER_LOGGED_IN } from "../types";

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user,
});

export const login = credentials => dispatch =>
  axios.post("/api/auth/login", { credentials }).then(res => res.data.user)
    .then((user) => {
      localStorage.token = user.token;
      dispatch(userLoggedIn(user));
    });

export const signup = data => dispatch =>
  axios.post("/api/auth/signup", { data }).then(res => res.data.user)
    .then((user) => {
      localStorage.token = user.token;
      dispatch(userLoggedIn(user));
    });
