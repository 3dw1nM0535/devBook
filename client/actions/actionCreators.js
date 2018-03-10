// User login and signup actions
import { USER_LOGGED_IN, USER_LOGGED_OUT, UPLOAD_FAIL, UPLOAD_SUCCESS } from "./types";


// User login action creator
export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user,
});

// User logout action creator
export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT,
});

// User file upload action creator
export const uploadSuccess = data => ({
  type: UPLOAD_SUCCESS,
  data,
});

// User file upload error action creator
export const uploadFail = error => ({
  type: UPLOAD_FAIL,
  error,
});
