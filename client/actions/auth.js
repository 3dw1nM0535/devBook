// User login and signup actions

import axios from "axios";

import { USER_LOGGED_IN } from "../types";

// User login action creator
export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user,
});

// User Login action
export const login = credentials => dispatch =>
  axios.post("/api/auth", { credentials }).then(res => res.data.user)
    .then((user) => {
      localStorage.token = user.token;
      dispatch(userLoggedIn(user));
    });

// User Signup action
export const signup = data => dispatch =>
  axios.post("/api/auth/users", { data }).then(res => res.data.user)
    .then((user) => {
      localStorage.token = user.token;
      dispatch(userLoggedIn(user));
    });

// Forgot password action
export const forgotPasswordRequest = ({ email }) => () =>
  axios.post("/api/auth/forgot-password", { email });

// User reset password request action
export const resetPasswordRequest = data => () =>
  axios.post("/api/auth/reset-password", { data });

// Validate token action
export const validateToken = token => () =>
  axios.post("/api/auth/validate-token", { token });
