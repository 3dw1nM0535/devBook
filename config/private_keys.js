// Private keys config

import dotenv from "dotenv";

dotenv.config();

module.exports = {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT,
};
