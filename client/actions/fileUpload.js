// User file upload action
import axios from "axios";

import { uploadSuccess } from "./actionCreators";

export const uploadFile = data => dispatch =>
  axios.post("/api/files/upload", { data }).then(res => res.data.file)
    .then((file) => {
      dispatch(uploadSuccess(file));
    });
