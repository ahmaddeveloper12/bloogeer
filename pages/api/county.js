// import dbConnect from "../../lib/mongodb";
// import County from "../../models/county";

// export default async function handler(req, res) {
//   await dbConnect();

//   if (req.method === "GET") {
//     try {
//       const counties = await County.find({});
//       return res.status(200).json(counties);
//     } catch (error) {
//       return res.status(500).json({ message: error.message });
//     }
//   }

//   if (req.method === "POST") {
//     try {
//       const { title, image, description, netWorth, jobs } = req.body;

//       const newCounty = new County({
//         title,
//         image,
//         description,
//         netWorth,
//         jobs,
//       });
//       await newCounty.save();
//       return res.status(201).json(newCounty);
//     } catch (error) {
//       return res.status(500).json({ message: error.message });
//     }
//   }
// }







import dbConnect from "../../lib/mongodb";
import County from "../../models/county";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const { title, description, netWorth } = req.query; // Search parameters from the query

      // Build the search query based on provided parameters
      const searchQuery = {};
      if (title) {
        searchQuery.title = { $regex: title, $options: 'i' }; // Case-insensitive search for title
      }
      if (description) {
        searchQuery.description = { $regex: description, $options: 'i' }; // Case-insensitive search for description
      }
      if (netWorth) {
        searchQuery.netWorth = { $regex: netWorth, $options: 'i' }; // Case-insensitive search for netWorth
      }

      // Find counties based on search query or return all counties if no query is provided
      const counties = await County.find(searchQuery);

      return res.status(200).json(counties);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  if (req.method === "POST") {
    try {
      const { title, image, description, netWorth, jobs } = req.body;

      const newCounty = new County({
        title,
        image,
        description,
        netWorth,
        jobs,
      });

      await newCounty.save();
      return res.status(201).json(newCounty);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
