// import dbConnect from "../../lib/mongodb";
// import Dog from "../../models/dog";

// export default async function handler(req, res) {
//   await dbConnect();

//   // Handle GET requests to fetch all dog entries
//   if (req.method === "GET") {
//     try {
//       const dogs = await Dog.find({});
//       return res.status(200).json(dogs);
//     } catch (error) {
//       return res.status(500).json({ message: error.message });
//     }
//   }

//   // Handle POST requests to create a new dog entry
//   if (req.method === "POST") {
//     try {
//       const { name, imgUrl, desc, activity, activityImgUrl, author } = req.body;
      
//       const newDog = new Dog({
//         name,
//         imgUrl,
//         desc,
//         activity,
//         activityImgUrl,
//         author,
//       });
      
//       await newDog.save();
//       return res.status(201).json(newDog);
//     } catch (error) {
//       return res.status(500).json({ message: error.message });
//     }
//   }
// }








import dbConnect from "../../lib/mongodb";
import Dog from "../../models/dog";

export default async function handler(req, res) {
  await dbConnect();

  // Handle GET requests to fetch dog entries (with optional search)
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

      // Find all dogs or filter by search query
      const dogs = await Dog.find(searchQuery);

      return res.status(200).json(dogs);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Handle POST requests to create a new dog entry
  if (req.method === "POST") {
    try {
      const { name, imgUrl, desc, activity, activityImgUrl, author } = req.body;
      
      const newDog = new Dog({
        name,
        imgUrl,
        desc,
        activity,
        activityImgUrl,
        author,
      });

      await newDog.save();
      return res.status(201).json(newDog);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
