// models/submit.js

import mongoose from 'mongoose';

const SubmitSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Submit || mongoose.model('Submit', SubmitSchema);
