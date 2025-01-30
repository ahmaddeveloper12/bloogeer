// pages/api/getJobs.js

import connect from '../../lib/mongodb';
import Job from '../../models/job';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      await connect(); // Connect to MongoDB
      const jobs = await Job.find(); // Fetch all jobs from MongoDB
      res.status(200).json(jobs);
    } catch (error) {
      console.error('Error fetching job data:', error);
      res.status(500).json({ message: 'Error fetching data' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
