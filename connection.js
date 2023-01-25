import mongoose from "mongoose";
const url = "mongodb://localhost:27017/gym_management";
mongoose.set("strictQuery", false);
mongoose.connect(url);
console.log("MongoDB Server created");
