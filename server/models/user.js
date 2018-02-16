// User data schema model
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import privateKeys from "../../config/private_keys";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    index: true,
    required: true,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
  confirmationToken: {
    type: String,
    default: "",
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

// Set password
UserSchema.methods.setPassword = function setPassword(password) {
  this.passwordHash = bcrypt.hashSync(password, 10);
};

// Sign credentials
UserSchema.methods.generateJWT = function generateJWT() {
  return jwt.sign({
    email: this.email,
    confirmed: this.confirmed,
  }, privateKeys.SECRET_KEY);
};

// Generate confirmation email token
UserSchema.methods.setConfirmationToken = function setConfirmationToken() {
  this.confirmationToken = this.generateJWT();
};

// Generate confirmation Url
UserSchema.methods.generateConfirmationUrl = function generateConfirmationUrl() {
  return `${privateKeys.HOST}/confirmation/${this.confirmationToken}`;
};

export default mongoose.model("User", UserSchema);
