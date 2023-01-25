import mongoose from "mongoose";
import adminMessages from "../language/en/adminMessages.js";
const messages = adminMessages.schema.user;

const Users = mongoose.Schema({
  firstName: {
    type: String,
    require: [true, messages.firstName],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, messages.lastName],
    trim: true,
  },
  mobile: {
    type: String,
    required: [true, messages.mobile],
    maxLength: 10,
    trim: true,
  },
  email: {
    type: String,
    required: [true, messages.email],
    lowercase: true,
    trim: true,
  },
  city: {
    type: String,
    required: [true, messages.city],
  },
  password: {
    type: String,
    required: [true, messages.lastName],
  },
  address: {
    type: String,
    required: false,
    trim: true,
  },
  age: {
    type: Number,
    required: false,
    maxLength: 2,
  },
});
Users.virtual("fullName").get(function () {
  return this.firstName + this.lastName;
});

const UsersSchema = mongoose.model("temp_user", Users, "users");

export default UsersSchema;
