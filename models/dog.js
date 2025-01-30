import mongoose, { Schema } from "mongoose";

const DogSchema = new Schema({
  name: { type: String, required: true },
  imgUrl: { type: String, required: true },
  desc: { type: String, required: true },
  activity: { type: String, required: true },
  activityImgUrl: { type: String, required: true },
  author: { type: String, required: true },
});

const Dog = mongoose.models.Dog || mongoose.model("Dog", DogSchema);

export default Dog;
