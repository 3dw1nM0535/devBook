import axios from "axios";

import { companyLogin } from "./authOrg";

// Registration action
export const register = data => dispatch =>
  axios.post("/api/company/auth", { data }).then(res => res.data.company)
    .then((company) => {
      dispatch(companyLogin(company));
    });

// Login action
export const coLogin = data => dispatch =>
  axios.post("/api/company/auth/companies", { data }).then(res => res.data.company)
    .then((company) => {
      dispatch(coLogin(company));
    });
