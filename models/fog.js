import mongoose, { Schema } from "mongoose";

const FogSchema = new Schema({
  topic: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  articleName: { type: String, required: true },
  jobs: { type: String, required: true },
  invention: { type: String, required: true },
  gadgetName: { type: String, required: true },
});

const Fog = mongoose.models.Fog || mongoose.model("Fog", FogSchema);

export default Fog;
