import mongoose, { Schema } from "mongoose";

const WorkSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  salary: { type: Number, required: true },
  name: { type: String, required: true },
  seat: { type: String, required: true },
});

const Work = mongoose.models.Work || mongoose.model("Work", WorkSchema);

export default Work;
