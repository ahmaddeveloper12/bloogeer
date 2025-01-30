import mongoose from 'mongoose';

const FormDataSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

export default mongoose.models.FormData || mongoose.model('FormData', FormDataSchema);
