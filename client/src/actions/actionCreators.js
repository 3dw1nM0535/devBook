// User login and signup actions
import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./types";


// User login action creator
export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user,
});

// User logout action creator
export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT,
});
