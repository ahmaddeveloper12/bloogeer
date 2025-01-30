import dbConnect from "../../lib/mongodb";
import Item from "../../models/items";

export async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const items = await Item.find({});
      return res.status(200).json(items);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  if (req.method === "POST") {
    try {
      const { imageUrl, description } = req.body;
      const newItem = new Item({ imageUrl, description });
      await newItem.save();
      return res.status(201).json(newItem);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export default handler;
