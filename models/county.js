import mongoose, { Schema } from "mongoose";

const CountySchema = new Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  netWorth: { type: Number, required: true },
  jobs: { type: String, required: true },
});

const County = mongoose.models.County || mongoose.model("County", CountySchema);

export default County;
