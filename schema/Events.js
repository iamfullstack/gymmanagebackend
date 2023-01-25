import mongoose from "mongoose";
import adminMessages from "../language/en/adminMessages.js";
const messages = adminMessages.schema.events;

const Events = mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, messages.title],
      trim: true,
    },
    date: {
      type: Date,
      required: [true, messages.date],
      trim: true,
    },
    venue: {
      type: String,
      required: [true, messages.venue],
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
const EventsSchema = mongoose.model("events", Events, "events");
export default EventsSchema;
