import mongoose from "mongoose";
import adminMessages from "../language/en/adminMessages.js";
const messages = adminMessages.schema.role;

const Role = mongoose.Schema({
  roleId: {
    type: Number,
    required: [true, messages.roleId],
    trim: true,
  },
  title: {
    type: String,
    required: [true, messages.title],
    trim: true,
  },
});

const RoleSchema = mongoose.model("temp_role", Role, "roles");
export default RoleSchema;
