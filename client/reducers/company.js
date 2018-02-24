import { COMPANY_LOGIN } from "../actions/types";

export default function company(state = {}, action = {}) {
  switch (action.type) {
    case COMPANY_LOGIN:
      // statements_1
      return action.company;
    default:
      // statements_def
      return state;
  }
}
