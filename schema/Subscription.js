import mongoose from "mongoose";
import adminMessages from "../language/en/adminMessages.js";
const messages = adminMessages.schema.subscription;

const Subscription = mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, messages.title],
      trim: true,
    },
    days: {
      type: Number,
      required: [true, messages.days],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, messages.price],
      trim: true,
    },
    subsId: {
      type: Number,
      required: [true, messages.subsId],
      trim: true,
    },
  },
  { timestamps: true }
);
const SubscriptionSchema = mongoose.model(
  "subscription",
  Subscription,
  "subscription"
);
export default SubscriptionSchema;
