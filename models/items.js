import mongoose, { Schema } from "mongoose";

const ItemSchema = new Schema({
  imageUrl: { type: String, required: true },
  description: { type: String, required: true },
});

const Item = mongoose.models.Item || mongoose.model("Item", ItemSchema);

export default Item;
