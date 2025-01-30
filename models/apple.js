import mongoose from "mongoose";

const appleSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    imgUrl: { type: String, required: true },
    desc: { type: String, required: true },
    activity: { type: String },
    activityImgUrl: { type: String },
    author: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Apple || mongoose.model("Apple", appleSchema);
