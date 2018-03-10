// File reducer
import { UPLOAD_FAIL, UPLOAD_SUCCESS } from "../actions/types";

export default function file(state = {}, action = {}) {
  switch (action.type) {
    case UPLOAD_SUCCESS:
      return action.data;
    case UPLOAD_FAIL:
      return action.error;
    default:
      return state;
  }
}
