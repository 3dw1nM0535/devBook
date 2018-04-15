// User data schema model
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import uniqueValidator from "mongoose-unique-validator";

import privateKeys from "../config/private_keys";

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
  imageURL: {
    type: String,
    default: "https://res.cloudinary.com/dazskjikr/image/upload/v1520713650/363633-200.png",
  },
  dob: {
    type: Date,
    required: true,
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

// Return user's age
UserSchema.methods.age = function age() {
  return new Date().getFullYear() - new Date(this.dob).getFullYear();
};

// Token out user data credentials
UserSchema.methods.toJSON = function toJSON() {
  return {
    imageURL: this.imageURL,
    _id: this._id,
    confirmed: this.confirmed,
    fullname: this.fullName(),
    token: this.generateJWT(),
    age: this.age(),
  };
};

// Token out only user bio information
UserSchema.methods.bioData = function bioData() {
  return {
    firstname: this.firstname,
    lastname: this.lastname,
    email: this.email,
  };
};

// Sign credentials
UserSchema.methods.generateJWT = function generateJWT() {
  return jwt.sign({
    _id: this._id,
    imageURL: this.imageURL,
    fullname: this.fullName(),
    confirmed: this.confirmed,
    age: this.age(),
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
  }, privateKeys.SECRET_KEY, { expiresIn: "24h" });
};

// Uniqueness validation plugin
UserSchema.plugin(uniqueValidator, { message: "This email is already taken" });

export default mongoose.model("Attendee", UserSchema);
