import mongoose from "mongoose";

const bugSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status: { type: String, default: "open" },
  description: String,
});

export default mongoose.model("Bug", bugSchema);
