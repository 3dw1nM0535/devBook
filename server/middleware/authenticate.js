// Authentication middleware
import jwt from "jsonwebtoken";

import Attendee from "../models/Attendee";
import privateKeys from "../../config/private_keys";

export default (req, res, next) => {
  const header = req.headers.authorization;
  let token;

  if (header) token = header.split(" ")[1];

  if (token) {
    jwt.verify(token, privateKeys.SECRET_KEY, (err, decoded) => {
      if (err) {
        res.status(401).json({ errors: { global: "Invalid token" } });
      } else {
        Attendee.findOne({ email: decoded.email }).then((user) => {
          req.user = user;
          next();
        });
      }
    });
  } else {
    res.status(401).json({ errors: { global: "Invalid access" } });
  }
};
