import mongoose from "mongoose";
import adminMessages from "../language/en/adminMessages.js";
const messages = adminMessages.schema.notification;

const Notification = mongoose.Schema(
  {
    type: {
      type: String,
      require: [true, messages.title],
      trim: true,
    },
    title: {
      type: String,
      required: [true, messages.title],
      trim: true,
    },
    description: {
      type: String,
      required: [true, messages.description],
      trim: true,
    },
  },
  { timestamps: true }
);
const NotificationSchema = mongoose.model(
  "notification",
  Notification,
  "notification"
);
export default NotificationSchema;
