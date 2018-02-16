// User sign authentication route

import express from "express";
import User from "../models/user";

import { sendConfirmationEmail } from "../mailer/authMailer";

const router = express.Router();

// Sign up route handler
router.post("/", (req, res) => {
  const {
    email,
    firstname,
    lastname,
    dob,
    password,
  } = req.body.data;
  const user = new User({
    email,
    firstname,
    lastname,
    dob,
  });
  user.setPassword(password);
  user.setConfirmationToken();
  user.save().then((userRecord) => {
    sendConfirmationEmail(userRecord);
    res.json({ user: userRecord });
  }).catch(err => res.status(400).json({ errors: err }));
});

export default router;
