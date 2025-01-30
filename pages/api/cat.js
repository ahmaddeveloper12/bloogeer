import dbConnect from "../../lib/mongodb";
import Cat from "../../models/cat"; // Ensure the model is correctly named (cat.js)

export default async function handler(req, res) {
  await dbConnect();

  // Handle GET requests to fetch cat entries (with optional search)
  if (req.method === "GET") {
    try {
      const { name, desc, activity } = req.query; // Search parameters from the query

      // Build the search query based on provided parameters
      const searchQuery = {};
      if (name) {
        searchQuery.name = { $regex: name, $options: 'i' }; // Case-insensitive search for name
      }
      if (desc) {
        searchQuery.desc = { $regex: desc, $options: 'i' }; // Case-insensitive search for desc
      }
      if (activity) {
        searchQuery.activity = { $regex: activity, $options: 'i' }; // Case-insensitive search for activity
      }

      // Fetch cats based on the search query
      const cats = await Cat.find(searchQuery);

      return res.status(200).json(cats);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Handle POST requests to create a new cat entry
  if (req.method === "POST") {
    try {
      const { name, imgUrl, desc, activity, activityImgUrl, author } = req.body;

      // Basic validation to ensure required fields are present
      if (!name || !imgUrl || !desc) {
        return res.status(400).json({ message: "Name, Image URL, and Description are required" });
      }

      const newCat = new Cat({
        name,
        imgUrl,
        desc,
        activity,
        activityImgUrl,
        author,
      });

      // Save the new cat entry to the database
      await newCat.save();
      return res.status(201).json(newCat);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Handle unsupported HTTP methods
  return res.status(405).json({ message: "Method Not Allowed" });
}
