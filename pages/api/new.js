// pages/api/submit.js

import connect from '../../lib/mongodb';
import Job from '../../models/job';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, imageUrl } = req.body;

    try {
      await connect(); // Connect to MongoDB

      const newJob = new Job({
        title,
        imageUrl,
      });

      await newJob.save(); // Save to MongoDB
      res.status(201).json({ message: 'Job data saved successfully!' });
    } catch (error) {
      console.error('Error saving job data:', error);
      res.status(500).json({ message: 'Error saving data' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
