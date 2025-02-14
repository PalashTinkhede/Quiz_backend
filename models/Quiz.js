import mongoose, { Schema } from "mongoose";


const quizSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    timer: {
      type: Number, // in minutes
      required: true
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'Users',
      required: true
    }
  }, { timestamps: true });
  
export default mongoose.model('Quiz', quizSchema);