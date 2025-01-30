// pages/api/getSubmissions.js

import connect from '../../lib/mongodb';
import Submit from '../../models/submit';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      await connect(); // Connect to MongoDB
      const submissions = await Submit.find(); // Fetch all data from MongoDB
      res.status(200).json(submissions);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ message: 'Error fetching data' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
