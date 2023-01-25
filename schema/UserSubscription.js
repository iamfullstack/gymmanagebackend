import mongoose from "mongoose";
import adminMessages from "../language/en/adminMessages.js";
const messages = adminMessages.schema.userSubscription;

const UserSubscription = mongoose.Schema(
  {
    startAt: {
      type: Date,
      require: [true, messages.startAt],
      trim: true,
    },
    endAt: {
      type: Date,
      required: [true, messages.endAt],
      trim: true,
    },
    subsId: {
      type: Id,
      required: [true, messages.subsId],
      trim: true,
    },
    userId: {
      type: Number,
      required: [true, messages.userId],
      trim: true,
    },
  },
  { timestamps: true }
);
const UserSubscriptionSchema = mongoose.model(
  "userSubscription",
  UserSubscription,
  "userSubscription"
);
export default UserSubscriptionSchema;
