// User login and signup actions

import axios from "axios";

import { USER_LOGGED_IN } from "../types";

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user,
});

export const login = credentials => dispatch =>
  axios.post("/api/auth", { credentials }).then(res => res.data.user)
    .then((user) => {
      localStorage.token = user.token;
      dispatch(userLoggedIn(user));
    });

export const signup = data => dispatch =>
  axios.post("/api/auth/users", { data }).then(res => res.data.user)
    .then((user) => {
      localStorage.token = user.token;
      dispatch(userLoggedIn(user));
    });

export const forgotPasswordRequest = ({ email }) => () =>
  axios.post("/api/auth/forgot-password", { email });

export const resetPasswordRequest = data => () =>
  axios.post("/api/auth/reset-password", { data });

export const validateToken = token => () =>
  axios.post("/api/auth/validate-token", { token });
