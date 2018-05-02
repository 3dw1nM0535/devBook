// Set authorization header for every request to and from the API
import axios from "axios";

export default (token = null) => {
  if (token) {
    axios.defaults.headers.common.authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.authorization;
  }
};
