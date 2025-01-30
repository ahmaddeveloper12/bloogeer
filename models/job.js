// models/job.js

import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Job || mongoose.model('Job', JobSchema);
