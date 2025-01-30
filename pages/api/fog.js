// import dbConnect from "../../lib/mongodb";
// import Fog from "../../models/fog";

// export default async function handler(req, res) {
//   await dbConnect();

//   if (req.method === "GET") {
//     try {
//       const fogs = await Fog.find({});
//       return res.status(200).json(fogs);
//     } catch (error) {
//       return res.status(500).json({ message: error.message });
//     }
//   }

//   if (req.method === "POST") {
//     try {
//       const { topic, image, description, articleName, jobs, invention, gadgetName } = req.body;

//       const newFog = new Fog({
//         topic,
//         image,
//         description,
//         articleName,
//         jobs,
//         invention,
//         gadgetName,
//       });

//       await newFog.save();
//       return res.status(201).json(newFog);
//     } catch (error) {
//       return res.status(500).json({ message: error.message });
//     }
//   }
// }







import dbConnect from "../../lib/mongodb";
import Fog from "../../models/fog";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const { topic, description, gadgetName } = req.query; // Search filters from the query

      // Build the query object dynamically based on the provided search parameters
      const searchQuery = {};
      if (topic) {
        searchQuery.topic = { $regex: topic, $options: 'i' }; // case-insensitive search for 'topic'
      }
      if (description) {
        searchQuery.description = { $regex: description, $options: 'i' }; // case-insensitive search for 'description'
      }
      if (gadgetName) {
        searchQuery.gadgetName = { $regex: gadgetName, $options: 'i' }; // case-insensitive search for 'gadgetName'
      }

      const fogs = await Fog.find(searchQuery); // Apply search query if any parameters were passed
      return res.status(200).json(fogs);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  if (req.method === "POST") {
    try {
      const { topic, image, description, articleName, jobs, invention, gadgetName } = req.body;

      const newFog = new Fog({
        topic,
        image,
        description,
        articleName,
        jobs,
        invention,
        gadgetName,
      });

      await newFog.save();
      return res.status(201).json(newFog);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
