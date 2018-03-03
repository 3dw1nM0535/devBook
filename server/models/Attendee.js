// User data schema model
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import uniqueValidator from "mongoose-unique-validator";

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

// Password validation
UserSchema.methods.isValidPassword = function isValidPassword(password) {
  return bcrypt.compareSync(password, this.passwordHash);
};

// Return fullname
UserSchema.methods.fullName = function fullName() {
  return `${
    this.firstname.charAt(0).toUpperCase() + this.firstname.substring(1)
  } ${
    this.lastname.charAt(0).toUpperCase() + this.lastname.substring(1)
  }`;
};

// Token out user data credentials
UserSchema.methods.toJSON = function toJSON() {
  return {
    email: this.email,
    confirmed: this.confirmed,
    fullname: this.fullName(),
    token: this.generateJWT(),
  };
};

// Sign credentials
UserSchema.methods.generateJWT = function generateJWT() {
  return jwt.sign({
    email: this.email,
    fullname: this.fullName(),
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

// Generate password reset link
UserSchema.methods.generatePasswordResetLink = function generatePasswordResetLink() {
  return `${privateKeys.HOST}/forgot-password/${this.generatePasswordResetToken()}`;
};

// Generate reset password token
UserSchema.methods.generatePasswordResetToken = function generatePasswordResetToken() {
  return jwt.sign({
    _id: this._id,
  }, privateKeys.SECRET_KEY);
};

// Uniqueness validation plugin
UserSchema.plugin(uniqueValidator, { message: "This email is already taken" });

export default mongoose.model("Attendee", UserSchema);
