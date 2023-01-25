import mongoose from "mongoose";
import adminMessages from "../language/en/adminMessages.js";
const messages = adminMessages.schema.branches;

const Branches = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, messages.name],
      trim: true,
    },
    city: {
      type: String,
      required: [true, messages.city],
      trim: true,
    },
    location: {
      type: String,
      required: [true, messages.location],
      trim: true,
    },
    branchId: {
      type: Number,
      required: [true, messages.branchId],
      trim: true,
    },
  },
  { timestamps: true }
);
const BranchesSchema = mongoose.model("branches", Branches, "branches");
export default BranchesSchema;
