import mongoose from "mongoose";


const User = mongoose.model('user', new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  dateCreated: { type: Date, default: Date.now },
  modCreated: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  modifiedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  isActive: { type: Boolean, default: true },
  //role: { type: mongoose.Schema.Types.ObjectId, ref: 'role' },
  role: { type: String, enum: ['admin', 'user'], default: 'user' }
}));
export { User }
