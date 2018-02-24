import axios from "axios";

import { userLoggedIn, userLoggedOut, userConfirmation } from "./actionCreators";

// User Login action
export const login = credentials => dispatch =>
  axios.post("/api/auth", { credentials }).then(res => res.data.user)
    .then((user) => {
      localStorage.token = user.token;
      dispatch(userLoggedIn(user));
    });

// User logout action
export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch(userLoggedOut());
};

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

// Confirm Email action
export const confirmEmail = token => dispatch =>
  axios.post("/api/auth/confirmation", { token }).then(res => res.data.user)
    .then((user) => {
      localStorage.token = user.token;
      dispatch(userConfirmation(user));
    });
