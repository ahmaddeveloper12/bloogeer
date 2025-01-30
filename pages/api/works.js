// import dbConnect from "../../lib/mongodb";
// import Work from "../../models/work";

// export default async function handler(req, res) {
//   await dbConnect();

//   if (req.method === "GET") {
//     try {
//       const works = await Work.find({});
//       return res.status(200).json(works);
//     } catch (error) {
//       return res.status(500).json({ message: error.message });
//     }
//   }

//   if (req.method === "POST") {
//     try {
//       const { title, image, salary, name, seat } = req.body;
//       const newWork = new Work({ title, image, salary, name, seat });
//       await newWork.save();
//       return res.status(201).json(newWork);
//     } catch (error) {
//       return res.status(500).json({ message: error.message });
//     }
//   }
// }













import dbConnect from "../../lib/mongodb";
import Work from "../../models/work";

export default async function handler(req, res) {
  await dbConnect();

  // Handle GET requests
  if (req.method === "GET") {
    try {
      // Get search query from request (if provided)
      const { search } = req.query;

      // If search query is provided, filter by title or name
      const filter = search
        ? { $or: [{ title: { $regex: search, $options: "i" } }, { name: { $regex: search, $options: "i" } }] }
        : {}; // If no search query, return all records

      // Fetch works from the database
      const works = await Work.find(filter);

      return res.status(200).json(works);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Handle POST requests
  if (req.method === "POST") {
    try {
      const { title, image, salary, name, seat } = req.body;
      const newWork = new Work({ title, image, salary, name, seat });
      await newWork.save();
      return res.status(201).json(newWork);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
