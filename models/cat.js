import mongoose, { Schema } from "mongoose";

const catSchema = new Schema({
  name: { type: String, required: true },
  imgUrl: { type: String, required: true },
  desc: { type: String, required: true },
  activity: { type: String, required: true },
  activityImgUrl: { type: String, required: true },
  author: { type: String, required: true },
});

const cat = mongoose.models.cat || mongoose.model("cat", catSchema);

export default cat;
