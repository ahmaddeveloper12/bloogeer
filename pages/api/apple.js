import dbConnect from "../../lib/mongodb";
import Apple from "../../models/apple"; // Ensure the model name matches

export default async function handler(req, res) {
  await dbConnect();

  // Handle GET requests to fetch apple entries (with optional search)
  if (req.method === "GET") {
    try {
      const { name, desc, activity } = req.query;

      const searchQuery = {};
      if (name) {
        searchQuery.name = { $regex: name, $options: "i" };
      }
      if (desc) {
        searchQuery.desc = { $regex: desc, $options: "i" };
      }
      if (activity) {
        searchQuery.activity = { $regex: activity, $options: "i" };
      }

      const apples = await Apple.find(searchQuery);

      return res.status(200).json(apples);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Handle POST requests to create a new apple entry
  if (req.method === "POST") {
    try {
      const { name, imgUrl, desc, activity, activityImgUrl, author } = req.body;

      if (!name || !imgUrl || !desc) {
        return res.status(400).json({ message: "Name, Image URL, and Description are required" });
      }

      const newApple = new Apple({
        name,
        imgUrl,
        desc,
        activity,
        activityImgUrl,
        author,
      });

      await newApple.save();
      return res.status(201).json(newApple);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}
