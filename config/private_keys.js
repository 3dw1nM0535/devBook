// Private keys config

import dotenv from "dotenv";

dotenv.config();

module.exports = {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT,
  EMAIL_HOST: process.env.EMAIL_HOST,
  EMAIL_PORT: process.env.EMAIL_PORT,
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS,
  SECRET_KEY: process.env.SECRET_KEY,
  HOST: process.env.HOST,
  KEY: process.env.KEY,
};
