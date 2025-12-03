import mongoose from "mongoose";
import app from "./app.js";

mongoose.connect("mongodb://127.0.0.1:27017/bugtracker").then(() => {
  console.log("MongoDB connected");
});

app.listen(5000, () => console.log("Server running on port 5000"));
